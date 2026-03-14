import { Metadata } from 'next';
import PageHeader from '@/components/features/PageHeader';
import { Clock } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const titles = { pl: 'Dzwonki | WBS', de: 'Klingelzeiten | WBS', en: 'Bell Schedule | WBS' };
  return { title: titles[locale as keyof typeof titles] || titles.en };
}

const translations = {
  pl: { title: 'Rozkład Dzwonków', subtitle: 'Godziny zajęć w szkole' },
  de: { title: 'Klingelzeiten', subtitle: 'Unterrichtszeiten' },
  en: { title: 'Bell Schedule', subtitle: 'School hours schedule' },
};

export default async function BellSchedulePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = translations[locale as keyof typeof translations] || translations.en;

  const schedule = [
    { lesson: '1', start: '8:00', end: '8:45' },
    { lesson: '2', start: '8:55', end: '9:40' },
    { lesson: '3', start: '9:50', end: '10:35' },
    { lesson: '4', start: '10:45', end: '11:30' },
    { lesson: '5', start: '11:40', end: '12:25' },
    { lesson: '6', start: '12:35', end: '13:20' },
    { lesson: '7', start: '13:30', end: '14:15' },
    { lesson: '8', start: '14:25', end: '15:10' },
  ];

  return (
    <>
      <PageHeader lang={locale} title={t.title} description={t.subtitle} />
      <section className="section bg-white">
        <div className="container-custom max-w-2xl">
          <div className="bg-white border border-neutral-200 rounded-xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-primary-600 text-white">
                <tr>
                  <th className="p-4 text-left">{locale === 'pl' ? 'Lekcja' : locale === 'de' ? 'Stunde' : 'Lesson'}</th>
                  <th className="p-4 text-left">{locale === 'pl' ? 'Rozpoczęcie' : locale === 'de' ? 'Beginn' : 'Start'}</th>
                  <th className="p-4 text-left">{locale === 'pl' ? 'Zakończenie' : locale === 'de' ? 'Ende' : 'End'}</th>
                </tr>
              </thead>
              <tbody>
                {schedule.map((s, i) => (
                  <tr key={i} className="border-b border-neutral-100 last:border-0">
                    <td className="p-4 font-medium">{s.lesson}</td>
                    <td className="p-4">{s.start}</td>
                    <td className="p-4">{s.end}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
