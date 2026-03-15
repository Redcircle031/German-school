import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const titles: Record<string, string> = { pl: 'Kontakt | WBS', de: 'Kontakt | WBS', en: 'Contact | WBS' };
  const descriptions: Record<string, string> = {
    pl: 'Skontaktuj się z Polsko-Niemiecką Szkołą im. Willy\'ego Brandta w Warszawie',
    de: 'Kontaktieren Sie die Deutsch-Polnische Begegnungsschule Willy-Brandt-Schule Warschau',
    en: 'Get in touch with the Polish-German Willy Brandt School in Warsaw',
  };
  return {
    title: titles[locale] || titles.en,
    description: descriptions[locale] || descriptions.en,
  };
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
