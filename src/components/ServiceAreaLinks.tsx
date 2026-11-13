import { Link } from 'react-router-dom';
import { ChevronRight, MapPin } from 'lucide-react';
import { LOCATIONS, locationUrl } from '@/data/business';

interface ServiceAreaLinksProps {
  highlight?: string;
  serviceSlug?: string;
  serviceName?: string;
}

export default function ServiceAreaLinks({ highlight, serviceSlug, serviceName }: ServiceAreaLinksProps = {}) {
  const cleanHighlight = highlight?.replace(/^(electrician|electrition)-/, '');
  const locations = cleanHighlight
    ? LOCATIONS.filter((l) => l.slug !== cleanHighlight)
    : LOCATIONS;

  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {locations.map((l) => {
        const targetUrl = serviceSlug ? `/${serviceSlug}-${l.slug}` : locationUrl(l.slug);
        const label = serviceName ? `${serviceName} in ${l.city}` : `${l.city}, ${l.state}`;

        return (
          <Link
            key={l.slug}
            to={targetUrl}
            className="group flex items-center justify-between rounded-xl border border-navy-100 bg-white px-4 py-3.5 transition-all hover:border-electric-300 hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
          >
            <span className="flex items-center gap-2.5">
              <MapPin className="h-4 w-4 shrink-0 text-amber-500" aria-hidden="true" />
              <span className="text-sm font-medium text-navy-800 group-hover:text-electric-600">
                {label}
              </span>
            </span>
            <ChevronRight className="h-4 w-4 shrink-0 text-navy-300 transition-transform group-hover:translate-x-0.5 group-hover:text-electric-600" aria-hidden="true" />
          </Link>
        );
      })}
    </div>
  );
}
