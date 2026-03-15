import { Metadata } from 'next';
import Image from 'next/image';
import PageHeader from '@/components/features/PageHeader';
import { Handshake, Building2, GraduationCap, Globe, ExternalLink } from 'lucide-react';
import partnersData from '@/data/extracted/partners.json';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const titles: Record<string, string> = {
    pl: 'Partnerzy | WBS',
    de: 'Partner | WBS',
    en: 'Partners | WBS',
  };
  const descriptions: Record<string, string> = {
    pl: 'Partnerzy Polsko-Niemieckiej Szkoły Spotkań i Dialogu im. Willy\'ego Brandta - ambasady, szkoły partnerskie, organizacje edukacyjne.',
    de: 'Partner der Deutsch-Polnischen Begegnungsschule Willy Brandt - Botschaften, Partnerschulen, Bildungsorganisationen.',
    en: 'Partners of the Polish-German School of Meetings and Dialogue - embassies, partner schools, educational organizations.',
  };
  return {
    title: titles[locale] || titles.en,
    description: descriptions[locale] || descriptions.en,
  };
}

const translations = {
  pl: {
    title: 'Partnerzy i Sponsorzy',
    subtitle: 'Instytucje i organizacje wspierające naszą misję',
    intro:
      'Jako polsko-niemiecka szkoła spotkań i dialogu, współpracujemy z wieloma instytucjami i organizacjami, które wspierają naszą misję edukacyjną i kulturalną.',
    institutionalTitle: 'Partnerzy instytucjonalni',
    sponsorsTitle: 'Sponsorzy',
    goldSponsors: 'Sponsorzy główni',
    silverSponsors: 'Sponsorzy',
    otherPartners: 'Partnerzy',
    collaborationTitle: 'Formy współpracy',
    collaborationItems: [
      'Wymiana uczniowska i programy mobilności',
      'Wspólne projekty edukacyjne i badawcze',
      'Warsztaty i szkolenia dla nauczycieli',
      'Wydarzenia kulturalne i świąteczne',
      'Wsparcie materiałowe i finansowe',
    ],
    visitWebsite: 'Odwiedź stronę',
  },
  de: {
    title: 'Partner und Sponsoren',
    subtitle: 'Institutionen und Organisationen, die unsere Mission unterstützen',
    intro:
      'Als deutsch-polnische Begegnungsschule arbeiten wir mit vielen Institutionen und Organisationen zusammen, die unsere bildungs- und kulturpolitische Mission unterstützen.',
    institutionalTitle: 'Institutionelle Partner',
    sponsorsTitle: 'Sponsoren',
    goldSponsors: 'Hauptsponsoren',
    silverSponsors: 'Sponsoren',
    otherPartners: 'Partner',
    collaborationTitle: 'Formen der Zusammenarbeit',
    collaborationItems: [
      'Schüleraustausch und Mobilitätsprogramme',
      'Gemeinsame Bildungs- und Forschungsprojekte',
      'Workshops und Fortbildungen für Lehrkräfte',
      'Kulturelle und festliche Veranstaltungen',
      'Materielle und finanzielle Unterstützung',
    ],
    visitWebsite: 'Website besuchen',
  },
  en: {
    title: 'Partners & Sponsors',
    subtitle: 'Institutions and organizations supporting our mission',
    intro:
      'As a Polish-German school of meetings and dialogue, we collaborate with many institutions and organizations that support our educational and cultural mission.',
    institutionalTitle: 'Institutional Partners',
    sponsorsTitle: 'Sponsors',
    goldSponsors: 'Gold Sponsors',
    silverSponsors: 'Silver Sponsors',
    otherPartners: 'Partners',
    collaborationTitle: 'Forms of collaboration',
    collaborationItems: [
      'Student exchange and mobility programs',
      'Joint educational and research projects',
      'Workshops and training for teachers',
      'Cultural and festive events',
      'Material and financial support',
    ],
    visitWebsite: 'Visit website',
  },
};

const iconMap = {
  building: Building2,
  building2: Building2,
  graduation: GraduationCap,
  globe: Globe,
  handshake: Handshake,
};

