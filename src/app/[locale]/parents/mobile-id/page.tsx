import { Metadata } from 'next';
import PageHeader from '@/components/features/PageHeader';
import { Smartphone, Shield, CheckCircle } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const titles = { pl: 'mLegitymacja | WBS', de: 'mLegitimation | WBS', en: 'Mobile ID | WBS' };
  return { title: titles[locale as keyof typeof titles] || titles.en };
}

const translations = {
  pl: {
    title: 'mLegitymacja',
    subtitle: 'Legitymacja szkolna w aplikacji mObywatel',
    intro: 'Uczniowie WBS mogą aktywować mLegitymację — cyfrową wersję legitymacji szkolnej dostępną w aplikacji mObywatel. mLegitymacja jest równoważna z tradycyjną legitymacją szkolną i pozwala na korzystanie z ulg i zniżek.',
    stepsTitle: 'Jak aktywować?',
    steps: [
      'Zainstaluj aplikację mObywatel na swoim telefonie (Android lub iOS).',
      'Zgłoś się do sekretariatu szkoły po kod aktywacyjny.',
      'Wprowadź kod w aplikacji mObywatel w sekcji „mLegitymacja".',
      'mLegitymacja pojawi się w aplikacji i będzie gotowa do użycia.',
    ],
    benefitsTitle: 'Zalety mLegitymacji',
    benefits: [
      'Zawsze przy sobie — w telefonie',
      'Honorowana tak samo jak tradycyjna legitymacja',
      'Ważna w komunikacji miejskiej, kinach, muzeach',
      'Nie wymaga noszenia fizycznej karty',
    ],
    requirementsTitle: 'Wymagania',
    requirements: 'Telefon z systemem Android 6.0+ lub iOS 14+ z dostępem do Internetu. Uczeń musi mieć aktywny profil w systemie szkolnym.',
  },
  de: {
    title: 'mLegitimation',
    subtitle: 'Digitaler Schülerausweis in der mObywatel-App',
    intro: 'WBS-Schüler können die mLegitimation aktivieren — eine digitale Version des Schülerausweises in der mObywatel-App. Die mLegitimation ist gleichwertig mit dem traditionellen Schülerausweis.',
    stepsTitle: 'Wie aktivieren?',
    steps: [
      'Installieren Sie die mObywatel-App auf Ihrem Telefon (Android oder iOS).',
      'Holen Sie den Aktivierungscode im Sekretariat ab.',
      'Geben Sie den Code in der mObywatel-App unter „mLegitimation" ein.',
      'Die mLegitimation erscheint in der App und ist einsatzbereit.',
    ],
    benefitsTitle: 'Vorteile',
    benefits: [
      'Immer dabei — auf dem Handy',
      'Gleichwertig mit dem traditionellen Ausweis',
      'Gültig im Nahverkehr, Kinos und Museen',
      'Kein physischer Ausweis nötig',
    ],
    requirementsTitle: 'Voraussetzungen',
    requirements: 'Telefon mit Android 6.0+ oder iOS 14+ und Internetzugang. Der Schüler muss ein aktives Profil im Schulsystem haben.',
  },
  en: {
    title: 'Mobile Student ID',
    subtitle: 'Digital student card in the mObywatel app',
    intro: 'WBS students can activate mLegitymacja — a digital version of the student card available in the mObywatel app. The mobile ID is equivalent to the traditional student card and allows access to discounts.',
    stepsTitle: 'How to activate?',
    steps: [
      'Install the mObywatel app on your phone (Android or iOS).',
      'Visit the school office to get your activation code.',
      'Enter the code in the mObywatel app under "mLegitymacja".',
      'The mobile ID will appear in the app and is ready to use.',
    ],
    benefitsTitle: 'Benefits',
    benefits: [
      'Always with you — on your phone',
      'Accepted just like the traditional card',
      'Valid for public transport, cinemas, museums',
      'No physical card needed',
    ],
    requirementsTitle: 'Requirements',
    requirements: 'Phone with Android 6.0+ or iOS 14+ with internet access. The student must have an active profile in the school system.',
  },
};

export default async function MobileIdPage({ params }: { params: Promise<{ locale: string }> }) {
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

          <div className="mb-12 rounded-2xl bg-neutral-900 p-8 text-white">
            <Smartphone className="mb-4 size-10 text-red-400" />
            <h2 className="mb-6 text-xl font-bold">{t.stepsTitle}</h2>
            <ol className="space-y-4">
              {t.steps.map((step, i) => (
                <li key={i} className="flex gap-4">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-red-600 text-sm font-bold">{i + 1}</span>
                  <p className="text-neutral-300">{step}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="mb-12 rounded-2xl border border-neutral-200 bg-neutral-50 p-8">
            <h2 className="mb-4 text-xl font-bold text-neutral-900">{t.benefitsTitle}</h2>
            <div className="space-y-3">
              {t.benefits.map((b, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="size-5 text-green-600" />
                  <span className="text-neutral-700">{b}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-amber-50 p-6">
            <div className="flex items-start gap-3">
              <Shield className="mt-0.5 size-5 text-amber-600" />
              <div>
                <h3 className="font-semibold text-neutral-900">{t.requirementsTitle}</h3>
                <p className="text-neutral-600">{t.requirements}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
