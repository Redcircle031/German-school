import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['pl', 'de', 'en']
const defaultLocale = 'pl'

// Get the preferred locale from request headers
function getLocale(request: NextRequest): string {
  const acceptLanguage = request.headers.get('accept-language')
  
  if (acceptLanguage) {
    // Parse Accept-Language header
    const preferredLocales = acceptLanguage
      .split(',')
      .map(lang => lang.split(';')[0].trim().toLowerCase())
    
    // Check if any preferred locale matches our supported locales
    for (const locale of preferredLocales) {
      // Check exact match
      if (locales.includes(locale)) {
        return locale
      }
      // Check language code only (e.g., "de-DE" -> "de")
      const langCode = locale.split('-')[0]
      if (locales.includes(langCode)) {
        return langCode
      }
    }
  }
  
  return defaultLocale
}

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  
  // Skip proxy for static files and API routes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/static') ||
    pathname.includes('.')
  ) {
    return NextResponse.next()
  }

  // Check if the pathname already has a locale
  const pathnameHasLocale = locales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) {
    return NextResponse.next()
  }

  // Check for locale cookie
  const localeCookie = request.cookies.get('NEXT_LOCALE')?.value
  const locale = localeCookie && locales.includes(localeCookie) 
    ? localeCookie 
    : getLocale(request)

  // Redirect to the localized path
  const newUrl = new URL(`/${locale}${pathname}`, request.url)
  
  // Preserve search params
  newUrl.search = request.nextUrl.search
  
  return NextResponse.redirect(newUrl)
}
