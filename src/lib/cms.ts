/**
 * CMS Content Library
 * Provides functions to access and manage content from the JSON-based CMS
 */

import fs from 'fs';
import path from 'path';
import { cache } from 'react';

const CMS_DATA_DIR = path.join(process.cwd(), 'src', 'data', 'cms');
const CONTENT_DIR = path.join(process.cwd(), 'src', 'content', 'articles');

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
      featuredImage: frontmatter.featuredImage,
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
    featuredImage: frontmatter.featuredImage,
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
