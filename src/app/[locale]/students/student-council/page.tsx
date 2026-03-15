import { Metadata } from 'next';
import PageHeader from '@/components/features/PageHeader';
import { Users, MessageSquare, Vote, Calendar, Star, Heart } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const titles = { pl: 'Samorząd | WBS', de: 'Schülervertretung | WBS', en: 'Student Council | WBS' };
  return { title: titles[locale as keyof typeof titles] || titles.en };
}

const translations = {
  pl: {
    title: 'Samorząd Uczniowski',
    subtitle: 'Reprezentacja głosu uczniów',
    intro: 'Samorząd Uczniowski reprezentuje interesy uczniów, organizuje wydarzenia szkolne i współpracuje z dyrekcją przy podejmowaniu decyzji dotyczących życia szkolnego. Członkowie samorządu są wybierani demokratycznie na początku każdego roku szkolnego.',
    currentTitle: 'Zarząd 2024/2025',
    members: [
      { role: 'Przewodnicząca', name: 'Maria Deskur' },
      { role: 'Zastępczyni', name: 'Lena Świętońska' },
      { role: 'Sekretarz', name: 'Jan Piotrowski' },
    ],
    trustTitle: 'Nauczyciele opiekuńczy',
    trustTeachers: ['Wioleta Luchowska', 'Wolfgang Zehetbauer'],
    activitiesTitle: 'Czym się zajmujemy',
    activities: [
      { icon: 'message', text: 'Reprezentacja uczniów przed dyrekcją i radą pedagogiczną' },
      { icon: 'calendar', text: 'Organizacja wydarzeń szkolnych, imprez i akcji charytatywnych' },
      { icon: 'vote', text: 'Inicjatywy na rzecz poprawy warunków nauki i rekreacji' },
      { icon: 'star', text: 'Współpraca z samorządami innych szkół' },
      { icon: 'heart', text: 'Integracja uczniów polsko- i niemieckojęzycznych' },
    ],
  },
  de: {
    title: 'Schülervertretung',
    subtitle: 'Repräsentation der Schülerstimme',
    intro: 'Die Schülervertretung vertritt die Interessen der Schüler, organisiert Schulveranstaltungen und arbeitet mit der Schulleitung bei Entscheidungen über das Schulleben zusammen. Die Mitglieder werden zu Beginn jedes Schuljahres demokratisch gewählt.',
    currentTitle: 'Vorstand 2024/2025',
    members: [
      { role: 'Vorsitzende', name: 'Maria Deskur' },
      { role: 'Stellvertreterin', name: 'Lena Świętońska' },
      { role: 'Sekretär', name: 'Jan Piotrowski' },
    ],
    trustTitle: 'Vertrauenslehrer',
    trustTeachers: ['Wioleta Luchowska', 'Wolfgang Zehetbauer'],
    activitiesTitle: 'Unsere Aufgaben',
    activities: [
      { icon: 'message', text: 'Vertretung der Schüler vor der Schulleitung und dem Lehrerkollegium' },
      { icon: 'calendar', text: 'Organisation von Schulveranstaltungen, Festen und Wohltätigkeitsaktionen' },
      { icon: 'vote', text: 'Initiativen zur Verbesserung der Lern- und Freizeitbedingungen' },
      { icon: 'star', text: 'Zusammenarbeit mit Schülervertretungen anderer Schulen' },
      { icon: 'heart', text: 'Integration der polnisch- und deutschsprachigen Schüler' },
    ],
  },
  en: {
    title: 'Student Council',
    subtitle: 'Representing the student voice',
    intro: 'The Student Council represents student interests, organises school events, and works with the administration on decisions affecting school life. Members are democratically elected at the beginning of each school year.',
    currentTitle: 'Board 2024/2025',
    members: [
      { role: 'President', name: 'Maria Deskur' },
      { role: 'Vice President', name: 'Lena Świętońska' },
      { role: 'Secretary', name: 'Jan Piotrowski' },
    ],
    trustTitle: 'Trust Teachers',
    trustTeachers: ['Wioleta Luchowska', 'Wolfgang Zehetbauer'],
    activitiesTitle: 'What we do',
    activities: [
      { icon: 'message', text: 'Representing students before the school management and teaching staff' },
      { icon: 'calendar', text: 'Organising school events, celebrations and charity campaigns' },
      { icon: 'vote', text: 'Initiatives to improve learning and recreation conditions' },
      { icon: 'star', text: 'Cooperation with student councils of other schools' },
      { icon: 'heart', text: 'Integration of Polish- and German-speaking students' },
    ],
  },
};

const iconMap: Record<string, typeof MessageSquare> = {
  message: MessageSquare,
  calendar: Calendar,
  vote: Vote,
  star: Star,
  heart: Heart,
};

export default async function StudentCouncilPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = translations[locale as keyof typeof translations] || translations.en;

  return (
    <>
      <PageHeader lang={locale} title={t.title} description={t.subtitle} />
      <section className="section bg-white">
        <div className="container-custom">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="text-xl leading-relaxed text-neutral-600">{t.intro}</p>
          </div>

          <div className="mb-16 grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl bg-red-600 p-8 text-white">
              <h2 className="mb-6 text-2xl font-bold">{t.currentTitle}</h2>
              <div className="space-y-4">
                {t.members.map((m, i) => (
                  <div key={i} className="flex items-center gap-4 rounded-xl bg-white/10 p-4">
                    <Users className="size-6 text-red-200" />
                    <div>
                      <p className="font-semibold">{m.name}</p>
                      <p className="text-sm text-red-200">{m.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-8">
              <h2 className="mb-6 text-2xl font-bold text-neutral-900">{t.trustTitle}</h2>
              <div className="space-y-4">
                {t.trustTeachers.map((teacher, i) => (
                  <div key={i} className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm">
                    <Users className="size-6 text-red-600" />
                    <p className="font-semibold text-neutral-900">{teacher}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <h2 className="mb-8 text-2xl font-bold text-neutral-900">{t.activitiesTitle}</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {t.activities.map((a, i) => {
              const Icon = iconMap[a.icon] || MessageSquare;
              return (
                <div key={i} className="rounded-xl bg-neutral-50 p-6">
                  <Icon className="mb-3 size-8 text-red-600" />
                  <p className="text-neutral-700">{a.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
