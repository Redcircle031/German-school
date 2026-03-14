# 🎬 Animation & Micro-interactions Implementation Guide

**Agent:** Animation & Interaction Agent  
**Priority:** High  
**Status:** Ready for Implementation

---

## Overview

This document provides detailed specifications for implementing animations and micro-interactions across the WBS website. All animations should be performant (60fps), accessible (reduced motion support), and purposeful.

---

## 1. Shared Animation Variants

### File: `src/lib/animations/variants.ts`

```typescript
import { Variants } from 'framer-motion';

// Easing curves
export const easeOutExpo = [0.16, 1, 0.3, 1];
export const easeInOut = [0.65, 0, 0.35, 1];
export const easeOutCubic = [0.33, 1, 0.68, 1];

// Container stagger animation
export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

// Slide up animation (for text)
export const slideUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easeOutExpo,
    },
  },
};

// Fade in animation
export const fadeInVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: easeOutExpo,
    },
  },
};

// Scale up animation (for images)
export const scaleUpVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: easeOutExpo,
    },
  },
};

// Slide in from right
export const slideInRightVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: easeOutExpo,
    },
  },
};

// Fade in up (combined)
export const fadeInUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOutExpo,
    },
  },
};

// Card stagger (for grids)
export const cardStaggerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: easeOutExpo,
    },
  }),
};

// Export all
export default {
  container: containerVariants,
  slideUp: slideUpVariants,
  fadeIn: fadeInVariants,
  scaleUp: scaleUpVariants,
  slideInRight: slideInRightVariants,
  fadeInUp: fadeInUpVariants,
  cardStagger: cardStaggerVariants,
};
```

---

## 2. Page Load Animations

### Hero Section Animation

**File:** `src/components/features/Homepage/Hero.tsx`

```tsx
import { motion } from 'framer-motion';
import { containerVariants, slideUpVariants, scaleUpVariants } from '@/lib/animations/variants';

export default function Hero() {
  return (
    <section className="relative min-h-screen">
      {/* Background pattern */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute inset-0 opacity-[0.03]"
      >
        {/* Pattern SVG */}
      </motion.div>

      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left column - Content */}
          <motion.div>
            {/* Badge */}
            <motion.div variants={slideUpVariants}>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-100 rounded-full text-red-700 text-sm font-medium mb-8">
                <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
                Rekrutacja 2026/2027
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1 variants={slideUpVariants}>
              Dwie kultury.
            </motion.h1>
            <motion.h1 variants={slideUpVariants} className="text-red-600">
              Jedna szkoła.
            </motion.h1>

            {/* Description */}
            <motion.p variants={slideUpVariants}>
              WBS to miejsce, gdzie polskie i niemieckie dziedzictwo...
            </motion.p>

            {/* CTAs */}
            <motion.div variants={slideUpVariants}>
              <Link href="/about" className="btn-primary">
                Odkryj WBS
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeInVariants}
              className="flex flex-wrap gap-8 pt-8 border-t border-neutral-200"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                >
                  {/* Stat content */}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right column - Photo collage */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Images with scaleUpVariants */}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
```

---

## 3. Scroll-Triggered Animations

### Section Fade-In on Scroll

**Pattern:** Use on all major sections

```tsx
import { motion } from 'framer-motion';

<section className="py-24 bg-white">
  <div className="container-custom">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: 'easeOutExpo' }}
    >
      {/* Section content */}
    </motion.div>
  </div>
</section>
```

### Card Grid Stagger Animation

```tsx
import { motion } from 'framer-motion';
import { containerVariants, cardStaggerVariants } from '@/lib/animations/variants';

<div className="grid md:grid-cols-3 gap-6">
  <motion.div
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
    className="grid"
  >
    {cards.map((card, index) => (
      <motion.div
        key={card.id}
        custom={index}
        variants={cardStaggerVariants}
        className="card"
      >
        {/* Card content */}
      </motion.div>
    ))}
  </motion.div>
</div>
```

---

## 4. Micro-interactions

### Button Hover Effects

**File:** `src/app/globals.css`

```css
/* Primary Button */
.btn-primary {
  @apply relative overflow-hidden;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-primary::after {
  @apply content-[''] absolute inset-0 bg-white/10;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.2s ease-out;
}

.btn-primary:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}

.btn-primary:hover {
  @apply shadow-lg shadow-red-600/25;
  transform: translateY(-2px);
}

.btn-primary:active {
  transform: translateY(0);
}

/* Ghost Button */
.btn-ghost {
  transition: all 0.15s ease;
}

.btn-ghost:hover {
  @apply bg-neutral-100;
  transform: scale(1.02);
}
```

