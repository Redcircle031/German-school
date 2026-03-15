import { Metadata } from 'next';
import PageHeader from '@/components/features/PageHeader';
import { Music, Mic, Guitar, Piano, Drum } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const titles = { pl: 'Akademia Muzyczna | WBS', de: 'Musikakademie | WBS', en: 'Music Academy | WBS' };
  return { title: titles[locale as keyof typeof titles] || titles.en };
}

const translations = {
  pl: {
    title: 'Akademia Muzyczna WBS',
    subtitle: 'Rozwijaj swoje talenty muzyczne',
    intro: 'Akademia Muzyczna WBS oferuje zajęcia instrumentalne, wokalne i teoretyczne dla uczniów wszystkich klas. Nauka pod okiem doświadczonych muzyków i pedagogów.',
    instruments: ['Pianino', 'Gitara', 'Skrzypce', 'Perkusja', 'Flet', 'Wokal'],
  },
  de: {
    title: 'WBS Musikakademie',
    subtitle: 'Entwickeln Sie Ihre musikalischen Talente',
    intro: 'Die WBS Musikakademie bietet Instrumental-, Gesangs- und Theorieunterricht für Schüler aller Klassen. Lernen Sie unter der Anleitung erfahrener Musiker und Pädagogen.',
    instruments: ['Klavier', 'Gitarre', 'Violine', 'Schlagzeug', 'Flöte', 'Gesang'],
  },
  en: {
    title: 'WBS Music Academy',
    subtitle: 'Develop your musical talents',
    intro: 'The WBS Music Academy offers instrumental, vocal, and theory classes for students of all grades. Learn under the guidance of experienced musicians and educators.',
    instruments: ['Piano', 'Guitar', 'Violin', 'Drums', 'Flute', 'Vocal'],
  },
};

export default async function MusicAcademyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = translations[locale as keyof typeof translations] || translations.en;

  const icons = [Piano, Guitar, Music, Drum, Mic, Mic];

  return (
    <>
      <PageHeader lang={locale} title={t.title} description={t.subtitle} />
      <section className="section bg-white">
        <div className="container-custom">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="text-xl leading-relaxed text-neutral-600">{t.intro}</p>
          </div>

          <h2 className="mb-8 text-center text-2xl font-bold text-neutral-900">
            {locale === 'pl' ? 'Oferta instrumentalna' : locale === 'de' ? 'Instrumentenangebot' : 'Instrumental Offer'}
          </h2>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
            {t.instruments.map((instrument, i) => {
              const Icon = icons[i];
              return (
                <div key={i} className="rounded-xl bg-neutral-50 p-6 text-center transition-colors hover:bg-red-50">
                  <Icon className="mx-auto mb-3 size-10 text-red-600" />
                  <p className="font-semibold text-neutral-900">{instrument}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
