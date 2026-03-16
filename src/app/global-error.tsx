'use client';

import { useEffect } from 'react';

export default function GlobalError({
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
    <html lang="en" suppressHydrationWarning>
      <body>
        <div className="flex min-h-screen items-center justify-center bg-neutral-50 py-20">
          <div className="max-w-2xl px-4 text-center">
            <div className="mx-auto mb-6 flex size-20 items-center justify-center rounded-full bg-red-100">
              <span className="text-4xl">⚠️</span>
            </div>
            <h1 className="mb-4 text-3xl font-bold text-neutral-900">
              Something went wrong!
            </h1>
            <p className="mb-8 text-neutral-600">
              We apologize for the inconvenience. Please try again or contact support if the problem persists.
            </p>
            <button
              onClick={reset}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-6 py-3 text-white transition-colors hover:bg-red-700"
            >
              Try Again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
