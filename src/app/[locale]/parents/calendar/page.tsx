import { Metadata } from 'next';
import PageHeader from '@/components/features/PageHeader';
import { Calendar, Clock, Bell } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const titles: Record<string, string> = { pl: 'Kalendarz Szkolny | WBS', de: 'Schulkalender | WBS', en: 'School Calendar | WBS' };
  const descriptions: Record<string, string> = {
    pl: 'Kalendarz roku szkolnego 2025/2026 - ważne daty, ferie, egzaminy i zebrania z rodzicami.',
    de: 'Schulkalender 2025/2026 - wichtige Termine, Ferien, Prüfungen und Elternsprechtage.',
    en: 'School calendar 2025/2026 - key dates, holidays, exams and parent-teacher conferences.',
  };
  return { title: titles[locale] || titles.en, description: descriptions[locale] || descriptions.en };
}

const translations = {
  pl: {
    title: 'Kalendarz Szkolny',
    subtitle: 'Ważne daty roku szkolnego 2025/2026',
    intro: 'Poniżej znajdą Państwo najważniejsze daty i wydarzenia w roku szkolnym 2025/2026. Prosimy o zaplanowanie urlopów i wyjazdów z uwzględnieniem kalendarza szkolnego.',
    semesterTitle: 'Semestry',
    semester1: 'I semestr',
    semester1Dates: '1 września 2025 – 31 stycznia 2026',
    semester2: 'II semestr',
    semester2Dates: '1 lutego 2026 – 26 czerwca 2026',
    examsTitle: 'Okresy egzaminacyjne',
    exam1: 'Egzaminy śródroczne',
    exam1Dates: '19 – 23 stycznia 2026',
    exam2: 'Egzaminy końcowe',
    exam2Dates: '8 – 19 czerwca 2026',
    exam3: 'Egzaminy poprawkowe',
    exam3Dates: '24 – 28 sierpnia 2026',
    meetingsTitle: 'Zebrania z rodzicami',
    meeting1: 'Zebranie organizacyjne',
    meeting1Date: '10 września 2025',
    meeting2: 'Konsultacje I semestr',
    meeting2Date: '19 listopada 2025',
    meeting3: 'Podsumowanie I semestru',
    meeting3Date: '4 lutego 2026',
    meeting4: 'Konsultacje II semestr',
    meeting4Date: '22 kwietnia 2026',
    meeting5: 'Zebranie końcoworoczne',
    meeting5Date: '10 czerwca 2026',
    keyDatesTitle: 'Kluczowe daty',
    keyDate1: 'Inauguracja roku szkolnego',
    keyDate1Date: '1 września 2025',
    keyDate2: 'Dzień Edukacji Narodowej',
    keyDate2Date: '14 października 2025',
    keyDate3: 'Dzień otwarty szkoły',
    keyDate3Date: '15 marca 2026',
    keyDate4: 'Zakończenie roku szkolnego',
    keyDate4Date: '26 czerwca 2026',
  },
  de: {
    title: 'Schulkalender',
    subtitle: 'Wichtige Termine im Schuljahr 2025/2026',
    intro: 'Hier finden Sie die wichtigsten Termine und Veranstaltungen im Schuljahr 2025/2026. Bitte berücksichtigen Sie den Schulkalender bei Ihrer Urlaubsplanung.',
    semesterTitle: 'Halbjahre',
    semester1: '1. Halbjahr',
    semester1Dates: '1. September 2025 – 31. Januar 2026',
    semester2: '2. Halbjahr',
    semester2Dates: '1. Februar 2026 – 26. Juni 2026',
    examsTitle: 'Prüfungszeiträume',
    exam1: 'Halbjahrsprüfungen',
    exam1Dates: '19. – 23. Januar 2026',
    exam2: 'Abschlussprüfungen',
    exam2Dates: '8. – 19. Juni 2026',
    exam3: 'Nachprüfungen',
    exam3Dates: '24. – 28. August 2026',
    meetingsTitle: 'Elternsprechtage',
    meeting1: 'Organisatorische Versammlung',
    meeting1Date: '10. September 2025',
    meeting2: 'Beratung 1. Halbjahr',
    meeting2Date: '19. November 2025',
    meeting3: 'Zusammenfassung 1. Halbjahr',
    meeting3Date: '4. Februar 2026',
    meeting4: 'Beratung 2. Halbjahr',
    meeting4Date: '22. April 2026',
    meeting5: 'Jahresabschlussversammlung',
    meeting5Date: '10. Juni 2026',
    keyDatesTitle: 'Wichtige Termine',
    keyDate1: 'Schuljahreseröffnung',
    keyDate1Date: '1. September 2025',
    keyDate2: 'Tag der Bildung',
    keyDate2Date: '14. Oktober 2025',
    keyDate3: 'Tag der offenen Tür',
    keyDate3Date: '15. März 2026',
    keyDate4: 'Schuljahresende',
    keyDate4Date: '26. Juni 2026',
  },
  en: {
    title: 'School Calendar',
    subtitle: 'Key dates for the 2025/2026 school year',
    intro: 'Below you will find the most important dates and events for the 2025/2026 school year. Please consider the school calendar when planning vacations and trips.',
    semesterTitle: 'Semesters',
    semester1: '1st Semester',
    semester1Dates: 'September 1, 2025 – January 31, 2026',
    semester2: '2nd Semester',
    semester2Dates: 'February 1, 2026 – June 26, 2026',
    examsTitle: 'Exam Periods',
    exam1: 'Mid-year Exams',
    exam1Dates: 'January 19 – 23, 2026',
    exam2: 'Final Exams',
    exam2Dates: 'June 8 – 19, 2026',
    exam3: 'Resit Exams',
    exam3Dates: 'August 24 – 28, 2026',
    meetingsTitle: 'Parent-Teacher Conferences',
    meeting1: 'Organizational Meeting',
    meeting1Date: 'September 10, 2025',
    meeting2: '1st Semester Consultations',
    meeting2Date: 'November 19, 2025',
    meeting3: '1st Semester Summary',
    meeting3Date: 'February 4, 2026',
    meeting4: '2nd Semester Consultations',
    meeting4Date: 'April 22, 2026',
    meeting5: 'End-of-Year Meeting',
    meeting5Date: 'June 10, 2026',
    keyDatesTitle: 'Key Dates',
    keyDate1: 'School Year Opening Ceremony',
    keyDate1Date: 'September 1, 2025',
    keyDate2: 'National Education Day',
    keyDate2Date: 'October 14, 2025',
    keyDate3: 'Open Day',
    keyDate3Date: 'March 15, 2026',
    keyDate4: 'End of School Year',
    keyDate4Date: 'June 26, 2026',
  },
};

