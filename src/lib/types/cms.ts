/**
 * CMS Type Definitions
 * Shared types for the CMS adapter layer
 */

export interface Article {
  id?: string;               // UUID from CMS (optional for JSON adapter)
  slug: string;              // URL-friendly identifier
  title: string;
  excerpt: string;
  content: string;           // HTML or Markdown
  category: string;
  tags: string[];
  author: string | Author;
  featuredImage: Image | string | null;
  gallery?: Image[];
  status?: 'draft' | 'published' | 'archived';
  publishedAt?: string | null;
  date: string;              // ISO 8601 or YYYY-MM-DD
  createdAt?: string;
  updatedAt?: string;
  translations?: {
    pl?: string;  // Article ID for Polish version
    de?: string;  // Article ID for German version
    en?: string;  // Article ID for English version
  };
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    canonicalUrl?: string;
  };
  lang?: 'pl' | 'de' | 'en';
  originalUrl?: string;
  draft?: boolean;
}

export interface Author {
  id: string;
  name: string;
  email?: string;
  avatar?: string;
}

export interface Image {
  id?: string;
  url: string;
  alt: string;
  width?: number;
  height?: number;
  caption?: string;
}

export interface PdfDocument {
  id?: string;
  filename: string;
  title: string;
  category: string;
  url: string;
  size: number;
  uploadedAt?: string;
  description?: string;
}

export interface StaffMember {
  id?: string;
  name: string;
  role: string;
  email?: string;
  phone?: string;
  bio?: string;
  avatar?: string;
  departments?: string[];
}

export interface Event {
  id?: string;
  title: string;
  description: string;
  startDate: string;       // ISO 8601
  endDate?: string;        // ISO 8601
  location?: string;
  category?: string;
  featuredImage?: Image | string | null;
  url?: string;
  allDay?: boolean;
}

export interface SiteSettings {
  schoolName?: string;
  tagline?: Record<string, string>;  // Translations
  address?: {
    street: string;
    city: string;
    postalCode: string;
    country: string;
  };
  contact?: {
    phone: string;
    email: string;
    fax?: string;
  };
  social?: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    youtube?: string;
  };
  legal?: {
    regon?: string;
    nip?: string;
    dpoEmail?: string;
  };
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

// Adapter options
export interface GetArticlesOptions {
  locale?: string;
  category?: string;
  limit?: number;
  page?: number;
  status?: 'published' | 'draft' | 'all';
}

export interface GetEventsOptions {
  startDate?: string;
  endDate?: string;
  category?: string;
}

// Health check
export interface HealthStatus {
  status: 'healthy' | 'degraded' | 'unhealthy';
  latency: number;
  message?: string;
}

// API Response types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: ApiError;
  meta?: {
    page?: number;
    perPage?: number;
    total?: number;
    totalPages?: number;
  };
}

export interface ApiError {
  code: string;
  message: string;
  details?: Record<string, any>;
}

// Auth types
export interface AuthCredentials {
  email: string;
  password: string;
}

export interface AuthResponse {
  success: true;
  data: {
    accessToken: string;
    refreshToken?: string;
    expiresAt: string;
    user: {
      id: string;
      email: string;
      name: string;
      role: 'admin' | 'editor' | 'viewer';
      permissions: string[];
    };
  };
}
