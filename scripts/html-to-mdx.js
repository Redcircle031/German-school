#!/usr/bin/env node

/**
 * HTML to MDX Converter
 * 
 * Converts HTML content from CMS to clean MDX format
 * Extracts frontmatter, cleans HTML, creates image references
 * 
 * Usage: node scripts/html-to-mdx.js
 */

const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');
const { htmlToText } = require('html-to-text');
const matter = require('gray-matter');
const cliProgress = require('cli-progress');

// Configuration
const CONFIG = {
  inputPath: path.join(__dirname, '../wbs-extract/cms-migration/cms-import-articles.json'),
  outputPath: path.join(__dirname, '../src/content/news'),
  imagesPath: path.join(__dirname, '../public/images/news'),
};

/**
 * Clean HTML content
 */
function cleanHtml(html) {
  if (!html) return '';
  
  const $ = cheerio.load(html);
  
  // Remove unwanted elements
  $('script, style, .navbar, .search, .advertisement').remove();
  
  // Convert images to markdown
  $('img').each((i, img) => {
    const src = $(img).attr('src') || '';
    const alt = $(img).attr('alt') || '';
    $(img).replaceWith(`\n![${alt}](/images/${src})\n`);
  });
  
  // Convert links
  $('a').each((i, link) => {
    const href = $(link).attr('href') || '';
    const text = $(link).text() || '';
    if (href.includes('pub/cms/files/')) {
      // It's a PDF/download link
      const filename = href.split('/').pop();
      $(link).replaceWith(`\n[📄 ${text}](/documents/${filename})\n`);
    } else {
      $(link).replaceWith(`<a href="${href}">${text}</a>`);
    }
  });
  
  // Get body content
  const body = $('body').length ? $('body').html() : $.html();
  
  // Clean up multiple newlines
  return body.replace(/\n\s*\n\s*\n/g, '\n\n');
}

/**
 * Generate excerpt from content
 */
function generateExcerpt(content, language = 'pl') {
  if (!content) return '';
  
  const text = htmlToText(content, {
    wordwrap: false,
    selectors: [
      { selector: 'img', format: 'skip' },
      { selector: 'a', options: { hideLinkHrefIfSameAsText: true } },
    ],
  });
  
  // Clean and truncate
  const clean = text.replace(/\s+/g, ' ').trim();
  return clean.substring(0, 160) + (clean.length > 160 ? '...' : '');
}

/**
 * Extract images from HTML
 */
function extractImages(html) {
  const $ = cheerio.load(html);
  const images = [];
  
  $('img').each((i, img) => {
    const src = $(img).attr('src') || '';
    const alt = $(img).attr('alt') || '';
    if (src) {
      images.push({
        src: src.replace('pub/cms/', '/images/'),
        alt: alt || 'Image',
      });
    }
  });
  
  return images;
}

/**
 * Extract PDF attachments from HTML
 */
function extractPdfs(html) {
  const $ = cheerio.load(html);
  const pdfs = [];
  
  $('a[href*=".pdf"]').each((i, link) => {
    const href = $(link).attr('href') || '';
    const text = $(link).text() || 'Download PDF';
    const filename = href.split('/').pop();
    
    pdfs.push({
      filename,
      path: `/documents/${filename}`,
      label: text,
    });
  });
  
  return pdfs;
}

/**
 * Convert article to MDX
 */
function convertToMdx(article, index) {
  const {
    slug,
    title_pl,
    title_de,
    title_en,
    content_pl,
    content_de,
    content_en,
    category,
    published_at,
    meta_title_pl,
    meta_description_pl,
  } = article;
  
  // Generate excerpt if missing
  const excerpt_pl = article.excerpt_pl || generateExcerpt(content_pl, 'pl');
  const excerpt_de = article.excerpt_de || generateExcerpt(content_de, 'de');
  const excerpt_en = article.excerpt_en || generateExcerpt(content_en, 'en');
  
  // Extract images and PDFs
  const images = extractImages(content_pl);
  const pdfs = extractPdfs(content_pl);
  
  // Clean HTML content
  const cleanContentPl = cleanHtml(content_pl);
  const cleanContentDe = cleanHtml(content_de);
  const cleanContentEn = cleanHtml(content_en);
  
  // Create frontmatter
  const frontmatter = {
    title: {
      pl: title_pl || '',
      de: title_de || '',
      en: title_en || '',
    },
    excerpt: {
      pl: excerpt_pl,
      de: excerpt_de,
      en: excerpt_en,
    },
    category: category || 'news',
    date: published_at || new Date().toISOString().split('T')[0],
    draft: false,
    featured: article.is_featured || false,
    images: images.map(img => img.src),
    pdfs: pdfs.map(pdf => pdf.filename),
    seo: {
      title: meta_title_pl || title_pl,
      description: meta_description_pl || excerpt_pl,
    },
  };
  
  // Create MDX content
  const mdxContent = `---
${matter.stringify('', frontmatter).slice(4).trim()}
---

import { ImageGallery, Image, PdfDownload } from '@/components/mdx';

## Polish Version

${cleanContentPl}

${images.length > 0 ? `
<ImageGallery>
${images.map(img => `  <Image src="${img.src}" alt="${img.alt}" />`).join('\n')}
</ImageGallery>
` : ''}

${pdfs.length > 0 ? `
<PdfDownload>
${pdfs.map(pdf => `  <PdfFile href="${pdf.path}" label="${pdf.label}" />`).join('\n')}
</PdfDownload>
` : ''}

---

## German Version

${cleanContentDe || '*German translation not available*'}

---

## English Version

${cleanContentEn || '*English translation not available*'}
`;
  
  return {
    slug,
    mdx: mdxContent,
    frontmatter,
  };
}

