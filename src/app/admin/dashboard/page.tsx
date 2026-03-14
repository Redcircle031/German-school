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
        <p className="text-neutral-600 mt-2">
          Welcome to the WBS content management system
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white rounded-xl p-6 border border-neutral-200 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-neutral-600">{stat.name}</p>
                <p className="text-3xl font-bold text-neutral-900 mt-2">{stat.value}</p>
              </div>
              <div className="w-12 h-12 bg-secondary-50 rounded-lg flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-secondary-600" />
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
      <div className="bg-white rounded-xl border border-neutral-200 shadow-sm">
        <div className="p-6 border-b border-neutral-200 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-neutral-900">Recent Articles</h2>
            <p className="text-sm text-neutral-600 mt-1">Latest content added to the system</p>
          </div>
          <Link
            href="/admin/articles"
            className="text-sm font-medium text-secondary-600 hover:text-secondary-700"
          >
            View all →
          </Link>
        </div>

        <div className="divide-y divide-neutral-200">
          {recentArticles.length > 0 ? (
            recentArticles.map((article) => (
              <div key={article.slug} className="p-6 hover:bg-neutral-50 transition-colors">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-2.5 py-0.5 bg-secondary-50 text-secondary-700 text-xs font-medium rounded-full">
                        {article.category}
                      </span>
                      <span className="text-sm text-neutral-500">{article.date}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-neutral-900 truncate">
                      {article.title}
                    </h3>
                    <p className="text-sm text-neutral-600 mt-1 line-clamp-2">
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
              <FileText className="w-12 h-12 text-neutral-300 mx-auto mb-4" />
              <p className="text-neutral-600">No articles yet</p>
            </div>
          )}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-3 gap-6">
        <Link
          href="/admin/articles"
          className="bg-white rounded-xl p-6 border border-neutral-200 shadow-sm hover:shadow-md transition-shadow"
        >
          <FileText className="w-8 h-8 text-secondary-600 mb-4" />
          <h3 className="text-lg font-semibold text-neutral-900">Manage Articles</h3>
          <p className="text-neutral-600 mt-2 text-sm">
            Add, edit, or delete articles and news
          </p>
        </Link>

        <Link
          href="/admin/downloads"
          className="bg-white rounded-xl p-6 border border-neutral-200 shadow-sm hover:shadow-md transition-shadow"
        >
          <Download className="w-8 h-8 text-secondary-600 mb-4" />
          <h3 className="text-lg font-semibold text-neutral-900">Manage Downloads</h3>
          <p className="text-neutral-600 mt-2 text-sm">
            Upload and organize PDF documents
          </p>
        </Link>

        <Link
          href="/admin/settings"
          className="bg-white rounded-xl p-6 border border-neutral-200 shadow-sm hover:shadow-md transition-shadow"
        >
          <Settings className="w-8 h-8 text-secondary-600 mb-4" />
          <h3 className="text-lg font-semibold text-neutral-900">Settings</h3>
          <p className="text-neutral-600 mt-2 text-sm">
            Configure system settings and preferences
          </p>
        </Link>
      </div>
    </div>
  );
}
