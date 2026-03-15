import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import schoolInfo from '@/data/extracted/school-info.json';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale: locale, namespace: 'about' });

  return {
    title: t('meta.title'),
    description: t('meta.description'),
  };
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  const stats = [
    { value: '1978', label: locale === 'pl' ? 'Rok założenia' : locale === 'de' ? 'Gründungsjahr' : 'Founded' },
    { value: '300+', label: locale === 'pl' ? 'Uczniów' : locale === 'de' ? 'Schüler' : 'Students' },
    { value: '59', label: locale === 'pl' ? 'Nauczycieli' : locale === 'de' ? 'Lehrer' : 'Teachers' },
    { value: '45+', label: locale === 'pl' ? 'Lat doświadczenia' : locale === 'de' ? 'Jahre Erfahrung' : 'Years of Experience' },
  ];

  const values = [
    {
      icon: '🌍',
      title: locale === 'pl' ? 'Dwujęzyczność' : locale === 'de' ? 'Zweisprachigkeit' : 'Bilingualism',
      description: locale === 'pl'
        ? 'Edukacja w języku polskim i niemieckim, otwierająca drzwi do międzynarodowej kariery.'
        : locale === 'de'
        ? 'Bildung auf Polnisch und Deutsch, die Türen zu einer internationalen Karriere öffnet.'
        : 'Education in Polish and German, opening doors to an international career.',
    },
    {
      icon: '🤝',
      title: locale === 'pl' ? 'Dialog i Spotkania' : locale === 'de' ? 'Dialog und Begegnung' : 'Dialogue and Encounter',
      description: locale === 'pl'
        ? 'Budowanie mostów między kulturami i pokoleniami w duchu idei Willy\'ego Brandta.'
        : locale === 'de'
        ? 'Brücken zwischen Kulturen und Generationen im Geiste von Willy Brandt bauen.'
        : 'Building bridges between cultures and generations in the spirit of Willy Brandt.',
    },
    {
      icon: '🎯',
      title: locale === 'pl' ? 'Jakość Nauczania' : locale === 'de' ? 'Qualität der Lehre' : 'Quality Teaching',
      description: locale === 'pl'
        ? 'Wysoko wykwalifikowana kadra i nowoczesne metody nauczania.'
        : locale === 'de'
        ? 'Hochqualifiziertes Personal und moderne Lehrmethoden.'
        : 'Highly qualified staff and modern teaching methods.',
    },
    {
      icon: '❤️',
      title: locale === 'pl' ? 'Wspólnota' : locale === 'de' ? 'Gemeinschaft' : 'Community',
      description: locale === 'pl'
        ? 'Rodzinna atmosfera i wzajemne wsparcie w rozwoju każdego ucznia.'
        : locale === 'de'
        ? 'Familiäre Atmosphäre und gegenseitige Unterstützung bei der Entwicklung jedes Schülers.'
        : 'Family atmosphere and mutual support in the development of every student.',
    },
  ];

  return (
    <>
      {/* Hero - Full bleed with editorial typography */}
      <section className="relative min-h-[70vh] overflow-hidden bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white">
        <div className="absolute right-0 top-0 size-96 -translate-y-1/2 translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 size-64 -translate-x-1/2 translate-y-1/2 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.04]">
          <svg width="100%" height="100%">
            <pattern id="about-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#about-grid)" />
          </svg>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl pb-20 pt-32">
            <ScrollReveal>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-red-200">
                {locale === 'pl' ? 'O Nas' : locale === 'de' ? 'Über Uns' : 'About Us'}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="mb-6 text-5xl font-extrabold leading-[0.95] tracking-tight md:text-6xl lg:text-7xl">
                {locale === 'pl' ? 'Polsko-Niemiecka Szkoła Spotkań i Dialogu' : locale === 'de' ? 'Deutsch-Polnische Begegnungsschule' : 'Polish-German School of Meetings and Dialogue'}
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="max-w-2xl text-xl leading-relaxed text-white/80 md:text-2xl">
                {locale === 'pl' ? 'im. Willy\'ego Brandta w Warszawie — od 1978 roku łączymy kultury i kształtujemy przyszłość.'
                  : locale === 'de' ? 'Willy-Brandt-Schule Warschau — seit 1978 verbinden wir Kulturen und gestalten die Zukunft.'
                  : 'Willy Brandt School Warsaw — connecting cultures and shaping the future since 1978.'}
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="bg-neutral-900 py-16 text-white">
        <div className="container-custom">
          <StaggerContainer className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
            {stats.map((stat, index) => (
              <StaggerItem key={index} className="text-center">
                <p className="text-4xl font-extrabold tracking-tight text-accent-400 md:text-5xl lg:text-6xl">{stat.value}</p>
                <p className="mt-2 text-sm font-medium uppercase tracking-widest text-neutral-400 md:text-base">{stat.label}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-white py-24">
        <div className="container-custom">
          <div className="grid items-center gap-16 md:grid-cols-2">
            <ScrollReveal>
              <div>
                <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent-500">
                  {locale === 'pl' ? 'Nasza Misja' : locale === 'de' ? 'Unsere Mission' : 'Our Mission'}
                </p>
                <h2 className="mb-6 text-3xl font-medium leading-tight text-neutral-900 md:text-4xl">
                  {locale === 'pl' ? 'Gdzie dwie kultury budują jedną przyszłość' : locale === 'de' ? 'Wo zwei Kulturen eine Zukunft gestalten' : 'Where two cultures build one future'}
                </h2>
                <p className="mb-8 text-lg leading-relaxed text-neutral-600">
                  {locale === 'pl'
                    ? 'Polsko-Niemiecka Szkoła Spotkań i Dialogu im. Willy\'ego Brandta to wyjątkowa placówka edukacyjna, która od ponad 45 lat łączy polską i niemiecką tradycję pedagogiczną. Naszym celem jest kształcenie młodych ludzi otwartych na świat, szanujących różnorodność kulturową i gotowych do życia w zglobalizowanej rzeczywistości.'
                    : locale === 'de'
                    ? 'Die Deutsch-Polnische Begegnungsschule Willy-Brandt-Schule ist eine einzigartige Bildungseinrichtung, die seit über 45 Jahren polnische und deutsche pädagogische Traditionen verbindet. Unser Ziel ist es, junge Menschen auszubilden, die weltoffen sind, kulturelle Vielfalt respektieren und bereit sind, in einer globalisierten Realität zu leben.'
                    : 'The Polish-German School of Meetings and Dialogue named after Willy Brandt is a unique educational institution that has been connecting Polish and German pedagogical traditions for over 45 years. Our goal is to educate young people who are open to the world, respect cultural diversity, and are ready to live in a globalized reality.'}
                </p>
                <div className="flex items-center gap-4 rounded-2xl bg-accent-50 p-4">
                  <div className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-accent-400">
                    <span className="text-2xl">🏫</span>
                  </div>
                  <div>
                    <p className="font-bold text-neutral-900">Deutsche Auslandsschule</p>
                    <p className="text-sm text-neutral-500">
                      {locale === 'pl' ? 'Akredytowana szkoła niemiecka za granicą' : locale === 'de' ? 'Akkreditierte deutsche Schule im Ausland' : 'Accredited German School Abroad'}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2} direction="left">
              <div className="relative">
                <div className="aspect-square flex items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-accent-50 to-neutral-100">
                  <div className="p-8 text-center">
                    <div className="mx-auto mb-6 flex size-32 items-center justify-center rounded-3xl bg-red-600">
                      <span className="text-4xl font-extrabold text-white">WBS</span>
                    </div>
                    <p className="text-sm text-neutral-400">School Building</p>
                  </div>
                </div>
                <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-neutral-100 bg-white p-6 shadow-xl md:block">
                  <p className="text-4xl font-extrabold text-red-600">45+</p>
                  <p className="text-sm font-medium text-neutral-600">
                    {locale === 'pl' ? 'Lat tradycji' : locale === 'de' ? 'Jahre Tradition' : 'Years of Tradition'}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-neutral-50 py-24">
        <div className="container-custom">
          <ScrollReveal className="mb-16 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent-500">
              {locale === 'pl' ? 'Nasze Wartości' : locale === 'de' ? 'Unsere Werte' : 'Our Values'}
            </p>
            <h2 className="text-3xl font-medium text-neutral-900 md:text-4xl">
              {locale === 'pl' ? 'Wartości, które kształtują naszą społeczność' : locale === 'de' ? 'Werte, die unsere Gemeinschaft formen' : 'Values that shape our community'}
            </h2>
          </ScrollReveal>
          <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <StaggerItem key={index}>
                <div className="h-full rounded-2xl border border-neutral-200 bg-white p-8 transition-all duration-300 hover:border-accent-200 hover:shadow-xl">
                  <div className="mb-5 text-4xl">{value.icon}</div>
                  <h3 className="mb-3 text-xl font-bold text-neutral-900">{value.title}</h3>
                  <p className="leading-relaxed text-neutral-600">{value.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Patron Section */}
      <section className="bg-white py-24">
        <div className="container-custom">
          <ScrollReveal>
            <div className="rounded-3xl bg-neutral-50 p-8 md:p-12">
              <div className="grid items-center gap-12 md:grid-cols-3">
                <div className="md:col-span-1">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-neutral-200">
                    <div className="absolute inset-0 flex items-center justify-center text-neutral-400">
                      <div className="text-center">
                        <span className="mb-4 block text-6xl">👤</span>
                        <span className="text-sm">Willy Brandt</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent-500">
                    {locale === 'pl' ? 'Patron Szkoły' : locale === 'de' ? 'Schulpatron' : 'School Patron'}
                  </p>
                  <h2 className="mb-2 text-3xl font-medium text-neutral-900 md:text-4xl">Willy Brandt</h2>
                  <p className="mb-6 text-lg text-neutral-500">
                    {locale === 'pl' ? 'Były kanclerz Niemiec, laureat Pokojowej Nagrody Nobla'
                      : locale === 'de' ? 'Ehemaliger deutscher Bundeskanzler, Friedensnobelpreisträger'
                      : 'Former German Chancellor, Nobel Peace Prize laureate'}
                  </p>
                  <p className="mb-6 leading-relaxed text-neutral-600">
                    {locale === 'pl'
                      ? 'Willy Brandt (1913-1992) był wybitnym niemieckim politykiem, burmistrzem Berlina Zachodniego i kanclerzem RFN. W 1971 roku otrzymał Pokojową Nagrodę Nobla za swoją politykę wschodnią (Ostpolitik), która przyczyniła się do odprężenia między Niemcami a krajami bloku wschodniego.'
                      : locale === 'de'
                      ? 'Willy Brandt (1913-1992) war ein herausragender deutscher Politiker, Bürgermeister von West-Berlin und Bundeskanzler der BRD. Im Jahr 1971 erhielt er den Friedensnobelpreis für seine Ostpolitik, die zur Entspannung zwischen Deutschland und den Ländern des Ostblocks beitrug.'
                      : 'Willy Brandt (1913-1992) was an outstanding German politician, mayor of West Berlin, and Chancellor of the Federal Republic of Germany. In 1971, he received the Nobel Peace Prize for his Ostpolitik.'}
                  </p>
                  <Link
                    href={`/${locale}/about/patron`}
                    className="inline-flex items-center gap-2 font-semibold text-red-600 transition-colors hover:text-red-700"
                  >
                    {locale === 'pl' ? 'Dowiedz się więcej' : locale === 'de' ? 'Mehr erfahren' : 'Learn more'}
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Campuses Section */}
      <section className="bg-neutral-50 py-24">
        <div className="container-custom">
          <ScrollReveal className="mb-16 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent-500">
              {locale === 'pl' ? 'Nasze Kampusy' : locale === 'de' ? 'Unsere Campus' : 'Our Campuses'}
            </p>
            <h2 className="text-3xl font-medium text-neutral-900 md:text-4xl">
              {locale === 'pl' ? 'Odwiedź nas w Warszawie' : locale === 'de' ? 'Besuchen Sie uns in Warschau' : 'Visit us in Warsaw'}
            </h2>
          </ScrollReveal>
          <StaggerContainer className="grid gap-8 md:grid-cols-2">
            {schoolInfo.campuses.map((campus) => (
              <StaggerItem key={campus.id}>
                <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-all duration-300 hover:border-accent-200 hover:shadow-xl">
                  <div className="relative flex h-48 items-center justify-center bg-gradient-to-br from-accent-50 to-neutral-100">
                    <span className="text-5xl">🏫</span>
                  </div>
                  <div className="p-8">
                    <h3 className="mb-3 text-xl font-bold text-neutral-900">
                      {campus.name[locale as keyof typeof campus.name] || campus.name.pl}
                    </h3>
                    <p className="mb-6 text-neutral-600">
                      {campus.address.street}<br />
                      {campus.address.postalCode} {campus.address.city}
                    </p>
                    <a
                      href={`https://maps.google.com/?q=${campus.address.coordinates.latitude},${campus.address.coordinates.longitude}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-semibold text-red-600 transition-colors hover:text-red-700"
                    >
                      {locale === 'pl' ? 'Zobacz na mapie' : locale === 'de' ? 'Auf Karte anzeigen' : 'View on map'}
                      <ArrowRight className="size-4" />
                    </a>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 bg-red-600" />
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%">
            <pattern id="about-cta-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#about-cta-grid)" />
          </svg>
        </div>
        <div className="container-custom relative z-10 text-center">
          <ScrollReveal>
            <h2 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
              {locale === 'pl' ? 'Dołącz do naszej rodziny' : locale === 'de' ? 'Werden Sie Teil unserer Familie' : 'Become part of our family'}
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-xl leading-relaxed text-white/80">
              {locale === 'pl'
                ? 'Zapraszamy do zapoznania się z naszą ofertą edukacyjną i procesem rekrutacji.'
                : locale === 'de'
                ? 'Wir laden Sie ein, unser Bildungsangebot und unseren Zulassungsprozess kennenzulernen.'
                : 'We invite you to learn about our educational offer and admission process.'}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href={`/${locale}/parents/recruitment`}
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-red-600 transition-all duration-300 hover:scale-105 hover:bg-neutral-100 hover:shadow-xl"
              >
                {locale === 'pl' ? 'Rekrutacja' : locale === 'de' ? 'Rekrutierung' : 'Admissions'}
                <ArrowRight className="size-5" />
              </Link>
              <Link
                href={`/${locale}/about/staff`}
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 bg-transparent px-8 py-4 text-lg font-bold text-white transition-all duration-300 hover:bg-white/10"
              >
                {locale === 'pl' ? 'Poznaj zespół' : locale === 'de' ? 'Team kennenlernen' : 'Meet the team'}
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
