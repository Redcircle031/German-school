# WBS Website Navigation Reorganization Plan

## Executive Summary

This document outlines a comprehensive restructuring of the WBS (Willy Brandt School) website navigation to improve user experience for three primary audiences:
1. **Prospective Parents** - Finding admissions info quickly
2. **Current Parents** - Accessing forms and portals easily
3. **Students** - Finding resources intuitively

---

## Part 1: Current Structure Analysis

### 1.1 Current Site Map

```
WBS Website Structure (Current)
│
├── /[locale]/                    # Homepage
├── /[locale]/news/               # News listing
│   ├── /current                  # Current events
│   ├── /upcoming                 # Upcoming events  
│   ├── /flash                    # NTS Flash News
│   ├── /archive                  # News archive
│   └── /announcements            # Tenders/Announcements
│
├── /[locale]/about/              # About school
│   ├── /staff                    # Team page
│   ├── /mission                  # Mission
│   ├── /documents                # Documents
│   ├── /governing-body           # Organ prowadzący
│   ├── /patron                   # School Patron
│   ├── /partners                 # Partners & Sponsors
│   ├── /careers                  # Job offers
│   └── /certificates             # Certificates
│
├── /[locale]/parents/            # Parent Zone (13 items!)
│   ├── /recruitment              # Admissions
│   ├── /forms                    # Forms
│   ├── /regulations              # Regulations
│   ├── /canteen                  # Canteen
│   ├── /aftercare                # Aftercare
│   ├── /council                  # Parent Council
│   ├── /holidays-2025-26         # Holiday plan 2025/26
│   ├── /holidays-2026-27         # Holiday plan 2026/27
│   ├── /bell-schedule            # Bell schedule
│   ├── /choir                    # SchELF Choir
│   ├── /ztm-card                 # ZTM Student Card
│   ├── /e-id                     # E-ID Card
│   └── /mobile-id                # Mobile ID
│
├── /[locale]/students/           # Student Zone
│   ├── /projects                 # Projects
│   ├── /football-academy         # Football Academy
│   ├── /music-academy            # Music Academy
│   ├── /library                  # Library
│   ├── /trusted-teacher          # Trusted Teacher
│   ├── /achievements             # Achievements
│   └── /student-council          # Student Council
│
├── /[locale]/events/             # Events calendar
├── /[locale]/contact/            # Contact
├── /[locale]/impressum/          # Legal imprint
├── /[locale]/faq/                # FAQ (NOT in main nav!)
├── /[locale]/search/             # Search
├── /[locale]/privacy/            # Privacy policy
├── /[locale]/cookies/            # Cookie policy
└── /[locale]/accessibility/      # Accessibility statement
```

### 1.2 Critical Issues Identified

| Issue | Severity | Impact |
|-------|----------|--------|
| **Admissions buried in Parent Zone** | 🔴 High | Prospective parents can't find info quickly |
| **Inconsistent URL structures** | 🔴 High | Footer uses Polish URLs, nav uses English - broken links likely |
| **Parent Zone overload (13 items)** | 🟡 Medium | Cognitive overload, important items buried |
| **Duplicate holiday pages per year** | 🟡 Medium | Requires constant updates, not scalable |
| **Choir in Parent Zone** | 🟢 Low | Should be in Student Zone (student activity) |
| **Multiple ID card pages** | 🟡 Medium | Should be consolidated |
| **FAQ not in main navigation** | 🟡 Medium | Parents can't find answers easily |
| **No "Why WBS?" section** | 🟡 Medium | Missing persuasive content for new families |

### 1.3 URL Inconsistency Problem

```
Current Issue:
┌────────────────────────────────────────────────────────────┐
│ navigation.json          │ Footer Component               │
├────────────────────────────────────────────────────────────┤
│ /parents/recruitment     │ /pl/strefa-rodzica/rekrutacja  │
│ /parents/forms           │ /pl/strefa-rodzica/formularze  │
│ /students/library        │ /pl/strefa-ucznia/biblioteka   │
└────────────────────────────────────────────────────────────┘
Result: Potential 404 errors, confusing user experience
```

---

## Part 2: Proposed New Structure

### 2.1 Design Principles

1. **User-First Organization** - Organize by who is visiting, not by content type
2. **Progressive Disclosure** - Most important items first, details accessible
3. **Consistency** - Single URL structure across all components
4. **Scalability** - Design that doesn't require annual structural changes
5. **Accessibility** - Clear labels, logical grouping, keyboard navigable

### 2.2 New Site Architecture

