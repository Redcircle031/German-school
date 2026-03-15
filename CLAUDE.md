# CLAUDE.md

## Project Overview

**WBS (Willy Brandt Schule)** — Trilingual school website for the Polish-German School of Meetings and Dialogue in Warsaw. Next.js 14 App Router with next-intl i18n. Domain: wbs.pl | Founded: 1978 | Patron: Willy Brandt. Two campuses: Main (grades 1-12, ul. Ledochowskiej 3) and Kindergarten (ul. Chlapowskiego 1).

30 page routes, 25+ components, 5 API routes, 7 static data files, trilingual (PL/DE/EN).

## Commands

```bash
npm run dev          # Dev server (localhost:3000)
npm run build        # Production build — ALWAYS run after structural changes
npm run lint         # ESLint check
npm run lint:fix     # ESLint auto-fix
npm run type-check   # TypeScript (tsc --noEmit)
npm run format       # Prettier format
npm run format:check # Prettier check
```

## Architecture

### Routing & i18n
- **App Router** with `[locale]` dynamic segment: `src/app/[locale]/`
- **next-intl v3.26+** — `getRequestConfig({ requestLocale })` API
- Single translations file: `src/lib/i18n/translations.json` (keyed by `pl`, `de`, `en`)
- Default locale: `pl` | Middleware at `src/middleware.ts` forces locale prefix (always `/pl/`, `/de/`, `/en/`)

### Shared Layout (CRITICAL)
- `src/app/[locale]/layout.tsx` provides: **Header, Footer, CookieConsent, SkipLink, `<main>`**
- **Pages MUST NOT import Header/Footer/CookieConsent** — the layout handles all shared chrome
- **No nested `<main>` tags** — layout provides the single `<main id="main-content">`
- Pages use `<div>` or `<section>` or `<>` fragments as their top-level wrapper
- Pages without full-bleed heroes need `pt-24` on first element (fixed header clearance)
- `PageHeader` component already provides `pt-32` — no extra padding needed on pages using it

### Component Patterns
- **Server Components by default** — async functions using `getTranslations()` from `next-intl/server`
- **Client Components** — `'use client'` directive + `useTranslations()` hook (Header, Footer, Hero, CookieConsent)
- **Props**: Components receive `lang` prop (string) for locale-dependent rendering
- **Multilingual data indexing**: cast with `as keyof typeof obj.field` when locale is `string`
- **PageHeader** (hero banner at `@/components/features/PageHeader`) ≠ **Header** (site nav at `@/components/layout/Header`)
- Inline locale pattern: `locale === 'pl' ? '...' : locale === 'de' ? '...' : '...'`

### Data Layer
- **Static JSON**: `src/data/extracted/` — staff (59 members), school-info, navigation, news, events, documents
- **CMS**: `src/lib/cms.ts` — article fetching with `React.cache()`, smart image resolution (filters logos)
- **Content articles**: `src/content/articles/` with manifest
- **Types**: `src/lib/types/cms.ts` — Article, Author, StaffMember, Event, PdfDocument, etc.
- **Multilingual data pattern**: `{ pl: "...", de: "...", en: "..." }` object keys

### Styling System
- **Tailwind CSS** with custom tokens in `tailwind.config.ts`
- **Brand colors** (CURRENT — after design warmth pass):
  - Primary: **Red** `#dc2626` — CTAs, active states, primary actions ONLY
  - Accent: **Heritage Gold** `#d4a853` — badges, tags, metadata, decorative elements
  - Neutral: **Warm cream** `#faf8f5` (surface), `#f5f0ea` (cream) — NOT cold gray
- **Fonts**: Inter (body `--font-inter`), Plus Jakarta Sans (headings `--font-plus-jakarta-sans`)
- **Custom classes** in `src/app/globals.css`: `.btn-primary`, `.card`, `.section`, `.container-custom`, `.input`, `.nav-link`, `.badge`, `.prose-custom`
- **Design rule**: Use `font-medium` (not `font-bold`) for section headings — warmth principle
- **Design rule**: Use `accent-*` colors for badges/tags, `red-*` for CTAs only
- **Tailwind plugins**: typography, forms, aspect-ratio

### Animation System
- **Framer Motion**: variants in `src/lib/animations/variants.ts` (container, slideUp, fadeIn, scaleUp)
- **ScrollReveal**: `src/components/ui/ScrollReveal.tsx` — intersection observer wrapper
- **CSS animations** in globals.css: `.animate-fade-in`, `.stagger-1` through `.stagger-5`

### Security
- **Auth**: `src/lib/auth/` — bcrypt (12 rounds), HMAC-SHA256 sessions (24hr), CSRF tokens, rate limiting
- **API routes**: contact (Zod validation, 10/hr rate limit), newsletter, search, admin login/logout
- **Security headers**: HSTS, CSP, X-Frame-Options configured in `next.config.js`
- **NEVER** hardcode credentials — use env vars (ADMIN_EMAIL, ADMIN_PASSWORD_HASH, SESSION_SECRET)

### Key Files Quick Reference
| Purpose | Path |
|---------|------|
| Root layout | `src/app/[locale]/layout.tsx` |
| Homepage | `src/app/[locale]/page.tsx` |
| Header (nav) | `src/components/layout/Header.tsx` |
| Footer | `src/components/layout/Footer.tsx` |
| PageHeader (hero) | `src/components/features/PageHeader.tsx` |
| Hero (homepage) | `src/components/features/Homepage/Hero.tsx` |
| CMS library | `src/lib/cms.ts` |
| CMS types | `src/lib/types/cms.ts` |
| Translations | `src/lib/i18n/translations.json` |
| Tailwind config | `tailwind.config.ts` |
| Global CSS | `src/app/globals.css` |
| Middleware | `src/middleware.ts` |
| Auth system | `src/lib/auth/index.ts` |
| Utilities | `src/lib/utils.ts` |
| Animation variants | `src/lib/animations/variants.ts` |

## Design Principles
- **Heritage warmth**: gold accents, warm cream neutrals, soft font weights
- **Red = CTAs only**: buttons, primary links, call-to-action elements
- **Gold/Accent = metadata**: category badges, tags, labels, decorative accents
- **font-medium** for section headings (not font-bold) — approachable school feel
- **Warm backgrounds**: `bg-neutral-50` maps to `#faf8f5` (warm cream, not cold gray)
- **Typography hierarchy**: h1 text-4xl+, h2 text-3xl, always font-medium for warmth

## Known Issues
- Build produces ESLint warnings (unused vars, img elements) — non-blocking, acceptable
- `.next` cache can go stale → fix: `rm -rf .next && npm run build`
- Admin credentials are placeholder — need env vars for production
- Contact form email sending is TODO (returns placeholder success)
- Newsletter signup collects email but doesn't send yet
- Admin dashboard is skeleton only

# currentDate
Today's date is 2026-03-15.
