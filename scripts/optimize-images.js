#!/usr/bin/env node

/**
 * Image Optimizer Script
 * 
 * Optimizes all images: resize, compress, convert to WebP
 * Creates multiple sizes (hero, card, thumbnail)
 * 
 * Usage: node scripts/optimize-images.js
 */

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const cliProgress = require('cli-progress');

// Configuration
const CONFIG = {
  inputDir: path.join(__dirname, '../public/images'),
  outputDir: path.join(__dirname, '../public/images/optimized'),
  sizes: {
    hero: { width: 1920, height: 1080, quality: 80, suffix: '-hero' },
    card: { width: 800, height: 600, quality: 80, suffix: '-card' },
    thumb: { width: 400, height: 300, quality: 75, suffix: '-thumb' },
  },
  maxSize: 500 * 1024, // 500KB
};

/**
 * Optimize a single image
 */
async function optimizeImage(inputPath, outputDir, filename) {
  const ext = path.extname(filename).toLowerCase();
  const base = path.basename(filename, ext);
  
  // Skip non-image files
  if (!['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'].includes(ext)) {
    return { skipped: true, reason: 'unsupported format' };
  }
  
  // Skip SVG (keep as-is)
  if (ext === '.svg') {
    const destPath = path.join(outputDir, filename);
    fs.copyFileSync(inputPath, destPath);
    return { optimized: true, format: 'svg' };
  }
  
  const results = [];
  
  // Create each size variant
  for (const [sizeName, config] of Object.entries(CONFIG.sizes)) {
    try {
      const outputFilename = `${base}${config.suffix}.webp`;
      const outputPath = path.join(outputDir, outputFilename);
      
      await sharp(inputPath)
        .resize(config.width, config.height, {
          fit: 'cover',
          position: 'center',
        })
        .webp({ quality: config.quality })
        .toFile(outputPath);
      
      // Check file size
      const stats = fs.statSync(outputPath);
      if (stats.size > CONFIG.maxSize) {
        console.warn(`  ⚠️  ${outputFilename} is large (${(stats.size / 1024).toFixed(1)}KB)`);
      }
      
      results.push({
        size: sizeName,
        filename: outputFilename,
        sizeBytes: stats.size,
      });
    } catch (error) {
      console.error(`  Error creating ${sizeName}:`, error.message);
    }
  }
  
  // Also create a fallback JPG (largest size)
  try {
    const jpgPath = path.join(outputDir, `${base}.jpg`);
    await sharp(inputPath)
      .resize(CONFIG.sizes.hero.width, CONFIG.sizes.hero.height, {
        fit: 'cover',
        position: 'center',
      })
      .jpeg({ quality: 85 })
      .toFile(jpgPath);
    
    results.push({
      size: 'fallback',
      filename: `${base}.jpg`,
    });
  } catch (error) {
    // Ignore JPG fallback errors
  }
  
  return { optimized: true, variants: results };
}

/**
 * Process all images in a directory
 */
async function processDirectory(dirPath, relativePath = '') {
  const results = {
    total: 0,
    optimized: 0,
    skipped: 0,
    errors: 0,
  };
  
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  
  for (const entry of entries) {
    if (entry.name === 'manifest.json' || entry.name === 'optimized') continue;
    
    const fullPath = path.join(dirPath, entry.name);
    
    if (entry.isDirectory()) {
      // Process subdirectory
      const subResults = await processDirectory(fullPath, path.join(relativePath, entry.name));
      results.total += subResults.total;
      results.optimized += subResults.optimized;
      results.skipped += subResults.skipped;
      results.errors += subResults.errors;
    } else if (entry.isFile()) {
      results.total++;
      
      try {
        // Create output directory
        const outputSubDir = path.join(CONFIG.outputDir, relativePath);
        fs.mkdirSync(outputSubDir, { recursive: true });
        
        // Optimize image
        const result = await optimizeImage(fullPath, outputSubDir, entry.name);
        
        if (result.optimized) {
          results.optimized++;
        } else if (result.skipped) {
          results.skipped++;
        }
      } catch (error) {
        console.error(`Error processing ${entry.name}:`, error.message);
        results.errors++;
      }
    }
  }
  
  return results;
}

/**
 * Main optimization function
 */
async function optimizeImages() {
  console.log('🖼️  Starting image optimization...\n');
  
  // Create output directory
  fs.mkdirSync(CONFIG.outputDir, { recursive: true });
  
  // Process all images
  const results = await processDirectory(CONFIG.inputDir);
  
  // Print summary
  console.log('\n✅ Optimization complete!\n');
  console.log('📊 SUMMARY:');
  console.log('═'.repeat(50));
  console.log(`Total images:         ${results.total}`);
  console.log(`Optimized:            ${results.optimized}`);
  console.log(`Skipped:              ${results.skipped}`);
  console.log(`Errors:               ${results.errors}`);
  console.log(`\nOutput directory:     ${CONFIG.outputDir}`);
  console.log(`Variants per image:   ${Object.keys(CONFIG.sizes).length} + JPG fallback`);
  console.log('═'.repeat(50));
  
  // Create manifest
  const manifest = {
    generatedAt: new Date().toISOString(),
    totalImages: results.optimized,
    variants: Object.keys(CONFIG.sizes).map(key => ({
      name: key,
      ...CONFIG.sizes[key],
    })),
  };
  
  fs.writeFileSync(
    path.join(CONFIG.outputDir, 'manifest.json'),
    JSON.stringify(manifest, null, 2)
  );
  
  console.log('\n✓ Manifest saved to public/images/optimized/manifest.json\n');
}

// Run optimization
if (require.main === module) {
  optimizeImages().catch(error => {
    console.error('❌ Error during optimization:', error.message);
    process.exit(1);
  });
}

module.exports = { optimizeImages, optimizeImage };
