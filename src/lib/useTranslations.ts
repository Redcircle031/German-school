'use client';

import translations from './i18n/translations.json';

type Locale = 'pl' | 'de' | 'en';

export function useTranslations(locale: Locale, namespace?: string) {
  const messages = (translations as any)[locale];
  
  if (!messages) {
    return () => '';
  }
  
  const t = (key: string) => {
    const keys = key.split('.');
    let value: any = namespace ? messages[namespace] : messages;
    
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        return key;
      }
    }
    
    return value || key;
  };
  
  return t;
}
