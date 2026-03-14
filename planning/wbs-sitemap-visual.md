# WBS Website Visual Sitemap

## Overview

This document provides a visual representation of the proposed WBS website structure in three languages.

---

## Main Navigation Structure

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│  [🏠 Logo: Willy Brandt School]  [🔍]  [🇵🇱/🇩🇪/🇬🇧]  [☰ Menu]                         │
└─────────────────────────────────────────────────────────────────────────────────────┘
                                    │
                    ┌───────────────┼───────────────┐
                    ▼               ▼               ▼
          [News Link]      [Events Link]      [Menu Button]
               │                  │                   │
               └──────────────────┴───────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                              MEGA MENU OVERLAY                                       │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                     │
│  O SZKOLE           REKRUTACJA           DLA RODZICÓW          DLA UCZNIÓW         │
│  About School       Admissions           For Parents           For Students         │
│  Über die Schule    Aufnahme             Für Eltern            Für Schüler          │
│  ─────────────      ──────────           ─────────────         ─────────────        │
│                                                                                     │
│  O WBS              O rekrutacji         Formularze            Projekty              │
│  Nasz zespół        Proces rekrutacji    Regulaminy            Zajęcia dodatkowe     │
│  Misja i wartości   Wymagania            Kalendarz             Biblioteka            │
│  Patron szkoły      Czesne               Życie szkoły ▸        Osiągnięcia          │
│  Partnerzy          Dzień otwarty          ├─ Dzwonki          Nauczyciel zaufania   │
│  Certyfikaty        Częste pytania         ├─ Stołówka         Portal ucznia →       │
│  Dokumenty          → Zapisz dziecko!      ├─ Świetlica                              │
│                     ─────────────          Legitymacje                              │
│                                            Rada Rodziców                            │
│                                            Portal rodzica →                         │
│                                                                                     │
├─────────────────────────────────────────────────────────────────────────────────────┤
│  Sub-section Quick Links:                                                           │
│  ┌─────────────────────────────┐  ┌─────────────────────────────────┐              │
│  │ ŻYCIE SZKOŁY / Daily Life   │  │ ZAJĘCIA DODATKOWE / Activities  │              │
│  │ • Dzwonki / Bell Schedule   │  │ • Piłka nożna / Football        │              │
│  │ • Stołówka / Canteen        │  │ • Muzyka / Music                │              │
│  │ • Świetlica / Aftercare     │  │ • Chór / Choir                  │              │
│  │                             │  │ • Samorząd / Student Council    │              │
│  └─────────────────────────────┘  └─────────────────────────────────┘              │
├─────────────────────────────────────────────────────────────────────────────────────┤
│  📰 NAJNOWSZE WIADOMOŚCI / Latest News                                              │
│  ┌─────────────────┐  ┌─────────────────┐  [Zobacz wszystkie / See all →]          │
│  │ [Image]         │  │ [Image]         │                                         │
│  │ News Title 1    │  │ News Title 2    │                                         │
│  │ 12.03.2026      │  │ 10.03.2026      │                                         │
│  └─────────────────┘  └─────────────────┘                                         │
├─────────────────────────────────────────────────────────────────────────────────────┤
│  [🎓 REKRUTACJA / Admissions] [👤 Portal Rodzica] [📚 Portal Ucznia] [📅 Kalendarz] │
│         PRIMARY CTA              Parent Portal      Student Portal    Calendar      │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

---

## URL Structure Map

