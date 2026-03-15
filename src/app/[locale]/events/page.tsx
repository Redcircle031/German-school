import { getTranslations, setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import { Calendar, MapPin, Clock, ChevronRight, ArrowLeft } from 'lucide-react';
import eventsData from '@/data/extracted/events.json';
import { formatDate } from '@/lib/utils';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  const titles: Record<string, string> = {
    pl: 'Wydarzenia | WBS',
    de: 'Veranstaltungen | WBS',
    en: 'Events | WBS',
  };
  const descriptions: Record<string, string> = {
    pl: 'Kalendarz wydarzeń szkolnych WBS w Warszawie',
    de: 'Veranstaltungskalender der WBS-Schule in Warschau',
    en: 'WBS school events calendar in Warsaw',
  };

  return {
    title: titles[locale] || titles.en,
    description: descriptions[locale] || descriptions.en,
  };
}

export default async function EventsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();

  const viewOptions = [
    { key: 'month', label: locale === 'pl' ? 'Miesiąc' : locale === 'de' ? 'Monat' : 'Month' },
    { key: 'week', label: locale === 'pl' ? 'Tydzień' : locale === 'de' ? 'Woche' : 'Week' },
    { key: 'day', label: locale === 'pl' ? 'Dzień' : locale === 'de' ? 'Tag' : 'Day' },
    { key: 'list', label: locale === 'pl' ? 'Lista' : locale === 'de' ? 'Liste' : 'List' },
  ];

  const upcomingEvents = eventsData.upcomingEvents || [];

  return (
      <div className="min-h-screen bg-neutral-50 pt-18 md:pt-20">
        {/* Hero */}
        <section className="bg-gradient-to-br from-accent-400 to-accent-600 py-16 text-white md:py-24">
          <div className="container-custom">
            <div className="max-w-3xl">
              <nav className="mb-6 flex items-center space-x-2 text-sm text-white/80">
                <Link href={`/${locale}`} className="transition-colors hover:text-white">
                  {t('navigation.home')}
                </Link>
                <ChevronRight className="size-4" />
                <span className="font-medium text-white">{t('events.title')}</span>
              </nav>
              <h1 className="mb-4 text-4xl font-bold md:text-5xl">
                {t('events.title')}
              </h1>
              <p className="text-xl text-white/90">
                {t('events.subtitle')}
              </p>
            </div>
          </div>
        </section>

        {/* View Controls */}
        <div className="sticky top-18 z-40 border-b border-neutral-200 bg-white md:top-20">
          <div className="container-custom">
            <div className="flex flex-col justify-between gap-4 py-4 md:flex-row md:items-center">
              {/* View Toggle */}
              <div className="flex items-center gap-2">
                {viewOptions.map((view) => (
                  <button
                    key={view.key}
                    className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                      view.key === 'month'
                        ? 'bg-accent-100 text-accent-800'
                        : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                    }`}
                  >
                    {view.label}
                  </button>
                ))}
              </div>

              {/* Navigation */}
              <div className="flex items-center gap-2">
                <button className="rounded-lg p-2 transition-colors hover:bg-neutral-100">
                  <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <span className="min-w-[200px] text-center text-lg font-semibold">
                  {locale === 'pl' ? 'Marzec 2026' : locale === 'de' ? 'März 2026' : 'March 2026'}
                </span>
                <button className="rounded-lg p-2 transition-colors hover:bg-neutral-100">
                  <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Today Button */}
              <button className="btn-outline px-4 py-2">
                {locale === 'pl' ? 'Dzisiaj' : locale === 'de' ? 'Heute' : 'Today'}
              </button>
            </div>
          </div>
        </div>

        {/* Calendar Grid */}
        <section className="py-8">
          <div className="container-custom">
            <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
              {/* Calendar Header */}
              <div className="grid grid-cols-7 border-b border-neutral-200">
                {['PN', 'WT', 'ŚR', 'CZ', 'PT', 'SO', 'ND'].map((day) => (
                  <div key={day} className="py-3 text-center text-sm font-medium text-neutral-500">
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar Days */}
              <div className="grid grid-cols-7">
                {/* Previous month days */}
                {[...Array(2)].map((_, i) => (
                  <div key={`prev-${i}`} className="min-h-[120px] border-b border-r border-neutral-100 bg-neutral-50 p-2">
                    <span className="text-sm text-neutral-400">{24 + i}</span>
                  </div>
                ))}

                {/* Current month days */}
                {[...Array(31)].map((_, i) => {
                  const day = i + 1;
                  const isToday = day === 13;
                  const hasEvent = [15, 20, 25].includes(day);

                  return (
                    <div
                      key={day}
                      className={`min-h-[120px] border-b border-r border-neutral-100 p-2 transition-colors hover:bg-neutral-50 ${
                        isToday ? 'bg-accent-50' : ''
                      }`}
                    >
                      <span
                        className={`inline-flex size-7 items-center justify-center rounded-full text-sm font-medium ${
                          isToday
                            ? 'bg-accent-500 text-white'
                            : 'text-neutral-900'
                        }`}
                      >
                        {day}
                      </span>
                      {hasEvent && (
                        <div className="mt-2 space-y-1">
                          <div className="truncate rounded bg-red-100 px-2 py-1 text-xs text-red-800">
                            {locale === 'pl' ? 'Wydarzenie' : locale === 'de' ? 'Veranstaltung' : 'Event'}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Events List */}
        <section className="py-12">
          <div className="container-custom">
            <h2 className="mb-8 text-2xl font-bold">
              {t('events.title')}
            </h2>
            <div className="space-y-4">
              {upcomingEvents.length > 0 ? (
                upcomingEvents.map((event) => {
                  const title = event.title[locale as keyof typeof event.title] || event.title.pl;
                  const description = event.description[locale as keyof typeof event.description] || event.description.pl;
                  const category = event.category[locale as keyof typeof event.category] || event.category.pl;

                  return (
                    <div
                      key={event.id}
                      className="cursor-pointer rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                    >
                      <div className="flex flex-col gap-4 md:flex-row md:items-center">
                        {/* Date Box */}
                        <div className="flex size-16 shrink-0 flex-col items-center justify-center rounded-xl bg-red-100 text-red-700">
                          <Calendar className="mb-1 size-6" />
                          <span className="text-xs font-medium">{event.date}</span>
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <div className="mb-2 flex items-center gap-3">
                            <span className="rounded-full bg-accent-100 px-3 py-1 text-xs font-medium text-accent-800">
                              {category}
                            </span>
                          </div>
                          <h3 className="mb-1 text-lg font-semibold text-neutral-900">
                            {title}
                          </h3>
                          <p className="text-sm text-neutral-600">
                            {description}
                          </p>
                        </div>

                        {/* Action */}
                        <div className="shrink-0">
                          <button className="btn-primary px-4 py-2">
                            {locale === 'pl' ? 'Szczegóły' : locale === 'de' ? 'Details' : 'Details'}
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="py-12 text-center">
                  <Calendar className="mx-auto mb-4 size-16 text-neutral-300" />
                  <p className="text-neutral-500">
                    {t('events.noEvents')}
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Add to Calendar CTA */}
        <section className="bg-red-600 py-12 text-white">
          <div className="container-custom text-center">
            <h2 className="mb-4 text-2xl font-bold">
              {locale === 'pl'
                ? 'Dodaj kalendarz szkolny do swojego urządzenia'
                : locale === 'de'
                ? 'Fügen Sie den Schulkalender zu Ihrem Gerät hinzu'
                : 'Add school calendar to your device'}
            </h2>
            <p className="mb-8 text-white/90">
              {locale === 'pl'
                ? 'Nigdy nie przegap ważnego wydarzenia szkolnego'
                : locale === 'de'
                ? 'Verpassen Sie nie wieder ein wichtiges Schulereignis'
                : 'Never miss an important school event again'}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="rounded-lg bg-white px-6 py-3 font-medium text-red-600 transition-colors hover:bg-neutral-100">
                Google Calendar
              </button>
              <button className="rounded-lg bg-white px-6 py-3 font-medium text-red-600 transition-colors hover:bg-neutral-100">
                Apple Calendar
              </button>
              <button className="rounded-lg bg-white px-6 py-3 font-medium text-red-600 transition-colors hover:bg-neutral-100">
                Outlook
              </button>
            </div>
          </div>
        </section>
      </div>
  );
}
