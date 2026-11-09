import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Zap, ChevronDown } from 'lucide-react';
import { BUSINESS, SERVICES, LOCATIONS, locationUrl } from '@/data/business';
import CallButton from './CallButton';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setAreasOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const navLinkClass =
    'text-sm font-medium text-navy-700 hover:text-electric-600 transition-colors duration-200';

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 shadow-md shadow-navy-900/5 backdrop-blur-md'
            : 'bg-white shadow-sm'
        }`}
      >
        <div className="container-x">
          <div className="flex h-16 items-center justify-between gap-4 lg:h-18">
            <Link to="/" className="flex items-center gap-2.5" aria-label="All Wired home">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy-900 shadow-md">
                <Zap className="h-5 w-5 text-amber-400" fill="currentColor" aria-hidden="true" />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-lg font-extrabold text-navy-900">All Wired</span>
                <span className="text-[10px] font-medium uppercase tracking-wider text-navy-500">
                  Electrician
                </span>
              </span>
            </Link>

            <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
              <Link to="/" className={navLinkClass}>
                Home
              </Link>
              <Link to="/about" className={navLinkClass}>
                About Us
              </Link>

              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  className={`flex items-center gap-1 ${navLinkClass}`}
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                >
                  Services
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                  />
                </button>
                {servicesOpen && (
                  <div className="absolute left-0 top-full pt-3">
                    <div className="w-72 rounded-2xl border border-navy-100 bg-white p-2 shadow-xl shadow-navy-900/10">
                      <Link
                        to="/services"
                        className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-navy-900 hover:bg-gray-50"
                      >
                        All Electrical Services
                      </Link>
                      <div className="my-1 h-px bg-navy-100" />
                      {SERVICES.map((s) => (
                        <Link
                          key={s.slug}
                          to={`/${s.slug}-american-fork-ut`}
                          className="block rounded-lg px-3 py-2.5 text-sm text-navy-700 hover:bg-gray-50 hover:text-electric-600"
                        >
                          {s.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div
                className="relative"
                onMouseEnter={() => setAreasOpen(true)}
                onMouseLeave={() => setAreasOpen(false)}
              >
                <button
                  className={`flex items-center gap-1 ${navLinkClass}`}
                  aria-expanded={areasOpen}
                  aria-haspopup="true"
                >
                  Service Areas
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${areasOpen ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                  />
                </button>
                {areasOpen && (
                  <div className="absolute left-0 top-full pt-3">
                    <div className="grid w-[34rem] grid-cols-2 gap-1 rounded-2xl border border-navy-100 bg-white p-2 shadow-xl shadow-navy-900/10">
                      <Link
                        to="/service-areas"
                        className="col-span-2 mb-1 block rounded-lg px-3 py-2.5 text-sm font-semibold text-navy-900 hover:bg-gray-50"
                      >
                        All Service Areas
                      </Link>
                      {LOCATIONS.map((l) => (
                        <Link
                          key={l.slug}
                          to={locationUrl(l.slug)}
                          className="block rounded-lg px-3 py-2 text-sm text-navy-700 hover:bg-gray-50 hover:text-electric-600"
                        >
                          {l.city}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link to="/contact" className={navLinkClass}>
                Contact
              </Link>
            </nav>

            <div className="hidden lg:block">
              <CallButton variant="small" label={`(${BUSINESS.phone.replace(/[()]/g, '').split(' ')[0]}) 800-2828`} />
            </div>

            <button
              className="flex h-10 w-10 items-center justify-center rounded-lg text-navy-900 hover:bg-gray-100 lg:hidden"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              aria-expanded={mobileOpen}
            >
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div
            className="absolute inset-0 bg-navy-950/60 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute right-0 top-0 h-full w-[85%] max-w-sm overflow-y-auto bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-navy-100 px-4 py-4">
              <span className="font-display text-lg font-extrabold text-navy-900">Menu</span>
              <button
                className="flex h-10 w-10 items-center justify-center rounded-lg text-navy-900 hover:bg-gray-100"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <nav className="px-4 py-4" aria-label="Mobile navigation">
              <Link to="/" className="block rounded-lg px-3 py-3 text-base font-medium text-navy-900 hover:bg-gray-50">
                Home
              </Link>
              <Link to="/about" className="block rounded-lg px-3 py-3 text-base font-medium text-navy-900 hover:bg-gray-50">
                About Us
              </Link>

              <div className="py-2">
                <p className="px-3 pb-1 text-xs font-semibold uppercase tracking-wider text-navy-400">
                  Services
                </p>
                <Link to="/services" className="block rounded-lg px-3 py-2.5 text-sm font-medium text-navy-700 hover:bg-gray-50">
                  All Electrical Services
                </Link>
                {SERVICES.map((s) => (
                  <Link
                    key={s.slug}
                    to={`/${s.slug}-american-fork-ut`}
                    className="block rounded-lg px-3 py-2.5 text-sm text-navy-600 hover:bg-gray-50"
                  >
                    {s.name}
                  </Link>
                ))}
              </div>

              <div className="py-2">
                <p className="px-3 pb-1 text-xs font-semibold uppercase tracking-wider text-navy-400">
                  Service Areas
                </p>
                <Link to="/service-areas" className="block rounded-lg px-3 py-2.5 text-sm font-medium text-navy-700 hover:bg-gray-50">
                  All Service Areas
                </Link>
                {LOCATIONS.map((l) => (
                  <Link
                    key={l.slug}
                    to={locationUrl(l.slug)}
                    className="block rounded-lg px-3 py-2.5 text-sm text-navy-600 hover:bg-gray-50"
                  >
                    {l.city}
                  </Link>
                ))}
              </div>

              <Link to="/contact" className="block rounded-lg px-3 py-3 text-base font-medium text-navy-900 hover:bg-gray-50">
                Contact
              </Link>
            </nav>

            <div className="border-t border-navy-100 p-4">
              <a
                href={BUSINESS.phoneHref}
                className="btn-call w-full"
                aria-label={`Call All Wired at ${BUSINESS.phone}`}
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                Call {BUSINESS.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
