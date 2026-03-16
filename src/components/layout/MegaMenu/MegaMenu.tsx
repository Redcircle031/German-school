'use client';

import { useEffect, useRef, useCallback, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search, ArrowRight, Calendar, Users, BookOpen, MapPin, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'pl' | 'de' | 'en';
}

const easeOutExpo = [0.16, 1, 0.3, 1];

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
      { pl: 'Akademia Piłkarska', de: 'Fußballakademie', en: 'Football Academy', href: '/students/football-academy', desc: { pl: 'Sport i rozwój', de: 'Sport & Entwicklung', en: 'Sports & development' } },
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

const quickActions = [
  {
    icon: BookOpen,
    label: { pl: 'Aktualności', de: 'Aktuelles', en: 'News' },
    href: '/news',
    iconClass: 'bg-red-50 text-red-600',
    hoverClass: 'hover:bg-red-50 hover:border-red-200',
  },
  {
    icon: Calendar,
    label: { pl: 'Kalendarz', de: 'Kalender', en: 'Calendar' },
    href: '/events',
    iconClass: 'bg-accent-50 text-accent-600',
    hoverClass: 'hover:bg-amber-50 hover:border-amber-200',
  },
  {
    icon: MapPin,
    label: { pl: 'Kontakt', de: 'Kontakt', en: 'Contact' },
    href: '/contact',
    iconClass: 'bg-blue-50 text-blue-600',
    hoverClass: 'hover:bg-blue-50 hover:border-blue-200',
  },
  {
    icon: Users,
    label: { pl: 'Portal Rodzica', de: 'Elternportal', en: 'Parent Portal' },
    href: '/parent-portal',
    iconClass: 'bg-green-50 text-green-600',
    hoverClass: 'hover:bg-green-50 hover:border-green-200',
  },
];

// Photo slides for the right panel
const photoSlides = [
  {
    photo: '/images/campus/campus-02.jpg',
    tag: { pl: 'Kampus WBS', de: 'WBS Campus', en: 'WBS Campus' },
    title: { pl: 'Dwie kultury.\nJedna szkoła.', de: 'Zwei Kulturen.\nEine Schule.', en: 'Two cultures.\nOne school.' },
    href: '/about',
    cta: { pl: 'Odkryj WBS', de: 'WBS entdecken', en: 'Discover WBS' },
  },
  {
    photo: '/images/football-academy/football-01.jpg',
    tag: { pl: 'Akademia Piłkarska', de: 'Fußballakademie', en: 'Football Academy' },
    title: { pl: 'Sport i\nrozwój charakteru', de: 'Sport und\nPersönlichkeit', en: 'Sport &\ncharacter building' },
    href: '/students/football-academy',
    cta: { pl: 'Poznaj akademię', de: 'Mehr erfahren', en: 'Learn more' },
  },
  {
    photo: '/images/music-academy/music-01.jpg',
    tag: { pl: 'Akademia Muzyczna', de: 'Musikakademie', en: 'Music Academy' },
    title: { pl: 'Muzyka w\nsercu szkoły', de: 'Musik im\nHerzen der Schule', en: 'Music at the\nheart of school' },
    href: '/students/music-academy',
    cta: { pl: 'Poznaj akademię', de: 'Mehr erfahren', en: 'Learn more' },
  },
];

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
    transition: { duration: 0.4, ease: easeOutExpo },
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.98,
    transition: { duration: 0.2 },
  },
};

const photoSlideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: easeOutExpo },
  },
  exit: (direction: number) => ({
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
    transition: { duration: 0.4 },
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
      setActiveSlide((prev) => (prev + 1) % photoSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isOpen]);

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

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
          />

          {/* Menu Container */}
          <motion.div
            ref={menuRef}
            className="fixed inset-4 z-50 flex flex-col overflow-hidden rounded-3xl bg-white shadow-2xl lg:inset-8"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-neutral-100 px-6 py-4 lg:px-10">
              <Link href={`/${lang}`} onClick={onClose} className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-red-600">
                  <span className="text-sm font-bold text-white">WBS</span>
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

              {/* Close */}
              <button
                onClick={onClose}
                className="group flex size-10 items-center justify-center rounded-full bg-neutral-100 transition-colors hover:bg-red-50"
              >
                <X className="size-5 text-neutral-600 transition-colors group-hover:text-red-600" />
              </button>
            </div>

            {/* Main Content */}
            <div className="grid flex-1 overflow-hidden lg:grid-cols-12">

              {/* Left: Nav columns + quick actions */}
              <div className="grid grid-cols-2 content-start gap-6 overflow-y-auto p-6 lg:col-span-8 lg:grid-cols-4 lg:p-10">
                {categories.map((category, catIndex) => {
                  const data = menuData[category];
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
                        <h3 className="text-base font-bold text-black transition-colors group-hover:text-red-600">
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

                {/* Quick Links Bar */}
                <motion.div
                  className="col-span-2 mt-6 border-t-2 border-neutral-100 pt-6 lg:col-span-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                    {lang === 'pl' ? 'Szybki dostęp' : lang === 'de' ? 'Schnellzugriff' : 'Quick access'}
                  </p>
                  <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
                    {quickActions.map((action, index) => (
                      <motion.div
                        key={action.href}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.35 + index * 0.05 }}
                      >
                        <Link
                          href={`/${lang}${action.href}`}
                          onClick={onClose}
                          className={`group flex flex-col items-center justify-center gap-2 rounded-2xl border-2 border-neutral-100 bg-white p-4 text-center transition-all duration-200 ${action.hoverClass}`}
                        >
                          <div className={`flex size-10 items-center justify-center rounded-xl transition-all duration-200 ${action.iconClass}`}>
                            <action.icon className="size-5" />
                          </div>
                          <span className="text-sm font-semibold leading-tight text-neutral-800">
                            {action.label[lang]}
                          </span>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Right: Photo Slider */}
              <div className="relative hidden overflow-hidden lg:col-span-4 lg:block">
                <AnimatePresence mode="wait" custom={slideDirection}>
                  <motion.div
                    key={activeSlide}
                    custom={slideDirection}
                    variants={photoSlideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="absolute inset-0"
                  >
                    {/* Background Photo */}
                    <Image
                      src={photoSlides[activeSlide].photo}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="33vw"
                      priority={activeSlide === 0}
                    />
                    {/* Gradient overlay — dark at bottom, subtle at top */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10" />

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col justify-end p-8">
                      <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.4 }}
                      >
                        <span className="mb-3 inline-block rounded-full bg-red-600 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                          {photoSlides[activeSlide].tag[lang]}
                        </span>
                        <h3 className="mb-5 whitespace-pre-line text-2xl font-bold leading-tight text-white lg:text-3xl">
                          {photoSlides[activeSlide].title[lang]}
                        </h3>
                        <Link
                          href={`/${lang}${photoSlides[activeSlide].href}`}
                          onClick={onClose}
                          className="inline-flex items-center gap-2 rounded-full bg-white/20 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-white/30"
                        >
                          {photoSlides[activeSlide].cta[lang]}
                          <ArrowRight className="size-4" />
                        </Link>
                      </motion.div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Slide indicators */}
                <div className="absolute bottom-8 right-8 flex items-center gap-2">
                  {photoSlides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setSlideDirection(i > activeSlide ? 1 : -1);
                        setActiveSlide(i);
                      }}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        i === activeSlide ? 'w-8 bg-white' : 'w-2 bg-white/40 hover:bg-white/70'
                      }`}
                      aria-label={`Slide ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-neutral-100 bg-neutral-50 px-6 py-3.5 lg:px-10">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-6 text-sm text-neutral-500">
                  <div className="flex items-center gap-2">
                    <MapPin className="size-4 text-red-500" />
                    <span>ul. Św. Urszuli Ledóchowskiej 3, Warszawa</span>
                  </div>
                  <span className="hidden md:block">+48 22 642 27 05</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-neutral-400">
                    {lang === 'pl' ? 'Język:' : lang === 'de' ? 'Sprache:' : 'Language:'}
                  </span>
                  <div className="flex gap-1">
                    {(['pl', 'de', 'en'] as const).map((l) => (
                      <Link
                        key={l}
                        href={`/${l}`}
                        onClick={onClose}
                        className={`flex size-8 items-center justify-center rounded-lg text-xs font-semibold transition-colors ${
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
