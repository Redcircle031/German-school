'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

const locales = [
  { code: 'pl', name: 'Polski', flag: '🇵🇱' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
]

export function LanguageSwitcher() {
  const pathname = usePathname()
  
  // Get current locale from pathname
  const currentLocale = pathname.split('/')[1] || 'pl'
  
  // Remove locale from pathname to get the base path
  const basePath = pathname.replace(/^\/(pl|de|en)/, '') || '/'

  return (
    <div className="flex items-center gap-1">
      {locales.map((locale) => {
        const isActive = currentLocale === locale.code
        
        return (
          <Link
            key={locale.code}
            href={`/${locale.code}${basePath}`}
            className={`px-2 py-1 text-sm rounded transition-colors ${
              isActive
                ? 'bg-blue-100 text-blue-700 font-medium'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
            title={locale.name}
          >
            <span className="mr-1">{locale.flag}</span>
            <span className="hidden sm:inline">{locale.code.toUpperCase()}</span>
          </Link>
        )
      })}
    </div>
  )
}
