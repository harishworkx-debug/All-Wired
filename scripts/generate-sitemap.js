import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const businessFile = fs.readFileSync(path.join(rootDir, 'src/data/business.ts'), 'utf8');

// Extract core service slugs
const coreServiceSlugMatch = businessFile.match(/export type CoreServiceSlug =([\s\S]*?);/);
let coreServiceSlugs = [];
if (coreServiceSlugMatch) {
  coreServiceSlugs = [...coreServiceSlugMatch[1].matchAll(/'([^']+)'/g)].map(m => m[1]);
}

// Extract service slugs
const serviceSlugMatch = businessFile.match(/export type ServiceSlug =([\s\S]*?);/);
let serviceSlugs = [];
if (serviceSlugMatch) {
  serviceSlugs = [...serviceSlugMatch[1].matchAll(/'([^']+)'/g)].map(m => m[1]);
}

// Extract location slugs
const locationSlugMatch = businessFile.match(/export type LocationSlug =([\s\S]*?);/);
let locationSlugs = [];
if (locationSlugMatch) {
  locationSlugs = [...locationSlugMatch[1].matchAll(/'([^']+)'/g)].map(m => m[1]);
}

// Extract blog post slugs
const blogFile = fs.readFileSync(path.join(rootDir, 'src/data/blog.ts'), 'utf8');
const blogSlugMatches = [...blogFile.matchAll(/slug:\s*'([^']+)'/g)].map(m => m[1]);

const baseUrl = 'https://www.allwiredamericanfork.com';
const today = new Date().toISOString().split('T')[0];

const staticPages = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/about', changefreq: 'monthly', priority: '0.8' },
  { path: '/services', changefreq: 'monthly', priority: '0.9' },
  { path: '/service-areas', changefreq: 'monthly', priority: '0.8' },
  { path: '/blog', changefreq: 'weekly', priority: '0.8' },
  { path: '/contact', changefreq: 'monthly', priority: '0.8' },
  { path: '/privacy-policy', changefreq: 'yearly', priority: '0.3' },
  { path: '/terms-and-conditions', changefreq: 'yearly', priority: '0.3' },
];

let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

// Static pages
for (const page of staticPages) {
  const loc = page.path === '/' ? `${baseUrl}/` : `${baseUrl}${page.path}`;
  xml += `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${page.changefreq}</changefreq>\n    <priority>${page.priority}</priority>\n  </url>\n`;
}

// Core Service Pillar pages (e.g. /electrical-repairs-and-upgrades)
for (const slug of coreServiceSlugs) {
  xml += `  <url>\n    <loc>${baseUrl}/${slug}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.9</priority>\n  </url>\n`;
}

// Core Service Location combinations (e.g. /electrical-repairs-and-upgrades-american-fork-ut)
for (const cSlug of coreServiceSlugs) {
  for (const lSlug of locationSlugs) {
    xml += `  <url>\n    <loc>${baseUrl}/${cSlug}-${lSlug}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.85</priority>\n  </url>\n`;
  }
}

// Main Service pages
for (const slug of serviceSlugs) {
  xml += `  <url>\n    <loc>${baseUrl}/services/${slug}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.8</priority>\n  </url>\n`;
}

// Service Area pages (electrician-[city]-[state])
for (const slug of locationSlugs) {
  xml += `  <url>\n    <loc>${baseUrl}/electrician-${slug}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.7</priority>\n  </url>\n`;
}

// Service Location combinations
for (const sSlug of serviceSlugs) {
  for (const lSlug of locationSlugs) {
    xml += `  <url>\n    <loc>${baseUrl}/${sSlug}-${lSlug}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.6</priority>\n  </url>\n`;
  }
}

// Blog Educational Articles
for (const slug of blogSlugMatches) {
  xml += `  <url>\n    <loc>${baseUrl}/blog/${slug}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.7</priority>\n  </url>\n`;
}

xml += '</urlset>\n';

fs.writeFileSync(path.join(rootDir, 'public/sitemap.xml'), xml, 'utf8');
const totalUrls =
  staticPages.length +
  coreServiceSlugs.length +
  coreServiceSlugs.length * locationSlugs.length +
  serviceSlugs.length +
  locationSlugs.length +
  serviceSlugs.length * locationSlugs.length +
  blogSlugMatches.length;
console.log(`Generated sitemap with ${totalUrls} URLs successfully.`);
