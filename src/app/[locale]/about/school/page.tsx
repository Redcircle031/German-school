import { Metadata } from 'next';
import Image from 'next/image';
import PageHeader from '@/components/features/PageHeader';
import { Users, GraduationCap, Globe, Calendar, Building } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const titles = { pl: 'O szkole | WBS', de: 'Über die Schule | WBS', en: 'About the School | WBS' };
  return { title: titles[locale as keyof typeof titles] || titles.en };
}

const translations = {
  pl: {
    title: 'O Szkole',
    subtitle: 'Polsko-Niemiecka Szkoła Spotkań i Dialogu im. Willy\'ego Brandta',
    intro: 'Szkoła WBS, założona w 1978 roku, jest jedyną polsko-niemiecką szkołą spotkań i dialogu w Warszawie. Łączymy polskie i niemieckie programy nauczania, przygotowując uczniów do zdawania zarówno polskiej matury, jak i niemieckiego Abitur. Nasz kampus na ulicy Św. Urszuli Ledóchowskiej 3 w Wilanowie jest domem dla ponad 400 uczniów z 15+ krajów.',
    stats: [
      { value: '400+', label: 'Uczniów', icon: 'users' },
      { value: '60+', label: 'Nauczycieli', icon: 'graduation' },
      { value: '15+', label: 'Narodowości', icon: 'globe' },
      { value: '47', label: 'Lat tradycji', icon: 'calendar' },
    ],
    sectionsTitle: 'Poziomy edukacji',
    sections: [
      { name: 'Przedszkole (Kindergarten)', desc: '80 dzieci w grupach polsko- i niemieckojęzycznych, opieka od 3. roku życia.' },
      { name: 'Szkoła Podstawowa (Klasy 1–8)', desc: 'Dwujęzyczne nauczanie z pionu polsko- i niemieckojęzycznego.' },
      { name: 'Liceum (Klasy 9–12)', desc: 'Przygotowanie do polskiej matury i niemieckiego Abitur. Klasy DSD (Deutsches Sprachdiplom).' },
    ],
    campusTitle: 'Nasz kampus',
    campusDesc: 'Kampus WBS w Wilanowie obejmuje nowoczesne budynki szkolne, aule, boiska sportowe, bibliotekę i stołówkę. Szkoła stale inwestuje w rozwój infrastruktury edukacyjnej.',
  },
  de: {
    title: 'Über die Schule',
    subtitle: 'Deutsch-Polnische Begegnungsschule Willy-Brandt-Schule Warschau',
    intro: 'Die WBS, gegründet 1978, ist die einzige deutsch-polnische Begegnungsschule in Warschau. Wir verbinden polnische und deutsche Lehrpläne und bereiten Schüler sowohl auf die polnische Matura als auch auf das deutsche Abitur vor. Unser Campus an der ul. Św. Urszuli Ledóchowskiej 3 in Wilanów ist Heimat für über 400 Schüler aus 15+ Ländern.',
    stats: [
      { value: '400+', label: 'Schüler', icon: 'users' },
      { value: '60+', label: 'Lehrkräfte', icon: 'graduation' },
      { value: '15+', label: 'Nationalitäten', icon: 'globe' },
      { value: '47', label: 'Jahre Tradition', icon: 'calendar' },
    ],
    sectionsTitle: 'Bildungsstufen',
    sections: [
      { name: 'Kindergarten', desc: '80 Kinder in polnisch- und deutschsprachigen Gruppen, Betreuung ab 3 Jahren.' },
      { name: 'Grundschule (Klassen 1–8)', desc: 'Zweisprachiger Unterricht im polnisch- und deutschsprachigen Zweig.' },
      { name: 'Gymnasium (Klassen 9–12)', desc: 'Vorbereitung auf die polnische Matura und das deutsche Abitur. DSD-Klassen (Deutsches Sprachdiplom).' },
    ],
    campusTitle: 'Unser Campus',
    campusDesc: 'Der WBS-Campus in Wilanów umfasst moderne Schulgebäude, Aula, Sportplätze, Bibliothek und Kantine. Die Schule investiert kontinuierlich in die Entwicklung der Bildungsinfrastruktur.',
  },
  en: {
    title: 'About the School',
    subtitle: 'Polish-German School of Meetings and Dialogue named after Willy Brandt',
    intro: 'WBS, founded in 1978, is the only Polish-German school of meetings and dialogue in Warsaw. We combine Polish and German curricula, preparing students for both the Polish Matura and the German Abitur. Our campus at ul. Św. Urszuli Ledóchowskiej 3 in Wilanów is home to over 400 students from 15+ countries.',
    stats: [
      { value: '400+', label: 'Students', icon: 'users' },
      { value: '60+', label: 'Teachers', icon: 'graduation' },
      { value: '15+', label: 'Nationalities', icon: 'globe' },
      { value: '47', label: 'Years of tradition', icon: 'calendar' },
    ],
    sectionsTitle: 'Education Levels',
    sections: [
      { name: 'Kindergarten', desc: '80 children in Polish- and German-speaking groups, care from age 3.' },
      { name: 'Primary School (Grades 1–8)', desc: 'Bilingual teaching in Polish- and German-language tracks.' },
      { name: 'Secondary School (Grades 9–12)', desc: 'Preparation for the Polish Matura and German Abitur. DSD classes (Deutsches Sprachdiplom).' },
    ],
    campusTitle: 'Our Campus',
    campusDesc: 'The WBS campus in Wilanów includes modern school buildings, assembly halls, sports fields, a library, and a canteen. The school continuously invests in educational infrastructure development.',
  },
};

const iconMap: Record<string, typeof Users> = { users: Users, graduation: GraduationCap, globe: Globe, calendar: Calendar };

const campusImages = [
  '/images/campus/campus-01.jpg', '/images/campus/campus-02.jpg', '/images/campus/campus-03.jpg',
  '/images/campus/campus-04.jpg', '/images/campus/campus-05.jpg', '/images/campus/campus-06.jpg',
];

export default async function SchoolPage({ params }: { params: Promise<{ locale: string }> }) {
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

          <div className="mb-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {t.stats.map((stat, i) => {
              const Icon = iconMap[stat.icon] || Users;
              return (
                <div key={i} className="rounded-xl bg-red-600 p-6 text-center text-white">
                  <Icon className="mx-auto mb-3 size-8 text-red-200" />
                  <p className="text-3xl font-bold">{stat.value}</p>
                  <p className="text-red-100">{stat.label}</p>
                </div>
              );
            })}
          </div>

          <h2 className="mb-8 text-2xl font-bold text-neutral-900">{t.sectionsTitle}</h2>
          <div className="mb-16 grid gap-6 md:grid-cols-3">
            {t.sections.map((s, i) => (
              <div key={i} className="rounded-xl border border-neutral-200 bg-neutral-50 p-6">
                <Building className="mb-4 size-8 text-red-600" />
                <h3 className="mb-2 text-lg font-semibold text-neutral-900">{s.name}</h3>
                <p className="text-neutral-600">{s.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="mb-4 text-2xl font-bold text-neutral-900">{t.campusTitle}</h2>
          <p className="mb-8 max-w-2xl text-neutral-600">{t.campusDesc}</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {campusImages.map((src, i) => (
              <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image src={src} alt={`Campus ${i + 1}`} fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
