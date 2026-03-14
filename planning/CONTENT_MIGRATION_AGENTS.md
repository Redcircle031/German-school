# 🤖 Content Migration Agent Team

**Created:** 2026-03-13  
**Purpose:** Organize and migrate all extracted content from old WBS website to new structure  
**Total Agents:** 8 specialized agents

---

## Agent Team Overview

```
┌────────────────────────────────────────────────────────────────┐
│                  CONTENT MIGRATION WORKFLOW                    │
│                                                                │
│  ┌──────────────┐     ┌──────────────┐     ┌──────────────┐  │
│  │   Content    │ ──► │   Asset      │ ──► │   Quality    │  │
│  │   Analyst    │     │   Manager    │     │   Assurance  │  │
│  │   Agent      │     │   Agent      │     │   Agent      │  │
│  └──────────────┘     └──────────────┘     └──────────────┘  │
│         │                    │                    │           │
│         ▼                    ▼                    ▼           │
│  ┌──────────────┐     ┌──────────────┐     ┌──────────────┐  │
│  │   Data       │     │   CMS        │     │   SEO &      │  │
│  │   Structure  │ ◄──► │   Import     │     │   Redirect   │  │
│  │   Agent      │     │   Agent      │     │   Agent      │  │
│  └──────────────┘     └──────────────┘     └──────────────┘  │
│         │                    │                    │           │
│         ▼                    ▼                    ▼           │
│  ┌──────────────┐                              ┌──────────────┐│
│  │   Image &    │                              │   Content    ││
│  │   Media      │                              │   Writer     ││
│  │   Agent      │                              │   Agent      ││
│  └──────────────┘                              └──────────────┘│
└────────────────────────────────────────────────────────────────┘
```

---

## Agent Definitions

### 1. 📊 Content Analyst Agent

**Role:** Analyze and categorize all extracted content

**Responsibilities:**
- Analyze `wbs-complete-database.json` (203 articles)
- Categorize content by type (news, events, announcements)
- Identify content priority (keep, archive, discard)
- Map old URLs to new structure
- Create content inventory report

**Input:**
- `wbs-extract/wbs-complete-database.json`
- `wbs-extract/articles/` folder
- `src/data/extracted/news.json`

**Output:**
- Content categorization report
- Priority matrix (High/Medium/Low)
- URL mapping table
- Content gaps analysis

**Prompt Template:**
```
You are a Content Analyst specializing in website migrations.

Analyze the WBS content database (203 articles) and:

1. Categorize each article:
   - News (current events, announcements)
   - Events (past/upcoming)
   - Achievements (competitions, awards)
   - Programs (academies, projects)
   - General (other)

2. Assign priority:
   - HIGH: Recent (2024-2026), important announcements
   - MEDIUM: 2022-2024, general news
   - LOW: Pre-2022, archive content

3. Map to new structure:
   - /news/ for announcements
   - /events/ for event articles
   - /students/achievements/ for competition results
   - /about/ for school info

4. Create migration report:
   - Total articles per category
   - Priority distribution
   - Recommended actions

Provide JSON output with categorized content list.
```

---

### 2. 🖼️ Asset Manager Agent

**Role:** Organize all images, PDFs, and media files

**Responsibilities:**
- Organize 1,258 images from `wbs-extract/images/`
- Catalog 40+ PDF documents
- Create asset inventory with metadata
- Optimize images for web (resize, compress)
- Map assets to content items

**Input:**
- `wbs-extract/images/` (1,258 files)
- `wbs-extract/pdfs/` (~40 files)
- `wbs-extract/articles/*/images/`

**Output:**
- Organized asset library
- Asset manifest (JSON)
- Optimized images in `/public/images/`
- PDFs in `/public/documents/`

