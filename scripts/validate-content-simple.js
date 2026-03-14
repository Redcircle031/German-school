#!/usr/bin/env node

/**
 * Simple Content Validator Script
 * 
 * Validates migrated content without recursion issues
 * 
 * Usage: node scripts/validate-content-simple.js
 */

const fs = require('fs');
const path = require('path');

// Configuration
const CONFIG = {
  contentDir: path.join(__dirname, '../src/content'),
  imagesDir: path.join(__dirname, '../public/images'),
  documentsDir: path.join(__dirname, '../public/documents'),
};

console.log('✅ Starting simple content validation...\n');

const report = {
  timestamp: new Date().toISOString(),
  passed: true,
  checks: [],
};

// Check 1: MDX files exist
console.log('📄 Checking MDX files...');
const newsDir = path.join(CONFIG.contentDir, 'news');
if (fs.existsSync(newsDir)) {
  const mdxFiles = fs.readdirSync(newsDir).filter(f => f.endsWith('.mdx'));
  const count = mdxFiles.length;
  
  if (count >= 200) {
    console.log(`  ✅ Found ${count} MDX files (expected 200+)\n`);
    report.checks.push({ name: 'MDX Files', status: 'PASS', count });
  } else {
    console.log(`  ⚠️  Found ${count} MDX files (expected 200+)\n`);
    report.checks.push({ name: 'MDX Files', status: 'WARN', count });
  }
} else {
  console.log('  ❌ Content directory not found\n');
  report.checks.push({ name: 'MDX Files', status: 'FAIL' });
  report.passed = false;
}

// Check 2: Images organized
console.log('🖼️  Checking organized images...');
const imageCategories = ['news', 'events', 'campus', 'people', 'programs', 'sports', 'music', 'logos'];
let totalImages = 0;

for (const category of imageCategories) {
  const catDir = path.join(CONFIG.imagesDir, category);
  if (fs.existsSync(catDir)) {
    const images = fs.readdirSync(catDir).filter(f => 
      !f.endsWith('.json') && !f.endsWith('.md')
    );
    totalImages += images.length;
  }
}

if (totalImages >= 1000) {
  console.log(`  ✅ Found ${totalImages} organized images (expected 1000+)\n`);
  report.checks.push({ name: 'Organized Images', status: 'PASS', count: totalImages });
} else {
  console.log(`  ⚠️  Found ${totalImages} organized images (expected 1000+)\n`);
  report.checks.push({ name: 'Organized Images', status: 'WARN', count: totalImages });
}

// Check 3: PDFs cataloged
console.log('📑 Checking PDF catalog...');
const catalogPath = path.join(__dirname, '../src/data/documents.json');
if (fs.existsSync(catalogPath)) {
  const catalog = JSON.parse(fs.readFileSync(catalogPath, 'utf-8'));
  const count = catalog.documents?.length || 0;
  
  if (count >= 30) {
    console.log(`  ✅ Found ${count} cataloged PDFs (expected 30+)\n`);
    report.checks.push({ name: 'PDF Catalog', status: 'PASS', count });
  } else {
    console.log(`  ⚠️  Found ${count} cataloged PDFs (expected 30+)\n`);
    report.checks.push({ name: 'PDF Catalog', status: 'WARN', count });
  }
} else {
  console.log('  ❌ PDF catalog not found\n');
  report.checks.push({ name: 'PDF Catalog', status: 'FAIL' });
  report.passed = false;
}

// Check 4: Sitemap generated
console.log('🗺️  Checking sitemap...');
const sitemapPath = path.join(__dirname, '../public/sitemap.xml');
if (fs.existsSync(sitemapPath)) {
  const sitemap = fs.readFileSync(sitemapPath, 'utf-8');
  const urlCount = (sitemap.match(/<loc>/g) || []).length;
  
  if (urlCount >= 200) {
    console.log(`  ✅ Sitemap has ${urlCount} URLs (expected 200+)\n`);
    report.checks.push({ name: 'Sitemap', status: 'PASS', count: urlCount });
  } else {
    console.log(`  ⚠️  Sitemap has ${urlCount} URLs (expected 200+)\n`);
    report.checks.push({ name: 'Sitemap', status: 'WARN', count: urlCount });
  }
} else {
  console.log('  ❌ Sitemap not found\n');
  report.checks.push({ name: 'Sitemap', status: 'FAIL' });
  report.passed = false;
}

// Check 5: Redirects generated
console.log('🔀 Checking redirects...');
const vercelPath = path.join(__dirname, '../vercel.json');
if (fs.existsSync(vercelPath)) {
  const vercel = JSON.parse(fs.readFileSync(vercelPath, 'utf-8'));
  const redirectCount = vercel.redirects?.length || 0;
  
  if (redirectCount >= 300) {
    console.log(`  ✅ Found ${redirectCount} redirects (expected 300+)\n`);
    report.checks.push({ name: 'Redirects', status: 'PASS', count: redirectCount });
  } else {
    console.log(`  ⚠️  Found ${redirectCount} redirects (expected 300+)\n`);
    report.checks.push({ name: 'Redirects', status: 'WARN', count: redirectCount });
  }
} else {
  console.log('  ❌ Redirects not found\n');
  report.checks.push({ name: 'Redirects', status: 'FAIL' });
  report.passed = false;
}

// Check 6: Sample MDX content validation
console.log('📝 Validating sample MDX content...');
if (fs.existsSync(newsDir)) {
  const sampleFiles = fs.readdirSync(newsDir)
    .filter(f => f.endsWith('.mdx'))
    .slice(0, 5); // Check first 5 files
  
  let validCount = 0;
  for (const file of sampleFiles) {
    const content = fs.readFileSync(path.join(newsDir, file), 'utf-8');
    
    // Check for frontmatter
    const hasFrontmatter = content.startsWith('---');
    const hasTitle = content.includes('title:');
    const hasCategory = content.includes('category:');
    
    if (hasFrontmatter && hasTitle && hasCategory) {
      validCount++;
    }
  }
  
  if (validCount >= 4) {
    console.log(`  ✅ ${validCount}/${sampleFiles.length} sample files valid\n`);
    report.checks.push({ name: 'MDX Content', status: 'PASS', count: validCount });
  } else {
    console.log(`  ⚠️  ${validCount}/${sampleFiles.length} sample files valid\n`);
    report.checks.push({ name: 'MDX Content', status: 'WARN', count: validCount });
  }
}

// Summary
console.log('═'.repeat(60));
console.log('📊 VALIDATION SUMMARY');
console.log('═'.repeat(60));

const passCount = report.checks.filter(c => c.status === 'PASS').length;
const warnCount = report.checks.filter(c => c.status === 'WARN').length;
const failCount = report.checks.filter(c => c.status === 'FAIL').length;

console.log(`\nPassed:  ${passCount}`);
console.log(`Warnings: ${warnCount}`);
console.log(`Failed:  ${failCount}\n`);

if (report.passed && failCount === 0) {
  console.log('✅ VALIDATION PASSED! Content migration successful!\n');
} else if (failCount === 0) {
  console.log('⚠️  VALIDATION PASSED WITH WARNINGS\n');
} else {
  console.log('❌ VALIDATION FAILED - Please fix issues\n');
}

// Save report
const reportPath = path.join(__dirname, '../planning/validation-report-simple.json');
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
console.log(`📄 Report saved to: ${reportPath}\n`);
