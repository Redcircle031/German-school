#!/usr/bin/env node

/**
 * Content Analysis Script
 * 
 * Analyzes all articles from WBS content database
 * Categorizes by type, priority, and maps to new structure
 * 
 * Usage: node --max-old-space-size=4096 scripts/analyze-content.js
 */

const fs = require('fs');
const path = require('path');

// Increase memory limit
if (typeof require !== 'undefined') {
  try {
    require('v8').setFlagsFromString('--max-old-space-size=4096');
  } catch (e) {
    // Ignore if v8 module not available
  }
}

// Configuration
const CONFIG = {
  inputPath: path.join(__dirname, '../wbs-extract/content-export/wbs-content-database.json'),
  outputPath: path.join(__dirname, '../planning/content-analysis-report.json'),
  csvOutputPath: path.join(__dirname, '../planning/content-mapping.csv'),
};

// Category mapping (old → new)
const CATEGORY_MAPPING = {
  aktualnosci: { new: 'news', path: '/pl/news/', priority: 'HIGH' },
  wydarzenia: { new: 'events', path: '/pl/events/', priority: 'HIGH' },
  sukcesy: { new: 'achievements', path: '/pl/students/achievements/', priority: 'MEDIUM' },
  ogloszenia: { new: 'announcements', path: '/pl/news/announcements/', priority: 'MEDIUM' },
  projekty: { new: 'projects', path: '/pl/students/projects/', priority: 'MEDIUM' },
  archiwum: { new: 'archive', path: '/pl/archive/', priority: 'LOW' },
  other: { new: 'general', path: '/pl/news/', priority: 'LOW' },
};

// Date thresholds for priority
const DATE_THRESHOLDS = {
  HIGH: new Date('2024-01-01'),
  MEDIUM: new Date('2022-01-01'),
};

/**
 * Parse article date from various formats
 */
function parseDate(dateStr) {
  if (!dateStr) return null;
  
  // Try various date formats
  const formats = [
    /^(\d{4})-(\d{2})-(\d{2})$/,  // YYYY-MM-DD
    /^(\d{2})\.(\d{2})\.(\d{4})$/, // DD.MM.YYYY
  ];
  
  for (const format of formats) {
    const match = dateStr.match(format);
    if (match) {
      if (match[1].length === 4) {
        return new Date(`${match[1]}-${match[2]}-${match[3]}`);
      } else {
        return new Date(`${match[3]}-${match[2]}-${match[1]}`);
      }
    }
  }
  
  return new Date(dateStr);
}

/**
 * Determine content priority based on date and category
 */
function determinePriority(article) {
  // Check category first
  const categoryInfo = CATEGORY_MAPPING[article.category] || CATEGORY_MAPPING.other;
  if (categoryInfo.priority === 'HIGH') return 'HIGH';
  
  // Check date
  const date = parseDate(article.published_at || article.date);
  if (!date) return 'MEDIUM';
  
  if (date > DATE_THRESHOLDS.HIGH) return 'HIGH';
  if (date > DATE_THRESHOLDS.MEDIUM) return 'MEDIUM';
  return 'LOW';
}

/**
 * Extract plain text from HTML for excerpt
 */
function extractPlainText(html) {
  if (!html) return '';
  
  // Remove HTML tags
  let text = html.replace(/<[^>]*>/g, ' ');
  
  // Decode common HTML entities
  text = text
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
  
  // Clean up whitespace
  text = text.replace(/\s+/g, ' ').trim();
  
  // Limit length
  return text.substring(0, 200) + (text.length > 200 ? '...' : '');
}

/**
 * Map old URL to new URL
 */
function mapUrl(article) {
  const categoryInfo = CATEGORY_MAPPING[article.category] || CATEGORY_MAPPING.other;
  const slug = article.slug || article.id || `article-${article.id}`;
  
  // Remove ID from slug if present
  const cleanSlug = slug.replace(/-\d+$/, '');
  
  return {
    old: article.old_url || `https://wbs.pl/${article.slug}.html`,
    new: `${categoryInfo.path}${cleanSlug}`,
    redirectType: '301',
  };
}

/**
 * Analyze content statistics
 */
function analyzeContent(articles) {
  const stats = {
    total: articles.length,
    byCategory: {},
    byPriority: { HIGH: 0, MEDIUM: 0, LOW: 0 },
    byYear: {},
    withImages: 0,
    withPdf: 0,
    trilingual: { pl: 0, de: 0, en: 0 },
  };
  
  articles.forEach(article => {
    // Category stats
    const category = article.category || 'other';
    stats.byCategory[category] = (stats.byCategory[category] || 0) + 1;
    
    // Priority stats
    const priority = determinePriority(article);
    stats.byPriority[priority]++;
    
    // Year stats
    const date = parseDate(article.published_at || article.date);
    if (date) {
      const year = date.getFullYear();
      stats.byYear[year] = (stats.byYear[year] || 0) + 1;
    }
    
    // Content stats
    if (article.gallery_images && article.gallery_images.length > 0) {
      stats.withImages++;
    }
    if (article.attachments && article.attachments.length > 0) {
      stats.withPdf++;
    }
    
    // Language stats
    if (article.title_pl) stats.trilingual.pl++;
    if (article.title_de) stats.trilingual.de++;
    if (article.title_en) stats.trilingual.en++;
  });
  
  return stats;
}

/**
 * Main analysis function
 */
