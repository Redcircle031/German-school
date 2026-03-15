import { Metadata } from 'next';
import PageHeader from '@/components/features/PageHeader';
import { CreditCard, Shield, Info } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const titles = { pl: 'E-Legitymacja | WBS', de: 'E-Schülerausweis | WBS', en: 'E-Student ID | WBS' };
  return { title: titles[locale as keyof typeof titles] || titles.en };
}

const translations = {
  pl: {
    title: 'E-Legitymacja Szkolna',
    subtitle: 'Elektroniczna legitymacja uczniowska',
    intro: 'Uczniowie WBS mogą zamówić elektroniczną legitymację szkolną (e-legitymację) z wbudowanym chipem RFID. E-legitymacja pełni funkcję tradycyjnej legitymacji szkolnej i umożliwia dostęp do zniżek.',
    featuresTitle: 'Funkcje e-legitymacji',
    features: ['Potwierdzenie statusu ucznia', 'Zniżki na komunikację miejską ZTM', 'Zniżki na bilety wstępu do muzeów i kin', 'Chip RFID do identyfikacji w szkole'],
    howTitle: 'Jak zamówić?',
    steps: [
      'Zgłoś chęć zamówienia w sekretariacie szkoły.',
      'Dostarcz aktualne zdjęcie ucznia (format legitymacyjny).',
      'E-legitymacja zostanie wydana w ciągu 2–3 tygodni.',
    ],
    costTitle: 'Koszt',
    costDesc: 'Pierwsza e-legitymacja jest bezpłatna. W przypadku zgubienia lub zniszczenia opłata za duplikat wynosi 50 PLN.',
  },
  de: {
    title: 'E-Schülerausweis',
    subtitle: 'Elektronischer Schülerausweis',
    intro: 'WBS-Schüler können einen elektronischen Schülerausweis (E-Legitimation) mit integriertem RFID-Chip bestellen. Der E-Ausweis erfüllt die Funktion eines traditionellen Schülerausweises und ermöglicht Ermäßigungen.',
    featuresTitle: 'Funktionen',
    features: ['Nachweis des Schülerstatus', 'ZTM-Ermäßigungen im Nahverkehr', 'Ermäßigungen für Museen und Kinos', 'RFID-Chip zur Identifikation in der Schule'],
    howTitle: 'Wie bestellen?',
    steps: [
      'Melden Sie den Wunsch im Sekretariat an.',
      'Liefern Sie ein aktuelles Schülerfoto (Passformat).',
      'Der E-Ausweis wird innerhalb von 2–3 Wochen ausgestellt.',
    ],
    costTitle: 'Kosten',
    costDesc: 'Der erste E-Ausweis ist kostenlos. Bei Verlust oder Beschädigung beträgt die Gebühr für ein Duplikat 50 PLN.',
  },
  en: {
    title: 'E-Student ID',
    subtitle: 'Electronic student identification card',
    intro: 'WBS students can order an electronic student ID card (e-legitimacja) with a built-in RFID chip. The e-ID serves as a traditional student card and provides access to discounts.',
    featuresTitle: 'Features',
    features: ['Proof of student status', 'ZTM public transport discounts', 'Discounts for museums and cinemas', 'RFID chip for school identification'],
    howTitle: 'How to order?',
    steps: [
      'Express your interest at the school office.',
      'Provide a current student photo (passport format).',
      'The e-ID will be issued within 2–3 weeks.',
    ],
    costTitle: 'Cost',
    costDesc: 'The first e-ID is free of charge. In case of loss or damage, the fee for a duplicate is 50 PLN.',
  },
};

export default async function EIdPage({ params }: { params: Promise<{ locale: string }> }) {
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
            <h2 className="mb-4 text-xl font-bold text-neutral-900">{t.featuresTitle}</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {t.features.map((f, i) => (
                <div key={i} className="flex items-center gap-3 rounded-lg bg-white p-3">
                  <Shield className="size-4 text-red-600" />
                  <span className="text-neutral-700">{f}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12 rounded-2xl bg-red-600 p-8 text-white">
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
                <h3 className="font-semibold text-neutral-900">{t.costTitle}</h3>
                <p className="text-neutral-600">{t.costDesc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
