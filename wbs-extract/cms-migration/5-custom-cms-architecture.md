# WBS Custom CMS Architecture
## Complete System Design for School Website Management

---

## Executive Summary

**Purpose:** Custom-built CMS for managing WBS school website content  
**Scale:** 203+ articles, 1,258 images, 40 PDFs, 3 languages  
**Users:** 5-10 content editors (teachers, admin staff)  

---

## System Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                        FRONTEND LAYER                           │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          │
│  │   Public     │  │   Admin      │  │   API        │          │
│  │   Website    │  │   Dashboard  │  │   Client     │          │
│  │   (Next.js)  │  │   (React)    │  │   (SDK)      │          │
│  └──────────────┘  └──────────────┘  └──────────────┘          │
└─────────────────────────────────────────────────────────────────┘
                              │
                              │ HTTPS/JSON
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                         API LAYER                               │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │              REST API / GraphQL Server                    │  │
│  │  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐        │  │
│  │  │  Auth   │ │ Content │ │  Media  │ │  Admin  │        │  │
│  │  │  API    │ │  API    │ │  API    │ │  API    │        │  │
│  │  └─────────┘ └─────────┘ └─────────┘ └─────────┘        │  │
│  └──────────────────────────────────────────────────────────┘  │
│                         (Node.js/Express)                       │
└─────────────────────────────────────────────────────────────────┘
                              │
                              │ SQL/Queries
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                      DATABASE LAYER                             │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          │
│  │  PostgreSQL  │  │    Redis     │  │     S3       │          │
│  │  (Primary)   │  │   (Cache)    │  │  (Storage)   │          │
│  └──────────────┘  └──────────────┘  └──────────────┘          │
└─────────────────────────────────────────────────────────────────┘
```

---

## Technology Stack

### Backend
| Component | Technology | Reason |
|-----------|------------|--------|
| API Server | Node.js + Express | Fast, scalable, JavaScript ecosystem |
| Database | PostgreSQL | ACID compliance, JSON support, full-text search |
| Cache | Redis | Session storage, rate limiting, query caching |
| File Storage | AWS S3 / Cloudflare R2 | Scalable, CDN-ready image delivery |
| Authentication | JWT + bcrypt | Stateless, secure |
| Email | Nodemailer / SendGrid | Notifications |

### Frontend (Admin Panel)
| Component | Technology | Reason |
|-----------|------------|--------|
| Framework | React 18 | Component-based, large ecosystem |
| Build Tool | Vite | Fast dev, optimized builds |
| UI Library | Tailwind CSS + Headless UI | Customizable, accessible |
| Rich Text | TipTap / Slate.js | Modern, extensible editors |
| State Management | React Query + Zustand | Server state + client state |
| Forms | React Hook Form + Zod | Type-safe validation |

### Frontend (Public Website)
| Component | Technology | Reason |
|-----------|------------|--------|
| Framework | Next.js 14 (App Router) | SSG/SSR, image optimization, i18n |
| Styling | Tailwind CSS | Utility-first, fast |
| Animations | Framer Motion | React-native animations |
| Icons | Lucide React | Clean, consistent |

---

## Database Schema

See: `2-cms-schema.json` for complete PostgreSQL schema

### Core Tables

```sql
-- Users & Authentication
users (id, email, password_hash, role, ...)

-- Content Management  
articles (id, slug, title_pl/de/en, content_pl/de/en, status, ...)
categories (id, slug, name_pl/de/en, color, ...)
tags (id, slug, name_pl/de/en, ...)

-- Media Management
media (id, filename, file_path, mime_type, alt_text_pl/de/en, ...)
article_media (junction table)

-- Navigation
navigation (id, parent_id, label_pl/de/en, url, position, ...)

-- Settings
settings (key, value, type)
```

### Key Design Decisions

1. **Multi-language fields**: `title_pl`, `title_de`, `title_en` (not separate tables)
   - Pros: Simple queries, easy fallback logic
   - Cons: Schema changes require updating all language columns

2. **Soft deletes**: Not implemented (archive status instead)
   - Use `status: 'archived'` for content removal

3. **Media storage**: S3 paths stored, not binary data
   - Scales better, CDN-ready

---

## API Design

### REST Endpoints

#### Authentication
```
POST   /api/v1/auth/login
POST   /api/v1/auth/logout
POST   /api/v1/auth/refresh
GET    /api/v1/auth/me
```

#### Articles
```
GET    /api/v1/articles              # List (with filters, pagination)
POST   /api/v1/articles              # Create
GET    /api/v1/articles/:id          # Get single
PUT    /api/v1/articles/:id          # Update
DELETE /api/v1/articles/:id          # Delete (soft)
GET    /api/v1/articles/:id/preview  # Preview draft
POST   /api/v1/articles/:id/publish  # Publish
POST   /api/v1/articles/:id/unpublish
```

**Query Parameters:**
```
GET /api/v1/articles?
  lang=pl&                    # Language
  category=wydarzenia&        # Filter by category
  status=published&           # Filter by status
  search=konkurs&             # Full-text search
  page=1&                     # Pagination
  limit=20&
  sort=published_at&          # Sorting
  order=desc
