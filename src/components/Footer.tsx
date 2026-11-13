import { Link } from 'react-router-dom';
import { Zap, Phone, MapPin, Clock, ChevronRight } from 'lucide-react';
import { BUSINESS, SERVICES, LOCATIONS, locationUrl, CORE_SERVICES } from '@/data/business';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-gray-300">
      <div className="container-x py-14 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2.5" aria-label="All Wired home">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400">
                <Zap className="h-5 w-5 text-navy-900" fill="currentColor" aria-hidden="true" />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-lg font-extrabold text-white">All Wired</span>
                <span className="text-[10px] font-medium uppercase tracking-wider text-gray-400">
                  Electrician
                </span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Licensed electrician based in {BUSINESS.address.city}, {BUSINESS.address.state} serving
              Utah County with repairs, panel upgrades, EV chargers, and remodel electrical work.
            </p>
            <a
              href={BUSINESS.phoneHref}
              className="mt-5 inline-flex items-center gap-2 text-lg font-bold text-amber-400 hover:text-amber-300"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              {BUSINESS.phone}
            </a>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">Services</h2>
            <ul className="mt-4 space-y-2.5">
              {CORE_SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/${s.slug}`}
                    className="text-sm text-gray-400 transition-colors hover:text-amber-400"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/services"
                  className="text-sm font-medium text-electric-300 transition-colors hover:text-electric-200"
                >
                  All 10 Specialized Services →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">Service Areas</h2>
            <ul className="mt-4 grid grid-cols-2 gap-x-3 gap-y-2.5">
              {LOCATIONS.map((l) => (
                <li key={l.slug}>
                  <Link
                    to={locationUrl(l.slug)}
                    className="text-sm text-gray-400 transition-colors hover:text-amber-400"
                  >
                    {l.city}
                  </Link>
                </li>
              ))}
              <li className="col-span-2">
                <Link
                  to="/service-areas"
                  className="inline-flex items-center gap-1 text-sm font-medium text-electric-300 transition-colors hover:text-electric-200"
                >
                  All Service Areas
                  <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">Business Info</h2>
            <ul className="mt-4 space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" aria-hidden="true" />
                <span>
                  {BUSINESS.address.street}
                  <br />
                  {BUSINESS.address.city}, {BUSINESS.address.state} {BUSINESS.address.zip}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" aria-hidden="true" />
                <span>
                  Mon–Fri: 8AM–5PM
                  <br />
                  Sat: 9AM–2PM · Sun: Closed
                </span>
              </li>
              <li className="text-gray-400">
                Utah License #{BUSINESS.license.number}
              </li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              <Link to="/about" className="text-gray-400 transition-colors hover:text-amber-400">
                About
              </Link>
              <Link to="/blog" className="text-gray-400 transition-colors hover:text-amber-400">
                Guides
              </Link>
              <Link to="/contact" className="text-gray-400 transition-colors hover:text-amber-400">
                Contact
              </Link>
              <Link to="/privacy-policy" className="text-gray-400 transition-colors hover:text-amber-400">
                Privacy
              </Link>
              <Link to="/terms-and-conditions" className="text-gray-400 transition-colors hover:text-amber-400">
                Terms
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-navy-700 pt-6">
          <p className="text-xs text-gray-500">
            © {year} {BUSINESS.legalName}. All rights reserved. Serving {BUSINESS.address.city} and
            Utah County.
          </p>
        </div>
      </div>
    </footer>
  );
}
