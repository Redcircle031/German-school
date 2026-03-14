import { getTranslations, setRequestLocale } from 'next-intl/server';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CookieConsent from '@/components/features/CookieConsent';
import Link from 'next/link';
import { Calendar, MapPin, Clock, ChevronRight, ArrowLeft } from 'lucide-react';
import eventsData from '@/data/extracted/events.json';
import { formatDate } from '@/lib/utils';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return {
    title: 'Events Calendar',
    description: 'Upcoming events at WBS School',
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
    <>
      <Header lang={locale} />
      <main className="pt-18 md:pt-20 min-h-screen bg-neutral-50">
        {/* Hero */}
        <section className="bg-gradient-to-br from-accent-400 to-accent-600 text-white py-16 md:py-24">
          <div className="container-custom">
            <div className="max-w-3xl">
              <nav className="flex items-center space-x-2 text-sm mb-6 text-white/80">
                <Link href={`/${locale}`} className="hover:text-white transition-colors">
                  {t('navigation.home')}
                </Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-white font-medium">{t('events.title')}</span>
              </nav>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {t('events.title')}
              </h1>
              <p className="text-xl text-white/90">
                {t('events.subtitle')}
              </p>
            </div>
          </div>
        </section>

        {/* View Controls */}
        <div className="bg-white border-b border-neutral-200 sticky top-18 md:top-20 z-40">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 py-4">
              {/* View Toggle */}
              <div className="flex items-center gap-2">
                {viewOptions.map((view) => (
                  <button
                    key={view.key}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
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
                <button className="p-2 hover:bg-neutral-100 rounded-lg transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <span className="text-lg font-semibold min-w-[200px] text-center">
                  {locale === 'pl' ? 'Marzec 2026' : locale === 'de' ? 'März 2026' : 'March 2026'}
                </span>
                <button className="p-2 hover:bg-neutral-100 rounded-lg transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
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
                  <div key={`prev-${i}`} className="min-h-[120px] p-2 bg-neutral-50 border-b border-r border-neutral-100">
                    <span className="text-neutral-400 text-sm">{24 + i}</span>
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
                      className={`min-h-[120px] p-2 border-b border-r border-neutral-100 transition-colors hover:bg-neutral-50 ${
                        isToday ? 'bg-accent-50' : ''
                      }`}
                    >
                      <span
                        className={`inline-flex items-center justify-center w-7 h-7 text-sm font-medium rounded-full ${
                          isToday
                            ? 'bg-accent-500 text-white'
                            : 'text-neutral-900'
                        }`}
                      >
                        {day}
                      </span>
                      {hasEvent && (
                        <div className="mt-2 space-y-1">
                          <div className="px-2 py-1 bg-primary-100 text-primary-800 text-xs rounded truncate">
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
            <h2 className="text-2xl font-bold mb-8">
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
                      className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                    >
                      <div className="flex flex-col md:flex-row md:items-center gap-4">
                        {/* Date Box */}
                        <div className="flex-shrink-0 w-16 h-16 bg-primary-100 rounded-xl flex flex-col items-center justify-center text-primary-700">
                          <Calendar className="w-6 h-6 mb-1" />
                          <span className="text-xs font-medium">{event.date}</span>
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="px-3 py-1 bg-accent-100 text-accent-800 text-xs font-medium rounded-full">
                              {category}
                            </span>
                          </div>
                          <h3 className="text-lg font-semibold text-neutral-900 mb-1">
                            {title}
                          </h3>
                          <p className="text-neutral-600 text-sm">
                            {description}
                          </p>
                        </div>

                        {/* Action */}
                        <div className="flex-shrink-0">
                          <button className="btn-primary px-4 py-2">
                            {locale === 'pl' ? 'Szczegóły' : locale === 'de' ? 'Details' : 'Details'}
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="text-center py-12">
                  <Calendar className="w-16 h-16 mx-auto mb-4 text-neutral-300" />
                  <p className="text-neutral-500">
                    {t('events.noEvents')}
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Add to Calendar CTA */}
        <section className="py-12 bg-primary-600 text-white">
          <div className="container-custom text-center">
            <h2 className="text-2xl font-bold mb-4">
              {locale === 'pl'
                ? 'Dodaj kalendarz szkolny do swojego urządzenia'
                : locale === 'de'
                ? 'Fügen Sie den Schulkalender zu Ihrem Gerät hinzu'
                : 'Add school calendar to your device'}
            </h2>
            <p className="text-white/90 mb-8">
              {locale === 'pl'
                ? 'Nigdy nie przegap ważnego wydarzenia szkolnego'
                : locale === 'de'
                ? 'Verpassen Sie nie wieder ein wichtiges Schulereignis'
                : 'Never miss an important school event again'}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-6 py-3 bg-white text-primary-600 rounded-lg font-medium hover:bg-neutral-100 transition-colors">
                Google Calendar
              </button>
              <button className="px-6 py-3 bg-white text-primary-600 rounded-lg font-medium hover:bg-neutral-100 transition-colors">
                Apple Calendar
              </button>
              <button className="px-6 py-3 bg-white text-primary-600 rounded-lg font-medium hover:bg-neutral-100 transition-colors">
                Outlook
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer lang={locale} />
      <CookieConsent lang={locale} />
    </>
  );
}
