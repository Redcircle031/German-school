import { Metadata } from 'next';
import PageHeader from '@/components/features/PageHeader';
import { FileText, Shield, BookOpen, CheckCircle } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const titles: Record<string, string> = { pl: 'Regulaminy | WBS', de: 'Schulordnung | WBS', en: 'School Regulations | WBS' };
  const descriptions: Record<string, string> = {
    pl: 'Regulaminy szkolne WBS - zasady ogólne, dress code, zasady obecności i system oceniania.',
    de: 'Schulordnung der WBS - allgemeine Regeln, Kleiderordnung, Anwesenheitsregeln und Benotungssystem.',
    en: 'WBS school regulations - general rules, dress code, attendance policy and grading system.',
  };
  return { title: titles[locale] || titles.en, description: descriptions[locale] || descriptions.en };
}

const translations = {
  pl: {
    title: 'Regulaminy',
    subtitle: 'Zasady i regulaminy obowiązujące w szkole',
    intro: 'Znajomość regulaminów szkolnych jest obowiązkiem każdego ucznia i rodzica. Prosimy o zapoznanie się z poniższymi zasadami, które zapewniają bezpieczeństwo i komfort nauki wszystkich uczniów.',
    generalTitle: 'Zasady Ogólne',
    generalIcon: 'FileText',
    generalItems: [
      'Uczniowie zobowiązani są do punktualnego przybywania na zajęcia.',
      'Korzystanie z telefonów komórkowych podczas lekcji jest zabronione.',
      'Uczniowie powinni szanować mienie szkolne i dbać o porządek.',
      'Na terenie szkoły obowiązuje zakaz stosowania przemocy fizycznej i słownej.',
      'Każdy uczeń ma obowiązek posiadania przy sobie legitymacji szkolnej.',
    ],
    dressTitle: 'Dress Code',
    dressIcon: 'Shield',
    dressItems: [
      'Ubiór powinien być schludny, czysty i stosowny do warunków szkolnych.',
      'Obowiązuje noszenie mundurka szkolnego w wyznaczone dni.',
      'Obuwie zmienne jest wymagane na terenie szkoły.',
      'Niedozwolone jest noszenie nakryć głowy podczas zajęć (z wyjątkiem powodów religijnych).',
    ],
    attendanceTitle: 'Zasady Obecności',
    attendanceIcon: 'BookOpen',
    attendanceItems: [
      'Rodzice zobowiązani są do usprawiedliwiania nieobecności w ciągu 7 dni.',
      'Zwolnienie z lekcji wymaga pisemnej zgody rodzica lub opiekuna.',
      'Spóźnienia powyżej 15 minut traktowane są jako nieobecność na lekcji.',
      'Trzy nieusprawiedliwione nieobecności skutkują powiadomieniem rodziców.',
      'Długotrwała nieobecność wymaga zaświadczenia lekarskiego.',
    ],
    gradingTitle: 'System Oceniania',
    gradingIcon: 'CheckCircle',
    gradingItems: [
      'Skala ocen: 1 (niedostateczny) do 6 (celujący).',
      'Oceny semestralne wystawiane są na podstawie średniej ważonej.',
      'Uczeń ma prawo do poprawy każdej oceny niedostatecznej w terminie 2 tygodni.',
      'Prace domowe i aktywność na lekcji wpływają na ocenę końcową.',
      'Oceny z zachowania wystawiane są według odrębnego regulaminu.',
    ],
  },
  de: {
    title: 'Schulordnung',
    subtitle: 'Regeln und Vorschriften der Schule',
    intro: 'Die Kenntnis der Schulordnung ist Pflicht jedes Schülers und Elternteils. Bitte lesen Sie die folgenden Regeln, die die Sicherheit und den Komfort aller Schüler gewährleisten.',
    generalTitle: 'Allgemeine Regeln',
    generalIcon: 'FileText',
    generalItems: [
      'Schüler sind verpflichtet, pünktlich zum Unterricht zu erscheinen.',
      'Die Nutzung von Mobiltelefonen während des Unterrichts ist verboten.',
      'Schüler sollen das Schuleigentum respektieren und Ordnung halten.',
      'Auf dem Schulgelände ist jede Form von physischer und verbaler Gewalt verboten.',
      'Jeder Schüler muss seinen Schülerausweis bei sich tragen.',
    ],
    dressTitle: 'Kleiderordnung',
    dressIcon: 'Shield',
    dressItems: [
      'Die Kleidung soll ordentlich, sauber und schulangemessen sein.',
      'An festgelegten Tagen ist das Tragen der Schuluniform Pflicht.',
      'Wechselschuhe sind auf dem Schulgelände erforderlich.',
      'Das Tragen von Kopfbedeckungen während des Unterrichts ist nicht gestattet (ausgenommen religiöse Gründe).',
    ],
    attendanceTitle: 'Anwesenheitsregeln',
    attendanceIcon: 'BookOpen',
    attendanceItems: [
      'Eltern sind verpflichtet, Fehlzeiten innerhalb von 7 Tagen zu entschuldigen.',
      'Für vorzeitiges Verlassen des Unterrichts ist eine schriftliche Genehmigung der Eltern erforderlich.',
      'Verspätungen über 15 Minuten gelten als Fehlstunde.',
      'Drei unentschuldigte Fehlzeiten führen zur Benachrichtigung der Eltern.',
      'Längere Abwesenheiten erfordern ein ärztliches Attest.',
    ],
    gradingTitle: 'Benotungssystem',
    gradingIcon: 'CheckCircle',
    gradingItems: [
      'Notenskala: 1 (ungenügend) bis 6 (ausgezeichnet).',
      'Halbjahresnoten basieren auf dem gewichteten Durchschnitt.',
      'Schüler haben das Recht, jede ungenügende Note innerhalb von 2 Wochen zu verbessern.',
      'Hausaufgaben und Unterrichtsbeteiligung fließen in die Endnote ein.',
      'Verhaltensnoten werden nach einer separaten Ordnung vergeben.',
    ],
  },
  en: {
    title: 'School Regulations',
    subtitle: 'Rules and regulations of the school',
    intro: 'Knowledge of school regulations is mandatory for every student and parent. Please read the following rules that ensure the safety and comfort of all students.',
    generalTitle: 'General Rules',
    generalIcon: 'FileText',
    generalItems: [
      'Students are required to arrive punctually for classes.',
      'Use of mobile phones during lessons is prohibited.',
      'Students should respect school property and maintain orderliness.',
      'Any form of physical or verbal violence is prohibited on school grounds.',
      'Every student must carry their student ID at all times.',
    ],
    dressTitle: 'Dress Code',
    dressIcon: 'Shield',
    dressItems: [
      'Clothing should be neat, clean, and appropriate for school.',
      'Wearing the school uniform is required on designated days.',
      'Indoor shoes are required on school premises.',
      'Wearing headgear during lessons is not permitted (except for religious reasons).',
    ],
    attendanceTitle: 'Attendance Policy',
    attendanceIcon: 'BookOpen',
    attendanceItems: [
      'Parents are required to excuse absences within 7 days.',
      'Early dismissal from lessons requires written parental consent.',
      'Tardiness exceeding 15 minutes is treated as an absence.',
      'Three unexcused absences result in parental notification.',
      'Extended absences require a medical certificate.',
    ],
    gradingTitle: 'Grading System',
    gradingIcon: 'CheckCircle',
    gradingItems: [
      'Grading scale: 1 (unsatisfactory) to 6 (excellent).',
      'Semester grades are based on weighted averages.',
      'Students have the right to improve any failing grade within 2 weeks.',
      'Homework and class participation contribute to the final grade.',
      'Behavior grades are issued according to a separate regulation.',
    ],
  },
};

