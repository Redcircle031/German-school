import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { auth } from '@/lib/auth'

// GET /api/articles - List all articles
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  
  const page = parseInt(searchParams.get('page') || '1')
  const limit = parseInt(searchParams.get('limit') || '20')
  const status = searchParams.get('status') as any
  const category = searchParams.get('category')
  const search = searchParams.get('search')
  const lang = searchParams.get('lang') || 'pl'

  try {
    const where: any = {}
    
    if (status) {
      where.status = status.toUpperCase()
    }
    
    if (category) {
      where.category = {
        slug: category
      }
    }
    
    if (search) {
      where.OR = [
        { titlePl: { contains: search, mode: 'insensitive' } },
        { titleDe: { contains: search, mode: 'insensitive' } },
        { titleEn: { contains: search, mode: 'insensitive' } },
      ]
    }

    const [articles, total] = await Promise.all([
      prisma.article.findMany({
        where,
        include: {
          category: true,
          author: {
            select: { name: true, email: true }
          },
          featuredImage: true,
          _count: {
            select: { images: true }
          }
        },
        orderBy: { publishedAt: 'desc' },
        skip: (page - 1) * limit,
        take: limit,
      }),
      prisma.article.count({ where })
    ])

    return NextResponse.json({
      articles: articles.map(article => ({
        id: article.id,
        slug: article.slug,
        title_pl: article.titlePl,
        title_de: article.titleDe,
        title_en: article.titleEn,
        excerpt_pl: article.excerptPl,
        category: article.category?.namePl,
        status: article.status.toLowerCase(),
        publish_date: article.publishedAt?.toISOString().split('T')[0],
        author: article.author?.name || article.author?.email,
        image_count: article._count.images,
      })),
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    })
  } catch (error) {
    console.error('Failed to fetch articles:', error)
    return NextResponse.json(
      { error: 'Failed to fetch articles' },
      { status: 500 }
    )
  }
}

// POST /api/articles - Create new article
export async function POST(request: NextRequest) {
  try {
    const session = await auth()
    
    if (!session) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const body = await request.json()
    
    // Validation
    if (!body.title_pl || !body.content_pl) {
      return NextResponse.json(
        { error: 'Title and content are required' },
        { status: 400 }
      )
    }

    // Generate slug from title
    const slug = body.title_pl
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .substring(0, 100)

    // Check for duplicate slug
    const existing = await prisma.article.findUnique({
      where: { slug }
    })

    const finalSlug = existing 
      ? `${slug}-${Date.now().toString(36)}` 
      : slug

    const article = await prisma.article.create({
      data: {
        slug: finalSlug,
        titlePl: body.title_pl,
        titleDe: body.title_de,
        titleEn: body.title_en,
        contentPl: body.content_pl,
        contentDe: body.content_de,
        contentEn: body.content_en,
        excerptPl: body.excerpt_pl,
        excerptDe: body.excerpt_de,
        excerptEn: body.excerpt_en,
        categoryId: body.category_id,
        authorId: session.user.id,
        status: body.status?.toUpperCase() || 'DRAFT',
        publishedAt: body.status === 'published' ? new Date() : null,
        seoTitlePl: body.seo_title,
        seoDescPl: body.seo_description,
        keywords: body.keywords,
        createdById: session.user.id,
      }
    })

    return NextResponse.json(article, { status: 201 })
  } catch (error) {
    console.error('Failed to create article:', error)
    return NextResponse.json(
      { error: 'Failed to create article' },
      { status: 500 }
    )
  }
}
