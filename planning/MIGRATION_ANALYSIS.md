# 📊 Content Migration Analysis & Additional Scripts

**Created:** 2026-03-13  
**Analysis of:** WBS Custom CMS + Extracted Content  
**Status:** Ready for Execution

---

## Executive Summary

After analyzing the existing CMS architecture and extracted content, I've identified the following:

### ✅ What Exists:
1. **Complete CMS Schema** - PostgreSQL design with all tables
2. **CMS Import Files** - Pre-processed JSON for articles, images, PDFs
3. **Redirect Mapping** - URL redirects already mapped
4. **Content Database** - 203 articles in CMS-ready format

### ⚠️ What's Missing:
1. **Asset Organization Scripts** - No scripts to organize 1,258 images
2. **HTML → Markdown Converter** - Content is in HTML, needs MDX
3. **Image Optimization Pipeline** - No WebP conversion
4. **Content Validation** - No quality checks
5. **Batch Processing** - Large files need chunked processing

---

## Additional Scripts Needed

### Priority 1: Critical (Create First)

#### 1. Asset Organizer Script
**File:** `scripts/organize-assets.js`
**Purpose:** Move and rename all 1,258 images to organized structure
**Input:** `wbs-extract/images/`, `wbs-extract/articles/*/images/`
**Output:** `public/images/` with organized folders

#### 2. HTML to MDX Converter
**File:** `scripts/html-to-mdx.js`
**Purpose:** Convert HTML content to clean MDX format
**Input:** CMS article HTML content
**Output:** MDX files with frontmatter

#### 3. Image Optimizer
**File:** `scripts/optimize-images.js`
**Purpose:** Resize, compress, convert to WebP
**Input:** Organized images
**Output:** Optimized images in multiple sizes

#### 4. PDF Cataloger
**File:** `scripts/catalog-pdfs.js`
**Purpose:** Create metadata for all 37+ PDFs
**Input:** `wbs-extract/pdfs/`
**Output:** `src/data/documents.json` with metadata

### Priority 2: Important (Create Second)

#### 5. Content Validator
**File:** `scripts/validate-content.js`
**Purpose:** Check content quality, completeness
**Input:** All processed content
**Output:** Validation report

#### 6. Redirect Generator
**File:** `scripts/generate-redirects.js`
**Purpose:** Create Vercel redirects from mapping
**Input:** `cms-migration/redirect-mapping.csv`
**Output:** `vercel.json` redirects

#### 7. Sitemap Generator
**File:** `scripts/generate-sitemap.js`
**Purpose:** Create XML sitemap for SEO
**Input:** All articles and pages
**Output:** `public/sitemap.xml`

### Priority 3: Nice to Have

#### 8. Content Stats Dashboard
**File:** `scripts/content-stats.js`
**Purpose:** Generate migration statistics
**Output:** HTML report with charts

#### 9. Broken Link Checker
**File:** `scripts/check-links.js`
**Purpose:** Find broken internal/external links
**Output:** Report of broken links

---

## CMS Schema Analysis

### Current Schema Strengths:
✅ **Multi-language support** - PL/DE/EN columns for all content fields
✅ **Media management** - Separate media table with metadata
✅ **Category system** - Flexible categorization with colors/icons
✅ **SEO fields** - Meta title/description per language
✅ **Status workflow** - Draft/Published/Archived states
✅ **Junction tables** - Proper many-to-many relationships

### Schema Gaps (Add These):

#### 1. Add Full-Text Search Index
```sql
-- Add to articles table
ALTER TABLE articles ADD COLUMN search_vector tsvector;
CREATE INDEX articles_search_vector_idx ON articles USING GIN(search_vector);

-- Trigger to auto-update
CREATE TRIGGER articles_search_vector_update
BEFORE INSERT OR UPDATE ON articles
FOR EACH ROW EXECUTE FUNCTION
tsvector_update_trigger(
  search_vector,
  'pg_catalog.simple',
  title_pl, title_de, title_en, content_pl, content_de, content_en
);
```

#### 2. Add Content Revisions Table
```sql
CREATE TABLE article_revisions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  article_id UUID REFERENCES articles(id) ON DELETE CASCADE,
  title_pl VARCHAR(255),
  title_de VARCHAR(255),
  title_en VARCHAR(255),
  content_pl TEXT,
  content_de TEXT,
  content_en TEXT,
  changed_by UUID REFERENCES users(id),
  changed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  change_note TEXT
);

CREATE INDEX article_revisions_article_id_idx ON article_revisions(article_id);
CREATE INDEX article_revisions_changed_at_idx ON article_revisions(changed_at DESC);
```