```
WBS Website Structure (Proposed)
│
├── /[locale]/                           # Homepage
│
├── /[locale]/about/                     # About School
│   ├── /                                # Overview
│   ├── /staff                           # Our Team
│   ├── /mission                         # Mission & Values
│   ├── /patron                          # School Patron
│   ├── /partners                        # Partners & Sponsors
│   ├── /certificates                    # Our Certificates
│   ├── /documents                       # Documents
│   ├── /careers                         # Job Offers
│   └── /governing-body                  # Governing Body
│
├── /[locale]/admissions/                # 🆕 ADMISSIONS (NEW TOP LEVEL)
│   ├── /                                # Overview
│   ├── /process                         # Admission Process
│   ├── /requirements                    # Requirements
│   ├── /tuition                         # Tuition & Fees
│   ├── /visit                           # Visit Us / Open Days
│   ├── /faq                             # Admissions FAQ
│   └── /apply                           # How to Apply
│
├── /[locale]/parents/                   # For Current Parents
│   ├── /                                # Overview
│   ├── /forms                           # Downloadable Forms
│   ├── /regulations                     # Regulations
│   ├── /calendar                        # 🆕 School Calendar (consolidated)
│   ├── /daily-life                      # 🆕 Daily Life (NEW)
│   │   ├── /bell-schedule               #     Bell Schedule
│   │   ├── /canteen                     #     Canteen
│   │   └── /aftercare                   #     Aftercare
│   ├── /student-ids                     # 🆕 Student IDs (consolidated)
│   ├── /council                         # Parent Council
│   └── /portal                          # Parent Portal (link)
│
├── /[locale]/students/                  # For Students
│   ├── /                                # Overview
│   ├── /projects                        # Projects
│   ├── /extracurricular                 # 🆕 Extracurricular (NEW)
│   │   ├── /football-academy            #     Football Academy
│   │   ├── /music-academy               #     Music Academy
│   │   ├── /choir                       #     SchELF Choir (MOVED)
│   │   └── /student-council             #     Student Council
│   ├── /library                         # Library
│   ├── /achievements                    # Our Achievements
│   ├── /trusted-teacher                 # Trusted Teacher
│   └── /portal                          # Student Portal (link)
│
├── /[locale]/news/                      # News & Events
│   ├── /                                # All News
│   ├── /events                          # 🆕 All Events (consolidated)
│   ├── /announcements                   # Announcements/Tenders
│   └── /archive                         # Archive
│
├── /[locale]/contact/                   # Contact
├── /[locale]/faq/                       # General FAQ
├── /[locale]/search/                    # Search
│
└── Legal Pages
    ├── /[locale]/impressum/
    ├── /[locale]/privacy/
    ├── /[locale]/cookies/
    └── /[locale]/accessibility/
```

---

## Part 3: New Menu Structure (Trilingual)

### 3.1 Main Header Navigation

