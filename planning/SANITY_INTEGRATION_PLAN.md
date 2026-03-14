# 🏗️ WBS School Website - Sanity.io Integration Plan

## Project: WBS School Website with Sanity CMS
**Status:** Setup Complete - Ready for Configuration
**Created:** 2026-03-13

---

## 📋 What Has Been Created

### Sanity Configuration Files
```
German-school/
├── sanity.config.ts           # Main Sanity config
├── sanity.cli.ts              # CLI configuration
├── .env.local.example         # Environment variables template
└── src/
    └── schemas/
        ├── index.ts           # Schema exports
        ├── post.ts            # News articles schema
        ├── person.ts          # Staff members schema
        ├── event.ts           # Events schema
        ├── page.ts            # Static pages schema
        └── siteSettings.ts    # Site-wide settings schema
```

---

## 🚀 Setup Instructions

### Step 1: Complete npm Installation

The Sanity packages are installing. If installation failed, run:

```bash
cd /Users/brandsparkle/Desktop/German-school

# Try with legacy peer deps (recommended for Next.js 14)
npm install next-sanity@8 @sanity/image-url sanity --legacy-peer-deps

# Or force installation
npm install next-sanity@8 @sanity/image-url sanity --force
```

---

### Step 2: Create Sanity Project

#### Option A: Use Existing Sanity Account
1. Go to https://sanity.io/login
2. Log in (or create free account)
3. Click "Create new project"
4. Project name: `WBS School`
5. Dataset: `production`
6. Choose "Free" plan

#### Option B: Create via CLI
```bash
npx sanity init --project-id your-project-id
```

---

### Step 3: Get Your Project Credentials

1. Go to https://sanity.io/manage
2. Select your "WBS School" project
3. Find your **Project ID** (in project settings)
4. Create an **API Token**:
   - Go to API section
   - Click "Add API Token"
   - Name: `WBS CMS Editor`
   - Role: **Editor** (allows content editing)
   - Copy the token

---

### Step 4: Configure Environment Variables

1. Copy the example file:
```bash
cp .env.local.example .env.local
```

2. Edit `.env.local` with your credentials:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID="abc123xyz"
NEXT_PUBLIC_SANITY_DATASET="production"
SANITY_API_TOKEN="sk_abc123xyz..."
NEXT_PUBLIC_SANITY_STUDIO_URL="https://abc123xyz.sanity.studio"
```

---

### Step 5: Deploy Sanity Studio

Sanity Studio is the admin interface where you'll manage content.

#### Deploy to Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy Sanity Studio
npx sanity deploy
```

This will:
- Create a hosted Sanity Studio at `https://your-project-id.sanity.studio`
- Give you a web-based CMS to manage content

#### Or Run Locally
```bash
npx sanity dev
```
Opens at `http://localhost:3333`

---

### Step 6: Import Existing Data

I've already extracted all your data from wbs.pl. Now import it to Sanity.

#### Create Import Script
Create `scripts/import-to-sanity.js`:

```javascript
const { createClient } = require('@sanity/client');
const fs = require('fs');

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: 'production',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

async function importData() {
  // Import staff
  const staff = JSON.parse(fs.readFileSync('./src/data/extracted/staff.json', 'utf8'));
  for (const person of staff.staff) {
    await client.create({
      _type: 'person',
      name: person.name,
      abbreviation: person.abbreviation,
      role: person.role,
      subjects: person.subjects,
      grades: person.grades,
      email: person.email,
      department: person.department,
      additionalRole: person.additionalRole,
    });
    console.log(`Imported: ${person.name}`);
  }

  // Import news
  const news = JSON.parse(fs.readFileSync('./src/data/extracted/news.json', 'utf8'));
  for (const article of news.news) {
    await client.create({
      _type: 'post',
      title: article.title.pl,
      titlePL: article.title.pl,
      titleDE: article.title.de,
      titleEN: article.title.en,
      excerpt: article.summary.pl,
      excerptPL: article.summary.pl,
      excerptDE: article.summary.de,
      excerptEN: article.summary.en,
      category: article.category,
      publishedAt: article.date || new Date().toISOString(),
    });
    console.log(`Imported: ${article.title.pl}`);
  }

  // Import events
  const events = JSON.parse(fs.readFileSync('./src/data/extracted/events.json', 'utf8'));
  for (const event of events.events) {
    await client.create({
      _type: 'event',
      title: event.title.pl,
      titlePL: event.title.pl,
      titleDE: event.title.de,
      titleEN: event.title.en,
      description: event.description.pl,
      descriptionPL: event.description.pl,
      descriptionDE: event.description.de,
      descriptionEN: event.description.en,
      startDate: event.date,
      category: event.type,
      status: event.status,
    });
    console.log(`Imported: ${event.title.pl}`);
  }

  console.log('✅ Import complete!');
}

importData().catch(console.error);
```

#### Run Import
```bash
node scripts/import-to-sanity.js
```

---

### Step 7: Connect Next.js to Sanity

Create `src/lib/sanity/client.ts`:

```typescript
import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: process.env.NODE_ENV === 'production',
  token: process.env.SANITY_API_TOKEN,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
```

---

### Step 8: Update Pages to Use Sanity

#### Example: Update News Page

Create `src/app/[lang]/news/sanity-page.tsx`:

```typescript
import { client } from '@/lib/sanity/client';
import { urlFor } from '@/lib/sanity/client';

async function getNews() {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    titlePL,
    titleDE,
    titleEN,
    excerpt,
    excerptPL,
    excerptDE,
    excerptEN,
    publishedAt,
    category,
    "slug": slug.current,
    "imageUrl": mainImage.asset->url
  }`;
  
  return client.fetch(query);
}

