'use client';

import { useState, useEffect, useMemo } from 'react';
import { Search, FileText, Users, Calendar, Newspaper, ArrowRight, Loader2, X } from 'lucide-react';
import Link from 'next/link';
import Breadcrumb from '@/components/ui/Breadcrumb';

interface SearchResult {
  id: string;
  title: string;
  excerpt: string;
  type: 'article' | 'staff' | 'event' | 'page';
  url: string;
  date?: string;
  category?: string;
}

type ResultType = 'all' | 'article' | 'staff' | 'event' | 'page';

const typeIcons = {
  article: Newspaper,
  staff: Users,
  event: Calendar,
  page: FileText,
};

const typeColors: Record<string, string> = {
  article: 'bg-red-50 text-red-700 border-red-200',
  staff: 'bg-blue-50 text-blue-700 border-blue-200',
  event: 'bg-amber-50 text-amber-700 border-amber-200',
  page: 'bg-neutral-100 text-neutral-700 border-neutral-200',
};

const typeBadgeColors: Record<string, string> = {
  article: 'bg-red-100 text-red-700',
  staff: 'bg-blue-100 text-blue-700',
  event: 'bg-amber-100 text-amber-700',
  page: 'bg-neutral-100 text-neutral-600',
};

const translations = {
  pl: {
    title: 'Szukaj',
    subtitle: 'Przeszukuj artykuły, pracowników, wydarzenia i strony',
    placeholder: 'Wpisz szukaną frazę...',
    noResults: 'Brak wyników dla',
    noResultsHint: 'Spróbuj innych słów kluczowych lub zmień filtr',
    results: 'wynik',
    resultsMany: 'wyników',
    searching: 'Szukam...',
    all: 'Wszystkie',
    article: 'Artykuły',
    staff: 'Pracownicy',
    event: 'Wydarzenia',
    page: 'Strony',
    clear: 'Wyczyść',
    suggestions: ['O szkole', 'Rekrutacja', 'Akademia piłkarska', 'Akademia muzyczna', 'Biblioteka'],
    suggestTitle: 'Popularne tematy',
    readMore: 'Czytaj więcej',
  },
  de: {
    title: 'Suchen',
    subtitle: 'Artikel, Mitarbeiter, Veranstaltungen und Seiten durchsuchen',
    placeholder: 'Suchbegriff eingeben...',
    noResults: 'Keine Ergebnisse für',
    noResultsHint: 'Versuchen Sie andere Schlüsselwörter oder ändern Sie den Filter',
    results: 'Ergebnis',
    resultsMany: 'Ergebnisse',
    searching: 'Suche...',
    all: 'Alle',
    article: 'Artikel',
    staff: 'Mitarbeiter',
    event: 'Veranstaltungen',
    page: 'Seiten',
    clear: 'Löschen',
    suggestions: ['Über uns', 'Aufnahme', 'Fußball-Akademie', 'Musik-Akademie', 'Bibliothek'],
    suggestTitle: 'Beliebte Themen',
    readMore: 'Mehr lesen',
  },
  en: {
    title: 'Search',
    subtitle: 'Search articles, staff, events and pages',
    placeholder: 'Enter search term...',
    noResults: 'No results for',
    noResultsHint: 'Try different keywords or change the filter',
    results: 'result',
    resultsMany: 'results',
    searching: 'Searching...',
    all: 'All',
    article: 'Articles',
    staff: 'Staff',
    event: 'Events',
    page: 'Pages',
    clear: 'Clear',
    suggestions: ['About school', 'Admissions', 'Football academy', 'Music academy', 'Library'],
    suggestTitle: 'Popular topics',
    readMore: 'Read more',
  },
};

