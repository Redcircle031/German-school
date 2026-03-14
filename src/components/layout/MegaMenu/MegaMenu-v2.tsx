'use client';

import { useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, GraduationCap, Users, BookOpen, Calendar, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { MegaMenuSection, FeaturedNewsItem, QuickAction } from './types';
import MegaMenuSectionComponent from './MegaMenuSection';
import MegaMenuSearch from './MegaMenuSearch';
import FeaturedNews from './FeaturedNews';
import QuickActions from './QuickActions';
import MobileAccordion from './MobileAccordion';
import newsData from '@/data/extracted/news.json';

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'pl' | 'de' | 'en';
}

// ============================================================================
// RESTRUCTURED MEGAMENU SECTIONS
// ============================================================================
// Changes from v1:
// 1. NEW: 'admissions' section - dedicated top-level for prospective families
// 2. MODIFIED: 'parents' - consolidated (13 → 7 items), grouped under 'Daily Life'
// 3. MODIFIED: 'students' - moved choir here, grouped under 'Extracurricular'
// 4. MODIFIED: 'news' - consolidated events here
// 5. REORDERED: admissions appears prominently after about

const megaMenuSections: MegaMenuSection[] = [
  {
    id: 'about',
    title: {
      pl: 'O szkole',
      de: 'Über die Schule',
      en: 'About School',
    },
    links: [
      { label: { pl: 'O WBS', de: 'Über WBS', en: 'About WBS' }, href: '/about' },
      { label: { pl: 'Nasz zespół', de: 'Unser Team', en: 'Our Team' }, href: '/about/staff' },
      { label: { pl: 'Misja i wartości', de: 'Mission und Werte', en: 'Mission & Values' }, href: '/about/mission' },
      { label: { pl: 'Patron szkoły', de: 'Schutzpatron', en: 'School Patron' }, href: '/about/patron' },
      { label: { pl: 'Partnerzy', de: 'Partner', en: 'Partners' }, href: '/about/partners' },
      { label: { pl: 'Certyfikaty', de: 'Zertifikate', en: 'Certificates' }, href: '/about/certificates' },
      { label: { pl: 'Dokumenty', de: 'Dokumente', en: 'Documents' }, href: '/about/documents' },
    ],
  },
  // NEW: Admissions section - prominently placed for prospective parents
  {
    id: 'admissions',
    title: {
      pl: 'Rekrutacja',
      de: 'Aufnahme',
      en: 'Admissions',
    },
    links: [
      { label: { pl: 'O rekrutacji', de: 'Über die Aufnahme', en: 'About Admissions' }, href: '/admissions' },
      { label: { pl: 'Proces rekrutacji', de: 'Aufnahmeprozess', en: 'Admission Process' }, href: '/admissions/process' },
      { label: { pl: 'Wymagania', de: 'Anforderungen', en: 'Requirements' }, href: '/admissions/requirements' },
      { label: { pl: 'Czesne', de: 'Schulgeld', en: 'Tuition & Fees' }, href: '/admissions/tuition' },
      { label: { pl: 'Dzień otwarty', de: 'Tag der offenen Tür', en: 'Open Days' }, href: '/admissions/visit' },
      { label: { pl: 'Częste pytania', de: 'Häufige Fragen', en: 'FAQ' }, href: '/admissions/faq' },
      { 
        label: { pl: '→ Zapisz dziecko', de: '→ Anmeldung', en: '→ Apply Now' }, 
        href: '/admissions/apply',
        highlight: true 
      },
    ],
  },
  // MODIFIED: Consolidated parent section (13 → 7 items)
  {
    id: 'parents',
    title: {
      pl: 'Dla rodziców',
      de: 'Für Eltern',
      en: 'For Parents',
    },
    links: [
      { label: { pl: 'Formularze', de: 'Formulare', en: 'Forms' }, href: '/parents/forms' },
      { label: { pl: 'Regulaminy', de: 'Ordnungen', en: 'Regulations' }, href: '/parents/regulations' },
      { label: { pl: 'Kalendarz', de: 'Kalender', en: 'Calendar' }, href: '/parents/calendar' },
      // Consolidated daily life items
      { 
        label: { pl: 'Życie szkoły ▸', de: 'Schulalltag ▸', en: 'Daily Life ▸' }, 
        href: '/parents/daily-life' 
      },
      { label: { pl: 'Legitymacje', de: 'Ausweise', en: 'Student IDs' }, href: '/parents/student-ids' },
      { label: { pl: 'Rada Rodziców', de: 'Elternbeirat', en: 'Parent Council' }, href: '/parents/council' },
      { 
        label: { pl: 'Portal rodzica →', de: 'Elternportal →', en: 'Parent Portal →' }, 
        href: '/portal/parent',
        external: true 
      },
    ],
  },
  // MODIFIED: Restructured student section with extracurricular grouping
  {
    id: 'students',
    title: {
      pl: 'Dla uczniów',
      de: 'Für Schüler',
      en: 'For Students',
    },
    links: [
      { label: { pl: 'Projekty', de: 'Projekte', en: 'Projects' }, href: '/students/projects' },
      // Moved choir from parents, added extracurricular grouping
      { 
        label: { pl: 'Zajęcia dodatkowe ▸', de: 'Zusatzangebote ▸', en: 'Extracurricular ▸' }, 
        href: '/students/extracurricular' 
      },
      { label: { pl: 'Biblioteka', de: 'Bibliothek', en: 'Library' }, href: '/students/library' },
      { label: { pl: 'Osiągnięcia', de: 'Erfolge', en: 'Achievements' }, href: '/students/achievements' },
      { label: { pl: 'Nauczyciel zaufania', de: 'Vertrauenslehrer', en: 'Trusted Teacher' }, href: '/students/trusted-teacher' },
      { 
        label: { pl: 'Portal ucznia →', de: 'Schülerportal →', en: 'Student Portal →' }, 
        href: '/portal/student',
        external: true 
      },
    ],
  },
  // MODIFIED: Consolidated news section
  {
    id: 'news',
    title: {
      pl: 'Aktualności',
      de: 'Aktuelles',
      en: 'News & Events',
    },
    links: [
      { label: { pl: 'Wszystkie aktualności', de: 'Alle Nachrichten', en: 'All News' }, href: '/news' },
      { label: { pl: 'Wydarzenia', de: 'Veranstaltungen', en: 'Events' }, href: '/news/events' },
      { label: { pl: 'Ogłoszenia', de: 'Bekanntmachungen', en: 'Announcements' }, href: '/news/announcements' },
      { label: { pl: 'Archiwum', de: 'Archiv', en: 'Archive' }, href: '/news/archive' },
    ],
  },
];