### Card Hover Effects

```css
/* News Card */
.card {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 
              0 8px 10px -6px rgb(0 0 0 / 0.1);
}

/* Interactive Card (Link) */
.card-interactive {
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.card-interactive:hover {
  transform: translateY(-4px) scale(1.01);
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.15);
}

/* Value Card */
.value-card {
  transition: all 0.3s ease;
}

.value-card:hover {
  @apply border-red-100 shadow-xl shadow-red-900/5;
}

.value-card:hover .icon-container {
  @apply bg-red-600;
  transform: scale(1.1);
}

.value-card:hover .icon {
  @apply text-white;
}
```

### Link Hover Effects

```css
/* Navigation Link */
.nav-link {
  position: relative;
  transition: color 0.2s ease;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  right: 0;
  height: 2px;
  background: currentColor;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.2s ease;
}

.nav-link:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}

/* Text Link with Arrow */
.link-arrow {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s ease;
}

.link-arrow:hover {
  gap: 1rem;
  color: #dc2626;
}

.link-arrow svg {
  transition: transform 0.2s ease;
}

.link-arrow:hover svg {
  transform: translateX(4px);
}
```

### Form Field Focus

```css
/* Input Field */
.input {
  transition: all 0.2s ease;
  border: 1px solid #d4d4d8;
}

.input:focus {
  outline: none;
  border-color: #2563eb;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
  transform: translateY(-1px);
}

/* Checkbox */
.checkbox {
  transition: all 0.15s ease;
}

.checkbox:checked {
  background-color: #dc2626;
  border-color: #dc2626;
}

.checkbox:hover {
  border-color: #2563eb;
}
```

---

## 5. Loading Skeletons

### NewsCard Skeleton

**File:** `src/components/features/News/NewsCardSkeleton.tsx`

```tsx
export default function NewsCardSkeleton() {
  return (
    <div className="bg-white rounded-xl overflow-hidden animate-pulse">
      {/* Image placeholder */}
      <div className="aspect-[4/3] bg-neutral-200" />
      
      {/* Content */}
      <div className="p-6">
        {/* Category badge */}
        <div className="w-20 h-6 bg-neutral-200 rounded-full mb-4" />
        
        {/* Title */}
        <div className="h-6 bg-neutral-200 rounded mb-3 w-3/4" />
        <div className="h-6 bg-neutral-200 rounded mb-4 w-1/2" />
        
        {/* Excerpt */}
        <div className="space-y-2 mb-4">
          <div className="h-4 bg-neutral-200 rounded w-full" />
          <div className="h-4 bg-neutral-200 rounded w-5/6" />
        </div>
        
        {/* Date */}
        <div className="h-4 bg-neutral-200 rounded w-1/3" />
      </div>
    </div>
  );
}
```

### StaffCard Skeleton

```tsx
export default function StaffCardSkeleton() {
  return (
    <div className="bg-white rounded-xl p-6 animate-pulse">
      {/* Avatar */}
      <div className="w-20 h-20 bg-neutral-200 rounded-full mx-auto mb-4" />
      
      {/* Name */}
      <div className="h-5 bg-neutral-200 rounded mb-2 w-3/4 mx-auto" />
      
      {/* Role */}
      <div className="h-4 bg-neutral-200 rounded mb-4 w-1/2 mx-auto" />
      
      {/* Subject badges */}
      <div className="flex justify-center gap-2 mb-4">
        <div className="h-6 w-16 bg-neutral-200 rounded" />
        <div className="h-6 w-16 bg-neutral-200 rounded" />
      </div>
      
      {/* Email button */}
      <div className="h-9 bg-neutral-200 rounded w-24 mx-auto" />
    </div>
  );
}
```

### Usage with Suspense

```tsx
import { Suspense } from 'react';
import NewsCardSkeleton from '@/components/features/News/NewsCardSkeleton';

export default async function NewsPage() {
  return (
    <Suspense fallback={
      <div className="grid md:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <NewsCardSkeleton key={i} />
        ))}
      </div>
    }>
      <NewsGrid />
    </Suspense>
  );
}
```

