import { NextRequest, NextResponse } from 'next/server';

// GET /api/media - List all media files
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  
  const page = parseInt(searchParams.get('page') || '1');
  const limit = parseInt(searchParams.get('limit') || '50');
  const type = searchParams.get('type'); // 'image', 'document', 'all'
  const search = searchParams.get('search');

  try {
    // In production, query database
    const mockMedia = [
      {
        id: 1,
        filename: 'radio-wbs-2026.jpg',
        url: '/images/radio-wbs-2026.jpg',
        thumbnail_url: '/images/thumbnails/radio-wbs-2026.jpg',
        size: 245760,
        type: 'image/jpeg',
        width: 1200,
        height: 800,
        uploaded_at: '2026-02-09T10:00:00Z',
        article_id: 1,
        article_title: 'Kolejna radiowa przygoda',
      },
      {
        id: 2,
        filename: 'chemia-konkurs.jpg',
        url: '/images/chemia-konkurs.jpg',
        thumbnail_url: '/images/thumbnails/chemia-konkurs.jpg',
        size: 189440,
        type: 'image/jpeg',
        width: 800,
        height: 600,
        uploaded_at: '2026-02-10T11:00:00Z',
        article_id: 2,
        article_title: 'Sukces w konkursie chemicznym',
      },
    ];

    return NextResponse.json({
      media: mockMedia,
      pagination: {
        page,
        limit,
        total: 1295,
        totalPages: Math.ceil(1295 / limit),
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch media' },
      { status: 500 }
    );
  }
}

// POST /api/media - Upload media file
export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const articleId = formData.get('article_id') as string;

    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      );
    }

    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'application/pdf'];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { error: 'Invalid file type' },
        { status: 400 }
      );
    }

    // Validate file size (5MB max for images, 10MB for PDFs)
    const maxSize = file.type === 'application/pdf' ? 10 * 1024 * 1024 : 5 * 1024 * 1024;
    if (file.size > maxSize) {
      return NextResponse.json(
        { error: 'File too large' },
        { status: 400 }
      );
    }

    // In production:
    // 1. Upload to S3/Cloudflare R2
    // 2. Create thumbnails for images
    // 3. Save metadata to database

    const newMedia = {
      id: Date.now(),
      filename: file.name,
      url: `/images/${file.name}`,
      thumbnail_url: file.type.startsWith('image/') ? `/images/thumbnails/${file.name}` : null,
      size: file.size,
      type: file.type,
      uploaded_at: new Date().toISOString(),
      article_id: articleId ? parseInt(articleId) : null,
    };

    return NextResponse.json(newMedia, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to upload media' },
      { status: 500 }
    );
  }
}

// DELETE /api/media - Bulk delete media files
export async function DELETE(request: NextRequest) {
  try {
    const { ids } = await request.json();

    if (!Array.isArray(ids) || ids.length === 0) {
      return NextResponse.json(
        { error: 'No media IDs provided' },
        { status: 400 }
      );
    }

    // In production:
    // 1. Delete from S3/Cloudflare R2
    // 2. Delete from database

    return NextResponse.json({ success: true, deleted: ids });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to delete media' },
      { status: 500 }
    );
  }
}
