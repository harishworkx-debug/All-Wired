import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export interface BreadcrumbItem {
  name: string;
  path?: string;
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <ol className="flex flex-wrap items-center gap-1.5 text-navy-500">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={i} className="flex items-center gap-1.5">
              {item.path && !isLast ? (
                <Link to={item.path} className="hover:text-electric-600">
                  {item.name}
                </Link>
              ) : (
                <span className="font-medium text-navy-700" aria-current={isLast ? 'page' : undefined}>
                  {item.name}
                </span>
              )}
              {!isLast && <ChevronRight className="h-3.5 w-3.5 text-navy-300" aria-hidden="true" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
