import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import '../globals.css';
import { getTranslations } from '@/lib/i18n';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CookieConsent from '@/components/features/CookieConsent';
import SkipLink from '@/components/features/SkipLink';

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'sans-serif'],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'sans-serif'],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://wbs.pl'),
  title: {
    default: "WBS - Polsko-Niemiecka Szkoła Spotkań i Dialogu im. Willy'ego Brandta",
    template: '%s | WBS School Warsaw',
  },
  description:
    'Polsko-Niemiecka Szkoła Spotkań i Dialogu im. Willy\'ego Brandta w Warszawie. Dwujęzyczna edukacja od 1978 roku.',
  keywords: [
    'szkoła',
    'warszawa',
    'niemiecka',
    'międzynarodowa',
    'edukacja',
    'dwujęzyczna',
    'WBS',
    'Willy Brandt',
  ],
  authors: [{ name: 'WBS School' }],
  creator: 'WBS School',
  publisher: 'WBS School',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    url: 'https://wbs.pl',
    title: 'WBS - Polsko-Niemiecka Szkoła im. Willy\'ego Brandta',
    description: 'Dwujęzyczna edukacja w sercu Warszawy od 1978 roku',
    siteName: 'WBS School Warsaw',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'WBS School Warsaw',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WBS - Polsko-Niemiecka Szkoła im. Willy\'ego Brandta',
    description: 'Dwujęzyczna edukacja w sercu Warszawy od 1978 roku',
    images: ['/twitter-image.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: "Willy-Brandt-Schule Warschau",
  alternateName: ['WBS', "Polsko-Niemiecka Szkoła Spotkań i Dialogu im. Willy'ego Brandta", 'Deutsch-Polnische Begegnungsschule'],
  url: 'https://wbs.pl',
  logo: {
    '@type': 'ImageObject',
    url: 'https://wbs.pl/images/logos/wbs-logo.webp',
  },
  description: "Polsko-Niemiecka Szkoła Spotkań i Dialogu im. Willy'ego Brandta w Warszawie. Dwujęzyczna edukacja od 1978 roku.",
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'ul. Św. Urszuli Ledóchowskiej 3',
    addressLocality: 'Warszawa',
    postalCode: '02-972',
    addressCountry: 'PL',
  },
  telephone: '+48226422705',
  email: 'sekretariat@wbs.pl',
  foundingDate: '1978',
  sameAs: ['https://www.facebook.com/wbswarschau'],
  hasMap: 'https://maps.google.com/?q=ul.+%C5%9Bw.+Urszuli+Led%C3%B3chowskiej+3+Warszawa',
  numberOfEmployees: { '@type': 'QuantitativeValue', value: 60 },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const validLocale = ['pl', 'de', 'en'].includes(locale) ? locale : 'pl';

  return (
    <html lang={validLocale} className={`${inter.variable} ${plusJakartaSans.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-white font-sans antialiased" suppressHydrationWarning>
        <SkipLink text="Skip to content" />
        <Header lang={validLocale} />
        <main id="main-content">
          {children}
        </main>
        <Footer lang={validLocale} />
        <CookieConsent lang={validLocale} />
      </body>
    </html>
  );
}
