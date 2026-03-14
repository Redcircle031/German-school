#!/usr/bin/env node

/**
 * Asset Organizer Script v2
 * 
 * Improved version that uses article folder names for better categorization
 * 
 * Usage: node scripts/organize-assets-v2.js
 */

const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const cliProgress = require('cli-progress');

const copyFile = promisify(fs.copyFile);
const mkdir = promisify(fs.mkdir);
const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);

// Configuration
const CONFIG = {
  sourceDir: path.join(__dirname, '../wbs-extract'),
  targetDir: path.join(__dirname, '../public/images'),
  articlesDir: path.join(__dirname, '../wbs-extract/articles'),
};

// Improved category keywords from Polish/German article names
const CATEGORY_KEYWORDS = {
  news: ['aktualnosci', 'aktuelles', 'news', 'ogloszenia', 'informacje'],
  events: ['wydarzenia', 'events', 'veranstaltung', 'karnawal', 'festyn', 'dzien', 'uroczyst', 'obchody', 'rocznica'],
  campus: ['szkola', 'schule', 'campus', 'budynek', 'klasa', 'sala', 'biblioteka'],
  people: ['uczniowie', 'schuler', 'students', 'teachers', 'nauczyciele', 'kadra', 'zespol'],
  programs: ['projekt', 'project', 'akademia', 'academy', 'program', 'konkurs', 'olimpiada'],
  sports: ['sport', 'pilkarska', 'football', 'mistrzostw', 'turniej', 'zawody', 'medal'],
  music: ['muzyczna', 'musik', 'music', 'chor', 'schelf', 'orkiestra', 'koncert'],
  achievements: ['sukces', 'erfolg', 'nagroda', 'award', 'medal', ' zwyciez', 'miejsce'],
  trips: ['wycieczka', 'fahrt', 'trip', 'exchange', 'austausch', 'wyjazd'],
  logos: ['logo', 'logotyp', 'sponsor', 'partner', 'herb'],
};

/**
 * Extract category from article folder name
 */
function categorizeArticleFolder(folderName) {
  const lower = folderName.toLowerCase();
  
  // Remove numbers and special chars from start
  const cleanName = lower.replace(/^[\d_]+/, '');
  
  // Check for category keywords
  for (const [category, keywords] of Object.entries(CATEGORY_KEYWORDS)) {
    if (keywords.some(keyword => cleanName.includes(keyword))) {
      return category;
    }
  }
  
  // Default to news for general articles
  return 'news';
}

/**
 * Generate slug-friendly filename
 */
function generateFilename(articleSlug, imageName, index = 0) {
  const ext = path.extname(imageName);
  const base = path.basename(imageName, ext);
  
  // Use article slug as prefix for better organization
  const articlePrefix = articleSlug.substring(0, 30).replace(/[^a-z0-9]+/g, '-');
  const imgBase = base.replace(/[^a-z0-9]+/g, '-').substring(0, 30);
  
  return `${articlePrefix}-${imgBase}${index > 0 ? `-${index}` : ''}${ext}`;
}

/**
 * Copy and organize a single image
 */
async function organizeImage(sourcePath, targetPath) {
  try {
    await mkdir(path.dirname(targetPath), { recursive: true });
    await copyFile(sourcePath, targetPath);
    return true;
  } catch (error) {
    return false;
  }
}

/**
 * Main organization function
 */
