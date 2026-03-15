import { Metadata } from 'next';
import PageHeader from '@/components/features/PageHeader';
import { Sun, Snowflake, TreePine, Calendar } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const titles: Record<string, string> = { pl: 'Dni Wolne | WBS', de: 'Schulferien | WBS', en: 'School Holidays | WBS' };
  const descriptions: Record<string, string> = {
    pl: 'Kalendarz dni wolnych i ferii szkolnych na rok 2025/2026 - ferie zimowe, wiosenne, letnie i świąteczne.',
    de: 'Ferienkalender 2025/2026 - Winterferien, Frühlingsferien, Sommerferien und Weihnachtsferien.',
    en: 'School holidays calendar 2025/2026 - winter break, spring break, summer holidays and Christmas break.',
  };
  return { title: titles[locale] || titles.en, description: descriptions[locale] || descriptions.en };
}

const translations = {
  pl: {
    title: 'Dni Wolne',
    subtitle: 'Kalendarz ferii i dni wolnych 2025/2026',
    intro: 'Poniżej prezentujemy pełny kalendarz dni wolnych od zajęć szkolnych w roku szkolnym 2025/2026. Prosimy o planowanie urlopów zgodnie z terminarzem szkolnym.',
    holidaysTitle: 'Ferie i przerwy świąteczne',
    holidays: [
      { icon: 'TreePine', name: 'Przerwa świąteczna (Boże Narodzenie)', dates: '23 grudnia 2025 – 1 stycznia 2026', days: '10 dni' },
      { icon: 'Snowflake', name: 'Ferie zimowe', dates: '16 – 27 lutego 2026', days: '12 dni' },
      { icon: 'Sun', name: 'Przerwa wiosenna (Wielkanoc)', dates: '2 – 7 kwietnia 2026', days: '6 dni' },
      { icon: 'Sun', name: 'Ferie letnie', dates: '27 czerwca – 31 sierpnia 2026', days: '66 dni' },
    ],
    publicTitle: 'Dni ustawowo wolne od pracy',
    publicHolidays: [
      { date: '1 listopada 2025', name: 'Wszystkich Świętych' },
      { date: '11 listopada 2025', name: 'Święto Niepodległości' },
      { date: '1 stycznia 2026', name: 'Nowy Rok' },
      { date: '6 stycznia 2026', name: 'Trzech Króli' },
      { date: '3 kwietnia 2026', name: 'Wielki Piątek (dzień wolny WBS)' },
      { date: '6 kwietnia 2026', name: 'Poniedziałek Wielkanocny' },
      { date: '1 maja 2026', name: 'Święto Pracy' },
      { date: '3 maja 2026', name: 'Święto Konstytucji 3 Maja' },
      { date: '25 maja 2026', name: 'Zielone Świątki' },
      { date: '4 czerwca 2026', name: 'Boże Ciało' },
    ],
    additionalTitle: 'Dodatkowe dni wolne (ustalone przez dyrektora)',
    additionalDays: [
      { date: '10 października 2025', name: 'Dzień po Dniu Edukacji Narodowej' },
      { date: '2 stycznia 2026', name: 'Dzień po Nowym Roku' },
      { date: '5 czerwca 2026', name: 'Dzień po Bożym Ciele' },
    ],
    totalLabel: 'Łącznie dni wolnych od nauki',
    totalValue: '~120 dni',
    noteTitle: 'Uwaga',
    noteText: 'Kalendarz może ulec zmianie. O wszelkich zmianach rodzice zostaną powiadomieni z odpowiednim wyprzedzeniem.',
    nameLabel: 'Nazwa',
    datesLabel: 'Termin',
    durationLabel: 'Czas trwania',
    dateLabel: 'Data',
  },
  de: {
    title: 'Schulferien',
    subtitle: 'Ferien- und schulfreie Tage 2025/2026',
    intro: 'Hier finden Sie den vollständigen Kalender der schulfreien Tage im Schuljahr 2025/2026. Bitte planen Sie Ihren Urlaub entsprechend dem Schulkalender.',
    holidaysTitle: 'Ferien und Feiertage',
    holidays: [
      { icon: 'TreePine', name: 'Weihnachtsferien', dates: '23. Dezember 2025 – 1. Januar 2026', days: '10 Tage' },
      { icon: 'Snowflake', name: 'Winterferien', dates: '16. – 27. Februar 2026', days: '12 Tage' },
      { icon: 'Sun', name: 'Osterferien', dates: '2. – 7. April 2026', days: '6 Tage' },
      { icon: 'Sun', name: 'Sommerferien', dates: '27. Juni – 31. August 2026', days: '66 Tage' },
    ],
    publicTitle: 'Gesetzliche Feiertage',
    publicHolidays: [
      { date: '1. November 2025', name: 'Allerheiligen' },
      { date: '11. November 2025', name: 'Unabhängigkeitstag' },
      { date: '1. Januar 2026', name: 'Neujahr' },
      { date: '6. Januar 2026', name: 'Heilige Drei Könige' },
      { date: '3. April 2026', name: 'Karfreitag (WBS-freier Tag)' },
      { date: '6. April 2026', name: 'Ostermontag' },
      { date: '1. Mai 2026', name: 'Tag der Arbeit' },
      { date: '3. Mai 2026', name: 'Tag der Verfassung' },
      { date: '25. Mai 2026', name: 'Pfingsten' },
      { date: '4. Juni 2026', name: 'Fronleichnam' },
    ],
    additionalTitle: 'Zusätzliche freie Tage (vom Schulleiter festgelegt)',
    additionalDays: [
      { date: '10. Oktober 2025', name: 'Tag nach dem Bildungstag' },
      { date: '2. Januar 2026', name: 'Tag nach Neujahr' },
      { date: '5. Juni 2026', name: 'Tag nach Fronleichnam' },
    ],
    totalLabel: 'Gesamte schulfreie Tage',
    totalValue: '~120 Tage',
    noteTitle: 'Hinweis',
    noteText: 'Der Kalender kann sich ändern. Über alle Änderungen werden die Eltern rechtzeitig informiert.',
    nameLabel: 'Bezeichnung',
    datesLabel: 'Zeitraum',
    durationLabel: 'Dauer',
    dateLabel: 'Datum',
  },
  en: {
    title: 'School Holidays',
    subtitle: 'Holiday and break schedule 2025/2026',
    intro: 'Below is the complete calendar of school-free days for the 2025/2026 school year. Please plan your vacations in accordance with the school calendar.',
    holidaysTitle: 'School Breaks',
    holidays: [
      { icon: 'TreePine', name: 'Christmas Break', dates: 'December 23, 2025 – January 1, 2026', days: '10 days' },
      { icon: 'Snowflake', name: 'Winter Break', dates: 'February 16 – 27, 2026', days: '12 days' },
      { icon: 'Sun', name: 'Spring Break (Easter)', dates: 'April 2 – 7, 2026', days: '6 days' },
      { icon: 'Sun', name: 'Summer Holidays', dates: 'June 27 – August 31, 2026', days: '66 days' },
    ],
    publicTitle: 'Public Holidays',
    publicHolidays: [
      { date: 'November 1, 2025', name: 'All Saints\' Day' },
      { date: 'November 11, 2025', name: 'Independence Day' },
      { date: 'January 1, 2026', name: 'New Year\'s Day' },
      { date: 'January 6, 2026', name: 'Epiphany' },
      { date: 'April 3, 2026', name: 'Good Friday (WBS day off)' },
      { date: 'April 6, 2026', name: 'Easter Monday' },
      { date: 'May 1, 2026', name: 'Labour Day' },
      { date: 'May 3, 2026', name: 'Constitution Day' },
      { date: 'May 25, 2026', name: 'Whit Monday' },
      { date: 'June 4, 2026', name: 'Corpus Christi' },
    ],
    additionalTitle: 'Additional Days Off (set by the principal)',
    additionalDays: [
      { date: 'October 10, 2025', name: 'Day after National Education Day' },
      { date: 'January 2, 2026', name: 'Day after New Year\'s' },
      { date: 'June 5, 2026', name: 'Day after Corpus Christi' },
    ],
    totalLabel: 'Total school-free days',
    totalValue: '~120 days',
    noteTitle: 'Note',
    noteText: 'The calendar is subject to change. Parents will be notified of any changes in advance.',
    nameLabel: 'Name',
    datesLabel: 'Dates',
    durationLabel: 'Duration',
    dateLabel: 'Date',
  },
};

