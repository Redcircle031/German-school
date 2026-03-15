import { Metadata } from 'next';
import PageHeader from '@/components/features/PageHeader';
import { CreditCard, FileText, Info } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const titles = { pl: 'Karta ZTM | WBS', de: 'ZTM-Karte | WBS', en: 'ZTM Card | WBS' };
  return { title: titles[locale as keyof typeof titles] || titles.en };
}

const translations = {
  pl: {
    title: 'Karta ZTM',
    subtitle: 'Zniżkowa karta na transport miejski w Warszawie',
    intro: 'Uczniowie WBS zamieszkali w Warszawie mogą ubiegać się o Kartę Ucznia ZTM, która uprawnia do zniżkowych przejazdów komunikacją miejską.',
    eligibilityTitle: 'Kto może otrzymać?',
    eligibility: ['Uczniowie zameldowani w Warszawie', 'Uczniowie do 21. roku życia uczęszczający do szkoły w Warszawie'],
    howTitle: 'Jak złożyć wniosek?',
    steps: [
      'Pobierz wniosek ze strony ZTM lub w sekretariacie szkoły.',
      'Wypełnij i dołącz zdjęcie ucznia.',
      'Uzyskaj potwierdzenie szkoły (pieczątka w sekretariacie).',
      'Złóż wniosek w punkcie obsługi ZTM lub przez Internet.',
    ],
    noteTitle: 'Ważne informacje',
    noteDesc: 'Karta ZTM jest wydawana bezpłatnie. Czas oczekiwania wynosi około 14 dni roboczych. W przypadku pytań prosimy o kontakt z sekretariatem.',
  },
  de: {
    title: 'ZTM-Karte',
    subtitle: 'Ermäßigungskarte für den öffentlichen Nahverkehr in Warschau',
    intro: 'In Warschau wohnende WBS-Schüler können die ZTM-Schülerkarte beantragen, die zu ermäßigten Fahrten mit dem öffentlichen Nahverkehr berechtigt.',
    eligibilityTitle: 'Wer kann sie erhalten?',
    eligibility: ['In Warschau gemeldete Schüler', 'Schüler bis 21 Jahre, die eine Schule in Warschau besuchen'],
    howTitle: 'Wie beantragen?',
    steps: [
      'Laden Sie den Antrag von der ZTM-Website herunter oder holen Sie ihn im Sekretariat ab.',
      'Füllen Sie ihn aus und fügen Sie ein Foto des Schülers bei.',
      'Holen Sie die Schulbestätigung (Stempel im Sekretariat).',
      'Reichen Sie den Antrag an einer ZTM-Servicestelle oder online ein.',
    ],
    noteTitle: 'Wichtige Informationen',
    noteDesc: 'Die ZTM-Karte wird kostenlos ausgestellt. Die Wartezeit beträgt ca. 14 Werktage. Bei Fragen wenden Sie sich bitte an das Sekretariat.',
  },
  en: {
    title: 'ZTM Card',
    subtitle: 'Discounted public transport card in Warsaw',
    intro: 'WBS students living in Warsaw can apply for the ZTM Student Card, which entitles them to discounted public transport fares.',
    eligibilityTitle: 'Who is eligible?',
    eligibility: ['Students registered in Warsaw', 'Students up to 21 years old attending a school in Warsaw'],
    howTitle: 'How to apply?',
    steps: [
      'Download the application from the ZTM website or collect it from the school office.',
      'Fill it in and attach a student photo.',
      'Obtain school confirmation (stamp at the school office).',
      'Submit the application at a ZTM service point or online.',
    ],
    noteTitle: 'Important Information',
    noteDesc: 'The ZTM card is issued free of charge. Waiting time is approximately 14 working days. For questions, please contact the school office.',
  },
};

export default async function ZtmCardPage({ params }: { params: Promise<{ locale: string }> }) {
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

          <div className="mb-12 rounded-2xl border border-neutral-200 bg-neutral-50 p-8">
            <CreditCard className="mb-4 size-8 text-red-600" />
            <h2 className="mb-4 text-xl font-bold text-neutral-900">{t.eligibilityTitle}</h2>
            <ul className="space-y-2">
              {t.eligibility.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-neutral-700">
                  <span className="size-2 rounded-full bg-red-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-12 rounded-2xl bg-red-600 p-8 text-white">
            <FileText className="mb-4 size-8 text-red-200" />
            <h2 className="mb-6 text-xl font-bold">{t.howTitle}</h2>
            <ol className="space-y-4">
              {t.steps.map((step, i) => (
                <li key={i} className="flex gap-4">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white/20 text-sm font-bold">{i + 1}</span>
                  <p className="text-red-100">{step}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-2xl bg-amber-50 p-6">
            <div className="flex items-start gap-3">
              <Info className="mt-0.5 size-5 text-amber-600" />
              <div>
                <h3 className="font-semibold text-neutral-900">{t.noteTitle}</h3>
                <p className="text-neutral-600">{t.noteDesc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
