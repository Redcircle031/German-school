# WBS School Website Redesign

**Polsko-Niemiecka Szkoła Spotkań i Dialogu im. Willy'ego Brandta w Warszawie**

A complete redesign of the WBS school website with modern design, trilingual support (PL/DE/EN), GDPR compliance, and WCAG 2.1 AA accessibility.

---

## 📋 Project Overview

This project is a comprehensive redesign of the Willy Brandt School (WBS) website, transforming it from an outdated, non-compliant site into a modern, accessible, and user-friendly platform.

### Key Objectives
- ✅ Modern, professional design reflecting educational excellence
- ✅ Trilingual support (Polish, German, English)
- ✅ Full GDPR compliance (privacy policy, cookie consent, DPO info)
- ✅ WCAG 2.1 AA accessibility compliance
- ✅ Mobile-first responsive design
- ✅ Complete content migration from old site
- ✅ Performance optimization (PageSpeed 90+)
- ✅ SEO optimization for search visibility

---

## 📁 Project Structure

```
German-school/
├── planning/                    # Project documentation
│   ├── DESIGN_BRIEF.md         # Detailed design requirements
│   ├── PROJECT_PLAN.md         # Master project plan
│   ├── DESIGN_AGENTS.md        # Specialized design agents
│   └── COMPLIANCE_CHECKLIST.md # GDPR & accessibility checklist
│
├── src/
│   ├── data/
│   │   └── extracted/          # Data extracted from old site
│   │       ├── news.json       # News articles (4 articles)
│   │       ├── staff.json      # Staff directory (59 teachers)
│   │       ├── navigation.json # Site navigation structure
│   │       ├── school-info.json # School information
│   │       ├── events.json     # Events calendar
│   │       └── documents.json  # Document library (15 docs)
│   │
│   ├── assets/
│   │   ├── images/             # Images from old site
│   │   └── documents/          # PDF documents
│   │
│   ├── app/                    # Next.js app directory
│   ├── components/             # React components
│   ├── lib/                    # Utilities and helpers
│   └── public/                 # Static assets
│
└── docs/                       # Additional documentation
```

---

## 📊 Current Status

### Phase 1: Data Extraction ✅ COMPLETED

**Completed Tasks:**
- ✅ Extracted 4 news articles with translations (PL/DE/EN)
- ✅ Extracted 59 staff members with full details
- ✅ Extracted complete navigation structure
- ✅ Extracted school information (contact, campuses, programs)
- ✅ Extracted events (past and upcoming)
- ✅ Extracted document library (15 documents)
- ✅ Created design brief
- ✅ Created project plan
- ✅ Created design agents documentation

**Pending Tasks:**
- ⏳ Download all images from website
- ⏳ Download all PDF documents
- ⏳ Extract exact color scheme (hex codes)

### Timeline

| Phase | Duration | Status |
|-------|----------|--------|
| Phase 1: Data Extraction | Week 1 | ✅ Completed |
| Phase 2: Design & Branding | Week 2 | ⏳ Pending |
| Phase 3: Technical Setup | Week 2-3 | ⏳ Pending |
| Phase 4: Legal Compliance | Week 3 | ⏳ Pending |
| Phase 5: Core Features | Week 3-5 | ⏳ Pending |
| Phase 6: Internationalization | Week 4 | ⏳ Pending |
| Phase 7: Responsive & A11y | Week 5 | ⏳ Pending |
| Phase 8: Content Migration | Week 5-6 | ⏳ Pending |
| Phase 9: Testing | Week 6 | ⏳ Pending |
| Phase 10: Launch | Week 7 | ⏳ Pending |

---

## 🎨 Design Resources

### Design Brief
See [`planning/DESIGN_BRIEF.md`](./planning/DESIGN_BRIEF.md) for complete design requirements including:
- Visual identity guidelines
- Homepage layout requirements
- Component library specifications
- Accessibility requirements
- Internationalization guidelines

### Design Agents
See [`planning/DESIGN_AGENTS.md`](./planning/DESIGN_AGENTS.md) for specialized AI agents:
- 📊 Research Agent
- 🎨 Concept Agent
- 🌈 Color & Branding Agent
- 📐 Layout & Composition Agent
- 🧩 Component Builder Agent
- ✍️ Content & Typography Agent
- 🎬 Animation & Interaction Agent
- ✅ Quality Assurance Agent

