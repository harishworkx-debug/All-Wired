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

const baseUrl = 'https://www.allwiredamericanfork.com';
const today = new Date().toISOString().split('T')[0];

const staticPages = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/about', changefreq: 'monthly', priority: '0.8' },
  { path: '/services', changefreq: 'monthly', priority: '0.9' },
  { path: '/service-areas', changefreq: 'monthly', priority: '0.8' },
  { path: '/contact', changefreq: 'monthly', priority: '0.8' },
  { path: '/privacy-policy', changefreq: 'yearly', priority: '0.3' },
  { path: '/terms-and-conditions', changefreq: 'yearly', priority: '0.3' },
];

let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

// Static pages
for (const page of staticPages) {
  const loc = page.path === '/' ? `${baseUrl}/` : `${baseUrl}${page.path}`;
  xml += `  <url><loc>${loc}</loc><lastmod>${today}</lastmod><changefreq>${page.changefreq}</changefreq><priority>${page.priority}</priority></url>\n`;
}

// Core Service Pillar pages (e.g. /electrical-repairs-and-upgrades)
for (const slug of coreServiceSlugs) {
  xml += `  <url><loc>${baseUrl}/${slug}</loc><lastmod>${today}</lastmod><changefreq>weekly</changefreq><priority>0.9</priority></url>\n`;
}

// Main Service pages
for (const slug of serviceSlugs) {
  xml += `  <url><loc>${baseUrl}/services/${slug}</loc><lastmod>${today}</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>\n`;
}

// Service Area pages (electrician-[city]-[state])
for (const slug of locationSlugs) {
  xml += `  <url><loc>${baseUrl}/electrician-${slug}</loc><lastmod>${today}</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>\n`;
}

// Service Location combinations
for (const sSlug of serviceSlugs) {
  for (const lSlug of locationSlugs) {
    xml += `  <url><loc>${baseUrl}/${sSlug}-${lSlug}</loc><lastmod>${today}</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>\n`;
  }
}

xml += '</urlset>\n';

fs.writeFileSync(path.join(rootDir, 'public/sitemap.xml'), xml, 'utf8');
const totalUrls = staticPages.length + coreServiceSlugs.length + serviceSlugs.length + locationSlugs.length + (serviceSlugs.length * locationSlugs.length);
console.log(`Generated sitemap with ${totalUrls} URLs successfully.`);