export default function SearchPage({ params }: { params: Promise<{ locale: string }> }) {
  const [locale, setLocale] = useState('pl');
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [activeType, setActiveType] = useState<ResultType>('all');

  useEffect(() => {
    params.then((p) => setLocale(p.locale));
  }, [params]);

  const t = translations[locale as keyof typeof translations] || translations.en;

  useEffect(() => {
    if (query.length < 2) {
      setResults([]);
      setHasSearched(false);
      setActiveType('all');
      return;
    }

    const debounce = setTimeout(async () => {
      setIsSearching(true);
      setHasSearched(true);
      try {
        const res = await fetch(`/api/search?q=${encodeURIComponent(query)}&locale=${locale}`);
        const data = await res.json();
        if (data.success) setResults(data.data.results);
      } catch {
        setResults([]);
      } finally {
        setIsSearching(false);
      }
    }, 300);

    return () => clearTimeout(debounce);
  }, [query, locale]);

  const filteredResults = useMemo(
    () => (activeType === 'all' ? results : results.filter((r) => r.type === activeType)),
    [results, activeType]
  );

  const typeCounts = useMemo(() => {
    const counts: Record<string, number> = { all: results.length };
    results.forEach((r) => {
      counts[r.type] = (counts[r.type] || 0) + 1;
    });
    return counts;
  }, [results]);

  const filterTypes: { key: ResultType; label: string }[] = [
    { key: 'all', label: t.all },
    { key: 'article', label: t.article },
    { key: 'staff', label: t.staff },
    { key: 'event', label: t.event },
    { key: 'page', label: t.page },
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Breadcrumb bar */}
      <div className="border-b border-neutral-200 bg-white pt-24">
        <div className="container-custom py-3">
          <Breadcrumb />
        </div>
      </div>

      {/* Hero search bar */}
      <section className="bg-white pb-0 shadow-sm">
        <div className="container-custom py-10 md:py-14">
          <h1 className="mb-2 text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">
            {t.title}
          </h1>
          <p className="mb-6 text-neutral-500">{t.subtitle}</p>
          <div className="relative max-w-2xl">
            <Search className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-neutral-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t.placeholder}
              autoFocus
              className="w-full rounded-xl border border-neutral-200 bg-white py-4 pl-12 pr-12 text-base text-neutral-900 shadow-sm transition-shadow focus:border-red-400 focus:outline-none focus:ring-2 focus:ring-red-100"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-1 text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-700"
                aria-label={t.clear}
              >
                <X className="size-4" />
              </button>
            )}
            {isSearching && (
              <div className="absolute right-4 top-1/2 -translate-y-1/2">
                <Loader2 className="size-5 animate-spin text-red-500" />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Type filter pills — only show after search */}
      {hasSearched && !isSearching && results.length > 0 && (
        <div className="sticky top-20 z-30 border-b border-neutral-200 bg-white/95 backdrop-blur-sm">
          <div className="container-custom">
            <div className="flex items-center gap-2 overflow-x-auto py-3 scrollbar-hide">
              {filterTypes.map(({ key, label }) => {
                const count = typeCounts[key] || 0;
                if (key !== 'all' && count === 0) return null;
                const isActive = activeType === key;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveType(key)}
                    className={`flex shrink-0 items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-sm font-medium transition-all ${
                      isActive
                        ? 'border-red-300 bg-red-50 text-red-700'
                        : 'border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300 hover:bg-neutral-50'
                    }`}
                  >
                    {label}
                    <span
                      className={`rounded-full px-1.5 py-0.5 text-xs ${
                        isActive ? 'bg-red-100 text-red-700' : 'bg-neutral-100 text-neutral-500'
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Results */}
      <section className="py-8">
        <div className="container-custom max-w-3xl">
          {hasSearched && !isSearching ? (
            filteredResults.length > 0 ? (
              <div>
                <p className="mb-5 text-sm text-neutral-500">
                  {filteredResults.length}{' '}
                  {filteredResults.length === 1 ? t.results : t.resultsMany}
                  {activeType !== 'all' && (
                    <span className="ml-1">
                      ·{' '}
                      <button
                        onClick={() => setActiveType('all')}
                        className="text-red-600 underline hover:text-red-700"
                      >
                        {t.all}
                      </button>
                    </span>
                  )}
                </p>
                <div className="space-y-3">
                  {filteredResults.map((result) => {
                    const Icon = typeIcons[result.type];
                    const colorClass = typeColors[result.type];
                    const badgeClass = typeBadgeColors[result.type];
                    return (
                      <Link
                        key={result.id}
                        href={`/${locale}${result.url}`}
                        className="group flex items-start gap-4 rounded-xl border border-neutral-200 bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-red-200 hover:shadow-md"
                      >
                        <div
                          className={`flex size-11 shrink-0 items-center justify-center rounded-xl border ${colorClass}`}
                        >
                          <Icon className="size-5" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="mb-1.5 flex flex-wrap items-center gap-2">
                            <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${badgeClass}`}>
                              {t[result.type as keyof typeof t] as string}
                            </span>
                            {result.date && (
                              <span className="text-xs text-neutral-400">{result.date}</span>
                            )}
                            {result.category && (
                              <span className="rounded-full bg-neutral-100 px-2 py-0.5 text-xs text-neutral-500">
                                {result.category}
                              </span>
                            )}
                          </div>
                          <h3 className="mb-1 font-semibold text-neutral-900 transition-colors group-hover:text-red-700">
                            {result.title}
                          </h3>
                          <p className="line-clamp-2 text-sm text-neutral-500">{result.excerpt}</p>
                        </div>
                        <ArrowRight className="mt-1 size-5 shrink-0 text-neutral-300 transition-colors group-hover:text-red-500" />
                      </Link>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div className="py-16 text-center">
                <div className="mx-auto mb-4 flex size-20 items-center justify-center rounded-2xl bg-neutral-100">
                  <Search className="size-10 text-neutral-400" />
                </div>
                <p className="mb-2 text-lg font-medium text-neutral-700">
                  {t.noResults} &ldquo;{query}&rdquo;
                </p>
                <p className="mb-8 text-sm text-neutral-400">{t.noResultsHint}</p>
                {activeType !== 'all' && (
                  <button
                    onClick={() => setActiveType('all')}
                    className="rounded-lg bg-neutral-100 px-5 py-2.5 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-200"
                  >
                    {t.all}
                  </button>
                )}
              </div>
            )
          ) : !hasSearched ? (
            /* Suggestions / empty state */
            <div className="py-12">
              <p className="mb-5 text-sm font-semibold uppercase tracking-wider text-neutral-400">
                {t.suggestTitle}
              </p>
              <div className="flex flex-wrap gap-2">
                {t.suggestions.map((s) => (
                  <button
                    key={s}
                    onClick={() => setQuery(s)}
                    className="rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm text-neutral-600 transition-all hover:border-red-200 hover:bg-red-50 hover:text-red-700"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </section>
    </div>
  );
}
