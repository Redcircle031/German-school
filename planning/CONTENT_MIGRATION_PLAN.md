# 📋 WBS Content Migration Plan

**Created:** 2026-03-13  
**Status:** Ready for Execution  
**Estimated Duration:** 2-3 weeks

---

## Executive Summary

We have successfully extracted **546 articles**, **1,258 images**, and **37+ PDFs** from the old WBS website. This plan outlines how to organize, process, and migrate all content to the new Next.js structure.

---

## Content Inventory

### Current State

| Content Type | Count | Location | Status |
|--------------|-------|----------|--------|
| **Articles** | 546 | `wbs-extract/content-export/wbs-content-database.json` | ✅ Extracted |
| **Articles (old)** | 203 | `wbs-extract/wbs-complete-database.json` | ✅ Extracted |
| **Images** | 1,258 | `wbs-extract/images/` + articles | ✅ Extracted |
| **PDFs** | 37+ | `wbs-extract/pdfs/` | ✅ Extracted |
| **Staff** | 59 | `src/data/extracted/staff.json` | ✅ Organized |
| **News** | 4 | `src/data/extracted/news.json` | ✅ Organized |
| **Events** | 6 | `src/data/extracted/events.json` | ✅ Organized |
| **Documents** | 15 | `src/data/extracted/documents.json` | ✅ Organized |
| **Navigation** | Complete | `src/data/extracted/navigation.json` | ✅ Organized |

---

## Target Structure

### New Content Organization

```
src/
├── content/                    # NEW: All content in MDX format
│   ├── news/                   # News articles
│   │   ├── _index.mdx          # News listing
│   │   ├── 2025/
│   │   │   └── article-slug.mdx
│   │   └── 2024/
│   │
│   ├── events/                 # Event articles
│   │   ├── _index.mdx
│   │   └── {year}/
│   │
│   ├── pages/                  # Static pages
│   │   ├── about.mdx
│   │   ├── contact.mdx
│   │   └── ...
│   │
│   └── documents/              # Document metadata
│       └── documents.json
│
├── public/
│   ├── images/
│   │   ├── news/               # News images (optimized)
│   │   ├── events/             # Event images
│   │   ├── campus/             # Campus photos
│   │   ├── people/             # People photos
│   │   └── logos/              # Logos and icons
│   │
│   └── documents/
│       ├── forms/              # Forms (PDFs)
│       ├── regulations/        # Regulations
│       └── reports/            # Reports
│
└── data/
    └── extracted/              # Legacy extracted data
        ├── news.json
        ├── staff.json
        └── ...
```

---

## Migration Phases

### Phase 1: Content Analysis (Days 1-3)

**Agent:** Content Analyst Agent

**Tasks:**
1. ✅ Analyze all 546 articles from content database
2. ✅ Categorize by type and priority
3. ✅ Create content inventory spreadsheet
4. ✅ Identify content gaps
5. ✅ Map old URLs to new structure

**Deliverables:**
- Content categorization report
- Priority matrix (High/Medium/Low)
- URL mapping table (300+ URLs)
- Content gaps analysis

**Script:** `scripts/content-analysis.js`

---

### Phase 2: Asset Organization (Days 4-7)

**Agent:** Asset Manager Agent + Image & Media Agent

**Tasks:**
1. ✅ Create organized folder structure in `/public/`
2. ✅ Move and rename all 1,258 images
3. ✅ Organize 37+ PDFs by category
4. ✅ Create asset manifest (JSON)
5. ✅ Optimize images (resize, convert to WebP)
6. ✅ Generate thumbnails

**Deliverables:**
- Organized `/public/images/` folder
- Organized `/public/documents/` folder
- Asset manifest (`assets-manifest.json`)
- Optimized images (multiple sizes)

**Scripts:**
- `scripts/organize-assets.js`
- `scripts/optimize-images.js`

---

### Phase 3: Content Transformation (Days 8-12)

**Agent:** Content Writer Agent + Data Structure Agent

**Tasks:**
1. ✅ Convert HTML content to Markdown/MDX
2. ✅ Extract and clean content
3. ✅ Create trilingual structure (PL/DE/EN)
4. ✅ Write excerpts and meta descriptions
5. ✅ Add proper frontmatter
6. ✅ Map images to new paths
7. ✅ Link PDFs correctly

**Deliverables:**
- MDX files for all articles
- Trilingual content structure
- SEO-optimized metadata
- Clean, readable content

**Scripts:**
- `scripts/html-to-mdx.js`
- `scripts/transform-content.js`

---

