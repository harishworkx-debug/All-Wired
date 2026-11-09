import { useEffect } from 'react';
import { BUSINESS } from '@/data/business';

interface SeoProps {
  title: string;
  description: string;
  path: string;
  jsonLd?: Record<string, unknown>[];
  ogImage?: string;
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

export default function Seo({ title, description, path, jsonLd, ogImage }: SeoProps) {
  const canonical = `${SITE_URL}${path}`;
  const image = ogImage || `${SITE_URL}/og-image.jpg`;

  useEffect(() => {
    document.title = title;
    upsertMeta('name', 'description', description);
    upsertLink('canonical', canonical);

    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', canonical);
    upsertMeta('property', 'og:type', 'website');
    upsertMeta('property', 'og:site_name', BUSINESS.name);
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
  }, [title, description, canonical, image, jsonLd]);

  return null;
}

export { SITE_URL };