---

## 6. Page Transitions

### Layout with Page Transitions

**File:** `src/app/[locale]/layout.tsx`

```tsx
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function LocaleLayout({ children, params }: any) {
  const pathname = usePathname();

  return (
    <html lang={locale}>
      <body>
        <AnimatePresence mode="wait">
          <motion.main
            key={pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.main>
        </AnimatePresence>
      </body>
    </html>
  );
}
```

### Smooth Route Transitions

**File:** `src/components/features/PageTransition.tsx`

```tsx
'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface PageTransitionProps {
  children: ReactNode;
}

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
    },
  },
};

export default function PageTransition({ children }: PageTransitionProps) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      {children}
    </motion.div>
  );
}
```

**Usage:**

```tsx
import PageTransition from '@/components/features/PageTransition';

export default function AboutPage() {
  return (
    <PageTransition>
      {/* Page content */}
    </PageTransition>
  );
}
```

---

## 7. Mega Menu Animations

**File:** `src/components/layout/MegaMenu/MegaMenu.tsx`

```tsx
import { motion, AnimatePresence } from 'framer-motion';

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const menuVariants = {
  hidden: {
    opacity: 0,
    scale: 0.98,
    y: -20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.98,
    y: -20,
    transition: {
      duration: 0.2,
    },
  },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function MegaMenu({ isOpen, onClose, lang }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 z-40"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
          />

          {/* Menu */}
          <motion.div
            className="fixed inset-0 bg-white z-50 overflow-auto"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Sections with stagger */}
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                variants={sectionVariants}
                custom={index}
              >
                {/* Section content */}
              </motion.div>
            ))}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
```

---

## 8. Reduced Motion Support

### CSS Implementation

**File:** `src/app/globals.css`

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }

  .animate-pulse {
    animation: none !important;
  }

  .animate-bounce {
    animation: none !important;
  }
}
```

### Framer Motion Implementation

```tsx
import { useReducedMotion } from 'framer-motion';

export default function AnimatedComponent() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: shouldReduceMotion ? 0.01 : 0.8,
      }}
    >
      Content
    </motion.div>
  );
}
```

---

## 9. Animation Performance Tips

### DO:
- ✅ Use CSS transforms (translate, scale, rotate) - GPU accelerated
- ✅ Use opacity transitions - very performant
- ✅ Use `will-change` sparingly for complex animations
- ✅ Keep animation duration under 1 second
- ✅ Use `requestAnimationFrame` for complex JS animations
- ✅ Test on mobile devices

### DON'T:
- ❌ Animate width, height, top, left (triggers layout)
- ❌ Animate box-shadow, border-radius (expensive paints)
- ❌ Use too many `will-change` properties
- ❌ Create animation loops that run forever
- ❌ Forget to clean up animations on unmount

---

## 10. Implementation Checklist

### Phase 1: Foundation (Week 1)
- [ ] Create `src/lib/animations/variants.ts`
- [ ] Export all animation variants
- [ ] Update Hero component with variants
- [ ] Add scroll animations to About page sections

### Phase 2: Components (Week 2)
- [ ] Add hover effects to all buttons
- [ ] Add hover effects to all cards
- [ ] Create loading skeletons for NewsCard
- [ ] Create loading skeletons for StaffCard
- [ ] Add form field focus animations

### Phase 3: Pages (Week 3)
- [ ] Add page transitions
- [ ] Add scroll animations to all pages
- [ ] Add stagger animations to card grids
- [ ] Implement reduced motion support

### Phase 4: Polish (Week 4)
- [ ] Add micro-interactions to links
- [ ] Add loading states to Mega Menu
- [ ] Test all animations on mobile
- [ ] Performance audit (Lighthouse)
- [ ] Accessibility audit (reduced motion)

---

## 11. Testing

### Manual Testing
1. Open each page
2. Observe load animations
3. Scroll through page (trigger scroll animations)
4. Hover over all interactive elements
5. Test keyboard navigation
6. Test with reduced motion enabled

### Automated Testing
```bash
# Lighthouse performance score
npm run lighthouse

# Check bundle size
npm run analyze
```

### Browser Support
- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ iOS Safari (latest)
- ✅ Chrome Mobile (latest)

---

*Document Created: 2026-03-13*  
*Agent: Animation & Interaction Agent*  
*Status: Ready for Implementation*