### Phase 4: CMS Integration (Days 13-15)

**Agent:** CMS Import Agent

**Tasks:**
1. ✅ Create content schemas (TypeScript)
2. ✅ Set up content collection (if using CMS)
3. ✅ Create import scripts
4. ✅ Validate all content
5. ✅ Test content rendering

**Deliverables:**
- Content schemas (`src/lib/content/schemas.ts`)
- Import scripts
- Validation report
- Test content loaded

**Scripts:**
- `scripts/create-schemas.js`
- `scripts/import-content.js`

---

### Phase 5: SEO & Redirects (Days 16-17)

**Agent:** SEO & Redirect Agent

**Tasks:**
1. ✅ Create redirect map (300+ URLs)
2. ✅ Generate Vercel redirects
3. ✅ Create sitemap.xml
4. ✅ Set up 404 page
5. ✅ Monitor for broken links

**Deliverables:**
- `vercel.json` with redirects
- `sitemap.xml`
- Redirect mapping CSV
- 404 monitoring setup

**Scripts:**
- `scripts/create-redirects.js`
- `scripts/generate-sitemap.js`

---

### Phase 6: Quality Assurance (Days 18-20)

**Agent:** Quality Assurance Agent

**Tasks:**
1. ✅ Verify all content migrated
2. ✅ Check all links work
3. ✅ Test all pages render
4. ✅ Validate accessibility
5. ✅ Create QA report

**Deliverables:**
- QA checklist (completed)
- Issue tracker
- Content completeness score
- Recommendations

**Scripts:**
- `scripts/validate-content.js`
- `scripts/check-links.js`

---

## Content Categories Mapping

### Old → New Category Mapping

| Old Category | New Category | New Path | Articles |
|--------------|--------------|----------|----------|
| aktualnosci | news | `/pl/news/` | ~150 |
| wydarzenia | events | `/pl/events/` | ~50 |
| sukcesy | achievements | `/pl/students/achievements/` | ~30 |
| ogloszenia | announcements | `/pl/news/announcements/` | ~20 |
| projekty | projects | `/pl/students/projects/` | ~40 |
| (school info) | about | `/pl/about/` | ~50 |
| (academies) | programs | `/pl/students/` | ~20 |
| archive | archive | `/pl/archive/` | ~186 |

---

## URL Redirect Strategy

### Redirect Patterns

```javascript
// Old URL patterns
/aktualnosci/{slug}-{id}.html
/wydarzenia/{slug}-{id}.html
/{page}-{id}.html

// New URL patterns
/pl/news/{slug}
/pl/events/{slug}
/pl/{page}

// Redirect rules
Redirect 301 /aktualnosci/:slug-:id.html /pl/news/:slug
Redirect 301 /wydarzenia/:slug-:id.html /pl/events/:slug
Redirect 301 /{page}-{id}.html /pl/{page}
```

### Redirect Count by Type

| Type | Count | Priority |
|------|-------|----------|
| News articles | 150+ | HIGH |
| Event articles | 50+ | HIGH |
| Static pages | 30+ | HIGH |
| PDF documents | 37+ | MEDIUM |
| Archive pages | 186+ | LOW |
| **Total** | **453+** | - |

---

## Image Organization Plan

### Folder Structure

```
/public/images/
├── news/
│   ├── 2025/
│   │   ├── article-slug-hero.webp
│   │   ├── article-slug-card.webp
│   │   └── gallery/
│   │       ├── image-001.webp
│   │       └── ...
│   └── 2024/
│
├── events/
│   ├── event-slug/
│   │   ├── hero.webp
│   │   └── gallery/
│   └── ...
│
├── campus/
│   ├── building-exterior.webp
│   ├── classroom-1.webp
│   └── ...
│
├── people/
│   ├── students-learning.webp
│   ├── teachers-meeting.webp
│   └── ...
│
├── programs/
│   ├── football-academy/
│   ├── music-academy/
│   └── ...
│
└── logos/
    ├── wbs-logo.svg
    ├── wbs-logo-white.svg
    └── partners/
```

### Image Optimization Settings

| Use Case | Size | Format | Quality |
|----------|------|--------|---------|
| Hero images | 1920x1080 | WebP | 80% |
| Card images | 800x600 | WebP | 80% |
| Thumbnails | 400x300 | WebP | 75% |
| Gallery | 1200x800 | WebP | 85% |
| Logos | Original | SVG/PNG | Lossless |

---

## PDF Organization Plan

### Folder Structure