/**
 * Main conversion function
 */
async function convertHtmlToMdx() {
  console.log('📝 Starting HTML to MDX conversion...\n');
  
  // Load articles
  console.log('📄 Loading articles...');
  const database = JSON.parse(fs.readFileSync(CONFIG.inputPath, 'utf-8'));
  const articles = database.articles || [];
  
  console.log(`✓ Loaded ${articles.length} articles\n`);
  
  const progressBar = new cliProgress.SingleBar({
    format: 'Converting |{bar}| {percentage}% | {value}/{total} articles',
  }, cliProgress.Presets.shades_classic);
  
  progressBar.start(articles.length, 0);
  
  const stats = {
    total: articles.length,
    converted: 0,
    errors: 0,
    withImages: 0,
    withPdfs: 0,
  };
  
  // Create output directory
  fs.mkdirSync(CONFIG.outputPath, { recursive: true });
  
  // Convert each article
  for (let i = 0; i < articles.length; i++) {
    const article = articles[i];
    
    try {
      const { slug, mdx, frontmatter } = convertToMdx(article, i);
      
      // Write MDX file
      const outputPath = path.join(CONFIG.outputPath, `${slug}.mdx`);
      fs.writeFileSync(outputPath, mdx);
      
      stats.converted++;
      
      if (frontmatter.images.length > 0) stats.withImages++;
      if (frontmatter.pdfs.length > 0) stats.withPdfs++;
      
      progressBar.update(i + 1);
    } catch (error) {
      console.error(`\nError converting ${article.slug}:`, error.message);
      stats.errors++;
    }
  }
  
  progressBar.stop();
  
  // Create index file
  const indexContent = `---
title:
  pl: "Aktualności"
  de: "Aktuelles"
  en: "News"
description:
  pl: "Najnowsze wiadomości ze szkoły"
  de: "Neueste Nachrichten aus der Schule"
  en: "Latest news from the school"
---

import { NewsList } from '@/components/news';

<NewsList />
`;
  
  fs.writeFileSync(path.join(CONFIG.outputPath, '_index.mdx'), indexContent);
  
  // Print summary
  console.log('\n✅ Conversion complete!\n');
  console.log('📊 SUMMARY:');
  console.log('═'.repeat(50));
  console.log(`Total articles:       ${stats.total}`);
  console.log(`Converted:            ${stats.converted}`);
  console.log(`Errors:               ${stats.errors}`);
  console.log(`With images:          ${stats.withImages}`);
  console.log(`With PDFs:            ${stats.withPdfs}`);
  console.log(`\nOutput directory:     ${CONFIG.outputPath}`);
  console.log('═'.repeat(50));
  
  // Create manifest
  const manifest = {
    generatedAt: new Date().toISOString(),
    totalArticles: stats.converted,
    withImages: stats.withImages,
    withPdfs: stats.withPdfs,
  };
  
  fs.writeFileSync(
    path.join(CONFIG.outputPath, 'manifest.json'),
    JSON.stringify(manifest, null, 2)
  );
  
  console.log('\n✓ Manifest saved to src/content/news/manifest.json\n');
}

// Run conversion
if (require.main === module) {
  convertHtmlToMdx().catch(error => {
    console.error('❌ Error during conversion:', error.message);
    process.exit(1);
  });
}

module.exports = { convertHtmlToMdx, cleanHtml, convertToMdx };
