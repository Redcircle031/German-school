import { getRequestConfig } from 'next-intl/server';
import translations from './translations.json';

type Locale = 'pl' | 'de' | 'en';

export const locales = ['pl', 'de', 'en'] as const;
export type Locales = typeof locales;
export const defaultLocale: Locale = 'pl';

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as Locale)) {
    throw new Error(`Invalid locale: ${locale}`);
  }

  return {
    messages: translations[locale as Locale],
  };
});
