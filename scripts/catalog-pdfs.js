#!/usr/bin/env node

/**
 * PDF Cataloger Script
 * 
 * Creates metadata catalog for all PDF documents
 * Extracts metadata where possible
 * 
 * Usage: node scripts/catalog-pdfs.js
 */

const fs = require('fs');
const path = require('path');
const pdfParse = require('pdf-parse');
const cliProgress = require('cli-progress');

// Configuration
const CONFIG = {
  pdfsDir: path.join(__dirname, '../wbs-extract/pdfs'),
  outputDir: path.join(__dirname, '../public/documents'),
  manifestPath: path.join(__dirname, '../src/data/documents.json'),
};

// Category mapping based on filename patterns
const CATEGORY_PATTERNS = {
  forms: ['formularz', 'antrag', 'application', 'wniosek', 'formular'],
  regulations: ['ordnung', 'regulamin', 'regulation', 'satzung', 'procedury'],
  reports: ['raport', 'bericht', 'report', 'sprawozdanie'],
  programs: ['program', 'konzept', 'concept', 'standardy'],
  other: [],
};

/**
 * Determine category from filename
 */
function categorizePdf(filename) {
  const lower = filename.toLowerCase();
  
  for (const [category, patterns] of Object.entries(CATEGORY_PATTERNS)) {
    if (patterns.some(pattern => lower.includes(pattern))) {
      return category;
    }
  }
  
  return 'other';
}

/**
 * Extract metadata from PDF
 */
async function extractPdfMetadata(filePath) {
  try {
    const dataBuffer = fs.readFileSync(filePath);
    const data = await pdfParse(dataBuffer);
    
    return {
      pages: data.numpages,
      info: data.info || {},
      text: data.text.substring(0, 500), // First 500 chars for search
    };
  } catch (error) {
    return {
      pages: 0,
      info: {},
      text: '',
      error: error.message,
    };
  }
}

/**
 * Generate document metadata
 */
function generateMetadata(filename, pdfData) {
  // Extract title from filename (remove numbers and extensions)
  const title = filename
    .replace(/_\d+\.pdf$/i, '')
    .replace(/^\d+\._?/i, '')
    .replace(/_/g, ' ')
    .replace(/\.pdf$/i, '')
    .trim();
  
  // Try to determine language from filename
  const hasGerman = /de_|german|deutsch/i.test(filename);
  const hasPolish = /pl_|polish|polski/i.test(filename);
  
  return {
    id: `doc-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    filename,
    title: {
      pl: hasPolish ? title : title,
      de: hasGerman ? title : '',
      en: '',
    },
    category: categorizePdf(filename),
    language: hasGerman ? 'de' : hasPolish ? 'pl' : 'pl',
    pages: pdfData.pages || 0,
    size: 0, // Will be set later
    uploadedAt: new Date().toISOString(),
    searchableText: pdfData.text || '',
  };
}

/**
 * Main cataloging function
 */
async function catalogPdfs() {
  console.log('📑 Starting PDF cataloging...\n');
  
  // Create output directory
  fs.mkdirSync(CONFIG.outputDir, { recursive: true });
  
  // Get all PDFs
  const pdfFiles = fs.readdirSync(CONFIG.pdfsDir).filter(f => f.endsWith('.pdf'));
  
  console.log(`📄 Found ${pdfFiles.length} PDFs\n`);
  
  const progressBar = new cliProgress.SingleBar({
    format: 'Cataloging |{bar}| {percentage}% | {value}/{total} PDFs',
  }, cliProgress.Presets.shades_classic);
  
  progressBar.start(pdfFiles.length, 0);
  
  const documents = [];
  const stats = {
    total: pdfFiles.length,
    cataloged: 0,
    errors: 0,
    byCategory: {},
  };
  
  // Process each PDF
  for (let i = 0; i < pdfFiles.length; i++) {
    const filename = pdfFiles[i];
    const sourcePath = path.join(CONFIG.pdfsDir, filename);
    
    try {
      // Extract metadata
      const pdfData = await extractPdfMetadata(sourcePath);
      
      // Generate metadata
      const metadata = generateMetadata(filename, pdfData);
      
      // Get file size
      const fileStats = fs.statSync(sourcePath);
      metadata.size = fileStats.size;
      
      // Copy PDF to public directory
      const destPath = path.join(CONFIG.outputDir, filename);
      fs.copyFileSync(sourcePath, destPath);
      
      documents.push(metadata);
      stats.cataloged++;
      
      // Count by category
      stats.byCategory[metadata.category] = (stats.byCategory[metadata.category] || 0) + 1;
      
      progressBar.update(i + 1);
    } catch (error) {
      console.error(`\nError processing ${filename}:`, error.message);
      stats.errors++;
    }
  }
  
  progressBar.stop();
  
  // Sort documents by category and title
  documents.sort((a, b) => {
    if (a.category !== b.category) {
      return a.category.localeCompare(b.category);
    }
    return a.title.pl.localeCompare(b.title.pl);
  });
  
  // Create manifest
  const manifest = {
    generatedAt: new Date().toISOString(),
    totalDocuments: documents.length,
    byCategory: stats.byCategory,
    documents,
  };
  
  // Save manifest
  fs.writeFileSync(CONFIG.manifestPath, JSON.stringify(manifest, null, 2));
  
  // Print summary
  console.log('\n✅ Cataloging complete!\n');
  console.log('📊 SUMMARY:');
  console.log('═'.repeat(50));
  console.log(`Total PDFs:           ${stats.total}`);
  console.log(`Cataloged:            ${stats.cataloged}`);
  console.log(`Errors:               ${stats.errors}`);
  console.log('\nBy category:');
  Object.entries(stats.byCategory).forEach(([cat, count]) => {
    console.log(`  ${cat.padEnd(15)} ${count}`);
  });
  console.log(`\nOutput directory:     ${CONFIG.outputDir}`);
  console.log(`Manifest:             ${CONFIG.manifestPath}`);
  console.log('═'.repeat(50));
}

// Run cataloging
if (require.main === module) {
  catalogPdfs().catch(error => {
    console.error('❌ Error during cataloging:', error.message);
    process.exit(1);
  });
}

module.exports = { catalogPdfs, extractPdfMetadata };
