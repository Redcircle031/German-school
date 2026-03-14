#!/usr/bin/env node

/**
 * Asset Organizer Script
 * 
 * Organizes all images from wbs-extract into public/images/
 * Creates organized folder structure by content type
 * 
 * Usage: node scripts/organize-assets.js
 */

const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const cliProgress = require('cli-progress');

const copyFile = promisify(fs.copyFile);
const mkdir = promisify(fs.mkdir);
const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);
const exists = promisify(fs.exists);

// Configuration
const CONFIG = {
  sourceDir: path.join(__dirname, '../wbs-extract'),
  targetDir: path.join(__dirname, '../public/images'),
  articlesDir: path.join(__dirname, '../wbs-extract/articles'),
};

// Category mapping for images
const CATEGORY_KEYWORDS = {
  news: ['aktualnosci', 'aktuelles', 'news', 'ogloszenia'],
  events: ['wydarzenia', 'events', 'veranstaltung', 'karnawal', 'konkurs', 'festyn'],
  campus: ['szkola', 'schule', 'campus', 'building', 'klasa', 'sala'],
  people: ['uczniowie', 'schuler', 'students', 'teachers', 'nauczyciele', 'person'],
  programs: ['akademia', 'academy', 'projekt', 'project', 'biblioteka', 'library'],
  sports: ['sport', 'pilkarska', 'football', 'akademia'],
  music: ['muzyczna', 'musik', 'music', 'chor', 'schelf'],
  logos: ['logo', 'logotyp', 'sponsor', 'partner'],
};

/**
 * Determine category from file path and metadata
 */
function categorizeImage(filePath, articleCategory = null) {
  const lowerPath = filePath.toLowerCase();
  
  // Check article category first
  if (articleCategory) {
    if (['aktualnosci', 'news'].includes(articleCategory)) return 'news';
    if (['wydarzenia', 'events'].includes(articleCategory)) return 'events';
    if (['sukcesy', 'achievements'].includes(articleCategory)) return 'programs';
    if (['projekty', 'projects'].includes(articleCategory)) return 'programs';
  }
  
  // Check path for keywords
  for (const [category, keywords] of Object.entries(CATEGORY_KEYWORDS)) {
    if (keywords.some(keyword => lowerPath.includes(keyword))) {
      return category;
    }
  }
  
  // Check directory structure
  if (filePath.includes('/gallery/')) return 'events';
  if (filePath.includes('/icons/')) return 'logos';
  if (filePath.includes('/other/')) return 'campus';
  
  return 'other';
}

/**
 * Generate slug-friendly filename
 */
function generateFilename(originalName, index = 0) {
  const ext = path.extname(originalName);
  const base = path.basename(originalName, ext);
  
  // Convert to slug
  const slug = base
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .substring(0, 50);
  
  return `${slug}${index > 0 ? `-${index}` : ''}${ext}`;
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
    console.error(`Error copying ${sourcePath}:`, error.message);
    return false;
  }
}

/**
 * Main organization function
 */
async function organizeAssets() {
  console.log('🗂️  Starting asset organization...\n');
  
  const stats = {
    total: 0,
    organized: 0,
    errors: 0,
    byCategory: {},
  };
  
  const progressBar = new cliProgress.SingleBar({
    format: 'Progress |{bar}| {percentage}% | {value}/{total} images',
  }, cliProgress.Presets.shades_classic);
  
  // 1. Organize images from articles
  console.log('📁 Organizing article images...');
  
  if (fs.existsSync(CONFIG.articlesDir)) {
    const articleFolders = await readdir(CONFIG.articlesDir);
    stats.total += articleFolders.length;
    
    progressBar.start(articleFolders.length, 0);
    
    for (let i = 0; i < articleFolders.length; i++) {
      const articleFolder = articleFolders[i];
      const articlePath = path.join(CONFIG.articlesDir, articleFolder);
      
      try {
        const articleStat = await stat(articlePath);
        if (!articleStat.isDirectory()) continue;
        
        // Extract category from article metadata if available
        const metadataPath = path.join(articlePath, 'metadata.json');
        let articleCategory = null;
        
        if (fs.existsSync(metadataPath)) {
          const metadata = JSON.parse(fs.readFileSync(metadataPath, 'utf-8'));
          articleCategory = metadata.category;
        }
        
        // Copy images from this article
        const imagesPath = path.join(articlePath, 'images');
        if (fs.existsSync(imagesPath)) {
          const category = categorizeImage(articleFolder, articleCategory);
          const targetCategoryDir = path.join(CONFIG.targetDir, category);
          
          const images = await readdir(imagesPath);
          for (let j = 0; j < images.length; j++) {
            const imageName = images[j];
            const sourceImagePath = path.join(imagesPath, imageName);
            const targetImagePath = path.join(targetCategoryDir, generateFilename(imageName, j));
            
            await organizeImage(sourceImagePath, targetImagePath);
            stats.organized++;
            stats.byCategory[category] = (stats.byCategory[category] || 0) + 1;
          }
        }
        
        progressBar.update(i + 1);
      } catch (error) {
        console.error(`Error processing article ${articleFolder}:`, error.message);
        stats.errors++;
      }
    }
    
    progressBar.stop();
  }
  
  // 2. Organize standalone images
  console.log('\n📁 Organizing standalone images...');
  
  const imageDirs = ['images/gallery', 'images/icons', 'images/other'];
  
  for (const imageDir of imageDirs) {
    const sourcePath = path.join(CONFIG.sourceDir, imageDir);
    if (!fs.existsSync(sourcePath)) continue;
    
    const category = imageDir.includes('gallery') ? 'events' : 
                     imageDir.includes('icons') ? 'logos' : 'campus';
    
    const targetPath = path.join(CONFIG.targetDir, category);
    const images = await readdir(sourcePath);
    
    console.log(`  Processing ${imageDir} (${images.length} images)...`);
    
    for (const image of images) {
      const sourceImagePath = path.join(sourcePath, image);
      const targetImagePath = path.join(targetPath, generateFilename(image));
      
      await organizeImage(sourceImagePath, targetImagePath);
      stats.organized++;
      stats.byCategory[category] = (stats.byCategory[category] || 0) + 1;
    }
  }
  
  // Print summary
  console.log('\n✅ Asset organization complete!\n');
  console.log('📊 SUMMARY:');
  console.log('═'.repeat(50));
  console.log(`Total organized:     ${stats.organized}`);
  console.log(`Errors:             ${stats.errors}`);
  console.log('\nBy category:');
  Object.entries(stats.byCategory).forEach(([cat, count]) => {
    console.log(`  ${cat.padEnd(15)} ${count}`);
  });
  console.log(`\nOutput directory: ${CONFIG.targetDir}`);
  console.log('═'.repeat(50));
  
  // Create manifest
  const manifest = {
    generatedAt: new Date().toISOString(),
    totalImages: stats.organized,
    byCategory: stats.byCategory,
  };
  
  fs.writeFileSync(
    path.join(CONFIG.targetDir, 'manifest.json'),
    JSON.stringify(manifest, null, 2)
  );
  
  console.log('\n✓ Manifest saved to public/images/manifest.json\n');
}

// Run organization
if (require.main === module) {
  organizeAssets().catch(error => {
    console.error('❌ Error during organization:', error.message);
    process.exit(1);
  });
}

module.exports = { organizeAssets, categorizeImage };