**Prompt Template:**
```
You are an Asset Manager for website content migration.

Organize the WBS media assets:

1. Image Organization:
   - Sort by type (photos, logos, icons, backgrounds)
   - Sort by content (events, people, campus, programs)
   - Rename files with descriptive names
   - Create folder structure:
     /images/news/
     /images/events/
     /images/campus/
     /images/people/
     /images/logos/

2. PDF Organization:
   - Categorize (forms, regulations, reports)
   - Rename with clear names
   - Add metadata (title, description, language)
   - Create folder structure:
     /documents/forms/
     /documents/regulations/
     /documents/reports/

3. Create Asset Manifest:
   {
     "images": [
       {
         "original": "path/to/original.jpg",
         "new": "/images/news/event-2025.jpg",
         "alt": "Description",
         "size": "1920x1080",
         "optimized": true
       }
     ],
     "pdfs": [...]
   }

4. Optimization:
   - Resize images > 1920px wide
   - Convert to WebP where appropriate
   - Compress without quality loss
   - Generate thumbnails

Provide organized folder structure and manifest.
```

---

### 3. 🏗️ Data Structure Agent

**Role:** Design new content schemas and data models

**Responsibilities:**
- Design content schemas for new site
- Map old data structure to new schemas
- Create TypeScript interfaces
- Define relationships between content types
- Plan database structure

**Input:**
- Old CMS structure from `wbs-complete-database.json`
- New site requirements from design brief
- Content categorization from Content Analyst

**Output:**
- Content schemas (JSON/TypeScript)
- Data models for articles, events, staff
- Relationship diagrams
- Migration scripts

**Prompt Template:**
```
You are a Data Architect designing content schemas.

Create content schemas for WBS new website:

1. Define Content Types:
   - Article (news, events, announcements)
   - Event (calendar items)
   - Staff (teachers, administration)
   - Document (forms, regulations)
   - Page (static content)
   - Program (academies, projects)

2. Create TypeScript Interfaces:
   ```typescript
   interface Article {
     id: string;
     slug: string;
     title: { pl: string; de: string; en: string };
     excerpt: { pl: string; de: string; en: string };
     content: string;
     category: string;
     date: string;
     images: ImageRef[];
     pdfs: DocumentRef[];
     seo: SEOData;
   }
   ```

3. Map Old to New:
   - Old field → New field mapping
   - Data transformations needed
   - Default values for missing fields

4. Relationships:
   - Article ↔ Images
   - Article ↔ PDFs
   - Event ↔ Article
   - Staff ↔ Department

Provide schemas, interfaces, and mapping documentation.
```

---

### 4. 📝 Content Writer Agent

**Role:** Rewrite and adapt content for new structure

**Responsibilities:**
- Rewrite articles in new format
- Ensure trilingual consistency (PL/DE/EN)
- Update outdated content
- Create excerpts and summaries
- Optimize for SEO

**Input:**
- Categorized articles from Content Analyst
- Content schemas from Data Structure Agent
- Old article HTML content

**Output:**
- Reformatted articles (Markdown/MDX)
- Trilingual content (where needed)
- SEO-optimized excerpts
- Content quality report

**Prompt Template:**
```
You are a Content Writer and Editor for WBS website migration.

Transform old articles to new format:

1. Content Transformation:
   - Convert HTML to Markdown/MDX
   - Remove outdated formatting
   - Preserve important content
   - Add proper heading hierarchy

2. Trilingual Support:
   - Identify content needing translation
   - Mark German/Polish sections
   - Create language variants
   - Ensure consistency across languages

3. Create Excerpts:
   - Write 1-2 sentence summaries
   - Include key information
   - Optimize for search
   - Maintain tone (professional, friendly)

4. SEO Optimization:
   - Add meta titles (60 chars max)
   - Write meta descriptions (160 chars max)
   - Include relevant keywords
   - Add alt text for images

5. Quality Check:
   - Fix broken links
   - Update dates if needed
   - Remove redundant info
   - Ensure accessibility

Provide content in structured format:
```markdown
---
title:
  pl: "..."
  de: "..."
  en: "..."
excerpt:
  pl: "..."
