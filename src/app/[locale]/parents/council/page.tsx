import { Metadata } from 'next';
import PageHeader from '@/components/features/PageHeader';
import { Users, MessageSquare, Calendar, Heart } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const titles: Record<string, string> = { pl: 'Rada Rodziców | WBS', de: 'Elternrat | WBS', en: 'Parent Council | WBS' };
  const descriptions: Record<string, string> = {
    pl: 'Rada Rodziców WBS - informacje o działalności, sposobie dołączenia i harmonogramie spotkań.',
    de: 'Elternrat der WBS - Informationen über Aktivitäten, Beitrittsmöglichkeiten und Sitzungstermine.',
    en: 'WBS Parent Council - information about activities, how to join, and meeting schedule.',
  };
  return { title: titles[locale] || titles.en, description: descriptions[locale] || descriptions.en };
}

const translations = {
  pl: {
    title: 'Rada Rodziców',
    subtitle: 'Współpraca rodziców ze szkołą',
    intro: 'Rada Rodziców jest organem społecznym szkoły, który reprezentuje ogół rodziców uczniów. Działamy na rzecz lepszej edukacji i warunków nauki dla wszystkich dzieci.',
    aboutTitle: 'Czym zajmuje się Rada Rodziców?',
    aboutItems: [
      'Współpraca z dyrekcją szkoły w sprawach wychowawczych i organizacyjnych.',
      'Opiniowanie programu wychowawczo-profilaktycznego szkoły.',
      'Organizacja imprez szkolnych, wycieczek i wydarzeń integracyjnych.',
      'Gromadzenie i zarządzanie funduszami na cele szkolne.',
      'Reprezentowanie rodziców wobec organów szkoły i samorządu.',
    ],
    joinTitle: 'Jak dołączyć?',
    joinItems: [
      'Każdy rodzic lub opiekun prawny ucznia może zostać członkiem Rady.',
      'Wybory do Rady Rodziców odbywają się na początku każdego roku szkolnego.',
      'Każda klasa wybiera jednego przedstawiciela do Rady.',
      'Zachęcamy do aktywnego udziału - każdy głos ma znaczenie!',
    ],
    meetingsTitle: 'Harmonogram spotkań 2025/2026',
    meetings: [
      { date: '17 września 2025', topic: 'Zebranie organizacyjne, wybór prezydium' },
      { date: '12 listopada 2025', topic: 'Planowanie budżetu, Mikołajki szkolne' },
      { date: '21 stycznia 2026', topic: 'Podsumowanie I semestru' },
      { date: '18 marca 2026', topic: 'Organizacja Dnia Otwartego' },
      { date: '20 maja 2026', topic: 'Planowanie zakończenia roku szkolnego' },
    ],
    membersTitle: 'Prezydium Rady Rodziców',
    members: [
      { role: 'Przewodnicząca', name: 'Anna Kowalska', class: 'Rodzic ucznia kl. 5a' },
      { role: 'Zastępca', name: 'Thomas Müller', class: 'Rodzic ucznia kl. 3b' },
      { role: 'Skarbnik', name: 'Magdalena Wiśniewska', class: 'Rodzic ucznia kl. 7a' },
      { role: 'Sekretarz', name: 'Katarzyna Nowak', class: 'Rodzic ucznia kl. 1c' },
    ],
    contactNote: 'Kontakt z Radą Rodziców: rada.rodzicow@wbs.edu.pl',
    eventLabel: 'Wydarzenie',
    dateLabel: 'Data',
  },
  de: {
    title: 'Elternrat',
    subtitle: 'Zusammenarbeit der Eltern mit der Schule',
    intro: 'Der Elternrat ist ein soziales Organ der Schule, das alle Eltern der Schüler vertritt. Wir setzen uns für bessere Bildung und Lernbedingungen für alle Kinder ein.',
    aboutTitle: 'Was macht der Elternrat?',
    aboutItems: [
      'Zusammenarbeit mit der Schulleitung in erzieherischen und organisatorischen Angelegenheiten.',
      'Begutachtung des Erziehungs- und Präventionsprogramms der Schule.',
      'Organisation von Schulveranstaltungen, Ausflügen und Integrationsfeiern.',
      'Sammlung und Verwaltung von Mitteln für Schulzwecke.',
      'Vertretung der Eltern gegenüber den Schulorganen und der Selbstverwaltung.',
    ],
    joinTitle: 'Wie kann man beitreten?',
    joinItems: [
      'Jeder Elternteil oder gesetzliche Vormund eines Schülers kann Mitglied des Rates werden.',
      'Die Wahlen zum Elternrat finden zu Beginn jedes Schuljahres statt.',
      'Jede Klasse wählt einen Vertreter in den Rat.',
      'Wir ermutigen zur aktiven Teilnahme - jede Stimme zählt!',
    ],
    meetingsTitle: 'Sitzungsplan 2025/2026',
    meetings: [
      { date: '17. September 2025', topic: 'Organisatorische Sitzung, Vorstandswahl' },
      { date: '12. November 2025', topic: 'Budgetplanung, Schulweihnachtsfeier' },
      { date: '21. Januar 2026', topic: 'Zusammenfassung des 1. Halbjahres' },
      { date: '18. März 2026', topic: 'Organisation des Tages der offenen Tür' },
      { date: '20. Mai 2026', topic: 'Planung des Schuljahresabschlusses' },
    ],
    membersTitle: 'Vorstand des Elternrats',
    members: [
      { role: 'Vorsitzende', name: 'Anna Kowalska', class: 'Elternteil, Klasse 5a' },
      { role: 'Stellvertreter', name: 'Thomas Müller', class: 'Elternteil, Klasse 3b' },
      { role: 'Schatzmeister', name: 'Magdalena Wiśniewska', class: 'Elternteil, Klasse 7a' },
      { role: 'Sekretär', name: 'Katarzyna Nowak', class: 'Elternteil, Klasse 1c' },
    ],
    contactNote: 'Kontakt zum Elternrat: rada.rodzicow@wbs.edu.pl',
    eventLabel: 'Veranstaltung',
    dateLabel: 'Datum',
  },
  en: {
    title: 'Parent Council',
    subtitle: 'Parents working together with the school',
    intro: 'The Parent Council is a social body of the school that represents all parents of students. We work towards better education and learning conditions for all children.',
    aboutTitle: 'What does the Parent Council do?',
    aboutItems: [
      'Cooperation with school management on educational and organizational matters.',
      'Reviewing the school\'s educational and prevention program.',
      'Organizing school events, trips, and community gatherings.',
      'Collecting and managing funds for school purposes.',
      'Representing parents before school authorities and local government.',
    ],
    joinTitle: 'How to Join?',
    joinItems: [
      'Any parent or legal guardian of a student can become a member of the Council.',
      'Elections to the Parent Council take place at the beginning of each school year.',
      'Each class elects one representative to the Council.',
      'We encourage active participation - every voice matters!',
    ],
    meetingsTitle: 'Meeting Schedule 2025/2026',
    meetings: [
      { date: 'September 17, 2025', topic: 'Organizational meeting, board election' },
      { date: 'November 12, 2025', topic: 'Budget planning, school Christmas party' },
      { date: 'January 21, 2026', topic: '1st semester summary' },
      { date: 'March 18, 2026', topic: 'Open Day organization' },
      { date: 'May 20, 2026', topic: 'End-of-year celebration planning' },
    ],
    membersTitle: 'Council Board Members',
    members: [
      { role: 'Chairperson', name: 'Anna Kowalska', class: 'Parent, Class 5a' },
      { role: 'Vice Chair', name: 'Thomas Müller', class: 'Parent, Class 3b' },
      { role: 'Treasurer', name: 'Magdalena Wiśniewska', class: 'Parent, Class 7a' },
      { role: 'Secretary', name: 'Katarzyna Nowak', class: 'Parent, Class 1c' },
    ],
    contactNote: 'Contact the Parent Council: rada.rodzicow@wbs.edu.pl',
    eventLabel: 'Event',
    dateLabel: 'Date',
  },
};

