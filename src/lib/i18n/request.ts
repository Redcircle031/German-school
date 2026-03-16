// Re-export from central config for next-intl compatibility
import { locales, defaultLocale } from '../../../i18n';

export { locales, defaultLocale };
export type { Locale } from '../../../i18n';
export const Locales = locales;