category: "news"
date: "2025-02-09"
images: [...]
---

Content here...
```
```

---

### 5. 📥 CMS Import Agent

**Role:** Import organized content into new CMS/database

**Responsibilities:**
- Create import scripts for new CMS
- Validate data integrity
- Handle relationships and references
- Create database migrations
- Test import process

**Input:**
- Organized content from Content Writer
- Schemas from Data Structure Agent
- Asset manifest from Asset Manager

**Output:**
- Import scripts (Node.js/Python)
- Database migrations
- Validation reports
- Rollback procedures

**Prompt Template:**
```
You are a CMS Integration Specialist.

Create import process for WBS content:

1. Import Scripts:
   ```javascript
   // Import articles
   async function importArticles() {
     const articles = loadContent('articles');
     for (const article of articles) {
       await createArticle(article);
       await attachImages(article.id, article.images);
       await attachDocuments(article.id, article.pdfs);
     }
   }
   ```

2. Data Validation:
   - Check required fields
   - Validate relationships
   - Ensure referential integrity
   - Log errors and warnings

3. Database Migrations:
   - Create tables/collections
   - Add indexes for performance
   - Set up foreign keys
   - Create views if needed

4. Testing:
   - Import sample content (10 articles)
   - Verify all fields populated
   - Check image/document links
   - Test search functionality

5. Rollback Plan:
   - Backup current database
   - Create rollback scripts
   - Document recovery steps

Provide import scripts, validation logic, and testing plan.
```

---

### 6. 🔍 SEO & Redirect Agent

**Role:** Preserve SEO value and create URL redirects

**Responsibilities:**
- Map old URLs to new URLs
- Create 301 redirects
- Preserve SEO metadata
- Monitor search rankings
- Fix broken links

**Input:**
- Old URL structure from extraction
- New URL structure from routing
- Content mapping from Content Analyst

**Output:**
- Redirect map (CSV/JSON)
- `.htaccess` or `nginx` redirect rules
- Vercel redirect configuration
- SEO audit report

**Prompt Template:**
```
You are an SEO Specialist handling URL migrations.

Create redirect strategy for WBS:

1. URL Mapping:
   Old: /aktualnosci/{slug}-{id}.html
   New: /{lang}/news/{slug}
   
   Create mapping for:
   - Articles (203 URLs)
   - Events (50+ URLs)
   - Static pages (20+ URLs)
   - PDFs (40+ URLs)

2. Redirect Rules:
   ```apache
   # Apache (.htaccess)
   Redirect 301 /aktualnosci/slug-123.html /pl/news/slug
   
   # Nginx
   rewrite ^/aktualnosci/(.+)-([0-9]+)\.html$ /pl/news/$1 permanent;
   
   # Vercel (vercel.json)
   {
     "source": "/aktualnosci/:slug-:id\\.html",
     "destination": "/pl/news/:slug",
     "permanent": true
   }
   ```

3. SEO Preservation:
   - Maintain meta titles/descriptions
   - Preserve canonical URLs
   - Keep sitemap updated
   - Submit new sitemap to Google

4. Monitoring:
   - Track 404 errors
   - Monitor search rankings
   - Check referral traffic
   - Fix broken redirects

Provide redirect rules in all formats and monitoring plan.
```

---

### 7. 🎨 Image & Media Agent

**Role:** Process and optimize all visual assets

**Responsibilities:**
- Resize images for different uses
- Convert to modern formats (WebP)
- Generate thumbnails and variants
- Add alt text and metadata
- Create image sprites/icons

**Input:**
- Raw images from Asset Manager
- Image requirements from design system

**Output:**
- Optimized images in multiple sizes
- WebP versions
- Thumbnails
- Icon sprites

