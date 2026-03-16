'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Menu, Globe, ChevronDown, Search, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { MegaMenu } from './MegaMenu';

interface HeaderProps {
  lang: string;
}

interface Language {
  code: string;
  label: string;
  flag: string;
}

const languages: Language[] = [
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  { code: 'pl', label: 'Polski', flag: '🇵🇱' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
];

const announcements = [
  {
    text: { pl: 'Rekrutacja 2026/27 jest teraz otwarta', de: 'Anmeldung 2026/27 ist jetzt geöffnet', en: 'Admissions 2026/27 are now open' },
    cta: { pl: 'Zapisz się', de: 'Jetzt anmelden', en: 'Apply now' },
    href: '/parents/recruitment',
    highlight: true,
  },
  {
    text: { pl: 'Polsko-Niemiecka Szkoła Spotkań i Dialogu', de: 'Deutsch-Polnische Begegnungsschule', en: 'Polish-German School of Meetings & Dialogue' },
    cta: null,
    href: null,
    highlight: false,
  },
  {
    text: { pl: 'Akademia Piłkarska WBS × BVB Dortmund', de: 'WBS Fußballakademie × BVB Dortmund', en: 'WBS Football Academy × BVB Dortmund' },
    cta: { pl: 'Odkryj', de: 'Entdecken', en: 'Discover' },
    href: '/students/football-academy',
    highlight: false,
  },
];

export default function Header({ lang }: HeaderProps) {
  const t = useTranslations();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [announcementIndex, setAnnouncementIndex] = useState(0);
  const [announcementVisible, setAnnouncementVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsLanguageOpen(false);
  }, [lang]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.language-switcher')) {
        setIsLanguageOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // Cycle announcements with fade transition
  useEffect(() => {
    const interval = setInterval(() => {
      setAnnouncementVisible(false);
      setTimeout(() => {
        setAnnouncementIndex((i) => (i + 1) % announcements.length);
        setAnnouncementVisible(true);
      }, 300);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentLanguage = languages.find((l) => l.code === lang) || languages[0];
  const menuLabel = lang === 'pl' ? 'Menu' : lang === 'de' ? 'Menü' : 'Menu';
  const searchLabel = lang === 'pl' ? 'Szukaj' : lang === 'de' ? 'Suchen' : 'Search';
  const activeAnnouncement = announcements[announcementIndex];
  const announcementText = activeAnnouncement.text[lang as keyof typeof activeAnnouncement.text];
  const announcementCta = activeAnnouncement.cta
    ? activeAnnouncement.cta[lang as keyof typeof activeAnnouncement.cta]
    : null;

  return (
    <>
      {/* Dark Utility Bar */}
      <div className={cn(
        'fixed inset-x-0 top-0 z-40 bg-neutral-900 transition-all duration-300',
        isScrolled ? 'h-0 overflow-hidden opacity-0' : 'h-20'
      )}>
        <div className="container-custom flex h-20 items-center justify-between gap-4">

          {/* Left: Rotating announcement */}
          <div className="flex min-w-0 flex-1 items-center gap-3 overflow-hidden">
            <span
              className={cn(
                'flex min-w-0 items-center gap-2.5 transition-all duration-300',
                announcementVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1'
              )}
            >
              {activeAnnouncement.highlight && (
                <span className="hidden shrink-0 rounded-full bg-red-600 px-2 py-0.5 text-xs font-bold uppercase tracking-wider text-white sm:inline">
                  {lang === 'pl' ? 'Nowe' : lang === 'de' ? 'Neu' : 'New'}
                </span>
              )}
              <span className="truncate text-sm text-neutral-300">
                {announcementText}
              </span>
              {announcementCta && activeAnnouncement.href && (
                <Link
                  href={`/${lang}${activeAnnouncement.href}`}
                  className="hidden shrink-0 items-center gap-1 text-sm font-semibold text-red-400 transition-colors hover:text-red-300 sm:flex"
                >
                  {announcementCta}
                  <ArrowRight className="size-3.5" />
                </Link>
              )}
            </span>
          </div>

          {/* Center: Partner logos */}
          <div className="hidden items-center gap-3 md:flex">
            <a
              href="https://bvbwbswarsaw.pl"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center rounded-lg bg-white px-3 py-1.5 transition-opacity hover:opacity-80"
              title="BVB Evonik Football Academy – WBS Warsaw"
            >
              <Image
                src="/images/logos/bvb-academy-wbs.png"
                alt="BVB × WBS"
                width={140}
                height={40}
                className="h-10 object-contain"
                style={{ width: 'auto' }}
              />
            </a>
            <a
              href="https://deutscherkindergarten.pl"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center rounded-lg bg-white px-3 py-1.5 transition-opacity hover:opacity-80"
              title="WBS Deutscher Kindergarten"
            >
              <Image
                src="/images/logos/standalone-wbs-przedszkole-logo.jpg"
                alt="WBS Przedszkole"
                width={100}
                height={40}
                className="h-10 object-contain"
                style={{ width: 'auto' }}
              />
            </a>
            <a
              href="https://polen.diplo.de"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center rounded-lg bg-white px-3 py-1.5 transition-opacity hover:opacity-80"
              title="Botschaft der Bundesrepublik Deutschland"
            >
              <Image
                src="/images/logos/standalone-ambasada-logo.png"
                alt="Botschaft Deutschland"
                width={100}
                height={40}
                className="h-10 object-contain"
                style={{ width: 'auto' }}
              />
            </a>
          </div>

          {/* Right: Facebook */}
          <div className="flex shrink-0 items-center gap-3">
            {/* Facebook */}
            <a
              href="https://facebook.com/wbswarschau"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 transition-colors hover:text-blue-500"
              aria-label="Facebook"
            >
              <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={cn(
          'fixed inset-x-0 z-40 transition-all duration-300',
          isScrolled
            ? 'top-0 border-b border-neutral-100 bg-white/95 shadow-sm backdrop-blur-md'
            : 'top-20 bg-white border-b border-neutral-100'
        )}
      >
        <div className="container-custom">
          <div className="flex h-16 items-center justify-between md:h-20">
            {/* Logo */}
            <Link href={`/${lang}`} className="group flex items-center">
              <Image
                src="/images/logos/wbs-logo.webp"
                alt="WBS — Willy Brandt Schule Warschau"
                width={140}
                height={104}
                className="h-12 object-contain transition-opacity group-hover:opacity-80 md:h-16"
                style={{ width: 'auto' }}
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-1 lg:flex">
              <Link
                href={`/${lang}/news`}
                className="rounded-lg px-4 py-2 text-base font-semibold text-neutral-700 transition-colors hover:text-red-600"
              >
                {lang === 'pl' ? 'Aktualności' : lang === 'de' ? 'Aktuelles' : 'News'}
              </Link>

              <Link
                href={`/${lang}/events`}
                className="rounded-lg px-4 py-2 text-base font-semibold text-neutral-700 transition-colors hover:text-red-600"
              >
                {lang === 'pl' ? 'Wydarzenia' : lang === 'de' ? 'Veranstaltungen' : 'Events'}
              </Link>

              <button
                onClick={() => setIsMenuOpen(true)}
                className={cn(
                  'ml-2 flex items-center gap-2 px-4 py-2',
                  'rounded-lg text-base font-semibold',
                  'transition-all duration-200',
                  isMenuOpen
                    ? 'bg-red-600 text-white'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-red-50 hover:text-red-600'
                )}
                aria-expanded={isMenuOpen}
                aria-controls="mega-menu"
                aria-label={menuLabel}
              >
                <Menu className="size-4" />
                <span>{menuLabel}</span>
              </button>
            </nav>

            {/* Right side actions */}
            <div className="flex items-center gap-2">
              <Link
                href={`/${lang}/search`}
                className="hidden size-10 items-center justify-center rounded-lg transition-colors hover:bg-neutral-100 sm:flex"
                aria-label={searchLabel}
              >
                <Search className="size-5 text-neutral-600" />
              </Link>

              {/* Language Switcher */}
              <div className="language-switcher relative">
                <button
                  onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                  className={cn(
                    'flex items-center gap-2 rounded-lg px-3 py-2',
                    'transition-colors duration-200',
                    isLanguageOpen ? 'bg-red-50 text-red-700' : 'hover:bg-neutral-100'
                  )}
                  aria-label={t('header.language')}
                  aria-expanded={isLanguageOpen}
                  aria-haspopup="true"
                >
                  <Globe className="size-5 text-neutral-600" />
                  <span className="hidden text-sm font-medium text-neutral-700 sm:inline-flex">
                    {currentLanguage.flag}
                  </span>
                  <ChevronDown className={cn(
                    'size-4 text-neutral-400 transition-transform duration-200',
                    isLanguageOpen && 'rotate-180'
                  )} />
                </button>

                {isLanguageOpen && (
                  <div className="absolute right-0 z-50 mt-2 w-48 animate-fade-in-up rounded-xl border border-neutral-200 bg-white py-2 shadow-lg">
                    {languages.map((language) => (
                      <Link
                        key={language.code}
                        href={`/${language.code}`}
                        className={cn(
                          'flex items-center gap-3 px-4 py-2.5 text-sm transition-colors',
                          lang === language.code
                            ? 'bg-red-50 text-red-700'
                            : 'text-neutral-700 hover:bg-neutral-50'
                        )}
                        onClick={() => setIsLanguageOpen(false)}
                      >
                        <span className="text-xl">{language.flag}</span>
                        <span>{language.label}</span>
                        {lang === language.code && (
                          <span className="ml-auto size-1.5 rounded-full bg-red-500" />
                        )}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(true)}
                className={cn(
                  'rounded-lg p-2 transition-colors lg:hidden',
                  isMenuOpen
                    ? 'bg-red-600 text-white'
                    : 'text-neutral-600 hover:bg-neutral-100'
                )}
                aria-label={menuLabel}
                aria-expanded={isMenuOpen}
              >
                <Menu className="size-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mega Menu */}
      <MegaMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        lang={lang as 'pl' | 'de' | 'en'}
      />
    </>
  );
}
