import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://wbs.pl';
  const languages = ['pl', 'de', 'en'];
  const routes = [
    '',
    '/about',
    '/about/staff',
    '/news',
    '/events',
    '/contact',
    '/parents/recruitment',
    '/parents/forms',
    '/parents/canteen',
    '/students/football-academy',
    '/students/music-academy',
    '/students/library',
    '/faq',
    '/privacy',
    '/cookies',
    '/accessibility',
    '/impressum',
  ];

  const sitemap: MetadataRoute.Sitemap = [];

  for (const lang of languages) {
    for (const route of routes) {
      sitemap.push({
        url: `${baseUrl}/${lang}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'daily' : 'weekly',
        priority: route === '' ? 1 : 0.8,
      });
    }
  }

  return sitemap;
}
