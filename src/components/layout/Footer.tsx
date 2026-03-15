'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  lang: string;
}

export default function Footer({ lang }: FooterProps) {
  const t = useTranslations();
  const [currentYear, setCurrentYear] = useState(2026);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [newsletterMsg, setNewsletterMsg] = useState('');

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const handleNewsletter = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterStatus('loading');
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: newsletterEmail, locale: lang }),
      });
      const data = await res.json();
      if (data.success) {
        setNewsletterStatus('success');
        setNewsletterMsg(data.data.message);
        setNewsletterEmail('');
      } else {
        setNewsletterStatus('error');
        setNewsletterMsg(data.error || 'Error');
      }
    } catch {
      setNewsletterStatus('error');
      setNewsletterMsg('Network error');
    }
    setTimeout(() => setNewsletterStatus('idle'), 4000);
  };

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
    <footer className="border-t border-neutral-200 bg-neutral-50">
      {/* Main Footer */}
      <div className="container-custom py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Brand & Contact - Takes 5 columns */}
          <div className="lg:col-span-5">
            <Link href={`/${lang}`} className="group mb-6 inline-block">
              <Image
                src="/images/logos/wbs-logo.webp"
                alt="WBS — Willy Brandt Schule Warschau"
                width={140}
                height={104}
                className="h-14 w-auto object-contain transition-opacity group-hover:opacity-80"
              />
            </Link>
            
            <p className="mb-8 max-w-sm leading-relaxed text-neutral-600">
              {lang === 'pl'
                ? 'Polsko-Niemiecka Szkoła Spotkań i Dialogu im. Willy\'ego Brandta w Warszawie'
                : lang === 'de'
                ? 'Deutsch-Polnische Begegnungsschule Willy-Brandt-Schule Warschau'
                : 'Polish-German School of Meetings and Dialogue named after Willy Brandt'}
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-neutral-200 bg-white">
                  <MapPin className="size-5 text-red-600" />
                </div>
                <div className="whitespace-pre-line pt-2 text-sm text-neutral-600">
                  {c.address}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-neutral-200 bg-white">
                  <Phone className="size-5 text-red-600" />
                </div>
                <a href="tel:+48226422705" className="text-sm text-neutral-600 transition-colors hover:text-red-600">
                  +48 22 642 27 05
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-neutral-200 bg-white">
                  <Mail className="size-5 text-red-600" />
                </div>
                <a href="mailto:sekretariat@wbs.pl" className="text-sm text-neutral-600 transition-colors hover:text-red-600">
                  sekretariat@wbs.pl
                </a>
              </div>
            </div>
          </div>

          {/* Links Grid - Takes 4 columns */}
          <div className="grid grid-cols-3 gap-6 lg:col-span-4">
            {/* Quick Links */}
            <div>
              <h3 className="mb-4 text-sm font-semibold text-black">
                {c.quickLinksTitle}
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-1 text-sm text-neutral-600 transition-colors hover:text-red-600"
                    >
                      {link.label}
                      <ArrowUpRight className="size-3 -translate-y-1 translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Parent Zone */}
            <div>
              <h3 className="mb-4 text-sm font-semibold text-black">
                {c.parentZoneTitle}
              </h3>
              <ul className="space-y-3">
                {parentLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-1 text-sm text-neutral-600 transition-colors hover:text-red-600"
                    >
                      {link.label}
                      <ArrowUpRight className="size-3 -translate-y-1 translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Student Zone */}
            <div>
              <h3 className="mb-4 text-sm font-semibold text-black">
                {c.studentZoneTitle}
              </h3>
              <ul className="space-y-3">
                {studentLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-1 text-sm text-neutral-600 transition-colors hover:text-red-600"
                    >
                      {link.label}
                      <ArrowUpRight className="size-3 -translate-y-1 translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter - Takes 3 columns */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-neutral-200 bg-white p-6">
              <h3 className="mb-2 font-semibold text-black">
                {c.newsletterTitle}
              </h3>
              <p className="mb-4 text-sm text-neutral-600">
                {c.newsletterDesc}
              </p>
              {newsletterStatus === 'success' ? (
                <p className="py-2 text-sm font-medium text-green-600">{newsletterMsg}</p>
              ) : (
                <form onSubmit={handleNewsletter} className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    required
                    className="flex-1 rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-2.5 text-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                  <button
                    type="submit"
                    disabled={newsletterStatus === 'loading'}
                    className="rounded-xl bg-red-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-red-700 disabled:opacity-50"
                  >
                    {newsletterStatus === 'loading' ? '...' : c.newsletterButton}
                  </button>
                </form>
              )}
              {newsletterStatus === 'error' && (
                <p className="mt-1 text-xs text-red-500">{newsletterMsg}</p>
              )}
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <p className="mb-3 text-sm text-neutral-500">
                {lang === 'pl' ? 'Obserwuj nas' : lang === 'de' ? 'Folgen Sie uns' : 'Follow us'}
              </p>
              <div className="flex gap-3">
                <a
                  href="https://facebook.com/wbswarschau"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex size-10 items-center justify-center rounded-xl border border-neutral-200 bg-white transition-all hover:border-red-200 hover:bg-red-50"
                  aria-label="Facebook"
                >
                  <Facebook className="size-4 text-neutral-600 transition-colors group-hover:text-red-600" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex size-10 items-center justify-center rounded-xl border border-neutral-200 bg-white transition-all hover:border-red-200 hover:bg-red-50"
                  aria-label="Instagram"
                >
                  <Instagram className="size-4 text-neutral-600 transition-colors group-hover:text-red-600" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex size-10 items-center justify-center rounded-xl border border-neutral-200 bg-white transition-all hover:border-red-200 hover:bg-red-50"
                  aria-label="YouTube"
                >
                  <Youtube className="size-4 text-neutral-600 transition-colors group-hover:text-red-600" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-200">
        <div className="container-custom py-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            {/* Copyright */}
            <p className="text-sm text-neutral-500">
              © {currentYear} WBS School. {lang === 'pl' ? 'Wszelkie prawa zastrzeżone.' : lang === 'de' ? 'Alle Rechte vorbehalten.' : 'All rights reserved.'}
            </p>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                href={`/${lang}/privacy`}
                className="text-sm text-neutral-500 transition-colors hover:text-red-600"
              >
                {t('footer.legalLinks.privacy')}
              </Link>
              <Link
                href={`/${lang}/cookies`}
                className="text-sm text-neutral-500 transition-colors hover:text-red-600"
              >
                {t('footer.legalLinks.cookies')}
              </Link>
              <Link
                href={`/${lang}/accessibility`}
                className="text-sm text-neutral-500 transition-colors hover:text-red-600"
              >
                {t('footer.legalLinks.accessibility')}
              </Link>
              <Link
                href={`/${lang}/impressum`}
                className="text-sm text-neutral-500 transition-colors hover:text-red-600"
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
