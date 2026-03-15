import { getTranslations, setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Search, Filter, Mail, BookOpen } from 'lucide-react';
import staffData from '@/data/extracted/staff.json';

// Map of staff members who have real photos
const staffPhotos: Record<string, string> = {
  'Rüdiger Bott': '/images/people/ruediger-bott.jpg',
  'Karsten Kretzschmar': '/images/people/karsten-kretzschmar.jpg',
  'Małgorzata Wróbel': '/images/people/malgorzata-wrobel.jpg',
};

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

  // Separate leadership from regular staff
  const leadership = staff.filter(s =>
    s.role === 'Schulleitung' || (s as any).additionalRole === 'Stellvertretung' || s.name === 'Małgorzata Wróbel'
  );
  const teachers = staff.filter(s =>
    s.role !== 'Schulleitung' && (s as any).additionalRole !== 'Stellvertretung' && s.name !== 'Małgorzata Wróbel'
  );

  return (
      <div className="min-h-screen bg-neutral-50 pt-18 md:pt-20">
        {/* Hero with group photo */}
        <section className="relative overflow-hidden bg-neutral-900 py-16 text-white md:py-24">
          <div className="absolute inset-0">
            <Image
              src="/images/people/staff-group.jpg"
              alt="WBS Kollegium"
              fill
              className="object-cover opacity-30"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/90 via-neutral-900/70 to-neutral-900/50" />
          </div>
          <div className="container-custom relative z-10">
            <div className="max-w-3xl">
              <nav className="mb-6 flex items-center space-x-2 text-sm text-white/60">
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
              <p className="text-xl text-white/80">
                {t('staff.subtitle')}
              </p>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="border-b border-neutral-200 bg-white py-16">
          <div className="container-custom">
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent-500">
              {locale === 'pl' ? 'Dyrekcja' : locale === 'de' ? 'Schulleitung' : 'Leadership'}
            </h2>
            <p className="mb-10 text-2xl font-medium text-neutral-900">
              {locale === 'pl' ? 'Kierownictwo szkoły' : locale === 'de' ? 'Unsere Schulleitung' : 'Our school leadership'}
            </p>
            <div className="grid gap-8 md:grid-cols-3">
              {leadership.map((leader) => {
                const photo = staffPhotos[leader.name];
                const roleLabels: Record<string, Record<string, string>> = {
                  'Rüdiger Bott': { pl: 'Dyrektor Szkoły', de: 'Schulleiter', en: 'School Director' },
                  'Karsten Kretzschmar': { pl: 'Zastępca Dyrektora', de: 'Stellv. Schulleiter', en: 'Deputy Director' },
                  'Małgorzata Wróbel': { pl: 'Dyrektorka Sekcji Polskiej', de: 'Leiterin der polnischen Abteilung', en: 'Head of Polish Division' },
                };
                const roleLabel = roleLabels[leader.name]?.[locale] || roleLabels[leader.name]?.de || leader.role;

                return (
                  <div key={leader.id} className="group text-center">
                    <div className="mx-auto mb-5 size-40 overflow-hidden rounded-2xl bg-neutral-100">
                      {photo ? (
                        <Image
                          src={photo}
                          alt={leader.name}
                          width={160}
                          height={160}
                          className="size-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex size-full items-center justify-center bg-gradient-to-br from-red-500 to-red-700 text-4xl font-bold text-white">
                          {leader.name.charAt(0)}
                        </div>
                      )}
                    </div>
                    <h3 className="mb-1 text-lg font-semibold text-neutral-900">{leader.name}</h3>
                    <p className="mb-2 text-sm text-neutral-500">{roleLabel}</p>
                    {leader.subjects.length > 0 && (
                      <div className="mb-3 flex flex-wrap justify-center gap-1">
                        {leader.subjects.map((subject, i) => (
                          <span key={i} className="rounded-full bg-accent-50 px-2.5 py-0.5 text-xs font-medium text-accent-700">
                            {subject}
                          </span>
                        ))}
                      </div>
                    )}
                    {leader.email && (
                      <a
                        href={`mailto:${leader.email}`}
                        className="inline-flex items-center gap-1.5 text-sm text-red-600 transition-colors hover:text-red-700"
                      >
                        <Mail className="size-3.5" />
                        {leader.email}
                      </a>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Search & Filter Bar */}
        <div className="sticky top-18 z-40 border-b border-neutral-200 bg-white md:top-20">
          <div className="container-custom">
            <div className="flex flex-col gap-4 py-4 md:flex-row">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-neutral-400" />
                <input
                  type="text"
                  placeholder={t('staff.search')}
                  className="w-full rounded-lg border-0 bg-neutral-100 py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
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
                {locale === 'pl' ? 'działów' : locale === 'de' ? 'Abteilungen' : 'departments'}
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
              {teachers.map((teacher, index) => {
                const subjects = teacher.subjects || [];
                const grades = teacher.grades || [];
                const role = teacher.role || 'Lehrkraft';
                const photo = staffPhotos[teacher.name];
                const initials = teacher.name.split(' ').map(n => n.charAt(0)).join('');

                return (
                  <div
                    key={teacher.id}
                    className="group cursor-pointer overflow-hidden rounded-xl border border-neutral-200 bg-white transition-all hover:-translate-y-1 hover:border-red-200 hover:shadow-lg"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {/* Photo or avatar */}
                    <div className="relative mx-auto flex h-48 items-center justify-center overflow-hidden bg-neutral-100">
                      {photo ? (
                        <Image
                          src={photo}
                          alt={teacher.name}
                          fill
                          className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        />
                      ) : (
                        <div className="flex size-full items-center justify-center bg-gradient-to-br from-neutral-100 to-neutral-200">
                          <span className="text-4xl font-bold text-neutral-300">{initials}</span>
                        </div>
                      )}
                      {/* Department badge */}
                      <span className="absolute right-3 top-3 rounded-full bg-white/90 px-2.5 py-0.5 text-[11px] font-medium text-neutral-600 backdrop-blur-sm">
                        {teacher.department}
                      </span>
                    </div>

                    <div className="p-5">
                      <h3 className="mb-1 font-semibold text-neutral-900">
                        {teacher.name}
                      </h3>
                      <p className="mb-3 text-sm text-neutral-500">
                        {role}
                        {(teacher as any).additionalRole && (
                          <span className="text-accent-600"> · {(teacher as any).additionalRole}</span>
                        )}
                      </p>

                      {subjects.length > 0 && (
                        <div className="mb-3 flex flex-wrap gap-1">
                          {subjects.slice(0, 3).map((subject, i) => (
                            <span
                              key={i}
                              className="rounded-full bg-red-50 px-2 py-0.5 text-xs text-red-700"
                            >
                              {subject}
                            </span>
                          ))}
                          {subjects.length > 3 && (
                            <span className="rounded-full bg-neutral-100 px-2 py-0.5 text-xs text-neutral-500">
                              +{subjects.length - 3}
                            </span>
                          )}
                        </div>
                      )}

                      {grades.length > 0 && (
                        <div className="mb-3 flex items-center gap-1 text-xs text-neutral-500">
                          <BookOpen className="size-3" />
                          <span>KL {grades.join(', ')}</span>
                        </div>
                      )}

                      {teacher.email && (
                        <a
                          href={`mailto:${teacher.email}`}
                          className="inline-flex items-center gap-1.5 text-sm text-red-600 transition-colors hover:text-red-700"
                        >
                          <Mail className="size-3.5" />
                          {locale === 'pl' ? 'Email' : locale === 'de' ? 'E-Mail' : 'Email'}
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
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
