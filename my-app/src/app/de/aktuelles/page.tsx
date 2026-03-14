import { prisma } from '@/lib/prisma'
import Link from 'next/link'
import { format } from 'date-fns'
import { de } from 'date-fns/locale'
import { Calendar, ChevronRight, Newspaper } from 'lucide-react'
import { LanguageSwitcher } from '@/app/components/LanguageSwitcher'

export const metadata = {
  title: 'Aktuelles - WBS School',
  description: 'Neueste Nachrichten und Informationen von der WBS Schule',
}

export const revalidate = 60

async function getArticles() {
  const articles = await prisma.article.findMany({
    where: {
      status: 'PUBLISHED',
      publishedAt: {
        lte: new Date(),
      },
      titleDe: {
        not: null,
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

export default async function NewsPageDe() {
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
            <Link href="/de" className="text-2xl font-bold text-blue-900">
              WBS School
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/de" className="text-gray-700 hover:text-blue-900 font-medium">
                Startseite
              </Link>
              <Link href="/de/aktuelles" className="text-blue-900 font-medium">
                Aktuelles
              </Link>
              <Link href="/admin/dashboard" className="text-blue-600 hover:text-blue-800 font-medium">
                Admin
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
                Aktuelles
              </h1>
              <p className="mt-2 text-gray-600">
                Neueste Nachrichten und Informationen von der Schule
              </p>
            </div>

            {articles.length === 0 ? (
              <div className="bg-white rounded-lg shadow p-12 text-center">
                <Newspaper className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-4 text-lg font-medium text-gray-900">
                  Keine Artikel vorhanden
                </h3>
                <p className="mt-2 text-gray-500">
                  Bald gibt es neue Nachrichten.
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
                          {article.category?.nameDe || 'Aktuelles'}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {article.publishedAt && format(new Date(article.publishedAt), 'd. MMMM yyyy', { locale: de })}
                        </span>
                      </div>
                      
                      <h2 className="text-xl font-semibold text-gray-900 mb-2">
                        <Link 
                          href={`/de/aktuelles/${article.slug}`}
                          className="hover:text-blue-600 transition-colors"
                        >
                          {article.titleDe}
                        </Link>
                      </h2>
                      
                      {article.excerptDe && (
                        <p className="text-gray-600 line-clamp-3 mb-4">
                          {article.excerptDe}
                        </p>
                      )}
                      
                      <Link
                        href={`/de/aktuelles/${article.slug}`}
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                      >
                        Weiterlesen
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
                Archiv
              </h3>
              <ul className="space-y-2">
                {archiveYears.map((year) => (
                  <li key={year}>
                    <Link
                      href={`/de/aktuelles/archiv/${year}`}
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
                Schnelllinks
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/de/uber-uns" className="text-gray-600 hover:text-blue-600">
                    Über uns
                  </Link>
                </li>
                <li>
                  <Link href="/de/aufnahme" className="text-gray-600 hover:text-blue-600">
                    Aufnahme
                  </Link>
                </li>
                <li>
                  <Link href="/de/kontakt" className="text-gray-600 hover:text-blue-600">
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
