import { Metadata } from 'next';
import Image from 'next/image';
import PageHeader from '@/components/features/PageHeader';
import { Music, Phone, Mail, Users, Award, DollarSign } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const titles = { pl: 'Akademia Muzyczna | WBS', de: 'Musikakademie | WBS', en: 'Music Academy | WBS' };
  return { title: titles[locale as keyof typeof titles] || titles.en };
}

const translations = {
  pl: {
    title: 'Akademia Muzyczna WBS',
    subtitle: 'Rozwijaj swoje talenty muzyczne',
    intro: 'Akademia Muzyczna WBS oferuje indywidualne zajęcia instrumentalne, wokalne i teoretyczne dla uczniów wszystkich klas. Nauka odbywa się pod okiem doświadczonych muzyków i pedagogów. Akademia przygotowuje uczniów do egzaminów ABRSM (Associated Board of the Royal Schools of Music) — międzynarodowego certyfikatu uznawanego na całym świecie.',
    directorLabel: 'Dyrektor Akademii',
    instrumentsTitle: 'Oferta instrumentalna',
    instruments: ['Fortepian', 'Gitara', 'Skrzypce', 'Perkusja', 'Flet', 'Saksofon', 'Trąbka', 'Klarnet', 'Wiolonczela', 'Altówka', 'Śpiew (wokal)', 'Teoria muzyki', 'Kształcenie słuchu', 'Zespoły kameralne'],
    pricingTitle: 'Cennik',
    pricing: [
      { type: 'Lekcja indywidualna (45 min)', price: '140 PLN' },
      { type: 'Lekcja indywidualna (30 min)', price: '110 PLN' },
      { type: 'Zajęcia grupowe (45 min)', price: '50–60 PLN' },
    ],
    certTitle: 'Certyfikacja ABRSM',
    certDesc: 'Uczniowie mogą przystąpić do międzynarodowych egzaminów ABRSM — najstarszego i najbardziej uznawanego systemu certyfikacji muzycznej na świecie.',
    galleryTitle: 'Galeria',
    contactTitle: 'Kontakt',
    enrollTitle: 'Zapisy',
    enrollDesc: 'Formularz deklaracji przystąpienia do Akademii Muzycznej dostępny jest w sekretariacie szkoły lub do pobrania ze strony.',
  },
  de: {
    title: 'WBS Musikakademie',
    subtitle: 'Entwickeln Sie Ihre musikalischen Talente',
    intro: 'Die WBS Musikakademie bietet individuellen Instrumental-, Gesangs- und Theorieunterricht für Schüler aller Klassen. Der Unterricht wird von erfahrenen Musikern und Pädagogen erteilt. Die Akademie bereitet Schüler auf ABRSM-Prüfungen (Associated Board of the Royal Schools of Music) vor — ein weltweit anerkanntes Musikzertifikat.',
    directorLabel: 'Akademieleiter',
    instrumentsTitle: 'Instrumentenangebot',
    instruments: ['Klavier', 'Gitarre', 'Violine', 'Schlagzeug', 'Flöte', 'Saxophon', 'Trompete', 'Klarinette', 'Violoncello', 'Bratsche', 'Gesang', 'Musiktheorie', 'Gehörbildung', 'Kammermusik-Ensembles'],
    pricingTitle: 'Preise',
    pricing: [
      { type: 'Einzelunterricht (45 Min.)', price: '140 PLN' },
      { type: 'Einzelunterricht (30 Min.)', price: '110 PLN' },
      { type: 'Gruppenunterricht (45 Min.)', price: '50–60 PLN' },
    ],
    certTitle: 'ABRSM-Zertifizierung',
    certDesc: 'Schüler können an internationalen ABRSM-Prüfungen teilnehmen — dem ältesten und renommiertesten Musikzertifizierungssystem der Welt.',
    galleryTitle: 'Galerie',
    contactTitle: 'Kontakt',
    enrollTitle: 'Anmeldung',
    enrollDesc: 'Das Anmeldeformular für die Musikakademie ist im Sekretariat erhältlich oder als Download verfügbar.',
  },
  en: {
    title: 'WBS Music Academy',
    subtitle: 'Develop your musical talents',
    intro: 'The WBS Music Academy offers individual instrumental, vocal, and theory classes for students of all grades. Teaching is provided by experienced musicians and educators. The academy prepares students for ABRSM examinations (Associated Board of the Royal Schools of Music) — an internationally recognised music certification.',
    directorLabel: 'Academy Director',
    instrumentsTitle: 'Instrumental Offer',
    instruments: ['Piano', 'Guitar', 'Violin', 'Drums', 'Flute', 'Saxophone', 'Trumpet', 'Clarinet', 'Cello', 'Viola', 'Vocal', 'Music Theory', 'Ear Training', 'Chamber Ensembles'],
    pricingTitle: 'Pricing',
    pricing: [
      { type: 'Individual lesson (45 min)', price: '140 PLN' },
      { type: 'Individual lesson (30 min)', price: '110 PLN' },
      { type: 'Group lesson (45 min)', price: '50–60 PLN' },
    ],
    certTitle: 'ABRSM Certification',
    certDesc: 'Students can take international ABRSM examinations — the oldest and most respected music certification system in the world.',
    galleryTitle: 'Gallery',
    contactTitle: 'Contact',
    enrollTitle: 'Enrolment',
    enrollDesc: 'The enrolment form for the Music Academy is available at the school office or as a download.',
  },
};

