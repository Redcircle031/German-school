import { Metadata } from 'next';
import PageHeader from '@/components/features/PageHeader';
import { Building, Users, Mail, FileText } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const titles = { pl: 'Organ prowadzący | WBS', de: 'Trägerverein | WBS', en: 'Governing Body | WBS' };
  return { title: titles[locale as keyof typeof titles] || titles.en };
}

const translations = {
  pl: {
    title: 'Organ Prowadzący',
    subtitle: 'Niemiecko-Polskie Towarzystwo Szkolne w Warszawie',
    intro: 'Szkoła WBS jest prowadzona przez Niemiecko-Polskie Towarzystwo Szkolne w Warszawie (NTS). Towarzystwo jest stowarzyszeniem zarejestrowanym w Polsce, odpowiedzialnym za zarządzanie szkołą, jej finansowanie i rozwój.',
    orgName: 'Niemiecko-Polskie Towarzystwo Szkolne w Warszawie',
    legalTitle: 'Dane rejestrowe',
    boardTitle: 'Zarząd NTS',
    boardDesc: 'Zarząd Towarzystwa odpowiada za strategiczne kierunki rozwoju szkoły, budżet i współpracę z partnerami instytucjonalnymi.',
    membershipTitle: 'Członkostwo',
    membershipDesc: 'Rodzice uczniów WBS mogą zostać członkami NTS. Formularz przystąpienia dostępny jest w sekretariacie lub do pobrania.',
    contactTitle: 'Kontakt',
  },
  de: {
    title: 'Trägerverein',
    subtitle: 'Deutsch-Polnische Schulgesellschaft in Warschau',
    intro: 'Die WBS wird vom Deutsch-Polnischen Schulverein in Warschau (NTS) getragen. Der Verein ist in Polen registriert und für die Verwaltung, Finanzierung und Entwicklung der Schule verantwortlich.',
    orgName: 'Deutsch-Polnische Schulgesellschaft in Warschau',
    legalTitle: 'Registrierungsdaten',
    boardTitle: 'Vorstand NTS',
    boardDesc: 'Der Vereinsvorstand ist verantwortlich für die strategische Ausrichtung der Schule, den Haushalt und die Zusammenarbeit mit institutionellen Partnern.',
    membershipTitle: 'Mitgliedschaft',
    membershipDesc: 'Eltern von WBS-Schülern können Mitglied des NTS werden. Das Antragsformular ist im Sekretariat erhältlich oder als Download verfügbar.',
    contactTitle: 'Kontakt',
  },
  en: {
    title: 'Governing Body',
    subtitle: 'German-Polish School Society in Warsaw',
    intro: 'WBS is governed by the German-Polish School Society in Warsaw (NTS). The society is a registered association in Poland, responsible for the management, funding, and development of the school.',
    orgName: 'German-Polish School Society in Warsaw (NTS)',
    legalTitle: 'Registration Data',
    boardTitle: 'NTS Board',
    boardDesc: 'The society\'s board is responsible for the strategic direction of the school, budget, and cooperation with institutional partners.',
    membershipTitle: 'Membership',
    membershipDesc: 'Parents of WBS students may become NTS members. The application form is available at the school office or as a download.',
    contactTitle: 'Contact',
  },
};

export default async function GoverningBodyPage({ params }: { params: Promise<{ locale: string }> }) {
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

          <div className="mb-12 rounded-2xl bg-neutral-900 p-8 text-white">
            <Building className="mb-4 size-10 text-red-400" />
            <h2 className="mb-2 text-2xl font-bold">{t.orgName}</h2>
            <div className="mt-6 space-y-2 text-neutral-300">
              <h3 className="font-semibold text-white">{t.legalTitle}</h3>
              <p><strong>KRS:</strong> 0000150334</p>
              <p><strong>NIP:</strong> PL9512099288</p>
              <p><strong>REGON:</strong> 011823389</p>
            </div>
          </div>

          <div className="mb-12 rounded-2xl border border-neutral-200 bg-neutral-50 p-8">
            <Users className="mb-4 size-8 text-red-600" />
            <h2 className="mb-3 text-xl font-bold text-neutral-900">{t.boardTitle}</h2>
            <p className="text-neutral-600">{t.boardDesc}</p>
          </div>

          <div className="mb-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-8">
              <FileText className="mb-4 size-8 text-red-600" />
              <h2 className="mb-3 text-xl font-bold text-neutral-900">{t.membershipTitle}</h2>
              <p className="mb-4 text-neutral-600">{t.membershipDesc}</p>
              <a
                href="/pdfs/nts_mitgliedsantrag_2021.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700"
              >
                <FileText className="size-4" /> PDF
              </a>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-8">
              <Mail className="mb-4 size-8 text-red-600" />
              <h2 className="mb-3 text-xl font-bold text-neutral-900">{t.contactTitle}</h2>
              <div className="space-y-2 text-neutral-600">
                <p>ul. Św. Urszuli Ledóchowskiej 3</p>
                <p>02-972 Warszawa</p>
                <p>
                  <a href="mailto:sekretariat1@wbs.pl" className="text-red-600 hover:underline">sekretariat1@wbs.pl</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
