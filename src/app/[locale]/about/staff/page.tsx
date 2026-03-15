import { getTranslations, setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import { ChevronRight, Search, Filter, Mail, BookOpen } from 'lucide-react';
import staffData from '@/data/extracted/staff.json';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  const titles: Record<string, string> = {
    pl: 'Kadra | WBS',
    de: 'Kollegium | WBS',
    en: 'Staff | WBS',
  };
  const descriptions: Record<string, string> = {
    pl: 'Poznaj naszą kadrę pedagogiczną w szkole WBS',
    de: 'Lernen Sie unser Kollegium an der WBS-Schule kennen',
    en: 'Meet our teaching staff at WBS school',
  };

  return {
    title: titles[locale] || titles.en,
    description: descriptions[locale] || descriptions.en,
  };
}

export default async function StaffPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();

  const departments = [
    { key: 'all', label: locale === 'pl' ? 'Wszyscy' : locale === 'de' ? 'Alle' : 'All' },
    { key: 'grundschule', label: locale === 'pl' ? 'Szkoła Podstawowa' : locale === 'de' ? 'Grundschule' : 'Primary' },
    { key: 'sekundarstufe', label: locale === 'pl' ? 'Szkoła Średnia' : locale === 'de' ? 'Sekundarstufe' : 'Secondary' },
    { key: 'oberstufe', label: locale === 'pl' ? 'Klasy Starsze' : locale === 'de' ? 'Oberstufe' : 'Upper' },
    { key: 'daf', label: 'DaF' },
    { key: 'sport', label: locale === 'pl' ? 'Sport' : locale === 'de' ? 'Sport' : 'Sports' },
    { key: 'forderung', label: locale === 'pl' ? 'Wsparcie' : locale === 'de' ? 'Förderung' : 'Support' },
  ];

  const staff = staffData.staff || [];

  return (
      <div className="min-h-screen bg-neutral-50 pt-18 md:pt-20">
        {/* Hero */}
        <section className="bg-gradient-to-br from-red-600 to-red-800 py-16 text-white md:py-24">
          <div className="container-custom">
            <div className="max-w-3xl">
              <nav className="mb-6 flex items-center space-x-2 text-sm text-white/80">
                <Link href={`/${locale}`} className="transition-colors hover:text-white">
                  {t('navigation.home')}
                </Link>
                <ChevronRight className="size-4" />
                <Link href={`/${locale}/about`} className="transition-colors hover:text-white">
                  {t('navigation.about')}
                </Link>
                <ChevronRight className="size-4" />
                <span className="font-medium text-white">{t('staff.title')}</span>
              </nav>
              <h1 className="mb-4 text-4xl font-bold md:text-5xl">
                {t('staff.title')}
              </h1>
              <p className="text-xl text-white/90">
                {t('staff.subtitle')}
              </p>
            </div>
          </div>
        </section>

        {/* Search & Filter Bar */}
        <div className="sticky top-18 z-40 border-b border-neutral-200 bg-white md:top-20">
          <div className="container-custom">
            <div className="flex flex-col gap-4 py-4 md:flex-row">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-neutral-400" />
                <input
                  type="text"
                  placeholder={t('staff.search')}
                  className="w-full rounded-lg border-0 bg-neutral-100 py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              {/* Filter Dropdown */}
              <div className="relative">
                <select className="cursor-pointer appearance-none rounded-lg border-0 bg-neutral-100 py-3 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-red-500">
                  {departments.map((dept) => (
                    <option key={dept.key} value={dept.key}>
                      {dept.label}
                    </option>
                  ))}
                </select>
                <Filter className="pointer-events-none absolute right-3 top-1/2 size-5 -translate-y-1/2 text-neutral-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="border-b border-neutral-200 bg-white">
          <div className="container-custom">
            <div className="flex flex-wrap gap-6 py-4 text-sm text-neutral-600">
              <span>
                <strong className="text-neutral-900">{staff.length}</strong>{' '}
                {locale === 'pl' ? 'nauczycieli' : locale === 'de' ? 'Lehrkräfte' : 'teachers'}
              </span>
              <span>
                <strong className="text-neutral-900">6</strong>{' '}
                {locale === 'pl' ? 'przedmiotów' : locale === 'de' ? 'Fächer' : 'departments'}
              </span>
              <span>
                <strong className="text-neutral-900">100%</strong>{' '}
                {locale === 'pl' ? 'wykwalifikowanych' : locale === 'de' ? 'qualifiziert' : 'qualified'}
              </span>
            </div>
          </div>
        </div>

        {/* Staff Grid */}
        <section className="py-12">
          <div className="container-custom">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {staff.map((teacher, index) => {
                const subjects = teacher.subjects || [];
                const grades = teacher.grades || [];
                const role = teacher.role || 'Lehrkraft';

                return (
                  <div
                    key={teacher.id}
                    className="group cursor-pointer rounded-xl bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {/* Avatar */}
                    <div className="mx-auto mb-4 flex size-20 items-center justify-center rounded-full bg-gradient-to-br from-red-400 to-red-600 text-2xl font-bold text-white transition-transform group-hover:scale-110">
                      {teacher.name.charAt(0)}
                    </div>

                    {/* Info */}
                    <div className="text-center">
                      <h3 className="mb-1 font-semibold text-neutral-900">
                        {teacher.name}
                      </h3>
                      <p className="mb-3 text-sm text-neutral-500">
                        {role}
                      </p>

                      {/* Subjects */}
                      {subjects.length > 0 && (
                        <div className="mb-3 flex flex-wrap justify-center gap-1">
                          {subjects.slice(0, 3).map((subject, i) => (
                            <span
                              key={i}
                              className="rounded bg-red-50 px-2 py-1 text-xs text-red-700"
                            >
                              {subject}
                            </span>
                          ))}
                          {subjects.length > 3 && (
                            <span className="rounded bg-neutral-100 px-2 py-1 text-xs text-neutral-600">
                              +{subjects.length - 3}
                            </span>
                          )}
                        </div>
                      )}

                      {/* Grades */}
                      {grades.length > 0 && (
                        <div className="mb-4 flex items-center justify-center gap-1 text-xs text-neutral-500">
                          <BookOpen className="size-3" />
                          <span>{grades.join(', ')}</span>
                        </div>
                      )}

                      {/* Email Button */}
                      {teacher.email && (
                        <a
                          href={`mailto:${teacher.email}`}
                          className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm text-red-600 transition-colors hover:bg-red-50"
                        >
                          <Mail className="mr-2 size-4" />
                          {locale === 'pl' ? 'Email' : locale === 'de' ? 'E-Mail' : 'Email'}
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Load More */}
            {staff.length > 12 && (
              <div className="mt-12 text-center">
                <button className="btn-outline px-8 py-3">
                  {locale === 'pl' ? 'Załaduj więcej' : locale === 'de' ? 'Mehr laden' : 'Load more'}
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Join Our Team CTA */}
        <section className="bg-accent-500 py-16">
          <div className="container-custom text-center">
            <h2 className="mb-4 text-2xl font-bold text-neutral-900 md:text-3xl">
              {locale === 'pl'
                ? 'Dołącz do naszego zespołu'
                : locale === 'de'
                ? 'Werden Sie Teil unseres Teams'
                : 'Join Our Team'}
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-neutral-800">
              {locale === 'pl'
                ? 'Szukamy wykwalifikowanych nauczycieli. Sprawdź nasze oferty pracy.'
                : locale === 'de'
                ? 'Wir suchen qualifizierte Lehrkräfte. Sehen Sie sich unsere Stellenangebote an.'
                : 'We are looking for qualified teachers. Check out our job openings.'}
            </p>
            <Link href={`/${locale}/about/careers`} className="btn-primary px-8 py-3">
              {locale === 'pl' ? 'Zobacz oferty' : locale === 'de' ? 'Stellenangebote' : 'View Openings'}
            </Link>
          </div>
        </section>
      </div>
  );
}
