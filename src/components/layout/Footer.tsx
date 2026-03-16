'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { MapPin, Phone, Mail, Facebook, ArrowUpRight } from 'lucide-react';

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

  const quickLinks = [
    { href: `/${lang}/about`, label: lang === 'pl' ? 'O szkole' : lang === 'de' ? 'Über uns' : 'About' },
    { href: `/${lang}/parents/recruitment`, label: lang === 'pl' ? 'Rekrutacja' : lang === 'de' ? 'Aufnahme' : 'Admissions' },
    { href: `/${lang}/events`, label: lang === 'pl' ? 'Kalendarz' : lang === 'de' ? 'Kalender' : 'Calendar' },
    { href: `/${lang}/news`, label: lang === 'pl' ? 'Aktualności' : lang === 'de' ? 'Aktuelles' : 'News' },
    { href: `/${lang}/contact`, label: lang === 'pl' ? 'Kontakt' : lang === 'de' ? 'Kontakt' : 'Contact' },
  ];

  const parentLinks = [
    { href: `/${lang}/parents/forms`, label: lang === 'pl' ? 'Formularze' : lang === 'de' ? 'Formulare' : 'Forms' },
    { href: `/${lang}/parents/regulations`, label: lang === 'pl' ? 'Regulaminy' : lang === 'de' ? 'Ordnungen' : 'Regulations' },
    { href: `/${lang}/parents/canteen`, label: lang === 'pl' ? 'Stołówka' : lang === 'de' ? 'Kantine' : 'Canteen' },
    { href: `/${lang}/parents/holidays-2025-26`, label: lang === 'pl' ? 'Ferie i wakacje' : lang === 'de' ? 'Ferien' : 'School holidays' },
    { href: `/${lang}/parent-portal`, label: lang === 'pl' ? 'Portal rodzica' : lang === 'de' ? 'Elternportal' : 'Parent portal' },
  ];

  const studentLinks = [
    { href: `/${lang}/students/football-academy`, label: lang === 'pl' ? 'Akademia piłkarska' : lang === 'de' ? 'Fußball-Akademie' : 'Football academy' },
    { href: `/${lang}/students/music-academy`, label: lang === 'pl' ? 'Akademia muzyczna' : lang === 'de' ? 'Musik-Akademie' : 'Music academy' },
    { href: `/${lang}/students/library`, label: lang === 'pl' ? 'Biblioteka' : lang === 'de' ? 'Bibliothek' : 'Library' },
    { href: `/${lang}/students/projects`, label: lang === 'pl' ? 'Projekty' : lang === 'de' ? 'Projekte' : 'Projects' },
    { href: `/${lang}/student-portal`, label: lang === 'pl' ? 'Portal ucznia' : lang === 'de' ? 'Schülerportal' : 'Student portal' },
  ];

  return (
    <footer className="bg-neutral-900 text-white">
      {/* Red top accent */}
      <div className="h-1 bg-gradient-to-r from-red-700 via-red-500 to-red-700" />

      {/* Main footer body */}
      <div className="container-custom py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">

          {/* Brand column — 4 cols */}
          <div className="lg:col-span-4">
            <Link href={`/${lang}`} className="mb-6 inline-block">
              <Image
                src="/images/logos/wbs-logo.webp"
                alt="WBS — Willy Brandt Schule Warschau"
                width={140}
                height={104}
                className="h-14 object-contain brightness-0 invert"
                style={{ width: 'auto' }}
              />
            </Link>

            {/* Identity tagline */}
            <p className="mb-3 text-sm text-neutral-400">
              {lang === 'pl'
                ? 'Polsko-Niemiecka Szkoła Spotkań i Dialogu'
                : lang === 'de'
                ? 'Deutsch-Polnische Begegnungsschule'
                : 'Polish-German School of Meetings and Dialogue'}
            </p>
            <span className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-red-900/40 bg-red-900/20 px-2.5 py-0.5 text-xs font-medium text-red-400">
              <span className="size-1.5 rounded-full bg-red-500" />
              {lang === 'pl' ? 'Od 1978 roku' : lang === 'de' ? 'Seit 1978' : 'Since 1978'}
            </span>

            {/* Campus addresses */}
            <div className="space-y-5">
              <div>
                <p className="mb-1.5 text-[10px] font-bold uppercase tracking-widest text-red-500">
                  {lang === 'pl' ? 'Kampus główny (kl. 1–12)' : lang === 'de' ? 'Hauptcampus (Kl. 1–12)' : 'Main campus (grades 1–12)'}
                </p>
                <div className="flex items-start gap-2.5 text-sm text-neutral-400">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-red-500" />
                  <span>ul. Św. Urszuli Ledóchowskiej 3<br />02-972 Warszawa</span>
                </div>
              </div>
              <div>
                <p className="mb-1.5 text-[10px] font-bold uppercase tracking-widest text-red-500">
                  {lang === 'pl' ? 'Kampus przedszkolny' : lang === 'de' ? 'Kindergarten-Campus' : 'Kindergarten campus'}
                </p>
                <div className="flex items-start gap-2.5 text-sm text-neutral-400">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-red-500" />
                  <span>ul. Chlapowskiego 1<br />02-189 Warszawa</span>
                </div>
              </div>
              <div className="flex flex-col gap-2 pt-1">
                <a href="tel:+48226422705" className="flex items-center gap-2.5 text-sm text-neutral-400 transition-colors hover:text-white">
                  <Phone className="size-4 shrink-0 text-red-500" />
                  +48 22 642 27 05
                </a>
                <a href="mailto:sekretariat@wbs.pl" className="flex items-center gap-2.5 text-sm text-neutral-400 transition-colors hover:text-white">
                  <Mail className="size-4 shrink-0 text-red-500" />
                  sekretariat@wbs.pl
                </a>
              </div>
            </div>
          </div>

          {/* Nav columns — 5 cols */}
          <div className="grid grid-cols-3 gap-6 lg:col-span-5">
            <div>
              <h3 className="mb-4 text-[11px] font-bold uppercase tracking-widest text-neutral-500">
                {lang === 'pl' ? 'Szkoła' : lang === 'de' ? 'Schule' : 'School'}
              </h3>
              <ul className="space-y-2.5">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="group inline-flex items-center gap-1 text-sm text-neutral-400 transition-colors hover:text-white">
                      {link.label}
                      <ArrowUpRight className="size-3 opacity-0 transition-all group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-[11px] font-bold uppercase tracking-widest text-neutral-500">
                {lang === 'pl' ? 'Rodzice' : lang === 'de' ? 'Eltern' : 'Parents'}
              </h3>
              <ul className="space-y-2.5">
                {parentLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="group inline-flex items-center gap-1 text-sm text-neutral-400 transition-colors hover:text-white">
                      {link.label}
                      <ArrowUpRight className="size-3 opacity-0 transition-all group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-[11px] font-bold uppercase tracking-widest text-neutral-500">
                {lang === 'pl' ? 'Uczniowie' : lang === 'de' ? 'Schüler' : 'Students'}
              </h3>
              <ul className="space-y-2.5">
                {studentLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="group inline-flex items-center gap-1 text-sm text-neutral-400 transition-colors hover:text-white">
                      {link.label}
                      <ArrowUpRight className="size-3 opacity-0 transition-all group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter + social — 3 cols */}
          <div className="lg:col-span-3">
            <h3 className="mb-1 font-semibold text-white">
              {lang === 'pl' ? 'Bądź na bieżąco' : lang === 'de' ? 'Bleiben Sie informiert' : 'Stay updated'}
            </h3>
            <p className="mb-4 text-sm text-neutral-400">
              {lang === 'pl'
                ? 'Aktualności ze szkoły prosto na Twój email.'
                : lang === 'de'
                ? 'Schulnews direkt in Ihr Postfach.'
                : 'School news straight to your inbox.'}
            </p>

            {newsletterStatus === 'success' ? (
              <p className="rounded-xl bg-green-900/40 px-4 py-3 text-sm font-medium text-green-400">{newsletterMsg}</p>
            ) : (
              <form onSubmit={handleNewsletter} className="flex flex-col gap-2">
                <input
                  type="email"
                  placeholder={lang === 'pl' ? 'Twój email' : lang === 'de' ? 'Ihre E-Mail' : 'Your email'}
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  required
                  className="w-full rounded-xl border border-neutral-700 bg-neutral-800 px-4 py-2.5 text-sm text-white placeholder-neutral-500 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                />
                <button
                  type="submit"
                  disabled={newsletterStatus === 'loading'}
                  className="w-full rounded-xl bg-red-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-red-700 disabled:opacity-50"
                >
                  {newsletterStatus === 'loading'
                    ? '...'
                    : lang === 'pl' ? 'Zapisz się' : lang === 'de' ? 'Anmelden' : 'Subscribe'}
                </button>
              </form>
            )}
            {newsletterStatus === 'error' && (
              <p className="mt-1 text-xs text-red-400">{newsletterMsg}</p>
            )}

            {/* Social */}
            <div className="mt-8">
              <p className="mb-3 text-[11px] font-bold uppercase tracking-widest text-neutral-500">
                {lang === 'pl' ? 'Obserwuj nas' : lang === 'de' ? 'Folgen Sie uns' : 'Follow us'}
              </p>
              <a
                href="https://facebook.com/wbswarschau"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-xl border border-neutral-700 bg-neutral-800 px-4 py-2.5 text-sm font-medium text-neutral-300 transition-all hover:border-red-600/50 hover:bg-red-600/10 hover:text-white"
                aria-label="Facebook"
              >
                <Facebook className="size-4 text-red-500" />
                WBS Warschau
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-neutral-800">
        <div className="container-custom py-5">
          <div className="flex flex-col items-center justify-between gap-4 text-xs text-neutral-500 md:flex-row">
            <div className="flex flex-col items-center gap-1 md:items-start">
              <p>
                © {currentYear} Willy-Brandt-Schule Warschau.{' '}
                {lang === 'pl' ? 'Wszelkie prawa zastrzeżone.' : lang === 'de' ? 'Alle Rechte vorbehalten.' : 'All rights reserved.'}
              </p>
              <p className="text-neutral-600">
                NIP: PL9512099288 · REGON: 011823389 · KRS: 0000150334
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-5">
              <Link href={`/${lang}/privacy`} className="transition-colors hover:text-white">{t('footer.legalLinks.privacy')}</Link>
              <Link href={`/${lang}/cookies`} className="transition-colors hover:text-white">{t('footer.legalLinks.cookies')}</Link>
              <Link href={`/${lang}/accessibility`} className="transition-colors hover:text-white">{t('footer.legalLinks.accessibility')}</Link>
              <Link href={`/${lang}/impressum`} className="transition-colors hover:text-white">{t('footer.legalLinks.impressum')}</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
