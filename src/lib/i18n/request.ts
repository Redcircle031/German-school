import { getRequestConfig } from 'next-intl/server';
import translations from './translations.json';

export type Locale = 'pl' | 'de' | 'en';

export const locales = ['pl', 'de', 'en'] as const;
export type Locales = typeof locales;
export const defaultLocale: Locale = 'de';

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;

  // Validate that the incoming `locale` parameter is valid
  if (!locale || !locales.includes(locale as Locale)) {
    return {
      locale: defaultLocale,
      messages: translations[defaultLocale],
    };
  }

  return {
    locale,
    messages: translations[locale as Locale],
  };
});
