import type { Metadata } from 'next';
import { Providers } from './providers';
import { AdminHeader } from './components/AdminHeader';
import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'WBS CMS - Admin Panel',
  description: 'Content Management System for WBS School',
};

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session) {
    redirect('/admin/login');
  }

  return (
    <Providers>
      <div className="min-h-screen bg-gray-50">
        <AdminHeader user={session.user} />
        <main className="py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>
    </Providers>
  );
}
