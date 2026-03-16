import { Metadata } from 'next';
import PageHeader from '@/components/features/PageHeader';
import { Clock, Coffee } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const titles = { pl: 'Rozkład Dzwonków | WBS', de: 'Klingelzeiten | WBS', en: 'Bell Schedule | WBS' };
  const descriptions = {
    pl: 'Godziny lekcji i przerw w Szkole WBS w Warszawie',
    de: 'Unterrichts- und Pausenzeiten an der WBS Warschau',
    en: 'Lesson and break times at WBS Warsaw',
  };
  return {
    title: titles[locale as keyof typeof titles] || titles.en,
    description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
  };
}

const translations = {
  pl: {
    title: 'Rozkład Dzwonków',
    subtitle: 'Godziny lekcji i przerw',
    lessonLabel: 'Lekcja',
    breakLabel: 'Przerwa',
    statsLessons: 'lekcji dziennie',
    statsLessonLen: 'min każda lekcja',
    statsBreakLen: 'min przerwy',
    dayStart: 'Początek dnia szkolnego',
    dayEnd: 'Koniec lekcji',
    totalLabel: 'Łączny czas zajęć',
    totalValue: '7 godz. 10 min',
    note: 'Rozkład obowiązuje od poniedziałku do piątku. Świetlica czynna do godziny 17:00.',
  },
  de: {
    title: 'Klingelzeiten',
    subtitle: 'Unterrichts- und Pausenzeiten',
    lessonLabel: 'Stunde',
    breakLabel: 'Pause',
    statsLessons: 'Stunden täglich',
    statsLessonLen: 'Min. pro Stunde',
    statsBreakLen: 'Min. Pause',
    dayStart: 'Schulbeginn',
    dayEnd: 'Unterrichtsende',
    totalLabel: 'Gesamtunterrichtszeit',
    totalValue: '7 Std. 10 Min.',
    note: 'Der Stundenplan gilt Montag bis Freitag. Der Hort ist bis 17:00 Uhr geöffnet.',
  },
  en: {
    title: 'Bell Schedule',
    subtitle: 'Lesson and break times',
    lessonLabel: 'Lesson',
    breakLabel: 'Break',
    statsLessons: 'lessons per day',
    statsLessonLen: 'min per lesson',
    statsBreakLen: 'min breaks',
    dayStart: 'School day starts',
    dayEnd: 'Lessons end',
    totalLabel: 'Total school time',
    totalValue: '7 hrs 10 min',
    note: 'Schedule applies Monday to Friday. After-school care open until 17:00.',
  },
};

const lessons = [
  { lesson: 1, start: '8:00', end: '8:45' },
  { lesson: 2, start: '8:55', end: '9:40' },
  { lesson: 3, start: '9:50', end: '10:35' },
  { lesson: 4, start: '10:45', end: '11:30' },
  { lesson: 5, start: '11:40', end: '12:25' },
  { lesson: 6, start: '12:35', end: '13:20' },
  { lesson: 7, start: '13:30', end: '14:15' },
  { lesson: 8, start: '14:25', end: '15:10' },
];

export default async function BellSchedulePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = translations[locale as keyof typeof translations] || translations.en;

  return (
    <>
      <PageHeader lang={locale} title={t.title} description={t.subtitle} />

      <section className="bg-neutral-50 py-12 md:py-16">
        <div className="container-custom max-w-2xl">

          {/* Stats strip */}
          <div className="mb-10 grid grid-cols-3 gap-4">
            <div className="rounded-xl border border-neutral-200 bg-white p-4 text-center shadow-sm">
              <p className="text-3xl font-bold text-red-600">8</p>
              <p className="mt-1 text-xs text-neutral-500">{t.statsLessons}</p>
            </div>
            <div className="rounded-xl border border-neutral-200 bg-white p-4 text-center shadow-sm">
              <p className="text-3xl font-bold text-red-600">45</p>
              <p className="mt-1 text-xs text-neutral-500">{t.statsLessonLen}</p>
            </div>
            <div className="rounded-xl border border-neutral-200 bg-white p-4 text-center shadow-sm">
              <p className="text-3xl font-bold text-red-600">10</p>
              <p className="mt-1 text-xs text-neutral-500">{t.statsBreakLen}</p>
            </div>
          </div>

          {/* Day bookends */}
          <div className="mb-6 flex items-center justify-between rounded-xl bg-red-600 px-6 py-4 text-white">
            <div className="flex items-center gap-2">
              <Clock className="size-4 text-red-200" />
              <span className="text-sm text-red-100">{t.dayStart}</span>
            </div>
            <span className="text-2xl font-bold">8:00</span>
          </div>

          {/* Timeline */}
          <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm">
            {lessons.map((item, i) => (
              <div key={item.lesson}>
                {/* Lesson row */}
                <div className="flex items-center gap-4 border-b border-neutral-100 px-5 py-4 last:border-0">
                  {/* Lesson number bubble */}
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-red-600 text-sm font-bold text-white">
                    {item.lesson}
                  </div>

                  {/* Label */}
                  <div className="flex-1">
                    <p className="font-semibold text-neutral-900">
                      {t.lessonLabel} {item.lesson}
                    </p>
                    <p className="text-sm text-neutral-400">{locale === 'pl' ? '45 minut' : locale === 'de' ? '45 Minuten' : '45 minutes'}</p>
                  </div>

                  {/* Time range */}
                  <div className="text-right">
                    <p className="text-lg font-bold tabular-nums text-neutral-900">{item.start}</p>
                    <p className="text-sm text-neutral-400 tabular-nums">→ {item.end}</p>
                  </div>
                </div>

                {/* Break divider (not after last lesson) */}
                {i < lessons.length - 1 && (
                  <div className="flex items-center gap-3 border-b border-neutral-100 bg-amber-50 px-5 py-2.5">
                    <Coffee className="size-4 shrink-0 text-amber-500" />
                    <p className="flex-1 text-xs text-amber-700">{t.breakLabel}</p>
                    <p className="text-xs font-medium tabular-nums text-amber-600">
                      {item.end} — {lessons[i + 1].start}
                    </p>
                    <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-700">10 min</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Day end bar */}
          <div className="mt-6 flex items-center justify-between rounded-xl bg-neutral-800 px-6 py-4 text-white">
            <div className="flex items-center gap-2">
              <Clock className="size-4 text-neutral-400" />
              <span className="text-sm text-neutral-300">{t.dayEnd}</span>
            </div>
            <span className="text-2xl font-bold">15:10</span>
          </div>

          {/* Total */}
          <div className="mt-4 flex items-center justify-between rounded-xl bg-neutral-100 px-5 py-3">
            <span className="text-sm text-neutral-500">{t.totalLabel}</span>
            <span className="font-semibold text-neutral-800">{t.totalValue}</span>
          </div>

          {/* Note */}
          <p className="mt-6 text-center text-sm text-neutral-400">{t.note}</p>
        </div>
      </section>
    </>
  );
}