**Prompt Template:**
```
You are an Image Processing Specialist.

Optimize WBS images for web:

1. Image Variants:
   - Hero: 1920x1080 (full-width)
   - Card: 800x600 (news cards)
   - Thumbnail: 400x300 (lists)
   - Icon: 64x64 (small icons)

2. Format Conversion:
   - Convert photos to WebP (80% quality)
   - Keep PNG for transparency
   - Keep SVG for logos/icons
   - Create fallback JPG

3. Processing:
   ```bash
   # Using sharp (Node.js)
   sharp('input.jpg')
     .resize(1920, 1080, { fit: 'cover' })
     .webp({ quality: 80 })
     .toFile('output.webp');
   ```

4. Naming Convention:
   - `{slug}-{size}.{ext}`
   - Example: `school-event-1920.webp`
   - Example: `school-event-800.webp`

5. Alt Text:
   - Describe image content
   - Include context
   - Keep concise (125 chars max)
   - Add to manifest

Provide optimized images and processing script.
```

---

### 8. ✅ Quality Assurance Agent

**Role:** Verify content quality and completeness

**Responsibilities:**
- Check all content migrated correctly
- Verify links and references
- Test all pages render correctly
- Validate accessibility
- Create quality report

**Input:**
- All outputs from other agents
- Design system requirements
- Accessibility guidelines

**Output:**
- Quality assurance report
- Issue tracker
- Content completeness score
- Recommendations

**Prompt Template:**
```
You are a Quality Assurance Specialist.

Verify WBS content migration:

1. Content Completeness:
   - All 203 articles migrated? ✓/✗
   - All images attached? ✓/✗
   - All PDFs linked? ✓/✗
   - All translations present? ✓/✗

2. Link Validation:
   - Internal links work? ✓/✗
   - External links valid? ✓/✗
   - PDF downloads work? ✓/✗
   - Image paths correct? ✓/✗

3. Page Rendering:
   - All pages load? ✓/✗
   - Layout correct? ✓/✗
   - Images display? ✓/✗
   - Mobile responsive? ✓/✗

4. Accessibility:
   - Alt text present? ✓/✗
   - Heading hierarchy? ✓/✗
   - Color contrast? ✓/✗
   - Keyboard navigation? ✓/✗

5. SEO Check:
   - Meta titles present? ✓/✗
   - Meta descriptions? ✓/✗
   - Canonical URLs? ✓/✗
   - Sitemap generated? ✓/✗

Create detailed report with issues and recommendations.
```

---

## Agent Collaboration Workflow

### Phase 1: Analysis (Week 1)
```
Day 1-2: Content Analyst → Content categorization
Day 3-4: Asset Manager → Asset inventory
Day 5: Data Structure → Schema design
```

### Phase 2: Processing (Week 2)
```
Day 1-3: Content Writer → Content transformation
Day 4-5: Image & Media → Image optimization
```

### Phase 3: Migration (Week 3)
```
Day 1-2: CMS Import → Import scripts & testing
Day 3-4: SEO & Redirect → Redirect mapping
Day 5: QA → Quality verification
```

### Phase 4: Launch (Week 4)
```
Day 1-2: Final testing
Day 3: Backup old site
Day 4: Deploy new site
Day 5: Monitor & fix issues
```

---

## Success Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| Content Migrated | 100% | Articles count |
| Images Organized | 1,258+ | Asset manifest |
| PDFs Cataloged | 40+ | Document list |
| Redirects Created | 300+ | Redirect map |
| Quality Score | 95%+ | QA report |
| SEO Preserved | 90%+ | Rankings check |

---

## Tools & Scripts

### Content Analysis
- Node.js scripts for JSON processing
- Python for data analysis
- Excel/Sheets for inventory

### Image Processing
- Sharp (Node.js image library)
- ImageMagick for batch processing
- Squoosh for manual optimization

### CMS Import
- Custom Node.js import scripts
- Database migration tools
- Validation frameworks

### Quality Assurance
- Link checkers (Screaming Frog)
- Accessibility tools (WAVE, axe)
- SEO tools (Google Search Console)

---

*Document Created: 2026-03-13*  
*Ready for: Content migration execution*
