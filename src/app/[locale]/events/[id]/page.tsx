import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Calendar, Tag, ArrowLeft, Clock } from 'lucide-react';
import PageHeader from '@/components/features/PageHeader';
import eventsData from '@/data/extracted/events.json';

type LocaleKey = 'pl' | 'de' | 'en';

interface EventWithDetails {
  id: string;
  title: { pl: string; de: string; en: string };
  date: string;
  description?: { pl: string; de: string; en: string };
  category?: { pl: string; de: string; en: string };
}

function getAllEvents(): EventWithDetails[] {
  return [
    ...eventsData.upcomingEvents,
    ...(eventsData.pastEvents as EventWithDetails[]),
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}): Promise<Metadata> {
  const { locale, id } = await params;
  const event = getAllEvents().find((e) => e.id === id);
  if (!event) return {};
  const lang = (locale as LocaleKey) in event.title ? (locale as LocaleKey) : 'pl';
  const title = event.title[lang];
  return { title };
}

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { locale, id } = await params;
  const lang = locale as LocaleKey;

  const allEvents = getAllEvents();
  const event = allEvents.find((e) => e.id === id);

  if (!event) notFound();

  const title = event.title[lang] || event.title.pl;
  const description = event.description?.[lang] || event.description?.pl;
  const category = event.category?.[lang] || event.category?.pl;

  const dateObj = new Date(event.date);
  const isPast = dateObj < new Date();

  const formattedDate = dateObj.toLocaleDateString(
    locale === 'pl' ? 'pl-PL' : locale === 'de' ? 'de-DE' : 'en-GB',
    { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
  );

  const labels = {
    back:
      locale === 'pl'
        ? 'Powrót do kalendarza'
        : locale === 'de'
        ? 'Zurück zum Kalender'
        : 'Back to calendar',
    past:
      locale === 'pl'
        ? 'Minione wydarzenie'
        : locale === 'de'
        ? 'Vergangene Veranstaltung'
        : 'Past event',
    upcoming:
      locale === 'pl'
        ? 'Nadchodzące wydarzenie'
        : locale === 'de'
        ? 'Kommende Veranstaltung'
        : 'Upcoming event',
    detailsSoon:
      locale === 'pl'
        ? 'Szczegóły wkrótce.'
        : locale === 'de'
        ? 'Details folgen.'
        : 'Details coming soon.',
    addToCalendar:
      locale === 'pl'
        ? 'Dodaj do kalendarza'
        : locale === 'de'
        ? 'Zum Kalender hinzufügen'
        : 'Add to calendar',
    shareEvent:
      locale === 'pl' ? 'Udostępnij' : locale === 'de' ? 'Teilen' : 'Share',
  };

  // Build Google Calendar URL for upcoming events
  const gcalTitle = encodeURIComponent(title);
  const gcalDate = event.date.replace(/-/g, '');
  const gcalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${gcalTitle}&dates=${gcalDate}/${gcalDate}&details=${encodeURIComponent(description || '')}`;

  return (
    <>
      <PageHeader lang={locale} title={title} />

      <section className="py-12">
        <div className="container-custom max-w-3xl">
          {/* Back link */}
          <Link
            href={`/${locale}/events`}
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-red-600 transition-colors hover:text-red-700"
          >
            <ArrowLeft className="size-4" />
            {labels.back}
          </Link>

          {/* Event card */}
          <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
            {/* Meta bar */}
            <div className="flex flex-wrap items-center gap-4 border-b border-neutral-100 bg-neutral-50 px-6 py-4">
              <div className="flex items-center gap-2 text-sm text-neutral-600">
                <Calendar className="size-4 shrink-0 text-red-500" />
                <span className="capitalize">{formattedDate}</span>
              </div>
              {category && (
                <div className="flex items-center gap-2 text-sm text-neutral-600">
                  <Tag className="size-4 shrink-0 text-red-500" />
                  <span>{category}</span>
                </div>
              )}
              <span
                className={`ml-auto rounded-full px-3 py-0.5 text-xs font-semibold ${
                  isPast
                    ? 'bg-neutral-100 text-neutral-500'
                    : 'bg-green-100 text-green-700'
                }`}
              >
                <Clock className="mr-1 inline size-3" />
                {isPast ? labels.past : labels.upcoming}
              </span>
            </div>

            {/* Description */}
            <div className="px-6 py-8 md:px-8">
              {description ? (
                <p className="text-lg leading-relaxed text-neutral-700">{description}</p>
              ) : (
                <p className="italic text-neutral-400">{labels.detailsSoon}</p>
              )}
            </div>

            {/* Actions */}
            {!isPast && (
              <div className="flex flex-wrap gap-3 border-t border-neutral-100 bg-neutral-50 px-6 py-4">
                <a
                  href={gcalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-red-700"
                >
                  <Calendar className="size-4" />
                  {labels.addToCalendar}
                </a>
              </div>
            )}
          </div>

          {/* Back to all events */}
          <div className="mt-10 border-t border-neutral-200 pt-8">
            <Link
              href={`/${locale}/events`}
              className="inline-flex items-center gap-2 text-sm text-neutral-500 transition-colors hover:text-neutral-900"
            >
              <ArrowLeft className="size-4" />
              {labels.back}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