```
wbs.pl/[locale]/
│
├── /                           # Homepage
│   └── page.tsx
│
├── about/                      # About School
│   ├── page.tsx               # Overview
│   ├── staff/                 # Team
│   ├── mission/               # Mission & Values
│   ├── patron/                # School Patron
│   ├── partners/              # Partners & Sponsors
│   ├── certificates/          # Certificates
│   ├── documents/             # Documents
│   ├── careers/               # Job Offers
│   └── governing-body/        # Governing Body
│
├── admissions/                 # 🆕 ADMISSIONS (NEW SECTION)
│   ├── page.tsx               # Overview
│   ├── process/               # Admission Process
│   ├── requirements/          # Requirements
│   ├── tuition/               # Tuition & Fees
│   ├── visit/                 # Open Days / Tours
│   ├── faq/                   # Admissions FAQ
│   └── apply/                 # How to Apply
│
├── parents/                    # For Parents (RESTRUCTURED)
│   ├── page.tsx               # Overview
│   ├── forms/                 # Downloadable Forms
│   ├── regulations/           # Regulations
│   ├── calendar/              # 🆕 School Calendar (consolidated)
│   ├── council/               # Parent Council
│   ├── daily-life/            # 🆕 Daily Life (NEW GROUP)
│   │   ├── page.tsx
│   │   ├── bell-schedule/     #     Bell Schedule
│   │   ├── canteen/           #     Canteen
│   │   └── aftercare/         #     Aftercare
│   └── student-ids/           # 🆕 Student IDs (consolidated)
│       └── page.tsx           #     (ZTM, E-ID, Mobile ID)
│
├── students/                   # For Students (RESTRUCTURED)
│   ├── page.tsx               # Overview
│   ├── projects/              # Projects
│   ├── library/               # Library
│   ├── achievements/          # Achievements
│   ├── trusted-teacher/       # Trusted Teacher
│   └── extracurricular/       # 🆕 Extracurricular (NEW GROUP)
│       ├── page.tsx
│       ├── football-academy/  #     Football Academy
│       ├── music-academy/     #     Music Academy
│       ├── choir/             #     SchELF Choir (MOVED from parents)
│       └── student-council/   #     Student Council
│
├── news/                       # News & Events (CONSOLIDATED)
│   ├── page.tsx               # All News
│   ├── [id]/                  # Article Detail
│   ├── events/                # 🆕 All Events (consolidated)
│   ├── announcements/         # Announcements/Tenders
│   └── archive/               # Archive
│
├── events/                     # → Redirects to /news/events
│
├── contact/                    # Contact
│   └── page.tsx
│
├── faq/                        # General FAQ
│   └── page.tsx
│
├── search/                     # Search
│   └── page.tsx
│
├── portal/                     # Portals (external links)
│   ├── parent/                # Parent Portal (redirect)
│   └── student/               # Student Portal (redirect)
│
└── legal/                      # Legal Pages
    ├── impressum/
    ├── privacy/
    ├── cookies/
    └── accessibility/
```

---

## User Journey Maps

### Journey 1: Prospective Parent

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                         PROSPECTIVE PARENT JOURNEY                           │
└─────────────────────────────────────────────────────────────────────────────┘

ENTRY POINTS:
├── Google Search "niemiecka szkoła warszawa"
├── Referral from friend
└── Social media post
        │
        ▼
┌───────────────┐
│  🏠 Homepage  │ ◄── Clear "Admissions" CTA
└───────┬───────┘
        │
        ▼
┌─────────────────────────────────────────────────────────────┐
│  🎓 ADMISSIONS / Rekrutacja                                  │
│  ───────────────────────────                                 │
│  • Overview of the school                                    │
│  • Process step-by-step                                      │
│  • Requirements                                              │
│  • Tuition & fees                                            │
│  • Open days calendar                                        │
│  • FAQ                                                       │
│  • [🎯 APPLY NOW] button                                     │
└─────────────────────────────────────────────────────────────┘
        │
        ├── Not ready? ──→ [Save for later / Contact us]
        │
        ▼
┌───────────────┐
│  📞 Contact   │
│  📧 Email     │
│  📅 Visit     │
└───────────────┘

KEY IMPROVEMENTS:
✅ Admissions prominently featured (not buried in Parent Zone)
✅ All admission info in one section
✅ Clear "Apply Now" CTA
✅ Multiple entry points from homepage
```

### Journey 2: Current Parent (Daily Use)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                         CURRENT PARENT JOURNEY                               │
└─────────────────────────────────────────────────────────────────────────────┘

QUICK ACCESS (From any page):
├── [👤 Portal Rodzica] ──→ Direct login
├── [📅 Kalendarz] ───────→ School calendar
└── [📱 Mobile App] ──────→ Quick access

NEED FORMS?
┌───────────────┐
│  ☰ Menu       │
└───────┬───────┘
        ▼
┌─────────────────────────────┐
│  DLA RODZICÓW / Parents     │
│  ─────────────────────────  │
│  ⚡ Formularze              │
│  ⚡ Regulaminy              │
│  ⚡ Kalendarz               │
│     Życie szkoły            │
│     ├─ Dzwonki              │
│     ├─ Stołówka             │
│     └─ Świetlica            │
└─────────────────────────────┘

FOOTER ACCESS:
├── Forms
├── Calendar
├── Canteen menu
└── Portal link

KEY IMPROVEMENTS:
✅ Fewer menu items (13 → 7)
✅ Grouped related items (Daily Life)
✅ Portal always accessible
✅ Calendar consolidated (no year-specific pages)
```