const iconMap = {
  Sun: Sun,
  Snowflake: Snowflake,
  TreePine: TreePine,
  Calendar: Calendar,
};

export default async function HolidaysPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = translations[locale as keyof typeof translations] || translations.en;

  return (
    <>
      <PageHeader lang={locale} title={t.title} description={t.subtitle} />
      <section className="section bg-white">
        <div className="container-custom max-w-4xl">
          <p className="mx-auto mb-12 max-w-3xl text-center text-xl text-neutral-600">{t.intro}</p>

          {/* Main School Breaks */}
          <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold text-neutral-900">
            <Calendar className="size-7 text-red-600" />
            {t.holidaysTitle}
          </h2>
          <div className="mb-12 grid gap-4 md:grid-cols-2">
            {t.holidays.map((holiday, i) => {
              const Icon = iconMap[holiday.icon as keyof typeof iconMap];
              return (
                <div key={i} className="rounded-xl border border-neutral-200 bg-neutral-50 p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-lg bg-red-50">
                      <Icon className="size-5 text-red-600" />
                    </div>
                    <h3 className="font-semibold text-neutral-900">{holiday.name}</h3>
                  </div>
                  <p className="mb-1 text-neutral-600">{holiday.dates}</p>
                  <p className="text-sm font-medium text-red-600">{holiday.days}</p>
                </div>
              );
            })}
          </div>

          {/* Public Holidays Table */}
          <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold text-neutral-900">
            <Sun className="size-7 text-red-600" />
            {t.publicTitle}
          </h2>
          <div className="mb-12 overflow-hidden rounded-xl border border-neutral-200 bg-white">
            <table className="w-full">
              <thead className="bg-red-600 text-white">
                <tr>
                  <th className="p-4 text-left">{t.dateLabel}</th>
                  <th className="p-4 text-left">{t.nameLabel}</th>
                </tr>
              </thead>
              <tbody>
                {t.publicHolidays.map((holiday, i) => (
                  <tr key={i} className="border-b border-neutral-100 last:border-0">
                    <td className="whitespace-nowrap p-4 font-medium text-neutral-900">{holiday.date}</td>
                    <td className="p-4 text-neutral-600">{holiday.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Additional Days Off */}
          <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold text-neutral-900">
            <TreePine className="size-7 text-red-600" />
            {t.additionalTitle}
          </h2>
          <div className="mb-12 space-y-3">
            {t.additionalDays.map((day, i) => (
              <div key={i} className="flex items-center justify-between rounded-lg border border-neutral-200 bg-white p-4">
                <span className="font-medium text-neutral-900">{day.name}</span>
                <span className="rounded-full bg-red-50 px-4 py-1 text-sm font-medium text-red-700">{day.date}</span>
              </div>
            ))}
          </div>

          {/* Total + Note */}
          <div className="mb-6 rounded-xl bg-red-600 p-6 text-center text-white">
            <p className="text-lg font-medium">{t.totalLabel}</p>
            <p className="text-3xl font-bold">{t.totalValue}</p>
          </div>

          <div className="rounded-xl border border-amber-200 bg-amber-50 p-5">
            <p className="font-semibold text-amber-800">{t.noteTitle}</p>
            <p className="mt-1 text-amber-700">{t.noteText}</p>
          </div>
        </div>
      </section>
    </>
  );
}
