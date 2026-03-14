'use client';

import { useState } from 'react';
import { Search, FileText, Users, Calendar, Newspaper, ArrowRight } from 'lucide-react';
import PageHeader from '@/components/features/PageHeader';

interface SearchResult {
  id: string;
  title: string;
  excerpt: string;
  type: 'page' | 'news' | 'staff' | 'event';
  url: string;
}

const mockResults: SearchResult[] = [
  { id: '1', title: 'Rekrutacja', excerpt: 'Informacje o procesie rekrutacji do szkoły...', type: 'page', url: '/parents/recruitment' },
  { id: '2', title: 'Stołówka szkolna', excerpt: 'Menu i godziny otwarcia stołówki...', type: 'page', url: '/parents/canteen' },
  { id: '3', title: 'Zakończenie roku szkolnego', excerpt: 'Uroczyste zakończenie roku szkolnego 2024/2025...', type: 'news', url: '/news/1' },
  { id: '4', title: 'Jan Kowalski', excerpt: 'Nauczyciel matematyki, klasy 7-12...', type: 'staff', url: '/about/staff' },
  { id: '5', title: 'Dzień Otwarty', excerpt: 'Zapraszamy na dzień otwarty szkoły...', type: 'event', url: '/events' },
];

const typeIcons = { page: FileText, news: Newspaper, staff: Users, event: Calendar };

const translations = {
  pl: { title: 'Szukaj', placeholder: 'Wpisz szukaną frazę...', noResults: 'Brak wyników', results: 'wyników' },
  de: { title: 'Suchen', placeholder: 'Suchbegriff eingeben...', noResults: 'Keine Ergebnisse', results: 'Ergebnisse' },
  en: { title: 'Search', placeholder: 'Enter search term...', noResults: 'No results', results: 'results' },
};

export default function SearchPage({ params: { locale } }: { params: { locale: string } }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setHasSearched(true);
    const filtered = mockResults.filter(r => 
      r.title.toLowerCase().includes(query.toLowerCase()) ||
      r.excerpt.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered);
  };

  const t = translations[locale as keyof typeof translations] || translations.en;

  return (
    <>
      <PageHeader lang={locale} title={t.title} />
      <section className="section bg-white">
        <div className="container-custom max-w-3xl">
          <form onSubmit={handleSearch} className="relative mb-12">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t.placeholder}
              className="w-full px-6 py-4 pr-14 text-lg border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <button type="submit" className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-neutral-400 hover:text-primary-600">
              <Search className="w-6 h-6" />
            </button>
          </form>

          {hasSearched && (
            <div>
              {results.length > 0 ? (
                <div className="space-y-4">
                  <p className="text-neutral-500 mb-4">{results.length} {t.results}</p>
                  {results.map((result) => {
                    const Icon = typeIcons[result.type];
                    return (
                      <a key={result.id} href={`/${locale}${result.url}`} className="flex items-start gap-4 p-4 bg-neutral-50 rounded-xl hover:bg-neutral-100 transition-colors">
                        <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-primary-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-neutral-900">{result.title}</h3>
                          <p className="text-neutral-600 text-sm">{result.excerpt}</p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-neutral-400 flex-shrink-0 mt-2" />
                      </a>
                    );
                  })}
                </div>
              ) : (
                <div className="text-center py-12">
                  <Search className="w-16 h-16 text-neutral-300 mx-auto mb-4" />
                  <p className="text-neutral-500">{t.noResults}</p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
