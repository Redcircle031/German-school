#!/usr/bin/env node
/**
 * WBS Website Content Extractor
 * Crawls and downloads all articles, images, PDFs, and materials
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

// Configuration
const BASE_URL = 'https://wbs.pl';
const OUTPUT_DIR = __dirname;

// Track visited URLs and discovered assets
const visitedUrls = new Set();
const discoveredUrls = new Set();
const downloadedFiles = new Set();

// URL patterns to skip
const skipPatterns = [
  /facebook\.com/,
  / Diplo\.de/,
  /lidl\.pl/,
  /kulturawilanow/,
  /ece\.com/,
  /artisclub/,
  /promedica/,
  /messergroup/,
  /westminster/,
  /bahn\.de/,
  /polishdairy/,
  /vbl\.com/,
  /bvbwbswarsaw/,
  /deutscherkindergarten/,
  /asismp/,
  /good-site/,
  /cookiealert/
];

// Helper: Download file
function downloadFile(url, outputPath) {
  return new Promise((resolve, reject) => {
    if (downloadedFiles.has(url)) {
      resolve({ skipped: true });
      return;
    }

    const client = url.startsWith('https') ? https : http;
    const file = fs.createWriteStream(outputPath);
    
    client.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        file.close();
        fs.unlinkSync(outputPath);
        downloadFile(response.headers.location, outputPath).then(resolve).catch(reject);
        return;
      }
      
      if (response.statusCode !== 200) {
        file.close();
        fs.unlinkSync(outputPath);
        reject(new Error(`HTTP ${response.statusCode}`));
        return;
      }

      response.pipe(file);
      file.on('finish', () => {
        file.close();
        downloadedFiles.add(url);
        resolve({ success: true, size: response.headers['content-length'] });
      });
    }).on('error', (err) => {
      fs.unlinkSync(outputPath);
      reject(err);
    });
  });
}

// Helper: Fetch page content
function fetchPage(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    
    client.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        fetchPage(response.headers.location).then(resolve).catch(reject);
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

// Helper: Extract URLs from HTML
function extractUrls(html, baseUrl) {
  const urls = [];
  
  // Extract href links
  const hrefRegex = /href=["']([^"']+)["']/gi;
  let match;
  while ((match = hrefRegex.exec(html)) !== null) {
    let url = match[1];
    if (url.startsWith('/')) {
      url = BASE_URL + url;
    } else if (!url.startsWith('http')) {
      url = baseUrl.replace(/\/[^\/]*$/, '/') + url;
    }
    urls.push(url);
  }
  
  // Extract src links
  const srcRegex = /src=["']([^"']+)["']/gi;
  while ((match = srcRegex.exec(html)) !== null) {
    let url = match[1];
    if (url.startsWith('/')) {
      url = BASE_URL + url;
    } else if (!url.startsWith('http')) {
      url = baseUrl.replace(/\/[^\/]*$/, '/') + url;
    }
    urls.push(url);
  }
  
  return urls;
}

// Helper: Get file extension from URL
function getExtension(url) {
  const pathname = new URL(url).pathname;
  const ext = path.extname(pathname).toLowerCase();
  return ext || '.html';
}

// Helper: Get filename from URL
function getFilename(url) {
  const pathname = new URL(url).pathname;
  let filename = path.basename(pathname) || 'index';
  filename = filename.replace(/[^a-zA-Z0-9._-]/g, '_');
  return filename;
}

// Helper: Determine category from URL
function getCategory(url) {
  const lower = url.toLowerCase();
  if (lower.includes('.pdf')) return 'pdfs';
  if (lower.includes('.jpg') || lower.includes('.jpeg') || lower.includes('.png') || lower.includes('.gif') || lower.includes('.svg') || lower.includes('.webp')) return 'images';
  if (lower.includes('.doc') || lower.includes('.docx') || lower.includes('.xls') || lower.includes('.xlsx') || lower.includes('.ppt') || lower.includes('.pptx')) return 'documents';
  if (lower.includes('aktualn') || lower.includes('wydarzen') || lower.includes('news')) return 'articles';
  if (lower.includes('dokument') || lower.includes('regulamin') || lower.includes('formularz')) return 'documents/forms';
  if (lower.includes('sprawozdan')) return 'documents/reports';
  return 'pages';
}

// Main crawler
async function crawl(url, depth = 0) {
  if (visitedUrls.has(url) || depth > 5) return;
  
  // Skip external URLs
  if (!url.includes('wbs.pl')) return;
  
  // Skip patterns
  for (const pattern of skipPatterns) {
    if (pattern.test(url)) return;
  }
  
  visitedUrls.add(url);
  console.log(`Crawling: ${url}`);
  
  try {
    const html = await fetchPage(url);
    
    // Save HTML page
    const category = getCategory(url);
    const pagesDir = path.join(OUTPUT_DIR, 'pages');
    const filename = getFilename(url) + '.html';
    const outputPath = path.join(pagesDir, filename);
    fs.writeFileSync(outputPath, html);
    console.log(`  Saved: ${outputPath}`);
    
    // Extract and queue URLs
    const urls = extractUrls(html, url);
    for (const discovered of urls) {
      discoveredUrls.add(discovered);
    }
    
  } catch (err) {
    console.error(`  Error: ${err.message}`);
  }
}

// Download discovered assets
async function downloadAssets() {
  console.log('\n--- Downloading Assets ---');
  
  for (const url of discoveredUrls) {
    // Skip non-wbs URLs
    if (!url.includes('wbs.pl')) continue;
    
    // Skip already processed
    if (downloadedFiles.has(url) || visitedUrls.has(url)) continue;
    
    const ext = getExtension(url);
    const category = getCategory(url);
    
    // Determine output directory
    let outputDir;
    if (category === 'images') {
      if (url.includes('gallery') || url.includes('galeria')) {
        outputDir = path.join(OUTPUT_DIR, 'images', 'gallery');
      } else if (url.includes('icon') || url.includes('logo')) {
        outputDir = path.join(OUTPUT_DIR, 'images', 'icons');
      } else if (url.includes('bg') || url.includes('background')) {
        outputDir = path.join(OUTPUT_DIR, 'images', 'backgrounds');
      } else {
        outputDir = path.join(OUTPUT_DIR, 'images', 'other');
      }
    } else {
      outputDir = path.join(OUTPUT_DIR, category);
    }
    
    // Ensure directory exists
    fs.mkdirSync(outputDir, { recursive: true });
    
    // Generate output filename
    let filename = getFilename(url);
    if (!path.extname(filename)) {
      filename += ext;
    }
    const outputPath = path.join(outputDir, filename);
    
    try {
      await downloadFile(url, outputPath);
      console.log(`Downloaded: ${url} -> ${outputPath}`);
    } catch (err) {
      console.error(`Failed: ${url} - ${err.message}`);
    }
  }
}

// Main execution
async function main() {
  console.log('=== WBS Website Extractor ===\n');
  
  // Starting URLs to crawl
  const startUrls = [
    'https://wbs.pl/strona_glowna-1298.html',
    'https://wbs.pl/aktualnosci-1338.html',
    'https://wbs.pl/o_nas-1397.html',
    'https://wbs.pl/szkola_wbs-2098.html',
    'https://wbs.pl/zespol-1399.html',
    'https://wbs.pl/misja-1398.html',
    'https://wbs.pl/dokumenty-2099.html',
    'https://wbs.pl/strefa_rodzica-1401.html',
    'https://wbs.pl/rekrutacja-1402.html',
    'https://wbs.pl/formularze_do_pobrania-1408.html',
    'https://wbs.pl/strefa_ucznia-2111.html',
    'https://wbs.pl/projekty-1417.html',
    'https://wbs.pl/kontakt-1420.html',
    'https://wbs.pl/archiwum-2097.html',
    'https://wbs.pl/wbs_w_mediach-2101.html',
  ];
  
  // Crawl all pages
  console.log('--- Crawling Pages ---');
  for (const url of startUrls) {
    await crawl(url);
  }
  
  // Download all discovered assets
  await downloadAssets();
  
  // Generate report
  const report = {
    date: new Date().toISOString(),
    pagesCrawled: visitedUrls.size,
    assetsDiscovered: discoveredUrls.size,
    filesDownloaded: downloadedFiles.size,
    pages: Array.from(visitedUrls),
    assets: Array.from(discoveredUrls).filter(u => !visitedUrls.has(u))
  };
  
  fs.writeFileSync(
    path.join(OUTPUT_DIR, 'extraction-report.json'),
    JSON.stringify(report, null, 2)
  );
  
  console.log('\n=== Extraction Complete ===');
  console.log(`Pages crawled: ${report.pagesCrawled}`);
  console.log(`Assets discovered: ${report.assetsDiscovered}`);
  console.log(`Files downloaded: ${report.filesDownloaded}`);
}

main().catch(console.error);