#### 3. Add 301 Redirects Table
```sql
CREATE TABLE redirects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  old_path VARCHAR(500) UNIQUE NOT NULL,
  new_path VARCHAR(500) NOT NULL,
  status_code INTEGER DEFAULT 301,
  is_active BOOLEAN DEFAULT true,
  hit_count INTEGER DEFAULT 0,
  last_hit_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX redirects_old_path_idx ON redirects(old_path);
CREATE INDEX redirects_active_idx ON redirects(is_active) WHERE is_active = true;
```

#### 4. Add Alt Text Index for Images
```sql
-- Improve media table for better alt text management
ALTER TABLE media ADD COLUMN is_featured BOOLEAN DEFAULT false;
ALTER TABLE media ADD COLUMN usage_count INTEGER DEFAULT 0;
CREATE INDEX media_type_idx ON media(type);
CREATE INDEX media_featured_idx ON media(is_featured) WHERE is_featured = true;
```

---

## Content Migration Strategy

### Phase 1: Asset Organization (Days 1-2)

**Scripts to Run:**
```bash
# 1. Organize all images
node scripts/organize-assets.js

# 2. Catalog PDFs
node scripts/catalog-pdfs.js

# 3. Optimize images
node scripts/optimize-images.js
```

**Expected Output:**
```
public/
├── images/
│   ├── news/           # ~150 images
│   ├── events/         # ~50 images
│   ├── campus/         # ~200 images
│   ├── people/         # ~300 images
│   ├── programs/       # ~100 images
│   └── logos/          # ~50 images
└── documents/
    ├── forms/          # ~15 PDFs
    ├── regulations/    # ~10 PDFs
    └── reports/        # ~12 PDFs
```

### Phase 2: Content Transformation (Days 3-5)

**Scripts to Run:**
```bash
# 1. Convert HTML to MDX
node scripts/html-to-mdx.js --input=wbs-extract/cms-migration/cms-import-articles.json

# 2. Validate content
node scripts/validate-content.js

# 3. Generate redirects
node scripts/generate-redirects.js
```

**Expected Output:**
```
src/content/
├── news/
│   ├── _index.mdx
│   └── {slug}.mdx      # ~150 articles
├── events/
│   ├── _index.mdx
│   └── {slug}.mdx      # ~50 articles
└── pages/
    ├── about.mdx
    ├── contact.mdx
    └── ...
```

### Phase 3: Database Import (Days 6-7)

**Scripts to Run:**
```bash
# 1. Create database schema
psql -U postgres -d wbs_cms -f database/schema.sql

# 2. Seed categories
psql -U postgres -d wbs_cms -f database/seeds/categories.sql

# 3. Import articles
node scripts/import-to-cms.js

# 4. Generate sitemap
node scripts/generate-sitemap.js
```

---

## File Structure Recommendations

### Updated Structure
```
German-school/
├── database/                    # NEW: Database files
│   ├── schema.sql              # Complete PostgreSQL schema
│   ├── migrations/
│   │   ├── 001_initial.sql
│   │   ├── 002_add_revisions.sql
│   │   └── 003_add_redirects.sql
│   └── seeds/
│       ├── categories.sql
│       └── users.sql
│
├── scripts/                     # Enhanced
│   ├── analyze-content.js      # ✅ Exists
│   ├── organize-assets.js      # 🆕 Create
│   ├── html-to-mdx.js          # 🆕 Create
│   ├── optimize-images.js      # 🆕 Create
│   ├── catalog-pdfs.js         # 🆕 Create
│   ├── validate-content.js     # 🆕 Create
│   ├── generate-redirects.js   # 🆕 Create
│   ├── generate-sitemap.js     # 🆕 Create
│   ├── import-to-cms.js        # 🆕 Create
│   └── utils/
│       ├── file-utils.js
│       ├── image-utils.js
│       ├── html-utils.js
│       └── url-utils.js
│
├── src/
│   ├── content/                # NEW: MDX content
│   │   ├── news/
│   │   ├── events/
│   │   └── pages/
│   │
│   ├── lib/
│   │   ├── cms/                # NEW: CMS client
│   │   │   ├── client.ts
│   │   │   ├── schemas.ts
│   │   │   └── types.ts
│   │   └── ...
│   │
│   └── ...
│
├── public/
│   ├── images/                 # Organized images
│   └── documents/              # Organized PDFs
│
└── planning/
    ├── CONTENT_MIGRATION_AGENTS.md    # ✅ Created
    ├── CONTENT_MIGRATION_PLAN.md      # ✅ Created
    └── MIGRATION_ANALYSIS.md          # 🆕 This file
```

---

## Image Processing Pipeline

### Complete Flow
```
Original Images (wbs-extract/)
         ↓
[organize-assets.js]
         ↓
Organized Folders (public/images/)
         ↓
[optimize-images.js]
         ↓
Optimized Variants:
├── {slug}-hero.webp      (1920x1080)
├── {slug}-card.webp      (800x600)
├── {slug}-thumb.webp     (400x300)
└── {slug}-original.jpg   (backup)
```

