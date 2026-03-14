# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

WBS (Willy Brandt Schule) school website - a trilingual (Polish/German/English) Next.js 14 App Router site for a Polish-German school in Warsaw. Uses next-intl for i18n with locale-based routing (`/pl/`, `/de/`, `/en/`).

## Commands

```bash
npm run dev          # Start dev server
npm run build        # Production build
npm run lint         # ESLint check
npm run lint:fix     # ESLint auto-fix
npm run type-check   # TypeScript type checking (tsc --noEmit)
npm run format       # Prettier format
npm run format:check # Prettier check
```

## Architecture

### Routing & i18n

- **App Router** with `[locale]` dynamic segment: `src/app/[locale]/`
- **next-intl** handles locale detection, routing, and translations
- Middleware at `src/middleware.ts` routes requests to the correct locale
- i18n config at `src/lib/i18n/request.ts` - uses `getRequestConfig({ requestLocale })` API (next-intl v3.26+)
- Translations in a single JSON file: `src/lib/i18n/translations.json` (keyed by `pl`, `de`, `en`)
- Default locale: `pl`, available: `pl`, `de`, `en`

### Key Patterns

- **Server Components by default** - pages are async server components using `getTranslations()` from `next-intl/server`
- **Client Components** use `'use client'` directive and `useTranslations()` hook (Header, Footer, CookieConsent)
- **Component props**: Components receive `lang` prop (string) for locale-dependent rendering
- **Static data**: JSON files in `src/data/extracted/` (news, staff, events, navigation, documents, school-info) with multilingual fields keyed by locale (`{ pl: "...", de: "...", en: "..." }`)
- When indexing multilingual data objects with `locale` (typed as `string`), cast with `as keyof typeof obj.field`

### Styling

- **Tailwind CSS** with custom design tokens in `tailwind.config.ts`
- Brand colors: `primary` (blue), `secondary` (red), `accent` (gold)
- Fonts: Inter (body, `--font-inter`), Plus Jakarta Sans (headings, `--font-plus-jakarta-sans`)
- Custom component classes in `src/app/globals.css`: `.btn-primary`, `.card`, `.section`, `.container-custom`, `.input`, etc.
- Tailwind plugins: typography, forms, aspect-ratio

### Layout Structure

- `src/app/[locale]/layout.tsx` - Root locale layout with fonts and NextIntlClientProvider
- `src/components/layout/Header.tsx` - Fixed header with nav from `navigation.json`, language switcher
- `src/components/layout/Footer.tsx` - Footer with contact info and links
- `src/components/features/` - Feature components (Hero, QuickLinks, CookieConsent, etc.)

### Path Aliases

- `@/*` maps to `./src/*`
