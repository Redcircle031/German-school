import { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/features/PageHeader';
import { Utensils, Clock, Phone, FileText, ExternalLink } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const titles = { pl: 'Stołówka | WBS', de: 'Kantine | WBS', en: 'Canteen | WBS' };
  return { title: titles[locale as keyof typeof titles] || titles.en };
}

const translations = {
  pl: {
    title: 'Stołówka Szkolna',
    subtitle: 'Zdrowe posiłki dla uczniów',
    intro: 'Stołówka szkolna WBS prowadzona jest przez firmę cateringową Katarzyna Matusiewicz Catering. Codziennie przygotowywane są świeże, zbilansowane posiłki dla uczniów i pracowników szkoły.',
    cateringTitle: 'Catering',
    cateringName: 'Katarzyna Matusiewicz Catering',
    cateringDesc: 'Firma cateringowa odpowiedzialna za przygotowanie wszystkich posiłków w szkole. Jadłospis jest układany z uwzględnieniem potrzeb żywieniowych dzieci i młodzieży.',
    hoursTitle: 'Godziny otwarcia',
    hours: [
      { label: 'Stołówka', time: '7:30 – 16:00' },
      { label: 'Wydawanie obiadów', time: '11:30 – 14:00' },
      { label: 'Podwieczorek', time: '14:00 – 15:30' },
    ],
    menuTitle: 'Jadłospis',
    menuDesc: 'Aktualny jadłospis na dany tydzień jest publikowany na stronie firmy cateringowej oraz wywieszany w stołówce.',
    menuCategories: ['Zupa', 'Danie główne', 'Surówka/sałatka', 'Kompot/napój'],
    allergensTitle: 'Alergeny i diety specjalne',
    allergensDesc: 'W przypadku alergii pokarmowych lub wymagań dietetycznych prosimy o kontakt z firmą cateringową. Możliwe jest przygotowanie posiłków alternatywnych.',
    documentsTitle: 'Dokumenty',
    documentsDesc: 'Informacja dla rodziców dotycząca stołówki szkolnej',
    contactTitle: 'Kontakt',
  },
  de: {
    title: 'Schulkantine',
    subtitle: 'Gesunde Mahlzeiten für Schüler',
    intro: 'Die WBS-Schulkantine wird vom Catering-Unternehmen Katarzyna Matusiewicz Catering betrieben. Täglich werden frische, ausgewogene Mahlzeiten für Schüler und Schulpersonal zubereitet.',
    cateringTitle: 'Catering',
    cateringName: 'Katarzyna Matusiewicz Catering',
    cateringDesc: 'Das Catering-Unternehmen ist für die Zubereitung aller Mahlzeiten in der Schule verantwortlich. Der Speiseplan berücksichtigt die Ernährungsbedürfnisse von Kindern und Jugendlichen.',
    hoursTitle: 'Öffnungszeiten',
    hours: [
      { label: 'Kantine', time: '7:30 – 16:00' },
      { label: 'Mittagessen', time: '11:30 – 14:00' },
      { label: 'Nachmittagssnack', time: '14:00 – 15:30' },
    ],
    menuTitle: 'Speiseplan',
    menuDesc: 'Der aktuelle Wochenspeiseplan wird auf der Website des Catering-Unternehmens veröffentlicht und in der Kantine ausgehängt.',
    menuCategories: ['Suppe', 'Hauptgericht', 'Salat/Beilage', 'Kompott/Getränk'],
    allergensTitle: 'Allergene und spezielle Diäten',
    allergensDesc: 'Bei Lebensmittelallergien oder Diätanforderungen kontaktieren Sie bitte das Catering-Unternehmen. Alternative Mahlzeiten können zubereitet werden.',
    documentsTitle: 'Dokumente',
    documentsDesc: 'Information für Eltern zur Schulkantine',
    contactTitle: 'Kontakt',
  },
  en: {
    title: 'School Canteen',
    subtitle: 'Healthy meals for students',
    intro: 'The WBS school canteen is operated by Katarzyna Matusiewicz Catering. Fresh, balanced meals are prepared daily for students and school staff.',
    cateringTitle: 'Catering',
    cateringName: 'Katarzyna Matusiewicz Catering',
    cateringDesc: 'The catering company is responsible for preparing all meals at the school. The menu is designed with the nutritional needs of children and young people in mind.',
    hoursTitle: 'Opening Hours',
    hours: [
      { label: 'Canteen', time: '7:30 – 16:00' },
      { label: 'Lunch service', time: '11:30 – 14:00' },
      { label: 'Afternoon snack', time: '14:00 – 15:30' },
    ],
    menuTitle: 'Menu',
    menuDesc: 'The current weekly menu is published on the catering company\'s website and displayed in the canteen.',
    menuCategories: ['Soup', 'Main course', 'Salad/Side dish', 'Compote/Drink'],
    allergensTitle: 'Allergens & Special Diets',
    allergensDesc: 'For food allergies or dietary requirements, please contact the catering company. Alternative meals can be prepared.',
    documentsTitle: 'Documents',
    documentsDesc: 'Information for parents about the school canteen',
    contactTitle: 'Contact',
  },
};