---

## 🛠️ Technology Stack

### Frontend
- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion

### Internationalization
- **Languages:** Polish (pl), German (de), English (en)
- **Library:** next-intl
- **Routing:** Subdirectory (/pl/, /de/, /en/)

### Hosting
- **Platform:** Vercel
- **Domain:** wbs.pl

---

## 📄 Extracted Data Summary

### News Articles
- **Total:** 4 articles
- **Categories:** 5 (Current Events, Upcoming Events, Announcements, Archive, Achievements)
- **Languages:** PL/DE/EN

### Staff Directory
- **Total:** 59 teachers and staff
- **Departments:** 6 (Grundschule, Sekundarstufe, Oberstufe, DaF, Sport, Förderung)
- **Includes:** Names, subjects, grades, emails, roles

### Navigation
- **Main Menu:** 8 items with submenus
- **Footer:** 4 columns
- **Quick Links:** 4 items
- **Languages:** Full trilingual support

### Events
- **Past Events:** 3
- **Upcoming Events:** 3
- **Holiday Schedules:** 2025/26 and 2026/27

### Documents
- **Total:** 15 documents
- **Categories:** 4 (Forms, Regulations, Holiday Plans, Legal)

---

## ⚖️ Compliance Requirements

### GDPR
- [ ] Privacy Policy (PL/DE/EN)
- [ ] Cookie Policy (PL/DE/EN)
- [ ] Cookie Consent Banner
- [ ] DPO Contact Information
- [ ] Data Subject Rights Mechanism

### Accessibility (WCAG 2.1 AA)
- [ ] Accessibility Statement
- [ ] Color Contrast 4.5:1
- [ ] Keyboard Navigation
- [ ] Screen Reader Support
- [ ] Alt Text for Images
- [ ] Semantic HTML

### Legal (Poland)
- [ ] Imprint/Impressum
- [ ] School Identification (REGON, NIP)
- [ ] Child Protection Policy

See [`planning/PROJECT_PLAN.md`](./planning/PROJECT_PLAN.md) for complete compliance checklist.

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- Vercel account (for deployment)

### Installation
```bash
# Navigate to project
cd German-school

# Install dependencies (when package.json is created)
npm install

# Start development server
npm run dev
```

### Build
```bash
# Production build
npm run build

# Start production server
npm start
```

---

## 📞 Contact Information

**School Contact:**
- Address: ul. Św. Urszuli Ledóchowskiej 3, 02-972 Warszawa, Poland
- Phone: +48 22 642 27 05
- Email: sekretariat1@wbs.pl (Grades 5-12), sekretariat2@wbs.pl (Grades 1-4)
- Website: https://wbs.pl

**Project Repository:**
- Location: `/Users/brandsparkle/Desktop/German-school/`
- Created: 2026-03-13

---

## 📈 Success Metrics

| Metric | Target | Current |
|--------|--------|---------|
| PageSpeed Score | 90+ | - |
| Accessibility Score | 95+ | - |
| Mobile-Friendly | 100% | - |
| Load Time | < 2s | - |
| SEO Score | 90+ | - |
| GDPR Compliance | 100% | - |

---

## 📝 Documentation

| Document | Description |
|----------|-------------|
| [`planning/DESIGN_BRIEF.md`](./planning/DESIGN_BRIEF.md) | Complete design requirements |
| [`planning/PROJECT_PLAN.md`](./planning/PROJECT_PLAN.md) | Master project plan and timeline |
| [`planning/DESIGN_AGENTS.md`](./planning/DESIGN_AGENTS.md) | Specialized design agents |
| [`src/data/extracted/`](./src/data/extracted/) | Extracted data from old site |

---

## 🗓️ Next Steps

1. **Complete Image Extraction** - Download all images from current website
2. **Extract Color Scheme** - Get exact hex codes from current branding
3. **Create Design Mockups** - Homepage and key pages
4. **Set Up Next.js Project** - Initialize codebase
5. **Create Legal Documents** - Privacy policy, cookie policy, accessibility statement

---

*Last Updated: 2026-03-13*
*Version: 1.0*
*Status: Phase 1 Complete - Data Extraction*
