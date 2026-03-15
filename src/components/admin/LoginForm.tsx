'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Lock, Mail, Loader2 } from 'lucide-react';

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        router.push('/admin/dashboard');
        router.refresh();
      } else {
        const data = await response.json();
        setError(data.message || 'Login failed');
      }
    } catch {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-red-600 via-red-700 to-red-800 p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-4xl font-bold text-white">WBS Admin</h1>
          <p className="text-red-100">
            Polsko-Niemiecka Szkoła Spotkań i Dialogu
          </p>
        </div>

        {/* Login Form */}
        <div className="rounded-2xl bg-white p-8 shadow-xl">
          <h2 className="mb-6 text-center text-2xl font-bold text-neutral-900">
            Sign In
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-neutral-700">
                Email
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <Mail className="size-5 text-neutral-400" />
                </div>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="block w-full rounded-lg border border-neutral-300 py-3 pl-10 pr-3 transition-colors focus:border-transparent focus:ring-2 focus:ring-red-600"
                  placeholder="admin@wbs.pl"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="mb-2 block text-sm font-medium text-neutral-700">
                Password
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <Lock className="size-5 text-neutral-400" />
                </div>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="block w-full rounded-lg border border-neutral-300 py-3 pl-10 pr-3 transition-colors focus:border-transparent focus:ring-2 focus:ring-red-600"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                {error}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-red-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading && <Loader2 className="size-5 animate-spin" />}
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

        </div>

        {/* Back to Site */}
        <div className="mt-6 text-center">
          <a
            href="/"
            className="text-sm font-medium text-red-100 transition-colors hover:text-white"
          >
            ← Back to Website
          </a>
        </div>
      </div>
    </div>
  );
}
