import translations from './src/lib/i18n/translations.json';

export const locales = ['pl', 'de', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'pl';

// Get messages for a locale
export function getMessages(locale: Locale) {
  return translations[locale];
}

// Get translations with optional namespace support
export function getTranslations(locale: Locale, namespace?: string) {
  const messages = translations[locale];
  if (namespace) {
    return (messages as any)[namespace] || {};
  }
  return messages;
}
