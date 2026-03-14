/**
 * WBS Content Import Script
 * Converts extracted content from wbs-extract to usable format for the new site
 * 
 * Usage: node scripts/import-content.js
 */

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// Paths
const EXTRACT_DIR = path.join(__dirname, '..', 'wbs-extract');
const OUTPUT_DIR = path.join(__dirname, '..', 'src', 'content', 'articles');
const DATA_OUTPUT_DIR = path.join(__dirname, '..', 'src', 'data', 'cms');
const PUBLIC_IMAGES_DIR = path.join(__dirname, '..', 'public', 'images', 'articles');
const PUBLIC_PDFS_DIR = path.join(__dirname, '..', 'public', 'pdfs');

// Ensure directories exist
function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// Load the complete database
function loadDatabase() {
  const dbPath = path.join(EXTRACT_DIR, 'wbs-complete-database.json');
  const content = fs.readFileSync(dbPath, 'utf-8');
  return JSON.parse(content);
}

// Convert HTML content to markdown-like format
function htmlToMarkdown(html) {
  if (!html) return '';
  
  // Basic HTML to markdown conversion
  let md = html
    // Headers
    .replace(/<h1[^>]*>(.*?)<\/h1>/gi, '# $1\n\n')
    .replace(/<h2[^>]*>(.*?)<\/h2>/gi, '## $1\n\n')
    .replace(/<h3[^>]*>(.*?)<\/h3>/gi, '### $1\n\n')
    .replace(/<h4[^>]*>(.*?)<\/h4>/gi, '#### $1\n\n')
    // Paragraphs
    .replace(/<p[^>]*>(.*?)<\/p>/gi, '$1\n\n')
    // Lists
    .replace(/<ul[^>]*>(.*?)<\/ul>/gi, '$1\n')
    .replace(/<ol[^>]*>(.*?)<\/ol>/gi, '$1\n')
    .replace(/<li[^>]*>(.*?)<\/li>/gi, '- $1\n')
    // Bold and italic
    .replace(/<strong[^>]*>(.*?)<\/strong>/gi, '**$1**')
    .replace(/<b[^>]*>(.*?)<\/b>/gi, '**$1**')
    .replace(/<em[^>]*>(.*?)<\/em>/gi, '*$1*')
    .replace(/<i[^>]*>(.*?)<\/i>/gi, '*$1*')
    // Links
    .replace(/<a[^>]*href="([^"]*)"[^>]*>(.*?)<\/a>/gi, '[$2]($1)')
    // Images - we'll handle these separately
    .replace(/<img[^>]*src="([^"]*)"[^>]*alt="([^"]*)"[^>]*>/gi, '![$2](IMAGE_PATH)')
    .replace(/<img[^>]*src="([^"]*)"[^>]*>/gi, '![image](IMAGE_PATH)')
    // Line breaks
    .replace(/<br[^>]*>/gi, '\n')
    // Remove remaining HTML tags
    .replace(/<[^>]+>/g, '')
    // Clean up whitespace
    .replace(/\n\s*\n/g, '\n\n')
    .trim();
  
  return md;
}

// Extract plain text excerpt from HTML
function extractExcerpt(html, maxLength = 200) {
  if (!html) return '';
  
  const text = html
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  
  if (text.length <= maxLength) return text;
  
  return text.substring(0, maxLength).trim() + '...';
}

// Determine category from database categories
function determineCategory(articleSlug, categories) {
  for (const [category, slugs] of Object.entries(categories)) {
    if (slugs.includes(articleSlug)) {
      return category;
    }
  }
  return 'other';
}

