'use client';

import { useState } from 'react';
import { 
  Upload, 
  Search, 
  Grid, 
  List, 
  MoreVertical,
  Copy,
  Trash2,
  Image as ImageIcon
} from 'lucide-react';

interface MediaItem {
  id: number;
  filename: string;
  url: string;
  size: string;
  type: string;
  uploaded_at: string;
  article_title?: string;
}

const mockMedia: MediaItem[] = [
  { id: 1, filename: 'radio-wbs-2026.jpg', url: '/images/radio-wbs-2026.jpg', size: '245 KB', type: 'image/jpeg', uploaded_at: '2026-02-09', article_title: 'Kolejna radiowa przygoda' },
  { id: 2, filename: 'chemia-konkurs.jpg', url: '/images/chemia-konkurs.jpg', size: '189 KB', type: 'image/jpeg', uploaded_at: '2026-02-10', article_title: 'Sukces w konkursie chemicznym' },
  { id: 3, filename: 'koty-promyk.jpg', url: '/images/koty-promyk.jpg', size: '312 KB', type: 'image/jpeg', uploaded_at: '2026-02-11' },
  { id: 4, filename: 'warsztaty-niemiecki.pdf', url: '/docs/warsztaty-niemiecki.pdf', size: '1.2 MB', type: 'application/pdf', uploaded_at: '2026-02-08' },
];

export default function MediaPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const filteredMedia = mockMedia.filter(item => 
    item.filename.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleSelection = (id: number) => {
    setSelectedItems(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Media</h1>
          <p className="mt-1 text-sm text-gray-500">
            Zarządzaj zdjęciami i dokumentami (1,295 plików)
          </p>
        </div>
        <label className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 cursor-pointer">
          <Upload className="h-4 w-4 mr-2" />
          Prześlij pliki
          <input type="file" multiple className="hidden" />
        </label>
      </div>

      {/* Toolbar */}
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Szukaj plików..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div className="flex items-center gap-2">
            {selectedItems.length > 0 && (
              <span className="text-sm text-gray-500">
                {selectedItems.length} zaznaczone
              </span>
            )}
            <div className="flex rounded-md shadow-sm">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-3 py-2 text-sm font-medium rounded-l-md border ${
                  viewMode === 'grid'
                    ? 'bg-blue-50 text-blue-600 border-blue-200'
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                }`}
              >
                <Grid className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-3 py-2 text-sm font-medium rounded-r-md border-t border-r border-b ${
                  viewMode === 'list'
                    ? 'bg-blue-50 text-blue-600 border-blue-200'
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                }`}
              >
                <List className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Media Grid */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredMedia.map((item) => (
            <div
              key={item.id}
              className={`relative group bg-white rounded-lg shadow overflow-hidden border-2 ${
                selectedItems.includes(item.id) ? 'border-blue-500' : 'border-transparent'
              }`}
            >
              <div
                className="aspect-square bg-gray-100 flex items-center justify-center cursor-pointer"
                onClick={() => toggleSelection(item.id)}
              >
                {item.type.startsWith('image/') ? (
                  <ImageIcon className="h-12 w-12 text-gray-400" />
                ) : (
                  <div className="text-center">
                    <span className="text-3xl">📄</span>
                    <p className="text-xs text-gray-500 mt-1">PDF</p>
                  </div>
                )}
              </div>
              <div className="p-3">
                <p className="text-sm font-medium text-gray-900 truncate">
                  {item.filename}
                </p>
                <p className="text-xs text-gray-500">{item.size}</p>
              </div>
              {/* Hover Actions */}
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-1 bg-white rounded shadow hover:bg-gray-100">
                  <MoreVertical className="h-4 w-4 text-gray-600" />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Plik
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Rozmiar
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Artykuł
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Data
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Akcje
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredMedia.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      {item.type.startsWith('image/') ? (
                        <ImageIcon className="h-8 w-8 text-gray-400" />
                      ) : (
                        <span className="text-2xl">📄</span>
                      )}
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">{item.filename}</p>
                        <p className="text-xs text-gray-500">{item.type}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.size}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.article_title || '-'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.uploaded_at}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-gray-400 hover:text-blue-600 p-1 mr-2">
                      <Copy className="h-4 w-4" />
                    </button>
                    <button className="text-gray-400 hover:text-red-600 p-1">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
