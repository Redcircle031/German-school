# 🎨 WBS Design System Documentation

**Version:** 2.0  
**Last Updated:** 2026-03-13  
**Status:** Enhanced with Agent Recommendations

---

## Table of Contents

1. [Design Tokens](#design-tokens)
2. [Color System](#color-system)
3. [Typography](#typography)
4. [Spacing & Layout](#spacing--layout)
5. [Components](#components)
6. [Animations & Motion](#animations--motion)
7. [Accessibility Guidelines](#accessibility-guidelines)
8. [Agent Implementation Guide](#agent-implementation-guide)

---

## Design Tokens

### File Location
`src/app/globals.css` - CSS Variables  
`tailwind.config.ts` - Tailwind Theme

### Token Structure

```typescript
{
  colors: {
    primary: { 50-950 },    // Blue palette
    secondary: { 50-950 },  // Red palette
    accent: { 50-950 },     // Gold/Yellow palette
    neutral: { 50-950 }     // Gray palette
  },
  fonts: {
    sans: 'Inter',
    heading: 'Plus Jakarta Sans'
  },
  spacing: {
    header: '4.5rem',
    container: 'max-w-7xl'
  },
  shadows: {
    sm, md, lg, xl
  },
  radii: {
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    '4xl': '2rem'
  }
}
```

---

## Color System

### Primary Palette (Blue)

**Usage:** Headers, backgrounds, secondary buttons, links

| Token | Hex | RGB | Usage |
|-------|-----|-----|-------|
| primary-50 | #eff6ff | rgb(239, 246, 255) | Subtle backgrounds |
| primary-100 | #dbeafe | rgb(219, 234, 254) | Hover states |
| primary-200 | #bfdbfe | rgb(191, 219, 254) | Borders |
| primary-300 | #93c5fd | rgb(147, 197, 253) | - |
| primary-400 | #60a5fa | rgb(96, 165, 250) | - |
| primary-500 | #3b82f6 | rgb(59, 130, 246) | - |
| primary-600 | #2563eb | rgb(37, 99, 235) | **Hero backgrounds** |
| primary-700 | #1d4ed8 | rgb(29, 78, 216) | **Gradient ends** |
| primary-800 | #1e40af | rgb(30, 64, 175) | **Text on light** |
| primary-900 | #1e3a8a | rgb(30, 58, 138) | Dark text |
| primary-950 | #172554 | rgb(23, 37, 84) | Darkest |

### Secondary Palette (Red) ⭐ PRIMARY ACCENT

**Usage:** **Primary CTAs, highlights, hover states, important buttons**

| Token | Hex | RGB | Usage |
|-------|-----|-----|-------|
| secondary-50 | #fef2f2 | rgb(254, 242, 242) | Background tints |
| secondary-100 | #fee2e2 | rgb(254, 226, 226) | Badge backgrounds |
| secondary-200 | #fecaca | rgb(254, 202, 202) | Borders |
| secondary-300 | #fca5a5 | rgb(252, 165, 165) | - |
| secondary-400 | #f87171 | rgb(248, 117, 117) | - |
| secondary-500 | #ef4444 | rgb(239, 68, 68) | **Hover states** |
| secondary-600 | #dc2626 | rgb(220, 38, 38) | **PRIMARY BUTTONS** |
| secondary-700 | #b91c1c | rgb(185, 28, 28) | **Active states** |
| secondary-800 | #991b1b | rgb(153, 27, 27) | Text |
| secondary-900 | #7f1d1d | rgb(127, 29, 29) | Dark text |
| secondary-950 | #450a0a | rgb(69, 10, 10) | Darkest |

### Accent Palette (Gold/Yellow)

**Usage:** Secondary CTAs, badges, special highlights, warnings

| Token | Hex | RGB | Usage |
|-------|-----|-----|-------|
| accent-50 | #fefce8 | rgb(254, 252, 232) | Background tints |
| accent-100 | #fef9c3 | rgb(254, 249, 195) | Badge backgrounds |
| accent-200 | #fef08a | rgb(254, 240, 138) | - |
| accent-300 | #fde047 | rgb(253, 224, 71) | - |
| accent-400 | #facc15 | rgb(250, 204, 21) | **Hero gradients** |
| accent-500 | #eab308 | rgb(234, 179, 8) | **Secondary CTAs** |
| accent-600 | #ca8a04 | rgb(202, 138, 4) | Hover states |
| accent-700 | #a16207 | rgb(161, 98, 7) | Active states |
| accent-800 | #854d0e | rgb(133, 77, 14) | Text |
| accent-900 | #713f12 | rgb(113, 63, 18) | Dark text |
| accent-950 | #422006 | rgb(66, 32, 6) | Darkest |

### Neutral Palette (Grays)

**Usage:** Text, backgrounds, borders, disabled states

| Token | Hex | RGB | Usage |
|-------|-----|-----|-------|
| neutral-50 | #fafafa | rgb(250, 250, 250) | Section backgrounds |
| neutral-100 | #f4f4f5 | rgb(244, 244, 245) | Card backgrounds |
| neutral-200 | #e4e4e7 | rgb(228, 228, 231) | Borders |
| neutral-300 | #d4d4d8 | rgb(212, 212, 216) | Disabled borders |
| neutral-400 | #a1a1aa | rgb(161, 161, 170) | Placeholder text |
| neutral-500 | #71717a | rgb(113, 113, 122) | Secondary text |
| neutral-600 | #52525b | rgb(82, 82, 91) | Body text |
| neutral-700 | #3f3f46 | rgb(63, 63, 70) | **Primary text** |
| neutral-800 | #27272a | rgb(39, 39, 42) | **Headings** |
| neutral-900 | #18181b | rgb(24, 24, 27) | **H1-H2** |
| neutral-950 | #09090b | rgb(9, 9, 11) | Darkest |

### Color Usage Rules

#### ✅ DO:
- Use **red (secondary-600)** for primary call-to-action buttons
- Use **blue (primary-600)** for hero backgrounds and section headers
- Use **white** backgrounds for content cards
- Use **neutral-700/800** for body text
- Use **neutral-900** for headings
- Maintain 4.5:1 contrast ratio for all text

#### ❌ DON'T:
- Use blue for primary CTAs (use red instead)
- Use light gray text on white backgrounds (contrast issues)
- Mix too many colors in one section
- Use red and blue together at full saturation

---

## Typography

### Font Families

```css
--font-inter: 'Inter', system-ui, sans-serif;     /* Body text */
--font-heading: 'Plus Jakarta Sans', sans-serif;  /* Headings */
```

### Type Scale

| Element | Desktop | Mobile | Line Height | Letter Spacing |
|---------|---------|--------|-------------|----------------|
| H1 | 72px (text-7xl) | 48px (text-4xl) | 0.95 | -0.02em |
| H2 | 60px (text-6xl) | 40px (text-4xl) | 1.0 | -0.01em |
| H3 | 48px (text-5xl) | 36px (text-3xl) | 1.1 | 0 |
| H4 | 36px (text-4xl) | 30px (text-3xl) | 1.2 | 0 |
| H5 | 30px (text-3xl) | 24px (text-2xl) | 1.3 | 0 |
| H6 | 24px (text-2xl) | 20px (text-xl) | 1.4 | 0 |
| Body | 16px (text-base) | 16px (text-base) | 1.6 | 0 |
| Small | 14px (text-sm) | 14px (text-sm) | 1.5 | 0 |
| Tiny | 12px (text-xs) | 12px (text-xs) | 1.4 | 0.01em |

### CSS Implementation

```css
/* globals.css */
h1, h2, h3, h4, h5, h6 {
  @apply font-heading font-semibold text-neutral-900;
}

h1 { @apply text-4xl md:text-5xl lg:text-6xl; }
h2 { @apply text-3xl md:text-4xl lg:text-5xl; }
h3 { @apply text-2xl md:text-3xl lg:text-4xl; }
h4 { @apply text-xl md:text-2xl; }
h5 { @apply text-lg md:text-xl; }
h6 { @apply text-base md:text-lg; }

p { @apply leading-relaxed; }

a { 
  @apply text-primary-600 hover:text-primary-700 
         transition-colors duration-200;
}
```

### Typography Best Practices

- **Headings:** Use Plus Jakarta Sans for all H1-H6
- **Body:** Use Inter for all paragraph text
- **Links:** Always use primary-600 with hover to primary-700
- **Text alignment:** Left-aligned for body, center for hero/display text
- **Max line length:** 65-75 characters for readability

---

## Spacing & Layout

### Container System

```css
.container-custom {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}
```

### Section Spacing

```css
.section {
  @apply py-16 md:py-24;  /* 64px mobile, 96px desktop */
}
```

### Spacing Scale

| Token | Value | Usage |
|-------|-------|-------|
| 1 | 0.25rem (4px) | Micro spacing |
| 2 | 0.5rem (8px) | Tight spacing |
| 3 | 0.75rem (12px) | - |
| 4 | 1rem (16px) | Standard gap |
| 5 | 1.25rem (20px) | - |
| 6 | 1.5rem (24px) | Card padding |
| 8 | 2rem (32px) | Section padding |
| 10 | 2.5rem (40px) | - |
| 12 | 3rem (48px) | - |
| 16 | 4rem (64px) | Large gaps |
| 20 | 5rem (80px) | - |
| 24 | 6rem (96px) | Section vertical |

### Layout Patterns

#### Hero Layout
```tsx
<section className="relative min-h-screen overflow-hidden">
  <div className="container-custom">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* Content */}
      {/* Image */}
    </div>
  </div>
</section>
```

#### Card Grid
```tsx
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
  {items.map(item => (
    <Card key={item.id} {...item} />
  ))}
</div>
```

#### Split Section
```tsx
<section className="py-24 bg-white">
  <div className="container-custom">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* Left: Content */}
      {/* Right: Image/Visual */}
    </div>
  </div>
</section>
```

---

## Components

### Button System

#### Base Button
```tsx
<button className="btn">
  Button Text
</button>
```

#### Variants

**Primary (Red)**
```tsx
<button className="btn-primary">
  Main Call-to-Action
</button>
```
- Background: secondary-600
- Text: white
- Hover: secondary-700
- Use for: Main CTAs, important actions

**Secondary (Blue)**
```tsx
<button className="btn-secondary">
  Secondary Action
</button>
```
- Background: primary-600
- Text: white
- Hover: primary-700
- Use for: Secondary actions

**Accent (Gold)**
```tsx
<button className="btn-accent">
  Special Action
</button>
```
- Background: accent-500
- Text: neutral-900
- Hover: accent-600
- Use for: Special highlights

**Outline**
```tsx
<button className="btn-outline">
  Outlined Button
</button>
```
- Border: 2px solid primary-600
- Text: primary-600
- Hover: primary-50 background
- Use for: Tertiary actions

**Ghost**
```tsx
<button className="btn-ghost">
  Subtle Button
</button>
```
- Background: transparent
- Text: neutral-700
- Hover: neutral-100
- Use for: Cancel, back actions

#### Sizes

```tsx
<button className="btn-sm">Small</button>   // px-4 py-2 text-xs
<button className="btn">Default</button>    // px-6 py-3 text-sm
<button className="btn-lg">Large</button>   // px-8 py-4 text-base
```

---

### Card Components

#### Base Card
```tsx
<div className="card">
  {/* Content */}
</div>
```

**Styles:**
- Background: white
- Border: rounded-xl
- Shadow: shadow-md
- Hover: shadow-lg, -translate-y-1

#### Interactive Card
```tsx
<Link href="/page" className="card-interactive">
  {/* Content */}
</Link>
```

**Additional hover effects:**
- Cursor: pointer
- Transform: -translate-y-1
- Shadow: shadow-xl

---

### Form Components

#### Input Field
```tsx
<input type="text" className="input" />
```

**Styles:**
- Full width
- Padding: px-4 py-3
- Border: neutral-300
- Focus: ring-2 ring-primary-500
- Radius: rounded-lg

#### Label
```tsx
<label className="label" htmlFor="field">
  Label Text
</label>
```

**Styles:**
- Display: block
- Font: text-sm font-medium
- Color: neutral-700
- Margin-bottom: mb-2

---

## Animations & Motion

### Framer Motion Setup

```bash
npm install framer-motion
```

### Animation Variants

#### Container Stagger
```typescript
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
```

#### Slide Up
```typescript
const slideUpVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};
```

#### Fade In
```typescript
const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};
```

#### Scale Up
```typescript
const scaleUpVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};
```

### Usage Example

```tsx
import { motion } from 'framer-motion';

<motion.div
  variants={containerVariants}
  initial="hidden"
  animate="visible"
>
  <motion.h1 variants={slideUpVariants}>
    Title
  </motion.h1>
  <motion.p variants={slideUpVariants}>
    Description
  </motion.p>
</motion.div>
```

### Scroll Animations

```tsx
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.6 }}
>
  Content
</motion.div>
```

### Micro-interactions

#### Button Hover
```css
.btn {
  @apply transition-all duration-200;
}

.btn:hover {
  @apply scale-105 shadow-lg;
}
```

#### Card Hover
```css
.card {
  @apply transition-all duration-300;
}

.card:hover {
  @apply -translate-y-1 shadow-xl;
}
```

#### Link Hover
```css
.nav-link {
  @apply relative transition-colors duration-200;
}

.nav-link:hover {
  @apply text-primary-600;
}

.nav-link::after {
  @apply content-[''] absolute bottom-0 left-0 right-0
         h-0.5 bg-primary-600 rounded-full
         scale-x-0 hover:scale-x-100
         transition-transform duration-200;
}
```

---

## Accessibility Guidelines

### WCAG 2.1 AA Requirements

#### Color Contrast
- **Normal text:** 4.5:1 minimum
- **Large text:** 3:1 minimum
- **UI elements:** 3:1 minimum

#### Keyboard Navigation
- All interactive elements must be focusable
- Visible focus indicators required
- Logical tab order
- Skip links provided

#### Screen Reader Support
- Semantic HTML structure
- ARIA labels where needed
- Alt text for images
- Proper heading hierarchy

### Implementation Checklist

```markdown
- [ ] Skip to main content link
- [ ] Focus visible on all interactive elements
- [ ] ARIA labels on icon buttons
- [ ] Alt text on all images
- [ ] Proper heading hierarchy (H1 → H2 → H3)
- [ ] Form labels associated with inputs
- [ ] Error messages descriptive
- [ ] Language attribute on HTML
- [ ] Keyboard navigation tested
- [ ] Screen reader tested
```

---

## Agent Implementation Guide

### 🎬 Animation Agent Tasks

**Priority:** High

**Tasks:**
1. Create shared animation variants file
   - `src/lib/animations/variants.ts`
   - Export: containerVariants, slideUpVariants, fadeInVariants, etc.

2. Add scroll-triggered animations to all pages
   - Use `whileInView` for sections
   - Add stagger animations to card grids
   - Implement parallax on hero images

3. Create loading skeletons
   - NewsCard skeleton
   - StaffCard skeleton
   - PageHeader skeleton

4. Add page transitions
   - Fade out current page
   - Fade in new page
   - Smooth route transitions

**Files to Create:**
```
src/lib/animations/
├── variants.ts          # Animation variants
├── transitions.ts       # Transition presets
└── index.ts            # Exports
```

---

### 🧩 Component Builder Agent Tasks

**Priority:** High

**Tasks:**
1. Create missing components:
   - TestimonialCard
   - Modal/Dialog
   - Tabs
   - Tables
   - Tooltips
   - Pagination

2. Enhance existing components:
   - EventCard (add variant support)
   - StaffCard (add social links)
   - NewsCard (add video support)

3. Create compound components:
   - Card (with sub-components)
   - Form (with validation)
   - Modal (with focus trap)

**Files to Create:**
```
src/components/ui/
├── Modal/
│   ├── Modal.tsx
│   ├── ModalHeader.tsx
│   ├── ModalBody.tsx
│   ├── ModalFooter.tsx
│   └── index.ts
├── Tabs/
│   ├── Tabs.tsx
│   ├── TabsList.tsx
│   ├── TabsTrigger.tsx
│   ├── TabsContent.tsx
│   └── index.ts
├── Table/
│   ├── Table.tsx
│   ├── TableHeader.tsx
│   ├── TableBody.tsx
│   ├── TableRow.tsx
│   ├── TableCell.tsx
│   └── index.ts
└── index.ts
```

---

### 🌈 Color & Branding Agent Tasks

**Priority:** Medium

**Tasks:**
1. Audit all pages for color consistency
   - Find all uses of primary-600 for CTAs
   - Replace with secondary-600 (red)
   - Ensure blue is used for backgrounds only

2. Create color documentation
   - Usage examples
   - Do's and Don'ts
   - Accessibility contrast checker

3. Create dark mode variants
   - Update tailwind.config.ts
   - Add dark: variants to all components
   - Test contrast ratios

**Action Items:**
```bash
# Search for incorrect color usage
grep -r "btn-primary" src/app/
grep -r "bg-primary-600" src/components/

# Replace with correct colors
# primary-600 (blue) → secondary-600 (red) for CTAs
```

---

### ✍️ Content & Typography Agent Tasks

**Priority:** Medium

**Tasks:**
1. Extract all hardcoded strings
   - Move to translation files
   - Use `t()` function consistently

2. Create typography examples
   - Show all heading levels
   - Show body text styles
   - Show responsive behavior

3. Add locale-aware formatting
   - Dates (DD.MM.YYYY vs MM/DD/YYYY)
   - Numbers (1.000 vs 1,000)
   - Currency (€ vs zł)

**Files to Update:**
```
src/lib/i18n/
├── translations.json    # Add missing keys
├── formatters.ts       # Date/number formatters
└── request.ts          # i18n config
```

---

### ✅ Quality Assurance Agent Tasks

**Priority:** Critical

**Tasks:**
1. Run accessibility audit
   - Lighthouse score check
   - WAVE tool testing
   - Screen reader testing

2. Performance audit
   - Bundle size analysis
   - Image optimization check
   - Lazy loading implementation

3. Cross-browser testing
   - Chrome, Firefox, Safari, Edge
   - iOS Safari, Chrome Mobile
   - Tablet testing

4. Create test checklist
   - All pages functional
   - All links working
   - All forms validated
   - All animations smooth

**Tools:**
- Lighthouse (performance)
- WAVE (accessibility)
- axe DevTools (accessibility)
- WebPageTest (performance)
- BrowserStack (cross-browser)

---

## Quick Reference

### Most Used Classes

```css
/* Layout */
.container-custom
.section
.grid-responsive

/* Typography */
font-heading
font-sans
text-gradient

/* Buttons */
btn btn-primary btn-secondary btn-accent btn-outline btn-ghost
btn-sm btn-lg

/* Cards */
card card-interactive

/* Forms */
input label

/* Utilities */
text-center text-left text-right
flex flex-col items-center justify-center
```

### Color Quick Reference

```
Primary CTA: bg-secondary-600 text-white
Secondary CTA: bg-accent-500 text-neutral-900
Background: bg-primary-600 text-white
Card: bg-white text-neutral-900
Border: border-neutral-200
```

---

*Document Version: 2.0*  
*Created: 2026-03-13*  
*Maintained by: Design System Team*
