import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import '../globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import { defaultLocale } from '@/lib/i18n';

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
  alternates: {
    canonical: 'https://wbs.pl/pl',
    languages: {
      pl: 'https://wbs.pl/pl',
      de: 'https://wbs.pl/de',
      en: 'https://wbs.pl/en',
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${inter.variable} ${plusJakartaSans.variable}`} suppressHydrationWarning>
      <body className="min-h-screen bg-white font-sans antialiased" suppressHydrationWarning>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
