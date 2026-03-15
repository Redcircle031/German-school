import { Metadata } from 'next';
import PageHeader from '@/components/features/PageHeader';
import { Users, MessageSquare, Vote, Calendar } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const titles = { pl: 'Samorząd | WBS', de: 'Schülervertretung | WBS', en: 'Student Council | WBS' };
  return { title: titles[locale as keyof typeof titles] || titles.en };
}

const translations = {
  pl: {
    title: 'Samorząd Uczniowski',
    subtitle: 'Reprezentacja głosu uczniów',
    intro: 'Samorząd Uczniowski reprezentuje interesy uczniów, organizuje wydarzenia szkolne i współpracuje z dyrekcją przy podejmowaniu decyzji dotyczących życia szkolnego.',
  },
  de: {
    title: 'Schülervertretung',
    subtitle: 'Repräsentation der Schülerstimme',
    intro: 'Die Schülervertretung vertritt die Interessen der Schüler, organisiert Schulveranstaltungen und arbeitet mit der Schulleitung bei Entscheidungen über das Schulleben zusammen.',
  },
  en: {
    title: 'Student Council',
    subtitle: 'Representing the student voice',
    intro: 'The Student Council represents student interests, organizes school events, and works with the administration on decisions affecting school life.',
  },
};

export default async function StudentCouncilPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = translations[locale as keyof typeof translations] || translations.en;

  const activities = [
    { icon: MessageSquare, text: locale === 'pl' ? 'Reprezentacja uczniów' : locale === 'de' ? 'Schülervertretung' : 'Student representation' },
    { icon: Calendar, text: locale === 'pl' ? 'Organizacja wydarzeń' : locale === 'de' ? 'Veranstaltungsorganisation' : 'Event organization' },
    { icon: Vote, text: locale === 'pl' ? 'Inicjatywy uczniowskie' : locale === 'de' ? 'Schülerinitiativen' : 'Student initiatives' },
  ];

  return (
    <>
      <PageHeader lang={locale} title={t.title} description={t.subtitle} />
      <section className="section bg-white">
        <div className="container-custom max-w-3xl">
          <p className="mb-12 text-center text-xl text-neutral-600">{t.intro}</p>
          <div className="grid gap-6 md:grid-cols-3">
            {activities.map((a, i) => (
              <div key={i} className="rounded-xl bg-neutral-50 p-6 text-center">
                <a.icon className="mx-auto mb-3 size-10 text-red-600" />
                <p className="font-medium text-neutral-900">{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
