/**
 * CMS Content Library
 * Provides functions to access and manage content from the JSON-based CMS
 */

import fs from 'fs';
import path from 'path';
import { cache } from 'react';

const CMS_DATA_DIR = path.join(process.cwd(), 'src', 'data', 'cms');
const CONTENT_DIR = path.join(process.cwd(), 'src', 'content', 'articles');
const PUBLIC_DIR = path.join(process.cwd(), 'public');

// Filenames that are NOT genuine article content images
// (logos, sponsor images, UI assets present on every page)
const BRANDING_FILENAMES = [
  'wbs-logo-white.png', 'wbs-logo.png', 'wbs-przedszkole-logo.jpg',
  'ambasada-logo.png', '4_logotypy-kopia.jpg', 'de.png', 'lang_pl.gif',
  // site-wide sponsor/partner images
  'artis-beactive.jpg', 'db.jpg', 'messer_claim.jpg', 'polish_diary2.jpg',
  'rr_o.o.male.jpg', 'sponsor.jpg', 'sponsor2.jpg', 'sponsor3.jpg', 'sponsor4.jpg',
  'vbl.jpg', 'arrow-up.png', 'ece_logo_www.jpg', 'lidl_logo_4c_ol_small.jpg',
  'logo_westminster_unternehme.jpg', 'logockw_jpg_copy_hp.png',
  'promedica24_logo.jpg',
];

/**
 * Check if a filename looks like a logo/sponsor image by heuristics.
 * Even filenames not in BRANDING_FILENAMES can be detected this way.
 */
function looksLikeLogo(filename: string): boolean {
  const lower = filename.toLowerCase();
  return BRANDING_FILENAMES.includes(filename) ||
    lower.includes('logo') ||
    lower.includes('sponsor') ||
    lower.includes('claim') ||
    lower.startsWith('de.') ||
    lower === 'arrow-up.png';
}

/**
 * Find the best featured image for an article.
 * 1. Checks if the frontmatter image exists and is a real photo.
 * 2. If it's a logo or missing, searches the article directory for any real photo.
 * 3. Falls back to the healthiest available logo if no photos exist.
 */
function resolveFeaturedImage(featuredImage: string | null, slug: string): string | null {
  const articleImgDir = path.join(PUBLIC_DIR, 'images', 'articles', slug);
  const exists = (p: string) => fs.existsSync(path.join(PUBLIC_DIR, p));

  // 1. If we have a featured image from frontmatter, check if it's valid and on disk
  if (featuredImage) {
    const filename = path.basename(featuredImage);
    const isBranding = BRANDING_FILENAMES.includes(filename);
    
    // If it's a real content image AND it exists on disk, use it!
    if (!isBranding && exists(featuredImage)) {
      return featuredImage;
    }
  }

  // 2. Either no image, or the image was a logo/missing. 
  // Look for ANY real content image in the article's folder as a better choice.
  if (fs.existsSync(articleImgDir)) {
    try {
      const files = fs.readdirSync(articleImgDir);
      
      // Sort: prefer files that don't look like logos, then by file size (largest = most likely a photo)
      const sortedByBest = files
        .filter(f => ['.jpg', '.jpeg', '.png', '.webp'].includes(path.extname(f).toLowerCase()))
        .sort((a, b) => {
          const aLogo = looksLikeLogo(a);
          const bLogo = looksLikeLogo(b);
          if (aLogo !== bLogo) return aLogo ? 1 : -1; // non-logos first
          // Among same type, prefer larger files
          const sizeA = fs.statSync(path.join(articleImgDir, a)).size;
          const sizeB = fs.statSync(path.join(articleImgDir, b)).size;
          return sizeB - sizeA;
        });
      
      // Find the first file that is a real photo (not a logo)
      const contentImage = sortedByBest.find(f => !looksLikeLogo(f));
      
      if (contentImage) {
        return `/images/articles/${slug}/${contentImage}`;
      }
      
      // 3. Last fallback: Use whatever we have (likely a logo) if it's better than nothing
      // If the original featuredImage exists (even if it's a logo), use it.
      if (featuredImage && exists(featuredImage)) {
        return featuredImage;
      }
      
      // Otherwise, best available image from sort (might be a logo but better than nothing)
      if (sortedByBest.length > 0) {
        return `/images/articles/${slug}/${sortedByBest[0]}`;
      }
    } catch { /* ignore */ }
  }

  // Truly nothing found
  return featuredImage && exists(featuredImage) ? featuredImage : null;
}

