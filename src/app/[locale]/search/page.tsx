'use client';

import { useState, useEffect } from 'react';
import { Search, FileText, Users, Calendar, Newspaper, ArrowRight, Loader2 } from 'lucide-react';
import Link from 'next/link';

interface SearchResult {
  id: string;
  title: string;
  excerpt: string;
  type: 'article' | 'staff' | 'event' | 'page';
  url: string;
  date?: string;
  category?: string;
}

const typeIcons = { article: Newspaper, staff: Users, event: Calendar, page: FileText };
const typeColors = {
  article: 'bg-red-50 text-red-700',
  staff: 'bg-neutral-100 text-neutral-700',
  event: 'bg-red-50 text-red-700',
  page: 'bg-neutral-100 text-neutral-700',
};

const translations = {
  pl: {
    title: 'Szukaj',
    placeholder: 'Wpisz szukaną frazę (min. 2 znaki)...',
    noResults: 'Brak wyników dla',
    results: 'wyników',
    searching: 'Szukam...',
    searchTip: 'Wyszukaj artykuły, pracowników, wydarzenia i strony',
    article: 'Artykuł',
    staff: 'Pracownik',
    event: 'Wydarzenie',
    page: 'Strona',
  },
  de: {
    title: 'Suchen',
    placeholder: 'Suchbegriff eingeben (min. 2 Zeichen)...',
    noResults: 'Keine Ergebnisse für',
    results: 'Ergebnisse',
    searching: 'Suche...',
    searchTip: 'Suchen Sie nach Artikeln, Mitarbeitern, Veranstaltungen und Seiten',
    article: 'Artikel',
    staff: 'Mitarbeiter',
    event: 'Veranstaltung',
    page: 'Seite',
  },
  en: {
    title: 'Search',
    placeholder: 'Enter search term (min. 2 characters)...',
    noResults: 'No results for',
    results: 'results',
    searching: 'Searching...',
    searchTip: 'Search articles, staff, events and pages',
    article: 'Article',
    staff: 'Staff',
    event: 'Event',
    page: 'Page',
  },
};

export default function SearchPage({ params }: { params: Promise<{ locale: string }> }) {
  const [locale, setLocale] = useState('pl');
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    params.then(p => setLocale(p.locale));
  }, [params]);

  const t = translations[locale as keyof typeof translations] || translations.en;

  useEffect(() => {
    if (query.length < 2) {
      setResults([]);
      setHasSearched(false);
      return;
    }

    const debounce = setTimeout(async () => {
      setIsSearching(true);
      setHasSearched(true);

      try {
        const res = await fetch(`/api/search?q=${encodeURIComponent(query)}&locale=${locale}`);
        const data = await res.json();
        if (data.success) {
          setResults(data.data.results);
        }
      } catch {
        setResults([]);
      } finally {
        setIsSearching(false);
      }
    }, 300);

    return () => clearTimeout(debounce);
  }, [query, locale]);

  return (
      <div className="min-h-screen bg-neutral-50 pt-28 md:pt-30">
        <section className="bg-gradient-to-br from-red-600 to-red-800 py-16 text-white">
          <div className="container-custom max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold">{t.title}</h1>
            <div className="relative">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t.placeholder}
                autoFocus
                className="w-full rounded-xl border-0 bg-white px-6 py-4 pr-14 text-lg text-neutral-900 shadow-lg focus:outline-none focus:ring-4 focus:ring-white/30"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2">
                {isSearching ? (
                  <Loader2 className="size-6 animate-spin text-red-500" />
                ) : (
                  <Search className="size-6 text-neutral-400" />
                )}
              </div>
            </div>
            <p className="mt-3 text-sm text-white/70">{t.searchTip}</p>
          </div>
        </section>

        <section className="py-12">
          <div className="container-custom max-w-3xl">
            {hasSearched && !isSearching && (
              <div>
                {results.length > 0 ? (
                  <div className="space-y-4">
                    <p className="mb-6 text-neutral-500">
                      {results.length} {t.results}
                    </p>
                    {results.map((result) => {
                      const Icon = typeIcons[result.type];
                      const colorClass = typeColors[result.type];
                      return (
                        <Link
                          key={result.id}
                          href={`/${locale}${result.url}`}
                          className="flex items-start gap-4 rounded-xl border border-neutral-200 bg-white p-5 transition-all hover:border-red-200 hover:shadow-md"
                        >
                          <div className={`size-12 ${colorClass} flex shrink-0 items-center justify-center rounded-lg`}>
                            <Icon className="size-6" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="mb-1 flex items-center gap-2">
                              <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${colorClass}`}>
                                {t[result.type as keyof typeof t]}
                              </span>
                              {result.date && (
                                <span className="text-xs text-neutral-400">{result.date}</span>
                              )}
                            </div>
                            <h3 className="truncate font-semibold text-neutral-900">{result.title}</h3>
                            <p className="mt-1 line-clamp-2 text-sm text-neutral-600">{result.excerpt}</p>
                          </div>
                          <ArrowRight className="mt-3 size-5 shrink-0 text-neutral-400" />
                        </Link>
                      );
                    })}
                  </div>
                ) : (
                  <div className="py-16 text-center">
                    <Search className="mx-auto mb-4 size-16 text-neutral-300" />
                    <p className="text-lg text-neutral-500">
                      {t.noResults} &ldquo;{query}&rdquo;
                    </p>
                  </div>
                )}
              </div>
            )}

            {!hasSearched && (
              <div className="py-16 text-center">
                <Search className="mx-auto mb-4 size-20 text-neutral-200" />
                <p className="text-neutral-400">{t.searchTip}</p>
              </div>
            )}
          </div>
        </section>
      </div>
  );
}
