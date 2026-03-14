import { NextRequest, NextResponse } from 'next/server';

interface NavItem {
  id: number;
  label_pl: string;
  label_de?: string;
  label_en?: string;
  url: string;
  parent_id: number | null;
  sort_order: number;
  is_active: boolean;
}

interface NavTreeItem extends NavItem {
  children: NavTreeItem[];
}

// GET /api/navigation - Get all navigation items
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const lang = searchParams.get('lang') || 'pl';

  try {
    // In production, fetch from database
    // Build tree structure
    const mockNavItems: NavItem[] = [
      { id: 1, label_pl: 'Strona główna', label_de: 'Startseite', label_en: 'Home', url: '/', parent_id: null, sort_order: 1, is_active: true },
      { id: 2, label_pl: 'O szkole', label_de: 'Über die Schule', label_en: 'About School', url: '/o-szkole', parent_id: null, sort_order: 2, is_active: true },
      { id: 3, label_pl: 'Historia', label_de: 'Geschichte', label_en: 'History', url: '/o-szkole/historia', parent_id: 2, sort_order: 1, is_active: true },
      { id: 4, label_pl: 'Patron', label_de: 'Patron', label_en: 'Patron', url: '/o-szkole/patron', parent_id: 2, sort_order: 2, is_active: true },
      { id: 5, label_pl: 'Kadra', label_de: 'Lehrkörper', label_en: 'Staff', url: '/o-szkole/kadra', parent_id: 2, sort_order: 3, is_active: true },
      { id: 6, label_pl: 'Aktualności', label_de: 'Aktuelles', label_en: 'News', url: '/aktualnosci', parent_id: null, sort_order: 3, is_active: true },
      { id: 7, label_pl: 'Osiągnięcia', label_de: 'Erfolge', label_en: 'Achievements', url: '/osiagniecia', parent_id: null, sort_order: 4, is_active: true },
      { id: 8, label_pl: 'Wydarzenia', label_de: 'Veranstaltungen', label_en: 'Events', url: '/wydarzenia', parent_id: null, sort_order: 5, is_active: true },
      { id: 9, label_pl: 'Rekrutacja', label_de: 'Aufnahme', label_en: 'Admission', url: '/rekrutacja', parent_id: null, sort_order: 6, is_active: true },
      { id: 10, label_pl: 'Kontakt', label_de: 'Kontakt', label_en: 'Contact', url: '/kontakt', parent_id: null, sort_order: 7, is_active: true },
    ];

    // Build tree
    const buildTree = (items: NavItem[], parentId: number | null = null): NavTreeItem[] => {
      return items
        .filter(item => item.parent_id === parentId)
        .sort((a, b) => a.sort_order - b.sort_order)
        .map(item => ({
          ...item,
          children: buildTree(items, item.id),
        }));
    };

    const tree = buildTree(mockNavItems);

    return NextResponse.json({
      navigation: tree,
      flat: mockNavItems,
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch navigation' },
      { status: 500 }
    );
  }
}

// POST /api/navigation - Create navigation item
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validation
    if (!body.label_pl || !body.url) {
      return NextResponse.json(
        { error: 'Label (PL) and URL are required' },
        { status: 400 }
      );
    }

    // In production, insert into database
    const newNavItem = {
      id: Date.now(),
      label_pl: body.label_pl,
      label_de: body.label_de || null,
      label_en: body.label_en || null,
      url: body.url,
      parent_id: body.parent_id || null,
      sort_order: body.sort_order || 0,
      is_active: body.is_active !== false,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    return NextResponse.json(newNavItem, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create navigation item' },
      { status: 500 }
    );
  }
}

// PUT /api/navigation - Bulk update navigation (reorder)
export async function PUT(request: NextRequest) {
  try {
    const { items } = await request.json();

    if (!Array.isArray(items)) {
      return NextResponse.json(
        { error: 'Items array required' },
        { status: 400 }
      );
    }

    // In production, update all items in transaction
    // Update sort_order and parent_id for each item

    return NextResponse.json({ success: true, updated: items.length });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to update navigation' },
      { status: 500 }
    );
  }
}
