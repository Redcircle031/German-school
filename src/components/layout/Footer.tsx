'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  lang: string;
}

export default function Footer({ lang }: FooterProps) {
  const t = useTranslations();
  const [currentYear, setCurrentYear] = useState(2026);
  
  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const content = {
    pl: {
      quickLinksTitle: 'Szybkie linki',
      parentZoneTitle: 'Strefa rodzica',
      studentZoneTitle: 'Strefa ucznia',
      address: 'ul. Św. Urszuli Ledóchowskiej 3\n02-972 Warszawa',
      newsletterTitle: 'Bądź na bieżąco',
      newsletterDesc: 'Zapisz się do newslettera i otrzymuj najnowsze informacje ze szkoły.',
      newsletterButton: 'Zapisz się',
    },
    de: {
      quickLinksTitle: 'Schnelllinks',
      parentZoneTitle: 'Elternbereich',
      studentZoneTitle: 'Schülerbereich',
      address: 'ul. Św. Urszuli Ledóchowskiej 3\n02-972 Warschau',
      newsletterTitle: 'Bleiben Sie auf dem Laufenden',
      newsletterDesc: 'Abonnieren Sie unseren Newsletter für die neuesten Schulnachrichten.',
      newsletterButton: 'Anmelden',
    },
    en: {
      quickLinksTitle: 'Quick links',
      parentZoneTitle: 'Parent zone',
      studentZoneTitle: 'Student zone',
      address: '3 Św. Urszuli Ledóchowskiej St\n02-972 Warsaw, Poland',
      newsletterTitle: 'Stay updated',
      newsletterDesc: 'Subscribe to our newsletter for the latest school news.',
      newsletterButton: 'Subscribe',
    },
  };

  const c = content[lang as keyof typeof content] || content.pl;

  const quickLinks = [
    { href: `/${lang}/about`, label: lang === 'pl' ? 'O szkole' : lang === 'de' ? 'Über uns' : 'About' },
    { href: `/${lang}/parents/recruitment`, label: lang === 'pl' ? 'Rekrutacja' : lang === 'de' ? 'Rekrutierung' : 'Admissions' },
    { href: `/${lang}/news`, label: lang === 'pl' ? 'Aktualności' : lang === 'de' ? 'Aktuelles' : 'News' },
    { href: `/${lang}/contact`, label: lang === 'pl' ? 'Kontakt' : lang === 'de' ? 'Kontakt' : 'Contact' },
  ];

  const parentLinks = [
    { href: `/${lang}/parents/forms`, label: lang === 'pl' ? 'Formularze' : lang === 'de' ? 'Formulare' : 'Forms' },
    { href: `/${lang}/parents/regulations`, label: lang === 'pl' ? 'Regulaminy' : lang === 'de' ? 'Ordnungen' : 'Regulations' },
    { href: `/${lang}/parents/canteen`, label: lang === 'pl' ? 'Stołówka' : lang === 'de' ? 'Kantine' : 'Canteen' },
    { href: `/${lang}/parent-portal`, label: lang === 'pl' ? 'Portal rodzica' : lang === 'de' ? 'Elternportal' : 'Parent Portal' },
  ];

  const studentLinks = [
    { href: `/${lang}/students/projects`, label: lang === 'pl' ? 'Projekty' : lang === 'de' ? 'Projekte' : 'Projects' },
    { href: `/${lang}/students/football-academy`, label: lang === 'pl' ? 'Akademie' : lang === 'de' ? 'Akademien' : 'Academies' },
    { href: `/${lang}/students/library`, label: lang === 'pl' ? 'Biblioteka' : lang === 'de' ? 'Bibliothek' : 'Library' },
    { href: `/${lang}/student-portal`, label: lang === 'pl' ? 'Portal ucznia' : lang === 'de' ? 'Schülerportal' : 'Student Portal' },
  ];

  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      {/* Main Footer */}
      <div className="container-custom py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand & Contact - Takes 5 columns */}
          <div className="lg:col-span-5">
            <Link href={`/${lang}`} className="inline-flex items-center gap-3 mb-6 group">
              <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center group-hover:bg-red-700 transition-colors">
                <span className="text-white font-bold text-xl">WBS</span>
              </div>
              <div>
                <p className="font-heading font-bold text-black">WBS School</p>
                <p className="text-xs text-neutral-500">Willy Brandt Schule</p>
              </div>
            </Link>
            
            <p className="text-neutral-600 mb-8 max-w-sm leading-relaxed">
              {lang === 'pl'
                ? 'Polsko-Niemiecka Szkoła Spotkań i Dialogu im. Willy\'ego Brandta w Warszawie'
                : lang === 'de'
                ? 'Deutsch-Polnische Begegnungsschule Willy-Brandt-Schule Warschau'
                : 'Polish-German School of Meetings and Dialogue named after Willy Brandt'}
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-white rounded-lg border border-neutral-200 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-red-600" />
                </div>
                <div className="text-neutral-600 text-sm whitespace-pre-line pt-2">
                  {c.address}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-lg border border-neutral-200 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-red-600" />
                </div>
                <a href="tel:+48226422705" className="text-neutral-600 text-sm hover:text-red-600 transition-colors">
                  +48 22 642 27 05
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-lg border border-neutral-200 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-red-600" />
                </div>
                <a href="mailto:sekretariat@wbs.pl" className="text-neutral-600 text-sm hover:text-red-600 transition-colors">
                  sekretariat@wbs.pl
                </a>
              </div>
            </div>
          </div>

          {/* Links Grid - Takes 4 columns */}
          <div className="lg:col-span-4 grid grid-cols-3 gap-6">
            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-black mb-4 text-sm">
                {c.quickLinksTitle}
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-neutral-600 hover:text-red-600 transition-colors inline-flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Parent Zone */}
            <div>
              <h3 className="font-semibold text-black mb-4 text-sm">
                {c.parentZoneTitle}
              </h3>
              <ul className="space-y-3">
                {parentLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-neutral-600 hover:text-red-600 transition-colors inline-flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Student Zone */}
            <div>
              <h3 className="font-semibold text-black mb-4 text-sm">
                {c.studentZoneTitle}
              </h3>
              <ul className="space-y-3">
                {studentLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-neutral-600 hover:text-red-600 transition-colors inline-flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter - Takes 3 columns */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl p-6 border border-neutral-200">
              <h3 className="font-semibold text-black mb-2">
                {c.newsletterTitle}
              </h3>
              <p className="text-sm text-neutral-600 mb-4">
                {c.newsletterDesc}
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Email"
                  className="flex-1 px-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                />
                <button className="px-4 py-2.5 bg-red-600 text-white rounded-xl text-sm font-medium hover:bg-red-700 transition-colors">
                  {c.newsletterButton}
                </button>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <p className="text-sm text-neutral-500 mb-3">
                {lang === 'pl' ? 'Obserwuj nas' : lang === 'de' ? 'Folgen Sie uns' : 'Follow us'}
              </p>
              <div className="flex gap-3">
                <a
                  href="https://facebook.com/wbswarschau"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white border border-neutral-200 rounded-xl flex items-center justify-center hover:border-red-200 hover:bg-red-50 transition-all group"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4 text-neutral-600 group-hover:text-red-600 transition-colors" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white border border-neutral-200 rounded-xl flex items-center justify-center hover:border-red-200 hover:bg-red-50 transition-all group"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4 text-neutral-600 group-hover:text-red-600 transition-colors" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white border border-neutral-200 rounded-xl flex items-center justify-center hover:border-red-200 hover:bg-red-50 transition-all group"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4 text-neutral-600 group-hover:text-red-600 transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-200">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-sm text-neutral-500">
              © {currentYear} WBS School. {lang === 'pl' ? 'Wszelkie prawa zastrzeżone.' : lang === 'de' ? 'Alle Rechte vorbehalten.' : 'All rights reserved.'}
            </p>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                href={`/${lang}/privacy`}
                className="text-sm text-neutral-500 hover:text-red-600 transition-colors"
              >
                {t('footer.legalLinks.privacy')}
              </Link>
              <Link
                href={`/${lang}/cookies`}
                className="text-sm text-neutral-500 hover:text-red-600 transition-colors"
              >
                {t('footer.legalLinks.cookies')}
              </Link>
              <Link
                href={`/${lang}/accessibility`}
                className="text-sm text-neutral-500 hover:text-red-600 transition-colors"
              >
                {t('footer.legalLinks.accessibility')}
              </Link>
              <Link
                href={`/${lang}/impressum`}
                className="text-sm text-neutral-500 hover:text-red-600 transition-colors"
              >
                {t('footer.legalLinks.impressum')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
