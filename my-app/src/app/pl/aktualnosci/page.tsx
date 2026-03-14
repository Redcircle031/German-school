import { prisma } from '@/lib/prisma'
import Link from 'next/link'
import { format } from 'date-fns'
import { pl } from 'date-fns/locale'
import { Calendar, ChevronRight, Newspaper } from 'lucide-react'
import { LanguageSwitcher } from '@/app/components/LanguageSwitcher'

export const metadata = {
  title: 'Aktualności - WBS School',
  description: 'Najnowsze wiadomości i informacje ze szkoły WBS',
}

export const revalidate = 60

async function getArticles() {
  const articles = await prisma.article.findMany({
    where: {
      status: 'PUBLISHED',
      publishedAt: {
        lte: new Date(),
      },
    },
    include: {
      category: true,
      featuredImage: true,
      author: {
        select: {
          name: true,
        },
      },
    },
    orderBy: {
      publishedAt: 'desc',
    },
    take: 20,
  })

  return articles
}

async function getArchiveYears() {
  const articles = await prisma.article.findMany({
    where: {
      status: 'PUBLISHED',
    },
    select: {
      publishedAt: true,
    },
    distinct: ['publishedAt'],
  })

  const years = new Set<number>()
  articles.forEach(article => {
    if (article.publishedAt) {
      years.add(article.publishedAt.getFullYear())
    }
  })

  return Array.from(years).sort((a, b) => b - a)
}

export default async function NewsPage() {
  const [articles, archiveYears] = await Promise.all([
    getArticles(),
    getArchiveYears(),
  ])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link href="/" className="text-2xl font-bold text-blue-900">
              WBS School
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-900 font-medium">
                Strona główna
              </Link>
              <Link href="/pl/aktualnosci" className="text-blue-900 font-medium">
                Aktualności
              </Link>
              <Link href="/admin/dashboard" className="text-blue-600 hover:text-blue-800 font-medium">
                Panel admin
              </Link>
              <LanguageSwitcher />
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                <Newspaper className="h-8 w-8 text-blue-600" />
                Aktualności
              </h1>
              <p className="mt-2 text-gray-600">
                Najnowsze wiadomości i informacje ze szkoły
              </p>
            </div>

            {articles.length === 0 ? (
              <div className="bg-white rounded-lg shadow p-12 text-center">
                <Newspaper className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-4 text-lg font-medium text-gray-900">
                  Brak artykułów
                </h3>
                <p className="mt-2 text-gray-500">
                  Wkrótce pojawią się nowe aktualności.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {articles.map((article) => (
                  <article
                    key={article.id}
                    className="bg-white rounded-lg shadow hover:shadow-md transition-shadow overflow-hidden"
                  >
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {article.category?.namePl || 'Aktualności'}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {article.publishedAt && format(new Date(article.publishedAt), 'd MMMM yyyy', { locale: pl })}
                        </span>
                      </div>
                      
                      <h2 className="text-xl font-semibold text-gray-900 mb-2">
                        <Link 
                          href={`/pl/aktualnosci/${article.slug}`}
                          className="hover:text-blue-600 transition-colors"
                        >
                          {article.titlePl}
                        </Link>
                      </h2>
                      
                      {article.excerptPl && (
                        <p className="text-gray-600 line-clamp-3 mb-4">
                          {article.excerptPl}
                        </p>
                      )}
                      
                      <Link
                        href={`/pl/aktualnosci/${article.slug}`}
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                      >
                        Czytaj więcej
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Archive */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Archiwum
              </h3>
              <ul className="space-y-2">
                {archiveYears.map((year) => (
                  <li key={year}>
                    <Link
                      href={`/pl/aktualnosci/archiwum/${year}`}
                      className="flex items-center justify-between text-gray-600 hover:text-blue-600 py-1"
                    >
                      <span>{year}</span>
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Szybkie linki
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/pl/o-szkole" className="text-gray-600 hover:text-blue-600">
                    O szkole
                  </Link>
                </li>
                <li>
                  <Link href="/pl/rekrutacja" className="text-gray-600 hover:text-blue-600">
                    Rekrutacja
                  </Link>
                </li>
                <li>
                  <Link href="/pl/kontakt" className="text-gray-600 hover:text-blue-600">
                    Kontakt
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </main>

      {/* Mobile Language Switcher */}
      <div className="md:hidden fixed bottom-4 right-4 z-50">
        <div className="bg-white rounded-full shadow-lg p-2">
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  )
}