const galleryImages = [
  { src: '/images/music-academy/music-01.jpg', alt: 'Concert performance' },
  { src: '/images/music-academy/music-02.jpg', alt: 'Music lesson' },
  { src: '/images/music-academy/music-03.jpg', alt: 'Student recital' },
  { src: '/images/music-academy/music-04.jpg', alt: 'Ensemble practice' },
  { src: '/images/music-academy/music-05.jpg', alt: 'Jugend musiziert' },
  { src: '/images/music-academy/music-06.jpg', alt: 'Piano class' },
];

export default async function MusicAcademyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = translations[locale as keyof typeof translations] || translations.en;

  return (
    <>
      <PageHeader lang={locale} title={t.title} description={t.subtitle} />

      <section className="section bg-white">
        <div className="container-custom">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="mb-6 text-xl leading-relaxed text-neutral-600">{t.intro}</p>
            <div className="inline-flex items-center gap-3 rounded-full bg-neutral-100 px-6 py-3">
              <Users className="size-5 text-red-600" />
              <span className="font-semibold text-neutral-900">{t.directorLabel}: Marcin Lemiszewski</span>
            </div>
          </div>

          <h2 className="mb-8 text-center text-2xl font-bold text-neutral-900">{t.instrumentsTitle}</h2>
          <div className="mb-16 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
            {t.instruments.map((instrument, i) => (
              <div key={i} className="rounded-xl bg-neutral-50 p-4 text-center transition-colors hover:bg-red-50">
                <Music className="mx-auto mb-2 size-6 text-red-600" />
                <p className="text-sm font-medium text-neutral-900">{instrument}</p>
              </div>
            ))}
          </div>

          <div className="mb-16 rounded-2xl border border-neutral-200 bg-neutral-50 p-8">
            <div className="mb-6 flex items-center gap-3">
              <DollarSign className="size-6 text-red-600" />
              <h2 className="text-2xl font-bold text-neutral-900">{t.pricingTitle}</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {t.pricing.map((item, i) => (
                <div key={i} className="rounded-xl bg-white p-6 text-center shadow-sm">
                  <p className="mb-2 text-3xl font-bold text-red-600">{item.price}</p>
                  <p className="text-sm text-neutral-600">{item.type}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16 rounded-2xl bg-red-600 p-8 text-white">
            <div className="flex items-start gap-4">
              <Award className="mt-1 size-8 shrink-0 text-red-200" />
              <div>
                <h2 className="mb-3 text-2xl font-bold">{t.certTitle}</h2>
                <p className="text-lg text-red-100">{t.certDesc}</p>
              </div>
            </div>
          </div>

          <h2 className="mb-8 text-2xl font-bold text-neutral-900">{t.galleryTitle}</h2>
          <div className="mb-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((img, i) => (
              <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-8">
            <h2 className="mb-6 text-2xl font-bold text-neutral-900">{t.contactTitle}</h2>
            <div className="mb-6 grid gap-4 md:grid-cols-2">
              <div className="flex items-center gap-3">
                <Phone className="size-5 text-red-600" />
                <span className="text-neutral-700">+48 795 801 234</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="size-5 text-red-600" />
                <a href="mailto:akademiamuzyczna@wbs.pl" className="text-red-600 hover:underline">akademiamuzyczna@wbs.pl</a>
              </div>
            </div>
            <div className="rounded-xl bg-white p-6">
              <h3 className="mb-2 font-semibold text-neutral-900">{t.enrollTitle}</h3>
              <p className="text-neutral-600">{t.enrollDesc}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
