import { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/features/PageHeader';
import { Trophy, Music, BookOpen, Users, Palette, Microscope, ArrowRight } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const titles: Record<string, string> = {
    pl: 'Zajęcia Pozalekcyjne | WBS',
    de: 'Außerschulische Aktivitäten | WBS',
    en: 'Extracurricular Activities | WBS',
  };
  const descriptions: Record<string, string> = {
    pl: 'Odkryj bogaty wybór zajęć pozalekcyjnych w Szkole Willy Brandt — sport, muzyka, sztuka, nauka i więcej.',
    de: 'Entdecken Sie das vielfältige Angebot an außerschulischen Aktivitäten der Willy-Brandt-Schule — Sport, Musik, Kunst, Wissenschaft und mehr.',
    en: 'Discover the wide range of extracurricular activities at Willy Brandt School — sports, music, art, science and more.',
  };
  return {
    title: titles[locale] || titles.en,
    description: descriptions[locale] || descriptions.en,
  };
}

const translations = {
  pl: {
    title: 'Zajęcia Pozalekcyjne',
    subtitle: 'Rozwijaj swoje pasje i talenty poza lekcjami',
    intro: 'Szkoła Willy Brandta oferuje bogaty program zajęć pozalekcyjnych, który pozwala uczniom rozwijać zainteresowania, zdobywać nowe umiejętności i budować trwałe przyjaźnie. Wybierz spośród naszych akademii, kół zainteresowań i klubów.',
    learnMore: 'Dowiedz się więcej',
  },
  de: {
    title: 'Außerschulische Aktivitäten',
    subtitle: 'Entfalten Sie Ihre Leidenschaften und Talente nach dem Unterricht',
    intro: 'Die Willy-Brandt-Schule bietet ein umfangreiches Programm an außerschulischen Aktivitäten, das den Schülern ermöglicht, ihre Interessen zu entwickeln, neue Fähigkeiten zu erwerben und dauerhafte Freundschaften zu schließen. Wählen Sie aus unseren Akademien, AGs und Clubs.',
    learnMore: 'Mehr erfahren',
  },
  en: {
    title: 'Extracurricular Activities',
    subtitle: 'Develop your passions and talents beyond the classroom',
    intro: 'Willy Brandt School offers a rich program of extracurricular activities that allows students to develop their interests, gain new skills and build lasting friendships. Choose from our academies, clubs and interest groups.',
    learnMore: 'Learn more',
  },
};

const getActivities = (locale: string) => [
  {
    icon: Trophy,
    title: { pl: 'Akademia Piłkarska', de: 'Fußballakademie', en: 'Football Academy' },
    description: {
      pl: 'Profesjonalne treningi pod okiem wykwalifikowanych trenerów. Udział w ligach i turniejach szkolnych.',
      de: 'Professionelles Training unter Anleitung qualifizierter Trainer. Teilnahme an Schulligen und Turnieren.',
      en: 'Professional training under qualified coaches. Participation in school leagues and tournaments.',
    },
    href: `/${locale}/students/football-academy`,
    color: 'bg-red-600',
    hoverBorder: 'hover:border-red-200',
  },
  {
    icon: Music,
    title: { pl: 'Akademia Muzyczna', de: 'Musikakademie', en: 'Music Academy' },
    description: {
      pl: 'Nauka gry na instrumentach, zespół szkolny, przygotowanie do koncertów i występów.',
      de: 'Instrumentalunterricht, Schulband, Vorbereitung auf Konzerte und Aufführungen.',
      en: 'Instrumental lessons, school band, preparation for concerts and performances.',
    },
    href: `/${locale}/students/music-academy`,
    color: 'bg-accent-600',
    hoverBorder: 'hover:border-accent-200',
  },
  {
    icon: Music,
    title: { pl: 'Chór Szkolny', de: 'Schulchor', en: 'School Choir' },
    description: {
      pl: 'Wspólne śpiewanie, występy na uroczystościach szkolnych i koncertach w trzech językach.',
      de: 'Gemeinsames Singen, Auftritte bei Schulveranstaltungen und Konzerte in drei Sprachen.',
      en: 'Group singing, performances at school events and concerts in three languages.',
    },
    href: `/${locale}/students/extracurricular`,
    color: 'bg-primary-600',
    hoverBorder: 'hover:border-primary-200',
  },
  {
    icon: Users,
    title: { pl: 'Klub Teatralny', de: 'Theaterclub', en: 'Drama Club' },
    description: {
      pl: 'Warsztaty aktorskie, przygotowanie sztuk teatralnych i występy na scenie szkolnej.',
      de: 'Schauspielworkshops, Vorbereitung von Theaterstücken und Auftritte auf der Schulbühne.',
      en: 'Acting workshops, preparing plays and performing on the school stage.',
    },
    href: `/${locale}/students/extracurricular`,
    color: 'bg-neutral-800',
    hoverBorder: 'hover:border-neutral-300',
  },
  {
    icon: Palette,
    title: { pl: 'Koło Plastyczne', de: 'Kunstclub', en: 'Art Club' },
    description: {
      pl: 'Malarstwo, rysunek, rzeźba i projekty artystyczne. Wystawy prac uczniowskich.',
      de: 'Malerei, Zeichnung, Bildhauerei und Kunstprojekte. Ausstellungen von Schülerarbeiten.',
      en: 'Painting, drawing, sculpture and art projects. Exhibitions of student works.',
    },
    href: `/${locale}/students/extracurricular`,
    color: 'bg-accent-600',
    hoverBorder: 'hover:border-accent-200',
  },
  {
    icon: Microscope,
    title: { pl: 'Koło Naukowe', de: 'Wissenschaftsclub', en: 'Science Club' },
    description: {
      pl: 'Eksperymenty, projekty badawcze i udział w olimpiadach naukowych i konkursach.',
      de: 'Experimente, Forschungsprojekte und Teilnahme an Wissenschaftsolympiaden und Wettbewerben.',
      en: 'Experiments, research projects and participation in science olympiads and competitions.',
    },
    href: `/${locale}/students/extracurricular`,
    color: 'bg-primary-700',
    hoverBorder: 'hover:border-primary-200',
  },
];

export default async function ExtracurricularPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = translations[locale as keyof typeof translations] || translations.en;
  const activities = getActivities(locale);

  return (
    <>
      <PageHeader lang={locale} title={t.title} description={t.subtitle} />

      <section className="section bg-white">
        <div className="container-custom max-w-6xl">
          {/* Intro */}
          <div className="mb-16 max-w-3xl">
            <p className="text-xl leading-relaxed text-neutral-600">{t.intro}</p>
          </div>

          {/* Activities Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {activities.map((activity, index) => {
              const title = activity.title[locale as keyof typeof activity.title] || activity.title.en;
              const description = activity.description[locale as keyof typeof activity.description] || activity.description.en;
              const Icon = activity.icon;

              return (
                <Link
                  key={index}
                  href={activity.href}
                  className={`group block rounded-2xl border border-neutral-200 bg-white p-8 transition-all duration-300 ${activity.hoverBorder} hover:shadow-xl hover:shadow-neutral-900/5`}
                >
                  <div className={`mb-6 flex size-14 items-center justify-center rounded-xl ${activity.color} transition-transform duration-300 group-hover:scale-110`}>
                    <Icon className="size-7 text-white" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-neutral-900">{title}</h3>
                  <p className="mb-6 leading-relaxed text-neutral-600">{description}</p>
                  <span className="inline-flex items-center gap-2 font-semibold text-red-600 transition-transform group-hover:translate-x-1">
                    {t.learnMore}
                    <ArrowRight className="size-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
