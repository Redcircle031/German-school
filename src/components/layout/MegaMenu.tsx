'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { X, ArrowRight, Calendar, Mail, LogIn, Newspaper, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type Lang = 'pl' | 'de' | 'en';
type L = { pl: string; de: string; en: string };

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Lang;
}

function tr(obj: L, lang: Lang) { return obj[lang]; }

/* ─── SLIDE DATA ─────────────────────────────────────────── */
const slides = [
  {
    photo: '/images/football-academy/football-01.jpg',
    tag:   { pl: 'Sport', de: 'Sport', en: 'Sport' },
    title: { pl: 'Akademia Piłkarska WBS', de: 'WBS Fußball-Akademie', en: 'WBS Football Academy' },
    sub:   { pl: 'Trenuj z BVB Dortmund. 300+ zawodników.', de: 'Training mit BVB Dortmund. 300+ Spieler.', en: 'Train with BVB Dortmund. 300+ players.' },
    href:  '/students/football-academy',
  },
  {
    photo: '/images/music-academy/music-01.jpg',
    tag:   { pl: 'Muzyka', de: 'Musik', en: 'Music' },
    title: { pl: 'Akademia Muzyczna WBS', de: 'WBS Musik-Akademie', en: 'WBS Music Academy' },
    sub:   { pl: '14 instrumentów. Egzaminy ABRSM.', de: '14 Instrumente. ABRSM-Prüfungen.', en: '14 instruments. ABRSM exams.' },
    href:  '/students/music-academy',
  },
  {
    photo: '/images/campus/campus-08.jpg',
    tag:   { pl: 'Wiedza', de: 'Wissen', en: 'Knowledge' },
    title: { pl: 'Biblioteka WBS', de: 'WBS Bibliothek', en: 'WBS Library' },
    sub:   { pl: '18 000+ książek. Centrum mediów.', de: '18 000+ Bücher. Medienzentrum.', en: '18,000+ books. Media centre.' },
    href:  '/students/library',
  },
  {
    photo: '/images/campus/campus-07.jpg',
    tag:   { pl: 'Rekrutacja', de: 'Aufnahme', en: 'Admissions' },
    title: { pl: 'Rekrutacja 2026/27', de: 'Aufnahme 2026/27', en: 'Admissions 2026/27' },
    sub:   { pl: 'Dołącz do szkolnej rodziny WBS.', de: 'Werde Teil der WBS-Schulgemeinschaft.', en: 'Join the WBS school family.' },
    href:  '/parents/recruitment',
  },
];