export default async function CalendarPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = translations[locale as keyof typeof translations] || translations.en;

  return (
    <>
      <PageHeader lang={locale} title={t.title} description={t.subtitle} />
      <section className="section bg-white">
        <div className="container-custom max-w-4xl">
          <p className="mx-auto mb-12 max-w-3xl text-center text-xl text-neutral-600">{t.intro}</p>

          {/* Semesters */}
          <div className="mb-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-6">
              <Calendar className="mb-3 size-8 text-red-600" />
              <h3 className="mb-1 text-lg font-semibold text-neutral-900">{t.semester1}</h3>
              <p className="text-neutral-600">{t.semester1Dates}</p>
            </div>
            <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-6">
              <Calendar className="mb-3 size-8 text-red-600" />
              <h3 className="mb-1 text-lg font-semibold text-neutral-900">{t.semester2}</h3>
              <p className="text-neutral-600">{t.semester2Dates}</p>
            </div>
          </div>

          {/* Exam Periods */}
          <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold text-neutral-900">
            <Clock className="size-7 text-red-600" />
            {t.examsTitle}
          </h2>
          <div className="mb-12 space-y-4">
            {[
              { label: t.exam1, date: t.exam1Dates },
              { label: t.exam2, date: t.exam2Dates },
              { label: t.exam3, date: t.exam3Dates },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between rounded-lg border border-neutral-200 bg-white p-4">
                <span className="font-medium text-neutral-900">{item.label}</span>
                <span className="rounded-full bg-red-50 px-4 py-1 text-sm font-medium text-red-700">{item.date}</span>
              </div>
            ))}
          </div>

          {/* Parent-Teacher Conferences */}
          <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold text-neutral-900">
            <Bell className="size-7 text-red-600" />
            {t.meetingsTitle}
          </h2>
          <div className="mb-12 overflow-hidden rounded-xl border border-neutral-200 bg-white">
            <table className="w-full">
              <thead className="bg-red-600 text-white">
                <tr>
                  <th className="p-4 text-left">{locale === 'pl' ? 'Wydarzenie' : locale === 'de' ? 'Veranstaltung' : 'Event'}</th>
                  <th className="p-4 text-left">{locale === 'pl' ? 'Data' : locale === 'de' ? 'Datum' : 'Date'}</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { event: t.meeting1, date: t.meeting1Date },
                  { event: t.meeting2, date: t.meeting2Date },
                  { event: t.meeting3, date: t.meeting3Date },
                  { event: t.meeting4, date: t.meeting4Date },
                  { event: t.meeting5, date: t.meeting5Date },
                ].map((item, i) => (
                  <tr key={i} className="border-b border-neutral-100 last:border-0">
                    <td className="p-4 font-medium text-neutral-900">{item.event}</td>
                    <td className="p-4 text-neutral-600">{item.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Key Dates */}
          <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold text-neutral-900">
            <Calendar className="size-7 text-red-600" />
            {t.keyDatesTitle}
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              { label: t.keyDate1, date: t.keyDate1Date },
              { label: t.keyDate2, date: t.keyDate2Date },
              { label: t.keyDate3, date: t.keyDate3Date },
              { label: t.keyDate4, date: t.keyDate4Date },
            ].map((item, i) => (
              <div key={i} className="rounded-xl border border-neutral-200 bg-neutral-50 p-5">
                <p className="mb-1 font-semibold text-neutral-900">{item.label}</p>
                <p className="text-sm text-red-600">{item.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
