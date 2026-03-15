'use client';

import { useState, useRef, KeyboardEvent } from 'react';
import { useRouter } from 'next/navigation';
import { Search, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MegaMenuSearchProps {
  placeholder: string;
  lang: 'pl' | 'de' | 'en';
  className?: string;
}

export default function MegaMenuSearch({ placeholder, lang, className }: MegaMenuSearchProps) {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/${lang}/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Escape') {
      setQuery('');
      inputRef.current?.blur();
    }
  };

  const clearSearch = () => {
    setQuery('');
    inputRef.current?.focus();
  };

  return (
    <form onSubmit={handleSubmit} className={cn('relative w-full', className)}>
      <div
        className={cn(
          'relative flex items-center transition-all duration-200',
          isFocused && 'scale-[1.02]'
        )}
      >
        {/* Search Icon */}
        <div className="pointer-events-none absolute left-4">
          <Search className={cn(
            'size-5 transition-colors duration-200',
            isFocused ? 'text-red-500' : 'text-neutral-400'
          )} />
        </div>

        {/* Input */}
        <input
          ref={inputRef}
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className={cn(
            'w-full rounded-xl px-12 py-3',
            'bg-neutral-100 text-neutral-900 placeholder:text-neutral-400',
            'border-2 border-transparent',
            'focus:border-red-300 focus:bg-white focus:outline-none',
            'transition-all duration-200',
            'text-base'
          )}
          aria-label={placeholder}
        />

        {/* Clear Button */}
        {query && (
          <button
            type="button"
            onClick={clearSearch}
            className={cn(
              'absolute right-4 rounded-full p-1',
              'text-neutral-400 hover:bg-neutral-200 hover:text-neutral-600',
              'transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500'
            )}
            aria-label="Clear search"
          >
            <X className="size-4" />
          </button>
        )}

        {/* Submit Button (screen readers only) */}
        <button
          type="submit"
          className="sr-only"
          tabIndex={-1}
        >
          Search
        </button>
      </div>

      {/* Focus Indicator */}
      <div
        className={cn(
          'absolute inset-0 -z-10 rounded-xl bg-red-100 transition-opacity duration-200',
          isFocused ? 'opacity-100' : 'opacity-0'
        )}
        aria-hidden="true"
      />
    </form>
  );
}
