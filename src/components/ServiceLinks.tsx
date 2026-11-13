import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { SERVICES, serviceLocationUrl } from '@/data/business';

interface ServiceLinksProps {
  highlight?: string;
  locationSlug?: string;
  locationCity?: string;
}

export default function ServiceLinks({ highlight, locationSlug, locationCity }: ServiceLinksProps = {}) {
  const services = highlight ? SERVICES.filter((s) => s.slug !== highlight) : SERVICES;

  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {services.map((s) => {
        const targetUrl = locationSlug
          ? serviceLocationUrl(s.slug, locationSlug)
          : `/services/${s.slug}`;
        const label = locationCity ? `${s.name} in ${locationCity}` : s.name;

        return (
          <Link
            key={s.slug}
            to={targetUrl}
            className="group flex items-center justify-between rounded-xl border border-navy-100 bg-white px-4 py-3.5 transition-all hover:border-electric-300 hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
          >
            <span className="text-sm font-medium text-navy-800 group-hover:text-electric-600">
              {label}
            </span>
            <ChevronRight className="h-4 w-4 text-navy-300 transition-transform group-hover:translate-x-0.5 group-hover:text-electric-600" aria-hidden="true" />
          </Link>
        );
      })}
    </div>
  );
}
