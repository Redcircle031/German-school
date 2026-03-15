import { Metadata } from 'next';
import PageHeader from '@/components/features/PageHeader';
import { Award, Clock, Globe } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const titles: Record<string, string> = {
    pl: 'Patron Szkoły | WBS',
    de: 'Schulpatron | WBS',
    en: 'School Patron | WBS',
  };
  const descriptions: Record<string, string> = {
    pl: 'Willy Brandt - patron Polsko-Niemieckiej Szkoły Spotkań i Dialogu w Warszawie. Kanclerz Niemiec, laureat Pokojowej Nagrody Nobla, symbol pojednania polsko-niemieckiego.',
    de: 'Willy Brandt - Patron der Deutsch-Polnischen Begegnungsschule in Warschau. Bundeskanzler, Friedensnobelpreisträger, Symbol der deutsch-polnischen Versöhnung.',
    en: 'Willy Brandt - patron of the Polish-German School of Meetings and Dialogue in Warsaw. German Chancellor, Nobel Peace Prize laureate, symbol of German-Polish reconciliation.',
  };
  return {
    title: titles[locale] || titles.en,
    description: descriptions[locale] || descriptions.en,
  };
}

const translations = {
  pl: {
    title: 'Patron Szkoły',
    subtitle: 'Willy Brandt - symbol pojednania i dialogu',
    intro:
      'Nasza szkoła z dumą nosi imię Willy\'ego Brandta, wybitnego niemieckiego polityka i męża stanu, którego życie i dziedzictwo uosabiają wartości, które staramy się przekazywać naszym uczniom: odwagę, dialog i pojednanie między narodami.',
    bioTitle: 'Willy Brandt (1913\u20131992)',
    bioText:
      'Urodzony jako Herbert Ernst Karl Frahm w Lubece, Willy Brandt był niemieckim politykiem, który służył jako kanclerz Republiki Federalnej Niemiec w latach 1969\u20131974. Wcześniej pełnił funkcję burmistrza Berlina Zachodniego w burzliwym okresie budowy muru berlińskiego. Jako kanclerz prowadził przełomową Ostpolitik - politykę zbliżenia z krajami bloku wschodniego, która przyczyniła się do odprężenia w stosunkach międzynarodowych.',
    kniefallTitle: 'Kniefall von Warschau',
    kniefallText:
      'Dnia 7 grudnia 1970 roku Willy Brandt uklęknął przed Pomnikiem Bohaterów Getta Warszawskiego. Ten spontaniczny gest, znany jako Kniefall von Warschau (Uklęknięcie Warszawskie), stał się jednym z najważniejszych symboli pojednania polsko-niemieckiego i uznania odpowiedzialności za zbrodnie II wojny światowej.',
    nobelTitle: 'Pokojowa Nagroda Nobla',
    nobelText:
      'W 1971 roku Willy Brandt otrzymał Pokojową Nagrodę Nobla za wysiłki na rzecz wzmocnienia współpracy w Europie Zachodniej i za prowadzenie polityki pojednania między Wschodem a Zachodem. Nagroda ta uhonorowała jego niezwykłą odwagę polityczną i osobiste zaangażowanie w budowanie pokoju.',
    legacyTitle: 'Dziedzictwo dla naszej szkoły',
    legacyText:
      'Wartości, które reprezentował Willy Brandt - dialog, pojednanie, otwartość na świat i odwaga w dążeniu do pokoju - stanowią fundament misji naszej szkoły. Kształcimy młodych ludzi, którzy, podobnie jak patron naszej szkoły, będą budować mosty między kulturami i narodami.',
    timelineTitle: 'Kalendarium',
    timeline: [
      { year: '1913', event: 'Urodzony w Lubece jako Herbert Frahm' },
      { year: '1957', event: 'Zostaje burmistrzem Berlina Zachodniego' },
      { year: '1969', event: 'Zostaje kanclerzem Republiki Federalnej Niemiec' },
      { year: '1970', event: 'Kniefall von Warschau - uklęknięcie przed Pomnikiem Bohaterów Getta' },
      { year: '1971', event: 'Otrzymuje Pokojową Nagrodę Nobla' },
      { year: '1992', event: 'Umiera w Unkel nad Renem' },
    ],
  },
  de: {
    title: 'Schulpatron',
    subtitle: 'Willy Brandt - Symbol der Versöhnung und des Dialogs',
    intro:
      'Unsere Schule trägt mit Stolz den Namen Willy Brandts, eines herausragenden deutschen Politikers und Staatsmanns, dessen Leben und Vermächtnis die Werte verkörpern, die wir unseren Schülern vermitteln wollen: Mut, Dialog und Versöhnung zwischen den Völkern.',
    bioTitle: 'Willy Brandt (1913\u20131992)',
    bioText:
      'Geboren als Herbert Ernst Karl Frahm in Lübeck, war Willy Brandt ein deutscher Politiker, der von 1969 bis 1974 als Bundeskanzler der Bundesrepublik Deutschland diente. Zuvor war er Regierender Bürgermeister von West-Berlin während der turbulenten Zeit des Mauerbaus. Als Kanzler verfolgte er die bahnbrechende Ostpolitik - eine Politik der Annäherung an die Länder des Ostblocks, die zur Entspannung in den internationalen Beziehungen beitrug.',
    kniefallTitle: 'Kniefall von Warschau',
    kniefallText:
      'Am 7. Dezember 1970 kniete Willy Brandt vor dem Denkmal der Helden des Warschauer Ghettos nieder. Diese spontane Geste, bekannt als der Kniefall von Warschau, wurde zu einem der wichtigsten Symbole der deutsch-polnischen Versöhnung und der Anerkennung der Verantwortung für die Verbrechen des Zweiten Weltkriegs.',
    nobelTitle: 'Friedensnobelpreis',
    nobelText:
      'Im Jahr 1971 erhielt Willy Brandt den Friedensnobelpreis für seine Bemühungen um die Stärkung der Zusammenarbeit in Westeuropa und für seine Versöhnungspolitik zwischen Ost und West. Der Preis ehrte seinen außergewöhnlichen politischen Mut und sein persönliches Engagement für den Frieden.',
    legacyTitle: 'Vermächtnis für unsere Schule',
    legacyText:
      'Die Werte, die Willy Brandt vertrat - Dialog, Versöhnung, Weltoffenheit und Mut im Streben nach Frieden - bilden das Fundament der Mission unserer Schule. Wir bilden junge Menschen aus, die wie unser Schulpatron Brücken zwischen Kulturen und Völkern bauen werden.',
    timelineTitle: 'Zeitleiste',
    timeline: [
      { year: '1913', event: 'Geboren in Lübeck als Herbert Frahm' },
      { year: '1957', event: 'Wird Regierender Bürgermeister von West-Berlin' },
      { year: '1969', event: 'Wird Bundeskanzler der Bundesrepublik Deutschland' },
      { year: '1970', event: 'Kniefall von Warschau vor dem Ghetto-Ehrenmal' },
      { year: '1971', event: 'Erhält den Friedensnobelpreis' },
      { year: '1992', event: 'Stirbt in Unkel am Rhein' },
    ],
  },
  en: {
    title: 'School Patron',
    subtitle: 'Willy Brandt - a symbol of reconciliation and dialogue',
    intro:
      'Our school proudly bears the name of Willy Brandt, an outstanding German politician and statesman whose life and legacy embody the values we strive to pass on to our students: courage, dialogue, and reconciliation between nations.',
    bioTitle: 'Willy Brandt (1913\u20131992)',
    bioText:
      'Born Herbert Ernst Karl Frahm in L\u00fcbeck, Willy Brandt was a German politician who served as Chancellor of the Federal Republic of Germany from 1969 to 1974. Previously, he served as Mayor of West Berlin during the turbulent period of the Berlin Wall\'s construction. As Chancellor, he pursued the groundbreaking Ostpolitik - a policy of rapprochement with Eastern Bloc countries that contributed to the easing of international tensions.',
    kniefallTitle: 'Kniefall von Warschau',
    kniefallText:
      'On December 7, 1970, Willy Brandt knelt before the Monument to the Ghetto Heroes in Warsaw. This spontaneous gesture, known as the Kniefall von Warschau (Warsaw Genuflection), became one of the most important symbols of German-Polish reconciliation and an acknowledgment of responsibility for the crimes of World War II.',
    nobelTitle: 'Nobel Peace Prize',
    nobelText:
      'In 1971, Willy Brandt was awarded the Nobel Peace Prize for his efforts to strengthen cooperation in Western Europe and for pursuing a policy of reconciliation between East and West. The prize honored his extraordinary political courage and personal commitment to building peace.',
    legacyTitle: 'Legacy for our school',
    legacyText:
      'The values Willy Brandt represented - dialogue, reconciliation, openness to the world, and courage in the pursuit of peace - form the foundation of our school\'s mission. We educate young people who, like our school\'s patron, will build bridges between cultures and nations.',
    timelineTitle: 'Timeline',
    timeline: [
      { year: '1913', event: 'Born in L\u00fcbeck as Herbert Frahm' },
      { year: '1957', event: 'Becomes Mayor of West Berlin' },
      { year: '1969', event: 'Becomes Chancellor of the Federal Republic of Germany' },
      { year: '1970', event: 'Kniefall von Warschau - kneels before the Ghetto Heroes Monument' },
      { year: '1971', event: 'Awarded the Nobel Peace Prize' },
      { year: '1992', event: 'Passes away in Unkel am Rhein' },
    ],
  },
};

