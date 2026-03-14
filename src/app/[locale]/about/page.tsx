import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import Image from 'next/image';
import PageHeader from '@/components/features/PageHeader';
import schoolInfo from '@/data/extracted/school-info.json';

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
      <PageHeader
        lang={locale}
        title={locale === 'pl' ? 'O Nas' : locale === 'de' ? 'Über Uns' : 'About Us'}
        description={locale === 'pl' 
          ? 'Poznaj Polsko-Niemiecką Szkołę Spotkań i Dialogu im. Willy\'ego Brandta'
          : locale === 'de'
          ? 'Lernen Sie die Deutsch-Polnische Begegnungsschule Willy-Brandt-Schule kennen'
          : 'Discover the Polish-German School of Meetings and Dialogue named after Willy Brandt'
        }
      />

      {/* Mission Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary-600 font-semibold text-sm uppercase tracking-wide">
                {locale === 'pl' ? 'Nasza Misja' : locale === 'de' ? 'Unsere Mission' : 'Our Mission'}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-4 mb-6">
                {locale === 'pl'
                  ? 'Edukacja, która łączy kultury'
                  : locale === 'de'
                  ? 'Bildung, die Kulturen verbindet'
                  : 'Education that Connects Cultures'}
              </h2>
              <p className="text-lg text-neutral-600 mb-6">
                {locale === 'pl'
                  ? 'Polsko-Niemiecka Szkoła Spotkań i Dialogu im. Willy\'ego Brandta to wyjątkowa placówka edukacyjna, która od ponad 45 lat łączy polską i niemiecką tradycję pedagogiczną. Naszym celem jest kształcenie młodych ludzi otwartych na świat, szanujących różnorodność kulturową i gotowych do życia w zglobalizowanej rzeczywistości.'
                  : locale === 'de'
                  ? 'Die Deutsch-Polnische Begegnungsschule Willy-Brandt-Schule ist eine einzigartige Bildungseinrichtung, die seit über 45 Jahren polnische und deutsche pädagogische Traditionen verbindet. Unser Ziel ist es, junge Menschen auszubilden, die weltoffen sind, kulturelle Vielfalt respektieren und bereit sind, in einer globalisierten Realität zu leben.'
                  : 'The Polish-German School of Meetings and Dialogue named after Willy Brandt is a unique educational institution that has been connecting Polish and German pedagogical traditions for over 45 years. Our goal is to educate young people who are open to the world, respect cultural diversity, and are ready to live in a globalized reality.'}
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🏫</span>
                </div>
                <div>
                  <p className="font-semibold text-neutral-900">
                    {locale === 'pl' ? 'Deutsche Auslandsschule' : locale === 'de' ? 'Deutsche Auslandsschule' : 'German International School'}
                  </p>
                  <p className="text-sm text-neutral-500">
                    {locale === 'pl' ? 'Akredytowana szkoła niemiecka za granicą' : locale === 'de' ? 'Akreditierte deutsche Schule im Ausland' : 'Accredited German School Abroad'}
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-neutral-100 rounded-2xl overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20" />
                <div className="absolute inset-0 flex items-center justify-center text-neutral-400">
                  <div className="text-center">
                    <span className="text-6xl block mb-4">🏫</span>
                    <span className="text-sm">School Building</span>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 hidden md:block">
                <p className="text-3xl font-bold text-primary-600">45+</p>
                <p className="text-sm text-neutral-600">
                  {locale === 'pl' ? 'Lat tradycji' : locale === 'de' ? 'Jahre Tradition' : 'Years of Tradition'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section bg-primary-600 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</p>
                <p className="text-primary-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wide">
              {locale === 'pl' ? 'Nasze Wartości' : locale === 'de' ? 'Unsere Werte' : 'Our Values'}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-4">
              {locale === 'pl' ? 'Co nas wyróżnia' : locale === 'de' ? 'Was uns auszeichnet' : 'What sets us apart'}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">{value.title}</h3>
                <p className="text-neutral-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patron Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="bg-neutral-50 rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1">
                <div className="aspect-[3/4] bg-neutral-200 rounded-2xl overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center text-neutral-400">
                    <div className="text-center">
                      <span className="text-6xl block mb-4">👤</span>
                      <span className="text-sm">Willy Brandt</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:col-span-2">
                <span className="text-secondary-600 font-semibold text-sm uppercase tracking-wide">
                  {locale === 'pl' ? 'Patron Szkoły' : locale === 'de' ? 'Schutzpatron' : 'School Patron'}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-4 mb-4">
                  Willy Brandt
                </h2>
                <p className="text-lg text-neutral-500 mb-6">
                  {locale === 'pl' ? 'Były kanclerz Niemiec, laureat Pokojowej Nagrody Nobla' : locale === 'de' ? 'Ehemaliger deutscher Bundeskanzler, Friedensnobelpreisträger' : 'Former German Chancellor, Nobel Peace Prize laureate'}
                </p>
                <p className="text-neutral-600 mb-6">
                  {locale === 'pl'
                    ? 'Willy Brandt (1913-1992) był wybitnym niemieckim politykiem, burmistrzem Berlina Zachodniego i kanclerzem RFN. W 1971 roku otrzymał Pokojową Nagrodę Nobla za swoją politykę wschodnią (Ostpolitik), która przyczyniła się do odprężenia między Niemcami a krajami bloku wschodniego. Jego idea pojednania niemiecko-polskiego i budowania mostów między narodami jest fundamentem filozofii naszej szkoły.'
                    : locale === 'de'
                    ? 'Willy Brandt (1913-1992) war ein herausragender deutscher Politiker, Bürgermeister von West-Berlin und Bundeskanzler der BRD. Im Jahr 1971 erhielt er den Friedensnobelpreis für seine Ostpolitik, die zur Entspannung zwischen Deutschland und den Ländern des Ostblocks beitrug. Seine Idee der deutsch-polnischen Versöhnung und des Brückenbaus zwischen Völkern ist das Fundament der Philosophie unserer Schule.'
                    : 'Willy Brandt (1913-1992) was an outstanding German politician, mayor of West Berlin, and Chancellor of the Federal Republic of Germany. In 1971, he received the Nobel Peace Prize for his Ostpolitik, which contributed to the easing of tensions between Germany and the Eastern Bloc countries. His idea of German-Polish reconciliation and building bridges between nations is the foundation of our school\'s philosophy.'}
                </p>
                <a
                  href={`/${locale}/about/patron`}
                  className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700"
                >
                  {locale === 'pl' ? 'Dowiedz się więcej' : locale === 'de' ? 'Mehr erfahren' : 'Learn more'}
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campuses Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wide">
              {locale === 'pl' ? 'Nasze Kampusy' : locale === 'de' ? 'Unsere Campus' : 'Our Campuses'}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-4">
              {locale === 'pl' ? 'Gdzie nas znajdziesz' : locale === 'de' ? 'Wo Sie uns finden' : 'Where to find us'}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {schoolInfo.campuses.map((campus) => (
              <div key={campus.id} className="bg-neutral-50 rounded-2xl overflow-hidden">
                <div className="h-48 bg-neutral-200 relative">
                  <div className="absolute inset-0 flex items-center justify-center text-neutral-400">
                    <span className="text-4xl">🏫</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                    {campus.name[locale as keyof typeof campus.name] || campus.name.pl}
                  </h3>
                  <p className="text-neutral-600 mb-4">
                    {campus.address.street}<br />
                    {campus.address.postalCode} {campus.address.city}
                  </p>
                  <a
                    href={`https://maps.google.com/?q=${campus.address.coordinates.latitude},${campus.address.coordinates.longitude}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {locale === 'pl' ? 'Zobacz na mapie' : locale === 'de' ? 'Auf Karte anzeigen' : 'View on map'}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-secondary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {locale === 'pl' ? 'Dołącz do społeczności WBS' : locale === 'de' ? 'Werden Sie Teil der WBS-Gemeinschaft' : 'Join the WBS Community'}
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {locale === 'pl'
              ? 'Zapraszamy do zapoznania się z naszą ofertą edukacyjną i procesem rekrutacji.'
              : locale === 'de'
              ? 'Wir laden Sie ein, unser Bildungsangebot und unseren Zulassungsprozess kennenzulernen.'
              : 'We invite you to learn about our educational offer and admission process.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`/${locale}/parents/recruitment`}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-secondary-600 font-semibold rounded-xl hover:bg-neutral-100 transition-colors"
            >
              {locale === 'pl' ? 'Rekrutacja' : locale === 'de' ? 'Rekrutierung' : 'Admissions'}
            </a>
            <a
              href={`/${locale}/about/staff`}
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors border border-white/30"
            >
              {locale === 'pl' ? 'Poznaj zespół' : locale === 'de' ? 'Team kennenlernen' : 'Meet the team'}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
