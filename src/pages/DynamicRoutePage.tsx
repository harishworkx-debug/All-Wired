import { useParams, Navigate } from 'react-router-dom';
import { SERVICES, getLocation, locationUrl } from '@/data/business';
import LocationPage from './LocationPage';
import ServiceLocationPage from './ServiceLocationPage';
import NotFoundPage from './NotFoundPage';

export default function DynamicRoutePage() {
  const { slug } = useParams();

  if (!slug) return <NotFoundPage />;

  // Check if it's an electrician service area URL (e.g. "electrician-lindon-ut")
  if (slug.startsWith('electrician-')) {
    const loc = getLocation(slug);
    if (loc) return <LocationPage locationSlug={loc.slug} />;
  }

  // Handle common typo "electrition-" by redirecting to canonical "electrician-"
  if (slug.startsWith('electrition-')) {
    const loc = getLocation(slug);
    if (loc) return <Navigate to={locationUrl(loc.slug)} replace />;
  }

  // If visited via old bare location URL (e.g. "lindon-ut"), redirect to canonical "/electrician-lindon-ut"
  const bareLocation = getLocation(slug);
  if (bareLocation) {
    return <Navigate to={locationUrl(bareLocation.slug)} replace />;
  }

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
            locationSlug={loc.slug}
          />
        );
      }
    }
  }

  return <Navigate to="/404" replace />;
}