export default async function CouncilPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = translations[locale as keyof typeof translations] || translations.en;

  return (
    <>
      <PageHeader lang={locale} title={t.title} description={t.subtitle} />
      <section className="section bg-white">
        <div className="container-custom max-w-4xl">
          <p className="mx-auto mb-12 max-w-3xl text-center text-xl text-neutral-600">{t.intro}</p>

          {/* What does the Council do */}
          <div className="mb-10 rounded-xl border border-neutral-200 bg-white p-6 md:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex size-12 items-center justify-center rounded-lg bg-red-50">
                <Users className="size-6 text-red-600" />
              </div>
              <h2 className="text-2xl font-bold text-neutral-900">{t.aboutTitle}</h2>
            </div>
            <ul className="space-y-3">
              {t.aboutItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Heart className="mt-0.5 size-5 shrink-0 text-red-400" />
                  <span className="text-neutral-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* How to Join */}
          <div className="mb-10 rounded-xl border border-neutral-200 bg-red-50 p-6 md:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex size-12 items-center justify-center rounded-lg bg-white">
                <MessageSquare className="size-6 text-red-600" />
              </div>
              <h2 className="text-2xl font-bold text-neutral-900">{t.joinTitle}</h2>
            </div>
            <ul className="space-y-3">
              {t.joinItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">{i + 1}</span>
                  <span className="text-neutral-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Meeting Schedule */}
          <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold text-neutral-900">
            <Calendar className="size-7 text-red-600" />
            {t.meetingsTitle}
          </h2>
          <div className="mb-10 overflow-hidden rounded-xl border border-neutral-200 bg-white">
            <table className="w-full">
              <thead className="bg-red-600 text-white">
                <tr>
                  <th className="p-4 text-left">{t.dateLabel}</th>
                  <th className="p-4 text-left">{t.eventLabel}</th>
                </tr>
              </thead>
              <tbody>
                {t.meetings.map((meeting, i) => (
                  <tr key={i} className="border-b border-neutral-100 last:border-0">
                    <td className="whitespace-nowrap p-4 font-medium text-neutral-900">{meeting.date}</td>
                    <td className="p-4 text-neutral-600">{meeting.topic}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Board Members */}
          <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold text-neutral-900">
            <Users className="size-7 text-red-600" />
            {t.membersTitle}
          </h2>
          <div className="mb-10 grid gap-4 md:grid-cols-2">
            {t.members.map((member, i) => (
              <div key={i} className="rounded-xl border border-neutral-200 bg-neutral-50 p-5">
                <p className="text-sm font-medium uppercase tracking-wide text-red-600">{member.role}</p>
                <p className="mt-1 text-lg font-semibold text-neutral-900">{member.name}</p>
                <p className="text-sm text-neutral-500">{member.class}</p>
              </div>
            ))}
          </div>

          {/* Contact Note */}
          <div className="rounded-xl bg-neutral-100 p-6 text-center">
            <MessageSquare className="mx-auto mb-3 size-8 text-red-600" />
            <p className="font-medium text-neutral-700">{t.contactNote}</p>
          </div>
        </div>
      </section>
    </>
  );
}