// Process a single article
function processArticle(article, categories) {
  const slug = article.id || article.slug;
  const category = determineCategory(slug, categories);
  
  // Extract date from slug if not provided (format: slug-YYYY or just use today)
  let articleDate = article.date;
  if (!articleDate || articleDate.trim() === '') {
    // Try to extract year from content or use current date
    articleDate = new Date().toISOString().split('T')[0];
  }
  
  // Process images - handle both array of strings and array of objects
  const rawImages = article.images || [];
  const images = rawImages.map(img => {
    if (typeof img === 'string') return img;
    if (typeof img === 'object' && img.path) return img.path;
    if (typeof img === 'object' && img.filename) return img.filename;
    return null;
  }).filter(Boolean);
  
  const featuredImage = images.length > 0 ? `/images/articles/${slug}/${path.basename(images[0])}` : null;
  
  // Get content - might be in different formats
  const rawContent = article.content || '';
  
  // Create translations structure (for now, same content in all languages)
  const translations = {
    pl: {
      title: article.title || 'Bez tytułu',
      excerpt: article.excerpt || extractExcerpt(rawContent),
      content: rawContent,
    },
    de: {
      title: article.title || 'Ohne Titel',
      excerpt: article.excerpt || extractExcerpt(rawContent),
      content: rawContent,
    },
    en: {
      title: article.title || 'Untitled',
      excerpt: article.excerpt || extractExcerpt(rawContent),
      content: rawContent,
    },
  };
  
  // Process PDFs
  const pdfs = article.pdfs || [];
  
  // Create frontmatter
  const frontmatter = {
    title: translations.pl.title,
    date: articleDate,
    category,
    tags: article.tags || [],
    author: article.author || 'WBS',
    featuredImage,
    images: images.map(img => ({
      src: `/images/articles/${slug}/${path.basename(img)}`,
      alt: '',
    })),
    pdfs: pdfs.map(pdf => {
      const pdfPath = typeof pdf === 'string' ? pdf : pdf.path || pdf.filename;
      return {
        src: `/pdfs/${path.basename(pdfPath)}`,
        title: pdf.title || path.basename(pdfPath),
      };
    }),
    originalUrl: `https://wbs.pl/${slug}`,
    draft: false,
  };
  
  return {
    slug,
    frontmatter,
    translations,
    category,
  };
}

// Write article as MDX file
function writeArticle(article) {
  const { slug, frontmatter, translations } = article;
  
  // Create language-specific files
  ['pl', 'de', 'en'].forEach(lang => {
    const content = translations[lang].content;
    if (!content || content.trim() === '') return; // Skip if no content for this language
    
    // Convert HTML to a cleaner format for MDX
    const mdxContent = `---
title: "${frontmatter.title.replace(/"/g, '\\"')}"
date: ${frontmatter.date}
category: ${frontmatter.category}
tags: [${frontmatter.tags.map(t => `"${t}"`).join(', ')}]
author: ${frontmatter.author}
featuredImage: ${frontmatter.featuredImage ? `"${frontmatter.featuredImage}"` : 'null'}
lang: ${lang}
originalUrl: "${frontmatter.originalUrl}"
draft: ${frontmatter.draft}
---

${htmlToMarkdown(content)}
`;
    
    const filePath = path.join(OUTPUT_DIR, lang, `${slug}.mdx`);
    ensureDir(path.dirname(filePath));
    fs.writeFileSync(filePath, mdxContent, 'utf-8');
  });
}

// Copy images from extract folder to public folder
function copyImages() {
  console.log('  Copying images...');
  const articlesImagesDir = path.join(EXTRACT_DIR, 'articles');
  
  if (!fs.existsSync(articlesImagesDir)) {
    console.log('  No articles images folder found');
    return;
  }
  
  const articleDirs = fs.readdirSync(articlesImagesDir);
  let imageCount = 0;
  
  articleDirs.forEach(dir => {
    const imagesDir = path.join(articlesImagesDir, dir, 'images');
    if (fs.existsSync(imagesDir)) {
      const destDir = path.join(PUBLIC_IMAGES_DIR, dir);
      ensureDir(destDir);
      
      const files = fs.readdirSync(imagesDir);
      files.forEach(file => {
        const src = path.join(imagesDir, file);
        const dest = path.join(destDir, file);
        fs.copyFileSync(src, dest);
        imageCount++;
      });
    }
  });
  
  console.log(`  Copied ${imageCount} images`);
}

// Copy PDFs from extract folder to public folder
function copyPDFs() {
  console.log('  Copying PDFs...');
  const pdfsDir = path.join(EXTRACT_DIR, 'pdfs');
  
  if (!fs.existsSync(pdfsDir)) {
    console.log('  No PDFs folder found');
    return;
  }
  
  ensureDir(PUBLIC_PDFS_DIR);
  
  const files = fs.readdirSync(pdfsDir);
  let pdfCount = 0;
  
  files.forEach(file => {
    if (file.endsWith('.pdf')) {
      const src = path.join(pdfsDir, file);
      const dest = path.join(PUBLIC_PDFS_DIR, file);
      fs.copyFileSync(src, dest);
      pdfCount++;
    }
  });
  
  console.log(`  Copied ${pdfCount} PDFs`);
}

