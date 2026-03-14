import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BookOpen, Trophy, Music, Users, Lightbulb, Calendar } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale: locale, namespace: 'students' });

  return {
    title: t('meta.title'),
    description: t('meta.description'),
  };
}

export default async function StudentsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  const content = {
    pl: {
      heroTitle: 'Strefa Ucznia',
      heroDescription: 'Odkryj możliwości rozwoju poza klasą. Nasze akademie, projekty i inicjatywy czekają na Ciebie!',
      programsTitle: 'Nasze Programy',
      programsDescription: 'Rozwijaj swoje pasje i talenty w naszych akademiach i kołach zainteresowań.',
      projectsTitle: 'Projekty Uczniowskie',
      projectsDescription: 'Zobacz, co tworzą nasi uczniowie i dołącz do własnych inicjatyw.',
      lifeTitle: 'Życie Szkolne',
      lifeDescription: 'Samorząd, wydarzenia, osiągnięcia - bądź częścią naszej społeczności.',
      ctaTitle: 'Masz pomysł na projekt?',
      ctaDescription: 'Chcesz stworzyć własną inicjatywę? Nasi nauczyciele pomogą Ci ją zrealizować.',
      ctaButton: 'Skontaktuj się z opiekunem',
    },
    de: {
      heroTitle: 'Schülerbereich',
      heroDescription: 'Entdecken Sie Entwicklungsmöglichkeiten außerhalb des Klassenzimmers. Unsere Akademien, Projekte und Initiativen warten auf Sie!',
      programsTitle: 'Unsere Programme',
      programsDescription: 'Entwickeln Sie Ihre Leidenschaften und Talente in unseren Akademien und Interessengruppen.',
      projectsTitle: 'Schülerprojekte',
      projectsDescription: 'Sehen Sie, was unsere Schüler schaffen und schließen Sie sich eigenen Initiativen an.',
      lifeTitle: 'Schulleben',
      lifeDescription: 'Schülerrat, Veranstaltungen, Leistungen - seien Sie Teil unserer Gemeinschaft.',
      ctaTitle: 'Haben Sie eine Projektidee?',
      ctaDescription: 'Möchten Sie eine eigene Initiative starten? Unsere Lehrer helfen Ihnen bei der Umsetzung.',
      ctaButton: 'Kontaktieren Sie den Betreuer',
    },
    en: {
      heroTitle: 'Student Zone',
      heroDescription: 'Discover opportunities for growth beyond the classroom. Our academies, projects, and initiatives await you!',
      programsTitle: 'Our Programs',
      programsDescription: 'Develop your passions and talents in our academies and interest groups.',
      projectsTitle: 'Student Projects',
      projectsDescription: 'See what our students create and join your own initiatives.',
      lifeTitle: 'School Life',
      lifeDescription: 'Student council, events, achievements - be part of our community.',
      ctaTitle: 'Have a project idea?',
      ctaDescription: 'Want to start your own initiative? Our teachers will help you realize it.',
      ctaButton: 'Contact the supervisor',
    },
  };

  const c = content[locale as keyof typeof content] || content.pl;

  const programs = [
    {
      icon: Trophy,
      title: { pl: 'Akademia Piłkarska', de: 'Fußballakademie', en: 'Football Academy' },
      description: {
        pl: 'Treningi pod okiem profesjonalnych trenerów. Rozwijaj swoje umiejętności piłkarskie.',
        de: 'Training unter professionellen Trainern. Entwickeln Sie Ihre Fußballfähigkeiten.',
        en: 'Training under professional coaches. Develop your football skills.',
      },
      href: `/${locale}/students/football-academy`,
      color: 'bg-green-500',
    },
    {
      icon: Music,
      title: { pl: 'Akademia Muzyczna', de: 'Musikakademie', en: 'Music Academy' },
      description: {
        pl: 'Zajęcia instrumentalne, zespół szkolny, koncerty. Rozwijaj swój muzyczny talent.',
        de: 'Instrumentalunterricht, Schulband, Konzerte. Entwickeln Sie Ihr musikalisches Talent.',
        en: 'Instrumental lessons, school band, concerts. Develop your musical talent.',
      },
      href: `/${locale}/students/music-academy`,
      color: 'bg-purple-500',
    },
    {
      icon: BookOpen,
      title: { pl: 'Biblioteka', de: 'Bibliothek', en: 'Library' },
      description: {
        pl: 'Książki, materiały edukacyjne, ciche miejsce do nauki. Odkryj świat wiedzy.',
        de: 'Bücher, Lernmaterialien, ruhiger Lernort. Entdecken Sie die Welt des Wissens.',
        en: 'Books, educational materials, quiet study space. Discover the world of knowledge.',
      },
      href: `/${locale}/students/library`,
      color: 'bg-blue-500',
    },
    {
      icon: Users,
      title: { pl: 'Samorząd Uczniowski', de: 'Schülervertretung', en: 'Student Council' },
      description: {
        pl: 'Organizuj wydarzenia, reprezentuj uczniów, miej wpływ na życie szkoły.',
        de: 'Veranstaltungen organisieren, Schüler vertreten, das Schulleben mitgestalten.',
        en: 'Organize events, represent students, shape school life.',
      },
      href: `/${locale}/students/student-council`,
      color: 'bg-orange-500',
    },
  ];

  const projects = [
    {
      icon: Lightbulb,
      title: { pl: 'Projekty Naukowe', de: 'Wissenschaftliche Projekte', en: 'Science Projects' },
      count: { pl: '12 aktywnych', de: '12 aktive', en: '12 active' },
      href: `/${locale}/students/projects`,
    },
    {
      icon: Trophy,
      title: { pl: 'Osiągnięcia', de: 'Leistungen', en: 'Achievements' },
      count: { pl: '45 nagród', de: '45 Preise', en: '45 awards' },
      href: `/${locale}/students/achievements`,
    },
    {
      icon: Calendar,
      title: { pl: 'Wydarzenia', de: 'Veranstaltungen', en: 'Events' },
      count: { pl: '8 w tym miesiącu', de: '8 diesen Monat', en: '8 this month' },
      href: `/${locale}/events`,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-gradient-to-br from-secondary-600 via-secondary-700 to-secondary-800 text-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="container-custom relative z-10">
          <div className="max-w-4xl pt-32 pb-16">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              {c.heroTitle}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              {c.heroDescription}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={`/${locale}/students/projects`}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-secondary-700 font-semibold rounded-full hover:bg-neutral-100 transition-all hover:shadow-lg hover:scale-105"
              >
                <Lightbulb className="w-5 h-5" />
                {locale === 'pl' ? 'Zobacz projekty' : locale === 'de' ? 'Projekte ansehen' : 'View Projects'}
              </a>
              <a
                href={`/${locale}/students/achievements`}
                className="inline-flex items-center gap-2 px-8 py-4 bg-secondary-500 text-white font-semibold rounded-full hover:bg-secondary-400 transition-all border border-secondary-400"
              >
                <Trophy className="w-5 h-5" />
                {locale === 'pl' ? 'Nasze sukcesy' : locale === 'de' ? 'Unsere Erfolge' : 'Our Achievements'}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-secondary-50 text-secondary-700 text-sm font-medium rounded-full mb-6">
              {c.programsTitle}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              {c.programsTitle}
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              {c.programsDescription}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((program, index) => (
              <Link
                key={index}
                href={program.href}
                className="group bg-white rounded-2xl p-8 border border-neutral-200 hover:border-secondary-200 hover:shadow-xl hover:shadow-secondary-900/5 transition-all duration-300"
              >
                <div className={`w-16 h-16 ${program.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <program.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  {program.title[locale as keyof typeof program.title] || program.title.en}
                </h3>
                <p className="text-neutral-600 leading-relaxed mb-4">
                  {program.description[locale as keyof typeof program.description] || program.description.en}
                </p>
                <span className="inline-flex items-center text-secondary-600 font-semibold group-hover:translate-x-2 transition-transform">
                  {locale === 'pl' ? 'Dowiedz się więcej' : locale === 'de' ? 'Mehr erfahren' : 'Learn more'}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Projects & Activities Section */}
      <section className="py-24 bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-white text-secondary-700 text-sm font-medium rounded-full border border-secondary-100 mb-6">
              {c.projectsTitle}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              {c.projectsTitle}
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              {c.projectsDescription}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {projects.map((project, index) => (
              <Link
                key={index}
                href={project.href}
                className="group bg-white rounded-2xl p-8 border border-neutral-200 hover:border-secondary-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-secondary-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary-600 transition-colors duration-300">
                  <project.icon className="w-7 h-7 text-secondary-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                  {project.title[locale as keyof typeof project.title] || project.title.en}
                </h3>
                <p className="text-secondary-600 font-semibold">
                  {project.count[locale as keyof typeof project.count] || project.count.en}
                </p>
              </Link>
            ))}
          </div>

          {/* Featured Project Showcase */}
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-neutral-200">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-1.5 bg-secondary-50 text-secondary-700 text-sm font-medium rounded-full mb-6">
                  {locale === 'pl' ? 'Projekt miesiąca' : locale === 'de' ? 'Projekt des Monats' : 'Project of the Month'}
                </span>
                <h3 className="text-3xl font-bold text-neutral-900 mb-4">
                  {locale === 'pl'
                    ? 'Międzynarodowy Dzień Kultury'
                    : locale === 'de'
                    ? 'Internationaler Tag der Kultur'
                    : 'International Culture Day'}
                </h3>
                <p className="text-lg text-neutral-600 mb-6">
                  {locale === 'pl'
                    ? 'Coroczne wydarzenie organizowane przez uczniów, prezentujące różnorodność kulturową naszej szkoły. Stoiska, występy, warsztaty.'
                    : locale === 'de'
                    ? 'Eine jährliche von Schülern organisierte Veranstaltung, die die kulturelle Vielfalt unserer Schule präsentiert. Stände, Aufführungen, Workshops.'
                    : 'An annual student-organized event showcasing our school\'s cultural diversity. Booths, performances, workshops.'}
                </p>
                <Link
                  href={`/${locale}/students/projects`}
                  className="inline-flex items-center gap-2 text-secondary-600 font-semibold hover:text-secondary-700"
                >
                  {locale === 'pl' ? 'Zobacz wszystkie projekty' : locale === 'de' ? 'Alle Projekte ansehen' : 'View all projects'}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-neutral-400">
                    <div className="text-center">
                      <Users className="w-16 h-16 mx-auto mb-4 opacity-50" />
                      <p className="text-sm">Project photo placeholder</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary-600 rounded-2xl -z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* School Life Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-secondary-50 text-secondary-700 text-sm font-medium rounded-full mb-6">
              {c.lifeTitle}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              {c.lifeTitle}
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              {c.lifeDescription}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Student Council Card */}
            <Link
              href={`/${locale}/students/student-council`}
              className="group bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 border border-orange-200 hover:shadow-xl transition-all duration-300"
            >
              <Users className="w-12 h-12 text-orange-600 mb-6" />
              <h3 className="text-2xl font-bold text-neutral-900 mb-3">
                {locale === 'pl' ? 'Samorząd Uczniowski' : locale === 'de' ? 'Schülervertretung' : 'Student Council'}
              </h3>
              <p className="text-neutral-600 mb-4">
                {locale === 'pl'
                  ? 'Organizujemy wydarzenia, reprezentujemy uczniów, działamy!'
                  : locale === 'de'
                  ? 'Wir organisieren Veranstaltungen, vertreten die Schüler, wir handeln!'
                  : 'We organize events, represent students, we take action!'}
              </p>
              <span className="text-orange-600 font-semibold group-hover:translate-x-2 inline-block transition-transform">
                {locale === 'pl' ? 'Dołącz do nas →' : locale === 'de' ? 'Tritt uns bei →' : 'Join us →'}
              </span>
            </Link>

            {/* Events Card */}
            <Link
              href={`/${locale}/events`}
              className="group bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200 hover:shadow-xl transition-all duration-300"
            >
              <Calendar className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-2xl font-bold text-neutral-900 mb-3">
                {locale === 'pl' ? 'Wydarzenia Szkolne' : locale === 'de' ? 'Schulveranstaltungen' : 'School Events'}
              </h3>
              <p className="text-neutral-600 mb-4">
                {locale === 'pl'
                  ? 'Koncerty, przedstawienia, dni tematyczne, wycieczki.'
                  : locale === 'de'
                  ? 'Konzerte, Aufführungen, Thementage, Ausflüge.'
                  : 'Concerts, performances, theme days, trips.'}
              </p>
              <span className="text-blue-600 font-semibold group-hover:translate-x-2 inline-block transition-transform">
                {locale === 'pl' ? 'Zobacz kalendarz →' : locale === 'de' ? 'Kalender ansehen →' : 'View calendar →'}
              </span>
            </Link>

            {/* Achievements Card */}
            <Link
              href={`/${locale}/students/achievements`}
              className="group bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border border-green-200 hover:shadow-xl transition-all duration-300"
            >
              <Trophy className="w-12 h-12 text-green-600 mb-6" />
              <h3 className="text-2xl font-bold text-neutral-900 mb-3">
                {locale === 'pl' ? 'Nasze Sukcesy' : locale === 'de' ? 'Unsere Erfolge' : 'Our Achievements'}
              </h3>
              <p className="text-neutral-600 mb-4">
                {locale === 'pl'
                  ? 'Olimpiady, konkursy, zawody sportowe - jesteśmy dumni!'
                  : locale === 'de'
                  ? 'Olympiaden, Wettbewerbe, Sportwettkämpfe - wir sind stolz!'
                  : 'Olympiads, competitions, sports - we are proud!'}
              </p>
              <span className="text-green-600 font-semibold group-hover:translate-x-2 inline-block transition-transform">
                {locale === 'pl' ? 'Zobacz osiągnięcia →' : locale === 'de' ? 'Erfolge ansehen →' : 'View achievements →'}
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-secondary-600 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-secondary-500 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-700 rounded-full translate-x-1/3 translate-y-1/3" />

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {c.ctaTitle}
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              {c.ctaDescription}
            </p>
            <a
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-secondary-600 font-semibold rounded-full hover:bg-neutral-100 transition-all hover:shadow-lg hover:scale-105"
            >
              {c.ctaButton}
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