/* ─── NAV SECTIONS ───────────────────────────────────────── */
const navSections = [
  {
    key: 'about',
    color: 'bg-red-600',
    label: { pl: 'O szkole', de: 'Über uns', en: 'About' },
    links: [
      { url: '/about/school',         label: { pl: 'Szkoła WBS',            de: 'WBS Schule',           en: 'WBS School'       } },
      { url: '/about/staff',          label: { pl: 'Nasz zespół',            de: 'Unser Team',           en: 'Our Team'         } },
      { url: '/about/mission',        label: { pl: 'Misja',                  de: 'Mission',              en: 'Mission'          } },
      { url: '/about/patron',         label: { pl: 'Patron szkoły',          de: 'Schulpatron',          en: 'School Patron'    } },
      { url: '/about/governing-body', label: { pl: 'Organ prowadzący',       de: 'Trägerverein',         en: 'Governing Body'   } },
      { url: '/about/partners',       label: { pl: 'Partnerzy',              de: 'Partner',              en: 'Partners'         } },
      { url: '/about/certificates',   label: { pl: 'Certyfikaty',            de: 'Zertifikate',          en: 'Certificates'     } },
      { url: '/about/careers',        label: { pl: 'Oferty pracy',           de: 'Stellenangebote',      en: 'Careers'          } },
    ],
  },
  {
    key: 'parents',
    color: 'bg-accent-500',
    label: { pl: 'Strefa rodzica', de: 'Elternbereich', en: 'Parents' },
    links: [
      { url: '/parents/recruitment',       label: { pl: 'Rekrutacja 2026/27',    de: 'Aufnahme 2026/27',     en: 'Admissions 2026/27' } },
      { url: '/parents/forms',             label: { pl: 'Formularze',            de: 'Formulare',            en: 'Forms'              } },
      { url: '/parents/regulations',       label: { pl: 'Regulaminy',            de: 'Ordnungen',            en: 'Regulations'        } },
      { url: '/parents/canteen',           label: { pl: 'Stołówka',              de: 'Kantine',              en: 'Canteen'            } },
      { url: '/parents/aftercare',         label: { pl: 'Opieka popołudniowa',   de: 'Nachmittagsbetreuung', en: 'Afternoon Care'     } },
      { url: '/parents/council',           label: { pl: 'Rada Rodziców',         de: 'Elternbeirat',         en: 'Parent Council'     } },
      { url: '/parents/holidays-2025-26',  label: { pl: 'Ferie 2025/26',         de: 'Ferien 2025/26',       en: 'Holidays 2025/26'   } },
      { url: '/parents/choir',             label: { pl: 'Chór SchELF',           de: 'SchELF Chor',          en: 'SchELF Choir'       } },
    ],
  },
  {
    key: 'students',
    color: 'bg-blue-600',
    label: { pl: 'Strefa ucznia', de: 'Schülerbereich', en: 'Students' },
    links: [
      { url: '/students/football-academy', label: { pl: 'Akademia Piłkarska',  de: 'Fußball-Akademie',    en: 'Football Academy'  } },
      { url: '/students/music-academy',    label: { pl: 'Akademia Muzyczna',   de: 'Musik-Akademie',      en: 'Music Academy'     } },
      { url: '/students/library',          label: { pl: 'Biblioteka',           de: 'Bibliothek',          en: 'Library'           } },
      { url: '/students/projects',         label: { pl: 'Projekty',             de: 'Projekte',            en: 'Projects'          } },
      { url: '/students/achievements',     label: { pl: 'Osiągnięcia',          de: 'Errungenschaften',    en: 'Achievements'      } },
      { url: '/students/student-council',  label: { pl: 'Samorząd',             de: 'Schülervertretung',   en: 'Student Council'   } },
      { url: '/students/trusted-teacher',  label: { pl: 'Nauczyciel zaufania',  de: 'Vertrauenslehrer',    en: 'Trusted Teacher'   } },
    ],
  },
];

const quickActions = [
  { icon: Newspaper, url: '/news',           label: { pl: 'Aktualności',    de: 'Aktuelles',    en: 'News'           } },
  { icon: Calendar,  url: '/events',          label: { pl: 'Kalendarz',      de: 'Kalender',     en: 'Calendar'       } },
  { icon: Mail,      url: '/contact',         label: { pl: 'Kontakt',        de: 'Kontakt',      en: 'Contact'        } },
  { icon: LogIn,     url: '/parent-portal',   label: { pl: 'Portal rodzica', de: 'Elternportal', en: 'Parent portal'  } },
  { icon: LogIn,     url: '/student-portal',  label: { pl: 'Portal ucznia',  de: 'Schülerportal',en: 'Student portal' } },
];

