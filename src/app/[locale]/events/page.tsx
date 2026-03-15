import { getTranslations, setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import eventsData from '@/data/extracted/events.json';
import EventsCalendar from '@/components/features/EventsCalendar';

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

  const upcomingEvents = eventsData.upcomingEvents || [];

  const calendarLabels = {
    month: locale === 'pl' ? 'Miesiąc' : locale === 'de' ? 'Monat' : 'Month',
    list: locale === 'pl' ? 'Lista' : locale === 'de' ? 'Liste' : 'List',
    today: locale === 'pl' ? 'Dzisiaj' : locale === 'de' ? 'Heute' : 'Today',
    noEvents: t('events.noEvents'),
    details: locale === 'pl' ? 'Szczegóły' : locale === 'de' ? 'Details' : 'Details',
  };

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

        {/* Interactive Calendar */}
        <EventsCalendar
          events={upcomingEvents}
          locale={locale}
          labels={calendarLabels}
        />

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
