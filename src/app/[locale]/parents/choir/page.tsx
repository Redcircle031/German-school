import { Metadata } from 'next';
import PageHeader from '@/components/features/PageHeader';
import { Music, Calendar, Users, Clock } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const titles = { pl: 'Chór Rodziców | WBS', de: 'Elternchor | WBS', en: 'Parent Choir | WBS' };
  return { title: titles[locale as keyof typeof titles] || titles.en };
}

const translations = {
  pl: {
    title: 'Chór Rodziców SchELF',
    subtitle: 'Szkolno-Rodzicielski Ensemble Ludzi Fajnych',
    intro: 'SchELF (Szkolno-Rodzicielski Ensemble Ludzi Fajnych) to chór rodziców i pracowników WBS. Występujemy na szkolnych uroczystościach, koncertach bożonarodzeniowych i imprezach integracyjnych. Zapraszamy wszystkich rodziców — nie wymagamy doświadczenia muzycznego!',
    scheduleTitle: 'Próby',
    schedule: 'Co drugi czwartek, 18:30 – 20:00, aula szkolna',
    whoTitle: 'Kto może dołączyć?',
    whoDesc: 'Wszyscy rodzice i pracownicy WBS. Nie wymagamy doświadczenia muzycznego ani umiejętności czytania nut.',
    performancesTitle: 'Występy',
    performances: ['Koncert Bożonarodzeniowy', 'Festyn Szkolny', 'Dzień Otwarty WBS', 'Jubileusze i uroczystości szkolne'],
    contactTitle: 'Kontakt',
    contactDesc: 'Zainteresowani? Wystarczy przyjść na najbliższą próbę lub napisać na adres chór@wbs.pl.',
  },
  de: {
    title: 'Elternchor SchELF',
    subtitle: 'Schul-Eltern-Ensemble lustiger Fans',
    intro: 'SchELF ist der Eltern- und Mitarbeiterchor der WBS. Wir treten bei Schulfeierlichkeiten, Weihnachtskonzerten und Integrationsfesten auf. Alle Eltern sind willkommen — musikalische Erfahrung ist nicht erforderlich!',
    scheduleTitle: 'Proben',
    schedule: 'Jeden zweiten Donnerstag, 18:30 – 20:00, Schulaula',
    whoTitle: 'Wer kann mitmachen?',
    whoDesc: 'Alle Eltern und Mitarbeiter der WBS. Musikalische Erfahrung oder Notenlesen ist nicht erforderlich.',
    performancesTitle: 'Auftritte',
    performances: ['Weihnachtskonzert', 'Schulfest', 'Tag der offenen Tür', 'Schuljubiläen und Feierlichkeiten'],
    contactTitle: 'Kontakt',
    contactDesc: 'Interessiert? Kommen Sie einfach zur nächsten Probe oder schreiben Sie an chór@wbs.pl.',
  },
  en: {
    title: 'Parent Choir SchELF',
    subtitle: 'School-Parent Ensemble of Fun People',
    intro: 'SchELF is the WBS parent and staff choir. We perform at school celebrations, Christmas concerts, and community events. All parents are welcome — no musical experience required!',
    scheduleTitle: 'Rehearsals',
    schedule: 'Every other Thursday, 18:30 – 20:00, school assembly hall',
    whoTitle: 'Who can join?',
    whoDesc: 'All WBS parents and staff. No musical experience or ability to read sheet music is required.',
    performancesTitle: 'Performances',
    performances: ['Christmas Concert', 'School Festival', 'Open Day', 'School anniversaries and celebrations'],
    contactTitle: 'Contact',
    contactDesc: 'Interested? Just come to the next rehearsal or write to chór@wbs.pl.',
  },
};

export default async function ChoirPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = translations[locale as keyof typeof translations] || translations.en;

  return (
    <>
      <PageHeader lang={locale} title={t.title} description={t.subtitle} />
      <section className="section bg-white">
        <div className="container-custom max-w-3xl">
          <div className="mb-12 text-center">
            <p className="text-xl leading-relaxed text-neutral-600">{t.intro}</p>
          </div>

          <div className="mb-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-red-600 p-8 text-center text-white">
              <Clock className="mx-auto mb-4 size-10 text-red-200" />
              <h2 className="mb-2 text-xl font-bold">{t.scheduleTitle}</h2>
              <p className="text-red-100">{t.schedule}</p>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-8">
              <Users className="mb-4 size-10 text-red-600" />
              <h2 className="mb-2 text-xl font-bold text-neutral-900">{t.whoTitle}</h2>
              <p className="text-neutral-600">{t.whoDesc}</p>
            </div>
          </div>

          <div className="mb-12 rounded-2xl border border-neutral-200 bg-neutral-50 p-8">
            <Music className="mb-4 size-8 text-red-600" />
            <h2 className="mb-4 text-xl font-bold text-neutral-900">{t.performancesTitle}</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {t.performances.map((p, i) => (
                <div key={i} className="flex items-center gap-3 rounded-lg bg-white p-3">
                  <Calendar className="size-4 text-red-600" />
                  <span className="text-neutral-700">{p}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-neutral-900 p-8 text-white">
            <h2 className="mb-3 text-xl font-bold">{t.contactTitle}</h2>
            <p className="text-neutral-300">{t.contactDesc}</p>
          </div>
        </div>
      </section>
    </>
  );
}