/* ─── PHOTO SLIDER ───────────────────────────────────────── */
function PhotoSlider({ lang, isOpen }: { lang: Lang; isOpen: boolean }) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (!isOpen) { setIdx(0); return; }
    const t = setInterval(() => setIdx(i => (i + 1) % slides.length), 4000);
    return () => clearInterval(t);
  }, [isOpen]);

  return (
    <div className="relative h-full min-h-[500px] overflow-hidden rounded-2xl">
      {slides.map((slide, i) => (
        <div key={i} className={`absolute inset-0 transition-opacity duration-700 ${i === idx ? 'opacity-100' : 'opacity-0'}`}>
          <Image src={slide.photo} alt={tr(slide.title, lang)} fill className="object-cover" sizes="400px" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />
        </div>
      ))}

      {/* Slide content */}
      <div className="absolute inset-x-0 bottom-0 p-6">
        <span className="mb-2 inline-block rounded-full bg-red-600 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-white">
          {tr(slides[idx].tag, lang)}
        </span>
        <p className="mb-1 text-xl font-bold leading-snug text-white">{tr(slides[idx].title, lang)}</p>
        <p className="mb-4 text-sm text-white/70">{tr(slides[idx].sub, lang)}</p>
        <Link
          href={`/${lang}${slides[idx].href}`}
          className="inline-flex items-center gap-2 rounded-xl bg-white/15 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/25"
        >
          {lang === 'pl' ? 'Dowiedz się więcej' : lang === 'de' ? 'Mehr erfahren' : 'Learn more'}
          <ArrowRight className="size-4" />
        </Link>
      </div>

      {/* Controls */}
      <button onClick={() => setIdx(i => (i - 1 + slides.length) % slides.length)}
        className="absolute left-3 top-4 flex size-8 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm hover:bg-black/50">
        <ChevronLeft className="size-4" />
      </button>
      <button onClick={() => setIdx(i => (i + 1) % slides.length)}
        className="absolute right-3 top-4 flex size-8 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm hover:bg-black/50">
        <ChevronRight className="size-4" />
      </button>

      {/* Dots */}
      <div className="absolute left-1/2 top-4 flex -translate-x-1/2 gap-1.5">
        {slides.map((_, i) => (
          <button key={i} onClick={() => setIdx(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${i === idx ? 'w-5 bg-white' : 'w-1.5 bg-white/40'}`} />
        ))}
      </div>
    </div>
  );
}

/* ─── MAIN COMPONENT ─────────────────────────────────────── */
export function MegaMenu({ isOpen, onClose, lang }: MegaMenuProps) {
  const [openSection, setOpenSection] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    if (!isOpen) setOpenSection(null);
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    const h = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', h);
    return () => document.removeEventListener('keydown', h);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div key="bd"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div key="panel"
            initial={{ opacity: 0, y: -24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 top-0 z-50 max-h-screen overflow-y-auto bg-white shadow-2xl"
            onClick={e => e.stopPropagation()}
          >

            {/* ── HEADER BAR ── */}
            <div className="border-b border-neutral-100 bg-white">
              <div className="container-custom flex h-20 items-center justify-between">
                <Link href={`/${lang}`} onClick={onClose} className="flex items-center gap-4">
                  <div className="flex size-14 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-neutral-50 ring-1 ring-neutral-100">
                    <Image src="/images/logos/wbs-logo.webp" alt="WBS" width={149} height={111} className="h-12 w-12 object-contain" />
                  </div>
                  <div className="border-l border-neutral-200 pl-4">
                    <p className="text-base font-bold text-neutral-900">Willy-Brandt-Schule</p>
                    <p className="text-xs text-neutral-500">Warschau · Warszawa · seit 1978</p>
                  </div>
                </Link>
                <button onClick={onClose}
                  className="flex items-center gap-2 rounded-full border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-600 transition-colors hover:border-red-200 hover:bg-red-50 hover:text-red-600">
                  <X className="size-4" />
                  <span className="hidden sm:inline">
                    {lang === 'pl' ? 'Zamknij' : lang === 'de' ? 'Schließen' : 'Close'}
                  </span>
                </button>
              </div>
            </div>

            {/* ── DESKTOP CONTENT ── */}
            <div className="container-custom hidden py-8 lg:block">
              <div className="grid grid-cols-12 gap-6">

                {/* 3 nav columns — col-span-3 each = 9 total */}
                {navSections.map((section, si) => (
                  <div key={section.key} className="col-span-3">
                    {/* Section header */}
                    <div className={`mb-4 flex items-center justify-between rounded-xl ${section.color} px-4 py-3`}>
                      <span className="text-sm font-bold text-white">{tr(section.label, lang)}</span>
                      <Link
                        href={`/${lang}/${section.key === 'about' ? 'about' : section.key === 'parents' ? 'parents' : 'students'}`}
                        onClick={onClose}
                        className="text-xs font-medium text-white/80 transition-colors hover:text-white"
                      >
                        {lang === 'pl' ? 'Wszystko →' : lang === 'de' ? 'Alle →' : 'All →'}
                      </Link>
                    </div>

                    {/* Links */}
                    <ul className="space-y-0.5">
                      {section.links.map((link, li) => (
                        <motion.li key={link.url}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: si * 0.05 + li * 0.03, duration: 0.2 }}
                        >
                          <Link
                            href={`/${lang}${link.url}`}
                            onClick={onClose}
                            className="group flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-neutral-600 transition-all hover:bg-neutral-50 hover:text-neutral-900"
                          >
                            <ArrowRight className="size-3 shrink-0 text-neutral-300 transition-colors group-hover:text-red-500" />
                            {tr(link.label, lang)}
                          </Link>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                ))}

                {/* Photo slider — col-span-3 */}
                <div className="col-span-3">
                  <PhotoSlider lang={lang} isOpen={isOpen} />
                </div>

              </div>
            </div>

            {/* ── MOBILE CONTENT ── */}
            <div className="lg:hidden">
              <div className="divide-y divide-neutral-100">
                {navSections.map((section) => (
                  <div key={section.key}>
                    <button
                      onClick={() => setOpenSection(openSection === section.key ? null : section.key)}
                      className="flex w-full items-center justify-between px-6 py-4"
                    >
                      <div className="flex items-center gap-3">
                        <span className={`size-2.5 rounded-full ${section.color}`} />
                        <span className="font-semibold text-neutral-900">{tr(section.label, lang)}</span>
                      </div>
                      <ChevronDown className={`size-5 text-neutral-400 transition-transform duration-200 ${openSection === section.key ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {openSection === section.key && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }} className="overflow-hidden"
                        >
                          <div className="grid grid-cols-2 gap-1 bg-neutral-50 px-4 pb-4">
                            {section.links.map((link) => (
                              <Link key={link.url} href={`/${lang}${link.url}`} onClick={onClose}
                                className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-neutral-600 hover:bg-white hover:text-red-600">
                                <ArrowRight className="size-3 shrink-0 text-neutral-300" />
                                {tr(link.label, lang)}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              {/* Mobile CTA */}
              <div className="m-4 overflow-hidden rounded-2xl bg-red-600 p-6">
                <p className="mb-1 text-xs font-bold uppercase tracking-widest text-red-200">
                  {lang === 'pl' ? 'Rekrutacja' : lang === 'de' ? 'Aufnahme' : 'Admissions'}
                </p>
                <p className="mb-3 text-xl font-bold text-white">2026/27</p>
                <Link href={`/${lang}/parents/recruitment`} onClick={onClose}
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-red-600 hover:bg-red-50">
                  {lang === 'pl' ? 'Dowiedz się więcej' : lang === 'de' ? 'Mehr erfahren' : 'Learn more'}
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>

            {/* ── QUICK ACTIONS STRIP ── */}
            <div className="border-t border-neutral-100 bg-neutral-50">
              <div className="container-custom flex flex-wrap items-center gap-2 py-3">
                <span className="mr-1 text-[11px] font-bold uppercase tracking-widest text-neutral-400">
                  {lang === 'pl' ? 'Szybkie linki:' : lang === 'de' ? 'Schnellzugriff:' : 'Quick links:'}
                </span>
                {quickActions.map((a) => (
                  <Link key={a.url} href={`/${lang}${a.url}`} onClick={onClose}
                    className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-xs font-medium text-neutral-600 transition-all hover:border-red-200 hover:text-red-600">
                    <a.icon className="size-3.5" />
                    {tr(a.label, lang)}
                  </Link>
                ))}
              </div>
            </div>

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