```typescript
// Simplified top-level navigation
const mainNavigation = {
  // 1. ABOUT SCHOOL
  about: {
    pl: "O szkole",
    de: "Über die Schule", 
    en: "About School",
    url: "/about",
    children: [
      { pl: "O WBS", de: "Über WBS", en: "About WBS", url: "/about" },
      { pl: "Nasz zespół", de: "Unser Team", en: "Our Team", url: "/about/staff" },
      { pl: "Misja i wartości", de: "Mission und Werte", en: "Mission & Values", url: "/about/mission" },
      { pl: "Patron szkoły", de: "Schutzpatron", en: "School Patron", url: "/about/patron" },
      { pl: "Partnerzy i sponsorzy", de: "Partner und Sponsoren", en: "Partners & Sponsors", url: "/about/partners" },
      { pl: "Certyfikaty", de: "Zertifikate", en: "Certificates", url: "/about/certificates" },
      { pl: "Dokumenty", de: "Dokumente", en: "Documents", url: "/about/documents" },
    ]
  },

  // 2. ADMISSIONS (NEW - TOP LEVEL)
  admissions: {
    pl: "Rekrutacja",
    de: "Aufnahme",
    en: "Admissions", 
    url: "/admissions",
    children: [
      { pl: "O rekrutacji", de: "Über die Aufnahme", en: "About Admissions", url: "/admissions" },
      { pl: "Proces rekrutacji", de: "Aufnahmeprozess", en: "Admission Process", url: "/admissions/process" },
      { pl: "Wymagania", de: "Anforderungen", en: "Requirements", url: "/admissions/requirements" },
      { pl: "Czesne", de: "Schulgeld", en: "Tuition & Fees", url: "/admissions/tuition" },
      { pl: "Dzień otwarty", de: "Tag der offenen Tür", en: "Open Days", url: "/admissions/visit" },
      { pl: "Częste pytania", de: "Häufige Fragen", en: "FAQ", url: "/admissions/faq" },
      { pl: "Zapisz dziecko", de: "Anmeldung", en: "Apply Now", url: "/admissions/apply", highlight: true },
    ]
  },

  // 3. FOR PARENTS
  parents: {
    pl: "Dla rodziców",
    de: "Für Eltern",
    en: "For Parents",
    url: "/parents",
    children: [
      { pl: "Strefa rodzica", de: "Elternbereich", en: "Parent Zone", url: "/parents", section: "start" },
      { pl: "Formularze", de: "Formulare", en: "Forms", url: "/parents/forms" },
      { pl: "Regulaminy", de: "Ordnungen", en: "Regulations", url: "/parents/regulations" },
      { pl: "Kalendarz", de: "Kalender", en: "Calendar", url: "/parents/calendar" },
      { 
        pl: "Życie szkoły", 
        de: "Schulalltag", 
        en: "Daily Life",
        children: [
          { pl: "Dzwonki", de: "Klingelzeiten", en: "Bell Schedule", url: "/parents/daily-life/bell-schedule" },
          { pl: "Stołówka", de: "Kantine", en: "Canteen", url: "/parents/daily-life/canteen" },
          { pl: "Świetlica", de: "Nachmittagsbetreuung", en: "Aftercare", url: "/parents/daily-life/aftercare" },
        ]
      },
      { pl: "Legitymacje", de: "Ausweise", en: "Student IDs", url: "/parents/student-ids" },
      { pl: "Rada Rodziców", de: "Elternbeirat", en: "Parent Council", url: "/parents/council" },
      { pl: "Portal rodzica →", de: "Elternportal →", en: "Parent Portal →", url: "/portal/parent", external: true },
    ]
  },

  // 4. FOR STUDENTS
  students: {
    pl: "Dla uczniów",
    de: "Für Schüler",
    en: "For Students",
    url: "/students",
    children: [
      { pl: "Strefa ucznia", de: "Schülerbereich", en: "Student Zone", url: "/students", section: "start" },
      { pl: "Projekty", de: "Projekte", en: "Projects", url: "/students/projects" },
      {
        pl: "Zajęcia dodatkowe",
        de: "Zusatzangebote",
        en: "Extracurricular",
        children: [
          { pl: "Akademia Piłkarska", de: "Fußballakademie", en: "Football Academy", url: "/students/extracurricular/football-academy" },
          { pl: "Akademia Muzyczna", de: "Musikakademie", en: "Music Academy", url: "/students/extracurricular/music-academy" },
          { pl: "Chór SchELF", de: "SchELF Chor", en: "SchELF Choir", url: "/students/extracurricular/choir" },
          { pl: "Samorząd", de: "SV", en: "Student Council", url: "/students/extracurricular/student-council" },
        ]
      },
      { pl: "Biblioteka", de: "Bibliothek", en: "Library", url: "/students/library" },
      { pl: "Nasze osiągnięcia", de: "Unsere Erfolge", en: "Our Achievements", url: "/students/achievements" },
      { pl: "Nauczyciel zaufania", de: "Vertrauenslehrer", en: "Trusted Teacher", url: "/students/trusted-teacher" },
      { pl: "Portal ucznia →", de: "Schülerportal →", en: "Student Portal →", url: "/portal/student", external: true },
    ]
  },

  // 5. NEWS
  news: {
    pl: "Aktualności",
    de: "Aktuelles",
    en: "News",
    url: "/news",
    children: [
      { pl: "Wszystkie aktualności", de: "Alle Nachrichten", en: "All News", url: "/news" },
      { pl: "Wydarzenia", de: "Veranstaltungen", en: "Events", url: "/news/events" },
      { pl: "Ogłoszenia", de: "Bekanntmachungen", en: "Announcements", url: "/news/announcements" },
      { pl: "Archiwum", de: "Archiv", en: "Archive", url: "/news/archive" },
    ]
  },

  // 6. CONTACT
  contact: {
    pl: "Kontakt",
    de: "Kontakt",
    en: "Contact",
    url: "/contact",
    children: [] // Simple link, no dropdown
  },
}
```

### 3.2 Quick Actions Bar (MegaMenu Footer)

```typescript
const quickActions = {
  // PRIMARY - For prospective families
  recruitment: {
    pl: "Rekrutacja 2025/26",
    de: "Aufnahme 2025/26",
    en: "Admissions 2025/26",
    url: "/admissions",
    icon: "graduation-cap",
    variant: "primary", // Highlighted button
  },

  // SECONDARY - For current users
  parentPortal: {
    pl: "Portal Rodzica",
    de: "Elternportal",
    en: "Parent Portal",
    url: "/portal/parent",
    icon: "users",
    variant: "outline",
  },

  studentPortal: {
    pl: "Portal Ucznia",
    de: "Schülerportal",
    en: "Student Portal",
    url: "/portal/student",
    icon: "book-open",
    variant: "outline",
  },

  calendar: {
    pl: "Kalendarz szkolny",
    de: "Schulkalender",
    en: "School Calendar",
    url: "/parents/calendar",
    icon: "calendar",
    variant: "outline",
  },
}
```

