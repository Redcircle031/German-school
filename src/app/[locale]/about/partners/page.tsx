import { Metadata } from 'next';
import PageHeader from '@/components/features/PageHeader';
import { Handshake, Building2, GraduationCap, Globe } from 'lucide-react';

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
    title: 'Partnerzy',
    subtitle: 'Instytucje i organizacje wspierające naszą misję',
    intro:
      'Jako polsko-niemiecka szkoła spotkań i dialogu, współpracujemy z wieloma instytucjami i organizacjami, które wspierają naszą misję edukacyjną i kulturalną. Dzięki tym partnerstwom możemy oferować naszym uczniom wyjątkowe możliwości rozwoju.',
    partners: [
      {
        icon: 'building',
        name: 'Ambasada Republiki Federalnej Niemiec w Warszawie',
        description:
          'Ambasada Niemiec jest jednym z naszych najważniejszych partnerów. Wspiera nas w organizacji wydarzeń kulturalnych, wymiany uczniowskiej oraz zapewnia wsparcie merytoryczne w zakresie nauczania języka niemieckiego i kultury.',
      },
      {
        icon: 'building2',
        name: 'Miasto Stołeczne Warszawa',
        description:
          'Jako organ prowadzący, Miasto Warszawa zapewnia wsparcie finansowe i organizacyjne dla naszej szkoły. Współpracujemy przy projektach edukacyjnych i wydarzeniach na rzecz społeczności lokalnej.',
      },
      {
        icon: 'graduation',
        name: 'Szkoły partnerskie w Niemczech',
        description:
          'Utrzymujemy aktywne partnerstwa z kilkoma szkołami w Niemczech, w tym w Berlinie, Hamburgu i Lubece - rodzinnym mieście Willy\'ego Brandta. Regularnie organizujemy wymiany uczniowskie i wspólne projekty edukacyjne.',
      },
      {
        icon: 'globe',
        name: 'Organizacje edukacyjne i kulturalne',
        description:
          'Współpracujemy z Goethe-Institut, Polsko-Niemiecką Współpracą Młodzieży (DPJW), Centralnym Wydziałem Szkolnictwa za Granicą (ZfA) oraz innymi organizacjami wspierającymi edukację dwujęzyczną i wymianę kulturalną.',
      },
      {
        icon: 'handshake',
        name: 'Stowarzyszenia i fundacje',
        description:
          'Blisko współpracujemy ze Stowarzyszeniem Willy\'ego Brandta, Fundacją Polsko-Niemieckiego Pojednania oraz lokalnymi organizacjami pozarządowymi, które wspierają nasze działania na rzecz dialogu międzykulturowego.',
      },
    ],
    collaborationTitle: 'Formy współpracy',
    collaborationItems: [
      'Wymiana uczniowska i programy mobilności',
      'Wspólne projekty edukacyjne i badawcze',
      'Warsztaty i szkolenia dla nauczycieli',
      'Wydarzenia kulturalne i świąteczne',
      'Wsparcie materiałowe i finansowe',
    ],
  },
  de: {
    title: 'Partner',
    subtitle: 'Institutionen und Organisationen, die unsere Mission unterstützen',
    intro:
      'Als deutsch-polnische Begegnungsschule arbeiten wir mit vielen Institutionen und Organisationen zusammen, die unsere bildungs- und kulturpolitische Mission unterstützen. Dank dieser Partnerschaften können wir unseren Schülern außergewöhnliche Entwicklungsmöglichkeiten bieten.',
    partners: [
      {
        icon: 'building',
        name: 'Botschaft der Bundesrepublik Deutschland in Warschau',
        description:
          'Die deutsche Botschaft ist einer unserer wichtigsten Partner. Sie unterstützt uns bei der Organisation kultureller Veranstaltungen, des Schüleraustauschs und bietet fachliche Unterstützung im Bereich des Deutschunterrichts und der Kultur.',
      },
      {
        icon: 'building2',
        name: 'Hauptstadt Warschau',
        description:
          'Als Schulträger bietet die Stadt Warschau finanzielle und organisatorische Unterstützung für unsere Schule. Wir arbeiten gemeinsam an Bildungsprojekten und Veranstaltungen für die lokale Gemeinschaft.',
      },
      {
        icon: 'graduation',
        name: 'Partnerschulen in Deutschland',
        description:
          'Wir pflegen aktive Partnerschaften mit mehreren Schulen in Deutschland, unter anderem in Berlin, Hamburg und Lübeck - der Geburtsstadt Willy Brandts. Regelmäßig organisieren wir Schüleraustausche und gemeinsame Bildungsprojekte.',
      },
      {
        icon: 'globe',
        name: 'Bildungs- und Kulturorganisationen',
        description:
          'Wir arbeiten mit dem Goethe-Institut, dem Deutsch-Polnischen Jugendwerk (DPJW), der Zentralstelle für das Auslandsschulwesen (ZfA) und anderen Organisationen zusammen, die zweisprachige Bildung und kulturellen Austausch fördern.',
      },
      {
        icon: 'handshake',
        name: 'Vereine und Stiftungen',
        description:
          'Wir arbeiten eng mit der Willy-Brandt-Gesellschaft, der Stiftung Polnisch-Deutsche Aussöhnung und lokalen Nichtregierungsorganisationen zusammen, die unsere Arbeit für den interkulturellen Dialog unterstützen.',
      },
    ],
    collaborationTitle: 'Formen der Zusammenarbeit',
    collaborationItems: [
      'Schüleraustausch und Mobilitätsprogramme',
      'Gemeinsame Bildungs- und Forschungsprojekte',
      'Workshops und Fortbildungen für Lehrkräfte',
      'Kulturelle und festliche Veranstaltungen',
      'Materielle und finanzielle Unterstützung',
    ],
  },
  en: {
    title: 'Partners',
    subtitle: 'Institutions and organizations supporting our mission',
    intro:
      'As a Polish-German school of meetings and dialogue, we collaborate with many institutions and organizations that support our educational and cultural mission. Thanks to these partnerships, we can offer our students exceptional development opportunities.',
    partners: [
      {
        icon: 'building',
        name: 'Embassy of the Federal Republic of Germany in Warsaw',
        description:
          'The German Embassy is one of our most important partners. It supports us in organizing cultural events, student exchanges, and provides expert support in teaching the German language and culture.',
      },
      {
        icon: 'building2',
        name: 'City of Warsaw',
        description:
          'As the governing body, the City of Warsaw provides financial and organizational support for our school. We collaborate on educational projects and community events for the local population.',
      },
      {
        icon: 'graduation',
        name: 'Partner schools in Germany',
        description:
          'We maintain active partnerships with several schools in Germany, including in Berlin, Hamburg, and L\u00fcbeck - the birthplace of Willy Brandt. We regularly organize student exchanges and joint educational projects.',
      },
      {
        icon: 'globe',
        name: 'Educational and cultural organizations',
        description:
          'We work with the Goethe-Institut, the German-Polish Youth Office (DPJW), the Central Agency for Schools Abroad (ZfA), and other organizations supporting bilingual education and cultural exchange.',
      },
      {
        icon: 'handshake',
        name: 'Associations and foundations',
        description:
          'We work closely with the Willy Brandt Association, the Foundation for Polish-German Reconciliation, and local non-governmental organizations that support our efforts in intercultural dialogue.',
      },
    ],
    collaborationTitle: 'Forms of collaboration',
    collaborationItems: [
      'Student exchange and mobility programs',
      'Joint educational and research projects',
      'Workshops and training for teachers',
      'Cultural and festive events',
      'Material and financial support',
    ],
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

  return (
    <>
      <PageHeader lang={locale} title={t.title} description={t.subtitle} />

      {/* Introduction */}
      <section className="section bg-white">
        <div className="container-custom max-w-4xl">
          <p className="mb-12 text-center text-xl leading-relaxed text-neutral-600">{t.intro}</p>

          {/* Partner Cards */}
          <div className="mb-16 space-y-8">
            {t.partners.map((partner, index) => {
              const IconComponent = iconMap[partner.icon as keyof typeof iconMap] || Globe;
              const colors = [
                { bg: 'bg-red-100', text: 'text-red-600' },
                { bg: 'bg-blue-100', text: 'text-blue-600' },
                { bg: 'bg-green-100', text: 'text-green-600' },
                { bg: 'bg-amber-100', text: 'text-amber-600' },
                { bg: 'bg-purple-100', text: 'text-purple-600' },
              ];
              const color = colors[index % colors.length];

              return (
                <div
                  key={index}
                  className="rounded-2xl border border-neutral-200 bg-white p-8 transition-all duration-300 hover:border-neutral-300 hover:shadow-lg"
                >
                  <div className="flex gap-6">
                    <div className={`flex size-12 shrink-0 items-center justify-center rounded-xl ${color.bg}`}>
                      <IconComponent className={`size-6 ${color.text}`} />
                    </div>
                    <div>
                      <h3 className="mb-3 text-xl font-bold text-neutral-900">{partner.name}</h3>
                      <p className="leading-relaxed text-neutral-600">{partner.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

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
