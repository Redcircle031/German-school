import { Metadata } from 'next';
import Image from 'next/image';
import PageHeader from '@/components/features/PageHeader';
import { Award } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const titles = { pl: 'Certyfikaty | WBS', de: 'Zertifikate | WBS', en: 'Certificates | WBS' };
  return { title: titles[locale as keyof typeof titles] || titles.en };
}

const translations = {
  pl: {
    title: 'Certyfikaty i Wyróżnienia',
    subtitle: 'Potwierdzenie jakości naszej edukacji',
    intro: 'Szkoła WBS posiada szereg certyfikatów i wyróżnień potwierdzających jakość nauczania, programów i działalności szkolnej.',
  },
  de: {
    title: 'Zertifikate und Auszeichnungen',
    subtitle: 'Bestätigung unserer Bildungsqualität',
    intro: 'Die WBS verfügt über eine Reihe von Zertifikaten und Auszeichnungen, die die Qualität des Unterrichts, der Programme und der Schulaktivitäten bestätigen.',
  },
  en: {
    title: 'Certificates & Awards',
    subtitle: 'Confirming the quality of our education',
    intro: 'WBS holds a number of certificates and awards confirming the quality of teaching, programmes, and school activities.',
  },
};

const certificates = [
  {
    id: 'guetesiegel',
    name: { pl: 'Gütesiegel — Pieczęć Jakości Niemieckich Szkół za Granicą', de: 'Gütesiegel — Qualitätssiegel für Deutsche Schulen im Ausland', en: 'Gütesiegel — Quality Seal for German Schools Abroad' },
    desc: {
      pl: 'Certyfikat jakości przyznawany przez ZfA (Zentralstelle für das Auslandsschulwesen) po szczegółowej inspekcji szkoły. Potwierdza najwyższe standardy nauczania w pionie niemieckojęzycznym.',
      de: 'Qualitätszertifikat, vergeben von der ZfA (Zentralstelle für das Auslandsschulwesen) nach eingehender Schulinspektion. Bestätigt höchste Unterrichtsstandards im deutschsprachigen Zweig.',
      en: 'Quality certificate awarded by ZfA (Central Agency for Schools Abroad) after detailed school inspection. Confirms the highest teaching standards in the German-language track.',
    },
    image: '/images/certificates/guetesiegel.jpg',
  },
  {
    id: 'beniamin',
    name: { pl: 'Beniamin — Znak Jakości dla Szkół Przyjaznych Dzieciom', de: 'Beniamin — Qualitätszeichen für kinderfreundliche Schulen', en: 'Beniamin — Quality Mark for Child-Friendly Schools' },
    desc: {
      pl: 'Wyróżnienie przyznawane szkołom, które szczególnie dbają o dobrostan, bezpieczeństwo i rozwój emocjonalny dzieci.',
      de: 'Auszeichnung für Schulen, die sich besonders um das Wohlbefinden, die Sicherheit und die emotionale Entwicklung der Kinder kümmern.',
      en: 'Award for schools that particularly care for children\'s wellbeing, safety, and emotional development.',
    },
    image: '/images/certificates/beniamin.png',
  },
  {
    id: 'ose',
    name: { pl: 'OSE — Ogólnopolska Sieć Edukacyjna', de: 'OSE — Nationales Bildungsnetzwerk', en: 'OSE — National Educational Network' },
    desc: {
      pl: 'Certyfikat potwierdzający podłączenie szkoły do Ogólnopolskiej Sieci Edukacyjnej, zapewniającej szybki i bezpieczny internet do celów dydaktycznych.',
      de: 'Zertifikat, das den Anschluss der Schule an das Nationale Bildungsnetzwerk bestätigt, das schnelles und sicheres Internet für Unterrichtszwecke bietet.',
      en: 'Certificate confirming the school\'s connection to the National Educational Network, providing fast and secure internet for teaching purposes.',
    },
    image: '/images/certificates/ose.png',
  },
  {
    id: 'language',
    name: { pl: 'DSD — Deutsches Sprachdiplom', de: 'DSD — Deutsches Sprachdiplom', en: 'DSD — German Language Diploma' },
    desc: {
      pl: 'Szkoła jest uprawniona do przeprowadzania egzaminów DSD I i DSD II (Deutsches Sprachdiplom), które potwierdzają znajomość języka niemieckiego na poziomie B1 i C1.',
      de: 'Die Schule ist berechtigt, DSD I und DSD II Prüfungen durchzuführen, die Deutschkenntnisse auf B1- und C1-Niveau bescheinigen.',
      en: 'The school is authorised to conduct DSD I and DSD II examinations, certifying German language proficiency at B1 and C1 levels.',
    },
    image: '/images/certificates/language-cert.png',
  },
];

export default async function CertificatesPage({ params }: { params: Promise<{ locale: string }> }) {
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

          <div className="space-y-8">
            {certificates.map((cert) => (
              <div key={cert.id} className="flex flex-col gap-6 rounded-2xl border border-neutral-200 bg-neutral-50 p-6 md:flex-row md:items-center md:p-8">
                <div className="flex size-24 shrink-0 items-center justify-center self-center overflow-hidden rounded-xl bg-white p-2 md:size-32">
                  <Image src={cert.image} alt={cert.name.en} width={120} height={120} className="object-contain" />
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-neutral-900">
                    {cert.name[locale as keyof typeof cert.name] || cert.name.en}
                  </h3>
                  <p className="text-neutral-600">
                    {cert.desc[locale as keyof typeof cert.desc] || cert.desc.en}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