### 3.3 Footer Navigation Structure

```typescript
const footerNavigation = {
  // Column 1: About & General
  about: {
    title: { pl: "O nas", de: "Über uns", en: "About Us" },
    links: [
      { pl: "O szkole", de: "Über die Schule", en: "About School", url: "/about" },
      { pl: "Zespół", de: "Team", en: "Team", url: "/about/staff" },
      { pl: "Kontakt", de: "Kontakt", en: "Contact", url: "/contact" },
      { pl: "Aktualności", de: "Aktuelles", en: "News", url: "/news" },
      { pl: "FAQ", de: "FAQ", en: "FAQ", url: "/faq" },
    ]
  },

  // Column 2: 🆕 For New Families (NEW)
  newFamilies: {
    title: { pl: "Dla nowych rodziców", de: "Für neue Eltern", en: "For New Families" },
    links: [
      { pl: "Rekrutacja", de: "Aufnahme", en: "Admissions", url: "/admissions" },
      { pl: "Proces rekrutacji", de: "Aufnahmeprozess", en: "Admission Process", url: "/admissions/process" },
      { pl: "Czesne", de: "Schulgeld", en: "Tuition", url: "/admissions/tuition" },
      { pl: "Dzień otwarty", de: "Tag der offenen Tür", en: "Open Day", url: "/admissions/visit" },
      { pl: "Zapisz dziecko", de: "Anmeldung", en: "Apply Now", url: "/admissions/apply" },
    ]
  },

  // Column 3: For Current Parents
  parents: {
    title: { pl: "Dla rodziców", de: "Für Eltern", en: "For Parents" },
    links: [
      { pl: "Formularze", de: "Formulare", en: "Forms", url: "/parents/forms" },
      { pl: "Regulaminy", de: "Ordnungen", en: "Regulations", url: "/parents/regulations" },
      { pl: "Kalendarz", de: "Kalender", en: "Calendar", url: "/parents/calendar" },
      { pl: "Stołówka", de: "Kantine", en: "Canteen", url: "/parents/daily-life/canteen" },
      { pl: "Portal rodzica", de: "Elternportal", en: "Parent Portal", url: "/portal/parent" },
    ]
  },

  // Column 4: For Students
  students: {
    title: { pl: "Dla uczniów", de: "Für Schüler", en: "For Students" },
    links: [
      { pl: "Projekty", de: "Projekte", en: "Projects", url: "/students/projects" },
      { pl: "Zajęcia dodatkowe", de: "AGs", en: "Activities", url: "/students/extracurricular" },
      { pl: "Biblioteka", de: "Bibliothek", en: "Library", url: "/students/library" },
      { pl: "Samorząd", de: "SV", en: "Student Council", url: "/students/extracurricular/student-council" },
      { pl: "Portal ucznia", de: "Schülerportal", en: "Student Portal", url: "/portal/student" },
    ]
  },

  // Column 5: Legal
  legal: {
    title: { pl: "Informacje prawne", de: "Rechtliches", en: "Legal" },
    links: [
      { pl: "Polityka prywatności", de: "Datenschutz", en: "Privacy", url: "/privacy" },
      { pl: "Polityka cookies", de: "Cookies", en: "Cookies", url: "/cookies" },
      { pl: "Dostępność", de: "Barrierefreiheit", en: "Accessibility", url: "/accessibility" },
      { pl: "Impressum", de: "Impressum", en: "Imprint", url: "/impressum" },
    ]
  },
}
```

---

## Part 4: MegaMenu Redesign

### 4.1 Visual Layout

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  🔍 Szukaj...                                          [X Zamknij]          │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  O SZKOLE           REKRUTACJA          DLA RODZICÓW       DLA UCZNIÓW      │
│  ─────────          ──────────          ────────────       ──────────       │
│                                                                             │
│  O WBS              Proces              Formularze         Projekty         │
│  Nasz zespół        Wymagania           Regulaminy         Zajęcia dodatk.  │
│  Misja              Czesne              Kalendarz          Biblioteka       │
│  Patron             Dzień otwarty       Życie szkoły       Osiągnięcia      │
│  Partnerzy          → Zapisz się!       Legitymacje        Samorząd         │
│  Certyfikaty        ──────────          Rada Rodziców      Nauczyciel       │
│  Dokumenty                              Portal rodzica →   Portal ucznia →  │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│  📰 NAJNOWSZE WIADOMOŚCI                                                    │
│  ┌─────────────────┐  ┌─────────────────┐                                    │
│  │ [News Image]    │  │ [News Image]    │                                    │
│  │ Title...        │  │ Title...        │    [Zobacz wszystkie →]          │
│  │ 12.03.2026      │  │ 10.03.2026      │                                    │
│  └─────────────────┘  └─────────────────┘                                    │
├─────────────────────────────────────────────────────────────────────────────┤
│  [🎓 REKRUTACJA] [👤 Portal Rodzica] [📚 Portal Ucznia] [📅 Kalendarz]      │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 4.2 Mobile Accordion Structure

