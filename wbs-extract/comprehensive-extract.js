#!/usr/bin/env node
/**
 * WBS Website Comprehensive Content Extractor
 * Extracts ALL articles, images, and content with full metadata for SEO
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const BASE_URL = 'https://wbs.pl';
const OUTPUT_DIR = __dirname;

// Data structures
const websiteData = {
  metadata: {
    extractedAt: new Date().toISOString(),
    baseUrl: BASE_URL,
    schoolName: "Polsko-Niemiecka Szkoła Spotkań i Dialogu im. Willy'ego Brandta w Warszawie",
    totalPages: 0,
    totalImages: 0,
    totalPdfs: 0
  },
  pages: [],
  articles: [],
  images: [],
  pdfs: [],
  structure: {
    mainMenu: [],
    footer: [],
    sidebar: []
  }
};

const downloadedImages = new Set();
const downloadedPdfs = new Set();
const visitedUrls = new Set();

// Helper: Sleep
const sleep = (ms) => new Promise(r => setTimeout(r, ms));

// Helper: Download file
async function downloadFile(url, outputPath) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    const file = fs.createWriteStream(outputPath);
    
    client.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        file.close();
        if (fs.existsSync(outputPath)) fs.unlinkSync(outputPath);
        downloadFile(response.headers.location, outputPath).then(resolve).catch(reject);
        return;
      }
      
      if (response.statusCode !== 200) {
        file.close();
        if (fs.existsSync(outputPath)) fs.unlinkSync(outputPath);
        reject(new Error(`HTTP ${response.statusCode}`));
        return;
      }

      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve({ success: true, size: response.headers['content-length'] });
      });
    }).on('error', (err) => {
      if (fs.existsSync(outputPath)) fs.unlinkSync(outputPath);
      reject(err);
    });
  });
}

// Helper: Fetch HTML
async function fetchHtml(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    
    client.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        fetchHtml(response.headers.location).then(resolve).catch(reject);
        return;
      }
      
      if (response.statusCode !== 200) {
        reject(new Error(`HTTP ${response.statusCode}`));
        return;
      }

      let data = '';
      response.on('data', chunk => data += chunk);
      response.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

// Helper: Extract all image URLs from HTML
function extractImages(html, baseUrl) {
  const images = [];
  
  // Match img src
  const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
  let match;
  while ((match = imgRegex.exec(html)) !== null) {
    let url = match[1];
    if (url.startsWith('/')) {
      url = BASE_URL + url;
    } else if (!url.startsWith('http')) {
      url = baseUrl.replace(/\/[^\/]*$/, '/') + url;
    }
    
    // Extract alt text
    const altMatch = match[0].match(/alt=["']([^"']*)["']/i);
    const alt = altMatch ? altMatch[1] : '';
    
    images.push({ url, alt, type: 'inline' });
  }
  
  // Match gallery links (links to photo files)
  const linkRegex = /<a[^>]+href=["']([^"']+\.(?:jpg|jpeg|png|gif|webp))["'][^>]*>/gi;
  while ((match = linkRegex.exec(html)) !== null) {
    let url = match[1];
    if (url.startsWith('/')) {
      url = BASE_URL + url;
    } else if (!url.startsWith('http')) {
      url = baseUrl.replace(/\/[^\/]*$/, '/') + url;
    }
    
    const titleMatch = match[0].match(/title=["']([^"']*)["']/i);
    const title = titleMatch ? titleMatch[1] : '';
    
    images.push({ url, alt: title, type: 'gallery' });
  }
  
  return images;
}

// Helper: Extract PDFs
function extractPdfs(html, baseUrl) {
  const pdfs = [];
  const pdfRegex = /<a[^>]+href=["']([^"']+\.pdf)["'][^>]*>([\s\S]*?)<\/a>/gi;
  let match;
  
  while ((match = pdfRegex.exec(html)) !== null) {
    let url = match[1];
    if (url.startsWith('/')) {
      url = BASE_URL + url;
    } else if (!url.startsWith('http')) {
      url = baseUrl.replace(/\/[^\/]*$/, '/') + url;
    }
    
    // Extract link text
    const linkText = match[2].replace(/<[^>]+>/g, '').trim();
    
    pdfs.push({ url, title: linkText });
  }
  
  return pdfs;
}

// Helper: Extract article content
function extractArticleContent(html) {
  const article = {
    title: '',
    content: '',
    date: '',
    excerpt: '',
    images: []
  };
  
  // Try to find title
  const titleMatch = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  if (titleMatch) {
    article.title = titleMatch[1].replace(/<[^>]+>/g, '').trim();
  }
  
  // Try to find date
  const dateMatch = html.match(/(\d{4}-\d{2}-\d{2})/);
  if (dateMatch) {
    article.date = dateMatch[1];
  }
  
  // Try to find main content area
  const contentMatch = html.match(/<div[^>]*class=["'][^"']*content[^"']*["'][^>]*>([\s\S]*?)<\/div>/i) ||
                       html.match(/<article[^>]*>([\s\S]*?)<\/article>/i) ||
                       html.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
  
  if (contentMatch) {
    article.content = contentMatch[1];
  }
  
  return article;
}

// Helper: Extract links from page
function extractLinks(html, baseUrl) {
  const links = [];
  const linkRegex = /<a[^>]+href=["']([^"']+)["'][^>]*>/gi;
  let match;
  
  while ((match = linkRegex.exec(html)) !== null) {
    let url = match[1];
    
    // Skip anchors, javascript, mailto
    if (url.startsWith('#') || url.startsWith('javascript:') || url.startsWith('mailto:')) continue;
    
    // Skip external links
    if (url.startsWith('http') && !url.includes('wbs.pl')) continue;
    
    // Make absolute
    if (url.startsWith('/')) {
      url = BASE_URL + url;
    } else if (!url.startsWith('http')) {
      url = baseUrl.replace(/\/[^\/]*$/, '/') + url;
    }
    
    // Clean URL
    url = url.split('#')[0];
    
    links.push(url);
  }
  
  return [...new Set(links)];
}

// Download image with metadata
async function downloadImage(imageInfo, articleSlug) {
  if (downloadedImages.has(imageInfo.url)) return;
  
  const ext = path.extname(new URL(imageInfo.url).pathname) || '.jpg';
  const filename = `${articleSlug}_${downloadedImages.size}${ext}`;
  const outputDir = path.join(OUTPUT_DIR, 'images', 'articles');
  
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  const outputPath = path.join(outputDir, filename);
  
  try {
    await downloadFile(imageInfo.url, outputPath);
    downloadedImages.add(imageInfo.url);
    
    websiteData.images.push({
      originalUrl: imageInfo.url,
      localPath: `images/articles/${filename}`,
      alt: imageInfo.alt,
      type: imageInfo.type,
      articleSlug: articleSlug
    });
    
    return { success: true, filename };
  } catch (err) {
    return { success: false, error: err.message };
  }
}

// Download PDF
async function downloadPdf(pdfInfo) {
  if (downloadedPdfs.has(pdfInfo.url)) return;
  
  const filename = path.basename(new URL(pdfInfo.url).pathname);
  const outputPath = path.join(OUTPUT_DIR, 'pdfs', filename);
  
  try {
    await downloadFile(pdfInfo.url, outputPath);
    downloadedPdfs.add(pdfInfo.url);
    
    websiteData.pdfs.push({
      originalUrl: pdfInfo.url,
      localPath: `pdfs/${filename}`,
      title: pdfInfo.title
    });
    
    return { success: true, filename };
  } catch (err) {
    return { success: false, error: err.message };
  }
}

// Process a single page/article
async function processPage(url) {
  if (visitedUrls.has(url)) return null;
  visitedUrls.add(url);
  
  console.log(`Processing: ${url}`);
  
  try {
    const html = await fetchHtml(url);
    
    // Generate slug from URL
    const urlObj = new URL(url);
    const slug = path.basename(urlObj.pathname, '.html') || 'index';
    
    // Extract article content
    const article = extractArticleContent(html);
    article.url = url;
    article.slug = slug;
    
    // Extract and download images
    const images = extractImages(html, url);
    console.log(`  Found ${images.length} images`);
    
    for (const img of images) {
      await downloadImage(img, slug);
      article.images.push({
        url: img.url,
        alt: img.alt,
        type: img.type
      });
    }
    
    // Extract and download PDFs
    const pdfs = extractPdfs(html, url);
    console.log(`  Found ${pdfs.length} PDFs`);
    
    for (const pdf of pdfs) {
      await downloadPdf(pdf);
    }
    
    // Save HTML
    const pagesDir = path.join(OUTPUT_DIR, 'pages_raw');
    if (!fs.existsSync(pagesDir)) {
      fs.mkdirSync(pagesDir, { recursive: true });
    }
    fs.writeFileSync(path.join(pagesDir, `${slug}.html`), html);
    
    // Add to data
    websiteData.articles.push(article);
    
    // Extract links for further crawling
    const links = extractLinks(html, url);
    
    return { article, links };
  } catch (err) {
    console.error(`  Error: ${err.message}`);
    return null;
  }
}

// Main crawler
async function crawl(startUrls) {
  const queue = [...startUrls];
  const allLinks = new Set();
  
  console.log('=== Starting Comprehensive Extraction ===\n');
  
  while (queue.length > 0) {
    const url = queue.shift();
    const result = await processPage(url);
    
    if (result && result.links) {
      for (const link of result.links) {
        if (!visitedUrls.has(link) && !queue.includes(link)) {
          // Only crawl wbs.pl pages
          if (link.includes('wbs.pl') && link.endsWith('.html')) {
            queue.push(link);
            allLinks.add(link);
          }
        }
      }
    }
    
    // Small delay to be nice to the server
    await sleep(200);
    
    // Progress update
    if (visitedUrls.size % 10 === 0) {
      console.log(`\n--- Progress: ${visitedUrls.size} pages processed ---\n`);
    }
  }
  
  return allLinks;
}

// Save JSON data
function saveJsonData() {
  websiteData.metadata.totalPages = websiteData.articles.length;
  websiteData.metadata.totalImages = websiteData.images.length;
  websiteData.metadata.totalPdfs = websiteData.pdfs.length;
  
  const jsonPath = path.join(OUTPUT_DIR, 'wbs-content-database.json');
  fs.writeFileSync(jsonPath, JSON.stringify(websiteData, null, 2));
  
  console.log('\n=== Extraction Complete ===');
  console.log(`Total pages: ${websiteData.metadata.totalPages}`);
  console.log(`Total images: ${websiteData.metadata.totalImages}`);
  console.log(`Total PDFs: ${websiteData.metadata.totalPdfs}`);
  console.log(`\nData saved to: ${jsonPath}`);
}

// Main
async function main() {
  // Ensure directories exist
  const dirs = ['pages_raw', 'images/articles', 'pdfs'];
  for (const dir of dirs) {
    const fullPath = path.join(OUTPUT_DIR, dir);
    if (!fs.existsSync(fullPath)) {
      fs.mkdirSync(fullPath, { recursive: true });
    }
  }
  
  // Start URLs - crawl from main entry points
  const startUrls = [
    'https://wbs.pl/strona_glowna-1298.html',
    'https://wbs.pl/aktualne_wydarzenia-1339.html',
    'https://wbs.pl/archiwum-1589.html',
    'https://wbs.pl/szkola_wbs-1421.html',
    'https://wbs.pl/formularze_do_pobrania-1358.html',
    'https://wbs.pl/regulaminy-1360.html',
    'https://wbs.pl/dokumenty-1446.html',
    'https://wbs.pl/rekrutacja-1357.html',
    'https://wbs.pl/zespol-1348.html',
    'https://wbs.pl/misja-1347.html',
    'https://wbs.pl/projekty-1417.html',
    'https://wbs.pl/biblioteka-1433.html',
    'https://wbs.pl/kontakt-1385.html',
    'https://wbs.pl/ogloszenia_zapytania_ofertowe-3933.html',
  ];
  
  // Crawl all pages
  await crawl(startUrls);
  
  // Save data
  saveJsonData();
}

main().catch(console.error);
