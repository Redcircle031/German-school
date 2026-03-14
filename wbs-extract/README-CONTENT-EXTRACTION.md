# WBS Website Content Extraction - Complete

## 📊 Extraction Summary

| Metric | Count | Size |
|--------|-------|------|
| **Total Articles** | 203 | 53 MB |
| **Total Images** | 1,258 | 113 MB |
| **Total PDFs** | ~40 | 20 MB |
| **Complete Package** | - | **192 MB** |

---

## 📁 Folder Structure

```
wbs-extract/
├── 📄 articles/                  # 203 articles with full content
│   ├── {article-slug}/
│   │   ├── article.html          # Full HTML source
│   │   ├── images/               # All article images
│   │   │   ├── image_001.jpg
│   │   │   └── ...
│   │   ├── pdfs/                 # Article-specific PDFs
│   │   └── metadata.json         # Article metadata
│   └── ...
│
├── 🖼️ images/
│   ├── articles/                 # Article images (1,258 files)
│   ├── gallery/                  # Gallery photos
│   ├── icons/                    # Logos and icons
│   └── other/                    # Misc images
│
├── 📑 pdfs/                      # 40 PDF documents
│   ├── 5._schulordnung____regulamin_szkoly.pdf
│   ├── wbs-anmeldeformular__formularz_zgloszenia_do_wbs.pdf
│   └── ...
│
├── 📊 wbs-complete-database.json     # Full database (1.3 MB)
├── 📋 wbs-articles-metadata.json     # Metadata only (50 KB)
└── 📖 README-CONTENT-EXTRACTION.md   # This file
```

---

## 🔑 Key Features

### JSON Database Structure
The `wbs-complete-database.json` contains:

```json
{
  "metadata": {
    "totalArticles": 203,
    "totalImages": 1258,
    "totalPdfs": 40,
    "extractedAt": "2026-03-13T21:18:59"
  },
  "articles": [
    {
      "id": "article-slug",
      "title": "Article Title",
      "date": "2026-02-09",
      "category": "events|achievements|news|other",
      "excerpt": "Short excerpt...",
      "content": "Full HTML content...",
      "seo": {
        "title": "SEO Title",
        "description": "Meta description",
        "keywords": "keywords"
      },
      "images": [...],
      "pdfs": [...],
      "paths": {
        "html": "articles/slug/article.html",
        "images": "articles/slug/images"
      }
    }
  ]
}
```

### Categories
- **Events** (25): Concerts, trips, meetings, festivals
- **Achievements** (17): Competitions, awards, victories
- **News** (1): Announcements and information
- **Other** (160): Various articles and updates

---

## 🛠️ How to Use for Redesign

### 1. Load the Database
```javascript
// In your new site
const database = require('./wbs-complete-database.json');

// Access all articles
const articles = database.articles;

// Filter by category
const events = articles.filter(a => a.category === 'events');

// Sort by date
const sorted = articles.sort((a, b) => new Date(b.date) - new Date(a.date));
```

### 2. Rebuild Articles
Each article has:
- **Title**: `article.title`
- **Date**: `article.date` (ISO format)
- **Content**: `article.content` (HTML)
- **Images**: Array with paths to local images
- **SEO**: Meta title, description, keywords

### 3. Import Images
All images are in `articles/{slug}/images/`:
- Original filenames preserved
- Full gallery images included
- Thumbnails available

### 4. Import PDFs
PDFs are in two locations:
- `pdfs/` - Main documents folder
- `articles/{slug}/pdfs/` - Article-specific PDFs

---

## 📝 Important Notes

### Content Coverage
- ✅ **All articles from 2020-2025** extracted
- ✅ **Archive years**: 2020-21, 2019-20, 2018-19, 2017-18, 2016-17, 2015-16, 2014-15, 2013-14
- ✅ **Current articles**: All recent news and events
- ✅ **Photo galleries**: Complete galleries from all articles
- ✅ **PDF documents**: Forms, regulations, school program

### Bilingual Content
The school is Polish-German, so content appears in both languages:
- Primary: Polish
- Secondary: German (important for international parents)

### For SEO Migration
Each article includes:
- Original URL (for redirects)
- Meta title and description
- Publish date
- Image alt texts
- Canonical URL structure

---

## 🚀 Quick Start for New Site

```bash
# Copy database to your new project
cp wbs-complete-database.json /path/to/new-site/content/

# Copy images
cp -r articles/*/images /path/to/new-site/public/images/

# Copy PDFs
cp -r pdfs /path/to/new-site/public/
```

Then use the JSON to:
1. Generate static pages
2. Create blog post listings
3. Build image galleries
4. Set up redirects from old URLs

---

## 📞 Support

If you need to extract more content or re-run the extraction:
- Python scripts are in `wbs-extract/`
- Run `python3 full_extract.py` for fresh extraction
- Run `python3 extract_remaining_images.py` to get more images

---

**Extracted**: March 13, 2026  
**Total Size**: 192 MB  
**Ready for**: Next.js, WordPress, or any CMS migration