```
📱 Mobile View:

[Logo]              [🔍] [🇵🇱] [X]

🔍 Szukaj...

─ O szkole [▼]
  O WBS
  Nasz zespół
  Misja i wartości
  Patron szkoły
  Partnerzy
  Certyfikaty
  Dokumenty

─ Rekrutacja [▼]
  O rekrutacji
  Proces rekrutacji
  Wymagania
  Czesne
  Dzień otwarty
  FAQ
  🎯 Zapisz dziecko!

─ Dla rodziców [▼]
  Formularze
  Regulaminy
  Kalendarz
  ─ Życie szkoły
    Dzwonki
    Stołówka
    Świetlica
  Legitymacje
  Rada Rodziców
  Portal rodzica →

─ Dla uczniów [▼]
  Projekty
  ─ Zajęcia dodatkowe
    Akademia Piłkarska
    Akademia Muzyczna
    Chór SchELF
    Samorząd
  Biblioteka
  Osiągnięcia
  Nauczyciel zaufania
  Portal ucznia →

─ Aktualności [▼]
  Wszystkie
  Wydarzenia
  Ogłoszenia
  Archiwum

Kontakt

─────────────────────────
🎓 REKRUTACJA    👤 Portal
📚 Portal        📅 Kalendarz
```

---

## Part 5: Implementation Roadmap

### Phase 1: Critical Fixes (Week 1)

#### 5.1.1 Update `navigation.json`
- [ ] Add new `admissions` section
- [ ] Restructure `parents` section (consolidate IDs, add daily-life grouping)
- [ ] Restructure `students` section (add extracurricular grouping, move choir)
- [ ] Remove year-specific holiday pages
- [ ] Update `quickLinks` with calendar instead of events

#### 5.1.2 Fix URL Consistency
- [ ] Update `Footer.tsx` to use English URLs
- [ ] Verify all navigation URLs match app routes
- [ ] Add redirects for old Polish URLs if needed

### Phase 2: MegaMenu Updates (Week 1-2)

#### 5.2.1 Update `MegaMenu.tsx`
- [ ] Add new `admissions` section to `megaMenuSections`
- [ ] Reorganize `parents` section with nested groups
- [ ] Reorganize `students` section with extracurricular group
- [ ] Update quick actions (recruitment as primary)
- [ ] Add visual section headers

#### 5.2.2 Update `Header.tsx`
- [ ] Consider adding direct "Admissions" link in top bar
- [ ] Update any hardcoded labels to use translations

### Phase 3: New Page Creation (Week 2-3)

#### 5.3.1 Create Admissions Hub
```
/src/app/[locale]/admissions/
├── page.tsx                    # Admissions overview
├── process/
│   └── page.tsx               # Admission process
├── requirements/
│   └── page.tsx               # Requirements
├── tuition/
│   └── page.tsx               # Tuition & fees
├── visit/
│   └── page.tsx               # Open days / tours
├── faq/
│   └── page.tsx               # Admissions FAQ
└── apply/
    └── page.tsx               # Application info
```

#### 5.3.2 Consolidate Parent Resources
```
/src/app/[locale]/parents/
├── page.tsx                    # Overview (update)
├── calendar/
│   └── page.tsx               # NEW: Dynamic calendar
├── daily-life/
│   ├── page.tsx               # NEW: Daily life overview
│   ├── bell-schedule/
│   │   └── page.tsx
│   ├── canteen/
│   │   └── page.tsx
│   └── aftercare/
│       └── page.tsx
└── student-ids/
    └── page.tsx               # NEW: Consolidated ID cards
```

#### 5.3.3 Restructure Student Zone
```
/src/app/[locale]/students/
├── page.tsx                    # Overview (update)
├── extracurricular/
│   ├── page.tsx               # NEW: Activities overview
│   ├── football-academy/
│   │   └── page.tsx
│   ├── music-academy/
│   │   └── page.tsx
│   ├── choir/                 # MOVED from /parents
│   │   └── page.tsx
│   └── student-council/
│       └── page.tsx
```

#### 5.3.4 Update News Structure
```
/src/app/[locale]/news/
├── page.tsx                    # All news
├── events/
│   └── page.tsx               # Consolidated events
├── announcements/
│   └── page.tsx
└── archive/
    └── page.tsx
```

### Phase 4: Content Migration (Week 3)

