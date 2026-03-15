'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-neutral-50 py-20">
      <div className="container-custom max-w-2xl text-center">
        <div className="mx-auto mb-6 flex size-20 items-center justify-center rounded-full bg-red-100">
          <AlertTriangle className="size-10 text-red-600" />
        </div>
        <h1 className="mb-4 text-3xl font-bold text-neutral-900">
          Coś poszło nie tak / Etwas ist schiefgelaufen / Something went wrong
        </h1>
        <p className="mb-8 text-neutral-600">
          Przepraszamy za niedogodności. / Wir entschuldigen uns für die Unannehmlichkeiten. / We apologize for the inconvenience.
        </p>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-6 py-3 text-white transition-colors hover:bg-red-700"
          >
            <RefreshCw className="size-5" />
            Spróbuj ponownie / Erneut versuchen / Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-neutral-200 bg-white px-6 py-3 text-neutral-700 transition-colors hover:bg-neutral-50"
          >
            <Home className="size-5" />
            Strona główna / Startseite / Home
          </Link>
        </div>
      </div>
    </div>
  );
}
