'use client';

import Link from 'next/link';
import { usePathname, useParams } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';
import { useMemo } from 'react';

const SEGMENT_LABELS: Record<string, Record<string, string>> = {
  about: { pl: 'O szkole', de: 'Über uns', en: 'About' },
  staff: { pl: 'Kadra', de: 'Kollegium', en: 'Staff' },
  news: { pl: 'Aktualności', de: 'Aktuelles', en: 'News' },
  events: { pl: 'Kalendarz', de: 'Kalender', en: 'Events' },
  contact: { pl: 'Kontakt', de: 'Kontakt', en: 'Contact' },
  parents: { pl: 'Rodzice', de: 'Eltern', en: 'Parents' },
  students: { pl: 'Uczniowie', de: 'Schüler', en: 'Students' },
  search: { pl: 'Szukaj', de: 'Suchen', en: 'Search' },
  privacy: { pl: 'Polityka prywatności', de: 'Datenschutz', en: 'Privacy' },
  impressum: { pl: 'Impressum', de: 'Impressum', en: 'Legal Notice' },
  cookies: { pl: 'Ciasteczka', de: 'Cookies', en: 'Cookies' },
  accessibility: { pl: 'Dostępność', de: 'Barrierefreiheit', en: 'Accessibility' },
  recruitment: { pl: 'Rekrutacja', de: 'Aufnahme', en: 'Admissions' },
  forms: { pl: 'Formularze', de: 'Formulare', en: 'Forms' },
  regulations: { pl: 'Regulaminy', de: 'Ordnungen', en: 'Regulations' },
  canteen: { pl: 'Stołówka', de: 'Kantine', en: 'Canteen' },
  aftercare: { pl: 'Świetlica', de: 'Hort', en: 'Aftercare' },
  council: { pl: 'Rada rodziców', de: 'Elternrat', en: 'Parent Council' },
  'football-academy': { pl: 'Akademia piłkarska', de: 'Fußball-Akademie', en: 'Football Academy' },
  'music-academy': { pl: 'Akademia muzyczna', de: 'Musik-Akademie', en: 'Music Academy' },
  library: { pl: 'Biblioteka', de: 'Bibliothek', en: 'Library' },
  projects: { pl: 'Projekty', de: 'Projekte', en: 'Projects' },
  achievements: { pl: 'Osiągnięcia', de: 'Leistungen', en: 'Achievements' },
  'student-council': { pl: 'Samorząd', de: 'Schülervertretung', en: 'Student Council' },
  'holidays-2025-26': { pl: 'Ferie 2025/26', de: 'Ferien 2025/26', en: 'Holidays 2025/26' },
  'holidays-2026-27': { pl: 'Ferie 2026/27', de: 'Ferien 2026/27', en: 'Holidays 2026/27' },
  choir: { pl: 'Chór', de: 'Chor', en: 'Choir' },
  'ztm-card': { pl: 'Karta ZTM', de: 'ZTM-Karte', en: 'ZTM Card' },
  'e-id': { pl: 'e-Legitymacja', de: 'e-Ausweis', en: 'e-ID Card' },
  'mobile-id': { pl: 'mLegitymacja', de: 'mLegitimation', en: 'Mobile ID' },
  volunteering: { pl: 'Wolontariat', de: 'Ehrenamt', en: 'Volunteering' },
  'parent-portal': { pl: 'Portal rodzica', de: 'Elternportal', en: 'Parent portal' },
  'student-portal': { pl: 'Portal ucznia', de: 'Schülerportal', en: 'Student portal' },
};

interface BreadcrumbProps {
  className?: string;
}

export default function Breadcrumb({ className = '' }: BreadcrumbProps) {
  const pathname = usePathname();
  const params = useParams();
  const locale = (params.locale as string) || 'pl';

  const crumbs = useMemo(() => {
    const parts = pathname.split('/').filter(Boolean);
    const withoutLocale = parts.slice(1);
    if (withoutLocale.length === 0) return [];
    return withoutLocale.map((segment, i) => ({
      href: `/${locale}/${withoutLocale.slice(0, i + 1).join('/')}`,
      label: SEGMENT_LABELS[segment]?.[locale] || segment,
      isLast: i === withoutLocale.length - 1,
    }));
  }, [pathname, locale]);

  if (crumbs.length === 0) return null;

  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex flex-wrap items-center gap-1.5 text-sm ${className}`}
    >
      <Link
        href={`/${locale}`}
        className="flex items-center text-neutral-400 transition-colors hover:text-neutral-700"
        aria-label={locale === 'pl' ? 'Strona główna' : locale === 'de' ? 'Startseite' : 'Home'}
      >
        <Home className="size-3.5" />
      </Link>
      {crumbs.map((crumb) => (
        <span key={crumb.href} className="flex items-center gap-1.5">
          <ChevronRight className="size-3.5 text-neutral-300" />
          {crumb.isLast ? (
            <span className="font-medium text-neutral-700" aria-current="page">
              {crumb.label}
            </span>
          ) : (
            <Link
              href={crumb.href}
              className="text-neutral-400 transition-colors hover:text-neutral-700"
            >
              {crumb.label}
            </Link>
          )}
        </span>
      ))}
    </nav>
  );
}
