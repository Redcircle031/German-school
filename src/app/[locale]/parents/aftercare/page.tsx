import { Metadata } from 'next';
import PageHeader from '@/components/features/PageHeader';
import { Clock, Users, Gamepad, BookOpen } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const titles = { pl: 'Opieka | WBS', de: 'Betreuung | WBS', en: 'Aftercare | WBS' };
  return { title: titles[locale as keyof typeof titles] || titles.en };
}

const translations = {
  pl: {
    title: 'Opieka Popołudniowa',
    subtitle: 'Bezpieczne miejsce po lekcjach',
    intro: 'Oferujemy opiekę popołudniową dla uczniów klas 1-6. Dzieci mają zapewnione miejsce do odrabiania lekcji, zabawy i odpoczynku.',
    hours: 'Godziny: 14:00 - 17:00',
  },
  de: {
    title: 'Nachmittagsbetreuung',
    subtitle: 'Sicherer Ort nach der Schule',
    intro: 'Wir bieten Nachmittagsbetreuung für Schüler der Klassen 1-6 an. Die Kinder haben einen Platz zum Hausaufgabenmachen, Spielen und Entspannen.',
    hours: 'Zeiten: 14:00 - 17:00',
  },
  en: {
    title: 'After-school Care',
    subtitle: 'Safe place after classes',
    intro: 'We offer after-school care for students in grades 1-6. Children have a place to do homework, play and relax.',
    hours: 'Hours: 14:00 - 17:00',
  },
};

export default async function AftercarePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = translations[locale as keyof typeof translations] || translations.en;

  return (
    <>
      <PageHeader lang={locale} title={t.title} description={t.subtitle} />
      <section className="section bg-white">
        <div className="container-custom max-w-3xl">
          <p className="mb-8 text-center text-xl text-neutral-600">{t.intro}</p>
          <div className="flex items-center justify-center gap-3 font-semibold text-red-600">
            <Clock className="size-5" />
            <span>{t.hours}</span>
          </div>
        </div>
      </section>
    </>
  );
}
