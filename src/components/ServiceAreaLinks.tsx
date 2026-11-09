import { Link } from 'react-router-dom';
import { ChevronRight, MapPin } from 'lucide-react';
import { LOCATIONS } from '@/data/business';

export default function ServiceAreaLinks({ highlight }: { highlight?: string }) {
  const locations = highlight
    ? LOCATIONS.filter((l) => l.slug !== highlight)
    : LOCATIONS;

  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {locations.map((l) => (
        <Link
          key={l.slug}
          to={`/${l.slug}`}
          className="group flex items-center justify-between rounded-xl border border-navy-100 bg-white px-4 py-3.5 transition-all hover:border-electric-300 hover:shadow-md"
        >
          <span className="flex items-center gap-2.5">
            <MapPin className="h-4 w-4 text-amber-500" aria-hidden="true" />
            <span className="text-sm font-medium text-navy-800 group-hover:text-electric-600">
              {l.city}, {l.state}
            </span>
          </span>
          <ChevronRight className="h-4 w-4 text-navy-300 transition-transform group-hover:translate-x-0.5 group-hover:text-electric-600" aria-hidden="true" />
        </Link>
      ))}
    </div>
  );
}
