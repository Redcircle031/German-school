'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { 
  Save, 
  Eye, 
  Globe, 
  Image as ImageIcon,
  ArrowLeft,
  Loader2
} from 'lucide-react';
import { TipTapEditor } from '@/app/admin/components/TipTapEditor';

interface Article {
  id: string;
  slug: string;
  title_pl: string;
  title_de?: string;
  title_en?: string;
  content_pl: string;
  content_de?: string;
  content_en?: string;
  excerpt_pl?: string;
  excerpt_de?: string;
  excerpt_en?: string;
  category_id?: string;
  status: 'draft' | 'published' | 'archived';
  publish_date?: string;
  seo_title?: string;
  seo_description?: string;
  keywords?: string;
}

export default function ArticleEditPage() {
  const params = useParams();
  const router = useRouter();
  const isNew = params.id === 'new';
  
  const [activeTab, setActiveTab] = useState<'pl' | 'de' | 'en'>('pl');
  const [isLoading, setIsLoading] = useState(!isNew);
  const [isSaving, setIsSaving] = useState(false);
  const [article, setArticle] = useState<Article>({
    id: '',
    slug: '',
    title_pl: '',
    content_pl: '',
    status: 'draft',
    publish_date: new Date().toISOString().split('T')[0],
  });

  useEffect(() => {
    if (!isNew && params.id) {
      fetchArticle(params.id as string);
    }
  }, [isNew, params.id]);

  const fetchArticle = async (id: string) => {
    try {
      const response = await fetch(`/api/articles/${id}`);
      if (response.ok) {
        const data = await response.json();
        setArticle(data);
      }
    } catch (error) {
      console.error('Failed to fetch article:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = async (status: 'draft' | 'published') => {
    setIsSaving(true);
    try {
      const url = isNew ? '/api/articles' : `/api/articles/${params.id}`;
      const method = isNew ? 'POST' : 'PUT';
      
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...article, status }),
      });

      if (response.ok) {
        const data = await response.json();
        router.push('/admin/articles');
      } else {
        console.error('Failed to save article');
      }
    } catch (error) {
      console.error('Failed to save article:', error);
    } finally {
      setIsSaving(false);
    }
  };

  const inputClasses = "mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm";
  const labelClasses = "block text-sm font-medium text-gray-700";

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-4">
          <button
            onClick={() => router.push('/admin/articles')}
            className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              {isNew ? 'Nowy artykuł' : 'Edytuj artykuł'}
            </h1>
            <p className="mt-1 text-sm text-gray-500">
              {isNew ? 'Utwórz nowy artykuł wielojęzyczny' : 'Edytuj istniejący artykuł'}
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => handleSave('draft')}
            disabled={isSaving}
            className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
          >
            {isSaving ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : <Save className="h-4 w-4 mr-2" />}
            Zapisz wersję roboczą
          </button>
          <button
            onClick={() => handleSave('published')}
            disabled={isSaving}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50"
          >
            {isSaving ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : <Eye className="h-4 w-4 mr-2" />}
            Opublikuj
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Language Tabs */}
          <div className="bg-white shadow rounded-lg">
            <div className="border-b border-gray-200">
              <nav className="flex -mb-px">
                {(['pl', 'de', 'en'] as const).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setActiveTab(lang)}
                    className={`py-4 px-6 text-sm font-medium border-b-2 ${
                      activeTab === lang
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <Globe className="h-4 w-4 inline mr-2" />
                    {lang === 'pl' ? 'Polski' : lang === 'de' ? 'Niemiecki' : 'Angielski'}
                  </button>
                ))}
              </nav>
            </div>

            <div className="p-6 space-y-6">
              {/* Title */}
              <div>
                <label className={labelClasses}>
                  Tytuł ({activeTab === 'pl' ? 'PL' : activeTab === 'de' ? 'DE' : 'EN'})
                </label>
                <input
                  type="text"
                  value={article[`title_${activeTab}` as keyof Article] as string || ''}
                  onChange={(e) => setArticle({ ...article, [`title_${activeTab}`]: e.target.value })}
                  className={inputClasses}
                  placeholder="Wpisz tytuł artykułu..."
                />
              </div>

              {/* Content Editor */}
              <div>
                <label className={labelClasses}>
                  Treść ({activeTab === 'pl' ? 'PL' : activeTab === 'de' ? 'DE' : 'EN'})
                </label>
                <div className="mt-1">
                  <TipTapEditor
                    content={article[`content_${activeTab}` as keyof Article] as string || ''}
                    onChange={(content) => setArticle({ ...article, [`content_${activeTab}`]: content })}
                    placeholder="Wpisz treść artykułu..."
                  />
                </div>
              </div>

              {/* Excerpt */}
              <div>
                <label className={labelClasses}>
                  Wstęp / Streszczenie
                </label>
                <textarea
                  value={article[`excerpt_${activeTab}` as keyof Article] as string || ''}
                  onChange={(e) => setArticle({ ...article, [`excerpt_${activeTab}`]: e.target.value })}
                  rows={3}
                  className={inputClasses}
                  placeholder="Krótkie streszczenie artykułu..."
                />
              </div>
            </div>
          </div>

          {/* SEO Section */}
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">SEO</h3>
            <div className="space-y-4">
              <div>
                <label className={labelClasses}>Tytuł SEO</label>
                <input
                  type="text"
                  value={article.seo_title || ''}
                  onChange={(e) => setArticle({ ...article, seo_title: e.target.value })}
                  className={inputClasses}
                  placeholder="Tytuł dla wyszukiwarek (max 70 znaków)"
                />
              </div>
              <div>
                <label className={labelClasses}>Opis SEO</label>
                <textarea
                  value={article.seo_description || ''}
                  onChange={(e) => setArticle({ ...article, seo_description: e.target.value })}
                  rows={2}
                  className={inputClasses}
                  placeholder="Opis dla wyszukiwarek (max 160 znaków)"
                />
              </div>
              <div>
                <label className={labelClasses}>Słowa kluczowe</label>
                <input
                  type="text"
                  value={article.keywords || ''}
                  onChange={(e) => setArticle({ ...article, keywords: e.target.value })}
                  className={inputClasses}
                  placeholder="Słowa kluczowe oddzielone przecinkami"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Publishing */}
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Publikacja</h3>
            <div className="space-y-4">
              <div>
                <label className={labelClasses}>Status</label>
                <select
                  value={article.status}
                  onChange={(e) => setArticle({ ...article, status: e.target.value as any })}
                  className={inputClasses}
                >
                  <option value="draft">Wersja robocza</option>
                  <option value="published">Opublikowany</option>
                  <option value="archived">Zarchiwizowany</option>
                </select>
              </div>
              <div>
                <label className={labelClasses}>Data publikacji</label>
                <input
                  type="date"
                  value={article.publish_date || ''}
                  onChange={(e) => setArticle({ ...article, publish_date: e.target.value })}
                  className={inputClasses}
                />
              </div>
              <div>
                <label className={labelClasses}>Kategoria</label>
                <select
                  value={article.category_id || ''}
                  onChange={(e) => setArticle({ ...article, category_id: e.target.value })}
                  className={inputClasses}
                >
                  <option value="">Wybierz kategorię...</option>
                  <option value="1">Aktualności</option>
                  <option value="2">Osiągnięcia</option>
                  <option value="3">Wydarzenia</option>
                  <option value="4">Ogłoszenia</option>
                </select>
              </div>
            </div>
          </div>

          {/* Media Gallery */}
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Galeria</h3>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <ImageIcon className="mx-auto h-12 w-12 text-gray-400" />
              <p className="mt-2 text-sm text-gray-500">
                Przeciągnij zdjęcia lub{' '}
                <button className="text-blue-600 hover:text-blue-500">
                  wybierz pliki
                </button>
              </p>
              <p className="text-xs text-gray-400 mt-1">
                PNG, JPG, GIF, WebP do 5MB
              </p>
            </div>
          </div>

          {/* Featured Image */}
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Zdjęcie główne</h3>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <ImageIcon className="mx-auto h-12 w-12 text-gray-400" />
              <button className="mt-2 text-sm text-blue-600 hover:text-blue-500">
                Wybierz zdjęcie główne
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
