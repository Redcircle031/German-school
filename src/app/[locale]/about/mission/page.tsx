import { Metadata } from 'next';
import Image from 'next/image';
import PageHeader from '@/components/features/PageHeader';
import { Target, Heart, Star, Users } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const titles: Record<string, string> = {
    pl: 'Misja i Wartości | WBS',
    de: 'Mission und Werte | WBS',
    en: 'Mission & Values | WBS',
  };
  const descriptions: Record<string, string> = {
    pl: 'Misja i wartości Polsko-Niemieckiej Szkoły Spotkań i Dialogu im. Willy\'ego Brandta - edukacja dwujęzyczna, obywatelstwo europejskie, doskonałość akademicka.',
    de: 'Mission und Werte der Deutsch-Polnischen Begegnungsschule Willy Brandt - zweisprachige Bildung, europäische Bürgerschaft, akademische Exzellenz.',
    en: 'Mission and values of the Polish-German School of Meetings and Dialogue - bilingual education, European citizenship, academic excellence.',
  };
  return {
    title: titles[locale] || titles.en,
    description: descriptions[locale] || descriptions.en,
  };
}

const translations = {
  pl: {
    title: 'Misja i Wartości',
    subtitle: 'Kształtujemy przyszłość poprzez edukację, dialog i zrozumienie',
    intro:
      'Polsko-Niemiecka Szkoła Spotkań i Dialogu im. Willy\'ego Brandta to miejsce, w którym dwie kultury spotykają się, aby wspólnie budować lepszą przyszłość. Nasza misja wyraża się w codziennej pracy z uczniami, nauczycielami i rodzicami.',
    missionTitle: 'Nasza Misja',
    missionText:
      'Kształcimy młodych ludzi w duchu dialogu, tolerancji i wzajemnego szacunku. Jako szkoła dwujęzyczna budujemy most między kulturą polską i niemiecką, przygotowując naszych uczniów do aktywnego i odpowiedzialnego udziału w zjednoczonej Europie. Wierzymy, że edukacja jest kluczem do porozumienia między narodami.',
    valuesTitle: 'Nasze Wartości',
    values: [
      {
        icon: 'target',
        name: 'Edukacja dwujęzyczna',
        description:
          'Oferujemy nauczanie w języku polskim i niemieckim na najwyższym poziomie. Nasi uczniowie zdobywają kompetencje językowe, które otwierają im drzwi do międzynarodowej kariery i dalszego kształcenia na uczelniach w Polsce, Niemczech i na całym świecie.',
      },
      {
        icon: 'heart',
        name: 'Różnorodność kulturowa',
        description:
          'Celebrujemy różnorodność i uczymy wzajemnego szacunku między kulturami. Nasi uczniowie poznają tradycje polskie i niemieckie, ucząc się doceniać to, co łączy, i szanować to, co różni. Dialog międzykulturowy jest sercem naszej szkoły.',
      },
      {
        icon: 'star',
        name: 'Doskonałość akademicka',
        description:
          'Stawiamy na najwyższą jakość nauczania, wykorzystując nowoczesne metody pedagogiczne i innowacyjne podejście do edukacji. Nasi wysoko wykwalifikowani nauczyciele inspirują uczniów do ciągłego rozwoju i dążenia do doskonałości.',
      },
      {
        icon: 'users',
        name: 'Wspólnota szkolna',
        description:
          'Tworzymy ciepłą, rodzinną atmosferę, w której każdy uczeń czuje się bezpiecznie i jest szanowany. Współpraca między uczniami, nauczycielami i rodzicami stanowi fundament naszej społeczności szkolnej.',
      },
    ],
    citizenshipTitle: 'Obywatelstwo europejskie',
    citizenshipText:
      'Jako szkoła nosząca imię Willy\'ego Brandta, wizjonera zjednoczonej Europy, kładziemy szczególny nacisk na wychowanie w duchu europejskim. Nasi uczniowie uczą się funkcjonować w wielokulturowym środowisku, rozumieć procesy demokratyczne i aktywnie angażować się w życie społeczne - zarówno na poziomie lokalnym, jak i europejskim.',
    commitmentTitle: 'Nasze zobowiązania',
    commitments: [
      'Zapewnienie najwyższej jakości edukacji dwujęzycznej',
      'Wspieranie rozwoju osobistego każdego ucznia',
      'Budowanie mostów między kulturą polską i niemiecką',
      'Przygotowanie uczniów do życia w zjednoczonej Europie',
      'Promowanie wartości dialogu, tolerancji i pokoju',
      'Współpraca z rodzicami i społecznością lokalną',
    ],
  },
  de: {
    title: 'Mission und Werte',
    subtitle: 'Wir gestalten die Zukunft durch Bildung, Dialog und Verständigung',
    intro:
      'Die Deutsch-Polnische Begegnungsschule Willy Brandt ist ein Ort, an dem zwei Kulturen zusammenkommen, um gemeinsam eine bessere Zukunft zu bauen. Unsere Mission drückt sich in der täglichen Arbeit mit Schülern, Lehrern und Eltern aus.',
    missionTitle: 'Unsere Mission',
    missionText:
      'Wir bilden junge Menschen im Geiste des Dialogs, der Toleranz und des gegenseitigen Respekts aus. Als zweisprachige Schule bauen wir eine Brücke zwischen der polnischen und der deutschen Kultur und bereiten unsere Schüler auf eine aktive und verantwortungsvolle Teilnahme am vereinten Europa vor. Wir glauben, dass Bildung der Schlüssel zur Verständigung zwischen den Völkern ist.',
    valuesTitle: 'Unsere Werte',
    values: [
      {
        icon: 'target',
        name: 'Zweisprachige Bildung',
        description:
          'Wir bieten Unterricht auf Polnisch und Deutsch auf höchstem Niveau. Unsere Schüler erwerben Sprachkompetenzen, die ihnen Türen zu einer internationalen Karriere und weiterführenden Studien an Universitäten in Polen, Deutschland und weltweit öffnen.',
      },
      {
        icon: 'heart',
        name: 'Kulturelle Vielfalt',
        description:
          'Wir feiern die Vielfalt und lehren gegenseitigen Respekt zwischen den Kulturen. Unsere Schüler lernen polnische und deutsche Traditionen kennen und schätzen, was verbindet, und respektieren, was unterscheidet. Interkultureller Dialog ist das Herzstück unserer Schule.',
      },
      {
        icon: 'star',
        name: 'Akademische Exzellenz',
        description:
          'Wir setzen auf höchste Unterrichtsqualität mit modernen pädagogischen Methoden und innovativen Bildungsansätzen. Unsere hochqualifizierten Lehrkräfte inspirieren die Schüler zu kontinuierlicher Entwicklung und Streben nach Exzellenz.',
      },
      {
        icon: 'users',
        name: 'Schulgemeinschaft',
        description:
          'Wir schaffen eine warme, familiäre Atmosphäre, in der sich jeder Schüler sicher und respektiert fühlt. Die Zusammenarbeit zwischen Schülern, Lehrern und Eltern bildet das Fundament unserer Schulgemeinschaft.',
      },
    ],
    citizenshipTitle: 'Europäische Bürgerschaft',
    citizenshipText:
      'Als Schule, die den Namen Willy Brandts trägt, eines Visionärs des vereinten Europas, legen wir besonderen Wert auf die Erziehung im europäischen Geist. Unsere Schüler lernen, in einem multikulturellen Umfeld zu leben, demokratische Prozesse zu verstehen und sich aktiv am gesellschaftlichen Leben zu beteiligen - sowohl auf lokaler als auch auf europäischer Ebene.',
    commitmentTitle: 'Unsere Verpflichtungen',
    commitments: [
      'Höchste Qualität der zweisprachigen Bildung gewährleisten',
      'Die persönliche Entwicklung jedes Schülers unterstützen',
      'Brücken zwischen polnischer und deutscher Kultur bauen',
      'Schüler auf das Leben im vereinten Europa vorbereiten',
      'Werte des Dialogs, der Toleranz und des Friedens fördern',
      'Zusammenarbeit mit Eltern und der lokalen Gemeinschaft',
    ],
  },
  en: {
    title: 'Mission & Values',
    subtitle: 'Shaping the future through education, dialogue, and understanding',
    intro:
      'The Polish-German School of Meetings and Dialogue named after Willy Brandt is a place where two cultures come together to build a better future. Our mission is expressed in our daily work with students, teachers, and parents.',
    missionTitle: 'Our Mission',
    missionText:
      'We educate young people in the spirit of dialogue, tolerance, and mutual respect. As a bilingual school, we build a bridge between Polish and German culture, preparing our students for active and responsible participation in a united Europe. We believe that education is the key to understanding between nations.',
    valuesTitle: 'Our Values',
    values: [
      {
        icon: 'target',
        name: 'Bilingual education',
        description:
          'We offer instruction in Polish and German at the highest level. Our students acquire language competencies that open doors to international careers and further studies at universities in Poland, Germany, and around the world.',
      },
      {
        icon: 'heart',
        name: 'Cultural diversity',
        description:
          'We celebrate diversity and teach mutual respect between cultures. Our students learn about Polish and German traditions, learning to appreciate what unites and respect what differentiates. Intercultural dialogue is at the heart of our school.',
      },
      {
        icon: 'star',
        name: 'Academic excellence',
        description:
          'We strive for the highest quality of teaching, using modern pedagogical methods and innovative approaches to education. Our highly qualified teachers inspire students to continuously develop and strive for excellence.',
      },
      {
        icon: 'users',
        name: 'School community',
        description:
          'We create a warm, family-like atmosphere where every student feels safe and respected. Cooperation between students, teachers, and parents forms the foundation of our school community.',
      },
    ],
    citizenshipTitle: 'European citizenship',
    citizenshipText:
      'As a school bearing the name of Willy Brandt, a visionary of a united Europe, we place special emphasis on education in the European spirit. Our students learn to function in a multicultural environment, understand democratic processes, and actively engage in social life - both at the local and European level.',
    commitmentTitle: 'Our commitments',
    commitments: [
      'Ensuring the highest quality of bilingual education',
      'Supporting the personal development of every student',
      'Building bridges between Polish and German culture',
      'Preparing students for life in a united Europe',
      'Promoting the values of dialogue, tolerance, and peace',
      'Collaborating with parents and the local community',
    ],
  },
};

