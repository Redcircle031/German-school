#!/usr/bin/env node
/**
 * URL Redirect Mapping Generator
 * Creates redirect rules for Next.js, Apache, and Nginx
 */

const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = __dirname;
const DATABASE_PATH = path.join(__dirname, '..', 'wbs-complete-database.json');

// Load database
const database = JSON.parse(fs.readFileSync(DATABASE_PATH, 'utf8'));

// URL transformation rules
function generateNewUrl(article) {
  const slug = article.slug || article.id;
  const category = article.category || 'aktualnosci';
  
  // Map categories to Polish URL segments
  const categoryMap = {
    'events': 'wydarzenia',
    'achievements': 'sukcesy',
    'news': 'aktualnosci',
    'other': 'aktualnosci'
  };
  
  const urlCategory = categoryMap[category] || 'aktualnosci';
  
  // Clean slug for URL
  const cleanSlug = slug
    .toLowerCase()
    .replace(/[_-]+/g, '-')
    .replace(/[^a-z0-9-ąćęłńóśźż]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
  
  return `/pl/${urlCategory}/${cleanSlug}`;
}

// Generate redirects
const redirects = [];
const redirectsDE = [];
const redirectsEN = [];

for (const article of database.articles) {
  const oldUrl = article.originalUrl || `https://wbs.pl/${article.id}.html`;
  const oldPath = oldUrl.replace('https://wbs.pl/', '');
  
  const newUrlPL = generateNewUrl(article);
  const newUrlDE = newUrlPL.replace('/pl/', '/de/');
  const newUrlEN = newUrlPL.replace('/pl/', '/en/');
  
  redirects.push({
    source: `/${oldPath}`,
    destination: newUrlPL,
    permanent: true,
    article: article.title
  });
  
  // Also create clean redirects without .html
  const cleanOldPath = oldPath.replace('.html', '');
  if (cleanOldPath !== oldPath) {
    redirects.push({
      source: `/${cleanOldPath}`,
      destination: newUrlPL,
      permanent: true,
      article: article.title
    });
  }
}

// ============================================
// 1. NEXT.JS REDIRECTS (next.config.js format)
// ============================================

const nextJsRedirects = redirects.map(r => ({
  source: r.source,
  destination: r.destination,
  permanent: true
}));

// Additional page redirects
const pageRedirects = [
  { source: '/strona_glowna-1298.html', destination: '/pl', permanent: true },
  { source: '/strona_glowna-1388.html', destination: '/pl', permanent: true },
  { source: '/aktualnosci-1338.html', destination: '/pl/aktualnosci', permanent: true },
  { source: '/aktualnosci-1393.html', destination: '/pl/aktualnosci', permanent: true },
  { source: '/aktualne_wydarzenia-1339.html', destination: '/pl/aktualnosci', permanent: true },
  { source: '/o_nas-1397.html', destination: '/pl/o-szkole', permanent: true },
  { source: '/o_nas-1346.html', destination: '/pl/o-szkole', permanent: true },
  { source: '/szkola_wbs-1421.html', destination: '/pl/o-szkole', permanent: true },
  { source: '/szkola_wbs-2098.html', destination: '/pl/o-szkole', permanent: true },
  { source: '/zespol-1399.html', destination: '/pl/kadra', permanent: true },
  { source: '/zespol-1348.html', destination: '/pl/kadra', permanent: true },
  { source: '/misja-1398.html', destination: '/pl/o-szkole/misja', permanent: true },
  { source: '/misja-1347.html', destination: '/pl/o-szkole/misja', permanent: true },
  { source: '/dokumenty-2099.html', destination: '/pl/dla-rodzicow/dokumenty', permanent: true },
  { source: '/dokumenty-1446.html', destination: '/pl/dla-rodzicow/dokumenty', permanent: true },
  { source: '/strefa_rodzica-1401.html', destination: '/pl/dla-rodzicow', permanent: true },
  { source: '/strefa_rodzica-1356.html', destination: '/pl/dla-rodzicow', permanent: true },
  { source: '/rekrutacja-1402.html', destination: '/pl/rekrutacja', permanent: true },
  { source: '/rekrutacja-1357.html', destination: '/pl/rekrutacja', permanent: true },
  { source: '/rekrutacja-3859.html', destination: '/pl/rekrutacja', permanent: true },
  { source: '/formularze_do_pobrania-1408.html', destination: '/pl/dla-rodzicow/formularze', permanent: true },
  { source: '/formularze_do_pobrania-1358.html', destination: '/pl/dla-rodzicow/formularze', permanent: true },
  { source: '/regulaminy-1360.html', destination: '/pl/dla-rodzicow/regulaminy', permanent: true },
  { source: '/regulamin-1410.html', destination: '/pl/dla-rodzicow/regulaminy', permanent: true },
  { source: '/stolowka_szkolna-1422.html', destination: '/pl/dla-rodzicow/stolowka', permanent: true },
  { source: '/stolowka_szkolna_-2104.html', destination: '/pl/dla-rodzicow/stolowka', permanent: true },
  { source: '/opieka_popoludniowa-1364.html', destination: '/pl/dla-rodzicow/swietlica', permanent: true },
  { source: '/opieka_popoludniowa-1414.html', destination: '/pl/dla-rodzicow/swietlica', permanent: true },
  { source: '/rada_rodzicow-2423.html', destination: '/pl/dla-rodzicow/rada-rodzicow', permanent: true },
  { source: '/rada_rodzicow_-2105.html', destination: '/pl/dla-rodzicow/rada-rodzicow', permanent: true },
  { source: '/strefa_ucznia-2111.html', destination: '/pl/dla-uczniow', permanent: true },
  { source: '/strefa_ucznia-1369.html', destination: '/pl/dla-uczniow', permanent: true },
  { source: '/projekty-1417.html', destination: '/pl/dla-uczniow/projekty', permanent: true },
  { source: '/projekty-1371.html', destination: '/pl/dla-uczniow/projekty', permanent: true },
  { source: '/biblioteka-1433.html', destination: '/pl/dla-uczniow/biblioteka', permanent: true },
  { source: '/biblioteka-2113.html', destination: '/pl/dla-uczniow/biblioteka', permanent: true },
  { source: '/kontakt-1385.html', destination: '/pl/kontakt', permanent: true },
  { source: '/kontakt-1420.html', destination: '/pl/kontakt', permanent: true },
  { source: '/archiwum-2097.html', destination: '/pl/archiwum', permanent: true },
  { source: '/archiwum-1589.html', destination: '/pl/archiwum', permanent: true },
  { source: '/impressum-2760.html', destination: '/pl/impressum', permanent: true },
  { source: '/mapa_strony-1434.html', destination: '/pl/mapa-strony', permanent: true },
];

const allNextJsRedirects = [...pageRedirects, ...nextJsRedirects];

// ============================================
// 2. APACHE HTACCESS RULES
// ============================================

let apacheRules = '# WBS Website Redirects - Apache .htaccess\n';
apacheRules += '# Generated: ' + new Date().toISOString() + '\n\n';
apacheRules += 'RewriteEngine On\n\n';

// Page redirects
pageRedirects.forEach(r => {
  apacheRules += `RewriteRule ^${r.source.replace('/', '').replace('.html', '(.html)?')}$ ${r.destination} [R=301,L]\n`;
});

apacheRules += '\n# Article Redirects\n';
redirects.forEach(r => {
  const source = r.source.replace('/', '').replace('.html', '');
  apacheRules += `RewriteRule ^${source}(.html)?$ ${r.destination} [R=301,L]\n`;
});

// ============================================
// 3. NGINX REDIRECT RULES
// ============================================

let nginxRules = '# WBS Website Redirects - Nginx\n';
nginxRules += '# Generated: ' + new Date().toISOString() + '\n\n';

// Page redirects
pageRedirects.forEach(r => {
  const source = r.source.replace('.html', '').replace('/', '');
  nginxRules += `rewrite ^/${source}.html?$ ${r.destination} permanent;\n`;
});

nginxRules += '\n# Article Redirects\n';
redirects.slice(0, 100).forEach(r => { // First 100 for brevity
  const source = r.source.replace('.html', '').replace('/', '');
  nginxRules += `rewrite ^/${source}.html?$ ${r.destination} permanent;\n`;
});
nginxRules += `# ... ${redirects.length - 100} more article redirects\n`;

// ============================================
// 4. VERCEL REDIRECTS (vercel.json format)
// ============================================

const vercelRedirects = allNextJsRedirects.map(r => ({
  source: r.source,
  destination: r.destination,
  permanent: true
}));

// ============================================
// SAVE ALL FILES
// ============================================

// Save Next.js config snippet
const nextJsConfig = `// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return ${JSON.stringify(allNextJsRedirects, null, 2)};
  },
};

module.exports = nextConfig;
`;

fs.writeFileSync(path.join(OUTPUT_DIR, 'next.config.redirects.js'), nextJsConfig);
fs.writeFileSync(path.join(OUTPUT_DIR, '.htaccess'), apacheRules);
fs.writeFileSync(path.join(OUTPUT_DIR, 'nginx-redirects.conf'), nginxRules);
fs.writeFileSync(path.join(OUTPUT_DIR, 'vercel.json'), JSON.stringify({ redirects: vercelRedirects }, null, 2));

// Save CSV for review
const csvHeader = 'Old URL,New URL (PL),New URL (DE),New URL (EN),Article Title\n';
const csvContent = redirects.map(r => {
  const de = r.destination.replace('/pl/', '/de/');
  const en = r.destination.replace('/pl/', '/en/');
  return `"https://wbs.pl${r.source}","https://wbs.pl${r.destination}","https://wbs.pl${de}","https://wbs.pl${en}","${r.article}"`;
}).join('\n');

fs.writeFileSync(path.join(OUTPUT_DIR, 'redirect-mapping.csv'), csvHeader + csvContent);

// Summary
console.log('=== URL Redirect Mapping Generated ===\n');
console.log(`Total redirects: ${allNextJsRedirects.length}`);
console.log(`  - Page redirects: ${pageRedirects.length}`);
console.log(`  - Article redirects: ${redirects.length}`);
console.log('\nFiles created:');
console.log('  1. next.config.redirects.js - Next.js redirects config');
console.log('  2. .htaccess - Apache redirect rules');
console.log('  3. nginx-redirects.conf - Nginx redirect rules');
console.log('  4. vercel.json - Vercel deployment redirects');
console.log('  5. redirect-mapping.csv - Spreadsheet for review');
