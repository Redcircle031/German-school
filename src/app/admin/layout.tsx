import { isAuthenticated } from '@/lib/auth';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { LayoutDashboard, FileText, Download, Users, Settings, LogOut, Menu } from 'lucide-react';

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default async function AdminLayout({ children }: AdminLayoutProps) {
  const authenticated = await isAuthenticated();

  if (!authenticated) {
    redirect('/admin/login');
  }

  const navigation = [
    { name: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
    { name: 'Articles', href: '/admin/articles', icon: FileText },
    { name: 'Downloads', href: '/admin/downloads', icon: Download },
    { name: 'Users', href: '/admin/users', icon: Users },
    { name: 'Settings', href: '/admin/settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 z-50 w-64 bg-neutral-900 text-white">
        {/* Logo */}
        <div className="flex h-16 items-center border-b border-neutral-800 px-6">
          <h1 className="text-xl font-bold">WBS Admin</h1>
        </div>

        {/* Navigation */}
        <nav className="space-y-1 p-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center gap-3 rounded-lg px-4 py-3 text-neutral-300 transition-colors hover:bg-neutral-800 hover:text-white"
            >
              <item.icon className="size-5" />
              <span className="font-medium">{item.name}</span>
            </Link>
          ))}
        </nav>

        {/* Logout */}
        <div className="absolute inset-x-0 bottom-0 border-t border-neutral-800 p-4">
          <form action="/api/admin/logout" method="POST">
            <button
              type="submit"
              className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-neutral-300 transition-colors hover:bg-neutral-800 hover:text-white"
            >
              <LogOut className="size-5" />
              <span className="font-medium">Logout</span>
            </button>
          </form>
        </div>
      </aside>

      {/* Main Content */}
      <div className="ml-64">
        {/* Top Bar */}
        <header className="flex h-16 items-center justify-between border-b border-neutral-200 bg-white px-8">
          <h2 className="text-lg font-semibold text-neutral-900">Admin Dashboard</h2>
          <div className="flex items-center gap-4">
            <span className="text-sm text-neutral-600">admin@wbs.pl</span>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
