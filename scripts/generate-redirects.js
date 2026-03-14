#!/usr/bin/env node

/**
 * Redirect Generator Script
 * 
 * Creates Vercel redirects from old URLs to new structure
 * Generates redirect rules for .htaccess, nginx, and vercel.json
 * 
 * Usage: node scripts/generate-redirects.js
 */

const fs = require('fs');
const path = require('path');

// Configuration
const CONFIG = {
  mappingPath: path.join(__dirname, '../wbs-extract/cms-migration/redirect-mapping.csv'),
  contentPath: path.join(__dirname, '../src/content/news'),
  outputDir: path.join(__dirname, '..'),
};

/**
 * Parse redirect mapping CSV
 */
function parseRedirectMapping() {
  const redirects = [];
  
  if (!fs.existsSync(CONFIG.mappingPath)) {
    console.log('⚠️  No redirect mapping found, generating from content...');
    return redirects;
  }
  
  const csv = fs.readFileSync(CONFIG.mappingPath, 'utf-8');
  const lines = csv.split('\n').slice(1); // Skip header
  
  for (const line of lines) {
    if (!line.trim()) continue;
    
    const [id, slug, oldUrl, newUrl, category, priority] = line.split(',');
    
    if (oldUrl && newUrl) {
      redirects.push({
        old: oldUrl.replace(/"/g, '').trim(),
        new: newUrl.replace(/"/g, '').trim(),
        status: 301,
        category: category?.replace(/"/g, '').trim() || 'news',
        priority: priority?.replace(/"/g, '').trim() || 'MEDIUM',
      });
    }
  }
  
  return redirects;
}

/**
 * Generate redirects from MDX files
 */
function generateFromContent() {
  const redirects = [];
  
  if (!fs.existsSync(CONFIG.contentPath)) {
    return redirects;
  }
  
  const files = fs.readdirSync(CONFIG.contentPath).filter(f => f.endsWith('.mdx'));
  
  for (const file of files) {
    const slug = file.replace('.mdx', '');
    
    // Old URL pattern
    const oldUrl = `/${slug}.html`;
    const newUrl = `/pl/news/${slug}`;
    
    redirects.push({
      old: oldUrl,
      new: newUrl,
      status: 301,
      category: 'news',
      priority: 'MEDIUM',
    });
  }
  
  return redirects;
}

/**
 * Generate Vercel redirects
 */
function generateVercelRedirects(redirects) {
  const vercelConfig = {
    redirects: redirects.map(r => ({
      source: r.old.replace('.html', '\\.html'),
      destination: r.new,
      permanent: true,
    })),
  };
  
  return vercelConfig;
}

/**
 * Generate .htaccess redirects
 */
function generateHtaccessRedirects(redirects) {
  const lines = [
    '# WBS Website Redirects',
    '# Generated automatically',
    '# Last updated: ' + new Date().toISOString(),
    '',
    'RewriteEngine On',
    '',
  ];
  
  for (const redirect of redirects) {
    const oldPath = redirect.old.replace(/^\//, '');
    const newPath = redirect.new;
    lines.push(`Redirect 301 /${oldPath} ${newPath}`);
  }
  
  return lines.join('\n');
}

/**
 * Generate nginx redirects
 */
function generateNginxRedirects(redirects) {
  const lines = [
    '# WBS Website Redirects',
    '# Generated automatically',
    '# Last updated: ' + new Date().toISOString(),
    '',
  ];
  
  for (const redirect of redirects) {
    const oldPath = redirect.old.replace('.html', '\\.html');
    const newPath = redirect.new;
    lines.push(`rewrite ^${oldPath}$ ${newPath} permanent;`);
  }
  
  return lines.join('\n');
}

/**
 * Main redirect generation function
 */
async function generateRedirects() {
  console.log('🔀 Starting redirect generation...\n');
  
  // Get redirects from mapping
  let redirects = parseRedirectMapping();
  
  // Add redirects from content
  const contentRedirects = generateFromContent();
  redirects = [...redirects, ...contentRedirects];
  
  // Remove duplicates
  const uniqueRedirects = redirects.filter(
    (r, i, arr) => arr.findIndex(x => x.old === r.old) === i
  );
  
  console.log(`✓ Generated ${uniqueRedirects.length} redirects\n`);
  
  // Generate Vercel config
  const vercelConfig = generateVercelRedirects(uniqueRedirects);
  const vercelPath = path.join(CONFIG.outputDir, 'vercel.json');
  
  // Merge with existing vercel.json if exists
  let existingVercel = {};
  if (fs.existsSync(vercelPath)) {
    existingVercel = JSON.parse(fs.readFileSync(vercelPath, 'utf-8'));
  }
  
  const mergedVercel = {
    ...existingVercel,
    redirects: vercelConfig.redirects,
  };
  
  fs.writeFileSync(vercelPath, JSON.stringify(mergedVercel, null, 2));
  console.log('✓ Generated vercel.json redirects');
  
  // Generate .htaccess
  const htaccess = generateHtaccessRedirects(uniqueRedirects);
  const htaccessPath = path.join(CONFIG.outputDir, '.htaccess');
  fs.writeFileSync(htaccessPath, htaccess);
  console.log('✓ Generated .htaccess redirects');
  
  // Generate nginx config
  const nginx = generateNginxRedirects(uniqueRedirects);
  const nginxPath = path.join(CONFIG.outputDir, 'nginx-redirects.conf');
  fs.writeFileSync(nginxPath, nginx);
  console.log('✓ Generated nginx redirects');
  
  // Create redirect manifest
  const manifest = {
    generatedAt: new Date().toISOString(),
    totalRedirects: uniqueRedirects.length,
    byCategory: {},
    byPriority: {},
  };
  
  // Count by category and priority
  for (const redirect of uniqueRedirects) {
    manifest.byCategory[redirect.category] = (manifest.byCategory[redirect.category] || 0) + 1;
    manifest.byPriority[redirect.priority] = (manifest.byPriority[redirect.priority] || 0) + 1;
  }
  
  const manifestPath = path.join(__dirname, '../planning/redirect-manifest.json');
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  
  // Print summary
  console.log('\n✅ Redirect generation complete!\n');
  console.log('📊 SUMMARY:');
  console.log('═'.repeat(50));
  console.log(`Total redirects:      ${uniqueRedirects.length}`);
  console.log('\nBy category:');
  Object.entries(manifest.byCategory).forEach(([cat, count]) => {
    console.log(`  ${cat.padEnd(15)} ${count}`);
  });
  console.log('\nBy priority:');
  Object.entries(manifest.byPriority).forEach(([pri, count]) => {
    console.log(`  ${pri.padEnd(15)} ${count}`);
  });
  console.log('\nGenerated files:');
  console.log('  - vercel.json');
  console.log('  - .htaccess');
  console.log('  - nginx-redirects.conf');
  console.log('═'.repeat(50));
}

// Run generation
if (require.main === module) {
  generateRedirects().catch(error => {
    console.error('❌ Error during generation:', error.message);
    process.exit(1);
  });
}

module.exports = { generateRedirects };