### Optimization Settings
```javascript
const IMAGE_CONFIG = {
  sizes: {
    hero: { width: 1920, height: 1080, quality: 80 },
    card: { width: 800, height: 600, quality: 80 },
    thumb: { width: 400, height: 300, quality: 75 },
  },
  formats: ['webp', 'jpg'], // WebP first, JPG fallback
  maxSize: 500 * 1024, // 500KB max
};
```

---

## Content Transformation Rules

### HTML → MDX Conversion

**Input (HTML):**
```html
<div class="site-text">
  <p>Szanowni Rodzice,</p>
  <p>WBS pozostaje zamknięta do 26.04.2020.</p>
  <div class="gallery">
    <img src="image1.jpg" alt="Photo 1">
    <img src="image2.jpg" alt="Photo 2">
  </div>
</div>
```

**Output (MDX):**
```mdx
---
title:
  pl: "Zajęcia ONLINE w WBS"
  de: ""
  en: ""
excerpt:
  pl: "WBS pozostaje zamknięta do 26.04.2020."
category: aktualnosci
date: "2020-04-26"
images:
  - /images/news/zajecia-online/image-001.webp
  - /images/news/zajecia-online/image-002.webp
---

Szanowni Rodzice,

WBS pozostaje zamknięta do 26.04.2020.

<ImageGallery>
  <Image src="/images/news/zajecia-online/image-001.webp" alt="Photo 1" />
  <Image src="/images/news/zajecia-online/image-002.webp" alt="Photo 2" />
</ImageGallery>
```

### Transformation Rules:
1. **Remove div wrappers** - Keep only semantic HTML
2. **Convert images** - `<img>` → `<Image>` component with WebP
3. **Extract gallery** - Move to MDX ImageGallery component
4. **Clean inline styles** - Remove all inline CSS
5. **Preserve formatting** - Keep `<strong>`, `<em>`, `<ul>`, `<ol>`
6. **Update links** - Convert old URLs to new structure

---

## Quality Assurance Checklist

### Content Completeness
- [ ] All 203 articles converted
- [ ] All 1,258 images organized
- [ ] All 37+ PDFs cataloged
- [ ] All redirects created (300+)
- [ ] All categories mapped (5 categories)

### Technical Quality
- [ ] All images optimized (WebP + fallback)
- [ ] All MDX files validate
- [ ] All internal links work
- [ ] All PDFs downloadable
- [ ] Sitemap generated

### SEO Quality
- [ ] Meta titles present (60 chars max)
- [ ] Meta descriptions present (160 chars max)
- [ ] Alt text for all images
- [ ] Canonical URLs set
- [ ] 301 redirects working

### Accessibility
- [ ] Heading hierarchy correct (H1 → H2 → H3)
- [ ] Alt text descriptive
- [ ] Color contrast 4.5:1+
- [ ] Keyboard navigation works
- [ ] Screen reader compatible

---

## Migration Timeline (Updated)

| Phase | Duration | Scripts | Output |
|-------|----------|---------|--------|
| **Phase 1: Assets** | 2 days | organize-assets, catalog-pdfs | Organized public/ folder |
| **Phase 2: Content** | 3 days | html-to-mdx, optimize-images | MDX files in src/content/ |
| **Phase 3: Database** | 2 days | import-to-cms, generate-sitemap | PostgreSQL populated |
| **Phase 4: QA** | 2 days | validate-content, check-links | QA report |
| **Phase 5: Deploy** | 1 day | generate-redirects | Production ready |
| **Total** | **10 days** | **9 scripts** | **Complete migration** |

---

## Next Steps (Immediate)

### Today:
1. ✅ Create `scripts/organize-assets.js`
2. ✅ Create `scripts/html-to-mdx.js`
3. ✅ Create `scripts/optimize-images.js`

### Tomorrow:
4. ✅ Create `scripts/catalog-pdfs.js`
5. ✅ Create `scripts/validate-content.js`
6. ✅ Run asset organization

### Day 3:
7. ✅ Run content transformation
8. ✅ Run image optimization
9. ✅ Generate redirects and sitemap

---

## Tools to Install

```bash
# Image processing
npm install sharp

# HTML parsing
npm install cheerio html-to-text

# MDX generation
npm install gray-matter

# PDF metadata
npm install pdf-parse

# Progress bars
npm install cli-progress

# All at once:
npm install sharp cheerio html-to-text gray-matter pdf-parse cli-progress
```

---

*Analysis Completed: 2026-03-13*  
*Ready for: Script creation and execution*  
*Estimated Total Time: 10 days*
