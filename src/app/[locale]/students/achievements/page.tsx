import { Metadata } from 'next';
import PageHeader from '@/components/features/PageHeader';
import { Trophy, Medal, Star, Award } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const titles = { pl: 'Osiągnięcia | WBS', de: 'Erfolge | WBS', en: 'Achievements | WBS' };
  return { title: titles[locale as keyof typeof titles] || titles.en };
}

const translations = {
  pl: { title: 'Nasze Osiągnięcia', subtitle: 'Sukcesy uczniów i szkoły' },
  de: { title: 'Unsere Erfolge', subtitle: 'Erfolge von Schülern und Schule' },
  en: { title: 'Our Achievements', subtitle: 'Successes of students and school' },
};

export default async function AchievementsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = translations[locale as keyof typeof translations] || translations.en;

  const achievements = [
    { year: '2024', title: locale === 'pl' ? 'Laureat Olimpiady Matematycznej' : locale === 'de' ? 'Mathe-Olympiade Preisträger' : 'Math Olympiad Laureate', icon: Trophy },
    { year: '2024', title: locale === 'pl' ? 'Mistrzostwa w Piłce Nożnej' : locale === 'de' ? 'Fußballmeisterschaft' : 'Football Championship', icon: Medal },
    { year: '2023', title: locale === 'pl' ? 'Festiwal Chórów - Złoto' : locale === 'de' ? 'Chorfestival - Gold' : 'Choir Festival - Gold', icon: Star },
    { year: '2023', title: locale === 'pl' ? 'Konkurs Języka Niemieckiego' : locale === 'de' ? 'Deutschsprachiger Wettbewerb' : 'German Language Competition', icon: Award },
  ];

  return (
    <>
      <PageHeader lang={locale} title={t.title} description={t.subtitle} />
      <section className="section bg-white">
        <div className="container-custom max-w-3xl">
          <div className="space-y-6">
            {achievements.map((a, i) => (
              <div key={i} className="flex items-center gap-6 p-6 bg-neutral-50 rounded-xl">
                <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <a.icon className="w-8 h-8 text-primary-600" />
                </div>
                <div>
                  <span className="text-sm text-primary-600 font-semibold">{a.year}</span>
                  <h3 className="text-xl font-semibold text-neutral-900">{a.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