function analyzeContent() {
  console.log('🔍 Starting content analysis...\n');
  
  // Load content database
  console.log('📄 Loading content database...');
  const database = JSON.parse(fs.readFileSync(CONFIG.inputPath, 'utf-8'));
  const articles = database.articles || [];
  
  console.log(`✓ Loaded ${articles.length} articles\n`);
  
  // Analyze each article
  console.log('📊 Analyzing articles...');
  const analyzedArticles = articles.map((article, index) => {
    const priority = determinePriority(article);
    const categoryInfo = CATEGORY_MAPPING[article.category] || CATEGORY_MAPPING.other;
    const urlMapping = mapUrl(article);
    
    return {
      id: article.id || index,
      slug: article.slug,
      title: {
        pl: article.title_pl || '',
        de: article.title_de || '',
        en: article.title_en || '',
      },
      category: {
        old: article.category || 'other',
        new: categoryInfo.new,
      },
      priority,
      date: article.published_at || article.date || null,
      url: urlMapping,
      hasImages: !!(article.gallery_images && article.gallery_images.length > 0),
      hasPdf: !!(article.attachments && article.attachments.length > 0),
      languages: {
        pl: !!article.title_pl,
        de: !!article.title_de,
        en: !!article.title_en,
      },
      excerpt: {
        pl: extractPlainText(article.content_pl),
        de: extractPlainText(article.content_de),
        en: extractPlainText(article.content_en),
      },
    };
  });
  
  // Generate statistics
  console.log('📈 Generating statistics...');
  const stats = analyzeContent(articles);
  
  // Create report
  const report = {
    generatedAt: new Date().toISOString(),
    sourceDatabase: CONFIG.inputPath,
    statistics: stats,
    articles: analyzedArticles,
    summary: {
      totalArticles: stats.total,
      highPriority: stats.byPriority.HIGH,
      mediumPriority: stats.byPriority.MEDIUM,
      lowPriority: stats.byPriority.LOW,
      categories: Object.keys(stats.byCategory).length,
      yearsCovered: Object.keys(stats.byYear).sort(),
      trilingualPercentage: Math.round((stats.trilingual.pl / stats.total) * 100),
    },
  };
  
  // Save report
  console.log('💾 Saving analysis report...');
  fs.writeFileSync(CONFIG.outputPath, JSON.stringify(report, null, 2));
  console.log(`✓ Report saved to: ${CONFIG.outputPath}\n`);
  
  // Save CSV mapping
  console.log('📄 Saving URL mapping CSV...');
  const csvContent = [
    ['ID', 'Slug', 'Old URL', 'New URL', 'Category', 'Priority', 'Date', 'Title PL'],
    ...analyzedArticles.map(a => [
      a.id,
      a.slug,
      a.url.old,
      a.url.new,
      a.category.new,
      a.priority,
      a.date || '',
      `"${a.title.pl.replace(/"/g, '""')}"`,
    ]),
  ].map(row => row.join(',')).join('\n');
  
  fs.writeFileSync(CONFIG.csvOutputPath, csvContent);
  console.log(`✓ CSV saved to: ${CONFIG.csvOutputPath}\n`);
  
  // Print summary
  console.log('📊 ANALYSIS SUMMARY');
  console.log('═'.repeat(50));
  console.log(`Total Articles:        ${stats.total}`);
  console.log(`\nBy Priority:`);
  console.log(`  HIGH:               ${stats.byPriority.HIGH} (${Math.round(stats.byPriority.HIGH / stats.total * 100)}%)`);
  console.log(`  MEDIUM:             ${stats.byPriority.MEDIUM} (${Math.round(stats.byPriority.MEDIUM / stats.total * 100)}%)`);
  console.log(`  LOW:                ${stats.byPriority.LOW} (${Math.round(stats.byPriority.LOW / stats.total * 100)}%)`);
  console.log(`\nBy Category:`);
  Object.entries(stats.byCategory).forEach(([cat, count]) => {
    console.log(`  ${cat.padEnd(20)} ${count} (${Math.round(count / stats.total * 100)}%)`);
  });
  console.log(`\nBy Year:`);
  Object.entries(stats.byYear)
    .sort(([a], [b]) => b.localeCompare(a))
    .forEach(([year, count]) => {
      console.log(`  ${year}:               ${count}`);
    });
  console.log(`\nContent Features:`);
  console.log(`  With Images:        ${stats.withImages} (${Math.round(stats.withImages / stats.total * 100)}%)`);
  console.log(`  With PDFs:          ${stats.withPdf} (${Math.round(stats.withPdf / stats.total * 100)}%)`);
  console.log(`  Polish Content:     ${stats.trilingual.pl} (${Math.round(stats.trilingual.pl / stats.total * 100)}%)`);
  console.log(`  German Content:     ${stats.trilingual.de} (${Math.round(stats.trilingual.de / stats.total * 100)}%)`);
  console.log(`  English Content:    ${stats.trilingual.en} (${Math.round(stats.trilingual.en / stats.total * 100)}%)`);
  console.log('\n✅ Content analysis complete!\n');
  
  return report;
}

// Run analysis
if (require.main === module) {
  try {
    analyzeContent();
  } catch (error) {
    console.error('❌ Error during analysis:', error.message);
    process.exit(1);
  }
}

module.exports = { analyzeContent, CATEGORY_MAPPING, determinePriority };
