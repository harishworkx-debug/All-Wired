import { Link } from 'react-router-dom';
import {
  Wrench,
  Zap,
  BatteryCharging,
  Home,
  Building2,
  Phone,
  ArrowRight,
  CheckCircle2,
  Lightbulb,
  Plug,
  ShieldCheck,
  Search,
  Award,
  MapPin,
} from 'lucide-react';
import Seo from '@/components/Seo';
import Reveal from '@/components/Reveal';
import CallButton from '@/components/CallButton';
import Breadcrumbs from '@/components/Breadcrumbs';
import CtaSection from '@/components/CtaSection';
import ServiceAreaLinks from '@/components/ServiceAreaLinks';
import {
  BUSINESS,
  SERVICES,
  CORE_SERVICES,
  LOCATIONS,
  coreServiceLocationUrl,
  serviceLocationUrl,
} from '@/data/business';
import { breadcrumbSchema, localBusinessSchema } from '@/lib/schema';

const ICONS: Record<string, typeof Wrench> = {
  Wrench,
  Zap,
  BatteryCharging,
  Home,
  House: Home,
  Building2,
  Lightbulb,
  Plug,
  ShieldCheck,
  Search,
};

const CORE_SERVICE_ANCHORS: Record<string, string> = {
  'electrical-repairs-and-upgrades': 'Electrical Repair Services in American Fork',
  'wiring-and-installations': 'Professional Electrical Wiring and Installation',
  'lighting-solutions': 'Indoor and Outdoor Lighting Installation',
  'generators-and-backup-power': 'Home Generator Installation',
  'ev-chargers-and-modern-power': 'EV Charger Installation in American Fork',
};