export default async function NewsPage({ params }: { params: { lang: string } }) {
  const { lang } = await params;
  const news = await getNews();

  return (
    // ... your existing news page UI
    // but use `news` from Sanity instead of static JSON
  );
}
```

---

## 📊 Content Types in Sanity

### 1. News Articles (`post`)
- Title (all 3 languages)
- Excerpt (all 3 languages)
- Full content (Portable Text editor)
- Main image
- Category
- Published date
- Author

### 2. Staff Members (`person`)
- Name
- Abbreviation
- Role
- Subjects
- Grades/Classes
- Email
- Phone
- Department
- Photo

### 3. Events (`event`)
- Title (all 3 languages)
- Description (all 3 languages)
- Start/End dates
- Location
- Category
- Image
- Registration URL
- Status

### 4. Pages (`page`)
- Title
- Slug
- Content (Portable Text)
- SEO title & description
- Published status

### 5. Site Settings (`siteSettings`)
- Site name (all 3 languages)
- Tagline
- Contact info
- Social media links
- REGON/NIP numbers

---

## 🎯 Sanity Studio Features

### What You Can Do in Sanity Studio

#### For School Administrators:
✅ Add/edit news articles (with WYSIWYG editor)
✅ Upload and optimize images
✅ Manage staff directory
✅ Create and schedule events
✅ Edit page content
✅ Manage site settings

#### For Editors:
✅ Real-time preview
✅ Draft & publish workflow
✅ Version history
✅ Collaborative editing
✅ Asset library

---

## 💰 Sanity Pricing for WBS School

### Free Tier (Perfect for WBS)
- ✅ **3 users** (editors) included
- ✅ **Unlimited projects**
- ✅ **Unlimited API requests**
- ✅ **2GB media storage**
- ✅ **Unlimited CDN bandwidth**
- ✅ **Community support**

### When to Upgrade ($99/user/month)
- 4+ editors need access
- Need more than 2GB storage
- Require priority support

**WBS School can stay FREE indefinitely!**

---

## 🔧 Development Commands

```bash
# Run Sanity Studio locally
npx sanity dev

# Deploy Sanity Studio
npx sanity deploy

# Import data
node scripts/import-to-sanity.js

# Run Next.js dev server
npm run dev

# Build for production
npm run build
```

---

## 📁 File Structure After Integration

```
German-school/
├── sanity.config.ts           # Sanity configuration
├── sanity.cli.ts              # CLI config
├── .env.local                 # Environment variables (gitignored)
├── .env.local.example         # Template
├── scripts/
│   └── import-to-sanity.js    # Data import script
├── src/
│   ├── app/
│   │   └── [lang]/
│   │       ├── news/
│   │       │   └── page.tsx   # Now fetches from Sanity
│   │       ├── events/
│   │       │   └── page.tsx   # Now fetches from Sanity
│   │       └── about/staff/
│   │           └── page.tsx   # Now fetches from Sanity
│   ├── lib/
│   │   └── sanity/
│   │       ├── client.ts      # Sanity client
│   │       └── queries.ts     # GROQ queries
│   └── schemas/
│       └── *.ts               # Content schemas
└── sanity/
    └── (deployed studio)
```

---

## ✅ Setup Checklist

### Initial Setup
- [ ] Complete npm installation
- [ ] Create Sanity account
- [ ] Create Sanity project
- [ ] Get Project ID
- [ ] Create API Token
- [ ] Configure .env.local
- [ ] Deploy Sanity Studio

### Data Migration
- [ ] Create import script
- [ ] Import staff data (59 members)
- [ ] Import news articles (4 articles)
- [ ] Import events (6 events)
- [ ] Verify data in Sanity Studio

### Code Updates
- [ ] Create Sanity client
- [ ] Update News page to use Sanity
- [ ] Update Events page to use Sanity
- [ ] Update Staff page to use Sanity
- [ ] Add image optimization
- [ ] Test preview mode

### Final Steps
- [ ] Test content editing in Sanity
- [ ] Test publishing workflow
- [ ] Train staff on Sanity Studio
- [ ] Document content guidelines
- [ ] Set up webhooks (optional)

---

## 🎓 Training Resources for Staff

### Sanity Studio Guides
- https://www.sanity.io/docs/introduction
- https://www.sanity.io/docs/create-a-schema
- https://www.sanity.io/docs/overview-of-queries

### Video Tutorials
- Sanity YouTube Channel: https://youtube.com/@sanity-io

---

## 🆘 Troubleshooting

### Common Issues

**1. CORS Error**
```
Solution: Add your Next.js URL to Sanity CORS origins
- Go to sanity.io/manage
- Select project > API
- Add "http://localhost:3000" to CORS origins
```

**2. Authentication Error**
```
Solution: Check SANITY_API_TOKEN in .env.local
- Ensure token has "Editor" role
- Token starts with "sk_"
```

**3. Build Errors**
```
Solution: Check Next.js version compatibility
- Use next-sanity@8 for Next.js 14
- Use --legacy-peer-deps flag
```

---

## 📞 Support

### Sanity Support
- Documentation: https://sanity.io/docs
- Community Slack: https://slack.sanity.io
- GitHub: https://github.com/sanity-io/sanity

### Project Location
`/Users/brandsparkle/Desktop/German-school/`

---

## 🎉 Next Steps

1. **Complete npm installation** (may need --legacy-peer-deps)
2. **Create Sanity account** at https://sanity.io
3. **Get your Project ID** from sanity.io/manage
4. **Update .env.local** with credentials
5. **Deploy Sanity Studio** with `npx sanity deploy`
6. **Import your data** with the import script
7. **Start editing content** in Sanity Studio!

---

**Last Updated:** 2026-03-13
**Version:** 1.0.0
**Status:** Ready for Configuration
