import { Metadata } from 'next';
import PageHeader from '@/components/features/PageHeader';
import { Calendar, Clock, MapPin } from 'lucide-react';
import eventsData from '@/data/extracted/events.json';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const titles = { pl: 'Nadchodzące wydarzenia | WBS', de: 'Kommende Veranstaltungen | WBS', en: 'Upcoming Events | WBS' };
  return { title: titles[locale as keyof typeof titles] || titles.en };
}

const translations = {
  pl: { title: 'Nadchodzące Wydarzenia', subtitle: 'Co nas czeka w najbliższym czasie', empty: 'Brak nadchodzących wydarzeń' },
  de: { title: 'Kommende Veranstaltungen', subtitle: 'Was in nächster Zeit auf uns zukommt', empty: 'Keine kommenden Veranstaltungen' },
  en: { title: 'Upcoming Events', subtitle: 'What awaits us in the near future', empty: 'No upcoming events' },
};

export default async function UpcomingEventsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = translations[locale as keyof typeof translations] || translations.en;

  const now = new Date().toISOString().split('T')[0];
  const events = (eventsData.upcomingEvents || [])
    .filter((e: any) => e.date >= now)
    .sort((a: any, b: any) => a.date.localeCompare(b.date));

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString(locale === 'pl' ? 'pl-PL' : locale === 'de' ? 'de-DE' : 'en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <>
      <PageHeader lang={locale} title={t.title} description={t.subtitle} />
      <section className="section bg-white">
        <div className="container-custom max-w-3xl">
          {events.length > 0 ? (
            <div className="space-y-6">
              {events.map((event: any, i: number) => {
                const title = event.title?.[locale] || event.title?.en || event.title?.pl || '';
                return (
                  <div key={i} className="rounded-xl border border-neutral-200 bg-white p-6 transition-all hover:border-red-200 hover:shadow-lg">
                    <div className="mb-3 flex items-center gap-2 text-sm text-red-600">
                      <Calendar className="size-4" />
                      <time dateTime={event.date}>{formatDate(event.date)}</time>
                    </div>
                    <h3 className="mb-2 text-xl font-semibold text-neutral-900">{title}</h3>
                    {event.time && (
                      <div className="flex items-center gap-2 text-sm text-neutral-500">
                        <Clock className="size-3.5" /> {event.time}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="py-12 text-center text-neutral-500">{t.empty}</div>
          )}
        </div>
      </section>
    </>
  );
}
