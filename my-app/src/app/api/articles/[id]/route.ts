import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { auth } from '@/lib/auth'

// GET /api/articles/[id] - Get single article
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params

    const article = await prisma.article.findUnique({
      where: { id },
      include: {
        category: true,
        author: {
          select: { name: true, email: true }
        },
        featuredImage: true,
        images: {
          include: { media: true },
          orderBy: { sortOrder: 'asc' }
        },
        pdfs: {
          include: { media: true },
          orderBy: { sortOrder: 'asc' }
        }
      }
    })

    if (!article) {
      return NextResponse.json(
        { error: 'Article not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({
      id: article.id,
      slug: article.slug,
      title_pl: article.titlePl,
      title_de: article.titleDe,
      title_en: article.titleEn,
      content_pl: article.contentPl,
      content_de: article.contentDe,
      content_en: article.contentEn,
      excerpt_pl: article.excerptPl,
      excerpt_de: article.excerptDe,
      excerpt_en: article.excerptEn,
      category_id: article.categoryId,
      category: article.category?.namePl,
      status: article.status.toLowerCase(),
      publish_date: article.publishedAt?.toISOString().split('T')[0],
      author: article.author?.name,
      seo_title: article.seoTitlePl,
      seo_description: article.seoDescPl,
      keywords: article.keywords,
      images: article.images,
      pdfs: article.pdfs,
    })
  } catch (error) {
    console.error('Failed to fetch article:', error)
    return NextResponse.json(
      { error: 'Failed to fetch article' },
      { status: 500 }
    )
  }
}

// PUT /api/articles/[id] - Update article
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth()
    
    if (!session) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const { id } = await params
    const body = await request.json()

    const existingArticle = await prisma.article.findUnique({
      where: { id }
    })

    if (!existingArticle) {
      return NextResponse.json(
        { error: 'Article not found' },
        { status: 404 }
      )
    }

    // If publishing for the first time, set publishedAt
    const publishedAt = 
      body.status === 'published' && !existingArticle.publishedAt
        ? new Date()
        : existingArticle.publishedAt

    const article = await prisma.article.update({
      where: { id },
      data: {
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
        status: body.status?.toUpperCase(),
        publishedAt,
        seoTitlePl: body.seo_title,
        seoDescPl: body.seo_description,
        keywords: body.keywords,
        updatedById: session.user.id,
      }
    })

    return NextResponse.json(article)
  } catch (error) {
    console.error('Failed to update article:', error)
    return NextResponse.json(
      { error: 'Failed to update article' },
      { status: 500 }
    )
  }
}

// DELETE /api/articles/[id] - Delete article
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth()
    
    if (!session) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const { id } = await params

    // Soft delete - just mark as archived
    await prisma.article.update({
      where: { id },
      data: { 
        status: 'ARCHIVED',
        updatedById: session.user.id,
      }
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Failed to delete article:', error)
    return NextResponse.json(
      { error: 'Failed to delete article' },
      { status: 500 }
    )
  }
}
