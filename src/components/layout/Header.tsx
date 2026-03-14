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
          'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg' 
            : 'bg-white'
        )}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href={`/${lang}`} className="flex items-center gap-3 group">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-primary-600 rounded-lg flex items-center justify-center group-hover:bg-primary-700 transition-colors">
                <GraduationCap className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
              <div className="hidden md:block">
                <p className="font-heading font-semibold text-neutral-900 text-sm leading-tight group-hover:text-primary-600 transition-colors">
                  Willy Brandt School
                </p>
                <p className="text-xs text-neutral-500">Warsaw</p>
              </div>
            </Link>

            {/* Desktop Navigation - Simplified with Mega Menu Trigger */}
            <nav className="hidden lg:flex items-center gap-1">
              {/* Quick Links */}
              <Link
                href={`/${lang}/news`}
                className="px-4 py-2 text-sm font-medium text-neutral-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
              >
                {lang === 'pl' ? 'Aktualności' : lang === 'de' ? 'Aktuelles' : 'News'}
              </Link>
              
              <Link
                href={`/${lang}/events`}
                className="px-4 py-2 text-sm font-medium text-neutral-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
              >
                {lang === 'pl' ? 'Wydarzenia' : lang === 'de' ? 'Veranstaltungen' : 'Events'}
              </Link>

              {/* Mega Menu Trigger */}
              <button
                onClick={() => setIsMenuOpen(true)}
                className={cn(
                  'flex items-center gap-2 px-4 py-2 ml-2',
                  'text-sm font-medium rounded-lg',
                  'transition-all duration-200',
                  isMenuOpen
                    ? 'bg-primary-600 text-white'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-primary-50 hover:text-primary-600'
                )}
                aria-expanded={isMenuOpen}
                aria-controls="mega-menu"
                aria-label={menuLabel}
              >
                <Menu className="w-4 h-4" />
                <span>{menuLabel}</span>
              </button>
            </nav>

            {/* Right side actions */}
            <div className="flex items-center gap-2">
              {/* Search - Desktop */}
              <Link
                href={`/${lang}/search`}
                className="hidden sm:flex items-center justify-center w-10 h-10 rounded-lg hover:bg-neutral-100 transition-colors"
                aria-label={searchLabel}
              >
                <Search className="w-5 h-5 text-neutral-600" />
              </Link>

              {/* Language Switcher */}
              <div className="relative language-switcher">
                <button
                  onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                  className={cn(
                    'flex items-center gap-2 px-3 py-2 rounded-lg',
                    'transition-colors duration-200',
                    isLanguageOpen ? 'bg-primary-50 text-primary-700' : 'hover:bg-neutral-100'
                  )}
                  aria-label={t('header.language')}
                  aria-expanded={isLanguageOpen}
                  aria-haspopup="true"
                >
                  <Globe className="w-5 h-5 text-neutral-600" />
                  <span className="hidden sm:inline-flex text-sm font-medium text-neutral-700">
                    {currentLanguage.flag}
                  </span>
                  <ChevronDown className={cn(
                    'w-4 h-4 text-neutral-400 transition-transform duration-200',
                    isLanguageOpen && 'rotate-180'
                  )} />
                </button>

                {/* Language Dropdown */}
                {isLanguageOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-neutral-200 py-2 animate-fade-in-up z-50">
                    {languages.map((language) => (
                      <Link
                        key={language.code}
                        href={`/${language.code}`}
                        className={cn(
                          'flex items-center gap-3 px-4 py-2.5 text-sm transition-colors',
                          lang === language.code
                            ? 'bg-primary-50 text-primary-700'
                            : 'text-neutral-700 hover:bg-neutral-50'
                        )}
                        onClick={() => setIsLanguageOpen(false)}
                      >
                        <span className="text-xl">{language.flag}</span>
                        <span>{language.label}</span>
                        {lang === language.code && (
                          <span className="ml-auto w-1.5 h-1.5 rounded-full bg-primary-500" />
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
                  'lg:hidden p-2 rounded-lg transition-colors',
                  isMenuOpen 
                    ? 'bg-primary-600 text-white' 
                    : 'hover:bg-neutral-100 text-neutral-600'
                )}
                aria-label={menuLabel}
                aria-expanded={isMenuOpen}
              >
                <Menu className="w-6 h-6" />
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
