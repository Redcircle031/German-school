import { getTranslations } from '@/lib/i18n';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Globe, Users, Target, Heart, Building2 } from 'lucide-react';
import schoolInfo from '@/data/extracted/school-info.json';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = getTranslations(locale as any, 'about');
  return {
    title: t('meta.title'),
    description: t('meta.description'),
  };
}

const timeline = [
  {
    year: '1978',
    pl: 'Założenie szkoły przez Towarzystwo Szkolne im. Willy\'ego Brandta',
    de: 'Gründung der Schule durch den Schulverein Willy Brandt',
    en: 'School founded by the Willy Brandt School Association',
  },
  {
    year: '1994',
    pl: 'Szkoła oficjalnie otrzymuje imię Willy\'ego Brandta po jego śmierci',
    de: 'Schule erhält offiziell den Namen Willy Brandts nach seinem Tod',
    en: 'School officially named after Willy Brandt following his passing',
  },
  {
    year: '2003',
    pl: 'Akredytacja jako Deutsche Auslandsschule — oficjalne uznanie przez KMK',
    de: 'Akkreditierung als Deutsche Auslandsschule — offizielle Anerkennung durch KMK',
    en: 'Accreditation as Deutsche Auslandsschule — official recognition by KMK',
  },
  {
    year: '2013',
    pl: '100. rocznica urodzin Willy\'ego Brandta — wielkie obchody i wystawy',
    de: '100. Geburtstag Willy Brandts — große Feierlichkeiten und Ausstellungen',
    en: 'Willy Brandt\'s 100th birthday — celebrations and exhibitions',
  },
  {
    year: '2018',
    pl: '40-lecie szkoły — otwarcie nowego kampusu, partnerstwo z BVB Dortmund',
    de: '40-jähriges Jubiläum — Eröffnung des neuen Campus, Partnerschaft mit BVB Dortmund',
    en: '40th anniversary — new campus opened, BVB Dortmund partnership launched',
  },
  {
    year: '2024',
    pl: 'Ponad 400 uczniów, 60+ nauczycieli, 45 lat polsko-niemieckiego dialogu',
    de: 'Über 400 Schüler, 60+ Lehrkräfte, 45 Jahre deutsch-polnischer Dialog',
    en: 'Over 400 students, 60+ teachers, 45 years of Polish-German dialogue',
  },
];

const values = [
  {
    Icon: Globe,
    color: 'bg-blue-50 text-blue-600',
    pl: { title: 'Dwujęzyczność', desc: 'Edukacja w języku polskim i niemieckim, otwierająca drzwi do międzynarodowej kariery.' },
    de: { title: 'Zweisprachigkeit', desc: 'Bildung auf Polnisch und Deutsch, die Türen zu einer internationalen Karriere öffnet.' },
    en: { title: 'Bilingualism', desc: 'Education in Polish and German, opening doors to an international career.' },
  },
  {
    Icon: Users,
    color: 'bg-green-50 text-green-600',
    pl: { title: 'Dialog i Spotkania', desc: 'Budowanie mostów między kulturami i pokoleniami w duchu idei Willy\'ego Brandta.' },
    de: { title: 'Dialog und Begegnung', desc: 'Brücken zwischen Kulturen und Generationen im Geiste von Willy Brandt bauen.' },
    en: { title: 'Dialogue & Encounter', desc: 'Building bridges between cultures and generations in the spirit of Willy Brandt.' },
  },
  {
    Icon: Target,
    color: 'bg-accent-50 text-accent-600',
    pl: { title: 'Jakość Nauczania', desc: 'Wysoko wykwalifikowana kadra i nowoczesne metody nauczania.' },
    de: { title: 'Qualität der Lehre', desc: 'Hochqualifiziertes Personal und moderne Lehrmethoden.' },
    en: { title: 'Quality Teaching', desc: 'Highly qualified staff and modern teaching methods.' },
  },
  {
    Icon: Heart,
    color: 'bg-red-50 text-red-600',
    pl: { title: 'Wspólnota', desc: 'Rodzinna atmosfera i wzajemne wsparcie w rozwoju każdego ucznia.' },
    de: { title: 'Gemeinschaft', desc: 'Familiäre Atmosphäre und gegenseitige Unterstützung bei der Entwicklung jedes Schülers.' },
    en: { title: 'Community', desc: 'Family atmosphere and mutual support in the development of every student.' },
  },
];

