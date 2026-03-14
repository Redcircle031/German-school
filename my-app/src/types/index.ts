// WBS CMS TypeScript Types

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: 'admin' | 'editor' | 'contributor';
  avatar?: string;
  isActive: boolean;
  lastLogin?: string;
  createdAt: string;
}

export interface Category {
  id: string;
  slug: string;
  name: {
    pl: string;
    de: string;
    en: string;
  };
  description?: {
    pl?: string;
    de?: string;
    en?: string;
  };
  color?: string;
  icon?: string;
  sortOrder: number;
  isActive: boolean;
}

export interface Article {
  id: string;
  slug: string;
  title: {
    pl: string;
    de?: string;
    en?: string;
  };
  excerpt?: {
    pl?: string;
    de?: string;
    en?: string;
  };
  content: {
    pl: string;
    de?: string;
    en?: string;
  };
  categoryId: string;
  category?: Category;
  authorId?: string;
  author?: User;
  featuredImageId?: string;
  featuredImage?: Media;
  status: 'draft' | 'published' | 'archived';
  publishedAt?: string;
  eventDate?: string;
  eventEndDate?: string;
  isFeatured: boolean;
  isSticky: boolean;
  viewCount: number;
  metaTitle?: {
    pl?: string;
    de?: string;
    en?: string;
  };
  metaDescription?: {
    pl?: string;
    de?: string;
    en?: string;
  };
  oldUrl?: string;
  images: Media[];
  pdfs: Media[];
  createdAt: string;
  updatedAt: string;
  createdBy?: User;
  updatedBy?: User;
}

export interface Media {
  id: string;
  filename: string;
  originalFilename: string;
  filePath: string;
  fileSize: number;
  mimeType: string;
  width?: number;
  height?: number;
  altText?: {
    pl?: string;
    de?: string;
    en?: string;
  };
  caption?: {
    pl?: string;
    de?: string;
    en?: string;
  };
  type: 'image' | 'pdf' | 'document' | 'video';
  isPublic: boolean;
  uploadedBy?: User;
  createdAt: string;
  articleSlug?: string;
}

export interface Tag {
  id: string;
  slug: string;
  name: {
    pl: string;
    de?: string;
    en?: string;
  };
}

export interface NavigationItem {
  id: string;
  parentId?: string;
  children?: NavigationItem[];
  label: {
    pl: string;
    de?: string;
    en?: string;
  };
  url: string;
  type: 'link' | 'page' | 'category';
  position: 'header' | 'footer' | 'sidebar';
  sortOrder: number;
  isActive: boolean;
}

export interface Page {
  id: string;
  slug: string;
  title: {
    pl: string;
    de?: string;
    en?: string;
  };
  content?: {
    pl?: string;
    de?: string;
    en?: string;
  };
  template: string;
  isPublished: boolean;
  sortOrder: number;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  meta?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
  error?: {
    code: string;
    message: string;
    details?: Record<string, string>[];
  };
}

export interface ArticleFilter {
  lang?: 'pl' | 'de' | 'en';
  category?: string;
  status?: 'draft' | 'published' | 'archived';
  search?: string;
  page?: number;
  limit?: number;
  sort?: 'published_at' | 'created_at' | 'title';
  order?: 'asc' | 'desc';
}

export type Language = 'pl' | 'de' | 'en';

export const translations = {
  pl: {
    name: 'Polski',
    articles: 'Aktualności',
    events: 'Wydarzenia',
    achievements: 'Sukcesy',
    news: 'Ogłoszenia',
    about: 'O szkole',
    forParents: 'Dla rodziców',
    forStudents: 'Dla uczniów',
    contact: 'Kontakt',
    admin: 'Panel administracyjny',
    login: 'Zaloguj się',
    logout: 'Wyloguj się',
    save: 'Zapisz',
    publish: 'Opublikuj',
    draft: 'Wersja robocza',
    preview: 'Podgląd',
    edit: 'Edytuj',
    delete: 'Usuń',
    cancel: 'Anuluj',
    confirm: 'Potwierdź',
    search: 'Szukaj',
    filter: 'Filtruj',
    categories: 'Kategorie',
    tags: 'Tagi',
    media: 'Media',
    navigation: 'Nawigacja',
    settings: 'Ustawienia',
    dashboard: 'Dashboard',
    totalArticles: 'Liczba artykułów',
    totalImages: 'Liczba zdjęć',
    recentActivity: 'Ostatnia aktywność',
  },
  de: {
    name: 'Deutsch',
    articles: 'Aktuelles',
    events: 'Veranstaltungen',
    achievements: 'Erfolge',
    news: 'Mitteilungen',
    about: 'Über uns',
    forParents: 'Für Eltern',
    forStudents: 'Für Schüler',
    contact: 'Kontakt',
    admin: 'Administrationspanel',
    login: 'Anmelden',
    logout: 'Abmelden',
    save: 'Speichern',
    publish: 'Veröffentlichen',
    draft: 'Entwurf',
    preview: 'Vorschau',
    edit: 'Bearbeiten',
    delete: 'Löschen',
    cancel: 'Abbrechen',
    confirm: 'Bestätigen',
    search: 'Suchen',
    filter: 'Filtern',
    categories: 'Kategorien',
    tags: 'Tags',
    media: 'Medien',
    navigation: 'Navigation',
    settings: 'Einstellungen',
    dashboard: 'Dashboard',
    totalArticles: 'Artikel gesamt',
    totalImages: 'Bilder gesamt',
    recentActivity: 'Letzte Aktivität',
  },
  en: {
    name: 'English',
    articles: 'News',
    events: 'Events',
    achievements: 'Achievements',
    news: 'Announcements',
    about: 'About',
    forParents: 'For Parents',
    forStudents: 'For Students',
    contact: 'Contact',
    admin: 'Admin Panel',
    login: 'Login',
    logout: 'Logout',
    save: 'Save',
    publish: 'Publish',
    draft: 'Draft',
    preview: 'Preview',
    edit: 'Edit',
    delete: 'Delete',
    cancel: 'Cancel',
    confirm: 'Confirm',
    search: 'Search',
    filter: 'Filter',
    categories: 'Categories',
    tags: 'Tags',
    media: 'Media',
    navigation: 'Navigation',
    settings: 'Settings',
    dashboard: 'Dashboard',
    totalArticles: 'Total Articles',
    totalImages: 'Total Images',
    recentActivity: 'Recent Activity',
  },
};