- [ ] Move choir content from `/parents/choir` to `/students/extracurricular/choir`
- [ ] Create redirects for moved pages
- [ ] Consolidate ID card pages
- [ ] Merge holiday schedules into calendar
- [ ] Update internal links

### Phase 5: Testing & Launch (Week 4)

- [ ] Test all navigation paths
- [ ] Verify mobile accordion works correctly
- [ ] Check all language variants
- [ ] Test quick action buttons
- [ ] Validate footer links

---

## Part 6: Complete Updated `navigation.json`

```json
{
  "metadata": {
    "source": "https://wbs.pl",
    "extractedDate": "2026-03-13",
    "languages": ["pl", "de", "en"],
    "version": "2.0"
  },
  "navigation": {
    "header": [
      {
        "id": "about",
        "icon": "info",
        "label": {
          "pl": "O szkole",
          "de": "Über die Schule",
          "en": "About School"
        },
        "url": "/about",
        "children": [
          {
            "label": { "pl": "O WBS", "de": "Über WBS", "en": "About WBS" },
            "url": "/about"
          },
          {
            "label": { "pl": "Nasz zespół", "de": "Unser Team", "en": "Our Team" },
            "url": "/about/staff"
          },
          {
            "label": { "pl": "Misja i wartości", "de": "Mission und Werte", "en": "Mission & Values" },
            "url": "/about/mission"
          },
          {
            "label": { "pl": "Patron szkoły", "de": "Schutzpatron", "en": "School Patron" },
            "url": "/about/patron"
          },
          {
            "label": { "pl": "Partnerzy i sponsorzy", "de": "Partner und Sponsoren", "en": "Partners & Sponsors" },
            "url": "/about/partners"
          },
          {
            "label": { "pl": "Certyfikaty", "de": "Zertifikate", "en": "Certificates" },
            "url": "/about/certificates"
          },
          {
            "label": { "pl": "Dokumenty", "de": "Dokumente", "en": "Documents" },
            "url": "/about/documents"
          }
        ]
      },
      {
        "id": "admissions",
        "icon": "graduation-cap",
        "label": {
          "pl": "Rekrutacja",
          "de": "Aufnahme",
          "en": "Admissions"
        },
        "url": "/admissions",
        "children": [
          {
            "label": { "pl": "O rekrutacji", "de": "Über die Aufnahme", "en": "About Admissions" },
            "url": "/admissions"
          },
          {
            "label": { "pl": "Proces rekrutacji", "de": "Aufnahmeprozess", "en": "Admission Process" },
            "url": "/admissions/process"
          },
          {
            "label": { "pl": "Wymagania", "de": "Anforderungen", "en": "Requirements" },
            "url": "/admissions/requirements"
          },
          {
            "label": { "pl": "Czesne", "de": "Schulgeld", "en": "Tuition & Fees" },
            "url": "/admissions/tuition"
          },
          {
            "label": { "pl": "Dzień otwarty", "de": "Tag der offenen Tür", "en": "Open Days" },
            "url": "/admissions/visit"
          },
          {
            "label": { "pl": "Częste pytania", "de": "Häufige Fragen", "en": "FAQ" },
            "url": "/admissions/faq"
          },
          {
            "label": { "pl": "Zapisz dziecko", "de": "Anmeldung", "en": "Apply Now" },
            "url": "/admissions/apply",
            "highlight": true
          }
        ]
      },
      {
        "id": "parents",
        "icon": "users",
        "label": {
          "pl": "Dla rodziców",
          "de": "Für Eltern",
          "en": "For Parents"
        },
        "url": "/parents",
        "children": [
          {
            "label": { "pl": "Formularze", "de": "Formulare", "en": "Forms" },
            "url": "/parents/forms"
          },
          {
            "label": { "pl": "Regulaminy", "de": "Ordnungen", "en": "Regulations" },
            "url": "/parents/regulations"
          },
          {
            "label": { "pl": "Kalendarz szkolny", "de": "Schulkalender", "en": "School Calendar" },
            "url": "/parents/calendar"
          },
          {
            "label": { "pl": "Życie szkoły", "de": "Schulalltag", "en": "Daily Life" },
            "url": "/parents/daily-life",
            "children": [
              { "label": { "pl": "Dzwonki", "de": "Klingelzeiten", "en": "Bell Schedule" }, "url": "/parents/daily-life/bell-schedule" },
              { "label": { "pl": "Stołówka", "de": "Kantine", "en": "Canteen" }, "url": "/parents/daily-life/canteen" },
              { "label": { "pl": "Świetlica", "de": "Nachmittagsbetreuung", "en": "Aftercare" }, "url": "/parents/daily-life/aftercare" }
            ]
          },
          {
            "label": { "pl": "Legitymacje szkolne", "de": "Schülerausweise", "en": "Student IDs" },
            "url": "/parents/student-ids"
          },
          {
            "label": { "pl": "Rada Rodziców", "de": "Elternbeirat", "en": "Parent Council" },
            "url": "/parents/council"
          }
        ]
      },
      {
        "id": "students",
        "icon": "book-open",
        "label": {
          "pl": "Dla uczniów",
          "de": "Für Schüler",
          "en": "For Students"
        },
        "url": "/students",
        "children": [
          {
            "label": { "pl": "Projekty", "de": "Projekte", "en": "Projects" },
            "url": "/students/projects"
          },
          {
            "label": { "pl": "Zajęcia dodatkowe", "de": "Zusatzangebote", "en": "Extracurricular" },
            "url": "/students/extracurricular",
            "children": [
              { "label": { "pl": "Akademia Piłkarska", "de": "Fußballakademie", "en": "Football Academy" }, "url": "/students/extracurricular/football-academy" },
              { "label": { "pl": "Akademia Muzyczna", "de": "Musikakademie", "en": "Music Academy" }, "url": "/students/extracurricular/music-academy" },
              { "label": { "pl": "Chór SchELF", "de": "SchELF Chor", "en": "SchELF Choir" }, "url": "/students/extracurricular/choir" },
              { "label": { "pl": "Samorząd uczniowski", "de": "Schülervertretung", "en": "Student Council" }, "url": "/students/extracurricular/student-council" }
            ]
          },
          {
            "label": { "pl": "Biblioteka", "de": "Bibliothek", "en": "Library" },
            "url": "/students/library"
          },
          {
            "label": { "pl": "Nasze osiągnięcia", "de": "Unsere Erfolge", "en": "Our Achievements" },
            "url": "/students/achievements"
          },
          {
            "label": { "pl": "Nauczyciel zaufania", "de": "Vertrauenslehrer", "en": "Trusted Teacher" },
            "url": "/students/trusted-teacher"
          }
        ]
      },
      {
        "id": "news",
        "icon": "newspaper",
        "label": {
          "pl": "Aktualności",
          "de": "Aktuelles",
          "en": "News"
        },
        "url": "/news",
        "children": [
          {
            "label": { "pl": "Wszystkie aktualności", "de": "Alle Nachrichten", "en": "All News" },
            "url": "/news"
          },
          {
            "label": { "pl": "Wydarzenia", "de": "Veranstaltungen", "en": "Events" },
            "url": "/news/events"
          },
          {
            "label": { "pl": "Ogłoszenia", "de": "Bekanntmachungen", "en": "Announcements" },
            "url": "/news/announcements"
          },
          {
            "label": { "pl": "Archiwum", "de": "Archiv", "en": "Archive" },
            "url": "/news/archive"
          }
        ]
      },
      {
        "id": "contact",
        "icon": "mail",
        "label": {
          "pl": "Kontakt",
          "de": "Kontakt",
          "en": "Contact"
        },
        "url": "/contact",
        "children": []
      }
    ],
    "footer": {
      "columns": [
        {
          "title": { "pl": "O nas", "de": "Über uns", "en": "About Us" },
          "links": [
            { "label": { "pl": "O szkole", "de": "Über die Schule", "en": "About School" }, "url": "/about" },
            { "label": { "pl": "Zespół", "de": "Team", "en": "Team" }, "url": "/about/staff" },
            { "label": { "pl": "Kontakt", "de": "Kontakt", "en": "Contact" }, "url": "/contact" },
            { "label": { "pl": "Aktualności", "de": "Aktuelles", "en": "News" }, "url": "/news" },
            { "label": { "pl": "FAQ", "de": "FAQ", "en": "FAQ" }, "url": "/faq" }
          ]
        },
        {
          "title": { "pl": "Dla nowych rodziców", "de": "Für neue Eltern", "en": "For New Families" },
          "links": [
            { "label": { "pl": "Rekrutacja", "de": "Aufnahme", "en": "Admissions" }, "url": "/admissions" },
            { "label": { "pl": "Proces rekrutacji", "de": "Aufnahmeprozess", "en": "Admission Process" }, "url": "/admissions/process" },
            { "label": { "pl": "Czesne", "de": "Schulgeld", "en": "Tuition" }, "url": "/admissions/tuition" },
            { "label": { "pl": "Dzień otwarty", "de": "Tag der offenen Tür", "en": "Open Day" }, "url": "/admissions/visit" },
            { "label": { "pl": "Zapisz dziecko", "de": "Anmeldung", "en": "Apply Now" }, "url": "/admissions/apply" }
          ]
        },
        {
          "title": { "pl": "Dla rodziców", "de": "Für Eltern", "en": "For Parents" },
          "links": [
            { "label": { "pl": "Formularze", "de": "Formulare", "en": "Forms" }, "url": "/parents/forms" },
            { "label": { "pl": "Regulaminy", "de": "Ordnungen", "en": "Regulations" }, "url": "/parents/regulations" },
            { "label": { "pl": "Kalendarz", "de": "Kalender", "en": "Calendar" }, "url": "/parents/calendar" },
            { "label": { "pl": "Stołówka", "de": "Kantine", "en": "Canteen" }, "url": "/parents/daily-life/canteen" },
            { "label": { "pl": "Portal rodzica", "de": "Elternportal", "en": "Parent Portal" }, "url": "/portal/parent" }
          ]
        },
        {
          "title": { "pl": "Dla uczniów", "de": "Für Schüler", "en": "For Students" },
          "links": [
            { "label": { "pl": "Projekty", "de": "Projekte", "en": "Projects" }, "url": "/students/projects" },
            { "label": { "pl": "Zajęcia dodatkowe", "de": "AGs", "en": "Activities" }, "url": "/students/extracurricular" },
            { "label": { "pl": "Biblioteka", "de": "Bibliothek", "en": "Library" }, "url": "/students/library" },
            { "label": { "pl": "Samorząd", "de": "SV", "en": "Student Council" }, "url": "/students/extracurricular/student-council" },
            { "label": { "pl": "Portal ucznia", "de": "Schülerportal", "en": "Student Portal" }, "url": "/portal/student" }
          ]
        },
        {
          "title": { "pl": "Informacje prawne", "de": "Rechtliches", "en": "Legal" },
          "links": [
            { "label": { "pl": "Polityka prywatności", "de": "Datenschutz", "en": "Privacy" }, "url": "/privacy" },
            { "label": { "pl": "Polityka cookies", "de": "Cookies", "en": "Cookies" }, "url": "/cookies" },
            { "label": { "pl": "Dostępność", "de": "Barrierefreiheit", "en": "Accessibility" }, "url": "/accessibility" },
            { "label": { "pl": "Impressum", "de": "Impressum", "en": "Imprint" }, "url": "/impressum" }
          ]
        }
      ]
    },
    "quickLinks": [
      {
        "label": { "pl": "Rekrutacja 2025/26", "de": "Aufnahme 2025/26", "en": "Admissions 2025/26" },
        "url": "/admissions",
        "icon": "graduation-cap",
        "variant": "primary"
      },
      {
        "label": { "pl": "Portal rodzica", "de": "Elternportal", "en": "Parent Portal" },
        "url": "/portal/parent",
        "icon": "users",
        "variant": "outline"
      },
      {
        "label": { "pl": "Portal ucznia", "de": "Schülerportal", "en": "Student Portal" },
        "url": "/portal/student",
        "icon": "book-open",
        "variant": "outline"
      },
      {
        "label": { "pl": "Kalendarz szkolny", "de": "Schulkalender", "en": "School Calendar" },
        "url": "/parents/calendar",
        "icon": "calendar",
        "variant": "outline"
      }
    ]
  }
}
```