const iconMap = {
  target: Target,
  heart: Heart,
  star: Star,
  users: Users,
};

export default async function MissionPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = translations[locale as keyof typeof translations] || translations.en;

  return (
    <>
      <PageHeader lang={locale} title={t.title} description={t.subtitle} />

      {/* Introduction & Mission */}
      <section className="section bg-white">
        <div className="container-custom max-w-4xl">
          <p className="mb-12 text-center text-xl leading-relaxed text-neutral-600">{t.intro}</p>

          {/* Mission Image */}
          <div className="mb-16 overflow-hidden rounded-2xl">
            <Image
              src="/images/about/mission-leitbild.jpg"
              alt={t.missionTitle}
              width={900}
              height={400}
              className="w-full object-cover"
              sizes="(max-width: 768px) 100vw, 900px"
            />
          </div>

          {/* Mission Statement */}
          <div className="mb-16 rounded-2xl border-l-4 border-red-600 bg-red-50 p-8">
            <h2 className="mb-4 text-2xl font-bold text-neutral-900">{t.missionTitle}</h2>
            <p className="text-lg leading-relaxed text-neutral-700">{t.missionText}</p>
          </div>

          {/* Core Values */}
          <div className="mb-16">
            <h2 className="mb-8 text-center text-3xl font-bold text-neutral-900">{t.valuesTitle}</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {t.values.map((value, index) => {
                const IconComponent = iconMap[value.icon as keyof typeof iconMap] || Target;
                const colors = [
                  { bg: 'bg-red-100', text: 'text-red-600', border: 'border-red-200' },
                  { bg: 'bg-pink-100', text: 'text-pink-600', border: 'border-pink-200' },
                  { bg: 'bg-amber-100', text: 'text-amber-600', border: 'border-amber-200' },
                  { bg: 'bg-blue-100', text: 'text-blue-600', border: 'border-blue-200' },
                ];
                const color = colors[index % colors.length];

                return (
                  <div
                    key={index}
                    className={`rounded-2xl border ${color.border} bg-white p-8 transition-all duration-300 hover:shadow-lg`}
                  >
                    <div className={`mb-4 flex size-12 items-center justify-center rounded-xl ${color.bg}`}>
                      <IconComponent className={`size-6 ${color.text}`} />
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-neutral-900">{value.name}</h3>
                    <p className="leading-relaxed text-neutral-600">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* European Citizenship */}
          <div className="mb-16 rounded-2xl bg-neutral-50 p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-lg bg-blue-100">
                <Target className="size-5 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-neutral-900">{t.citizenshipTitle}</h2>
            </div>
            <p className="text-lg leading-relaxed text-neutral-600">{t.citizenshipText}</p>
          </div>

          {/* Commitments */}
          <div className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-neutral-100">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-lg bg-green-100">
                <Heart className="size-5 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-neutral-900">{t.commitmentTitle}</h2>
            </div>
            <ul className="space-y-3">
              {t.commitments.map((item, index) => (
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