```

#### Categories
```
GET    /api/v1/categories
POST   /api/v1/categories
PUT    /api/v1/categories/:id
DELETE /api/v1/categories/:id
```

#### Media
```
POST   /api/v1/media/upload        # Multipart form data
GET    /api/v1/media
DELETE /api/v1/media/:id
POST   /api/v1/media/:id/optimize  # Trigger optimization
```

#### Navigation
```
GET    /api/v1/navigation?position=header
PUT    /api/v1/navigation/reorder  # Bulk reorder
```

### Response Format
```json
{
  "success": true,
  "data": { ... },
  "meta": {
    "page": 1,
    "limit": 20,
    "total": 203,
    "totalPages": 11
  }
}
```

### Error Format
```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid input data",
    "details": [
      { "field": "title", "message": "Title is required" }
    ]
  }
}
```

---

## Admin Panel Design

### Layout
```
┌─────────────────────────────────────────────────────────────┐
│  WBS CMS                                👤 Admin    🔔   ⚙️  │
├──────────┬──────────────────────────────────────────────────┤
│          │                                                  │
│  📄      │              MAIN CONTENT AREA                   │
│ Content  │                                                  │
│          │                                                  │
│  📁      ├──────────────────────────────────────────────────┤
│ Media    │  ┌─────────────┐ ┌─────────────┐                 │
│          │  │  Stats      │ │  Quick      │                 │
│  🏷️      │  │  Widget     │ │  Actions    │                 │
│ Tags     │  └─────────────┘ └─────────────┘                 │
│          │                                                  │
│  🧭      │  ┌─────────────────────────────────────┐        │
│ Nav      │  │     Recent Articles Table           │        │
│          │  └─────────────────────────────────────┘        │
│  ⚙️      │                                                  │
│ Settings │                                                  │
│          │                                                  │
└──────────┴──────────────────────────────────────────────────┘
```

### Key Screens

#### 1. Dashboard
- Stats: Total articles, views this month, pending drafts
- Quick actions: New article, Upload media
- Recent activity log
- Drafts requiring attention

#### 2. Article Editor
```
┌─────────────────────────────────────────────────────────────┐
│ Title: [Polish                ] [DE] [EN]                    │
│       [German                 ]                             │
│       [English                ]                             │
├─────────────────────────────────────────────────────────────┤
│ Category: [Aktualności ▼]  Date: [2026-02-09]  Status: [●] │
├─────────────────────────────────────────────────────────────┤
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ Rich Text Editor                                       │ │
│ │ [Toolbar: B I U | H1 H2 | Link Image | List | ...]     │ │
│ │                                                        │ │
│ │ Content here...                                        │ │
│ │                                                        │ │
│ └─────────────────────────────────────────────────────────┘ │
├─────────────────────────────────────────────────────────────┤
│ SEO Title: [                    ] (60 chars)                │
│ SEO Desc:  [                    ] (160 chars)               │
├─────────────────────────────────────────────────────────────┤
│ Gallery: [📷 img1] [📷 img2] [+ Add]                       │
│ Attachments: [📄 document.pdf] [+ Add]                     │
├─────────────────────────────────────────────────────────────┤
│ [Save Draft] [Preview] [Publish]                            │
└─────────────────────────────────────────────────────────────┘
```

#### 3. Media Library
- Grid/list view toggle
- Drag-and-drop upload
- Bulk operations (delete, tag)
- Search by filename, alt text
- Filters: type, date, size

#### 4. Navigation Editor
- Drag-and-drop reorder
- Multi-level (mega menu support)
- Language-specific labels
- Visibility toggles

---

## Features Specification

### Must-Have (MVP)
- [ ] Article CRUD with rich text editor
- [ ] Multi-language content (PL/DE/EN)
- [ ] Media upload and management
- [ ] Category management
- [ ] Navigation editor
- [ ] User authentication & roles
- [ ] Draft/Published status
- [ ] SEO fields (meta title, description)
- [ ] Image optimization (auto WebP)
- [ ] Mobile-responsive admin

### Should-Have (Phase 2)
- [ ] Article scheduling (publish later)
- [ ] Version history / undo
- [ ] Collaborative editing
- [ ] Analytics dashboard (views)
- [ ] Content templates
- [ ] Bulk operations
- [ ] Import/Export (WordPress, Markdown)
- [ ] Advanced search (filters)

### Nice-to-Have (Phase 3)
- [ ] WYSIWYG page builder
- [ ] A/B testing
- [ ] Comments moderation
- [ ] Newsletter integration
- [ ] Social media scheduling
- [ ] AI-assisted content (translations, summaries)

---

## Security Considerations

### Authentication
- JWT tokens with refresh token rotation
- Password requirements: 12+ chars, mixed case, numbers
- Rate limiting: 5 login attempts per 15 minutes
- Session timeout: 8 hours

### Authorization
- Role-based access control (RBAC)
- Roles: admin, editor, contributor
- Granular permissions per content type

### Data Protection
- SQL injection prevention (parameterized queries)
- XSS prevention (sanitize HTML in editor)
- CSRF tokens for state-changing operations
- File upload restrictions (type, size)
- Database encryption at rest

### GDPR Compliance
- Audit log of all content changes
- User data export (right to portability)
- Soft delete with 30-day retention
- Consent tracking for images (student photos)

---

## Deployment Architecture

### Production Setup
```
┌─────────────────────────────────────────┐
│           Cloudflare CDN                │
│    (DDoS protection, caching)           │
└─────────────────────────────────────────┘
                   │