---

## Part 7: Benefits Summary

### For Prospective Parents:
- ✅ **Clear path to admissions** - Dedicated top-level section
- ✅ **All admission info in one place** - Process, fees, requirements, FAQ
- ✅ **Prominent "Apply Now" CTA** - Highlighted in quick actions and menu
- ✅ **Open day information** - Easy to find visit opportunities

### For Current Parents:
- ✅ **Fewer, better organized menu items** - From 13 to 7 main items
- ✅ **Consolidated calendar** - All dates in one place, no annual updates needed
- ✅ **Grouped daily life info** - Canteen, aftercare, schedule together
- ✅ **Consolidated ID info** - All card types on one page
- ✅ **Direct portal access** - In quick actions and menu

### For Students:
- ✅ **Choir moved to student zone** - Logical placement
- ✅ **Extracurricular grouping** - All activities together
- ✅ **Clear portal access** - Easy to find login

### Technical Benefits:
- ✅ **Consistent URLs** - No more mixed English/Polish paths
- ✅ **Scalable structure** - No year-specific pages to update
- ✅ **Better SEO** - Clear URL hierarchy
- ✅ **Maintainable** - Logical grouping makes updates easier

---

## Part 8: Risk Mitigation

| Risk | Mitigation |
|------|------------|
| Broken bookmarks to old URLs | Implement 301 redirects for moved pages |
| User confusion from changes | Add "New" badges to restructured sections for first month |
| Missing content during migration | Create all new pages before removing old ones |
| Search engine ranking impact | Proper 301 redirects preserve SEO value |
| Staff training needed | Create internal documentation with before/after comparison |

---

*Document Version: 1.0*  
*Created: 2026-03-13*  
*Author: WBS Navigation Agent*
