import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const titles: Record<string, string> = { pl: 'Wyszukiwanie | WBS', de: 'Suche | WBS', en: 'Search | WBS' };
  const descriptions: Record<string, string> = {
    pl: 'Przeszukaj stronę szkoły WBS',
    de: 'Durchsuchen Sie die WBS-Schulwebsite',
    en: 'Search the WBS school website',
  };
  return {
    title: titles[locale] || titles.en,
    description: descriptions[locale] || descriptions.en,
  };
}

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
