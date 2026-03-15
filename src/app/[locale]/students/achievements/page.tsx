import { Metadata } from 'next';
import PageHeader from '@/components/features/PageHeader';
import { Trophy, Medal, Star, Award, Music, Globe, BookOpen, Heart } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const titles = { pl: 'Osiągnięcia | WBS', de: 'Erfolge | WBS', en: 'Achievements | WBS' };
  return { title: titles[locale as keyof typeof titles] || titles.en };
}

const translations = {
  pl: { title: 'Nasze Osiągnięcia', subtitle: 'Sukcesy uczniów i szkoły' },
  de: { title: 'Unsere Erfolge', subtitle: 'Erfolge von Schülern und Schule' },
  en: { title: 'Our Achievements', subtitle: 'Successes of students and school' },
};

const achievements = [
  {
    year: '2026',
    icon: Heart,
    title: { pl: 'WOŚP — 18 195,57 PLN', de: 'WOŚP — 18.195,57 PLN', en: 'WOŚP — 18,195.57 PLN' },
    desc: {
      pl: 'Uczniowie zebrali ponad 18 000 PLN na zakup sprzętu medycznego w ramach Wielkiej Orkiestry Świątecznej Pomocy.',
      de: 'Die Schüler sammelten über 18.000 PLN für medizinische Geräte im Rahmen des Großen Orchesters der Weihnachtshilfe.',
      en: 'Students raised over 18,000 PLN for medical equipment as part of the Great Orchestra of Christmas Charity.',
    },
  },
  {
    year: '2025',
    icon: Music,
    title: { pl: 'Jugend musiziert — Etap regionalny', de: 'Jugend musiziert — Regionalwettbewerb', en: 'Youth Makes Music — Regional Stage' },
    desc: {
      pl: 'Uczniowie Akademii Muzycznej WBS zakwalifikowali się do etapu regionalnego prestiżowego konkursu Jugend musiziert w Genewie.',
      de: 'Schüler der WBS Musikakademie qualifizierten sich für den Regionalwettbewerb des renommierten Jugend musiziert in Genf.',
      en: 'WBS Music Academy students qualified for the regional stage of the prestigious Jugend musiziert competition in Geneva.',
    },
  },
  {
    year: '2025',
    icon: Trophy,
    title: { pl: 'Deutscher Klimapreis — Wyróżnienie', de: 'Deutscher Klimapreis — Auszeichnung', en: 'German Climate Prize — Recognition' },
    desc: {
      pl: 'Projekt ekologiczny WBS wyróżniony przez Allianz Foundation za inicjatywy klimatyczne w szkole.',
      de: 'Das WBS-Umweltprojekt wurde von der Allianz-Stiftung für schulische Klimainitiativen ausgezeichnet.',
      en: 'WBS environmental project recognised by Allianz Foundation for school climate initiatives.',
    },
  },
  {
    year: '2024',
    icon: Medal,
    title: { pl: 'Mistrzostwa w Piłce Nożnej', de: 'Fußballmeisterschaft', en: 'Football Championship' },
    desc: {
      pl: 'Drużyna Akademii Piłkarskiej WBS odniosła sukces w turniejach ligowych na poziomie warszawskim.',
      de: 'Die WBS Fußballakademie-Mannschaft war bei Ligaspielen auf Warschauer Ebene erfolgreich.',
      en: 'WBS Football Academy team achieved success in league tournaments at the Warsaw level.',
    },
  },
  {
    year: '2024',
    icon: BookOpen,
    title: { pl: 'Konkurs Literacki — Zwycięzcy', de: 'Literaturwettbewerb — Gewinner', en: 'Literature Competition — Winners' },
    desc: {
      pl: 'Uczniowie WBS zdobyli nagrody w corocznym konkursie twórczego pisania w języku polskim i niemieckim.',
      de: 'WBS-Schüler gewannen Preise beim jährlichen Wettbewerb für kreatives Schreiben in Polnisch und Deutsch.',
      en: 'WBS students won prizes in the annual creative writing competition in Polish and German.',
    },
  },
  {
    year: '2024',
    icon: Globe,
    title: { pl: 'Model United Nations', de: 'Model United Nations', en: 'Model United Nations' },
    desc: {
      pl: 'Delegacja WBS reprezentowała szkołę na międzynarodowej konferencji MUN, zdobywając wyróżnienia za dyplomację.',
      de: 'Die WBS-Delegation vertrat die Schule bei einer internationalen MUN-Konferenz und erhielt Auszeichnungen für Diplomatie.',
      en: 'WBS delegation represented the school at an international MUN conference, earning commendations for diplomacy.',
    },
  },
  {
    year: '2023',
    icon: Star,
    title: { pl: 'SCHLINGEL — Jury Filmowe', de: 'SCHLINGEL — Filmjury', en: 'SCHLINGEL — Film Jury' },
    desc: {
      pl: 'Uczniowie WBS wzięli udział jako jurorzy w międzynarodowym festiwalu filmowym SCHLINGEL dla dzieci i młodzieży.',
      de: 'WBS-Schüler nahmen als Juroren am internationalen Kinder- und Jugendfilmfestival SCHLINGEL teil.',
      en: 'WBS students participated as jury members in the international SCHLINGEL children\'s film festival.',
    },
  },
  {
    year: '2023',
    icon: Award,
    title: { pl: 'Schulbrücke Weimar', de: 'Schulbrücke Weimar', en: 'School Bridge Weimar' },
    desc: {
      pl: 'Program wymiany z Weimarem — uczniowie WBS uczestniczyli w dialogu historyczno-kulturowym z rówieśnikami z Europy.',
      de: 'Austauschprogramm mit Weimar — WBS-Schüler nahmen am historisch-kulturellen Dialog mit europäischen Mitschülern teil.',
      en: 'Exchange programme with Weimar — WBS students participated in historical-cultural dialogue with European peers.',
    },
  },
];

export default async function AchievementsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = translations[locale as keyof typeof translations] || translations.en;

  return (
    <>
      <PageHeader lang={locale} title={t.title} description={t.subtitle} />
      <section className="section bg-white">
        <div className="container-custom max-w-4xl">
          <div className="space-y-6">
            {achievements.map((a, i) => (
              <div key={i} className="flex items-start gap-6 rounded-xl bg-neutral-50 p-6 transition-colors hover:bg-red-50/50">
                <div className="flex size-16 shrink-0 items-center justify-center rounded-xl bg-red-100">
                  <a.icon className="size-8 text-red-600" />
                </div>
                <div>
                  <span className="mb-1 inline-block rounded-full bg-red-600 px-3 py-0.5 text-xs font-semibold text-white">{a.year}</span>
                  <h3 className="mb-2 text-xl font-semibold text-neutral-900">
                    {a.title[locale as keyof typeof a.title] || a.title.en}
                  </h3>
                  <p className="text-neutral-600">
                    {a.desc[locale as keyof typeof a.desc] || a.desc.en}
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
