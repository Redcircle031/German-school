import { Metadata } from 'next';
import PageHeader from '@/components/features/PageHeader';
import { Utensils, Clock, Calendar, AlertCircle } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const titles = { pl: 'Stołówka | WBS', de: 'Kantine | WBS', en: 'Canteen | WBS' };
  return { title: titles[locale as keyof typeof titles] || titles.en };
}

const translations = {
  pl: {
    title: 'Stołówka Szkolna', subtitle: 'Zdrowe posiłki dla uczniów',
    intro: 'Nasza stołówka oferuje codzienne, zbilansowane posiłki przygotowane z świeżych składników.',
    hours: 'Godziny otwarcia', lunch: 'Wydawanie obiadów', snack: 'Podwieczorek',
    hoursTime: '7:30 - 16:00', lunchTime: '11:30 - 14:00', snackTime: '14:00 - 15:30',
    menuTitle: 'Przykładowy jadłospis', contact: 'Kontakt',
  },
  de: {
    title: 'Schulkantine', subtitle: 'Gesunde Mahlzeiten für Schüler',
    intro: 'Unsere Kantine bietet tägliche, ausgewogene Mahlzeiten aus frischen Zutaten.',
    hours: 'Öffnungszeiten', lunch: 'Mittagessen', snack: 'Nachmittagssnack',
    hoursTime: '7:30 - 16:00', lunchTime: '11:30 - 14:00', snackTime: '14:00 - 15:30',
    menuTitle: 'Beispiel-Speiseplan', contact: 'Kontakt',
  },
  en: {
    title: 'School Canteen', subtitle: 'Healthy meals for students',
    intro: 'Our canteen offers daily, balanced meals prepared with fresh ingredients.',
    hours: 'Opening Hours', lunch: 'Lunch Service', snack: 'Afternoon Snack',
    hoursTime: '7:30 - 16:00', lunchTime: '11:30 - 14:00', snackTime: '14:00 - 15:30',
    menuTitle: 'Sample Menu', contact: 'Contact',
  },
};

export default async function CanteenPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = translations[locale as keyof typeof translations] || translations.en;

  const menuItems = [
    { day: locale === 'pl' ? 'Poniedziałek' : locale === 'de' ? 'Montag' : 'Monday', soup: 'Zupa pomidorowa', main: 'Kurczak z ryżem i surówką' },
    { day: locale === 'pl' ? 'Wtorek' : locale === 'de' ? 'Dienstag' : 'Tuesday', soup: 'Zupa jarzynowa', main: 'Kotlet schabowy z ziemniakami' },
    { day: locale === 'pl' ? 'Środa' : locale === 'de' ? 'Mittwoch' : 'Wednesday', soup: 'Rosół', main: 'Pierogi z mięsem' },
    { day: locale === 'pl' ? 'Czwartek' : locale === 'de' ? 'Donnerstag' : 'Thursday', soup: 'Zupa ogórkowa', main: 'Ryba z frytkami' },
    { day: locale === 'pl' ? 'Piątek' : locale === 'de' ? 'Freitag' : 'Friday', soup: 'Barszcz czerwony', main: 'Naleśniki z serem' },
  ];

  return (
    <>
      <PageHeader lang={locale} title={t.title} description={t.subtitle} />
      <section className="section bg-white">
        <div className="container-custom">
          <p className="text-xl text-neutral-600 text-center max-w-3xl mx-auto mb-12">{t.intro}</p>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-neutral-50 rounded-xl p-6 text-center">
              <Clock className="w-8 h-8 text-primary-600 mx-auto mb-3" />
              <h3 className="font-semibold text-neutral-900">{t.hours}</h3>
              <p className="text-neutral-600">{t.hoursTime}</p>
            </div>
            <div className="bg-neutral-50 rounded-xl p-6 text-center">
              <Utensils className="w-8 h-8 text-primary-600 mx-auto mb-3" />
              <h3 className="font-semibold text-neutral-900">{t.lunch}</h3>
              <p className="text-neutral-600">{t.lunchTime}</p>
            </div>
            <div className="bg-neutral-50 rounded-xl p-6 text-center">
              <Calendar className="w-8 h-8 text-primary-600 mx-auto mb-3" />
              <h3 className="font-semibold text-neutral-900">{t.snack}</h3>
              <p className="text-neutral-600">{t.snackTime}</p>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-neutral-900 mb-6">{t.menuTitle}</h2>
          <div className="bg-white border border-neutral-200 rounded-xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-neutral-50">
                <tr>
                  <th className="text-left p-4 font-semibold text-neutral-900">{locale === 'pl' ? 'Dzień' : locale === 'de' ? 'Tag' : 'Day'}</th>
                  <th className="text-left p-4 font-semibold text-neutral-900">{locale === 'pl' ? 'Zupa' : locale === 'de' ? 'Suppe' : 'Soup'}</th>
                  <th className="text-left p-4 font-semibold text-neutral-900">{locale === 'pl' ? 'Danie główne' : locale === 'de' ? 'Hauptgericht' : 'Main Course'}</th>
                </tr>
              </thead>
              <tbody>
                {menuItems.map((item, i) => (
                  <tr key={i} className="border-t border-neutral-100">
                    <td className="p-4 font-medium text-neutral-900">{item.day}</td>
                    <td className="p-4 text-neutral-600">{item.soup}</td>
                    <td className="p-4 text-neutral-600">{item.main}</td>
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
