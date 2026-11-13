import { useEffect } from 'react';
import { BUSINESS } from '@/data/business';

interface SeoProps {
  title: string;
  description: string;
  path: string;
  jsonLd?: Record<string, unknown>[];
  ogImage?: string;
  noindex?: boolean;
}

const SITE_URL = 'https://www.allwiredamericanfork.com';

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function upsertJsonLd(id: string, data: Record<string, unknown> | Record<string, unknown>[]) {
  let el = document.getElementById(id) as HTMLScriptElement | null;
  if (el) el.remove();
  el = document.createElement('script');
  el.id = id;
  el.type = 'application/ld+json';
  el.textContent = JSON.stringify(data);
  document.head.appendChild(el);
}

export default function Seo({ title, description, path, jsonLd, ogImage, noindex }: SeoProps) {
  // Ensure canonical URL is always formatted properly
  const canonical = path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path.startsWith('/') ? path : '/' + path}`;
  const image = ogImage || `${SITE_URL}/icon-192.png`;

  useEffect(() => {
    document.title = title;
    upsertMeta('name', 'description', description);
    const robots = noindex
      ? 'noindex, nofollow'
      : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';
    upsertMeta('name', 'robots', robots);
    upsertLink('canonical', canonical);

    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', canonical);
    upsertMeta('property', 'og:type', 'website');
    upsertMeta('property', 'og:site_name', BUSINESS.legalName || BUSINESS.name);
    upsertMeta('property', 'og:image', image);

    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', title);
    upsertMeta('name', 'twitter:description', description);
    upsertMeta('name', 'twitter:image', image);

    if (jsonLd && jsonLd.length > 0) {
      upsertJsonLd('page-jsonld', jsonLd);
    } else {
      const existing = document.getElementById('page-jsonld');
      if (existing) existing.remove();
    }
  }, [title, description, canonical, image, jsonLd, noindex]);

  return null;
}

export { SITE_URL };
