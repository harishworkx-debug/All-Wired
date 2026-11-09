import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { SERVICES } from '@/data/business';

export default function ServiceLinks({ highlight }: { highlight?: string }) {
  const services = highlight ? SERVICES.filter((s) => s.slug !== highlight) : SERVICES;

  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {services.map((s) => (
        <Link
          key={s.slug}
          to={`/services/${s.slug}`}
          className="group flex items-center justify-between rounded-xl border border-navy-100 bg-white px-4 py-3.5 transition-all hover:border-electric-300 hover:shadow-md"
        >
          <span className="text-sm font-medium text-navy-800 group-hover:text-electric-600">
            {s.name}
          </span>
          <ChevronRight className="h-4 w-4 text-navy-300 transition-transform group-hover:translate-x-0.5 group-hover:text-electric-600" aria-hidden="true" />
        </Link>
      ))}
    </div>
  );
}
