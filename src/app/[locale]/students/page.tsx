import { getTranslations } from '@/lib/i18n';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BookOpen, Trophy, Music, Users, Lightbulb, Calendar } from 'lucide-react';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = getTranslations(locale as any, 'students');

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
      color: 'bg-neutral-900',
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
      color: 'bg-red-600',
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
      color: 'bg-red-600',
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
      color: 'bg-neutral-900',
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
      <section className="relative min-h-[60vh] overflow-hidden bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white">
        <div className="absolute right-0 top-0 size-96 -translate-y-1/2 translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 size-64 -translate-x-1/2 translate-y-1/2 rounded-full bg-white/5 blur-3xl" />

        <div className="container-custom relative z-10">
          <div className="max-w-4xl pb-16 pt-32">
            <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
              {c.heroTitle}
            </h1>
            <p className="mb-8 text-xl leading-relaxed text-white/90 md:text-2xl">
              {c.heroDescription}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={`/${locale}/students/projects`}
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-red-700 transition-all hover:scale-105 hover:bg-neutral-100 hover:shadow-lg"
              >
                <Lightbulb className="size-5" />
                {locale === 'pl' ? 'Zobacz projekty' : locale === 'de' ? 'Projekte ansehen' : 'View Projects'}
              </a>
              <a
                href={`/${locale}/students/achievements`}
                className="inline-flex items-center gap-2 rounded-full border border-red-400 bg-red-500 px-8 py-4 font-semibold text-white transition-all hover:bg-red-400"
              >
                <Trophy className="size-5" />
                {locale === 'pl' ? 'Nasze sukcesy' : locale === 'de' ? 'Unsere Erfolge' : 'Our Achievements'}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="bg-white py-24">
        <div className="container-custom">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <span className="mb-6 inline-block rounded-full bg-red-50 px-4 py-1.5 text-sm font-medium text-red-700">
                {c.programsTitle}
              </span>
              <h2 className="mb-6 text-4xl font-bold text-neutral-900 md:text-5xl">
                {c.programsTitle}
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-neutral-600">
                {c.programsDescription}
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {programs.map((program, index) => (
              <StaggerItem key={index}>
                <Link
                  href={program.href}
                  className="group block h-full rounded-2xl border border-neutral-200 bg-white p-8 transition-all duration-300 hover:border-red-200 hover:shadow-xl hover:shadow-red-900/5"
                >
                  <div className={`size-16 ${program.color} mb-6 flex items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110`}>
                    <program.icon className="size-8 text-white" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-neutral-900">
                    {program.title[locale as keyof typeof program.title] || program.title.en}
                  </h3>
                  <p className="mb-4 leading-relaxed text-neutral-600">
                    {program.description[locale as keyof typeof program.description] || program.description.en}
                  </p>
                  <span className="inline-flex items-center font-semibold text-red-600 transition-transform group-hover:translate-x-2">
                    {locale === 'pl' ? 'Dowiedz się więcej' : locale === 'de' ? 'Mehr erfahren' : 'Learn more'}
                    <ArrowRight className="ml-2 size-4" />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Projects & Activities Section */}
      <section className="bg-neutral-50 py-24">
        <div className="container-custom">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <span className="mb-6 inline-block rounded-full border border-red-100 bg-white px-4 py-1.5 text-sm font-medium text-red-700">
                {c.projectsTitle}
              </span>
              <h2 className="mb-6 text-4xl font-bold text-neutral-900 md:text-5xl">
                {c.projectsTitle}
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-neutral-600">
                {c.projectsDescription}
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="mb-16 grid gap-6 md:grid-cols-3">
            {projects.map((project, index) => (
              <StaggerItem key={index}>
                <Link
                  href={project.href}
                  className="group block h-full rounded-2xl border border-neutral-200 bg-white p-8 transition-all duration-300 hover:border-red-200 hover:shadow-xl"
                >
                  <div className="mb-6 flex size-14 items-center justify-center rounded-xl bg-red-50 transition-colors duration-300 group-hover:bg-red-600">
                    <project.icon className="size-7 text-red-600 transition-colors group-hover:text-white" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-neutral-900">
                    {project.title[locale as keyof typeof project.title] || project.title.en}
                  </h3>
                  <p className="font-semibold text-red-600">
                    {project.count[locale as keyof typeof project.count] || project.count.en}
                  </p>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Featured Project Showcase */}
          <ScrollReveal>
            <div className="rounded-3xl border border-neutral-200 bg-white p-8 md:p-12">
              <div className="grid items-center gap-12 lg:grid-cols-2">
                <div>
                  <span className="mb-6 inline-block rounded-full bg-red-50 px-4 py-1.5 text-sm font-medium text-red-700">
                    {locale === 'pl' ? 'Projekt miesiąca' : locale === 'de' ? 'Projekt des Monats' : 'Project of the Month'}
                  </span>
                  <h3 className="mb-4 text-3xl font-bold text-neutral-900">
                    {locale === 'pl'
                      ? 'Międzynarodowy Dzień Kultury'
                      : locale === 'de'
                      ? 'Internationaler Tag der Kultur'
                      : 'International Culture Day'}
                  </h3>
                  <p className="mb-6 text-lg text-neutral-600">
                    {locale === 'pl'
                      ? 'Coroczne wydarzenie organizowane przez uczniów, prezentujące różnorodność kulturową naszej szkoły. Stoiska, występy, warsztaty.'
                      : locale === 'de'
                      ? 'Eine jährliche von Schülern organisierte Veranstaltung, die die kulturelle Vielfalt unserer Schule präsentiert. Stände, Aufführungen, Workshops.'
                      : 'An annual student-organized event showcasing our school\'s cultural diversity. Booths, performances, workshops.'}
                  </p>
                  <Link
                    href={`/${locale}/students/projects`}
                    className="inline-flex items-center gap-2 font-semibold text-red-600 hover:text-red-700"
                  >
                    {locale === 'pl' ? 'Zobacz wszystkie projekty' : locale === 'de' ? 'Alle Projekte ansehen' : 'View all projects'}
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
                <div className="relative">
                  <div className="aspect-video overflow-hidden rounded-2xl bg-gradient-to-br from-red-100 to-red-200">
                    <div className="absolute inset-0 flex items-center justify-center text-neutral-400">
                      <div className="text-center">
                        <Users className="mx-auto mb-4 size-16 opacity-50" />
                        <p className="text-sm">Project photo placeholder</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 -z-10 size-32 rounded-2xl bg-red-600" />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* School Life Section */}
      <section className="bg-white py-24">
        <div className="container-custom">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <span className="mb-6 inline-block rounded-full bg-red-50 px-4 py-1.5 text-sm font-medium text-red-700">
                {c.lifeTitle}
              </span>
              <h2 className="mb-6 text-4xl font-bold text-neutral-900 md:text-5xl">
                {c.lifeTitle}
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-neutral-600">
                {c.lifeDescription}
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Student Council Card */}
            <StaggerItem>
              <Link
                href={`/${locale}/students/student-council`}
                className="group block h-full rounded-2xl border border-red-200 bg-gradient-to-br from-red-50 to-red-100 p-8 transition-all duration-300 hover:shadow-xl"
              >
                <Users className="mb-6 size-12 text-red-600" />
                <h3 className="mb-3 text-2xl font-bold text-neutral-900">
                  {locale === 'pl' ? 'Samorząd Uczniowski' : locale === 'de' ? 'Schülervertretung' : 'Student Council'}
                </h3>
                <p className="mb-4 text-neutral-600">
                  {locale === 'pl'
                    ? 'Organizujemy wydarzenia, reprezentujemy uczniów, działamy!'
                    : locale === 'de'
                    ? 'Wir organisieren Veranstaltungen, vertreten die Schüler, wir handeln!'
                    : 'We organize events, represent students, we take action!'}
                </p>
                <span className="inline-block font-semibold text-red-600 transition-transform group-hover:translate-x-2">
                  {locale === 'pl' ? 'Dołącz do nas →' : locale === 'de' ? 'Tritt uns bei →' : 'Join us →'}
                </span>
              </Link>
            </StaggerItem>

            {/* Events Card */}
            <StaggerItem>
              <Link
                href={`/${locale}/events`}
                className="group block h-full rounded-2xl border border-neutral-200 bg-gradient-to-br from-neutral-50 to-neutral-100 p-8 transition-all duration-300 hover:shadow-xl"
              >
                <Calendar className="mb-6 size-12 text-neutral-700" />
                <h3 className="mb-3 text-2xl font-bold text-neutral-900">
                  {locale === 'pl' ? 'Wydarzenia Szkolne' : locale === 'de' ? 'Schulveranstaltungen' : 'School Events'}
                </h3>
                <p className="mb-4 text-neutral-600">
                  {locale === 'pl'
                    ? 'Koncerty, przedstawienia, dni tematyczne, wycieczki.'
                    : locale === 'de'
                    ? 'Konzerte, Aufführungen, Thementage, Ausflüge.'
                    : 'Concerts, performances, theme days, trips.'}
                </p>
                <span className="inline-block font-semibold text-red-600 transition-transform group-hover:translate-x-2">
                  {locale === 'pl' ? 'Zobacz kalendarz →' : locale === 'de' ? 'Kalender ansehen →' : 'View calendar →'}
                </span>
              </Link>
            </StaggerItem>

            {/* Achievements Card */}
            <StaggerItem>
              <Link
                href={`/${locale}/students/achievements`}
                className="group block h-full rounded-2xl border border-red-200 bg-gradient-to-br from-red-50 to-red-100 p-8 transition-all duration-300 hover:shadow-xl"
              >
                <Trophy className="mb-6 size-12 text-red-600" />
                <h3 className="mb-3 text-2xl font-bold text-neutral-900">
                  {locale === 'pl' ? 'Nasze Sukcesy' : locale === 'de' ? 'Unsere Erfolge' : 'Our Achievements'}
                </h3>
                <p className="mb-4 text-neutral-600">
                  {locale === 'pl'
                    ? 'Olimpiady, konkursy, zawody sportowe - jesteśmy dumni!'
                    : locale === 'de'
                    ? 'Olympiaden, Wettbewerbe, Sportwettkämpfe - wir sind stolz!'
                    : 'Olympiads, competitions, sports - we are proud!'}
                </p>
                <span className="inline-block font-semibold text-red-600 transition-transform group-hover:translate-x-2">
                  {locale === 'pl' ? 'Zobacz osiągnięcia →' : locale === 'de' ? 'Erfolge ansehen →' : 'View achievements →'}
                </span>
              </Link>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-red-600 py-24 text-white">
        <div className="absolute left-0 top-0 size-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500" />
        <div className="absolute bottom-0 right-0 size-96 translate-x-1/3 translate-y-1/3 rounded-full bg-red-700" />

        <div className="container-custom relative z-10">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 text-4xl font-bold md:text-5xl">
                {c.ctaTitle}
              </h2>
              <p className="mb-10 text-xl leading-relaxed text-white/90">
                {c.ctaDescription}
              </p>
              <a
                href={`/${locale}/contact`}
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-red-600 transition-all hover:scale-105 hover:bg-neutral-100 hover:shadow-lg"
              >
                {c.ctaButton}
                <ArrowRight className="size-5" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