┌─────────────────────────────────────────┐
│         Vercel / Railway                │
│    ┌─────────────┐ ┌─────────────┐     │
│    │  Next.js    │ │  API Server │     │
│    │  (Frontend) │ │  (Backend)  │     │
│    └─────────────┘ └─────────────┘     │
└─────────────────────────────────────────┘
                   │
┌─────────────────────────────────────────┐
│       Supabase / Railway Postgres       │
│         (Database + Storage)            │
└─────────────────────────────────────────┘
```

### Environment Variables
```env
# Database
DATABASE_URL=postgresql://...

# JWT
JWT_SECRET=your-super-secret-key
JWT_EXPIRES_IN=8h

# S3/Storage
S3_BUCKET=wbs-cms-media
S3_REGION=eu-central-1
AWS_ACCESS_KEY_ID=...
AWS_SECRET_ACCESS_KEY=...

# Email
SMTP_HOST=...
SMTP_USER=...
SMTP_PASS=...

# App
NODE_ENV=production
ADMIN_URL=https://cms.wbs.pl
PUBLIC_URL=https://wbs.pl
```

---

## Development Roadmap

### Phase 1: Foundation (Week 1-2)
- [ ] Database setup (PostgreSQL)
- [ ] API scaffolding (Express)
- [ ] Authentication system
- [ ] Basic article CRUD
- [ ] File upload to S3

### Phase 2: Admin UI (Week 3-4)
- [ ] Admin dashboard layout
- [ ] Article editor (TipTap)
- [ ] Media library
- [ ] Category management

### Phase 3: Content Features (Week 5-6)
- [ ] Multi-language support
- [ ] Navigation editor
- [ ] SEO fields
- [ ] Image optimization pipeline

### Phase 4: Polish & Deploy (Week 7)
- [ ] Testing (unit, integration, e2e)
- [ ] Performance optimization
- [ ] Security audit
- [ ] Documentation
- [ ] Deploy to production

---

## File Structure

```
wbs-cms/
├── apps/
│   ├── api/                    # Backend API
│   │   ├── src/
│   │   │   ├── config/
│   │   │   ├── controllers/
│   │   │   ├── middleware/
│   │   │   ├── models/
│   │   │   ├── routes/
│   │   │   ├── services/
│   │   │   └── utils/
│   │   ├── tests/
│   │   ├── package.json
│   │   └── Dockerfile
│   │
│   └── admin/                  # Admin Panel
│       ├── src/
│       │   ├── components/
│       │   ├── hooks/
│       │   ├── lib/
│       │   ├── pages/
│       │   ├── stores/
│       │   └── styles/
│       ├── package.json
│       └── vite.config.ts
│
├── packages/
│   ├── shared-types/           # TypeScript types
│   ├── ui-components/          # Shared UI
│   └── eslint-config/          # Linting rules
│
├── database/
│   ├── migrations/
│   ├── seeds/
│   └── schema.sql
│
├── docker-compose.yml
├── turbo.json                  # Monorepo config
└── README.md
```

---

## Cost Estimation (Monthly)

| Service | Provider | Cost |
|---------|----------|------|
| Database | Supabase/Railway | $25-50 |
| API Hosting | Railway/Vercel | $20-40 |
| Admin Hosting | Vercel | $20 |
| Storage (S3/R2) | AWS/Cloudflare | $10-30 |
| CDN | Cloudflare | Free-$20 |
| **Total** | | **$75-160/month** |

---

## Next Steps

1. **Review this architecture** with stakeholders
2. **Set up development environment**
3. **Create detailed API specs** (OpenAPI/Swagger)
4. **Design database migrations**
5. **Build MVP** (Phase 1)

---

*Document Version: 1.0*  
*Created: 2026-03-13*
