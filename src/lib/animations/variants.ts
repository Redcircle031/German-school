/**
 * WBS Website Animation Variants
 * Shared Framer Motion animation configurations
 * 
 * Usage:
 * import { containerVariants, slideUpVariants } from '@/lib/animations/variants';
 */

import { Variants } from 'framer-motion';

// ========================================
// Easing Curves
// ========================================

/**
 * Smooth ease-out for premium feel
 * Use for: Hero animations, page transitions
 */
export const easeOutExpo = [0.16, 1, 0.3, 1];

/**
 * Smooth ease-in-out
 * Use for: General purpose animations
 */
export const easeInOut = [0.65, 0, 0.35, 1];

/**
 * Bouncy ease-out
 * Use for: Playful animations
 */
export const easeOutCubic = [0.33, 1, 0.68, 1];

// ========================================
// Container Animations
// ========================================

/**
 * Stagger container animation
 * Use on parent containers to stagger children animations
 */
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

/**
 * Fast stagger for quick sequences
 */
export const fastStaggerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

/**
 * Slow stagger for dramatic reveals
 */
export const slowStaggerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

// ========================================
// Text Animations
// ========================================

/**
 * Slide up animation for text
 * Use for: Headlines, paragraphs, badges
 */
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

/**
 * Quick slide up for smaller elements
 */
export const slideUpQuickVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easeOutExpo,
    },
  },
};

/**
 * Simple fade in
 */
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

/**
 * Fade in with upward movement
 */
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

// ========================================
// Image/Media Animations
// ========================================

/**
 * Scale up animation for images
 * Use for: Hero images, photo collages
 */
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

/**
 * Slide in from right
 */
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

/**
 * Slide in from left
 */
export const slideInLeftVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -40,
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

// ========================================
// Card/Grid Animations
// ========================================

/**
 * Card stagger animation for grids
 * Use custom prop for index-based staggering
 */
export const cardStaggerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: easeOutExpo,
    },
  }),
};

/**
 * Fade in card animation
 */
export const cardFadeInVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: easeOutExpo,
    },
  },
};

// ========================================
// Page Transition Animations
// ========================================

/**
 * Page transition variants
 * Use with AnimatePresence for route changes
 */
export const pageVariants: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easeOutExpo,
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

/**
 * Fade page transition (simpler)
 */
export const pageFadeVariants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

// ========================================
// Mega Menu Animations
// ========================================

/**
 * Backdrop animation for mega menu
 */
export const backdropVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

/**
 * Mega menu container animation
 */
export const megaMenuVariants: Variants = {
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
      ease: easeOutExpo,
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

/**
 * Mega menu section animation
 */
export const megaMenuSectionVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easeOutExpo,
    },
  },
};

// ========================================
// Loading Skeleton Animations
// ========================================

/**
 * Pulse animation for loading skeletons
 */
export const pulseVariants: Variants = {
  animate: {
    opacity: [1, 0.5, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

// ========================================
// Scroll Animation Helper
// ========================================

/**
 * Scroll reveal animation
 * Use with whileInView for scroll-triggered animations
 */
export const scrollRevealVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: easeOutExpo,
    },
  },
};

/**
 * Scroll scale reveal
 */
export const scrollScaleVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: easeOutExpo,
    },
  },
};

// ========================================
// Exports
// ========================================

export default {
  // Easing
  easeOutExpo,
  easeInOut,
  easeOutCubic,
  
  // Containers
  container: containerVariants,
  fastStagger: fastStaggerVariants,
  slowStagger: slowStaggerVariants,
  
  // Text
  slideUp: slideUpVariants,
  slideUpQuick: slideUpQuickVariants,
  fadeIn: fadeInVariants,
  fadeInUp: fadeInUpVariants,
  
  // Images
  scaleUp: scaleUpVariants,
  slideInRight: slideInRightVariants,
  slideInLeft: slideInLeftVariants,
  
  // Cards
  cardStagger: cardStaggerVariants,
  cardFadeIn: cardFadeInVariants,
  
  // Pages
  page: pageVariants,
  pageFade: pageFadeVariants,
  
  // Mega Menu
  backdrop: backdropVariants,
  megaMenu: megaMenuVariants,
  megaMenuSection: megaMenuSectionVariants,
  
  // Loading
  pulse: pulseVariants,
  
  // Scroll
  scrollReveal: scrollRevealVariants,
  scrollScale: scrollScaleVariants,
};
