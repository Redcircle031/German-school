import { Metadata } from 'next';
import PageHeader from '@/components/features/PageHeader';
import { Calendar, Download } from 'lucide-react';
import holidaysData from '@/data/extracted/holidays.json';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const titles = { pl: 'Ferie 2025/26 | WBS', de: 'Ferien 2025/26 | WBS', en: 'Holidays 2025/26 | WBS' };
  return { title: titles[locale as keyof typeof titles] || titles.en };
}

const translations = {
  pl: { title: 'Kalendarz Ferii 2025/26', subtitle: 'Plan ferii i dni wolnych w roku szkolnym 2025/2026', semesterLabel: 'Semestr', downloadLabel: 'Pobierz PDF' },
  de: { title: 'Ferienplan 2025/26', subtitle: 'Ferien- und unterrichtsfreie Tage im Schuljahr 2025/2026', semesterLabel: 'Halbjahr', downloadLabel: 'PDF herunterladen' },
  en: { title: 'Holiday Calendar 2025/26', subtitle: 'Holidays and days off in the 2025/2026 school year', semesterLabel: 'Semester', downloadLabel: 'Download PDF' },
};

export default async function Holidays2025Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = translations[locale as keyof typeof translations] || translations.en;
  const yearData = holidaysData.schoolYears['2025-26'];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString(locale === 'pl' ? 'pl-PL' : locale === 'de' ? 'de-DE' : 'en-US', { day: 'numeric', month: 'long', year: 'numeric' });
  };

  return (
    <>
      <PageHeader lang={locale} title={t.title} description={t.subtitle} />
      <section className="section bg-white">
        <div className="container-custom max-w-3xl">
          <div className="mb-8">
            <a href="/pdfs/ferienplan_2025_26.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700">
              <Download className="size-4" /> {t.downloadLabel}
            </a>
          </div>

          <div className="mb-12 grid gap-4 md:grid-cols-2">
            {yearData.semesters.map((sem) => (
              <div key={sem.semester} className="rounded-xl bg-red-600 p-6 text-white">
                <p className="mb-1 text-sm text-red-200">{t.semesterLabel} {sem.semester}</p>
                <p className="text-lg font-bold">{formatDate(sem.start)} — {formatDate(sem.end)}</p>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            {yearData.holidays.map((holiday, i) => {
              const name = holiday.name[locale as keyof typeof holiday.name] || holiday.name.en;
              const isSingle = holiday.start === holiday.end;
              return (
                <div key={i} className="flex items-center gap-4 rounded-xl bg-neutral-50 p-4">
                  <Calendar className="size-5 shrink-0 text-red-600" />
                  <div className="flex-1">
                    <p className="font-semibold text-neutral-900">{name}</p>
                    <p className="text-sm text-neutral-500">
                      {isSingle ? formatDate(holiday.start) : `${formatDate(holiday.start)} — ${formatDate(holiday.end)}`}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
