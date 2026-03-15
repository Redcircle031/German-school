'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Menu, X, Globe, ChevronDown, Search, GraduationCap } from 'lucide-react';
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
  { code: 'pl', label: 'Polski', flag: '🇵🇱' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
];

export default function Header({ lang }: HeaderProps) {
  const t = useTranslations();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll for header styling
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on language change
  useEffect(() => {
    setIsMenuOpen(false);
    setIsLanguageOpen(false);
  }, [lang]);

  // Close language dropdown when clicking outside
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

  const currentLanguage = languages.find((l) => l.code === lang) || languages[0];

  // Get translated labels
  const menuLabel = lang === 'pl' ? 'Menu' : lang === 'de' ? 'Menü' : 'Menu';
  const searchLabel = lang === 'pl' ? 'Szukaj' : lang === 'de' ? 'Suchen' : 'Search';

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-40 transition-all duration-300',
          isScrolled
            ? 'border-b border-neutral-100 bg-white/95 shadow-sm backdrop-blur-md'
            : 'bg-white'
        )}
      >
        <div className="container-custom">
          <div className="flex h-16 items-center justify-between md:h-20">
            {/* Logo */}
            <Link href={`/${lang}`} className="group flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-red-600 transition-colors group-hover:bg-red-700 md:size-12">
                <span className="text-sm font-extrabold tracking-tight text-white md:text-base">WBS</span>
              </div>
              <div className="hidden md:block">
                <p className="font-heading text-sm font-bold leading-tight text-neutral-900 transition-colors group-hover:text-red-600">
                  Willy Brandt School
                </p>
                <p className="text-xs tracking-wide text-neutral-400">Warsaw</p>
              </div>
            </Link>

            {/* Desktop Navigation - Simplified with Mega Menu Trigger */}
            <nav className="hidden items-center gap-1 lg:flex">
              {/* Quick Links */}
              <Link
                href={`/${lang}/news`}
                className="rounded-lg px-4 py-2 text-sm font-medium text-neutral-700 transition-colors hover:text-red-600"
              >
                {lang === 'pl' ? 'Aktualności' : lang === 'de' ? 'Aktuelles' : 'News'}
              </Link>

              <Link
                href={`/${lang}/events`}
                className="rounded-lg px-4 py-2 text-sm font-medium text-neutral-700 transition-colors hover:text-red-600"
              >
                {lang === 'pl' ? 'Wydarzenia' : lang === 'de' ? 'Veranstaltungen' : 'Events'}
              </Link>

              {/* Mega Menu Trigger */}
              <button
                onClick={() => setIsMenuOpen(true)}
                className={cn(
                  'ml-2 flex items-center gap-2 px-4 py-2',
                  'rounded-lg text-sm font-medium',
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
              {/* Search - Desktop */}
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

                {/* Language Dropdown */}
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

      {/* Mega Menu Overlay */}
      <MegaMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        lang={lang as 'pl' | 'de' | 'en'}
      />
    </>
  );
}
