const fs = require('fs');
const path = require('path');

const ROOT = '/Users/brandsparkle/Desktop/German-school';
const CONTENT_DIR = path.join(ROOT, 'src/content/articles');
const PUBLIC_ARTICLES_DIR = path.join(ROOT, 'public/images/articles');

const NON_CONTENT = new Set([
  'wbs-logo-white.png', 'wbs-logo.png', 'wbs-przedszkole-logo.jpg',
  'ambasada-logo.png', '4_logotypy-kopia.jpg', 'de.png', 'lang_pl.gif',
  'artis-beactive.jpg', 'db.jpg', 'messer_claim.jpg', 'polish_diary2.jpg',
  'rr_o.o.male.jpg', 'sponsor.jpg', 'sponsor2.jpg', 'sponsor3.jpg', 'sponsor4.jpg',
  'vbl.jpg', 'arrow-up.png', 'ece_logo_www.jpg', 'lidl_logo_4c_ol_small.jpg',
  'logo_westminster_unternehme.jpg', 'logockw_jpg_copy_hp.png',
  'promedica24_logo.jpg',
]);

function looksLikeLogo(filename) {
  const lower = filename.toLowerCase();
  return NON_CONTENT.has(filename) ||
    lower.includes('logo') ||
    lower.includes('sponsor') ||
    lower.includes('claim') ||
    lower.startsWith('de.');
}

function getBestPhoto(slug) {
  const dir = path.join(PUBLIC_ARTICLES_DIR, slug);
  if (!fs.existsSync(dir)) return null;
  
  const sortedByBest = fs.readdirSync(dir)
    .filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f))
    .sort((a, b) => {
      const aLogo = looksLikeLogo(a);
      const bLogo = looksLikeLogo(b);
      if (aLogo !== bLogo) return aLogo ? 1 : -1;
      // Prefer larger files
      const sizeA = fs.statSync(path.join(dir, a)).size;
      const sizeB = fs.statSync(path.join(dir, b)).size;
      return sizeB - sizeA;
    });
  
  // Find first non-logo
  const best = sortedByBest.find(f => !looksLikeLogo(f));
  if (best) return `/images/articles/${slug}/${best}`;
  
  // Fallback to largest file overall
  if (sortedByBest.length > 0) return `/images/articles/${slug}/${sortedByBest[0]}`;
  return null;
}

const langs = ['pl', 'de', 'en'];
let updated = 0;

for (const lang of langs) {
  const langDir = path.join(CONTENT_DIR, lang);
  if (!fs.existsSync(langDir)) continue;

  const files = fs.readdirSync(langDir).filter(f => f.endsWith('.mdx'));
  for (const file of files) {
    const slug = file.replace('.mdx', '');
    const filePath = path.join(langDir, file);
    let content = fs.readFileSync(filePath, 'utf-8');
    
    const fmMatch = content.match(/^---\n([\s\S]*?)\n---/);
    if (!fmMatch) continue;
    
    const imgMatch = fmMatch[1].match(/^featuredImage:\s*(.+)$/m);
    const rawValue = imgMatch ? imgMatch[1].trim() : null;
    const currentImg = rawValue && rawValue !== 'null' ? rawValue.replace(/^"/, '').replace(/"$/, '') : null;
    
    const isBad = !currentImg || looksLikeLogo(path.basename(currentImg));
    if (!isBad) continue;
    
    const bestPhoto = getBestPhoto(slug);
    if (!bestPhoto) continue;
    
    let newContent;
    if (imgMatch) {
      newContent = content.replace(/^(featuredImage:\s*).+$/m, `$1"${bestPhoto}"`);
    } else {
      newContent = content.replace(/^(lang:)/m, `featuredImage: "${bestPhoto}"\n$1`);
    }
    
    fs.writeFileSync(filePath, newContent, 'utf-8');
    console.log(`✅ ${lang}/${slug} → ${path.basename(bestPhoto)}`);
    updated++;
  }
}

console.log(`\nDone! Updated ${updated} files.`);
