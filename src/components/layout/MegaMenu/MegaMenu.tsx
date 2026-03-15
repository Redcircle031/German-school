'use client';

import { useEffect, useRef, useCallback, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search, ArrowRight, Calendar, Users, BookOpen, GraduationCap, FileText, MapPin, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import newsData from '@/data/extracted/news.json';

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'pl' | 'de' | 'en';
}

const easeOutExpo = [0.16, 1, 0.3, 1];

// All menu items organized by category
const menuData = {
  about: {
    pl: { title: 'O szkole', subtitle: 'Poznaj WBS' },
    de: { title: 'Über uns', subtitle: 'Lernen Sie WBS kennen' },
    en: { title: 'About', subtitle: 'Discover WBS' },
    links: [
      { pl: 'O WBS', de: 'Über WBS', en: 'About WBS', href: '/about', desc: { pl: 'Historia i misja', de: 'Geschichte & Mission', en: 'History & mission' } },
      { pl: 'Nasz zespół', de: 'Unser Team', en: 'Our Team', href: '/about/staff', desc: { pl: 'Nauczyciele i pracownicy', de: 'Lehrer & Mitarbeiter', en: 'Teachers & staff' } },
      { pl: 'Patron', de: 'Schutzpatron', en: 'Our Patron', href: '/about/patron', desc: { pl: 'Willy Brandt', de: 'Willy Brandt', en: 'Willy Brandt' } },
      { pl: 'Partnerzy', de: 'Partner', en: 'Partners', href: '/about/partners', desc: { pl: 'Współpraca', de: 'Zusammenarbeit', en: 'Cooperation' } },
    ],
  },
  parents: {
    pl: { title: 'Dla rodziców', subtitle: 'Strefa rodzica' },
    de: { title: 'Für Eltern', subtitle: 'Elternbereich' },
    en: { title: 'For Parents', subtitle: 'Parent zone' },
    links: [
      { pl: 'Rekrutacja', de: 'Rekrutierung', en: 'Admissions', href: '/parents/recruitment', desc: { pl: 'Zapisy 2026/27', de: 'Anmeldung 2026/27', en: 'Apply for 2026/27' } },
      { pl: 'Formularze', de: 'Formulare', en: 'Forms', href: '/parents/forms', desc: { pl: 'Dokumenty do pobrania', de: 'Formulare', en: 'Download forms' } },
      { pl: 'Stołówka', de: 'Kantine', en: 'Canteen', href: '/parents/canteen', desc: { pl: 'Menu i obiady', de: 'Mittagessen', en: 'Lunch menu' } },
      { pl: 'Świetlica', de: 'Betreuung', en: 'Aftercare', href: '/parents/aftercare', desc: { pl: 'Opieka po lekcjach', de: 'Nachmittagsbetreuung', en: 'After school care' } },
      { pl: 'Dzwonki', de: 'Stundenplan', en: 'Bell Schedule', href: '/parents/bell-schedule', desc: { pl: 'Godziny lekcji', de: 'Klingelzeiten', en: 'School hours' } },
    ],
  },
  students: {
    pl: { title: 'Dla uczniów', subtitle: 'Strefa ucznia' },
    de: { title: 'Für Schüler', subtitle: 'Schülerbereich' },
    en: { title: 'For Students', subtitle: 'Student zone' },
    links: [
      { pl: 'Projekty', de: 'Projekte', en: 'Projects', href: '/students/projects', desc: { pl: 'Inicjatywy uczniów', de: 'Schülerprojekte', en: 'Student projects' } },
      { pl: 'Akademie Piłkarska', de: 'Fußballakademie', en: 'Football Academy', href: '/students/football-academy', desc: { pl: 'Sport i rozwój', de: 'Sport & Entwicklung', en: 'Sports & development' } },
      { pl: 'Akademia Muzyczna', de: 'Musikakademie', en: 'Music Academy', href: '/students/music-academy', desc: { pl: 'Muzyka i sztuka', de: 'Musik & Kunst', en: 'Music & arts' } },
      { pl: 'Biblioteka', de: 'Bibliothek', en: 'Library', href: '/students/library', desc: { pl: 'Zasoby i czytelnia', de: 'Bibliotheksbestand', en: 'Resources & reading' } },
      { pl: 'Samorząd', de: 'Schülerrat', en: 'Student Council', href: '/students/student-council', desc: { pl: 'Współdecydowanie', de: 'Mitbestimmung', en: 'Student voice' } },
    ],
  },
  news: {
    pl: { title: 'Aktualności', subtitle: 'Co nowego?' },
    de: { title: 'Aktuelles', subtitle: 'Was ist neu?' },
    en: { title: 'News', subtitle: "What's new?" },
    links: [
      { pl: 'Wydarzenia', de: 'Veranstaltungen', en: 'Events', href: '/events', desc: { pl: 'Kalendarz szkolny', de: 'Schulkalender', en: 'School calendar' } },
      { pl: 'Aktualności', de: 'Nachrichten', en: 'News', href: '/news', desc: { pl: 'Najnowsze informacje', de: 'Neuigkeiten', en: 'Latest news' } },
      { pl: 'Osiągnięcia', de: 'Erfolge', en: 'Achievements', href: '/students/achievements', desc: { pl: 'Sukcesy uczniów', de: 'Schülererfolge', en: 'Student success' } },
    ],
  },
};