async function organizeAssets() {
  console.log('🗂️  Starting asset organization (v2 - improved)...\n');
  
  const stats = {
    total: 0,
    organized: 0,
    errors: 0,
    byCategory: {},
  };
  
  // Clean existing organized images (optional)
  if (fs.existsSync(CONFIG.targetDir)) {
    console.log('🧹 Cleaning existing organized images...');
    const categories = ['news', 'events', 'campus', 'people', 'programs', 'sports', 'music', 'achievements', 'trips', 'logos', 'other'];
    for (const cat of categories) {
      const catDir = path.join(CONFIG.targetDir, cat);
      if (fs.existsSync(catDir)) {
        fs.rmSync(catDir, { recursive: true, force: true });
      }
    }
  }
  
  // Organize images from articles
  console.log('📁 Organizing article images by article category...\n');
  
  if (fs.existsSync(CONFIG.articlesDir)) {
    const articleFolders = await readdir(CONFIG.articlesDir);
    
    const progressBar = new cliProgress.SingleBar({
      format: 'Progress |{bar}| {percentage}% | {value}/{total} articles',
    }, cliProgress.Presets.shades_classic);
    
    progressBar.start(articleFolders.length, 0);
    
    for (const articleFolder of articleFolders) {
      const articlePath = path.join(CONFIG.articlesDir, articleFolder);
      
      try {
        const articleStat = await stat(articlePath);
        if (!articleStat.isDirectory()) continue;
        
        // Determine category from article folder name
        const category = categorizeArticleFolder(articleFolder);
        const targetCategoryDir = path.join(CONFIG.targetDir, category);
        
        // Copy images from this article
        const imagesPath = path.join(articlePath, 'images');
        if (fs.existsSync(imagesPath)) {
          const images = await readdir(imagesPath);
          
          for (let j = 0; j < images.length; j++) {
            const imageName = images[j];
            const sourceImagePath = path.join(imagesPath, imageName);
            const targetImagePath = path.join(targetCategoryDir, generateFilename(articleFolder, imageName, j));
            
            const success = await organizeImage(sourceImagePath, targetImagePath);
            if (success) {
              stats.organized++;
              stats.byCategory[category] = (stats.byCategory[category] || 0) + 1;
            } else {
              stats.errors++;
            }
          }
        }
        
        stats.total++;
        progressBar.update(articleFolders.filter(f => fs.statSync(path.join(CONFIG.articlesDir, f)).isDirectory()).indexOf(articleFolder) + 1);
      } catch (error) {
        stats.errors++;
      }
    }
    
    progressBar.stop();
  }
  
  // Organize standalone images
  console.log('\n\n📁 Organizing standalone images...');
  
  const imageDirs = [
    { path: 'images/gallery', category: 'events' },
    { path: 'images/icons', category: 'logos' },
    { path: 'images/other', category: 'campus' },
  ];
  
  for (const { path: imageDir, category } of imageDirs) {
    const sourcePath = path.join(CONFIG.sourceDir, imageDir);
    if (!fs.existsSync(sourcePath)) continue;
    
    const targetPath = path.join(CONFIG.targetDir, category);
    const images = await readdir(sourcePath);
    
    console.log(`  Processing ${imageDir} (${images.length} images)...`);
    
    for (const image of images) {
      const sourceImagePath = path.join(sourcePath, image);
      const targetImagePath = path.join(targetPath, `standalone-${image}`);
      
      await organizeImage(sourceImagePath, targetImagePath);
      stats.organized++;
      stats.byCategory[category] = (stats.byCategory[category] || 0) + 1;
    }
  }
  
  // Print summary
  console.log('\n✅ Asset organization complete!\n');
  console.log('📊 SUMMARY:');
  console.log('═'.repeat(60));
  console.log(`Total articles:       ${stats.total}`);
  console.log(`Images organized:     ${stats.organized}`);
  console.log(`Errors:               ${stats.errors}`);
  console.log('\nBy category:');
  
  // Sort categories by count
  const sortedCategories = Object.entries(stats.byCategory)
    .sort((a, b) => b[1] - a[1]);
  
  for (const [cat, count] of sortedCategories) {
    const percentage = Math.round((count / stats.organized) * 100);
    console.log(`  ${cat.padEnd(15)} ${count.toString().padStart(4)}  (${percentage}%)`);
  }
  
  console.log(`\nOutput directory:     ${CONFIG.targetDir}`);
  console.log('═'.repeat(60));
  
  // Create manifest
  const manifest = {
    generatedAt: new Date().toISOString(),
    totalImages: stats.organized,
    byCategory: Object.fromEntries(sortedCategories),
    version: '2.0-improved',
  };
  
  fs.writeFileSync(
    path.join(CONFIG.targetDir, 'manifest.json'),
    JSON.stringify(manifest, null, 2)
  );
  
  console.log('\n✓ Manifest saved to public/images/manifest.json\n');
  
  // Check if categorization is good
  const maxInOneCategory = Math.max(...Object.values(stats.byCategory));
  const maxPercentage = (maxInOneCategory / stats.organized) * 100;
  
  if (maxPercentage > 70) {
    console.log('⚠️  Warning: More than 70% of images are in one category.\n   This might indicate the categorization needs improvement.\n');
  } else {
    console.log('✅ Categorization looks good! Images are well distributed.\n');
  }
}

// Run organization
if (require.main === module) {
  organizeAssets().catch(error => {
    console.error('❌ Error during organization:', error.message);
    process.exit(1);
  });
}

module.exports = { organizeAssets };