export default function ServicesOverviewPage() {
  const jsonLd = [
    localBusinessSchema(),
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Services', path: '/services' },
    ]),
  ];

  return (
    <>
      <Seo
        title="Electrical Services in American Fork, UT | All Wired LLC"
        description="Comprehensive residential and commercial electrical services in American Fork, UT. Panel upgrades, EV chargers, wiring, repairs, and lighting. Call (801) 800-2828."
        path="/services"
        jsonLd={jsonLd}
      />

      {/* Hero */}
      <section className="bg-navy-900 py-16 lg:py-24">
        <div className="container-x">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-400/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-300 ring-1 ring-amber-400/30">
                <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
                Licensed Utah Contractor #{BUSINESS.license.number}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-gray-200 ring-1 ring-white/15">
                <Award className="h-3.5 w-3.5 text-amber-400" aria-hidden="true" />
                40+ Years Industry Experience
              </span>
            </div>

            <h1 className="mt-4 font-display text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl text-balance">
              Complete Electrical Services in American Fork & Utah County
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-gray-300 text-pretty">
              All Wired LLC provides master-level electrical craftsmanship for residential and light commercial properties. From urgent breaker troubleshooting and 200A panel upgrades to EV charging stations and backup generators, we do it right the first time.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CallButton variant="primary" label={`Call ${BUSINESS.phone}`} />
              <Link to="/contact" className="btn-secondary">
                Request Free Estimate
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="bg-gray-50 pt-6">
        <div className="container-x">
          <Breadcrumbs items={[{ name: 'Home', path: '/' }, { name: 'Electrical Services' }]} />
        </div>
      </div>

      {/* Section 1: Core Service Pillars */}
      <section className="section-pad bg-gray-50">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-electric-600">
              Core Electrical Pillars
            </span>
            <h2 className="mt-2 font-display text-2xl font-bold text-navy-900 sm:text-3xl text-balance">
              Primary Electrical Solutions in American Fork & Utah County
            </h2>
            <p className="mt-3 text-base text-navy-600">
              Our 5 main service pillars cover the most essential power, safety, and modern convenience upgrades for American Fork, Lehi, and Utah County properties.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CORE_SERVICES.map((cs, i) => {
              const Icon = ICONS[cs.icon] ?? Wrench;
              return (
                <Reveal key={cs.slug} delay={i * 70}>
                  <div className="card group flex h-full flex-col overflow-hidden transition-all duration-300 hover:border-electric-300 hover:shadow-xl hover:-translate-y-1">
                    <Link
                      to={coreServiceLocationUrl(cs.slug, 'american-fork-ut')}
                      className="relative block h-48 overflow-hidden"
                    >
                      <img
                        src={cs.image}
                        alt={`${cs.name} in American Fork, UT — ${cs.imageAlt}`}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 to-transparent" />
                      <span className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-400 shadow-lg">
                        <Icon className="h-5.5 w-5.5 text-navy-900" aria-hidden="true" />
                      </span>
                      <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-navy-900/80 px-2.5 py-1 text-[11px] font-medium text-amber-300 backdrop-blur-sm">
                        <MapPin className="h-3 w-3 text-amber-400" aria-hidden="true" />
                        American Fork & Utah County
                      </span>
                    </Link>
                    <div className="flex flex-1 flex-col p-6">
                      <Link to={coreServiceLocationUrl(cs.slug, 'american-fork-ut')}>
                        <h3 className="font-display text-xl font-bold text-navy-900 transition-colors group-hover:text-electric-600">
                          {cs.name} in American Fork, UT
                        </h3>
                      </Link>
                      <p className="mt-2 text-sm leading-relaxed text-navy-600 flex-1">
                        {cs.tagline}
                      </p>

                      {/* City Service Links */}
                      <div className="mt-4 border-t border-navy-100 pt-3">
                        <p className="text-[11px] font-semibold uppercase tracking-wider text-navy-500">
                          Available in Cities:
                        </p>
                        <div className="mt-1.5 flex flex-wrap gap-1.5">
                          {LOCATIONS.slice(0, 4).map((loc) => (
                            <Link
                              key={loc.slug}
                              to={coreServiceLocationUrl(cs.slug, loc.slug)}
                              className="rounded-md bg-navy-50 px-2 py-0.5 text-xs font-medium text-navy-700 transition-colors hover:bg-electric-50 hover:text-electric-700"
                            >
                              {loc.short}
                            </Link>
                          ))}
                        </div>
                      </div>

                      <div className="mt-4 flex items-center justify-between border-t border-navy-100 pt-3">
                        <Link
                          to={coreServiceLocationUrl(cs.slug, 'american-fork-ut')}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-electric-600 hover:text-electric-700"
                        >
                          {CORE_SERVICE_ANCHORS[cs.slug] || `${cs.name} in American Fork`}
                          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 2: Specialized Service Catalog */}
      <section className="section-pad border-t border-navy-100 bg-white">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-electric-600">
              Specialized Service Catalog
            </span>
            <h2 className="mt-2 font-display text-2xl font-bold text-navy-900 sm:text-3xl text-balance">
              Detailed Electrical Installation & Repair Options in American Fork, UT
            </h2>
            <p className="mt-3 text-base text-navy-600">
              Browse our individual service capabilities with pricing factors, common issues, and step-by-step processes for Utah County homeowners.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => {
              const Icon = ICONS[s.icon] ?? Wrench;
              return (
                <Reveal key={s.slug} delay={i * 60}>
                  <div className="card group flex h-full flex-col overflow-hidden transition-all duration-300 hover:border-electric-300 hover:shadow-xl hover:-translate-y-1">
                    <Link
                      to={serviceLocationUrl(s.slug, 'american-fork-ut')}
                      className="relative block h-44 overflow-hidden"
                    >
                      <img
                        src={s.image}
                        alt={`${s.name} in American Fork, UT — ${s.imageAlt}`}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent" />
                      <span className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400 shadow-md">
                        <Icon className="h-5 w-5 text-navy-900" aria-hidden="true" />
                      </span>
                      <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-navy-900/80 px-2.5 py-1 text-[11px] font-medium text-amber-300 backdrop-blur-sm">
                        <MapPin className="h-3 w-3 text-amber-400" aria-hidden="true" />
                        American Fork, UT
                      </span>
                    </Link>
                    <div className="flex flex-1 flex-col p-6">
                      <Link to={serviceLocationUrl(s.slug, 'american-fork-ut')}>
                        <h3 className="font-display text-lg font-bold text-navy-900 transition-colors group-hover:text-electric-600">
                          {s.name} in American Fork, UT
                        </h3>
                      </Link>
                      <p className="mt-2 text-xs sm:text-sm leading-relaxed text-navy-600 flex-1">
                        {s.description}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {s.commonIssues.slice(0, 2).map((issue) => (
                          <span
                            key={issue}
                            className="rounded-full bg-navy-50 px-2.5 py-1 text-[11px] font-medium text-navy-700"
                          >
                            {issue}
                          </span>
                        ))}
                      </div>

                      {/* City Links */}
                      <div className="mt-4 border-t border-navy-100 pt-3">
                        <p className="text-[11px] font-semibold uppercase tracking-wider text-navy-500">
                          Locations Served:
                        </p>
                        <div className="mt-1.5 flex flex-wrap gap-1.5">
                          {LOCATIONS.slice(0, 3).map((loc) => (
                            <Link
                              key={loc.slug}
                              to={serviceLocationUrl(s.slug, loc.slug)}
                              className="rounded-md bg-navy-50 px-2 py-0.5 text-xs font-medium text-navy-700 transition-colors hover:bg-electric-50 hover:text-electric-700"
                            >
                              {loc.short}
                            </Link>
                          ))}
                        </div>
                      </div>

                      <div className="mt-4 flex items-center justify-between border-t border-navy-100 pt-3">
                        <Link
                          to={serviceLocationUrl(s.slug, 'american-fork-ut')}
                          className="inline-flex items-center gap-1 text-xs font-semibold text-electric-600 hover:text-electric-700"
                        >
                          View {s.name} in American Fork
                          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 3: Verified Service Areas */}
      <section className="section-pad bg-gray-50 border-t border-navy-100">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-2xl font-bold text-navy-900 sm:text-3xl text-balance">
              Serving Homes Across Utah County
            </h2>
            <p className="mt-3 text-base text-navy-600">
              Based in American Fork, All Wired proudly provides all of the above services across Northern Utah County and Salt Lake County borders.
            </p>
          </Reveal>
          <div className="mt-10">
            <ServiceAreaLinks />
          </div>
        </div>
      </section>

      <CtaSection
        title="Ready to Discuss Your Electrical Project?"
        subtitle="Speak directly with an experienced master electrician. Free estimates, emergency service, and over 40 years of trusted local craftsmanship."
      />
    </>
  );
}
