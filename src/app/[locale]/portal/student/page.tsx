import { Metadata } from 'next';
import PageHeader from '@/components/features/PageHeader';
import { ExternalLink, BookOpen, GraduationCap, Calendar } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const titles = { pl: 'Portal ucznia | WBS', de: 'Schülerportal | WBS', en: 'Student Portal | WBS' };
  return { title: titles[locale as keyof typeof titles] || titles.en };
}

const translations = {
  pl: {
    title: 'Portal Ucznia',
    subtitle: 'Dostęp do dziennika elektronicznego i zasobów szkolnych',
    intro: 'Portal ucznia zapewnia dostęp do dziennika elektronicznego Librus, gdzie możesz sprawdzić swoje oceny, plan lekcji, zadania domowe i komunikaty od nauczycieli.',
    loginTitle: 'Logowanie do Librus',
    loginDesc: 'Dane logowania otrzymasz od wychowawcy na początku roku szkolnego. W razie problemów zgłoś się do sekretariatu.',
    loginButton: 'Przejdź do Librus',
    resourcesTitle: 'Zasoby dla uczniów',
    resources: [
      { title: 'Oceny i frekwencja', desc: 'Sprawdź swoje bieżące oceny i obecność' },
      { title: 'Plan lekcji', desc: 'Aktualny plan zajęć i informacje o zastępstwach' },
      { title: 'Zadania domowe', desc: 'Lista zadań i terminów ich oddania' },
    ],
  },
  de: {
    title: 'Schülerportal',
    subtitle: 'Zugang zum elektronischen Klassenbuch und Schulressourcen',
    intro: 'Das Schülerportal bietet Zugang zum elektronischen Klassenbuch Librus, wo du deine Noten, den Stundenplan, Hausaufgaben und Mitteilungen der Lehrer einsehen kannst.',
    loginTitle: 'Anmeldung bei Librus',
    loginDesc: 'Die Zugangsdaten erhältst du von deinem Klassenlehrer zu Beginn des Schuljahres. Bei Problemen wende dich an das Sekretariat.',
    loginButton: 'Zu Librus',
    resourcesTitle: 'Ressourcen für Schüler',
    resources: [
      { title: 'Noten und Anwesenheit', desc: 'Überprüfe deine aktuellen Noten und Anwesenheit' },
      { title: 'Stundenplan', desc: 'Aktueller Unterrichtsplan und Vertretungsinformationen' },
      { title: 'Hausaufgaben', desc: 'Liste der Aufgaben und Abgabetermine' },
    ],
  },
  en: {
    title: 'Student Portal',
    subtitle: 'Access to the electronic gradebook and school resources',
    intro: 'The student portal provides access to the Librus electronic gradebook, where you can check your grades, timetable, homework, and messages from teachers.',
    loginTitle: 'Librus Login',
    loginDesc: 'Login credentials are provided by your homeroom teacher at the beginning of the school year. For any issues, contact the school office.',
    loginButton: 'Go to Librus',
    resourcesTitle: 'Student Resources',
    resources: [
      { title: 'Grades & Attendance', desc: 'Check your current grades and attendance' },
      { title: 'Timetable', desc: 'Current class schedule and substitution info' },
      { title: 'Homework', desc: 'List of assignments and deadlines' },
    ],
  },
};

const resourceIcons = [BookOpen, Calendar, GraduationCap];

export default async function StudentPortalPage({ params }: { params: Promise<{ locale: string }> }) {
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

          <div className="mb-12 rounded-2xl bg-neutral-900 p-8 text-center text-white">
            <h2 className="mb-4 text-2xl font-bold">{t.loginTitle}</h2>
            <p className="mb-6 text-neutral-400">{t.loginDesc}</p>
            <a
              href="https://synergia.librus.pl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-red-700"
            >
              <ExternalLink className="size-5" />
              {t.loginButton}
            </a>
          </div>

          <h2 className="mb-6 text-2xl font-bold text-neutral-900">{t.resourcesTitle}</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {t.resources.map((r, i) => {
              const Icon = resourceIcons[i];
              return (
                <div key={i} className="rounded-xl border border-neutral-200 bg-neutral-50 p-6 text-center">
                  <Icon className="mx-auto mb-3 size-10 text-red-600" />
                  <h3 className="mb-2 font-semibold text-neutral-900">{r.title}</h3>
                  <p className="text-sm text-neutral-600">{r.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
