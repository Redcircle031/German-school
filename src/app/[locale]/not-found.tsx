import Link from 'next/link';
import { Home } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-neutral-50 py-20">
      <div className="container-custom max-w-2xl text-center">
        <div className="mb-8 text-9xl font-bold text-red-200">404</div>
        <h1 className="mb-4 text-4xl font-bold text-neutral-900">
          Strona nie znaleziona / Seite nicht gefunden / Page Not Found
        </h1>
        <p className="mb-8 text-xl text-neutral-600">
          Przepraszamy, ta strona nie istnieje. / Diese Seite existiert leider nicht. / Sorry, this page does not exist.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-6 py-3 text-white hover:bg-red-700"
          >
            <Home className="size-5" />
            Strona główna / Startseite / Home
          </Link>
        </div>
      </div>
    </div>
  );
}
