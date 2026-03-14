'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from 'lucide-react';

interface FooterProps {
  lang: string;
}

// ============================================================================
// REORGANIZED FOOTER NAVIGATION
// ============================================================================
// Changes from v1:
// 1. FIXED: All URLs now use English format (consistent with navigation.json)
// 2. NEW: Added "For New Families" column for prospective parents
// 3. MODIFIED: Reorganized columns for better user flow
// 4. FIXED: Removed Polish URL paths that caused inconsistencies

export default function Footer({ lang }: FooterProps) {
  const t = useTranslations();
  const [currentYear, setCurrentYear] = useState(2026);
  
  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  // Column 1: About & General
  const aboutLinks = {
    pl: [
      { href: '/about', label: 'O szkole' },
      { href: '/about/staff', label: 'Zespół' },
      { href: '/contact', label: 'Kontakt' },
      { href: '/news', label: 'Aktualności' },
      { href: '/faq', label: 'FAQ' },
    ],
    de: [
      { href: '/about', label: 'Über die Schule' },
      { href: '/about/staff', label: 'Team' },
      { href: '/contact', label: 'Kontakt' },
      { href: '/news', label: 'Aktuelles' },
      { href: '/faq', label: 'FAQ' },
    ],
    en: [
      { href: '/about', label: 'About School' },
      { href: '/about/staff', label: 'Team' },
      { href: '/contact', label: 'Contact' },
      { href: '/news', label: 'News' },
      { href: '/faq', label: 'FAQ' },
    ],
  };

  // NEW Column 2: For New Families (Admissions)
  const newFamiliesLinks = {
    pl: [
      { href: '/admissions', label: 'Rekrutacja' },
      { href: '/admissions/process', label: 'Proces rekrutacji' },
      { href: '/admissions/tuition', label: 'Czesne' },
      { href: '/admissions/visit', label: 'Dzień otwarty' },
      { href: '/admissions/apply', label: 'Zapisz dziecko' },
    ],
    de: [
      { href: '/admissions', label: 'Aufnahme' },
      { href: '/admissions/process', label: 'Aufnahmeprozess' },
      { href: '/admissions/tuition', label: 'Schulgeld' },
      { href: '/admissions/visit', label: 'Tag der offenen Tür' },
      { href: '/admissions/apply', label: 'Anmeldung' },
    ],
    en: [
      { href: '/admissions', label: 'Admissions' },
      { href: '/admissions/process', label: 'Admission Process' },
      { href: '/admissions/tuition', label: 'Tuition' },
      { href: '/admissions/visit', label: 'Open Day' },
      { href: '/admissions/apply', label: 'Apply Now' },
    ],
  };

  // Column 3: For Current Parents (restructured)
  const parentLinks = {
    pl: [
      { href: '/parents/forms', label: 'Formularze' },
      { href: '/parents/regulations', label: 'Regulaminy' },
      { href: '/parents/calendar', label: 'Kalendarz' },
      { href: '/parents/daily-life/canteen', label: 'Stołówka' },
      { href: '/portal/parent', label: 'Portal rodzica' },
    ],
    de: [
      { href: '/parents/forms', label: 'Formulare' },
      { href: '/parents/regulations', label: 'Ordnungen' },
      { href: '/parents/calendar', label: 'Kalender' },
      { href: '/parents/daily-life/canteen', label: 'Kantine' },
      { href: '/portal/parent', label: 'Elternportal' },
    ],
    en: [
      { href: '/parents/forms', label: 'Forms' },
      { href: '/parents/regulations', label: 'Regulations' },
      { href: '/parents/calendar', label: 'Calendar' },
      { href: '/parents/daily-life/canteen', label: 'Canteen' },
      { href: '/portal/parent', label: 'Parent Portal' },
    ],
  };

  // Column 4: For Students (restructured with extracurricular)
  const studentLinks = {
    pl: [
      { href: '/students/projects', label: 'Projekty' },
      { href: '/students/extracurricular', label: 'Zajęcia dodatkowe' },
      { href: '/students/library', label: 'Biblioteka' },
      { href: '/students/extracurricular/student-council', label: 'Samorząd' },
      { href: '/portal/student', label: 'Portal ucznia' },
    ],
    de: [
      { href: '/students/projects', label: 'Projekte' },
      { href: '/students/extracurricular', label: 'Zusatzangebote' },
      { href: '/students/library', label: 'Bibliothek' },
      { href: '/students/extracurricular/student-council', label: 'SV' },
      { href: '/portal/student', label: 'Schülerportal' },
    ],
    en: [
      { href: '/students/projects', label: 'Projects' },
      { href: '/students/extracurricular', label: 'Activities' },
      { href: '/students/library', label: 'Library' },
      { href: '/students/extracurricular/student-council', label: 'Student Council' },
      { href: '/portal/student', label: 'Student Portal' },
    ],
  };

  // Column 5: Legal (unchanged)
  const legalLinks = {
    pl: [
      { href: '/privacy', label: 'Polityka prywatności' },
      { href: '/cookies', label: 'Polityka cookies' },
      { href: '/accessibility', label: 'Dostępność' },
      { href: '/impressum', label: 'Impressum' },
    ],
    de: [
      { href: '/privacy', label: 'Datenschutz' },
      { href: '/cookies', label: 'Cookies' },
      { href: '/accessibility', label: 'Barrierefreiheit' },
      { href: '/impressum', label: 'Impressum' },
    ],
    en: [
      { href: '/privacy', label: 'Privacy' },
      { href: '/cookies', label: 'Cookies' },
      { href: '/accessibility', label: 'Accessibility' },
      { href: '/impressum', label: 'Imprint' },
    ],
  };

  const currentAboutLinks = aboutLinks[lang as keyof typeof aboutLinks] || aboutLinks.pl;
  const currentNewFamiliesLinks = newFamiliesLinks[lang as keyof typeof newFamiliesLinks] || newFamiliesLinks.pl;
  const currentParentLinks = parentLinks[lang as keyof typeof parentLinks] || parentLinks.pl;
  const currentStudentLinks = studentLinks[lang as keyof typeof studentLinks] || studentLinks.pl;
  const currentLegalLinks = legalLinks[lang as keyof typeof legalLinks] || legalLinks.pl;

  // Column titles
  const columnTitles = {
    about: {
      pl: 'O nas',
      de: 'Über uns',
      en: 'About Us',
    },
    newFamilies: {
      pl: 'Dla nowych rodziców',
      de: 'Für neue Eltern',
      en: 'For New Families',
    },
    parents: {
      pl: 'Dla rodziców',
      de: 'Für Eltern',
      en: 'For Parents',
    },
    students: {
      pl: 'Dla uczniów',
      de: 'Für Schüler',
      en: 'For Students',
    },
    legal: {
      pl: 'Informacje prawne',
      de: 'Rechtliches',
      en: 'Legal',
    },
  };

  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 md:gap-12">
          {/* School Info - spans 2 columns */}
          <div className="lg:col-span-2">
            <Link href={`/${lang}`} className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">WBS</span>
              </div>
              <div>
                <p className="font-heading font-semibold text-white">WBS School</p>
                <p className="text-xs text-neutral-400">Willy Brandt Schule</p>
              </div>
            </Link>
            <p className="text-sm text-neutral-400 mb-6 max-w-sm">
              {lang === 'pl'
                ? 'Polsko-Niemiecka Szkoła Spotkań i Dialogu im. Willy\'ego Brandta w Warszawie'
                : lang === 'de'
                ? 'Deutsch-Polnische Begegnungsschule Willy-Brandt-Schule Warschau'
                : 'Polish-German School of Meetings and Dialogue named after Willy Brandt'}
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm">
                  ul. Św. Urszuli Ledóchowskiej 3
                  <br />
                  02-972 Warszawa, Poland
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <span className="text-sm">+48 22 642 27 05</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <span className="text-sm">sekretariat@wbs.pl</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4 mt-6">
              <a
                href="https://facebook.com/wbswarschau"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-neutral-800 rounded-lg hover:bg-primary-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-neutral-800 rounded-lg hover:bg-primary-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-neutral-800 rounded-lg hover:bg-primary-600 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* About Links */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">
              {columnTitles.about[lang as keyof typeof columnTitles.about]}
            </h3>
            <ul className="space-y-2">
              {currentAboutLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={`/${lang}${link.href}`}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* NEW: For New Families */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">
              {columnTitles.newFamilies[lang as keyof typeof columnTitles.newFamilies]}
            </h3>
            <ul className="space-y-2">
              {currentNewFamiliesLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={`/${lang}${link.href}`}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* For Parents */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">
              {columnTitles.parents[lang as keyof typeof columnTitles.parents]}
            </h3>
            <ul className="space-y-2">
              {currentParentLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href.startsWith('/portal') ? link.href : `/${lang}${link.href}`}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* For Students */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">
              {columnTitles.students[lang as keyof typeof columnTitles.students]}
            </h3>
            <ul className="space-y-2">
              {currentStudentLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href.startsWith('/portal') ? link.href : `/${lang}${link.href}`}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <p className="text-sm text-neutral-400">
              {t('footer.copyright', { year: currentYear })}
            </p>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-6">
              {currentLegalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={`/${lang}${link.href}`}
                  className="text-sm text-neutral-400 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