// Quick action cards
const quickActions = [
  { 
    icon: GraduationCap, 
    label: { pl: 'Rekrutacja', de: 'Rekrutierung', en: 'Admissions' },
    href: '/parents/recruitment',
    color: 'bg-red-600',
  },
  { 
    icon: Users, 
    label: { pl: 'Portal Rodzica', de: 'Elternportal', en: 'Parent Portal' },
    href: '/parent-portal',
    color: 'bg-neutral-800',
  },
  { 
    icon: BookOpen, 
    label: { pl: 'Portal Ucznia', de: 'Schülerportal', en: 'Student Portal' },
    href: '/student-portal',
    color: 'bg-neutral-800',
  },
  { 
    icon: Calendar, 
    label: { pl: 'Kalendarz', de: 'Kalender', en: 'Calendar' },
    href: '/events',
    color: 'bg-neutral-800',
  },
];

// Animation variants
const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const menuVariants = {
  hidden: { opacity: 0, y: -20, scale: 0.98 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.4, ease: easeOutExpo }
  },
  exit: { 
    opacity: 0, 
    y: -20, 
    scale: 0.98,
    transition: { duration: 0.2 }
  },
};

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: easeOutExpo },
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    transition: { duration: 0.3 },
  }),
};

export default function MegaMenu({ isOpen, onClose, lang }: MegaMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [slideDirection, setSlideDirection] = useState(0);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const categories = Object.keys(menuData) as Array<keyof typeof menuData>;

  // Auto-advance slides
  useEffect(() => {
    if (!isOpen) return;
    const interval = setInterval(() => {
      setSlideDirection(1);
      setActiveSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, [isOpen]);

  // Handle escape key
  const handleEscape = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, handleEscape]);

  // Get news for slides
  const news = newsData.articles.slice(0, 3);

  const slides = [
    // Slide 1: Welcome
    <div key="welcome" className="flex h-full flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <span className="mb-4 inline-block rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-700">
          {lang === 'pl' ? 'Witamy w WBS' : lang === 'de' ? 'Willkommen bei WBS' : 'Welcome to WBS'}
        </span>
        <h3 className="mb-4 text-3xl font-bold text-black">
          {lang === 'pl' ? 'Dwie kultury. Jedna szkoła.' : lang === 'de' ? 'Zwei Kulturen. Eine Schule.' : 'Two cultures. One school.'}
        </h3>
        <p className="mb-6 max-w-sm text-neutral-600">
          {lang === 'pl' 
            ? 'Odkryj wyjątkową atmosferę naszej polsko-niemieckiej szkoły.' 
            : lang === 'de' 
            ? 'Entdecken Sie die einzigartige Atmosphäre unserer deutsch-polnischen Schule.'
            : 'Discover the unique atmosphere of our Polish-German school.'}
        </p>
        <div className="flex gap-3">
          <Link 
            href={`/${lang}/about`} 
            onClick={onClose}
            className="inline-flex items-center gap-2 rounded-full bg-red-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-red-700"
          >
            {lang === 'pl' ? 'Odkryj WBS' : lang === 'de' ? 'Entdecken Sie WBS' : 'Discover WBS'}
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </motion.div>
    </div>,

    // Slide 2: Latest News
    <div key="news" className="flex h-full flex-col">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-4"
      >
        <span className="text-sm font-medium text-red-600">
          {lang === 'pl' ? 'Najnowsze wiadomości' : lang === 'de' ? 'Neueste Nachrichten' : 'Latest news'}
        </span>
      </motion.div>
      <div className="space-y-3">
        {news.map((article, i) => (
          <motion.div
            key={article.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * i }}
          >
            <Link 
              href={`/${lang}/news/${article.id}`}
              onClick={onClose}
              className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-neutral-50"
            >
              <div className="flex size-16 shrink-0 items-center justify-center rounded-lg bg-red-100">
                <FileText className="size-6 text-red-600" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="line-clamp-2 text-sm font-medium text-black transition-colors group-hover:text-red-600">
                  {article.title[lang] || article.title.pl}
                </p>
                <p className="mt-1 text-xs text-neutral-500">{article.date}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>,

    // Slide 3: Quick Stats
    <div key="stats" className="flex h-full flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="text-center"
      >
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-2xl bg-red-50 p-4">
            <p className="text-3xl font-bold text-red-600">300+</p>
            <p className="text-sm text-neutral-600">{lang === 'pl' ? 'Uczniów' : lang === 'de' ? 'Schüler' : 'Students'}</p>
          </div>
          <div className="rounded-2xl bg-neutral-100 p-4">
            <p className="text-3xl font-bold text-black">47</p>
            <p className="text-sm text-neutral-600">{lang === 'pl' ? 'Lat tradycji' : lang === 'de' ? 'Jahre Tradition' : 'Years of tradition'}</p>
          </div>
          <div className="rounded-2xl bg-neutral-100 p-4">
            <p className="text-3xl font-bold text-black">59</p>
            <p className="text-sm text-neutral-600">{lang === 'pl' ? 'Nauczycieli' : lang === 'de' ? 'Lehrer' : 'Teachers'}</p>
          </div>
          <div className="rounded-2xl bg-red-50 p-4">
            <p className="text-3xl font-bold text-red-600">2</p>
            <p className="text-sm text-neutral-600">{lang === 'pl' ? 'Kampusy' : lang === 'de' ? 'Campusse' : 'Campuses'}</p>
          </div>
        </div>
      </motion.div>
    </div>,
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
          />

          {/* Menu Container - Full screen, no scroll */}
          <motion.div
            ref={menuRef}
            className="fixed inset-4 z-50 flex flex-col overflow-hidden rounded-3xl bg-white shadow-2xl lg:inset-8"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-neutral-100 px-6 py-5 lg:px-10">
              <Link href={`/${lang}`} onClick={onClose} className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-red-600">
                  <span className="font-bold text-white">WBS</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-black">Willy Brandt School</p>
                  <p className="text-xs text-neutral-500">Warsaw</p>
                </div>
              </Link>

              {/* Search */}
              <div className="mx-8 hidden max-w-md flex-1 md:flex">
                <div className="relative w-full">
                  <Search className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-neutral-400" />
                  <input
                    type="text"
                    placeholder={lang === 'pl' ? 'Szukaj...' : lang === 'de' ? 'Suchen...' : 'Search...'}
                    className="w-full rounded-full bg-neutral-100 py-2.5 pl-12 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="group flex size-10 items-center justify-center rounded-full bg-neutral-100 transition-colors hover:bg-red-50"
              >
                <X className="size-5 text-neutral-600 transition-colors group-hover:text-red-600" />
              </button>
            </div>

            {/* Main Content - Grid layout, no scroll */}
            <div className="grid flex-1 overflow-hidden lg:grid-cols-12">
              
              {/* Left: Category Navigation */}
              <div className="grid grid-cols-2 content-start gap-6 p-6 lg:col-span-8 lg:grid-cols-4 lg:p-10">
                {categories.map((category, catIndex) => {
                  const data = menuData[category];
                  const isHovered = hoveredCategory === category;
                  
                  return (
                    <motion.div
                      key={category}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: catIndex * 0.05 }}
                      onMouseEnter={() => setHoveredCategory(category)}
                      onMouseLeave={() => setHoveredCategory(null)}
                      className="group"
                    >
                      <div className="mb-4">
                        <h3 className="text-lg font-bold text-black transition-colors group-hover:text-red-600">
                          {data[lang].title}
                        </h3>
                        <p className="text-xs text-neutral-500">{data[lang].subtitle}</p>
                      </div>
                      <ul className="space-y-1">
                        {data.links.map((link, linkIndex) => (
                          <motion.li
                            key={link.href}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: catIndex * 0.05 + linkIndex * 0.03 }}
                          >
                            <Link
                              href={`/${lang}${link.href}`}
                              onClick={onClose}
                              className="group/link flex items-center gap-2 py-1.5 text-sm text-neutral-600 transition-colors hover:text-red-600"
                            >
                              <span className="size-1.5 rounded-full bg-neutral-300 transition-colors group-hover/link:bg-red-600" />
                              <span>{link[lang]}</span>
                              <ChevronRight className="size-3 -translate-x-2 opacity-0 transition-all group-hover/link:translate-x-0 group-hover/link:opacity-100" />
                            </Link>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  );
                })}

                {/* Quick Actions Row */}
                <motion.div 
                  className="col-span-2 mt-8 border-t border-neutral-100 pt-6 lg:col-span-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
                    {quickActions.map((action, index) => (
                      <motion.div
                        key={action.href}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + index * 0.05 }}
                      >
                        <Link
                          href={`/${lang}${action.href}`}
                          onClick={onClose}
                          className="group flex items-center gap-3 rounded-2xl border border-transparent bg-neutral-50 p-4 transition-all hover:border-red-100 hover:bg-red-50"
                        >
                          <div className={`size-10 ${action.color} flex items-center justify-center rounded-xl transition-transform group-hover:scale-110`}>
                            <action.icon className="size-5 text-white" />
                          </div>
                          <span className="text-sm font-medium text-neutral-800 transition-colors group-hover:text-red-700">
                            {action.label[lang]}
                          </span>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Right: Animated Slides */}
              <div className="relative hidden overflow-hidden border-l border-neutral-100 bg-neutral-50 p-10 lg:col-span-4 lg:block">
                <AnimatePresence mode="wait" custom={slideDirection}>
                  <motion.div
                    key={activeSlide}
                    custom={slideDirection}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="h-full"
                  >
                    {slides[activeSlide]}
                  </motion.div>
                </AnimatePresence>

                {/* Slide Indicators */}
                <div className="absolute bottom-10 left-10 flex gap-2">
                  {[0, 1, 2].map((i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setSlideDirection(i > activeSlide ? 1 : -1);
                        setActiveSlide(i);
                      }}
                      className={`size-2 rounded-full transition-all ${
                        i === activeSlide ? 'w-8 bg-red-600' : 'bg-neutral-300 hover:bg-neutral-400'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Bar - Contact Info */}
            <div className="border-t border-neutral-100 bg-neutral-50 px-6 py-4 lg:px-10">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-6 text-sm text-neutral-600">
                  <div className="flex items-center gap-2">
                    <MapPin className="size-4 text-red-600" />
                    <span>ul. Św. Urszuli Ledóchowskiej 3, Warszawa</span>
                  </div>
                  <div className="hidden items-center gap-2 md:flex">
                    <span className="size-1 rounded-full bg-neutral-300" />
                    <span>+48 22 642 27 05</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-neutral-500">
                    {lang === 'pl' ? 'Język:' : lang === 'de' ? 'Sprache:' : 'Language:'}
                  </span>
                  <div className="flex gap-1">
                    {['pl', 'de', 'en'].map((l) => (
                      <Link
                        key={l}
                        href={`/${l}`}
                        onClick={onClose}
                        className={`flex size-8 items-center justify-center rounded-lg text-sm font-medium transition-colors ${
                          lang === l 
                            ? 'bg-red-600 text-white' 
                            : 'bg-white text-neutral-600 hover:bg-neutral-100'
                        }`}
                      >
                        {l.toUpperCase()}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
