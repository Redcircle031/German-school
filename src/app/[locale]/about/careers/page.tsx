import { Metadata } from 'next';
import PageHeader from '@/components/features/PageHeader';
import { Briefcase, Mail, Users, Clock } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const titles = { pl: 'Kariera | WBS', de: 'Karriere | WBS', en: 'Careers | WBS' };
  return { title: titles[locale as keyof typeof titles] || titles.en };
}

const translations = {
  pl: {
    title: 'Praca w WBS',
    subtitle: 'Dołącz do naszego zespołu',
    intro: 'Szkoła WBS poszukuje zaangażowanych, dwujęzycznych pedagogów i pracowników administracyjnych. Oferujemy pracę w inspirującym, międzynarodowym środowisku z uczniami z ponad 15 krajów.',
    openingsTitle: 'Aktualne oferty pracy',
    openings: [
      { title: 'Sozialpädagog/in', desc: 'Pedagog społeczny do pracy z uczniami w ramach wsparcia wychowawczego. Wymagana znajomość języka niemieckiego.', type: 'Pełny etat' },
      { title: 'Wychowawca/czyni przedszkolny/a', desc: 'Nauczyciel/ka przedszkolny/a do grupy niemieckojęzycznej. Mile widziane doświadczenie w pracy z dziećmi 3–6 lat.', type: 'Pełny etat' },
      { title: 'Wychowawca świetlicy', desc: 'Opiekun/ka do opieki popołudniowej dla uczniów klas 1–6. Pożądana znajomość języka niemieckiego.', type: 'Pół etatu' },
    ],
    applyTitle: 'Jak aplikować',
    applyDesc: 'Prosimy o przesłanie CV i listu motywacyjnego na adres e-mail. Rozpatrujemy zgłoszenia na bieżąco.',
    contactLabel: 'Kontakt HR',
  },
  de: {
    title: 'Karriere bei WBS',
    subtitle: 'Werden Sie Teil unseres Teams',
    intro: 'Die WBS sucht engagierte, zweisprachige Pädagogen und Verwaltungsmitarbeiter. Wir bieten eine Arbeit in einem inspirierenden, internationalen Umfeld mit Schülern aus über 15 Ländern.',
    openingsTitle: 'Aktuelle Stellenangebote',
    openings: [
      { title: 'Sozialpädagog/in', desc: 'Sozialpädagoge/in für die Arbeit mit Schülern im Rahmen der pädagogischen Unterstützung. Deutschkenntnisse erforderlich.', type: 'Vollzeit' },
      { title: 'Kindergärtner/in', desc: 'Erzieher/in für die deutschsprachige Gruppe. Erfahrung in der Arbeit mit Kindern im Alter von 3–6 Jahren erwünscht.', type: 'Vollzeit' },
      { title: 'Horterzieher/in', desc: 'Betreuer/in für die Nachmittagsbetreuung der Klassen 1–6. Deutschkenntnisse erwünscht.', type: 'Teilzeit' },
    ],
    applyTitle: 'Bewerbungsverfahren',
    applyDesc: 'Bitte senden Sie Ihren Lebenslauf und Ihr Motivationsschreiben per E-Mail. Bewerbungen werden laufend geprüft.',
    contactLabel: 'HR-Kontakt',
  },
  en: {
    title: 'Careers at WBS',
    subtitle: 'Join our team',
    intro: 'WBS is looking for dedicated, bilingual educators and administrative staff. We offer work in an inspiring, international environment with students from over 15 countries.',
    openingsTitle: 'Current Openings',
    openings: [
      { title: 'Social Pedagogue', desc: 'Social pedagogue for student support work. German language skills required.', type: 'Full-time' },
      { title: 'Kindergarten Teacher', desc: 'Teacher for the German-speaking group. Experience with children aged 3–6 preferred.', type: 'Full-time' },
      { title: 'After-school Care Educator', desc: 'Supervisor for after-school care for grades 1–6. German language skills preferred.', type: 'Part-time' },
    ],
    applyTitle: 'How to Apply',
    applyDesc: 'Please send your CV and cover letter by email. Applications are reviewed on a rolling basis.',
    contactLabel: 'HR Contact',
  },
};

export default async function CareersPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = translations[locale as keyof typeof translations] || translations.en;

  return (
    <>
      <PageHeader lang={locale} title={t.title} description={t.subtitle} />
      <section className="section bg-white">
        <div className="container-custom max-w-4xl">
          <div className="mb-16 text-center">
            <p className="text-xl leading-relaxed text-neutral-600">{t.intro}</p>
          </div>

          <h2 className="mb-8 text-2xl font-bold text-neutral-900">{t.openingsTitle}</h2>
          <div className="mb-16 space-y-6">
            {t.openings.map((job, i) => (
              <div key={i} className="rounded-xl border border-neutral-200 bg-white p-6 transition-all hover:border-red-200 hover:shadow-lg">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-neutral-900">{job.title}</h3>
                  <span className="flex items-center gap-1.5 rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-700">
                    <Clock className="size-3.5" /> {job.type}
                  </span>
                </div>
                <p className="text-neutral-600">{job.desc}</p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl bg-red-600 p-8 text-white">
            <h2 className="mb-4 text-2xl font-bold">{t.applyTitle}</h2>
            <p className="mb-6 text-red-100">{t.applyDesc}</p>
            <div className="flex items-center gap-3">
              <Mail className="size-5 text-red-200" />
              <span className="font-semibold">{t.contactLabel}:</span>
              <a href="mailto:sekretariat1@wbs.pl" className="underline">sekretariat1@wbs.pl</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
