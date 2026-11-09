import { useParams, Navigate } from 'react-router-dom';
import { SERVICES, getService, getLocation } from '@/data/business';
import LocationPage from './LocationPage';
import ServiceLocationPage from './ServiceLocationPage';
import NotFoundPage from './NotFoundPage';

export default function DynamicRoutePage() {
  const { slug } = useParams();

  if (!slug) return <NotFoundPage />;

  // Check if it's a pure location slug (e.g., "american-fork-ut")
  const location = getLocation(slug);
  if (location) return <LocationPage locationSlug={slug} />;

  // Check if it's a service-location combination (e.g., "electrical-repair-american-fork-ut")
  for (const service of SERVICES) {
    const prefix = `${service.slug}-`;
    if (slug.startsWith(prefix)) {
      const remainingSlug = slug.slice(prefix.length);
      const loc = getLocation(remainingSlug);
      if (loc) {
        return (
          <ServiceLocationPage
            serviceSlug={service.slug}
            locationSlug={remainingSlug}
          />
        );
      }
    }
  }

  return <Navigate to="/404" replace />;
}
