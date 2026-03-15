import { Metadata } from 'next';
import Image from 'next/image';
import PageHeader from '@/components/features/PageHeader';
import { Trophy, Users, Globe, Calendar, Phone, Mail, ExternalLink } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const titles = { pl: 'Akademia Piłkarska | WBS', de: 'Fußballakademie | WBS', en: 'Football Academy | WBS' };
  return { title: titles[locale as keyof typeof titles] || titles.en };
}

const translations = {
  pl: {
    title: 'Akademia Piłkarska WBS',
    subtitle: 'Profesjonalny trening dla młodych piłkarzy',
    intro: 'Akademia Piłkarska WBS to jeden z najstarszych i najbardziej uznanych programów sportowych szkoły. Od ponad 25 lat kształcimy młodych piłkarzy, łącząc trening z edukacją dwujęzyczną. Ponad 300 zawodników z 30 krajów trenowało w naszej akademii.',
    stats: [
      { value: '300+', label: 'Zawodników' },
      { value: '30', label: 'Krajów' },
      { value: '25+', label: 'Lat tradycji' },
    ],
    features: [
      'Treningi 3x w tygodniu',
      'Udział w ligach i turniejach międzynarodowych',
      'Opieka wykwalifikowanych trenerów UEFA',
      'Współpraca z BVB Borussia Dortmund',
    ],
    galleryTitle: 'Galeria',
    contactTitle: 'Kontakt',
    websiteLabel: 'Strona akademii',
    director: 'Dyrektor: Wojciech Wieczorkiewicz',
    partnerTitle: 'Partner',
    partnerDesc: 'Akademia współpracuje z Borussia Dortmund (BVB) w ramach programu szkoleniowego dla młodzieży.',
  },
  de: {
    title: 'WBS Fußballakademie',
    subtitle: 'Professionelles Training für junge Fußballer',
    intro: 'Die WBS Fußballakademie ist eines der ältesten und angesehensten Sportprogramme der Schule. Seit über 25 Jahren bilden wir junge Fußballer aus und verbinden Training mit zweisprachiger Bildung. Über 300 Spieler aus 30 Ländern haben in unserer Akademie trainiert.',
    stats: [
      { value: '300+', label: 'Spieler' },
      { value: '30', label: 'Länder' },
      { value: '25+', label: 'Jahre Tradition' },
    ],
    features: [
      'Training 3x pro Woche',
      'Teilnahme an internationalen Ligen und Turnieren',
      'Betreuung durch UEFA-lizenzierte Trainer',
      'Kooperation mit BVB Borussia Dortmund',
    ],
    galleryTitle: 'Galerie',
    contactTitle: 'Kontakt',
    websiteLabel: 'Akademie-Website',
    director: 'Direktor: Wojciech Wieczorkiewicz',
    partnerTitle: 'Partner',
    partnerDesc: 'Die Akademie kooperiert mit Borussia Dortmund (BVB) im Rahmen eines Jugendtrainingsprogramms.',
  },
  en: {
    title: 'WBS Football Academy',
    subtitle: 'Professional training for young footballers',
    intro: 'The WBS Football Academy is one of the school\'s oldest and most respected sports programmes. For over 25 years, we have been training young footballers, combining athletics with bilingual education. Over 300 players from 30 countries have trained at our academy.',
    stats: [
      { value: '300+', label: 'Players' },
      { value: '30', label: 'Countries' },
      { value: '25+', label: 'Years of tradition' },
    ],
    features: [
      'Training 3x per week',
      'Participation in international leagues and tournaments',
      'Supervision by UEFA-licensed coaches',
      'Partnership with BVB Borussia Dortmund',
    ],
    galleryTitle: 'Gallery',
    contactTitle: 'Contact',
    websiteLabel: 'Academy website',
    director: 'Director: Wojciech Wieczorkiewicz',
    partnerTitle: 'Partner',
    partnerDesc: 'The academy cooperates with Borussia Dortmund (BVB) as part of a youth training programme.',
  },
};

const galleryImages = [
  { src: '/images/football-academy/football-01.jpg', alt: 'Football training' },
  { src: '/images/football-academy/football-02.jpg', alt: 'Match day' },
  { src: '/images/football-academy/football-03.jpg', alt: 'Team photo' },
  { src: '/images/football-academy/football-04.jpg', alt: 'Training session' },
  { src: '/images/football-academy/football-05.jpg', alt: 'Tournament' },
  { src: '/images/football-academy/football-06.jpg', alt: 'Academy event' },
];

export default async function FootballAcademyPage({ params }: { params: Promise<{ locale: string }> }) {
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

          <div className="mb-16 grid gap-6 md:grid-cols-3">
            {t.stats.map((stat, i) => (
              <div key={i} className="rounded-xl bg-red-600 p-6 text-center text-white">
                <p className="mb-2 text-4xl font-bold">{stat.value}</p>
                <p className="text-red-100">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mb-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {t.features.map((feature, i) => {
              const icons = [Calendar, Trophy, Users, Globe];
              const Icon = icons[i];
              return (
                <div key={i} className="rounded-xl bg-neutral-50 p-6 text-center">
                  <Icon className="mx-auto mb-3 size-8 text-red-600" />
                  <p className="font-medium text-neutral-900">{feature}</p>
                </div>
              );
            })}
          </div>

          <div className="mb-16 rounded-2xl border border-neutral-200 bg-neutral-50 p-8">
            <h2 className="mb-4 text-2xl font-bold text-neutral-900">{t.partnerTitle}</h2>
            <p className="text-lg text-neutral-600">{t.partnerDesc}</p>
          </div>

          <h2 className="mb-8 text-2xl font-bold text-neutral-900">{t.galleryTitle}</h2>
          <div className="mb-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((img, i) => (
              <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
              </div>
            ))}
          </div>

          <div className="rounded-2xl bg-red-600 p-8 text-white">
            <h2 className="mb-6 text-2xl font-bold">{t.contactTitle}</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="flex items-center gap-3">
                <Phone className="size-5 text-red-200" />
                <span>+48 733 572 514</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="size-5 text-red-200" />
                <span>akademia.pilkarska@wbs.pl</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="size-5 text-red-200" />
                <span>{t.director}</span>
              </div>
            </div>
            <div className="mt-6">
              <a
                href="https://www.wbs-akademia.pl"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-red-600 transition-colors hover:bg-red-50"
              >
                <ExternalLink className="size-4" />
                {t.websiteLabel}: www.wbs-akademia.pl
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