export default async function CanteenPage({ params }: { params: Promise<{ locale: string }> }) {
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

          {/* Catering Provider */}
          <div className="mb-12 rounded-2xl bg-neutral-900 p-8 text-white">
            <h2 className="mb-2 text-xl font-bold">{t.cateringTitle}</h2>
            <p className="mb-4 text-2xl font-bold text-red-400">{t.cateringName}</p>
            <p className="text-neutral-300">{t.cateringDesc}</p>
          </div>

          {/* Hours */}
          <div className="mb-12 grid gap-6 md:grid-cols-3">
            {t.hours.map((h, i) => (
              <div key={i} className="rounded-xl bg-neutral-50 p-6 text-center">
                <Clock className="mx-auto mb-3 size-8 text-red-600" />
                <h3 className="mb-1 font-semibold text-neutral-900">{h.label}</h3>
                <p className="text-lg font-bold text-red-600">{h.time}</p>
              </div>
            ))}
          </div>

          {/* Menu Info */}
          <div className="mb-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-8">
              <Utensils className="mb-4 size-8 text-red-600" />
              <h2 className="mb-3 text-xl font-bold text-neutral-900">{t.menuTitle}</h2>
              <p className="mb-4 text-neutral-600">{t.menuDesc}</p>
              <div className="flex flex-wrap gap-2">
                {t.menuCategories.map((cat, i) => (
                  <span key={i} className="rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-700">{cat}</span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-8">
              <FileText className="mb-4 size-8 text-red-600" />
              <h2 className="mb-3 text-xl font-bold text-neutral-900">{t.allergensTitle}</h2>
              <p className="text-neutral-600">{t.allergensDesc}</p>
            </div>
          </div>

          {/* Documents Link */}
          <div className="mb-12 rounded-2xl bg-red-50 p-8">
            <h2 className="mb-4 text-xl font-bold text-neutral-900">{t.documentsTitle}</h2>
            <p className="mb-4 text-neutral-600">{t.documentsDesc}</p>
            <a
              href="/pdfs/informacja_dla_rodzicow_-_katarzyna_matusiewicz_catering_-wbs_szkola_polsko_niemiecka.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-red-700"
            >
              <ExternalLink className="size-4" />
              PDF
            </a>
          </div>

          {/* Contact */}
          <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-8">
            <h2 className="mb-4 text-xl font-bold text-neutral-900">{t.contactTitle}</h2>
            <div className="flex items-center gap-3">
              <Phone className="size-5 text-red-600" />
              <span className="text-neutral-700">+48 22 642 27 05 ({locale === 'pl' ? 'sekretariat' : locale === 'de' ? 'Sekretariat' : 'office'})</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