### Journey 3: Student

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                            STUDENT JOURNEY                                   │
└─────────────────────────────────────────────────────────────────────────────┘

QUICK ACCESS:
├── [📚 Portal Ucznia] ──→ Grades, schedule, homework
└── [📅 Kalendarz] ──────→ Events, exams

LOOKING FOR ACTIVITIES?
┌───────────────┐
│  ☰ Menu       │
└───────┬───────┘
        ▼
┌─────────────────────────────────────────────┐
│  DLA UCZNIÓW / Students                     │
│  ───────────────────────────                │
│  Projekty                                   │
│  Zajęcia dodatkowe / Activities            │
│  ├─ ⚽ Akademia Piłkarska                   │
│  ├─ 🎵 Akademia Muzyczna                    │
│  ├─ 🎤 Chór SchELF                          │
│  └─ 🏛️ Samorząd Uczniowski                  │
│  Biblioteka                                 │
│  Osiągnięcia                                │
│  Nauczyciel zaufania                        │
└─────────────────────────────────────────────┘

KEY IMPROVEMENTS:
✅ Choir moved from Parent Zone (makes sense!)
✅ Activities grouped together
✅ Clear portal access
```

---

## Before vs After Comparison

### Navigation Structure

```
BEFORE (v1)                              AFTER (v2)
────────────────────────────────────────────────────────────────

O nas (9 items)                          O szkole (7 items)
├── O WBS                                ├── O WBS
├── Zespół                               ├── Zespół
├── Misja                                ├── Misja
├── Dokumenty                            ├── Patron
├── Organ prowadzący                     ├── Partnerzy
├── Patron                               ├── Certyfikaty
├── Partnerzy                            └── Dokumenty
├── Oferty pracy
└── Certyfikaty

Strefa rodzica (13 items!)               Dla rodziców (7 items)
├── Rekrutacja                    🡆      ├── Formularze
├── Formularze                           ├── Regulaminy
├── Regulaminy                           ├── Kalendarz  🆕
├── Stołówka                             ├── Życie szkoły 🆕
├── Opieka popołudniowa                    ├── Dzwonki
├── Rada Rodziców                          ├── Stołówka
├── Plan ferii 2025/26         🗑️         ├── Świetlica
├── Plan ferii 2026/27         🗑️         ├── Legitymacje 🆕
├── Dzwonki                    🡆          ├── Rada Rodziców
├── Chór                       🡆          └── Portal rodzica
├── Karta ucznia ZTM           🡆
├── E-legitymacja              🡆    🆕 REKRUTACJA (7 items)
└── mLegitymacja               🡆         ├── O rekrutacji
                                          ├── Proces
Strefa ucznia (7 items)                   ├── Wymagania
├── Projekty                              ├── Czesne
├── Akademia Piłkarska                    ├── Dzień otwarty
├── Akademia Muzyczna                     ├── FAQ
├── Biblioteka                            └── Zapisz dziecko!
├── Nauczyciel zaufania
├── Osiągnięcia                      Dla uczniów (5 items)
└── Samorząd uczniowski                   ├── Projekty
                                          ├── Zajęcia dodatkowe 🆕
Aktualności (5 items)                       ├── Piłka nożna
├── Aktualne wydarzenia                     ├── Muzyka
├── Nadchodzące wydarzenia                  ├── Chór (moved!)
├── Flash News NTS                          └── Samorząd
├── Archiwum                           ├── Biblioteka
└── Ogłoszenia                         ├── Osiągnięcia
                                       └── Nauczyciel

