#!/usr/bin/env node

/**
 * Sitemap Generator Script
 * 
 * Generates XML sitemap for SEO
 * Includes all articles, pages, and important URLs
 * 
 * Usage: node scripts/generate-sitemap.js
 */

const fs = require('fs');
const path = require('path');

// Configuration
const CONFIG = {
  baseUrl: 'https://wbs.pl',
  contentDir: path.join(__dirname, '../src/content'),
  outputPath: path.join(__dirname, '../public/sitemap.xml'),
};

/**
 * Extract URLs from content directory
 */
function extractUrlsFromContent() {
  const urls = [];
  
  function scanDirectory(dir, basePath = '') {
    if (!fs.existsSync(dir)) return;
    
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      if (entry.isDirectory() && !entry.name.startsWith('_')) {
        scanDirectory(path.join(dir, entry.name), path.join(basePath, entry.name));
      } else if (entry.isFile() && entry.name.endsWith('.mdx') && !entry.name.startsWith('_')) {
        const slug = entry.name.replace('.mdx', '');
        const url = `${basePath}/${slug}`.replace(/^\/+/, '/');
        urls.push({
          loc: url,
          lastmod: new Date().toISOString().split('T')[0],
          changefreq: 'weekly',
          priority: 0.6,
        });
      }
    }
  }
  
  scanDirectory(CONFIG.contentDir);
  
  return urls;
}

/**
 * Generate static URLs
 */
function generateStaticUrls() {
  return [
    { loc: '/', lastmod: new Date().toISOString().split('T')[0], changefreq: 'daily', priority: 1.0 },
    { loc: '/pl', lastmod: new Date().toISOString().split('T')[0], changefreq: 'daily', priority: 1.0 },
    { loc: '/de', lastmod: new Date().toISOString().split('T')[0], changefreq: 'daily', priority: 1.0 },
    { loc: '/en', lastmod: new Date().toISOString().split('T')[0], changefreq: 'daily', priority: 1.0 },
    { loc: '/pl/news', lastmod: new Date().toISOString().split('T')[0], changefreq: 'daily', priority: 0.9 },
    { loc: '/pl/events', lastmod: new Date().toISOString().split('T')[0], changefreq: 'weekly', priority: 0.9 },
    { loc: '/pl/about', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.8 },
    { loc: '/pl/students', lastmod: new Date().toISOString().split('T')[0], changefreq: 'weekly', priority: 0.8 },
    { loc: '/pl/parents', lastmod: new Date().toISOString().split('T')[0], changefreq: 'weekly', priority: 0.8 },
    { loc: '/pl/contact', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.7 },
  ];
}

/**
 * Generate sitemap XML
 */
function generateSitemapXml(urls) {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  for (const url of urls) {
    xml += '  <url>\n';
    xml += `    <loc>${CONFIG.baseUrl}${url.loc}</loc>\n`;
    xml += `    <lastmod>${url.lastmod}</lastmod>\n`;
    xml += `    <changefreq>${url.changefreq}</changefreq>\n`;
    xml += `    <priority>${url.priority}</priority>\n`;
    xml += '  </url>\n';
  }
  
  xml += '</urlset>\n';
  
  return xml;
}

/**
 * Generate sitemap index (for multi-language)
 */
function generateSitemapIndex() {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  const languages = ['pl', 'de', 'en'];
  for (const lang of languages) {
    xml += '  <sitemap>\n';
    xml += `    <loc>${CONFIG.baseUrl}/sitemap-${lang}.xml</loc>\n`;
    xml += `    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>\n`;
    xml += '  </sitemap>\n';
  }
  
  xml += '</sitemapindex>\n';
  
  return xml;
}

/**
 * Main sitemap generation function
 */
async function generateSitemap() {
  console.log('🗺️  Starting sitemap generation...\n');
  
  // Get static URLs
  const staticUrls = generateStaticUrls();
  
  // Get URLs from content
  const contentUrls = extractUrlsFromContent();
  
  // Combine all URLs
  const allUrls = [...staticUrls, ...contentUrls];
  
  // Generate XML
  const sitemapXml = generateSitemapXml(allUrls);
  
  // Write sitemap
  fs.mkdirSync(path.dirname(CONFIG.outputPath), { recursive: true });
  fs.writeFileSync(CONFIG.outputPath, sitemapXml);
  
  console.log(`✓ Generated main sitemap (${allUrls.length} URLs)`);
  
  // Generate language-specific sitemaps
  for (const lang of ['pl', 'de', 'en']) {
    const langUrls = allUrls.filter(url => 
      url.loc === '/' || 
      url.loc.startsWith(`/${lang}`) ||
      url.loc.startsWith('/pl') // Default to Polish for content
    );
    
    const langXml = generateSitemapXml(langUrls);
    const langPath = CONFIG.outputPath.replace('.xml', `-${lang}.xml`);
    fs.writeFileSync(langPath, langXml);
    
    console.log(`✓ Generated ${lang} sitemap (${langUrls.length} URLs)`);
  }
  
  // Generate sitemap index
  const indexXml = generateSitemapIndex();
  const indexPath = CONFIG.outputPath.replace('.xml', '-index.xml');
  fs.writeFileSync(indexPath, indexXml);
  
  console.log('✓ Generated sitemap index');
  
  // Create robots.txt reference
  const robotsPath = path.join(__dirname, '../public/robots.txt');
  const robotsContent = `# WBS School Website Robots.txt
User-agent: *
Allow: /

# Sitemap
Sitemap: ${CONFIG.baseUrl}/sitemap-index.xml

# Crawl-delay
Crawl-delay: 1

# Disallow admin/private areas
Disallow: /api/
Disallow: /admin/
Disallow: /private/
`;
  
  fs.writeFileSync(robotsPath, robotsContent);
  console.log('✓ Updated robots.txt');
  
  // Print summary
  console.log('\n✅ Sitemap generation complete!\n');
  console.log('📊 SUMMARY:');
  console.log('═'.repeat(50));
  console.log(`Total URLs:           ${allUrls.length}`);
  console.log(`Static URLs:          ${staticUrls.length}`);
  console.log(`Content URLs:         ${contentUrls.length}`);
  console.log(`\nGenerated files:`);
  console.log('  - sitemap.xml');
  console.log('  - sitemap-pl.xml');
  console.log('  - sitemap-de.xml');
  console.log('  - sitemap-en.xml');
  console.log('  - sitemap-index.xml');
  console.log('  - robots.txt');
  console.log('═'.repeat(50));
}

// Run generation
if (require.main === module) {
  generateSitemap().catch(error => {
    console.error('❌ Error during generation:', error.message);
    process.exit(1);
  });
}

module.exports = { generateSitemap };