const iconMap = {
  FileText: FileText,
  Shield: Shield,
  BookOpen: BookOpen,
  CheckCircle: CheckCircle,
};

export default async function RegulationsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = translations[locale as keyof typeof translations] || translations.en;

  const sections = [
    { title: t.generalTitle, icon: t.generalIcon, items: t.generalItems },
    { title: t.dressTitle, icon: t.dressIcon, items: t.dressItems },
    { title: t.attendanceTitle, icon: t.attendanceIcon, items: t.attendanceItems },
    { title: t.gradingTitle, icon: t.gradingIcon, items: t.gradingItems },
  ];

  return (
    <>
      <PageHeader lang={locale} title={t.title} description={t.subtitle} />
      <section className="section bg-white">
        <div className="container-custom max-w-4xl">
          <p className="mx-auto mb-12 max-w-3xl text-center text-xl text-neutral-600">{t.intro}</p>

          <div className="space-y-10">
            {sections.map((section, i) => {
              const Icon = iconMap[section.icon as keyof typeof iconMap];
              return (
                <div key={i} className="rounded-xl border border-neutral-200 bg-white p-6 md:p-8">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex size-12 items-center justify-center rounded-lg bg-red-50">
                      <Icon className="size-6 text-red-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-neutral-900">{section.title}</h2>
                  </div>
                  <ul className="space-y-3">
                    {section.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <CheckCircle className="mt-0.5 size-5 shrink-0 text-green-500" />
                        <span className="text-neutral-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
