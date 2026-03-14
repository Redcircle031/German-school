# 🎯 WBS Mega Menu Design Proposal

## Executive Summary

This document outlines a comprehensive mega menu redesign for the Willy Brandt School (WBS) website, inspired by the excellent navigation design at [Strawberry Fields High School](https://icdlabs.in/sf/). The new mega menu will provide users with a complete overview of the school's offerings in a visually organized, accessible, and intuitive interface.

---

## 🎨 Design Philosophy

### Core Principles
1. **Discoverability** - Every section of the school should be reachable within 2 clicks
2. **Visual Hierarchy** - Clear distinction between main categories and sub-items
3. **Scannability** - Users can quickly scan and find what they need
4. **Accessibility** - WCAG 2.1 AA compliant with full keyboard navigation
5. **Delight** - Smooth animations and polished interactions

### Inspiration Analysis
The reference site (Strawberry Fields High School) demonstrates:
- **Full-screen overlay** that commands attention
- **Multi-column layout** organizing 25+ links logically
- **Integrated search** within the menu
- **Featured content** (news) directly in navigation
- **Typography-driven** hierarchy using weight and scale
- **Smooth animations** for opening/closing

---

## 📐 Layout Structure

### Desktop Mega Menu Layout (≥1024px)

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│  [Logo]                                    [Search] [Language] [X Close]        │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│  ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐ ┌────────────────┐ │
│  │ ABOUT SCHOOL    │ │ FOR PARENTS     │ │ FOR STUDENTS    │ │ NEWS & EVENTS  │ │
│  │ ─────────────   │ │ ─────────────   │ │ ─────────────   │ │ ─────────────  │ │
│  │                 │ │                 │ │                 │ │                │ │
│  │ • About WBS     │ │ • Recruitment   │ │ • Projects      │ │ • Current      │ │
│  │ • Our Team      │ │ • Forms         │ │ • Academies     │ │   Events       │ │
│  │ • Mission       │ │ • Regulations   │ │ • Library       │ │ • Upcoming     │ │
│  │ • Patron        │ │ • Canteen       │ │ • Council       │ │ • News         │ │
│  │ • Partners      │ │ • Aftercare     │ │ • Achievements  │ │ • Archive      │ │
│  │ • Certificates  │ │ • Holidays      │ │                 │ │                │ │
│  │                 │ │ • Bell Schedule │ │                 │ │ [News Card 1]  │ │
│  │                 │ │                 │ │                 │ │ [News Card 2]  │ │
│  └─────────────────┘ └─────────────────┘ └─────────────────┘ └────────────────┘ │
│                                                                                 │
├─────────────────────────────────────────────────────────────────────────────────┤
│  🔍 Search...                    [Recruitment] [Parent Portal] [Student Portal] │
└─────────────────────────────────────────────────────────────────────────────────┘
```

### Mobile Mega Menu Layout (<768px)

```
┌─────────────────────┐
│ [Logo]         [X]  │
├─────────────────────┤
│ 🔍 Search...        │
├─────────────────────┤
│ ▼ About School      │
│   • About WBS       │
│   • Our Team        │
│   • Mission...      │
├─────────────────────┤
│ ▶ For Parents       │
├─────────────────────┤
│ ▶ For Students      │
├─────────────────────┤
│ ▶ News & Events     │
├─────────────────────┤
│ [Recruitment]       │
│ [Parent Portal]     │
│ [Student Portal]    │
└─────────────────────┘
```

---

## 🗂️ Content Organization

### Column 1: About School (O szkole / Über die Schule)
```
PRIMARY ITEMS:
├── About WBS School         /about
├── Our Team                 /about/staff
├── Mission & Values         /about/mission
├── School Patron            /about/patron
├── Partners & Sponsors      /about/partners
└── Certificates             /about/certificates
```

### Column 2: For Parents (Dla rodziców / Für Eltern)
```
PRIMARY ITEMS:
├── Recruitment & Admissions /parents/recruitment
├── Downloadable Forms       /parents/forms
├── Regulations              /parents/regulations
├── School Canteen           /parents/canteen
├── Aftercare                /parents/aftercare
├── Holiday Schedules        /parents/holidays-2025-26
└── Bell Schedule            /parents/bell-schedule

QUICK LINKS:
├── Parent Portal (external)
├── ZTM Student Card
└── E-ID / mLegitymacja
```

### Column 3: For Students (Dla uczniów / Für Schüler)
```
PRIMARY ITEMS:
├── Student Projects         /students/projects
├── Football Academy         /students/football-academy
├── Music Academy            /students/music-academy
├── Library                  /students/library
├── Student Council          /students/student-council
└── Achievements             /students/achievements

QUICK LINKS:
├── Student Portal (external)
└── Trusted Teacher
```

### Column 4: News & Events (Aktualności / Aktuelles)
```
PRIMARY ITEMS:
├── Current Events           /news/current
├── Upcoming Events          /news/upcoming
├── Announcements            /news/announcements
├── News Archive             /news/archive
└── Flash News NTS           /news/flash

FEATURED NEWS CARDS:
┌─────────────────┐
│ [Image]         │
│ News Title      │
│ 12 Mar 2026     │
└─────────────────┘
```

---

## 🎨 Visual Design Specifications

### Color Palette

| Element | Light Mode | Dark Mode | Notes |
|---------|-----------|-----------|-------|
| Overlay Background | `rgba(255,255,255,0.98)` | `rgba(15,23,42,0.98)` | Full-screen backdrop |
| Backdrop | `rgba(0,0,0,0.5)` | `rgba(0,0,0,0.7)` | Behind menu |
| Section Headers | `#1e40af` (primary-800) | `#3b82f6` (primary-400) | Uppercase, bold |
| Links Default | `#374151` (neutral-700) | `#d1d5db` (neutral-300) | - |
| Links Hover | `#2563eb` (primary-600) | `#60a5fa` (primary-300) | With underline |
| Quick Actions Bar | `#f8fafc` (neutral-50) | `#1e293b` (neutral-800) | Bottom section |
| Border/Divider | `#e5e7eb` (neutral-200) | `#374151` (neutral-700) | Subtle separation |
| Featured Card BG | `#f1f5f9` (neutral-100) | `#334155` (neutral-700) | News preview cards |

### Typography

```
Section Headers:
- Font: Plus Jakarta Sans (heading)
- Size: 13px
- Weight: 700 (bold)
- Transform: uppercase
- Letter-spacing: 0.1em
- Color: primary-800

Links:
- Font: Inter (sans)
- Size: 15px
- Weight: 400 (normal)
- Line-height: 1.6
- Color: neutral-700 → primary-600 on hover

Featured News Title:
- Font: Plus Jakarta Sans
- Size: 14px
- Weight: 600 (semibold)
- Line-height: 1.4

Featured News Date:
- Font: Inter
- Size: 12px
- Weight: 400
- Color: neutral-500
```

### Spacing & Layout

```
Container:
- Max-width: 1280px (container-7xl)
- Padding: 32px horizontal, 48px vertical
- Grid gap: 32px between columns

Columns:
- Desktop: 4 equal columns (1fr each)
- Gap: 32px

Section Header:
- Margin-bottom: 16px
- Padding-bottom: 8px
- Border-bottom: 2px solid primary-200

Links List:
- Gap: 8px between items

Quick Actions Bar:
- Height: 72px
- Padding: 16px 32px
- Gap between buttons: 16px
```

---

## ✨ Animations & Interactions

### Open Animation Sequence

```
1. Backdrop (0ms - 300ms)
   - Opacity: 0 → 1
   - Easing: ease-out

2. Menu Container (50ms - 350ms)
   - Opacity: 0 → 1
   - Scale: 0.98 → 1.0
   - Easing: cubic-bezier(0.16, 1, 0.3, 1)

3. Close Button (100ms - 300ms)
   - Opacity: 0 → 1
   - Rotate: -90deg → 0deg

4. Logo (150ms - 350ms)
   - Opacity: 0 → 1
   - TranslateY: -10px → 0

5. Search Bar (200ms - 400ms)
   - Opacity: 0 → 1
   - TranslateY: -10px → 0

6. Columns (250ms - 500ms, staggered 50ms each)
   - Opacity: 0 → 1
   - TranslateY: 20px → 0
   
   Column 1: 250ms delay
   Column 2: 300ms delay
   Column 3: 350ms delay
   Column 4: 400ms delay

7. Quick Actions Bar (400ms - 550ms)
   - Opacity: 0 → 1
   - TranslateY: 20px → 0
```

### Close Animation

```
All elements animate simultaneously (0ms - 200ms):
- Opacity: 1 → 0
- Scale: 1.0 → 0.98
- Easing: ease-in
```

### Hover States

```
Links:
- Transition: all 150ms ease
- Color shift: neutral-700 → primary-600
- Transform: translateX(0) → translateX(4px)

Section Headers:
- Border-bottom-color: primary-200 → primary-500
- Transition: border-color 200ms ease

News Cards:
- Transform: translateY(0) → translateY(-4px)
- Box-shadow: none → 0 4px 12px rgba(0,0,0,0.1)
- Transition: all 200ms ease

Quick Action Buttons:
- Background: transparent → primary-50
- Border-color: neutral-300 → primary-300
- Transform: translateY(0) → translateY(-2px)
- Transition: all 150ms ease
```

### Focus States (Accessibility)

```
All interactive elements:
- Outline: 2px solid primary-500
- Outline-offset: 2px
- Border-radius: 4px
```

---

## ♿ Accessibility Features

### Keyboard Navigation

```
Open Menu:
- Enter/Space on Menu button
- Menu button has aria-expanded="true/false"

Within Menu (Tab Order):
1. Close button
2. Search input
3. Column 1 links (top to bottom)
4. Column 2 links (top to bottom)
5. Column 3 links (top to bottom)
6. Column 4 links (top to bottom)
7. Quick action buttons (left to right)

Close Menu:
- Escape key (any time)
- Click on backdrop
- Click on Close button
- Tab cycles back to first element
```

### ARIA Attributes

```tsx
// Menu Button
<button 
  aria-expanded={isOpen}
  aria-controls="mega-menu"
  aria-label="Open navigation menu"
>

// Menu Container
<div
  id="mega-menu"
  role="dialog"
  aria-modal="true"
  aria-labelledby="menu-title"
>

// Close Button
<button
  aria-label="Close navigation menu"
>

// Search Input
<input
  type="search"
  aria-label="Search website"
  placeholder="Search..."
>
```

### Screen Reader Support

- Menu sections announced with `aria-labelledby`
- Link count announced for each section
- "Navigation menu opened/closed" announced
- Focus management traps focus within menu when open
- Returns focus to menu button when closed

### Reduced Motion Support

```css
@media (prefers-reduced-motion: reduce) {
  .mega-menu {
    animation: none;
    transition: opacity 0.01ms;
  }
  
  .mega-menu-content {
    transform: none;
  }
}
```

---

## 📱 Responsive Behavior

### Breakpoints

| Breakpoint | Layout | Behavior |
|------------|--------|----------|
| ≥1280px (xl) | 4-column grid | Full mega menu |
| 1024-1279px (lg) | 4-column grid | Tighter spacing |
| 768-1023px (md) | 2-column grid | Stack columns 1+2, 3+4 |
| <768px (sm) | Accordion list | Collapsible sections |

### Mobile Accordion Behavior

```
Default State:
- All sections collapsed
- Only section headers visible
- Chevron icon (right-pointing)

Expanded State:
- Section content visible
- Chevron rotates 90deg (down-pointing)
- Smooth height animation (300ms)

Interaction:
- Tap header to expand/collapse
- Only one section open at a time (optional)
- Full-width touch targets (min 44px height)
```

### Touch Considerations

- Minimum touch target: 44x44px
- Swipe down to close gesture
- No hover-dependent interactions
- Larger tap targets for links (increased padding)

---

## 🔧 Technical Implementation

### Component Structure

```
src/components/layout/
├── Header.tsx                    (updated)
└── MegaMenu/
    ├── MegaMenu.tsx              (main container)
    ├── MegaMenuSection.tsx       (column section)
    ├── MegaMenuTrigger.tsx       (menu button)
    ├── MegaMenuSearch.tsx        (search input)
    ├── FeaturedNews.tsx          (news cards)
    ├── QuickActions.tsx          (bottom bar)
    ├── MobileAccordion.tsx       (mobile sections)
    └── index.ts                  (exports)
```

### Data Structure

```typescript
// types/navigation.ts
interface MegaMenuSection {
  id: string;
  title: {
    pl: string;
    de: string;
    en: string;
  };
  links: MegaMenuLink[];
}

interface MegaMenuLink {
  label: {
    pl: string;
    de: string;
    en: string;
  };
  href: string;
  external?: boolean;
  icon?: string;
}

interface FeaturedNewsItem {
  id: string;
  title: string;
  date: string;
  image: string;
  href: string;
}
```

### Animation Implementation (Framer Motion)

```tsx
// Container animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2 },
  },
};

// Item animation
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};
```

### Performance Optimizations

1. **Lazy Rendering**: Menu not rendered in DOM until opened
2. **CSS Transforms**: Only animate transform/opacity properties
3. **will-change**: Applied to animated elements
4. **Debounced Resize**: Recalculate layout only after resize ends
5. **Memoized Components**: Use React.memo for static sections

---

## 🎯 Success Metrics

### User Experience
- [ ] Average time to find content reduced by 30%
- [ ] Bounce rate on navigation pages reduced
- [ ] Mobile menu usage increased (indicates better discoverability)

### Performance
- [ ] First paint of menu < 100ms
- [ ] Animation runs at 60fps
- [ ] No layout shift when menu opens

### Accessibility
- [ ] WCAG 2.1 AA compliant
- [ ] All interactive elements keyboard accessible
- [ ] Screen reader tested and verified

---

## 📋 Implementation Checklist

### Phase 1: Foundation
- [ ] Create component file structure
- [ ] Set up TypeScript types
- [ ] Update navigation.json for mega menu structure
- [ ] Install framer-motion (if not present)

### Phase 2: Desktop Mega Menu
- [ ] Build MegaMenu.tsx container
- [ ] Implement MegaMenuSection component
- [ ] Add search functionality
- [ ] Create FeaturedNews cards
- [ ] Build QuickActions bar
- [ ] Implement open/close animations

### Phase 3: Mobile Adaptation
- [ ] Build MobileAccordion component
- [ ] Implement touch gestures
- [ ] Optimize touch targets
- [ ] Test on various device sizes

### Phase 4: Header Integration
- [ ] Update Header.tsx
- [ ] Replace dropdowns with menu trigger
- [ ] Maintain language switcher
- [ ] Ensure mobile hamburger works

### Phase 5: Polish & Testing
- [ ] Add reduced motion support
- [ ] Implement focus trap
- [ ] Add screen reader announcements
- [ ] Test keyboard navigation
- [ ] Performance optimization
- [ ] Cross-browser testing

---

## 🚀 Future Enhancements

### Phase 2 Features
1. **Smart Search** - Autocomplete with recent/popular searches
2. **Personalized Quick Links** - Based on user role (parent/student/staff)
3. **Recently Visited** - Show recently accessed pages
4. **Popular Pages** - Analytics-driven popular links
5. **Bookmarking** - Users can save favorite links

### Phase 3 Features
1. **AI Search** - Natural language search within menu
2. **Visual Previews** - Hover to see page previews
3. **Customizable Layout** - Users can rearrange sections
4. **Dark Mode** - Full dark mode support for menu

---

*Document Version: 1.0*
*Created: 2026-03-13*
*Status: Ready for Implementation*