const campusPhotos: Record<string, string> = {
  main: '/images/campus/campus-01.jpg',
  kindergarten: '/images/campus/campus-04.jpg',
};

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  const stats = [
    { value: '1978', label: locale === 'pl' ? 'Rok założenia' : locale === 'de' ? 'Gründungsjahr' : 'Founded' },
    { value: '400+', label: locale === 'pl' ? 'Uczniów' : locale === 'de' ? 'Schüler' : 'Students' },
    { value: '60+', label: locale === 'pl' ? 'Nauczycieli' : locale === 'de' ? 'Lehrkräfte' : 'Teachers' },
    { value: '45+', label: locale === 'pl' ? 'Lat doświadczenia' : locale === 'de' ? 'Jahre Erfahrung' : 'Years of Experience' },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] overflow-hidden bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white">
        <div className="absolute right-0 top-0 size-96 -translate-y-1/2 translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 size-64 -translate-x-1/2 translate-y-1/2 rounded-full bg-white/5 blur-3xl" />
        <div className="container-custom relative z-10">
          <div className="max-w-4xl pb-20 pt-32">
            <ScrollReveal>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-red-200">
                {locale === 'pl' ? 'O Nas' : locale === 'de' ? 'Über Uns' : 'About Us'}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="mb-6 text-5xl font-extrabold leading-[0.95] tracking-tight md:text-6xl lg:text-7xl">
                {locale === 'pl' ? 'Polsko-Niemiecka Szkoła Spotkań i Dialogu'
                  : locale === 'de' ? 'Deutsch-Polnische Begegnungsschule'
                  : 'Polish-German School of Meetings and Dialogue'}
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
                  {locale === 'pl' ? 'Gdzie dwie kultury budują jedną przyszłość'
                    : locale === 'de' ? 'Wo zwei Kulturen eine Zukunft gestalten'
                    : 'Where two cultures build one future'}
                </h2>
                <p className="mb-8 text-lg leading-relaxed text-neutral-600">
                  {locale === 'pl'
                    ? 'Polsko-Niemiecka Szkoła Spotkań i Dialogu im. Willy\'ego Brandta to wyjątkowa placówka edukacyjna, która od ponad 45 lat łączy polską i niemiecką tradycję pedagogiczną. Naszym celem jest kształcenie młodych ludzi otwartych na świat, szanujących różnorodność kulturową i gotowych do życia w zglobalizowanej rzeczywistości.'
                    : locale === 'de'
                    ? 'Die Deutsch-Polnische Begegnungsschule Willy-Brandt-Schule ist eine einzigartige Bildungseinrichtung, die seit über 45 Jahren polnische und deutsche pädagogische Traditionen verbindet. Unser Ziel ist es, junge Menschen auszubilden, die weltoffen sind, kulturelle Vielfalt respektieren und bereit sind, in einer globalisierten Realität zu leben.'
                    : 'The Polish-German School of Meetings and Dialogue named after Willy Brandt is a unique educational institution that has been connecting Polish and German pedagogical traditions for over 45 years. Our goal is to educate young people who are open to the world, respect cultural diversity, and are ready to live in a globalized reality.'}
                </p>
                <div className="flex items-center gap-4 rounded-2xl bg-accent-50 p-4">
                  <div className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-accent-100">
                    <Building2 className="size-7 text-accent-600" />
                  </div>
                  <div>
                    <p className="font-bold text-neutral-900">Deutsche Auslandsschule</p>
                    <p className="text-sm text-neutral-500">
                      {locale === 'pl' ? 'Akredytowana szkoła niemiecka za granicą'
                        : locale === 'de' ? 'Akkreditierte deutsche Schule im Ausland'
                        : 'Accredited German School Abroad'}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2} direction="left">
              <div className="relative">
                <div className="overflow-hidden rounded-3xl">
                  <Image
                    src="/images/campus/campus-01.jpg"
                    alt="WBS Campus Warsaw"
                    width={600}
                    height={600}
                    className="aspect-square w-full object-cover"
                  />
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

      {/* Timeline */}
      <section className="bg-neutral-50 py-24">
        <div className="container-custom">
          <ScrollReveal className="mb-16 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent-500">
              {locale === 'pl' ? 'Historia' : locale === 'de' ? 'Geschichte' : 'History'}
            </p>
            <h2 className="text-3xl font-medium text-neutral-900 md:text-4xl">
              {locale === 'pl' ? '45 lat tradycji i innowacji'
                : locale === 'de' ? '45 Jahre Tradition und Innovation'
                : '45 years of tradition and innovation'}
            </h2>
          </ScrollReveal>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 top-0 h-full w-px bg-neutral-200 md:left-1/2" />
            <div className="space-y-10">
              {timeline.map((item, i) => (
                <ScrollReveal key={item.year} delay={i * 0.07}>
                  <div className={`relative flex items-start gap-8 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Content */}
                    <div className={`ml-12 flex-1 md:ml-0 ${i % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                      <div className={`inline-block rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm ${i % 2 === 0 ? '' : ''}`}>
                        <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-accent-500">{item.year}</span>
                        <p className="text-neutral-700">
                          {item[locale as 'pl' | 'de' | 'en']}
                        </p>
                      </div>
                    </div>
                    {/* Dot */}
                    <div className="absolute left-4 top-6 flex size-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white md:left-1/2">
                      {i + 1}
                    </div>
                    {/* Spacer for alternating layout */}
                    <div className="hidden flex-1 md:block" />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-white py-24">
        <div className="container-custom">
          <ScrollReveal className="mb-16 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent-500">
              {locale === 'pl' ? 'Nasze Wartości' : locale === 'de' ? 'Unsere Werte' : 'Our Values'}
            </p>
            <h2 className="text-3xl font-medium text-neutral-900 md:text-4xl">
              {locale === 'pl' ? 'Wartości, które kształtują naszą społeczność'
                : locale === 'de' ? 'Werte, die unsere Gemeinschaft formen'
                : 'Values that shape our community'}
            </h2>
          </ScrollReveal>
          <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const content = value[locale as 'pl' | 'de' | 'en'];
              return (
                <StaggerItem key={index}>
                  <div className="h-full rounded-2xl border border-neutral-200 bg-white p-8 transition-all duration-300 hover:border-accent-200 hover:shadow-xl">
                    <div className={`mb-5 flex size-12 items-center justify-center rounded-xl ${value.color}`}>
                      <value.Icon className="size-6" />
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-neutral-900">{content.title}</h3>
                    <p className="leading-relaxed text-neutral-600">{content.desc}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Patron Section */}
      <section className="bg-neutral-900 py-24 text-white">
        <div className="container-custom">
          <ScrollReveal>
            <div className="grid items-center gap-12 md:grid-cols-3">
              <div className="md:col-span-1">
                <div className="overflow-hidden rounded-2xl">
                  <Image
                    src="/images/campus/campus-02.jpg"
                    alt="WBS Warsaw — School in the spirit of Willy Brandt"
                    width={400}
                    height={533}
                    className="aspect-[3/4] w-full object-cover"
                  />
                </div>
              </div>
              <div className="md:col-span-2">
                <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent-400">
                  {locale === 'pl' ? 'Patron Szkoły' : locale === 'de' ? 'Schulpatron' : 'School Patron'}
                </p>
                <h2 className="mb-2 text-3xl font-medium md:text-4xl">Willy Brandt</h2>
                <p className="mb-6 text-lg text-neutral-400">1913 – 1992</p>
                <blockquote className="mb-6 border-l-4 border-accent-400 pl-6">
                  <p className="text-xl italic leading-relaxed text-neutral-200">
                    {locale === 'pl'
                      ? '„Chcemy być narodem, który nie ucieka od siebie, który odważy się wkroczyć w przyszłość."'
                      : locale === 'de'
                      ? '„Wir wollen ein Volk der guten Nachbarn sein, im Innern und nach außen."'
                      : '"We want to be a nation of good neighbours, within and without."'}
                  </p>
                  <footer className="mt-2 text-sm text-neutral-500">— Willy Brandt</footer>
                </blockquote>
                <p className="mb-6 leading-relaxed text-neutral-400">
                  {locale === 'pl'
                    ? 'Willy Brandt (1913–1992) — były kanclerz Niemiec, burmistrz Berlina Zachodniego, laureat Pokojowej Nagrody Nobla 1971. Jego polityka wschodnia (Ostpolitik) zapoczątkowała nową erę pojednania polsko-niemieckiego. 7 grudnia 1970 roku uklęknął przed pomnikiem Bohaterów Getta w Warszawie — gest, który przeszedł do historii.'
                    : locale === 'de'
                    ? 'Willy Brandt (1913–1992) — ehemaliger Bundeskanzler, Bürgermeister West-Berlins, Friedensnobelpreisträger 1971. Seine Ostpolitik leitete eine neue Ära der deutsch-polnischen Aussöhnung ein. Am 7. Dezember 1970 kniete er vor dem Mahnmal der Warschauer Ghetto-Helden — eine Geste, die Geschichte schrieb.'
                    : 'Willy Brandt (1913–1992) — former Chancellor of Germany, Mayor of West Berlin, Nobel Peace Prize laureate 1971. His Ostpolitik ushered in a new era of Polish-German reconciliation. On 7 December 1970, he knelt before the Warsaw Ghetto Heroes Monument — a gesture that made history.'}
                </p>
                <Link
                  href={`/${locale}/about/patron`}
                  className="inline-flex items-center gap-2 font-semibold text-accent-400 transition-colors hover:text-accent-300"
                >
                  {locale === 'pl' ? 'Dowiedz się więcej' : locale === 'de' ? 'Mehr erfahren' : 'Learn more'}
                  <ArrowRight className="size-4" />
                </Link>
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
              {locale === 'pl' ? 'Odwiedź nas w Warszawie'
                : locale === 'de' ? 'Besuchen Sie uns in Warschau'
                : 'Visit us in Warsaw'}
            </h2>
          </ScrollReveal>
          <StaggerContainer className="grid gap-8 md:grid-cols-2">
            {schoolInfo.campuses.map((campus, idx) => (
              <StaggerItem key={campus.id}>
                <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-all duration-300 hover:border-accent-200 hover:shadow-xl">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={campusPhotos[campus.id] || `/images/campus/campus-0${idx + 1}.jpg`}
                      alt={campus.name[locale as keyof typeof campus.name] || campus.name.pl}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
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
        <div className="container-custom relative z-10 text-center">
          <ScrollReveal>
            <h2 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
              {locale === 'pl' ? 'Dołącz do naszej rodziny'
                : locale === 'de' ? 'Werden Sie Teil unserer Familie'
                : 'Become part of our family'}
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-xl leading-relaxed text-white/80">
              {locale === 'pl' ? 'Zapraszamy do zapoznania się z naszą ofertą edukacyjną i procesem rekrutacji.'
                : locale === 'de' ? 'Wir laden Sie ein, unser Bildungsangebot und unseren Zulassungsprozess kennenzulernen.'
                : 'We invite you to learn about our educational offer and admission process.'}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href={`/${locale}/parents/recruitment`}
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-red-600 transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                {locale === 'pl' ? 'Rekrutacja' : locale === 'de' ? 'Rekrutierung' : 'Admissions'}
                <ArrowRight className="size-5" />
              </Link>
              <Link
                href={`/${locale}/about/staff`}
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-8 py-4 text-lg font-bold text-white transition-all duration-300 hover:bg-white/10"
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
