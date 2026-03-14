#!/usr/bin/env node
/**
 * Transform extracted JSON to CMS-compatible format
 */

const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = __dirname;
const DATABASE_PATH = path.join(__dirname, '..', 'wbs-complete-database.json');

// Load database
const database = JSON.parse(fs.readFileSync(DATABASE_PATH, 'utf8'));

console.log('=== Transforming Data for Custom CMS ===\n');

// ============================================
// 1. Transform Articles for CMS Import
// ============================================

const cmsArticles = database.articles.map((article, index) => {
  // Clean slug for URL
  const cleanSlug = article.slug
    .toLowerCase()
    .replace(/[_-]+/g, '-')
    .replace(/[^a-z0-9-ąćęłńóśźż]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
  
  // Map category to CMS category
  const categoryMap = {
    'events': 'wydarzenia',
    'achievements': 'sukcesy',
    'news': 'ogloszenia',
    'other': 'aktualnosci'
  };
  
  return {
    // Core fields
    id: `article-${index + 1}`,
    slug: cleanSlug,
    
    // Multi-language content
    title_pl: article.title,
    title_de: '', // To be translated
    title_en: '', // To be translated
    
    excerpt_pl: article.excerpt || '',
    excerpt_de: '',
    excerpt_en: '',
    
    content_pl: article.content || '',
    content_de: '',
    content_en: '',
    
    // Metadata
    category: categoryMap[article.category] || 'aktualnosci',
    status: 'published',
    published_at: article.date ? `${article.date}T00:00:00Z` : null,
    
    // SEO
    meta_title_pl: article.title,
    meta_title_de: '',
    meta_title_en: '',
    
    meta_description_pl: article.excerpt || '',
    meta_description_de: '',
    meta_description_en: '',
    
    // Media references
    featured_image: article.images && article.images[0] ? article.images[0].localPath : null,
    gallery_images: article.images ? article.images.map(img => img.localPath) : [],
    attachments: article.pdfs ? article.pdfs.map(pdf => pdf.localPath) : [],
    
    // Legacy
    old_url: article.originalUrl,
    
    // Timestamps
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  };
});

// ============================================
// 2. Transform Images for CMS Import
// ============================================

const cmsImages = [];
const imageSet = new Set();

// Images are at the top level of the database
const allImages = database.images || [];

allImages.forEach((img, idx) => {
  const imgPath = img.path || img.localPath;
  if (img && imgPath && !imageSet.has(imgPath)) {
    imageSet.add(imgPath);
    const filename = path.basename(imgPath);
    cmsImages.push({
      id: `img-${idx + 1}`,
      filename: filename,
      original_path: imgPath,
      file_path: `uploads/${filename}`,
      mime_type: 'image/jpeg',
      alt_text_pl: img.alt || '',
      alt_text_de: '',
      alt_text_en: '',
      caption_pl: '',
      caption_de: '',
      caption_en: '',
      type: 'image',
      is_public: true,
      article_slug: img.articleSlug || img.article_slug || null
    });
  }
});

// ============================================
// 3. Transform PDFs for CMS Import
// ============================================

const cmsPdfs = [];
const pdfSet = new Set();

// PDFs were stored in the pdfs/ folder, scan from filesystem
const pdfsDir = path.join(__dirname, '..', 'pdfs');
if (fs.existsSync(pdfsDir)) {
  const pdfFiles = fs.readdirSync(pdfsDir).filter(f => f.endsWith('.pdf'));
  pdfFiles.forEach((filename, idx) => {
    if (!pdfSet.has(filename)) {
      pdfSet.add(filename);
      cmsPdfs.push({
        id: `pdf-${idx + 1}`,
        filename: filename,
        original_path: `pdfs/${filename}`,
        file_path: `uploads/documents/${filename}`,
        mime_type: 'application/pdf',
        title_pl: filename.replace('.pdf', '').replace(/_/g, ' '),
        title_de: '',
        title_en: '',
        type: 'pdf',
        is_public: true
      });
    }
  });
}

// ============================================
// 4. Create SQL Import Script
// ============================================

let sqlScript = `-- WBS CMS Database Import Script
-- Generated: ${new Date().toISOString()}
-- Articles: ${cmsArticles.length}
-- Images: ${cmsImages.length}
-- PDFs: ${cmsPdfs.length}

BEGIN;

-- Insert categories
INSERT INTO categories (slug, name_pl, name_de, name_en, color, icon) VALUES
('aktualnosci', 'Aktualności', 'Aktuelles', 'News', '#3B82F6', 'newspaper'),
('wydarzenia', 'Wydarzenia', 'Veranstaltungen', 'Events', '#8B5CF6', 'calendar'),
('sukcesy', 'Sukcesy', 'Erfolge', 'Achievements', '#F59E0B', 'trophy'),
('ogloszenia', 'Ogłoszenia', 'Mitteilungen', 'Announcements', '#10B981', 'megaphone'),
('projekty', 'Projekty', 'Projekte', 'Projects', '#EC4899', 'folder')
ON CONFLICT (slug) DO NOTHING;

`;

// Insert articles
sqlScript += `\n-- Insert articles\n`;
cmsArticles.forEach(article => {
  sqlScript += `INSERT INTO articles (
    id, slug, title_pl, title_de, title_en,
    excerpt_pl, content_pl, category_id, status,
    published_at, meta_title_pl, meta_description_pl,
    old_url, created_at, updated_at
  ) VALUES (
    '${article.id}',
    '${article.slug}',
    '${article.title_pl.replace(/'/g, "''")}',
    '${article.title_de}',
    '${article.title_en}',
    '${(article.excerpt_pl || '').substring(0, 500).replace(/'/g, "''")}',
    '${(article.content_pl || '').substring(0, 10000).replace(/'/g, "''")}',
    (SELECT id FROM categories WHERE slug = '${article.category}'),
    '${article.status}',
    ${article.published_at ? `'${article.published_at}'` : 'NULL'},
    '${article.meta_title_pl.substring(0, 255).replace(/'/g, "''")}',
    '${article.meta_description_pl.substring(0, 500).replace(/'/g, "''")}',
    '${article.old_url}',
    '${article.created_at}',
    '${article.updated_at}'
  ) ON CONFLICT (slug) DO NOTHING;\n`;
});

sqlScript += `\nCOMMIT;\n`;

// ============================================
// 5. Save All Files
// ============================================

// JSON format for CMS import API
fs.writeFileSync(
  path.join(OUTPUT_DIR, 'cms-import-articles.json'),
  JSON.stringify({ articles: cmsArticles }, null, 2)
);

fs.writeFileSync(
  path.join(OUTPUT_DIR, 'cms-import-images.json'),
  JSON.stringify({ images: cmsImages }, null, 2)
);

fs.writeFileSync(
  path.join(OUTPUT_DIR, 'cms-import-pdfs.json'),
  JSON.stringify({ pdfs: cmsPdfs }, null, 2)
);

// SQL script
fs.writeFileSync(
  path.join(OUTPUT_DIR, 'cms-import.sql'),
  sqlScript
);

// Combined import file
fs.writeFileSync(
  path.join(OUTPUT_DIR, 'cms-full-import.json'),
  JSON.stringify({
    metadata: {
      exportedAt: new Date().toISOString(),
      version: '1.0.0',
      counts: {
        articles: cmsArticles.length,
        images: cmsImages.length,
        pdfs: cmsPdfs.length
      }
    },
    categories: [
      { slug: 'aktualnosci', name_pl: 'Aktualności', name_de: 'Aktuelles', name_en: 'News', color: '#3B82F6' },
      { slug: 'wydarzenia', name_pl: 'Wydarzenia', name_de: 'Veranstaltungen', name_en: 'Events', color: '#8B5CF6' },
      { slug: 'sukcesy', name_pl: 'Sukcesy', name_de: 'Erfolge', name_en: 'Achievements', color: '#F59E0B' },
      { slug: 'ogloszenia', name_pl: 'Ogłoszenia', name_de: 'Mitteilungen', name_en: 'Announcements', color: '#10B981' },
      { slug: 'projekty', name_pl: 'Projekty', name_de: 'Projekte', name_en: 'Projects', color: '#EC4899' }
    ],
    articles: cmsArticles,
    images: cmsImages,
    pdfs: cmsPdfs
  }, null, 2)
);

// ============================================
// Summary
// ============================================

console.log('✅ Transformation Complete!\n');
console.log(`Articles: ${cmsArticles.length}`);
console.log(`Images: ${cmsImages.length}`);
console.log(`PDFs: ${cmsPdfs.length}`);
console.log('\nFiles created:');
console.log('  1. cms-import-articles.json - Articles for API import');
console.log('  2. cms-import-images.json - Images metadata');
console.log('  3. cms-import-pdfs.json - PDFs metadata');
console.log('  4. cms-import.sql - PostgreSQL import script');
console.log('  5. cms-full-import.json - Combined import file');

// Category breakdown
const categoryCounts = {};
cmsArticles.forEach(a => {
  categoryCounts[a.category] = (categoryCounts[a.category] || 0) + 1;
});

console.log('\nCategory Breakdown:');
Object.entries(categoryCounts).forEach(([cat, count]) => {
  console.log(`  ${cat}: ${count}`);
});