// Create content index JSON
function createContentIndex(articles) {
  const index = {
    updatedAt: new Date().toISOString(),
    totalArticles: articles.length,
    articles: articles.map(a => ({
      slug: a.slug,
      title: a.frontmatter.title,
      date: a.frontmatter.date,
      category: a.category,
      featuredImage: a.frontmatter.featuredImage,
      languages: ['pl', 'de', 'en'],
    })),
  };
  
  const indexPath = path.join(DATA_OUTPUT_DIR, 'articles-index.json');
  fs.writeFileSync(indexPath, JSON.stringify(index, null, 2), 'utf-8');
  console.log(`  Created content index with ${articles.length} articles`);
}

// Create PDF catalog JSON
function createPdfCatalog() {
  console.log('  Creating PDF catalog...');
  const pdfsDir = path.join(EXTRACT_DIR, 'pdfs');
  
  if (!fs.existsSync(pdfsDir)) {
    return;
  }
  
  const files = fs.readdirSync(pdfsDir);
  const pdfs = files
    .filter(f => f.endsWith('.pdf'))
    .map(file => {
      // Try to categorize based on filename
      let category = 'other';
      if (file.includes('formularz') || file.includes('antrag') || file.includes('formular')) {
        category = 'forms';
      } else if (file.includes('regulamin') || file.includes('ordnung')) {
        category = 'regulations';
      } else if (file.includes('ferien') || file.includes('plan')) {
        category = 'schedules';
      } else if (file.includes('programm') || file.includes('program')) {
        category = 'programs';
      }
      
      return {
        filename: file,
        title: file.replace(/_/g, ' ').replace('.pdf', ''),
        category,
        url: `/pdfs/${file}`,
        size: fs.statSync(path.join(pdfsDir, file)).size,
      };
    });
  
  const catalog = {
    updatedAt: new Date().toISOString(),
    totalPdfs: pdfs.length,
    categories: ['forms', 'regulations', 'schedules', 'programs', 'other'],
    pdfs,
  };
  
  const catalogPath = path.join(DATA_OUTPUT_DIR, 'pdfs-catalog.json');
  fs.writeFileSync(catalogPath, JSON.stringify(catalog, null, 2), 'utf-8');
  console.log(`  Created PDF catalog with ${pdfs.length} PDFs`);
}

// Main import function
async function importContent() {
  console.log('🚀 Starting content import...\n');
  
  // Ensure output directories exist
  ensureDir(OUTPUT_DIR);
  ensureDir(DATA_OUTPUT_DIR);
  ensureDir(PUBLIC_IMAGES_DIR);
  ensureDir(PUBLIC_PDFS_DIR);
  
  // Load database
  console.log('📖 Loading database...');
  const database = loadDatabase();
  console.log(`  Found ${database.metadata.totalArticles} articles in database\n`);
  
  // Process articles
  console.log('📝 Processing articles...');
  const processedArticles = [];
  
  // Get articles from database - handle both 'articles' and 'items' keys
  const articlesArray = database.articles || database.items || [];
  const articlesToProcess = articlesArray.slice(0, 50);
  
  articlesToProcess.forEach((article, index) => {
    try {
      const processed = processArticle(article, database.categories || {});
      processedArticles.push(processed);
      writeArticle(processed);
      
      if ((index + 1) % 10 === 0) {
        console.log(`  Processed ${index + 1}/${articlesToProcess.length} articles`);
      }
    } catch (error) {
      console.error(`  Error processing article ${article.id || article.slug}:`, error.message);
    }
  });
  
  console.log(`  Processed ${processedArticles.length} articles\n`);
  
  // Copy assets
  console.log('🖼️  Copying assets...');
  copyImages();
  copyPDFs();
  console.log();
  
  // Create indexes
  console.log('📋 Creating content indexes...');
  createContentIndex(processedArticles);
  createPdfCatalog();
  console.log();
  
  console.log('✅ Content import complete!\n');
  console.log('📁 Output locations:');
  console.log(`   - Articles: ${OUTPUT_DIR}`);
  console.log(`   - Data: ${DATA_OUTPUT_DIR}`);
  console.log(`   - Images: ${PUBLIC_IMAGES_DIR}`);
  console.log(`   - PDFs: ${PUBLIC_PDFS_DIR}`);
  console.log();
  console.log('💡 Next steps:');
  console.log('   1. Review imported articles in src/content/articles/');
  console.log('   2. Check src/data/cms/ for content indexes');
  console.log('   3. Run "npm run dev" to see the content on the site');
}

// Run import
importContent().catch(console.error);
