# 📐 WBS Website Page Wireframes & Design Templates

**Document Version:** 1.0  
**Created:** 2026-03-13  
**Status:** Ready for Implementation

---

## Table of Contents

1. [Homepage](#homepage) ✅ Complete
2. [About Page](#about-page) ✅ Complete
3. [Students Zone](#students-zone) ✅ Complete
4. [Parents Zone](#parents-zone) ✅ Complete
5. [News Pages](#news-pages) ✅ Complete
6. [Events Calendar](#events-calendar) ✅ Complete
7. [Staff Directory](#staff-directory) ✅ Complete
8. [Contact Page](#contact-page) ✅ Complete
9. [Sub-pages Templates](#sub-pages-templates)

---

## Design System Overview

### Color Palette (Primary Usage)

```
PRIMARY ACCENT: Red (secondary-600 / #dc2626)
- Used for: CTAs, highlights, important buttons, hover states

PRIMARY BACKGROUND: Blue (primary-600 / #2563eb)
- Used for: Hero backgrounds, section headers, footers

ACCENT: Gold/Yellow (accent-500 / #eab308)
- Used for: Secondary CTAs, badges, special highlights

NEUTRALS: Gray scale (neutral-50 to neutral-900)
- Used for: Text, backgrounds, borders
```

### Typography Scale

```
H1: text-5xl md:text-6xl lg:text-7xl (48px / 60px / 72px)
H2: text-4xl md:text-5xl (40px / 48px)
H3: text-3xl md:text-4xl (30px / 36px)
H4: text-2xl md:text-3xl (24px / 30px)
Body: text-base (16px)
Small: text-sm (14px)
```

### Spacing System

```
Section padding: py-24 lg:py-32 (96px / 128px)
Container: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
Card padding: p-6 p-8 (24px / 32px)
Gap between elements: gap-4 gap-6 gap-8 (16px / 24px / 32px)
```

---

## Homepage

**Status:** ✅ Complete  
**File:** `src/app/[locale]/page.tsx`

### Structure:
```
┌─────────────────────────────────────────┐
│            HEADER (sticky)              │
├─────────────────────────────────────────┤
│                                         │
│  HERO SECTION                           │
│  - Bold typography                      │
│  - Photo collage                        │
│  - Stats display                        │
│  - Primary CTAs                         │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│  QUICK LINKS BAR                        │
│  - Calendar, Portal, News, Contact      │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│  ABOUT SECTION                          │
│  - Editorial layout                     │
│  - Image + Text                         │
│  - Accent element                       │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│  VALUES SECTION                         │
│  - 6 card grid                          │
│  - Icons + descriptions                 │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│  CTA SECTION                            │
│  - Red background                       │
│  - "Schedule a Visit"                   │
│  - "Download Prospectus"                │
│                                         │
├─────────────────────────────────────────┤
│            FOOTER                       │
└─────────────────────────────────────────┘
```

### Key Design Elements:
- **Hero:** Bold sans-serif typography, red accent color, photo collage with rotation
- **About:** Split layout with decorative red square, floating stats card
- **Values:** Clean white cards with hover lift effect
- **CTA:** Full-width red background with decorative circles

### Animations:
- Fade-in-up for text elements
- Scale-in for images
- Stagger animations for cards
- Hover lift on interactive elements

---

## About Page

**Status:** ✅ Complete  
**File:** `src/app/[locale]/about/page.tsx`

### Structure:
```
┌─────────────────────────────────────────┐
│         PAGE HEADER (gradient)          │
│  - Breadcrumbs                          │
│  - Title + Description                  │
├─────────────────────────────────────────┤
│                                         │
│  MISSION SECTION                        │
│  - 2 column grid                        │
│  - Text + Image placeholder             │
│  - Accreditation badge                  │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│  STATS SECTION                          │
│  - Blue background                      │
│  - 4 stat cards                         │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│  VALUES SECTION                         │
│  - 4 column grid                        │
│  - Icon cards                           │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│  PATRON SECTION                         │
│  - Willy Brandt                         │
│  - Portrait + biography                 │
│  - Neutral background                   │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│  CAMPUSES SECTION                       │
│  - 2 column grid                        │
│  - Campus cards with map links          │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│  CTA SECTION                            │
│  - Red background                       │
│  - "Join Community"                     │
│                                         │
└─────────────────────────────────────────┘
```

### Design Notes:
- Consistent PageHeader gradient (primary-600 to primary-800)
- Editorial layouts for text-heavy sections
- Map integration for campuses
- Historical timeline could be added

---

## Students Zone

**Status:** ✅ Complete  
**File:** `src/app/[locale]/students/page.tsx`

### Structure:
```
┌─────────────────────────────────────────┐
│          HERO (red gradient)            │
│  - "Student Zone"                       │
│  - Description                          │
│  - Primary CTAs                         │
├─────────────────────────────────────────┤
│                                         │
│  PROGRAMS SECTION                       │
│  - 4 column grid                        │
│  - Academy cards (Football, Music,      │
│    Library, Student Council)            │
│  - Colored icons                        │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│  PROJECTS SECTION                       │
│  - 3 column stat cards                  │
│  - Featured project showcase            │
│  - Editorial layout                     │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│  SCHOOL LIFE SECTION                    │
│  - 3 column grid                        │
│  - Student Council, Events,             │
│    Achievements cards                   │
│  - Gradient backgrounds                 │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│  CTA SECTION                            │
│  - Red background                       │
│  - "Have a project idea?"               │
│                                         │
└─────────────────────────────────────────┘
```

### Color Coding:
- Football Academy: Green (`bg-green-500`)
- Music Academy: Purple (`bg-purple-500`)
- Library: Blue (`bg-blue-500`)
- Student Council: Orange (`bg-orange-500`)

---

## Parents Zone

**Status:** ✅ Complete  
**File:** `src/app/[locale]/parents/page.tsx`

### Structure:
```
┌─────────────────────────────────────────┐
│         HERO (blue gradient)            │
│  - "Parent Zone"                        │
│  - Description                          │
│  - Admissions + Forms CTAs              │
├─────────────────────────────────────────┤
│                                         │
│  QUICK ACCESS SECTION                   │
│  - 4 column grid                        │
│  - Forms, Admissions, Regulations,      │
│    Parent Portal                        │
│  - Colored icon boxes                   │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│  PRACTICAL INFO SECTION                 │
│  - 4 column grid                        │
│  - Canteen, Aftercare, Bell Schedule,   │
│    Holiday Calendar                     │
│  - Pastel backgrounds                   │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│  IMPORTANT NOTICES                      │
│  - Editorial layout                     │
│  - School year info                     │
│  - Amber/Orange theme                   │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│  PARENT COMMUNITY                       │
│  - 3 column grid                        │
│  - Parent Council, Events,              │
│    Volunteering                         │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│  CTA SECTION                            │
│  - Blue background                      │
│  - "Have questions?"                    │
│                                         │
└─────────────────────────────────────────┘
```

---

## News Pages

### News Listing

**Status:** ✅ Complete  
**File:** `src/app/[locale]/news/page.tsx`

### Structure:
```
┌─────────────────────────────────────────┐
│         HERO (blue gradient)            │
│  - "News"                               │
│  - Breadcrumbs                          │
├─────────────────────────────────────────┤
│                                         │
│  CATEGORY BAR (sticky)                  │
│  - All, Events, Announcements,          │
│    Achievements                         │
│  - Scrollable on mobile                 │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│  NEWS GRID                              │
│  - 3 column grid                        │
│  - NewsCard components                  │
│  - Image + title + excerpt + date       │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│  LOAD MORE                              │
│  - Centered button                      │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│  ARCHIVE SECTION                        │
│  - Year links (2025, 2024, 2023...)     │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│  NEWSLETTER CTA                         │
│  - Yellow background                    │
│  - Email signup form                    │
│                                         │
└─────────────────────────────────────────┘
```

### News Detail Page

**File:** `src/app/[locale]/news/[id]/page.tsx`

### Structure:
```
┌─────────────────────────────────────────┐
│         HERO IMAGE                      │
│  - Full-width featured image            │
│  - Overlay with category badge          │
├─────────────────────────────────────────┤
│                                         │
│  ARTICLE CONTENT                        │
│  - Max-w-3xl centered                   │
│  - Title                                │
│  - Meta (date, author, category)        │
│  - Rich text content                    │
│  - Share buttons                        │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│  RELATED NEWS                           │
│  - 3 card grid                          │
│                                         │
└─────────────────────────────────────────┘
```

---

## Events Calendar

**Status:** ✅ Complete  
**File:** `src/app/[locale]/events/page.tsx`

### Structure:
```
┌─────────────────────────────────────────┐
│       HERO (yellow gradient)            │
│  - "Events Calendar"                    │
│  - Breadcrumbs                          │
├─────────────────────────────────────────┤
│                                         │
│  VIEW CONTROLS (sticky)                 │
│  - Month/Week/Day/List toggle           │
│  - Month navigation                     │
│  - "Today" button                       │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│  CALENDAR GRID                          │
│  - 7 column (Mon-Sun)                   │
│  - Day numbers                          │
│  - Event indicators                     │
│  - Today highlight                      │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│  UPCOMING EVENTS LIST                   │
│  - Chronological list                   │
│  - Date box + details                   │
│  - Category badges                      │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│  ADD TO CALENDAR CTA                    │
│  - Blue background                      │
│  - Google, Apple, Outlook buttons       │
│                                         │
└─────────────────────────────────────────┘
```

---

## Staff Directory

**Status:** ✅ Complete  
**File:** `src/app/[locale]/about/staff/page.tsx`

### Structure:
```
┌─────────────────────────────────────────┐
│         HERO (blue gradient)            │
│  - "Staff Directory"                    │
│  - Breadcrumbs                          │
├─────────────────────────────────────────┤
│                                         │
│  SEARCH & FILTER (sticky)               │
│  - Search input                         │
│  - Department dropdown                  │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│  STATS BAR                              │
│  - Teacher count                        │
│  - Department count                     │
│  - Qualification %                      │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│  STAFF GRID                             │
│  - 4 column grid (responsive)           │
│  - Avatar with initials                 │
│  - Name + role                          │
│  - Subject badges                       │
│  - Email button                         │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│  LOAD MORE                              │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│  JOIN TEAM CTA                          │
│  - Yellow background                    │
│  - "Join Our Team"                      │
│                                         │
└─────────────────────────────────────────┘
```

---

## Contact Page

**Status:** ✅ Complete  
**File:** `src/app/[locale]/contact/page.tsx`

### Structure:
```
┌─────────────────────────────────────────┐
│         HERO (blue gradient)            │
│  - "Contact"                            │
│  - Breadcrumbs                          │
├─────────────────────────────────────────┤
│                                         │
│  CONTACT CARDS                          │
│  - 4 column grid                        │
│  - Address, Phone, Email, Hours         │
│  - Colored icon boxes                   │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│  MAIN CONTENT                           │
│  - 2 column layout                      │
│                                         │
│  Left: Contact Form                     │
│  - Name, Email, Phone                   │
│  - Subject, Message                     │
│  - GDPR consent                         │
│  - Submit button                        │
│                                         │
│  Right: Sidebar                         │
│  - Quick contact                        │
│  - FAQ link card                        │
│  - Social media                         │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│  MAP SECTION                            │
│  - Google Maps embed                    │
│  - School location                      │
│                                         │
└─────────────────────────────────────────┘
```

---

## Sub-Pages Templates

### Football Academy (`/students/football-academy`)

```
┌─────────────────────────────────────────┐
│         HERO (green theme)              │
│  - Action photo                         │
│  - "Football Academy"                   │
├─────────────────────────────────────────┤
│                                         │
│  ABOUT SECTION                          │
│  - Program description                  │
│  - Coach info                           │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│  TRAINING SCHEDULE                      │
│  - Table component                      │
│  - Days, times, age groups              │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│  ACHIEVEMENTS                           │
│  - Trophy list                          │
│  - Tournament results                   │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│  REGISTRATION CTA                       │
│  - Green background                     │
│  - "Join the team"                      │
│                                         │
└─────────────────────────────────────────┘
```

### Library (`/students/library`)

```
┌─────────────────────────────────────────┐
│         HERO (blue theme)               │
│  - Library interior photo               │
├─────────────────────────────────────────┤
│                                         │
│  HOURS & LOCATION                       │
│  - Opening hours                        │
│  - Floor plan                           │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│  CATALOG SEARCH                         │
│  - Search bar                           │
│  - Categories                           │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│  NEW ARRIVALS                           │
│  - Book cards                           │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│  SERVICES                               │
│  - Borrowing rules                      │
│  - Study rooms                          │
│  - Computer access                      │
│                                         │
└─────────────────────────────────────────┘
```

### Canteen (`/parents/canteen`)

```
┌─────────────────────────────────────────┐
│         HERO (orange theme)             │
├─────────────────────────────────────────┤
│                                         │
│  WEEKLY MENU                            │
│  - Accordion by day                     │
│  - Monday - Friday                      │
│  - Dietary info                         │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│  INFORMATION                            │
│  - Prices                               │
│  - Payment methods                      │
│  - Allergen info                        │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│  NUTRITION GUIDELINES                   │
│  - Healthy eating info                  │
│                                         │
└─────────────────────────────────────────┘
```

### Forms Library (`/parents/forms`)

```
┌─────────────────────────────────────────┐
│         HERO (blue theme)               │
├─────────────────────────────────────────┤
│                                         │
│  SEARCH & FILTER                        │
│  - Search by name                       │
│  - Filter by category                   │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│  FORMS LIST                             │
│  - Table layout                         │
│  - Form name                            │
│  - Category                             │
│  - Download button (PDF/DOC)            │
│  - Last updated date                    │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│  CATEGORIES                             │
│  - Admissions                           │
│  - Medical                              │
│  - Permissions                          │
│  - General                              │
│                                         │
└─────────────────────────────────────────┘
```

---

## Component Specifications

### PageHeader Component

```tsx
interface PageHeaderProps {
  lang: string;
  title: string;
  description?: string;
  breadcrumbs?: { label: string; href: string }[];
  gradient?: 'blue' | 'red' | 'yellow'; // Default: blue
}
```

**Design:**
- Background: Gradient (primary-600 to primary-800)
- Padding: pt-32 pb-16
- Text: White
- Breadcrumbs: White/80 opacity
- Font: Heading font (Plus Jakarta Sans)

---

### NewsCard Component

```tsx
interface NewsCardProps {
  news: {
    id: string;
    title: { pl: string; de: string; en: string };
    excerpt: { pl: string; de: string; en: string };
    category: string;
    date: string;
    image?: string;
  };
  lang: string;
  index?: number;
}
```

**Design:**
- Aspect ratio: 4:3 image
- Card: White background, rounded-xl
- Hover: Lift effect (-translate-y-1)
- Category badge: Top-left corner
- Date: Bottom of card

---

### EventCard Component

```tsx
interface EventCardProps {
  event: {
    id: string;
    title: { pl: string; de: string; en: string };
    date: string;
    time?: string;
    location?: string;
    category: string;
  };
  lang: string;
  variant?: 'list' | 'compact';
}
```

**Design:**
- Date box: Left side (icon + date)
- Content: Title, description, meta info
- Action: "Details" button
- Hover: Shadow increase

---

## Animation Guidelines

### Page Load Animations

```typescript
// Container stagger
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// Item slide up
const slideUpVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1], // easeOutExpo
    },
  },
};
```

### Scroll Animations

```typescript
// Use Framer Motion whileInView
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.6 }}
>
```

### Hover Animations

```css
/* Card hover */
.card {
  @apply transition-all duration-300;
}

.card:hover {
  @apply -translate-y-1 shadow-xl;
}

/* Button hover */
.btn {
  @apply transition-all duration-200;
}

.btn:hover {
  @apply scale-105 shadow-lg;
}
```

---

## Responsive Breakpoints

```
Mobile S:   320px  (sm:max-w-[320px])
Mobile L:   375px  (sm:max-w-[375px])
Tablet:     768px  (md:)
Laptop:     1024px (lg:)
Desktop:    1440px (xl:)
Large:      1920px (3xl:)
```

### Layout Changes:

| Section | Mobile (<768px) | Tablet (768-1023px) | Desktop (≥1024px) |
|---------|----------------|---------------------|-------------------|
| Hero | Single column | Single column | Two column possible |
| Cards | 1 column | 2 columns | 3-4 columns |
| Forms | Full width | Full width | Split with sidebar |
| Navigation | Hamburger | Hamburger | Full menu |
| Footer | Stacked | 2 column | 4 column |

---

## Accessibility Checklist

### All Pages Must Have:
- [ ] Skip to main content link
- [ ] Proper heading hierarchy (H1 → H2 → H3)
- [ ] Alt text for all images
- [ ] Focus indicators on interactive elements
- [ ] Keyboard navigation support
- [ ] ARIA labels where needed
- [ ] Color contrast 4.5:1 minimum
- [ ] Form labels and error messages
- [ ] Language attribute on HTML

### Interactive Elements:
- [ ] Minimum touch target: 44x44px
- [ ] Visible focus states
- [ ] Keyboard accessible
- [ ] Screen reader announcements

---

*Document Version: 1.0*  
*Last Updated: 2026-03-13*  
*Next Review: After implementation of remaining pages*