// ============================================================================
// RESTRUCTURED QUICK ACTIONS
// ============================================================================
// Changes from v1:
// 1. Recruitment is now PRIMARY (highlighted) - for prospective families
// 2. Calendar added - useful for all users
// 3. Portal buttons remain for current users

const quickActions: QuickAction[] = [
  {
    id: 'recruitment',
    label: { pl: 'Rekrutacja 2025/26', de: 'Aufnahme 2025/26', en: 'Admissions 2025/26' },
    href: '/admissions',
    icon: 'graduation-cap',
    variant: 'primary', // Highlighted button for prospective families
  },
  {
    id: 'parent-portal',
    label: { pl: 'Portal Rodzica', de: 'Elternportal', en: 'Parent Portal' },
    href: '/portal/parent',
    icon: 'users',
    variant: 'outline',
  },
  {
    id: 'student-portal',
    label: { pl: 'Portal Ucznia', de: 'Schülerportal', en: 'Student Portal' },
    href: '/portal/student',
    icon: 'book-open',
    variant: 'outline',
  },
  {
    id: 'calendar',
    label: { pl: 'Kalendarz', de: 'Kalender', en: 'Calendar' },
    href: '/parents/calendar',
    icon: 'calendar',
    variant: 'outline',
  },
];

// Animation variants
const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3, ease: 'easeOut' } },
  exit: { opacity: 0, transition: { duration: 0.2, ease: 'easeIn' } },
};

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