export interface Article {
  slug: string;
  title: string;
  date: string;
  category: string;
  tags: string[] | any[];
  author: string;
  featuredImage: string | null | any;
  excerpt: string;
  content: string;
  lang: 'pl' | 'de' | 'en';
  originalUrl: string;
  draft: boolean | any;
}

export interface PdfDocument {
  filename: string;
  title: string;
  category: string;
  url: string;
  size: number;
}

export interface ContentIndex {
  updatedAt: string;
  totalArticles: number;
  articles: Array<{
    slug: string;
    title: string;
    date: string;
    category: string;
    featuredImage: string | null;
    languages: string[];
  }>;
}

export interface PdfCatalog {
  updatedAt: string;
  totalPdfs: number;
  categories: string[];
  pdfs: PdfDocument[];
}

// Read JSON file helper
function readJsonFile<T>(filename: string): T | null {
  try {
    const filePath = path.join(CMS_DATA_DIR, filename);
    if (!fs.existsSync(filePath)) {
      return null;
    }
    const content = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(content) as T;
  } catch (error) {
    console.error(`Error reading ${filename}:`, error);
    return null;
  }
}

// Get content index
export const getContentIndex = cache((): ContentIndex | null => {
  return readJsonFile<ContentIndex>('articles-index.json');
});

// Get PDF catalog
export const getPdfCatalog = cache((): PdfCatalog | null => {
  return readJsonFile<PdfCatalog>('pdfs-catalog.json');
});