Kontakt                                Aktualności (4 items)
                                       ├── Wszystkie
                                       ├── Wydarzenia
                                       ├── Ogłoszenia
                                       └── Archiwum

                                       Kontakt
```

### Legend
- 🆕 New item/section
- 🗑️ Removed/consolidated
- 🡆 Moved to

---

## Mobile Navigation Structure

```
📱 Mobile Menu (Accordion)

[WBS Logo]                    [X]

🔍 Szukaj...

─────────────────────────────

► O szkole                    [tap to expand]
  ○ O WBS
  ○ Nasz zespół
  ○ Misja i wartości
  ○ Patron szkoły
  ○ Partnerzy
  ○ Certyfikaty
  ○ Dokumenty

► Rekrutacja 🆕               [tap to expand]
  ○ O rekrutacji
  ○ Proces rekrutacji
  ○ Wymagania
  ○ Czesne
  ○ Dzień otwarty
  ○ FAQ
  ● 🎯 Zapisz dziecko! [highlighted]

► Dla rodziców                [tap to expand]
  ○ Formularze
  ○ Regulaminy
  ○ Kalendarz
  ► Życie szkoły              [nested]
    ○ Dzwonki
    ○ Stołówka
    ○ Świetlica
  ○ Legitymacje
  ○ Rada Rodziców
  → Portal rodzica

► Dla uczniów                 [tap to expand]
  ○ Projekty
  ► Zajęcia dodatkowe         [nested]
    ○ Akademia Piłkarska
    ○ Akademia Muzyczna
    ○ Chór SchELF
    ○ Samorząd
  ○ Biblioteka
  ○ Osiągnięcia
  ○ Nauczyciel zaufania
  → Portal ucznia

► Aktualności                 [tap to expand]
  ○ Wszystkie aktualności
  ○ Wydarzenia
  ○ Ogłoszenia
  ○ Archiwum

Kontakt

─────────────────────────────

QUICK ACTIONS:
┌─────────────┬─────────────┐
│ 🎓 REKRUT.  │ 👤 Portal   │
├─────────────┼─────────────┤
│ 📚 Portal   │ 📅 Kalendarz│
│    Ucznia   │             │
└─────────────┴─────────────┘

─────────────────────────────