export default function MegaMenu({ isOpen, onClose, lang }: MegaMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Handle escape key
  const handleEscape = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  }, [onClose]);

  // Handle focus trap
  const handleTabKey = useCallback((e: KeyboardEvent) => {
    if (!menuRef.current || e.key !== 'Tab') return;

    const focusableElements = menuRef.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    if (e.shiftKey && document.activeElement === firstElement) {
      e.preventDefault();
      lastElement.focus();
    } else if (!e.shiftKey && document.activeElement === lastElement) {
      e.preventDefault();
      firstElement.focus();
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('keydown', handleTabKey);
      document.body.style.overflow = 'hidden';
      
      // Focus search input after animation
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 300);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('keydown', handleTabKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, handleEscape, handleTabKey]);

  // Prepare featured news
  const featuredNews: FeaturedNewsItem[] = newsData.articles.slice(0, 2).map((article) => ({
    id: article.id,
    title: article.title[lang] || article.title.pl,
    date: article.date,
    href: `/news/${article.id}`,
    category: article.category,
  }));

  // Get translated labels
  const translations = {
    searchPlaceholder: {
      pl: 'Szukaj na stronie...',
      de: 'Website durchsuchen...',
      en: 'Search the site...',
    },
    closeLabel: {
      pl: 'Zamknij menu',
      de: 'Menü schließen',
      en: 'Close menu',
    },
    featuredNewsLabel: {
      pl: 'Najnowsze wiadomości',
      de: 'Neueste Nachrichten',
      en: 'Latest News',
    },
    // NEW: Section labels for sub-pages
    dailyLife: {
      pl: 'Życie szkoły',
      de: 'Schulalltag',
      en: 'Daily Life',
    },
    extracurricular: {
      pl: 'Zajęcia dodatkowe',
      de: 'Zusatzangebote',
      en: 'Extracurricular',
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 z-40 lg:bg-black/40"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Menu Container */}
          <motion.div
            ref={menuRef}
            className="fixed inset-0 z-50 bg-white lg:inset-x-4 lg:top-4 lg:bottom-4 lg:rounded-2xl lg:shadow-2xl overflow-hidden flex flex-col"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            {/* Header */}
            <motion.div
              className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 lg:px-8"
              variants={itemVariants}
            >
              {/* Logo */}
              <Link
                href={`/${lang}`}
                className="flex items-center gap-3 group"
                onClick={onClose}
              >
                <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center group-hover:bg-primary-700 transition-colors">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div className="hidden sm:block">
                  <p className="font-heading font-semibold text-neutral-900 text-sm leading-tight">
                    Willy Brandt School
                  </p>
                  <p className="text-xs text-neutral-500">Warsaw</p>
                </div>
              </Link>

              {/* Desktop Search */}
              <div className="hidden lg:flex flex-1 max-w-md mx-8">
                <MegaMenuSearch
                  placeholder={translations.searchPlaceholder[lang]}
                  lang={lang}
                />
              </div>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-neutral-100 transition-colors group"
                aria-label={translations.closeLabel[lang]}
              >
                <span className="hidden sm:inline text-sm font-medium text-neutral-600 group-hover:text-neutral-900">
                  {translations.closeLabel[lang]}
                </span>
                <X className="w-6 h-6 text-neutral-600 group-hover:text-neutral-900" />
              </button>
            </motion.div>

            {/* Mobile Search */}
            <motion.div className="lg:hidden px-6 py-4 border-b border-neutral-200" variants={itemVariants}>
              <MegaMenuSearch
                placeholder={translations.searchPlaceholder[lang]}
                lang={lang}
              />
            </motion.div>

            {/* Main Content */}
            <div className="flex-1 overflow-y-auto">
              {/* Desktop Layout */}
              <div className="hidden lg:block container-custom py-8">
                {/* 
                  NEW GRID LAYOUT: 5 columns to accommodate new Admissions section
                  
                  About | Admissions | Parents | Students | News
                  ──────┼────────────┼─────────┼──────────┼─────
                        |  (NEW)     |         |          |
                */}
                <div className="grid grid-cols-5 gap-6">
                  {/* Sections */}
                  {megaMenuSections.map((section, index) => (
                    <motion.div key={section.id} variants={itemVariants} custom={index}>
                      <MegaMenuSectionComponent section={section} lang={lang} onLinkClick={onClose} />
                    </motion.div>
                  ))}
                </div>

                {/* Sub-section previews for Daily Life and Extracurricular */}
                <motion.div 
                  className="mt-6 grid grid-cols-2 gap-6" 
                  variants={itemVariants}
                >
                  {/* Daily Life Quick Links */}
                  <div className="bg-neutral-50 rounded-lg p-4">
                    <h4 className="text-sm font-semibold text-neutral-700 mb-3">
                      {translations.dailyLife[lang]}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        { pl: 'Dzwonki', de: 'Klingelzeiten', en: 'Bell Schedule', href: '/parents/daily-life/bell-schedule' },
                        { pl: 'Stołówka', de: 'Kantine', en: 'Canteen', href: '/parents/daily-life/canteen' },
                        { pl: 'Świetlica', de: 'Betreuung', en: 'Aftercare', href: '/parents/daily-life/aftercare' },
                      ].map((item) => (
                        <Link
                          key={item.href}
                          href={`/${lang}${item.href}`}
                          onClick={onClose}
                          className="text-xs px-3 py-1.5 bg-white rounded-full border border-neutral-200 hover:border-primary-300 hover:text-primary-700 transition-colors"
                        >
                          {item[lang]}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Extracurricular Quick Links */}
                  <div className="bg-neutral-50 rounded-lg p-4">
                    <h4 className="text-sm font-semibold text-neutral-700 mb-3">
                      {translations.extracurricular[lang]}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        { pl: 'Piłka nożna', de: 'Fußball', en: 'Football', href: '/students/extracurricular/football-academy' },
                        { pl: 'Muzyka', de: 'Musik', en: 'Music', href: '/students/extracurricular/music-academy' },
                        { pl: 'Chór', de: 'Chor', en: 'Choir', href: '/students/extracurricular/choir' },
                        { pl: 'Samorząd', de: 'SV', en: 'Council', href: '/students/extracurricular/student-council' },
                      ].map((item) => (
                        <Link
                          key={item.href}
                          href={`/${lang}${item.href}`}
                          onClick={onClose}
                          className="text-xs px-3 py-1.5 bg-white rounded-full border border-neutral-200 hover:border-primary-300 hover:text-primary-700 transition-colors"
                        >
                          {item[lang]}
                        </Link>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Featured News Section */}
                <motion.div className="mt-8 pt-8 border-t border-neutral-200" variants={itemVariants}>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-primary-700 mb-4">
                    {translations.featuredNewsLabel[lang]}
                  </h3>
                  <FeaturedNews items={featuredNews} lang={lang} onItemClick={onClose} />
                </motion.div>
              </div>

              {/* Mobile Layout */}
              <div className="lg:hidden">
                <MobileAccordion sections={megaMenuSections} lang={lang} onLinkClick={onClose} />
                
                {/* Mobile Featured News */}
                <div className="px-6 py-6 border-t border-neutral-200">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-primary-700 mb-4">
                    {translations.featuredNewsLabel[lang]}
                  </h3>
                  <FeaturedNews items={featuredNews} lang={lang} onItemClick={onClose} />
                </div>
              </div>
            </div>

            {/* Quick Actions Bar */}
            <motion.div
              className="border-t border-neutral-200 bg-neutral-50"
              variants={itemVariants}
            >
              <QuickActions actions={quickActions} lang={lang} onActionClick={onClose} />
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
