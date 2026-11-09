import { BUSINESS, SERVICES, LOCATIONS, type ServiceInfo, type LocationInfo } from '@/data/business';
import { SITE_URL } from '@/components/Seo';

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Electrician',
    '@id': `${SITE_URL}/#business`,
    name: BUSINESS.name,
    legalName: BUSINESS.legalName,
    description: `${BUSINESS.name} is a licensed electrician based in ${BUSINESS.address.city}, ${BUSINESS.address.state} providing electrical repair, panel upgrades, EV charger installation, and remodel electrical services.`,
    url: BUSINESS.website,
    telephone: BUSINESS.phoneHref.replace('tel:', ''),
    image: `${SITE_URL}/og-image.jpg`,
    priceRange: '$$',
    paymentAccepted: BUSINESS.paymentMethods.join(', '),
    areaServed: LOCATIONS.map((l) => `${l.city}, ${l.state}`),
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
    name: BUSINESS.name,
    url: BUSINESS.website,
    telephone: BUSINESS.phoneHref.replace('tel:', ''),
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.state,
      postalCode: BUSINESS.address.zip,
      addressCountry: 'US',
    },
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: BUSINESS.name,
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
    url: `${SITE_URL}/${location.slug}`,
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
