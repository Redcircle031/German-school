import { 
  FileText, 
  Image as ImageIcon, 
  Users, 
  Eye,
  TrendingUp,
  Clock
} from 'lucide-react';

export default function DashboardPage() {
  // Mock stats - in real app, fetch from API
  const stats = [
    { name: 'Wszystkie artykuły', value: '203', icon: FileText, color: 'bg-blue-500' },
    { name: 'Opublikowane', value: '189', icon: Eye, color: 'bg-green-500' },
    { name: 'Zdjęcia', value: '1,258', icon: ImageIcon, color: 'bg-purple-500' },
    { name: 'Użytkownicy', value: '5', icon: Users, color: 'bg-orange-500' },
  ];

  const recentArticles = [
    { id: 1, title: 'Kolejna radiowa przygoda naszych uczniów', date: '2026-02-09', status: 'published' },
    { id: 2, title: 'Sukces uczniów WBS w konkursie chemicznym', date: '2026-02-10', status: 'published' },
    { id: 3, title: '🐾 Koty z Promyka – pomagamy i uczymy się', date: '2026-02-11', status: 'draft' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-1 text-sm text-gray-500">
          Witaj w panelu administracyjnym WBS
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="bg-white overflow-hidden shadow rounded-lg"
          >
            <div className="p-5">
              <div className="flex items-center">
                <div className={`flex-shrink-0 rounded-md p-3 ${stat.color}`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      {stat.name}
                    </dt>
                    <dd className="text-2xl font-semibold text-gray-900">
                      {stat.value}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Articles */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Ostatnie artykuły
            </h3>
          </div>
          <div className="divide-y divide-gray-200">
            {recentArticles.map((article) => (
              <div key={article.id} className="px-4 py-4 sm:px-6 hover:bg-gray-50">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-blue-900 truncate">
                    {article.title}
                  </p>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    article.status === 'published' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {article.status === 'published' ? 'Opublikowany' : 'Wersja robocza'}
                  </span>
                </div>
                <div className="mt-2 text-sm text-gray-500">
                  {article.date}
                </div>
              </div>
            ))}
          </div>
          <div className="px-4 py-4 sm:px-6 border-t border-gray-200">
            <a href="/admin/articles" className="text-sm text-blue-600 hover:text-blue-900">
              Zobacz wszystkie artykuły →
            </a>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Szybkie akcje
            </h3>
          </div>
          <div className="p-4 space-y-3">
            <a
              href="/admin/articles/new"
              className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <FileText className="h-6 w-6 text-blue-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-blue-900">Nowy artykuł</p>
                <p className="text-xs text-blue-700">Dodaj nowy wpis na stronę</p>
              </div>
            </a>
            <a
              href="/admin/media"
              className="flex items-center p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
            >
              <ImageIcon className="h-6 w-6 text-purple-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-purple-900">Prześlij zdjęcia</p>
                <p className="text-xs text-purple-700">Dodaj zdjęcia do galerii</p>
              </div>
            </a>
            <a
              href="/admin/navigation"
              className="flex items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
            >
              <TrendingUp className="h-6 w-6 text-green-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-green-900">Edytuj menu</p>
                <p className="text-xs text-green-700">Zmień strukturę nawigacji</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