```
/public/documents/
├── forms/
│   ├── anmeldeformular.pdf
│   ├── formularz-zgloszenia.pdf
│   ├── medizinischer-fragebogen.pdf
│   └── ...
│
├── regulations/
│   ├── schulordnung.pdf
│   ├── hausordnung.pdf
│   ├── regulamin-opieki.pdf
│   └── ...
│
├── reports/
│   ├── annual-report-2024.pdf
│   ├── financial-report-2024.pdf
│   └── ...
│
└── programs/
    ├── program-szkoly.pdf
    ├── pion-polskojezyczny.pdf
    └── ...
```

### PDF Metadata

```json
{
  "id": "form-1",
  "title": {
    "pl": "Wniosek o przyjęcie do szkoły",
    "de": "Antrag auf Aufnahme"
  },
  "category": "forms",
  "language": "pl-de",
  "size": "1.2 MB",
  "pages": 4,
  "lastUpdated": "2025-09-01"
}
```

---

## Content Priority Matrix

### HIGH Priority (Migrate First)

- ✅ Recent news (2024-2026): ~50 articles
- ✅ Current events: ~20 articles
- ✅ Important forms: ~15 PDFs
- ✅ Key regulations: ~10 PDFs
- ✅ About pages: ~10 pages
- ✅ Program descriptions: ~10 pages

**Total:** ~115 items

### MEDIUM Priority (Migrate Second)

- ✅ News from 2022-2024: ~100 articles
- ✅ Event archives: ~30 articles
- ✅ Achievement articles: ~30 articles
- ✅ General documents: ~15 PDFs

**Total:** ~175 items

### LOW Priority (Migrate Last / Archive)

- ✅ Archive content (pre-2022): ~186 articles
- ✅ Old announcements: ~50 articles
- ✅ Historical documents: ~10 PDFs

**Total:** ~246 items

---

## Scripts to Create

### Content Processing
1. `scripts/content-analysis.js` - Analyze and categorize
2. `scripts/organize-assets.js` - Organize files
3. `scripts/optimize-images.js` - Image optimization
4. `scripts/html-to-mdx.js` - Convert HTML to MDX
5. `scripts/transform-content.js` - Transform content
6. `scripts/create-schemas.js` - Create TypeScript schemas
7. `scripts/import-content.js` - Import to CMS/database
8. `scripts/create-redirects.js` - Create redirects
9. `scripts/generate-sitemap.js` - Generate sitemap
10. `scripts/validate-content.js` - Validate content
11. `scripts/check-links.js` - Check for broken links

### Utilities
- `scripts/utils/file-utils.js` - File operations
- `scripts/utils/image-utils.js` - Image processing
- `scripts/utils/html-utils.js` - HTML parsing
- `scripts/utils/url-utils.js` - URL manipulation

---

## Success Criteria

### Content Migration
- [ ] 100% of HIGH priority content migrated
- [ ] 90% of MEDIUM priority content migrated
- [ ] 70% of LOW priority content migrated
- [ ] All images organized and optimized
- [ ] All PDFs cataloged and accessible

### Technical
- [ ] All content in MDX format
- [ ] All images in WebP format (where appropriate)
- [ ] All redirects working (301)
- [ ] Sitemap generated and submitted
- [ ] No broken links

### Quality
- [ ] Content completeness score: 95%+
- [ ] SEO score: 90+
- [ ] Accessibility score: 95+
- [ ] PageSpeed score: 90+

---

## Timeline

| Phase | Duration | Start Date | End Date |
|-------|----------|------------|----------|
| Phase 1: Analysis | 3 days | 2026-03-13 | 2026-03-15 |
| Phase 2: Assets | 4 days | 2026-03-16 | 2026-03-19 |
| Phase 3: Transformation | 5 days | 2026-03-20 | 2026-03-24 |
| Phase 4: CMS Integration | 3 days | 2026-03-25 | 2026-03-27 |
| Phase 5: SEO & Redirects | 2 days | 2026-03-28 | 2026-03-29 |
| Phase 6: QA | 3 days | 2026-03-30 | 2026-04-01 |
| **Total** | **20 days** | - | - |

---

## Next Steps

1. ✅ **Run content analysis script** - Categorize all 546 articles
2. ✅ **Create folder structure** - Set up `/public/images/` and `/public/documents/`
3. ✅ **Organize assets** - Move all images and PDFs
4. ✅ **Transform content** - Convert HTML to MDX
5. ✅ **Create redirects** - Map all old URLs
6. ✅ **Validate** - Check everything works

---

*Created: 2026-03-13*  
*Ready for: Agent team execution*  
*Status: Ready to start Phase 1*