// Get all articles for a language
export const getAllArticles = cache((lang: string = 'pl'): Article[] => {
  const langDir = path.join(CONTENT_DIR, lang);
  
  if (!fs.existsSync(langDir)) {
    return [];
  }
  
  const files = fs.readdirSync(langDir).filter(f => f.endsWith('.mdx'));
  
  return files.map(file => {
    const slug = file.replace('.mdx', '');
    const filePath = path.join(langDir, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    
    // Parse frontmatter
    const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
    const frontmatter: Record<string, any> = {};
    
    if (frontmatterMatch) {
      const lines = frontmatterMatch[1].split('\n');
      lines.forEach(line => {
        const [key, ...valueParts] = line.split(':');
        if (key && valueParts.length > 0) {
          let value: any = valueParts.join(':').trim();
          // Handle arrays
          if (value.startsWith('[') && value.endsWith(']')) {
            value = value.slice(1, -1).split(',').map((v: string) => v.trim().replace(/"/g, ''));
          }
          // Handle null
          if (value === 'null') {
            value = null;
          }
          // Handle booleans
          if (value === 'true') value = true;
          if (value === 'false') value = false;
          // Remove quotes from strings
          if (typeof value === 'string' && value.startsWith('"') && value.endsWith('"')) {
            value = value.slice(1, -1);
          }
          (frontmatter as any)[key.trim()] = value;
        }
      });
    }
    
    // Get content body (everything after frontmatter)
    const body = content.replace(/^---\n[\s\S]*?\n---\n/, '').trim();
    
    // Extract excerpt from body if not in frontmatter
    let excerpt = frontmatter.excerpt || '';
    if (!excerpt) {
      excerpt = body
        .replace(/[#*_~`\[\]\(\)]/g, '')
        .split('\n')
        .filter(p => p.trim().length > 0)[0]
        ?.substring(0, 200) || '';
      if (excerpt.length >= 200) excerpt += '...';
    }
    
    return {
      slug,
      title: frontmatter.title || 'Untitled',
      date: frontmatter.date || new Date().toISOString().split('T')[0],
      category: frontmatter.category || 'other',
      tags: Array.isArray(frontmatter.tags) ? frontmatter.tags : [],
      author: frontmatter.author || 'WBS',
      featuredImage: resolveFeaturedImage(frontmatter.featuredImage, slug),
      excerpt,
      content: body,
      lang: lang as 'pl' | 'de' | 'en',
      originalUrl: frontmatter.originalUrl || '',
      draft: frontmatter.draft || false,
    };
  });
});

// Get article by slug
export const getArticleBySlug = cache((slug: string, lang: string = 'pl'): Article | null => {
  const filePath = path.join(CONTENT_DIR, lang, `${slug}.mdx`);
  
  if (!fs.existsSync(filePath)) {
    return null;
  }
  
  const content = fs.readFileSync(filePath, 'utf-8');
  
  // Parse frontmatter
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
  const frontmatter: Record<string, any> = {};
  
  if (frontmatterMatch) {
    const lines = frontmatterMatch[1].split('\n');
    lines.forEach(line => {
      const [key, ...valueParts] = line.split(':');
      if (key && valueParts.length > 0) {
        let value: any = valueParts.join(':').trim();
        if (value.startsWith('[') && value.endsWith(']')) {
          value = value.slice(1, -1).split(',').map((v: string) => v.trim().replace(/"/g, ''));
        }
        if (value === 'null') value = null;
        if (value === 'true') value = true;
        if (value === 'false') value = false;
        if (typeof value === 'string' && value.startsWith('"') && value.endsWith('"')) {
          value = value.slice(1, -1);
        }
        (frontmatter as any)[key.trim()] = value;
      }
    });
  }
  
  // Get content body
  const body = content.replace(/^---\n[\s\S]*?\n---\n/, '').trim();
  
  let excerpt = frontmatter.excerpt || '';
  if (!excerpt) {
    excerpt = body
      .replace(/[#*_~`\[\]\(\)]/g, '')
      .split('\n')
      .filter(p => p.trim().length > 0)[0]
      ?.substring(0, 200) || '';
    if (excerpt.length >= 200) excerpt += '...';
  }
  
  return {
    slug,
    title: frontmatter.title || 'Untitled',
    date: frontmatter.date || new Date().toISOString().split('T')[0],
    category: frontmatter.category || 'other',
    tags: Array.isArray(frontmatter.tags) ? frontmatter.tags : [],
    author: frontmatter.author || 'WBS',
    featuredImage: resolveFeaturedImage(frontmatter.featuredImage, slug),
    excerpt,
    content: body,
    lang: lang as 'pl' | 'de' | 'en',
    originalUrl: frontmatter.originalUrl || '',
    draft: frontmatter.draft || false,
  };
});

// Get articles by category
export const getArticlesByCategory = cache((category: string, lang: string = 'pl'): Article[] => {
  const allArticles = getAllArticles(lang);
  return allArticles.filter(article => article.category === category && !article.draft);
});

// Get recent articles
export const getRecentArticles = cache((limit: number = 10, lang: string = 'pl'): Article[] => {
  const allArticles = getAllArticles(lang);
  return allArticles
    .filter(article => !article.draft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
});

// Get PDFs by category
export const getPdfsByCategory = cache((category: string): PdfDocument[] => {
  const catalog = getPdfCatalog();
  if (!catalog) return [];
  
  return catalog.pdfs.filter(pdf => pdf.category === category);
});

// Get all PDFs
export const getAllPdfs = cache((): PdfDocument[] => {
  const catalog = getPdfCatalog();
  if (!catalog) return [];
  return catalog.pdfs;
});

// Format file size
export const formatFileSize = (bytes: number): string => {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
};
