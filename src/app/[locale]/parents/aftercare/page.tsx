import { Metadata } from 'next';
import PageHeader from '@/components/features/PageHeader';
import { Clock, Users, Gamepad, BookOpen, Palette, Music, Mail, FileText } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const titles = { pl: 'Opieka | WBS', de: 'Betreuung | WBS', en: 'Aftercare | WBS' };
  return { title: titles[locale as keyof typeof titles] || titles.en };
}

const translations = {
  pl: {
    title: 'Opieka Popołudniowa (Świetlica)',
    subtitle: 'Bezpieczne miejsce po lekcjach',
    intro: 'Świetlica szkolna WBS zapewnia opiekę popołudniową dla uczniów klas 1–6. Program obejmuje odrabianie zadań domowych, zajęcia kreatywne, sportowe i rekreacyjne — wszystko pod nadzorem wykwalifikowanych wychowawców.',
    hoursTitle: 'Godziny pracy',
    hoursValue: '14:00 – 17:00',
    hoursNote: 'Poniedziałek – Piątek',
    activitiesTitle: 'Program zajęć',
    activities: [
      { icon: 'book', text: 'Pomoc w odrabianiu lekcji' },
      { icon: 'palette', text: 'Zajęcia plastyczne i rękodzieło' },
      { icon: 'gamepad', text: 'Gry i zabawy ruchowe' },
      { icon: 'music', text: 'Zajęcia muzyczne i teatralne' },
    ],
    enrollTitle: 'Zapisy',
    enrollDesc: 'Formularz deklaracji przystąpienia do świetlicy należy złożyć w sekretariacie szkoły na początku semestru. Deklaracja obowiązuje na jedno półrocze.',
    regulationsTitle: 'Regulamin',
    regulationsDesc: 'Regulamin opieki popołudniowej dostępny jest w zakładce Dokumenty.',
    contactTitle: 'Kontakt',
    contactName: 'Katarzyna Sidor',
    contactRole: 'Koordynator opieki popołudniowej',
  },
  de: {
    title: 'Nachmittagsbetreuung (Hort)',
    subtitle: 'Sicherer Ort nach der Schule',
    intro: 'Der WBS-Hort bietet Nachmittagsbetreuung für Schüler der Klassen 1–6. Das Programm umfasst Hausaufgabenhilfe, kreative, sportliche und Freizeitaktivitäten — alles unter Aufsicht qualifizierter Erzieher.',
    hoursTitle: 'Öffnungszeiten',
    hoursValue: '14:00 – 17:00',
    hoursNote: 'Montag – Freitag',
    activitiesTitle: 'Aktivitätenprogramm',
    activities: [
      { icon: 'book', text: 'Hausaufgabenhilfe' },
      { icon: 'palette', text: 'Kunst und Basteln' },
      { icon: 'gamepad', text: 'Spiele und Bewegung' },
      { icon: 'music', text: 'Musik und Theater' },
    ],
    enrollTitle: 'Anmeldung',
    enrollDesc: 'Das Anmeldeformular für den Hort ist zu Beginn des Halbjahres im Sekretariat einzureichen. Die Anmeldung gilt für ein Halbjahr.',
    regulationsTitle: 'Ordnung',
    regulationsDesc: 'Die Hortordnung ist im Bereich Dokumente verfügbar.',
    contactTitle: 'Kontakt',
    contactName: 'Katarzyna Sidor',
    contactRole: 'Koordinatorin der Nachmittagsbetreuung',
  },
  en: {
    title: 'After-school Care',
    subtitle: 'Safe place after classes',
    intro: 'The WBS after-school care programme provides supervision for students in grades 1–6. The programme includes homework help, creative, sports, and recreational activities — all under the supervision of qualified educators.',
    hoursTitle: 'Hours',
    hoursValue: '14:00 – 17:00',
    hoursNote: 'Monday – Friday',
    activitiesTitle: 'Activity Programme',
    activities: [
      { icon: 'book', text: 'Homework help' },
      { icon: 'palette', text: 'Arts and crafts' },
      { icon: 'gamepad', text: 'Games and physical activities' },
      { icon: 'music', text: 'Music and theatre' },
    ],
    enrollTitle: 'Enrolment',
    enrollDesc: 'The enrolment form for after-school care should be submitted to the school office at the beginning of the semester. Registration is valid for one semester.',
    regulationsTitle: 'Regulations',
    regulationsDesc: 'The after-school care regulations are available in the Documents section.',
    contactTitle: 'Contact',
    contactName: 'Katarzyna Sidor',
    contactRole: 'After-school care coordinator',
  },
};

const activityIcons: Record<string, typeof BookOpen> = {
  book: BookOpen,
  palette: Palette,
  gamepad: Gamepad,
  music: Music,
};

export default async function AftercarePage({ params }: { params: Promise<{ locale: string }> }) {
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

          {/* Hours */}
          <div className="mx-auto mb-16 max-w-md rounded-2xl bg-red-600 p-8 text-center text-white">
            <Clock className="mx-auto mb-4 size-10 text-red-200" />
            <h2 className="mb-2 text-xl font-bold">{t.hoursTitle}</h2>
            <p className="text-4xl font-bold">{t.hoursValue}</p>
            <p className="mt-2 text-red-200">{t.hoursNote}</p>
          </div>

          {/* Activities */}
          <h2 className="mb-8 text-center text-2xl font-bold text-neutral-900">{t.activitiesTitle}</h2>
          <div className="mb-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {t.activities.map((a, i) => {
              const Icon = activityIcons[a.icon] || BookOpen;
              return (
                <div key={i} className="rounded-xl bg-neutral-50 p-6 text-center">
                  <Icon className="mx-auto mb-3 size-10 text-red-600" />
                  <p className="font-medium text-neutral-900">{a.text}</p>
                </div>
              );
            })}
          </div>

          {/* Enrolment + Regulations */}
          <div className="mb-16 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-8">
              <FileText className="mb-4 size-8 text-red-600" />
              <h2 className="mb-3 text-xl font-bold text-neutral-900">{t.enrollTitle}</h2>
              <p className="text-neutral-600">{t.enrollDesc}</p>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-8">
              <FileText className="mb-4 size-8 text-red-600" />
              <h2 className="mb-3 text-xl font-bold text-neutral-900">{t.regulationsTitle}</h2>
              <p className="text-neutral-600">{t.regulationsDesc}</p>
            </div>
          </div>

          {/* Contact */}
          <div className="rounded-2xl bg-neutral-900 p-8 text-white">
            <h2 className="mb-6 text-2xl font-bold">{t.contactTitle}</h2>
            <div className="flex items-center gap-4">
              <div className="flex size-14 items-center justify-center rounded-full bg-red-600">
                <Users className="size-7" />
              </div>
              <div>
                <p className="text-lg font-semibold">{t.contactName}</p>
                <p className="text-neutral-400">{t.contactRole}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
