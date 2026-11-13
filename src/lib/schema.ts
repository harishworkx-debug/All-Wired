import { BUSINESS, SERVICES, LOCATIONS, locationUrl, type ServiceInfo, type LocationInfo } from '@/data/business';
import { SITE_URL } from '@/components/Seo';
import type { BlogPost } from '@/data/blog';

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Electrician',
    '@id': `${SITE_URL}/#business`,
    name: BUSINESS.legalName,
    alternateName: BUSINESS.name,
    description: `${BUSINESS.legalName} is a licensed electrician based in ${BUSINESS.address.city}, ${BUSINESS.address.state} providing electrical repair, panel upgrades, EV charger installation, and remodel electrical services.`,
    url: BUSINESS.website,
    telephone: '+1-801-800-2828',
    image: `${SITE_URL}/icon-192.png`,
    priceRange: '$$',
    paymentAccepted: BUSINESS.paymentMethods.join(', '),
    areaServed: LOCATIONS.map((l) => ({
      '@type': 'City',
      name: l.city,
      addressRegion: l.state,
    })),
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.state,
      postalCode: BUSINESS.address.zip,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 40.3772,
      longitude: -111.8084,
    },
    hasCredential: `Utah License #${BUSINESS.license.number}`,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: BUSINESS.rating,
      reviewCount: BUSINESS.reviewCount,
      bestRating: '5',
      worstRating: '1',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '17:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '14:00',
      },
    ],
    sameAs: [BUSINESS.mapsLink],
  };
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: BUSINESS.legalName,
    alternateName: BUSINESS.name,
    url: BUSINESS.website,
    telephone: '+1-801-800-2828',
    logo: `${SITE_URL}/icon-192.png`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.state,
      postalCode: BUSINESS.address.zip,
      addressCountry: 'US',
    },
    sameAs: [BUSINESS.mapsLink],
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: BUSINESS.legalName,
    url: BUSINESS.website,
    publisher: { '@id': `${SITE_URL}/#organization` },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function serviceSchema(service: ServiceInfo, locationSlug?: string) {
  const location = locationSlug ? LOCATIONS.find((l) => l.slug === locationSlug) : null;
  const url = locationSlug
    ? `${SITE_URL}/${service.slug}-${locationSlug}`
    : `${SITE_URL}/services`;

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: location ? `${service.name} in ${location.city}, ${location.state}` : service.name,
    description: service.description,
    provider: { '@id': `${SITE_URL}/#business` },
    areaServed: location
      ? { '@type': 'City', name: location.city, addressRegion: location.state }
      : LOCATIONS.map((l) => ({ '@type': 'City', name: l.city, addressRegion: l.state })),
    serviceType: service.name,
    url,
  };
}

export function placeSchema(location: LocationInfo) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Electrical Services in ${location.city}, ${location.state}`,
    description: location.description,
    provider: { '@id': `${SITE_URL}/#business` },
    areaServed: {
      '@type': 'City',
      name: location.city,
      addressRegion: location.state,
    },
    url: `${SITE_URL}${locationUrl(location.slug)}`,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Electrical Services',
      itemListElement: SERVICES.map((s) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: `${s.name} in ${location.city}`,
          url: `${SITE_URL}/${s.slug}-${location.slug}`,
        },
      })),
    },
  };
}

export function articleSchema(post: BlogPost) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${SITE_URL}/blog/${post.slug}#article`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/blog/${post.slug}`,
    },
    headline: post.title,
    description: post.metaDescription,
    image: post.image,
    datePublished: '2026-11-01T08:00:00+00:00',
    dateModified: '2026-11-13T08:00:00+00:00',
    author: {
      '@type': 'Organization',
      name: BUSINESS.legalName,
      url: BUSINESS.website,
    },
    publisher: {
      '@type': 'Organization',
      name: BUSINESS.legalName,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/icon-192.png`,
      },
    },
    about: {
      '@type': 'Thing',
      name: post.mainKeyword,
    },
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };
}
