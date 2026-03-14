'use client';

import { useState } from 'react';
import { 
  Plus, 
  Search, 
  Filter,
  Edit,
  Trash2,
  Eye,
  MoreHorizontal,
  FileText
} from 'lucide-react';

interface Article {
  id: number;
  title_pl: string;
  title_de?: string;
  title_en?: string;
  category: string;
  status: 'draft' | 'published' | 'archived';
  publish_date: string;
  author: string;
}

// Mock data - in real app, fetch from API
const mockArticles: Article[] = [
  { 
    id: 1, 
    title_pl: 'Kolejna radiowa przygoda naszych uczniów',
    title_de: 'Ein weiteres Radioabenteuer unserer Schüler',
    category: 'Aktualności',
    status: 'published',
    publish_date: '2026-02-09',
    author: 'Admin'
  },
  { 
    id: 2, 
    title_pl: 'Sukces uczniów WBS w konkursie chemicznym',
    category: 'Osiągnięcia',
    status: 'published',
    publish_date: '2026-02-10',
    author: 'Admin'
  },
  { 
    id: 3, 
    title_pl: '🐾 Koty z Promyka – pomagamy i uczymy się',
    category: 'Aktualności',
    status: 'draft',
    publish_date: '2026-02-11',
    author: 'Admin'
  },
  { 
    id: 4, 
    title_pl: 'Warsztaty z niemieckiego dla klas ósmych',
    category: 'Wydarzenia',
    status: 'published',
    publish_date: '2026-02-08',
    author: 'Admin'
  },
];

export default function ArticlesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');

  const filteredArticles = mockArticles.filter(article => {
    const matchesSearch = article.title_pl.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || article.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'published':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            Opublikowany
          </span>
        );
      case 'draft':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
            Wersja robocza
          </span>
        );
      case 'archived':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
            Zarchiwizowany
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Artykuły</h1>
          <p className="mt-1 text-sm text-gray-500">
            Zarządzaj treściami strony (203 artykułów)
          </p>
        </div>
        <a
          href="/admin/articles/new"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
        >
          <Plus className="h-4 w-4 mr-2" />
          Nowy artykuł
        </a>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Szukaj artykułów..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="block w-full sm:w-48 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
          >
            <option value="all">Wszystkie statusy</option>
            <option value="published">Opublikowane</option>
            <option value="draft">Wersje robocze</option>
            <option value="archived">Zarchiwizowane</option>
          </select>
        </div>
      </div>

      {/* Articles Table */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Tytuł
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Kategoria
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Data publikacji
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Akcje
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredArticles.map((article) => (
              <tr key={article.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div>
                    <div className="text-sm font-medium text-gray-900">
                      {article.title_pl}
                    </div>
                    {article.title_de && (
                      <div className="text-xs text-gray-500 mt-0.5">
                        DE: {article.title_de}
                      </div>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {article.category}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {getStatusBadge(article.status)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {article.publish_date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex items-center justify-end space-x-2">
                    <button className="text-gray-400 hover:text-blue-600 p-1">
                      <Eye className="h-4 w-4" />
                    </button>
                    <a 
                      href={`/admin/articles/${article.id}/edit`}
                      className="text-gray-400 hover:text-green-600 p-1"
                    >
                      <Edit className="h-4 w-4" />
                    </a>
                    <button className="text-gray-400 hover:text-red-600 p-1">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <FileText className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-medium text-gray-900">Nie znaleziono artykułów</h3>
            <p className="mt-1 text-sm text-gray-500">
              Spróbuj zmienić kryteria wyszukiwania
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
