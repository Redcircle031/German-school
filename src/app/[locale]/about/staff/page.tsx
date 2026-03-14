import { getTranslations, setRequestLocale } from 'next-intl/server';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CookieConsent from '@/components/features/CookieConsent';
import Link from 'next/link';
import { ChevronRight, Search, Filter, Mail, BookOpen } from 'lucide-react';
import staffData from '@/data/extracted/staff.json';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return {
    title: 'Staff Directory',
    description: 'Meet our teachers and staff',
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
    <>
      <Header lang={locale} />
      <main className="pt-18 md:pt-20 min-h-screen bg-neutral-50">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16 md:py-24">
          <div className="container-custom">
            <div className="max-w-3xl">
              <nav className="flex items-center space-x-2 text-sm mb-6 text-white/80">
                <Link href={`/${locale}`} className="hover:text-white transition-colors">
                  {t('navigation.home')}
                </Link>
                <ChevronRight className="w-4 h-4" />
                <Link href={`/${locale}/about`} className="hover:text-white transition-colors">
                  {t('navigation.about')}
                </Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-white font-medium">{t('staff.title')}</span>
              </nav>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {t('staff.title')}
              </h1>
              <p className="text-xl text-white/90">
                {t('staff.subtitle')}
              </p>
            </div>
          </div>
        </section>

        {/* Search & Filter Bar */}
        <div className="bg-white border-b border-neutral-200 sticky top-18 md:top-20 z-40">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row gap-4 py-4">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                <input
                  type="text"
                  placeholder={t('staff.search')}
                  className="w-full pl-12 pr-4 py-3 bg-neutral-100 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>

              {/* Filter Dropdown */}
              <div className="relative">
                <select className="appearance-none pl-4 pr-10 py-3 bg-neutral-100 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-primary-500 cursor-pointer">
                  {departments.map((dept) => (
                    <option key={dept.key} value={dept.key}>
                      {dept.label}
                    </option>
                  ))}
                </select>
                <Filter className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="bg-white border-b border-neutral-200">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {staff.map((teacher, index) => {
                const subjects = teacher.subjects || [];
                const grades = teacher.grades || [];
                const role = teacher.role || 'Lehrkraft';

                return (
                  <div
                    key={teacher.id}
                    className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer group"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {/* Avatar */}
                    <div className="w-20 h-20 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 mx-auto group-hover:scale-110 transition-transform">
                      {teacher.name.charAt(0)}
                    </div>

                    {/* Info */}
                    <div className="text-center">
                      <h3 className="font-semibold text-neutral-900 mb-1">
                        {teacher.name}
                      </h3>
                      <p className="text-sm text-neutral-500 mb-3">
                        {role}
                      </p>

                      {/* Subjects */}
                      {subjects.length > 0 && (
                        <div className="flex flex-wrap justify-center gap-1 mb-3">
                          {subjects.slice(0, 3).map((subject, i) => (
                            <span
                              key={i}
                              className="px-2 py-1 bg-primary-50 text-primary-700 text-xs rounded"
                            >
                              {subject}
                            </span>
                          ))}
                          {subjects.length > 3 && (
                            <span className="px-2 py-1 bg-neutral-100 text-neutral-600 text-xs rounded">
                              +{subjects.length - 3}
                            </span>
                          )}
                        </div>
                      )}

                      {/* Grades */}
                      {grades.length > 0 && (
                        <div className="flex items-center justify-center gap-1 text-xs text-neutral-500 mb-4">
                          <BookOpen className="w-3 h-3" />
                          <span>{grades.join(', ')}</span>
                        </div>
                      )}

                      {/* Email Button */}
                      {teacher.email && (
                        <a
                          href={`mailto:${teacher.email}`}
                          className="inline-flex items-center justify-center px-4 py-2 text-sm text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
                        >
                          <Mail className="w-4 h-4 mr-2" />
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
              <div className="text-center mt-12">
                <button className="btn-outline px-8 py-3">
                  {locale === 'pl' ? 'Załaduj więcej' : locale === 'de' ? 'Mehr laden' : 'Load more'}
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Join Our Team CTA */}
        <section className="py-16 bg-accent-500">
          <div className="container-custom text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
              {locale === 'pl'
                ? 'Dołącz do naszego zespołu'
                : locale === 'de'
                ? 'Werden Sie Teil unseres Teams'
                : 'Join Our Team'}
            </h2>
            <p className="text-neutral-800 mb-8 max-w-xl mx-auto">
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
      </main>
      <Footer lang={locale} />
      <CookieConsent lang={locale} />
    </>
  );
}
