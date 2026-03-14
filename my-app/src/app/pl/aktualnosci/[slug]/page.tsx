import { prisma } from '@/lib/prisma'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { format } from 'date-fns'
import { pl } from 'date-fns/locale'
import { Calendar, ChevronLeft, User, Tag } from 'lucide-react'
import { LanguageSwitcher } from '@/app/components/LanguageSwitcher'

interface ArticlePageProps {
  params: {
    slug: string
  }
}

export const revalidate = 60

async function getArticle(slug: string) {
  const article = await prisma.article.findUnique({
    where: {
      slug,
      status: 'PUBLISHED',
    },
    include: {
      category: true,
      featuredImage: true,
      author: {
        select: {
          name: true,
        },
      },
      images: {
        include: {
          media: true,
        },
        orderBy: {
          sortOrder: 'asc',
        },
      },
      pdfs: {
        include: {
          media: true,
        },
        orderBy: {
          sortOrder: 'asc',
        },
      },
    },
  })

  return article
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const article = await getArticle(params.slug)
  
  if (!article) {
    return {
      title: 'Nie znaleziono - WBS School',
    }
  }

  return {
    title: article.seoTitlePl || `${article.titlePl} - WBS School`,
    description: article.seoDescPl || article.excerptPl,
    keywords: article.keywords,
  }
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const article = await getArticle(params.slug)

  if (!article) {
    notFound()
  }

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

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Link */}
        <Link
          href="/pl/aktualnosci"
          className="inline-flex items-center text-gray-600 hover:text-blue-600 mb-6"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Powrót do aktualności
        </Link>

        {/* Article */}
        <article className="bg-white rounded-lg shadow">
          {/* Header */}
          <div className="p-6 sm:p-8 border-b border-gray-100">
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                {article.category?.namePl || 'Aktualności'}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {article.publishedAt && format(new Date(article.publishedAt), 'd MMMM yyyy', { locale: pl })}
              </span>
              {article.author?.name && (
                <span className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  {article.author.name}
                </span>
              )}
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
              {article.titlePl}
            </h1>
          </div>

          {/* Featured Image */}
          {article.featuredImage && (
            <div className="px-6 sm:px-8 py-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={article.featuredImage.filePath}
                alt={article.featuredImage.altTextPl || article.titlePl}
                className="w-full h-64 sm:h-96 object-cover rounded-lg"
              />
            </div>
          )}

          {/* Content */}
          <div className="p-6 sm:p-8">
            {article.excerptPl && (
              <p className="text-lg text-gray-600 italic mb-6 border-l-4 border-blue-500 pl-4">
                {article.excerptPl}
              </p>
            )}

            <div 
              className="prose prose-lg max-w-none prose-blue"
              dangerouslySetInnerHTML={{ __html: article.contentPl }}
            />

            {/* PDF Attachments */}
            {article.pdfs.length > 0 && (
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Tag className="h-5 w-5" />
                  Załączniki
                </h3>
                <div className="space-y-2">
                  {article.pdfs.map((pdf) => (
                    <a
                      key={pdf.id}
                      href={pdf.media.filePath}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <span className="text-2xl mr-3">📄</span>
                      <div>
                        <p className="font-medium text-gray-900">
                          {pdf.titlePl || pdf.media.originalFilename}
                        </p>
                        <p className="text-sm text-gray-500">
                          PDF • {(pdf.media.fileSize / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Gallery */}
            {article.images.length > 0 && (
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Galeria
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {article.images.map((img) => (
                    <a
                      key={img.id}
                      href={img.media.filePath}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="aspect-square bg-gray-100 rounded-lg overflow-hidden hover:opacity-90 transition-opacity"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={img.media.filePath}
                        alt={img.media.altTextPl || ''}
                        className="w-full h-full object-cover"
                      />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </article>

        {/* Navigation */}
        <div className="mt-8 flex justify-between">
          <Link
            href="/pl/aktualnosci"
            className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            <ChevronLeft className="h-4 w-4 mr-2" />
            Wszystkie aktualności
          </Link>
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
