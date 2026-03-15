import { NextRequest, NextResponse } from 'next/server';
import { getAllArticles } from '@/lib/cms';
import fs from 'fs';
import path from 'path';

interface SearchResult {
  id: string;
  title: string;
  excerpt: string;
  type: 'article' | 'staff' | 'event' | 'page';
  url: string;
  date?: string;
  category?: string;
}

function loadJson<T>(filePath: string): T | null {
  try {
    if (fs.existsSync(filePath)) {
      return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    }
  } catch {
    // ignore
  }
  return null;
}

const staticPages: Record<string, Array<{ url: string; title: Record<string, string>; desc: Record<string, string> }>> = {
  pages: [
    { url: '/about', title: { pl: 'O szkole', de: 'Über uns', en: 'About' }, desc: { pl: 'Informacje o szkole WBS', de: 'Informationen über die WBS Schule', en: 'Information about WBS School' } },
    { url: '/about/staff', title: { pl: 'Kadra', de: 'Lehrkräfte', en: 'Staff' }, desc: { pl: 'Nasi nauczyciele i pracownicy', de: 'Unsere Lehrkräfte und Mitarbeiter', en: 'Our teachers and staff' } },
    { url: '/contact', title: { pl: 'Kontakt', de: 'Kontakt', en: 'Contact' }, desc: { pl: 'Skontaktuj się z nami', de: 'Kontaktieren Sie uns', en: 'Get in touch with us' } },
    { url: '/faq', title: { pl: 'FAQ', de: 'FAQ', en: 'FAQ' }, desc: { pl: 'Najczęściej zadawane pytania', de: 'Häufig gestellte Fragen', en: 'Frequently asked questions' } },
    { url: '/parents', title: { pl: 'Strefa rodzica', de: 'Elternbereich', en: 'Parent Zone' }, desc: { pl: 'Informacje dla rodziców', de: 'Informationen für Eltern', en: 'Information for parents' } },
    { url: '/students', title: { pl: 'Strefa ucznia', de: 'Schülerbereich', en: 'Student Zone' }, desc: { pl: 'Informacje dla uczniów', de: 'Informationen für Schüler', en: 'Information for students' } },
    { url: '/parents/recruitment', title: { pl: 'Rekrutacja', de: 'Rekrutierung', en: 'Admissions' }, desc: { pl: 'Proces rekrutacji do szkoły', de: 'Aufnahmeverfahren', en: 'School admissions process' } },
    { url: '/parents/canteen', title: { pl: 'Stołówka', de: 'Kantine', en: 'Canteen' }, desc: { pl: 'Informacje o stołówce szkolnej', de: 'Informationen zur Schulkantine', en: 'School canteen information' } },
    { url: '/events', title: { pl: 'Kalendarz', de: 'Kalender', en: 'Calendar' }, desc: { pl: 'Kalendarz wydarzeń szkolnych', de: 'Schulveranstaltungskalender', en: 'School events calendar' } },
    { url: '/downloads', title: { pl: 'Dokumenty', de: 'Dokumente', en: 'Documents' }, desc: { pl: 'Dokumenty do pobrania', de: 'Dokumente zum Herunterladen', en: 'Downloadable documents' } },
    { url: '/privacy', title: { pl: 'Polityka prywatności', de: 'Datenschutz', en: 'Privacy Policy' }, desc: { pl: 'Polityka prywatności szkoły', de: 'Datenschutzerklärung', en: 'School privacy policy' } },
    { url: '/students/football-academy', title: { pl: 'Akademia Piłkarska', de: 'Fußballakademie', en: 'Football Academy' }, desc: { pl: 'Akademia Piłkarska WBS', de: 'WBS Fußballakademie', en: 'WBS Football Academy' } },
    { url: '/students/music-academy', title: { pl: 'Akademia Muzyczna', de: 'Musikakademie', en: 'Music Academy' }, desc: { pl: 'Akademia Muzyczna WBS', de: 'WBS Musikakademie', en: 'WBS Music Academy' } },
  ],
};

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q')?.toLowerCase() || '';
  const locale = searchParams.get('locale') || 'pl';

  // Validate inputs
  const ALLOWED_LOCALES = ['pl', 'de', 'en'];
  if (!ALLOWED_LOCALES.includes(locale)) {
    return NextResponse.json({ success: false, error: 'Invalid locale' }, { status: 400 });
  }

  if (query.length < 2 || query.length > 200) {
    return NextResponse.json({ success: true, data: { results: [] } });
  }

  const results: SearchResult[] = [];

  // Search articles
  try {
    const articles = getAllArticles(locale);
    for (const article of articles) {
      if (article.draft) continue;
      const searchText = `${article.title} ${article.excerpt} ${article.category} ${article.tags?.join(' ')}`.toLowerCase();
      if (searchText.includes(query)) {
        results.push({
          id: `article-${article.slug}`,
          title: article.title,
          excerpt: article.excerpt.substring(0, 160),
          type: 'article',
          url: `/news/${article.slug}`,
          date: article.date,
          category: article.category,
        });
      }
    }
  } catch {
    // ignore article search errors
  }

  // Search staff
  try {
    const dataDir = path.join(process.cwd(), 'src', 'data', 'extracted');
    const staffData = loadJson<{ staff: Array<{ id: string; name: string; role?: Record<string, string>; subjects?: string[]; email?: string }> }>(
      path.join(dataDir, 'staff.json')
    );
    if (staffData?.staff) {
      for (const member of staffData.staff) {
        const role = member.role?.[locale as keyof typeof member.role] || member.role?.de || '';
        const searchText = `${member.name} ${role} ${member.subjects?.join(' ') || ''}`.toLowerCase();
        if (searchText.includes(query)) {
          results.push({
            id: `staff-${member.id}`,
            title: member.name,
            excerpt: `${role}${member.subjects?.length ? ` - ${member.subjects.join(', ')}` : ''}`,
            type: 'staff',
            url: '/about/staff',
          });
        }
      }
    }
  } catch {
    // ignore staff search errors
  }

  // Search events
  try {
    const dataDir = path.join(process.cwd(), 'src', 'data', 'extracted');
    const eventsData = loadJson<{ upcoming: Array<{ id: string; title: Record<string, string>; description?: Record<string, string>; date: string; category?: string }> }>(
      path.join(dataDir, 'events.json')
    );
    if (eventsData?.upcoming) {
      for (const event of eventsData.upcoming) {
        const title = event.title[locale as keyof typeof event.title] || event.title.pl || '';
        const desc = event.description?.[locale as keyof typeof event.description] || '';
        const searchText = `${title} ${desc} ${event.category || ''}`.toLowerCase();
        if (searchText.includes(query)) {
          results.push({
            id: `event-${event.id}`,
            title,
            excerpt: desc.substring(0, 160),
            type: 'event',
            url: '/events',
            date: event.date,
            category: event.category,
          });
        }
      }
    }
  } catch {
    // ignore events search errors
  }

  // Search static pages
  for (const page of staticPages.pages) {
    const title = page.title[locale as keyof typeof page.title] || page.title.en;
    const desc = page.desc[locale as keyof typeof page.desc] || page.desc.en;
    const searchText = `${title} ${desc}`.toLowerCase();
    if (searchText.includes(query)) {
      results.push({
        id: `page-${page.url}`,
        title,
        excerpt: desc,
        type: 'page',
        url: page.url,
      });
    }
  }

  // Sort: articles first (most relevant), then by date
  results.sort((a, b) => {
    if (a.type === 'article' && b.type !== 'article') return -1;
    if (a.type !== 'article' && b.type === 'article') return 1;
    if (a.date && b.date) return new Date(b.date).getTime() - new Date(a.date).getTime();
    return 0;
  });

  return NextResponse.json({
    success: true,
    data: { results: results.slice(0, 20), total: results.length },
  });
}