export default async function PartnersPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = translations[locale as keyof typeof translations] || translations.en;

  const institutional = partnersData.institutional || [];
  const sponsors = partnersData.sponsors || [];

  const goldSponsors = sponsors.filter((s) => s.tier === 'gold');
  const silverSponsors = sponsors.filter((s) => s.tier === 'silver');
  const partnerTier = sponsors.filter((s) => s.tier === 'partner');

  return (
    <>
      <PageHeader lang={locale} title={t.title} description={t.subtitle} />

      <section className="section bg-white">
        <div className="container-custom max-w-5xl">
          <p className="mb-16 text-center text-xl leading-relaxed text-neutral-600">{t.intro}</p>

          {/* Institutional Partners */}
          <h2 className="mb-8 text-2xl font-bold text-neutral-900">{t.institutionalTitle}</h2>
          <div className="mb-16 grid gap-6 md:grid-cols-2">
            {institutional.map((partner) => {
              const name = partner.name[locale as keyof typeof partner.name] || partner.name.en;
              const desc = partner.description[locale as keyof typeof partner.description] || partner.description.en;

              return (
                <div
                  key={partner.id}
                  className="rounded-2xl border border-neutral-200 bg-white p-6 transition-all hover:border-neutral-300 hover:shadow-lg"
                >
                  <div className="mb-4 flex items-center gap-4">
                    {partner.logo ? (
                      <div className="relative size-12 shrink-0 overflow-hidden rounded-lg bg-neutral-50">
                        <Image
                          src={partner.logo}
                          alt={name}
                          fill
                          className="object-contain p-1"
                          sizes="48px"
                        />
                      </div>
                    ) : (
                      <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-red-100">
                        <Building2 className="size-6 text-red-600" />
                      </div>
                    )}
                    <h3 className="font-bold text-neutral-900">{name}</h3>
                  </div>
                  <p className="mb-4 text-sm leading-relaxed text-neutral-600">{desc}</p>
                  {partner.url && (
                    <a
                      href={partner.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-red-600 hover:text-red-700"
                    >
                      <ExternalLink className="size-3.5" />
                      {t.visitWebsite}
                    </a>
                  )}
                </div>
              );
            })}
          </div>

          {/* Sponsors Section */}
          <h2 className="mb-8 text-2xl font-bold text-neutral-900">{t.sponsorsTitle}</h2>

          {/* Gold Sponsors */}
          {goldSponsors.length > 0 && (
            <div className="mb-12">
              <h3 className="mb-6 text-sm font-semibold uppercase tracking-widest text-amber-600">
                {t.goldSponsors}
              </h3>
              <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
                {goldSponsors.map((sponsor) => (
                  <a
                    key={sponsor.id}
                    href={sponsor.url || '#'}
                    target={sponsor.url ? '_blank' : undefined}
                    rel={sponsor.url ? 'noopener noreferrer' : undefined}
                    className="flex h-28 items-center justify-center rounded-2xl border-2 border-amber-200 bg-amber-50 p-6 transition-all hover:border-amber-300 hover:shadow-lg"
                  >
                    {sponsor.logo ? (
                      <Image
                        src={sponsor.logo}
                        alt={sponsor.name}
                        width={160}
                        height={60}
                        className="max-h-14 w-auto object-contain"
                      />
                    ) : (
                      <span className="text-lg font-bold text-neutral-700">{sponsor.name}</span>
                    )}
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Silver Sponsors */}
          {silverSponsors.length > 0 && (
            <div className="mb-12">
              <h3 className="mb-6 text-sm font-semibold uppercase tracking-widest text-neutral-500">
                {t.silverSponsors}
              </h3>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {silverSponsors.map((sponsor) => (
                  <a
                    key={sponsor.id}
                    href={sponsor.url || '#'}
                    target={sponsor.url ? '_blank' : undefined}
                    rel={sponsor.url ? 'noopener noreferrer' : undefined}
                    className="flex h-20 items-center justify-center rounded-xl border border-neutral-200 bg-neutral-50 p-4 transition-all hover:border-neutral-300 hover:shadow-md"
                  >
                    {sponsor.logo ? (
                      <Image
                        src={sponsor.logo}
                        alt={sponsor.name}
                        width={120}
                        height={48}
                        className="max-h-10 w-auto object-contain"
                      />
                    ) : (
                      <span className="text-sm font-semibold text-neutral-600">{sponsor.name}</span>
                    )}
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Other Partners */}
          {partnerTier.length > 0 && (
            <div className="mb-16">
              <h3 className="mb-6 text-sm font-semibold uppercase tracking-widest text-neutral-400">
                {t.otherPartners}
              </h3>
              <div className="grid grid-cols-3 gap-3 md:grid-cols-5">
                {partnerTier.map((sponsor) => (
                  <div
                    key={sponsor.id}
                    className="flex h-16 items-center justify-center rounded-lg border border-neutral-100 bg-white p-3"
                  >
                    {sponsor.logo ? (
                      <Image
                        src={sponsor.logo}
                        alt={sponsor.name}
                        width={96}
                        height={36}
                        className="max-h-8 w-auto object-contain opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
                      />
                    ) : (
                      <span className="text-xs font-medium text-neutral-500">{sponsor.name}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Collaboration Forms */}
          <div className="rounded-2xl bg-neutral-50 p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-lg bg-red-100">
                <Handshake className="size-5 text-red-600" />
              </div>
              <h2 className="text-2xl font-bold text-neutral-900">{t.collaborationTitle}</h2>
            </div>
            <ul className="space-y-3">
              {t.collaborationItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-1.5 block size-2 shrink-0 rounded-full bg-red-600" />
                  <span className="text-lg text-neutral-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
