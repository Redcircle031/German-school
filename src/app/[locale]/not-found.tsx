import Link from 'next/link';
import { Home, Search } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50 py-20">
      <div className="container-custom max-w-2xl text-center">
        <div className="text-9xl font-bold text-primary-200 mb-8">404</div>
        <h1 className="text-4xl font-bold text-neutral-900 mb-4">Page Not Found</h1>
        <p className="text-xl text-neutral-600 mb-8">Sorry, the page you are looking for does not exist.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700">
            <Home className="w-5 h-5" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
