# WBS CMS - Custom Content Management System

A modern, trilingual (PL/DE/EN) CMS built with Next.js 14+, TypeScript, and PostgreSQL.

## Features

- **Multi-language support**: Polish, German, English
- **Article management**: Create, edit, publish articles with rich text editor
- **Media management**: Upload and organize images and PDFs
- **SEO optimization**: Meta titles, descriptions, keywords per article
- **Navigation management**: Drag-and-drop menu editor
- **User authentication**: Role-based access control
- **Archive browsing**: Year-based archive navigation

## Tech Stack

- **Frontend**: Next.js 14+ (App Router), React, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, Node.js
- **Database**: PostgreSQL (Vercel Postgres or self-hosted)
- **Media Storage**: Cloudflare R2 (S3-compatible)
- **Rich Text Editor**: TipTap / Slate.js
- **Authentication**: NextAuth.js

## Project Structure

```
my-app/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── admin/              # CMS Admin Panel
│   │   │   ├── layout.tsx      # Admin layout with navigation
│   │   │   ├── dashboard/      # Dashboard page
│   │   │   ├── articles/       # Article management
│   │   │   │   ├── page.tsx    # Article list
│   │   │   │   └── [id]/
│   │   │   │       └── edit/
│   │   │   │           └── page.tsx  # Article editor
│   │   │   ├── media/          # Media management
│   │   │   └── navigation/     # Navigation editor
│   │   ├── api/                # API Routes
│   │   │   ├── articles/       # Article API
│   │   │   ├── media/          # Media API
│   │   │   └── navigation/     # Navigation API
│   │   ├── page.tsx            # Home page
│   │   └── layout.tsx          # Root layout
│   └── ...
├── database/
│   └── schema.sql              # PostgreSQL schema
├── .env.example                # Environment variables template
└── package.json
```

## Getting Started

### 1. Install Dependencies

```bash
cd my-app
npm install
```

### 2. Configure Environment Variables

```bash
cp .env.example .env.local
# Edit .env.local with your database and storage credentials
```

### 3. Set Up Database

```bash
# Create PostgreSQL database
psql -U postgres -c "CREATE DATABASE wbs_cms;"

# Import schema
psql -U postgres -d wbs_cms < database/schema.sql

# Import existing content (from migration)
psql -U postgres -d wbs_cms < cms-migration/database/cms-import.sql
```

### 4. Run Development Server

```bash
npm run dev
```

Access the application:
- Public site: http://localhost:3000
- Admin panel: http://localhost:3000/admin/dashboard

## CMS Admin Routes

| Route | Description |
|-------|-------------|
| `/admin/dashboard` | Dashboard with stats and quick actions |
| `/admin/articles` | List all articles with search/filter |
| `/admin/articles/new` | Create new article |
| `/admin/articles/[id]/edit` | Edit existing article |
| `/admin/media` | Media library with upload functionality |
| `/admin/navigation` | Menu editor with drag-and-drop |

## API Endpoints

### Articles
- `GET /api/articles` - List articles (paginated)
- `POST /api/articles` - Create article
- `GET /api/articles/[id]` - Get single article
- `PUT /api/articles/[id]` - Update article
- `DELETE /api/articles/[id]` - Delete article

### Media
- `GET /api/media` - List media files
- `POST /api/media` - Upload file
- `DELETE /api/media` - Bulk delete files

### Navigation
- `GET /api/navigation` - Get navigation tree
- `POST /api/navigation` - Create nav item
- `PUT /api/navigation` - Bulk update (reorder)

## Database Schema

### Core Tables

**articles**: Store multilingual article content
- `id`, `slug`, `title_pl/de/en`, `content_pl/de/en`, `excerpt_pl/de/en`
- `category_id`, `author_id`, `status`, `publish_date`
- `seo_title`, `seo_description`, `keywords`

**media**: Store file metadata
- `id`, `filename`, `url`, `thumbnail_url`
- `size`, `type`, `width`, `height`
- `article_id` (optional link to article)

**categories**: Article categories
- `id`, `name_pl/de/en`, `slug`, `sort_order`

**navigation**: Menu items
- `id`, `label_pl/de/en`, `url`
- `parent_id`, `sort_order`, `is_active`

## URL Redirects

Old CMS URLs are redirected to new clean URLs via `next.config.ts`:
- `/strona_glowna-1298.html` → `/pl`
- `/aktualne_wydarzenia-1339.html` → `/pl/aktualnosci`
- `/archiwum_aktualnosci-1355-2025.html` → `/pl/aktualnosci/archiwum/2025`
- `/:article-name-:id.html` → `/pl/aktualnosci/:article-name`

## Deployment

### Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

Configure environment variables in Vercel dashboard.

### Self-hosted

Build and start the production server:

```bash
npm run build
npm start
```

## Migration Notes

The content from the old CMS has been extracted and is available in:
- `cms-migration/database/cms-import.sql` - Full SQL import
- `cms-migration/extracted/wbs-complete-database.json` - Raw extracted data

To complete the migration:
1. Set up the PostgreSQL database
2. Import `cms-import.sql`
3. Copy images from `cms-migration/extracted/images/` to R2/S3 bucket
4. Verify all redirects work correctly

## Development Notes

### Adding New Features

1. Create/modify API routes in `src/app/api/`
2. Update admin pages in `src/app/admin/`
3. Add database migrations in `database/migrations/`
4. Update types in `src/types/`

### Code Style

- TypeScript for all new code
- Tailwind CSS for styling
- React functional components with hooks
- Server Components by default, Client Components for interactivity

## License

Copyright © 2026 WBS School
