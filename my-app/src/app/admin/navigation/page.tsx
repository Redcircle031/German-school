'use client';

import { useState } from 'react';
import { 
  Plus, 
  GripVertical, 
  Edit2, 
  Trash2,
  ChevronRight,
  ChevronDown,
  Globe
} from 'lucide-react';

interface NavItem {
  id: number;
  label_pl: string;
  label_de?: string;
  label_en?: string;
  url: string;
  parent_id: number | null;
  sort_order: number;
  is_active: boolean;
  children?: NavItem[];
}

const mockNavigation: NavItem[] = [
  { 
    id: 1, 
    label_pl: 'Strona główna', 
    label_de: 'Startseite',
    url: '/', 
    parent_id: null, 
    sort_order: 1, 
    is_active: true 
  },
  { 
    id: 2, 
    label_pl: 'O szkole', 
    label_de: 'Über die Schule',
    url: '/o-szkole', 
    parent_id: null, 
    sort_order: 2, 
    is_active: true,
    children: [
      { id: 5, label_pl: 'Historia', url: '/o-szkole/historia', parent_id: 2, sort_order: 1, is_active: true },
      { id: 6, label_pl: 'Patron', url: '/o-szkole/patron', parent_id: 2, sort_order: 2, is_active: true },
      { id: 7, label_pl: 'Kadra', url: '/o-szkole/kadra', parent_id: 2, sort_order: 3, is_active: true },
    ]
  },
  { 
    id: 3, 
    label_pl: 'Aktualności', 
    label_de: 'Aktuelles',
    url: '/aktualnosci', 
    parent_id: null, 
    sort_order: 3, 
    is_active: true 
  },
  { 
    id: 4, 
    label_pl: 'Kontakt', 
    label_de: 'Kontakt',
    url: '/kontakt', 
    parent_id: null, 
    sort_order: 4, 
    is_active: true 
  },
];

export default function NavigationPage() {
  const [items, setItems] = useState<NavItem[]>(mockNavigation);
  const [expandedItems, setExpandedItems] = useState<number[]>([2]);
  const [editingItem, setEditingItem] = useState<NavItem | null>(null);
  const [activeLang, setActiveLang] = useState<'pl' | 'de' | 'en'>('pl');

  const toggleExpand = (id: number) => {
    setExpandedItems(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const handleSave = (item: NavItem) => {
    // In real app, save to API
    console.log('Saving:', item);
    setEditingItem(null);
  };

  const renderNavItem = (item: NavItem, level = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedItems.includes(item.id);
    const label = item[`label_${activeLang}` as keyof NavItem] as string || item.label_pl;

    return (
      <div key={item.id}>
        <div 
          className={`flex items-center gap-2 p-3 hover:bg-gray-50 border-b border-gray-100 ${
            level > 0 ? 'pl-' + (12 + level * 4) : ''
          }`}
          style={{ paddingLeft: level > 0 ? `${48 + level * 24}px` : undefined }}
        >
          <GripVertical className="h-5 w-5 text-gray-400 cursor-move" />
          
          {hasChildren && (
            <button 
              onClick={() => toggleExpand(item.id)}
              className="p-1 hover:bg-gray-200 rounded"
            >
              {isExpanded ? (
                <ChevronDown className="h-4 w-4 text-gray-600" />
              ) : (
                <ChevronRight className="h-4 w-4 text-gray-600" />
              )}
            </button>
          )}
          
          {!hasChildren && <div className="w-6" />}
          
          <span className="flex-1 font-medium text-gray-900">
            {label}
          </span>
          
          <code className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
            {item.url}
          </code>
          
          <span className={`text-xs px-2 py-1 rounded ${
            item.is_active 
              ? 'bg-green-100 text-green-800' 
              : 'bg-gray-100 text-gray-800'
          }`}>
            {item.is_active ? 'Aktywny' : 'Nieaktywny'}
          </span>
          
          <button 
            onClick={() => setEditingItem(item)}
            className="p-2 text-gray-400 hover:text-blue-600"
          >
            <Edit2 className="h-4 w-4" />
          </button>
          
          <button className="p-2 text-gray-400 hover:text-red-600">
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
        
        {hasChildren && isExpanded && item.children?.map(child => renderNavItem(child, level + 1))}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Nawigacja</h1>
          <p className="mt-1 text-sm text-gray-500">
            Zarządzaj menu głównym strony
          </p>
        </div>
        <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
          <Plus className="h-4 w-4 mr-2" />
          Dodaj pozycję
        </button>
      </div>

      {/* Language Selector */}
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="flex items-center gap-2">
          <Globe className="h-5 w-5 text-gray-400" />
          <span className="text-sm font-medium text-gray-700">Język podglądu:</span>
          <select
            value={activeLang}
            onChange={(e) => setActiveLang(e.target.value as 'pl' | 'de' | 'en')}
            className="ml-2 block w-40 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
          >
            <option value="pl">Polski</option>
            <option value="de">Niemiecki</option>
            <option value="en">Angielski</option>
          </select>
        </div>
      </div>

      {/* Navigation Tree */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="p-4 bg-gray-50 border-b border-gray-200">
          <div className="flex items-center text-sm text-gray-500">
            <span className="w-8" />
            <span className="flex-1 font-medium">Nazwa</span>
            <span className="w-32 text-center">URL</span>
            <span className="w-24 text-center">Status</span>
            <span className="w-20 text-center">Akcje</span>
          </div>
        </div>
        <div>
          {items.map(item => renderNavItem(item))}
        </div>
      </div>

      {/* Edit Modal (simplified) */}
      {editingItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-lg">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Edytuj pozycję menu
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Nazwa (PL)</label>
                <input
                  type="text"
                  defaultValue={editingItem.label_pl}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Nazwa (DE)</label>
                <input
                  type="text"
                  defaultValue={editingItem.label_de}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">URL</label>
                <input
                  type="text"
                  defaultValue={editingItem.url}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  defaultChecked={editingItem.is_active}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label className="text-sm text-gray-700">Aktywny</label>
              </div>
            </div>
            <div className="mt-6 flex justify-end gap-3">
              <button
                onClick={() => setEditingItem(null)}
                className="px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-50"
              >
                Anuluj
              </button>
              <button
                onClick={() => handleSave(editingItem)}
                className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Zapisz
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