export default async function PatronPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = translations[locale as keyof typeof translations] || translations.en;

  return (
    <>
      <PageHeader lang={locale} title={t.title} description={t.subtitle} />

      {/* Introduction */}
      <section className="section bg-white">
        <div className="container-custom max-w-4xl">
          <p className="mb-12 text-center text-xl leading-relaxed text-neutral-600">{t.intro}</p>

          {/* Biography */}
          <div className="mb-16">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-lg bg-red-100">
                <Globe className="size-5 text-red-600" />
              </div>
              <h2 className="text-2xl font-bold text-neutral-900">{t.bioTitle}</h2>
            </div>
            <p className="leading-relaxed text-neutral-600">{t.bioText}</p>
          </div>

          {/* Kniefall */}
          <div className="mb-16 rounded-2xl bg-neutral-50 p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-lg bg-accent-100">
                <Globe className="size-5 text-accent-600" />
              </div>
              <h2 className="text-2xl font-bold text-neutral-900">{t.kniefallTitle}</h2>
            </div>
            <p className="leading-relaxed text-neutral-600">{t.kniefallText}</p>
          </div>

          {/* Nobel Prize */}
          <div className="mb-16">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-lg bg-amber-100">
                <Award className="size-5 text-amber-600" />
              </div>
              <h2 className="text-2xl font-bold text-neutral-900">{t.nobelTitle}</h2>
            </div>
            <p className="leading-relaxed text-neutral-600">{t.nobelText}</p>
          </div>

          {/* Legacy */}
          <div className="mb-16 rounded-2xl border-l-4 border-red-600 bg-red-50 p-8">
            <h2 className="mb-4 text-2xl font-bold text-neutral-900">{t.legacyTitle}</h2>
            <p className="leading-relaxed text-neutral-700">{t.legacyText}</p>
          </div>

          {/* Timeline */}
          <div>
            <div className="mb-8 flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-lg bg-blue-100">
                <Clock className="size-5 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-neutral-900">{t.timelineTitle}</h2>
            </div>
            <div className="space-y-6">
              {t.timeline.map((item, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-red-600 text-sm font-bold text-white">
                      {item.year}
                    </div>
                    {index < t.timeline.length - 1 && <div className="mt-2 h-full w-0.5 bg-red-200" />}
                  </div>
                  <div className="pb-6 pt-3">
                    <p className="text-lg text-neutral-700">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
