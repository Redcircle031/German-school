import { getTranslations } from 'next-intl/server';
import { getAllArticles, getAllPdfs } from '@/lib/cms';
import { FileText, Download, Calendar, Users, TrendingUp, Settings } from 'lucide-react';
import Link from 'next/link';

export default async function AdminDashboardPage() {
  const articles = getAllArticles('pl');
  const pdfs = getAllPdfs();

  // Get recent articles
  const recentArticles = articles.slice(0, 5);

  // Stats
  const stats = [
    {
      name: 'Total Articles',
      value: articles.length,
      icon: FileText,
      change: '+12%',
      changeType: 'positive',
    },
    {
      name: 'PDF Documents',
      value: pdfs.length,
      icon: Download,
      change: '+3',
      changeType: 'positive',
    },
    {
      name: 'Categories',
      value: new Set(articles.map(a => a.category)).size,
      icon: Calendar,
      change: 'Stable',
      changeType: 'neutral',
    },
    {
      name: 'Total Size',
      value: `${(pdfs.reduce((sum, pdf) => sum + pdf.size, 0) / (1024 * 1024)).toFixed(1)} MB`,
      icon: TrendingUp,
      change: '+2.1 MB',
      changeType: 'neutral',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-neutral-900">Dashboard</h1>
        <p className="mt-2 text-neutral-600">
          Welcome to the WBS content management system
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.name} className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-neutral-600">{stat.name}</p>
                <p className="mt-2 text-3xl font-bold text-neutral-900">{stat.value}</p>
              </div>
              <div className="flex size-12 items-center justify-center rounded-lg bg-red-50">
                <stat.icon className="size-6 text-red-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <span className={`text-sm font-medium ${
                stat.changeType === 'positive' ? 'text-green-600' : 'text-neutral-600'
              }`}>
                {stat.change}
              </span>
              <span className="text-sm text-neutral-500">from last month</span>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Articles */}
      <div className="rounded-xl border border-neutral-200 bg-white shadow-sm">
        <div className="flex items-center justify-between border-b border-neutral-200 p-6">
          <div>
            <h2 className="text-lg font-semibold text-neutral-900">Recent Articles</h2>
            <p className="mt-1 text-sm text-neutral-600">Latest content added to the system</p>
          </div>
          <Link
            href="/admin/articles"
            className="text-sm font-medium text-red-600 hover:text-red-700"
          >
            View all →
          </Link>
        </div>

        <div className="divide-y divide-neutral-200">
          {recentArticles.length > 0 ? (
            recentArticles.map((article) => (
              <div key={article.slug} className="p-6 transition-colors hover:bg-neutral-50">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0 flex-1">
                    <div className="mb-2 flex items-center gap-3">
                      <span className="rounded-full bg-red-50 px-2.5 py-0.5 text-xs font-medium text-red-700">
                        {article.category}
                      </span>
                      <span className="text-sm text-neutral-500">{article.date}</span>
                    </div>
                    <h3 className="truncate text-lg font-semibold text-neutral-900">
                      {article.title}
                    </h3>
                    <p className="mt-1 line-clamp-2 text-sm text-neutral-600">
                      {article.excerpt}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="text-sm text-neutral-500">Languages</div>
                      <div className="text-lg font-semibold text-neutral-900">3</div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="p-12 text-center">
              <FileText className="mx-auto mb-4 size-12 text-neutral-300" />
              <p className="text-neutral-600">No articles yet</p>
            </div>
          )}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid gap-6 md:grid-cols-3">
        <Link
          href="/admin/articles"
          className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
        >
          <FileText className="mb-4 size-8 text-red-600" />
          <h3 className="text-lg font-semibold text-neutral-900">Manage Articles</h3>
          <p className="mt-2 text-sm text-neutral-600">
            Add, edit, or delete articles and news
          </p>
        </Link>

        <Link
          href="/admin/downloads"
          className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
        >
          <Download className="mb-4 size-8 text-red-600" />
          <h3 className="text-lg font-semibold text-neutral-900">Manage Downloads</h3>
          <p className="mt-2 text-sm text-neutral-600">
            Upload and organize PDF documents
          </p>
        </Link>

        <Link
          href="/admin/settings"
          className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
        >
          <Settings className="mb-4 size-8 text-red-600" />
          <h3 className="text-lg font-semibold text-neutral-900">Settings</h3>
          <p className="mt-2 text-sm text-neutral-600">
            Configure system settings and preferences
          </p>
        </Link>
      </div>
    </div>
  );
}