[🇵🇱 Polski] [🇩🇪 Deutsch] [🇬🇧 English]
```

---

## Language Comparison Table

| Polish | German | English | URL |
|--------|--------|---------|-----|
| **Główna nawigacja** | **Hauptnavigation** | **Main Navigation** | |
| O szkole | Über die Schule | About School | `/about` |
| Rekrutacja 🆕 | Aufnahme 🆕 | Admissions 🆕 | `/admissions` |
| Dla rodziców | Für Eltern | For Parents | `/parents` |
| Dla uczniów | Für Schüler | For Students | `/students` |
| Aktualności | Aktuelles | News | `/news` |
| Kontakt | Kontakt | Contact | `/contact` |
| | | | |
| **Rekrutacja** 🆕 | **Aufnahme** 🆕 | **Admissions** 🆕 | |
| O rekrutacji | Über die Aufnahme | About Admissions | `/admissions` |
| Proces rekrutacji | Aufnahmeprozess | Admission Process | `/admissions/process` |
| Wymagania | Anforderungen | Requirements | `/admissions/requirements` |
| Czesne | Schulgeld | Tuition & Fees | `/admissions/tuition` |
| Dzień otwarty | Tag der offenen Tür | Open Days | `/admissions/visit` |
| Częste pytania | Häufige Fragen | FAQ | `/admissions/faq` |
| Zapisz dziecko | Anmeldung | Apply Now | `/admissions/apply` |
| | | | |
| **Dla rodziców** | **Für Eltern** | **For Parents** | |
| Formularze | Formulare | Forms | `/parents/forms` |
| Regulaminy | Ordnungen | Regulations | `/parents/regulations` |
| Kalendarz | Kalender | Calendar | `/parents/calendar` |
| Życie szkoły | Schulalltag | Daily Life | `/parents/daily-life` |
| Dzwonki | Klingelzeiten | Bell Schedule | `/parents/daily-life/bell-schedule` |
| Stołówka | Kantine | Canteen | `/parents/daily-life/canteen` |
| Świetlica | Nachmittagsbetreuung | Aftercare | `/parents/daily-life/aftercare` |
| Legitymacje | Ausweise | Student IDs | `/parents/student-ids` |
| Rada Rodziców | Elternbeirat | Parent Council | `/parents/council` |
| Portal rodzica | Elternportal | Parent Portal | `/portal/parent` |
| | | | |
| **Dla uczniów** | **Für Schüler** | **For Students** | |
| Projekty | Projekte | Projects | `/students/projects` |
| Zajęcia dodatkowe | Zusatzangebote | Extracurricular | `/students/extracurricular` |
| Akademia Piłkarska | Fußballakademie | Football Academy | `/students/extracurricular/football-academy` |
| Akademia Muzyczna | Musikakademie | Music Academy | `/students/extracurricular/music-academy` |
| Chór SchELF | SchELF Chor | SchELF Choir | `/students/extracurricular/choir` |
| Samorząd uczniowski | Schülervertretung | Student Council | `/students/extracurricular/student-council` |
| Biblioteka | Bibliothek | Library | `/students/library` |
| Osiągnięcia | Erfolge | Achievements | `/students/achievements` |
| Nauczyciel zaufania | Vertrauenslehrer | Trusted Teacher | `/students/trusted-teacher` |
| Portal ucznia | Schülerportal | Student Portal | `/portal/student` |
| | | | |
| **Aktualności** | **Aktuelles** | **News** | |
| Wszystkie aktualności | Alle Nachrichten | All News | `/news` |
| Wydarzenia | Veranstaltungen | Events | `/news/events` |
| Ogłoszenia | Bekanntmachungen | Announcements | `/news/announcements` |
| Archiwum | Archiv | Archive | `/news/archive` |

---

## SEO & URL Structure Benefits

### Before (Inconsistent)
```
Problem: Mixed URL formats
├── /parents/recruitment (English)
├── /pl/strefa-rodzica/formularze (Polish in Footer)
└── /students/library (English)

Issues:
❌ Confusing for users
❌ SEO penalties for duplicate content
❌ Maintenance nightmare
```

### After (Consistent)
```
Solution: Standardized English URLs
├── /admissions (NEW - clear purpose)
├── /parents/forms
├── /students/library
└── /news/events

Benefits:
✅ Consistent across all languages
✅ Better SEO with clear hierarchy
✅ Easy to maintain
✅ Users can predict URLs
```

---

## Implementation Checklist

### Phase 1: Structure (Week 1)
- [ ] Update `navigation.json` with v2 structure
- [ ] Update `MegaMenu.tsx` with new sections
- [ ] Update `Footer.tsx` with consistent URLs
- [ ] Create new `navigation-v2.json` file

### Phase 2: Pages (Week 2-3)
- [ ] Create `/admissions/` section (7 pages)
- [ ] Create `/parents/daily-life/` subsection
- [ ] Create `/parents/student-ids/` consolidated page
- [ ] Create `/students/extracurricular/` subsection
- [ ] Move choir content from `/parents/choir`
- [ ] Update `/news/` with consolidated events

### Phase 3: Redirects (Week 3)
- [ ] 301 redirect: `/parents/choir` → `/students/extracurricular/choir`
- [ ] 301 redirect: `/parents/holidays-2025-26` → `/parents/calendar`
- [ ] 301 redirect: `/parents/holidays-2026-27` → `/parents/calendar`
- [ ] 301 redirect: `/parents/ztm-card` → `/parents/student-ids`
- [ ] 301 redirect: `/parents/e-id` → `/parents/student-ids`
- [ ] 301 redirect: `/parents/mobile-id` → `/parents/student-ids`
- [ ] 301 redirect: `/events` → `/news/events`

### Phase 4: Testing (Week 4)
- [ ] Test all navigation paths in 3 languages
- [ ] Verify mobile accordion functionality
- [ ] Test quick action buttons
- [ ] Validate all redirects work
- [ ] Check footer links

---

*Document Version: 1.0*  
*Created: 2026-03-13*
