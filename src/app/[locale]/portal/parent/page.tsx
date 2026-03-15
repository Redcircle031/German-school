import { Metadata } from 'next';
import PageHeader from '@/components/features/PageHeader';
import { ExternalLink, BookOpen, MessageSquare, Calendar } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const titles = { pl: 'Portal rodzica | WBS', de: 'Elternportal | WBS', en: 'Parent Portal | WBS' };
  return { title: titles[locale as keyof typeof titles] || titles.en };
}

const translations = {
  pl: {
    title: 'Portal Rodzica',
    subtitle: 'Dostęp do dziennika elektronicznego Librus',
    intro: 'Portal rodzica umożliwia śledzenie postępów w nauce, sprawdzanie ocen, frekwencji i komunikatów od nauczycieli. Szkoła WBS korzysta z systemu Librus Synergia.',
    loginTitle: 'Logowanie do Librus',
    loginDesc: 'Dane logowania do systemu Librus otrzymują Państwo na początku roku szkolnego w sekretariacie. W razie problemów z dostępem prosimy o kontakt.',
    loginButton: 'Przejdź do Librus',
    features: [
      { icon: 'book', title: 'Oceny i postępy', desc: 'Bieżący wgląd w oceny, uwagi i postępy ucznia' },
      { icon: 'message', title: 'Komunikacja', desc: 'Wiadomości od nauczycieli i administracji' },
      { icon: 'calendar', title: 'Plan lekcji', desc: 'Aktualny plan zajęć i zastępstwa' },
    ],
  },
  de: {
    title: 'Elternportal',
    subtitle: 'Zugang zum elektronischen Klassenbuch Librus',
    intro: 'Das Elternportal ermöglicht die Verfolgung des Lernfortschritts, die Einsicht in Noten, Anwesenheit und Mitteilungen der Lehrkräfte. Die WBS nutzt das System Librus Synergia.',
    loginTitle: 'Anmeldung bei Librus',
    loginDesc: 'Die Zugangsdaten für das Librus-System erhalten Sie zu Beginn des Schuljahres im Sekretariat. Bei Zugriffsproblemen kontaktieren Sie uns bitte.',
    loginButton: 'Zu Librus',
    features: [
      { icon: 'book', title: 'Noten und Fortschritt', desc: 'Aktueller Einblick in Noten, Bemerkungen und Fortschritte' },
      { icon: 'message', title: 'Kommunikation', desc: 'Nachrichten von Lehrern und Verwaltung' },
      { icon: 'calendar', title: 'Stundenplan', desc: 'Aktueller Unterrichtsplan und Vertretungen' },
    ],
  },
  en: {
    title: 'Parent Portal',
    subtitle: 'Access to the Librus electronic gradebook',
    intro: 'The parent portal allows you to track learning progress, check grades, attendance, and messages from teachers. WBS uses the Librus Synergia system.',
    loginTitle: 'Librus Login',
    loginDesc: 'Login credentials for the Librus system are provided at the beginning of the school year at the school office. For access issues, please contact us.',
    loginButton: 'Go to Librus',
    features: [
      { icon: 'book', title: 'Grades & Progress', desc: 'Current view of grades, notes, and student progress' },
      { icon: 'message', title: 'Communication', desc: 'Messages from teachers and administration' },
      { icon: 'calendar', title: 'Timetable', desc: 'Current class schedule and substitutions' },
    ],
  },
};

const featureIcons: Record<string, typeof BookOpen> = { book: BookOpen, message: MessageSquare, calendar: Calendar };

export default async function ParentPortalPage({ params }: { params: Promise<{ locale: string }> }) {
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

          <div className="mb-12 rounded-2xl bg-red-600 p-8 text-center text-white">
            <h2 className="mb-4 text-2xl font-bold">{t.loginTitle}</h2>
            <p className="mb-6 text-red-100">{t.loginDesc}</p>
            <a
              href="https://synergia.librus.pl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 text-lg font-bold text-red-600 transition-colors hover:bg-red-50"
            >
              <ExternalLink className="size-5" />
              {t.loginButton}
            </a>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {t.features.map((f, i) => {
              const Icon = featureIcons[f.icon] || BookOpen;
              return (
                <div key={i} className="rounded-xl border border-neutral-200 bg-neutral-50 p-6 text-center">
                  <Icon className="mx-auto mb-3 size-10 text-red-600" />
                  <h3 className="mb-2 font-semibold text-neutral-900">{f.title}</h3>
                  <p className="text-sm text-neutral-600">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
