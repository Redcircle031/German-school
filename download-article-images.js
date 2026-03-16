#!/usr/bin/env node
/**
 * Article Image Downloader
 * 
 * Parses each article's HTML from wbs-extract/articles/[slug]/article.html,
 * finds gallery photo URLs (pub/cms/photos/...), downloads them from wbs.pl,
 * and saves them to public/images/articles/[slug]/.
 * 
 * Only runs for articles that exist in src/content/articles/pl/
 */
const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const BASE_URL = 'https://wbs.pl/';
const EXTRACT_DIR = path.join(__dirname, 'wbs-extract/articles');
const CONTENT_DIR = path.join(__dirname, 'src/content/articles/pl');
const PUBLIC_DIR = path.join(__dirname, 'public/images/articles');

const BRANDING = new Set([
  'wbs-logo-white.png', 'wbs-logo.png', 'wbs-przedszkole-logo.jpg',
  'ambasada-logo.png', '4_logotypy-kopia.jpg', 'de.png', 'lang_pl.gif',
]);

function download(url, dest) {
  return new Promise((resolve, reject) => {
    if (fs.existsSync(dest)) return resolve('exists');
    
    const protocol = url.startsWith('https') ? https : http;
    const file = fs.createWriteStream(dest);
    
    const req = protocol.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        file.close();
        fs.unlinkSync(dest);
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        file.close();
        fs.unlinkSync(dest);
        return reject(new Error(`HTTP ${res.statusCode} for ${url}`));
      }
      res.pipe(file);
      file.on('finish', () => file.close(() => resolve('downloaded')));
    });
    
    req.on('error', (err) => {
      file.close();
      if (fs.existsSync(dest)) fs.unlinkSync(dest);
      reject(err);
    });
    req.setTimeout(15000, () => {
      req.destroy();
      reject(new Error('Timeout'));
    });
  });
}

async function processArticle(slug, extractSlug) {
  const htmlPath = path.join(EXTRACT_DIR, extractSlug, 'article.html');
  if (!fs.existsSync(htmlPath)) return 0;
  
  const html = fs.readFileSync(htmlPath, 'utf-8');
  
  // Find all photo gallery URLs like: pub/cms/photos/12345/filename.jpg
  // Exclude 800x600_ thumbnails — we want the originals
  const regex = /pub\/cms\/photos\/(\d+)\/([^")\s]+\.(jpg|jpeg|png|webp))/gi;
  const seen = new Set();
  const photos = [];
  
  let match;
  while ((match = regex.exec(html)) !== null) {
    const filename = match[2];
    // Skip thumbnails
    if (filename.startsWith('800x600_')) continue;
    const url = BASE_URL + match[0];
    if (!seen.has(url)) {
      seen.add(url);
      photos.push({ url, filename });
    }
  }

  // Also look for /pub/uploader/images/... patterns
  const uploaderRegex = /\/pub\/uploader\/images\/([^")\s]+\.(jpg|jpeg|png|webp|gif))/gi;
  while ((match = uploaderRegex.exec(html)) !== null) {
    const filename = path.basename(match[1]);
    if (BRANDING.has(filename)) continue;
    const url = 'https://wbs.pl' + match[0];
    if (!seen.has(url)) {
      seen.add(url);
      photos.push({ url, filename });
    }
  }
  
  if (photos.length === 0) return 0;
  
  const destDir = path.join(PUBLIC_DIR, slug);
  if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });
  
  let count = 0;
  for (const { url, filename } of photos) {
    const safeName = filename.replace(/[^a-zA-Z0-9._-]/g, '_');
    const destPath = path.join(destDir, safeName);
    try {
      const result = await download(url, destPath);
      if (result === 'downloaded') count++;
    } catch (err) {
      // silently skip failed downloads
    }
    // Small delay to be polite
    await new Promise(r => setTimeout(r, 100));
  }
  
  return count;
}

async function main() {
  // Get all slugs that exist in the content dir
  const contentSlugs = fs.readdirSync(CONTENT_DIR)
    .filter(f => f.endsWith('.mdx'))
    .map(f => f.replace('.mdx', ''));
  
  console.log(`Processing ${contentSlugs.length} articles...`);
  
  let totalDownloaded = 0;
  
  for (const slug of contentSlugs) {
    // The extract dir uses the same slug naming convention
    const extractPath = path.join(EXTRACT_DIR, slug);
    let extractSlug = slug;
    
    if (!fs.existsSync(extractPath)) {
      console.log(`  [SKIP] No extract found for: ${slug}`);
      continue;
    }
    
    // Check if already has photos
    const destDir = path.join(PUBLIC_DIR, slug);
    if (fs.existsSync(destDir)) {
      const existing = fs.readdirSync(destDir).filter(f => !BRANDING.has(f) && /\.(jpg|jpeg|png|webp)$/i.test(f));
      if (existing.length > 0) {
        console.log(`  [SKIP] Already has ${existing.length} photos: ${slug}`);
        continue;
      }
    }
    
    process.stdout.write(`  [DOWNLOAD] ${slug}... `);
    const count = await processArticle(slug, extractSlug);
    console.log(`${count} photos downloaded`);
    totalDownloaded += count;
  }
  
  console.log(`\nDone! Downloaded ${totalDownloaded} photos total.`);
}

main().catch(console.error);
