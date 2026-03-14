#!/usr/bin/env node
/**
 * WBS Full Archive & Content Extractor
 * Handles all archive years and articles with proper encoding
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const OUTPUT_DIR = __dirname;

// Article database
const contentDb = {
  metadata: {
    extractedAt: new Date().toISOString(),
    school: "WBS - Polsko-Niemiecka Szkoła Spotkań i Dialogu im. Willy'ego Brandta",
    totalArticles: 0,
    totalImages: 0,
    archiveYears: []
  },
  articles: [],
  pages: [],
  images: [],
  pdfs: []
};

// Helper: Download with curl (more reliable)
function downloadWithCurl(url, outputPath) {
  try {
    execSync(`curl -sL "${url}" -o "${outputPath}" --max-time 30`, { stdio: 'pipe' });
    const stats = fs.statSync(outputPath);
    return stats.size > 0;
  } catch (e) {
    return false;
  }
}

// Helper: Fetch HTML with curl
function fetchHtml(url) {
  try {
    return execSync(`curl -sL "${url}" --max-time 30`, { encoding: 'utf8', stdio: 'pipe' });
  } catch (e) {
    return null;
  }
}

// Extract article links from archive pages
function extractArticleLinks(html) {
  const links = [];
  // Match article links with dates
  const regex = /href=["']([^"']+-\d+\.html)["'][^>]*>[\s\S]*?(\d{4}-\d{2}-\d{2})/gi;
  let match;
  
  while ((match = regex.exec(html)) !== null) {
    const url = match[1].startsWith('/') ? `https://wbs.pl${match[1]}` : match[1];
    const date = match[2];
    
    if (url.includes('wbs.pl') && !links.find(l => l.url === url)) {
      links.push({ url, date });
    }
  }
  
  return links;
}

// Extract images from HTML
function extractImages(html, baseUrl) {
  const images = [];
  
  // img src
  const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
  let match;
  while ((match = imgRegex.exec(html)) !== null) {
    let url = match[1];
    if (url.startsWith('/')) url = `https://wbs.pl${url}`;
    else if (!url.startsWith('http')) url = `${baseUrl}/${url}`;
    
    const altMatch = match[0].match(/alt=["']([^"]*)["']/i);
    images.push({
      url,
      alt: altMatch ? altMatch[1] : '',
      type: 'inline'
    });
  }
  
  // Gallery links
  const galleryRegex = /<a[^>]+href=["']([^"']+\.jpe?g)["'][^>]*>/gi;
  while ((match = galleryRegex.exec(html)) !== null) {
    let url = match[1];
    if (url.startsWith('/')) url = `https://wbs.pl${url}`;
    else if (!url.startsWith('http')) url = `${baseUrl}/${url}`;
    
    images.push({ url, alt: '', type: 'gallery' });
  }
  
  return images;
}

// Extract PDFs
function extractPdfs(html) {
  const pdfs = [];
  const regex = /href=["']([^"']+\.pdf)["'][^>]*>([^<]*)/gi;
  let match;
  
  while ((match = regex.exec(html)) !== null) {
    let url = match[1];
    if (url.startsWith('/')) url = `https://wbs.pl${url}`;
    else if (!url.startsWith('http')) url = `https://wbs.pl/${url}`;
    
    pdfs.push({
      url,
      title: match[2].replace(/<[^>]+>/g, '').trim()
    });
  }
  
  return pdfs;
}

// Process an article page
async function processArticle(articleInfo) {
  const { url, date } = articleInfo;
  const html = fetchHtml(url);
  
  if (!html) {
    console.log(`  Failed to fetch: ${url}`);
    return null;
  }
  
  // Extract slug
  const urlParts = url.split('/').pop().replace('.html', '');
  const slug = urlParts.replace(/[^a-zA-Z0-9_-]/g, '_');
  
  // Extract title
  const titleMatch = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  const title = titleMatch ? titleMatch[1].replace(/<[^>]+>/g, '').trim() : 'Untitled';
  
  // Extract content - look for main content area
  let content = '';
  const contentMatch = html.match(/<div[^>]*class=["'][^"']*main[^"']*["'][^>]*>([\s\S]*?)<\/div>/i) ||
                       html.match(/<div[^>]*class=["'][^"']*content[^"']*["'][^>]*>([\s\S]*?)<\/div>/i) ||
                       html.match(/<article[^>]*>([\s\S]*?)<\/article>/i);
  
  if (contentMatch) {
    content = contentMatch[1];
  } else {
    // Fallback - try to extract between h1 and footer
    content = html.replace(/^[\s\S]*?<h1[\s\S]*?<\/h1>/i, '').replace(/<footer[\s\S]*$/i, '');
  }
  
  // Extract images
  const images = extractImages(html, url);
  const articleImages = [];
  
  // Download images
  const imgDir = path.join(OUTPUT_DIR, 'images', 'articles', slug);
  if (!fs.existsSync(imgDir)) fs.mkdirSync(imgDir, { recursive: true });
  
  for (let i = 0; i < images.length; i++) {
    const img = images[i];
    const ext = path.extname(new URL(img.url).pathname) || '.jpg';
    const filename = `image_${String(i).padStart(3, '0')}${ext}`;
    const outputPath = path.join(imgDir, filename);
    
    if (downloadWithCurl(img.url, outputPath)) {
      articleImages.push({
        originalUrl: img.url,
        localPath: `images/articles/${slug}/${filename}`,
        alt: img.alt,
        type: img.type
      });
      contentDb.images.push({
        articleSlug: slug,
        localPath: `images/articles/${slug}/${filename}`,
        alt: img.alt
      });
    }
  }
  
  // Extract and download PDFs
  const pdfs = extractPdfs(html);
  const articlePdfs = [];
  
  for (const pdf of pdfs) {
    const filename = path.basename(new URL(pdf.url).pathname);
    const outputPath = path.join(OUTPUT_DIR, 'pdfs', filename);
    
    if (downloadWithCurl(pdf.url, outputPath)) {
      articlePdfs.push({
        originalUrl: pdf.url,
        localPath: `pdfs/${filename}`,
        title: pdf.title
      });
      contentDb.pdfs.push({
        articleSlug: slug,
        localPath: `pdfs/${filename}`,
        title: pdf.title
      });
    }
  }
  
  // Save raw HTML
  const htmlPath = path.join(OUTPUT_DIR, 'articles_raw', `${slug}.html`);
  if (!fs.existsSync(path.dirname(htmlPath))) {
    fs.mkdirSync(path.dirname(htmlPath), { recursive: true });
  }
  fs.writeFileSync(htmlPath, html);
  
  // Create article object
  const article = {
    slug,
    url,
    title,
    date,
    content: content.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
                   .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, ''),
    images: articleImages,
    pdfs: articlePdfs,
    seo: {
      metaDescription: extractMetaDescription(html),
      metaKeywords: extractMetaKeywords(html)
    }
  };
  
  contentDb.articles.push(article);
  contentDb.metadata.totalArticles++;
  contentDb.metadata.totalImages += articleImages.length;
  
  console.log(`  ✓ ${title.substring(0, 60)}... (${articleImages.length} images, ${articlePdfs.length} PDFs)`);
  
  return article;
}

function extractMetaDescription(html) {
  const match = html.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["']/i);
  return match ? match[1] : '';
}

function extractMetaKeywords(html) {
  const match = html.match(/<meta[^>]+name=["']keywords["'][^>]+content=["']([^"']*)["']/i);
  return match ? match[1] : '';
}

// Process archive year
async function processArchiveYear(yearUrl) {
  console.log(`\nProcessing archive: ${yearUrl}`);
  
  const html = fetchHtml(yearUrl);
  if (!html) return;
  
  // Extract all article links
  const articles = extractArticleLinks(html);
  console.log(`  Found ${articles.length} articles`);
  
  // Check for pagination
  const pageMatches = html.match(/\?s=(\d+)/g);
  const maxPage = pageMatches ? Math.max(...pageMatches.map(p => parseInt(p.replace('?s=', '')))) : 0;
  
  // Process all pagination pages
  for (let page = 0; page <= maxPage; page++) {
    const pageUrl = page === 0 ? yearUrl : `${yearUrl}?s=${page}`;
    const pageHtml = page === 0 ? html : fetchHtml(pageUrl);
    
    if (!pageHtml) continue;
    
    const pageArticles = page === 0 ? articles : extractArticleLinks(pageHtml);
    
    for (const article of pageArticles) {
      await processArticle(article);
      // Small delay
      await new Promise(r => setTimeout(r, 100));
    }
  }
}

// Main extraction
async function main() {
  console.log('=== WBS Full Content Extraction ===\n');
  
  // Ensure directories
  ['articles_raw', 'images/articles', 'pdfs'].forEach(dir => {
    const fullPath = path.join(OUTPUT_DIR, dir);
    if (!fs.existsSync(fullPath)) fs.mkdirSync(fullPath, { recursive: true });
  });
  
  // Archive years to process
  const archiveYears = [
    'https://wbs.pl/20202021-4077.html',
    'https://wbs.pl/20202021-4048.html', // Different view
    'https://wbs.pl/20192020-3707.html',
    'https://wbs.pl/20182019-3301.html',
    'https://wbs.pl/20172018-2815.html',
    'https://wbs.pl/20162017-2669.html',
    'https://wbs.pl/20152016-2368.html',
    'https://wbs.pl/20142015-2153.html',
    'https://wbs.pl/20132014-2152.html',
  ];
  
  // Process all archive years
  for (const yearUrl of archiveYears) {
    contentDb.metadata.archiveYears.push(yearUrl);
    await processArchiveYear(yearUrl);
  }
  
  // Also process main current articles
  console.log('\n=== Processing current articles ===');
  const mainHtml = fetchHtml('https://wbs.pl/aktualne_wydarzenia-1339.html');
  if (mainHtml) {
    const currentArticles = extractArticleLinks(mainHtml);
    console.log(`Found ${currentArticles.length} current articles`);
    
    for (const article of currentArticles.slice(0, 20)) { // Process first 20
      await processArticle(article);
    }
  }
  
  // Save database
  const dbPath = path.join(OUTPUT_DIR, 'wbs-content-database.json');
  fs.writeFileSync(dbPath, JSON.stringify(contentDb, null, 2));
  
  // Summary
  console.log('\n=== Extraction Complete ===');
  console.log(`Total articles: ${contentDb.metadata.totalArticles}`);
  console.log(`Total images: ${contentDb.metadata.totalImages}`);
  console.log(`Total PDFs: ${contentDb.pdfs.length}`);
  console.log(`\nDatabase saved to: ${dbPath}`);
}

main().catch(console.error);
