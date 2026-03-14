import translations from './translations.json';

export type TranslationKey = keyof typeof translations.pl;
export type Locale = 'pl' | 'de' | 'en';

export interface Translations {
  common: {
    skipToContent: string;
    loading: string;
    error: string;
    success: string;
    close: string;
    open: string;
    menu: string;
    search: string;
    searchPlaceholder: string;
    noResults: string;
    viewAll: string;
    readMore: string;
    showMore: string;
    showLess: string;
    back: string;
    next: string;
    previous: string;
    cancel: string;
    confirm: string;
    save: string;
    delete: string;
    edit: string;
    add: string;
    required: string;
    optional: string;
  };
  navigation: {
    home: string;
    news: string;
    about: string;
    parentZone: string;
    studentZone: string;
    impressum: string;
    contact: string;
  };
  // Add more as needed
}
