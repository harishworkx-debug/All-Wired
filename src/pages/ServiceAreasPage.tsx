import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Phone } from 'lucide-react';
import Seo from '@/components/Seo';
import Reveal from '@/components/Reveal';
import CallButton from '@/components/CallButton';
import Breadcrumbs from '@/components/Breadcrumbs';
import CtaSection from '@/components/CtaSection';
import { BUSINESS, LOCATIONS, SERVICES } from '@/data/business';
import { localBusinessSchema, breadcrumbSchema } from '@/lib/schema';

export default function ServiceAreasPage() {
  const jsonLd = [
    localBusinessSchema(),
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Service Areas', path: '/service-areas' },
    ]),
  ];

  return (
    <>
      <Seo
        title="Service Areas | All Wired Electrician in Utah County"
        description="All Wired serves American Fork, Lehi, Pleasant Grove, Highland, Alpine, Cedar Hills, Lindon, Orem, Provo, and other Utah County communities. Call (801) 800-2828 to confirm availability."
        path="/service-areas"
        jsonLd={jsonLd}
      />

      <section className="bg-navy-900 py-14 lg:py-20">
        <div className="container-x">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-amber-400">
              Service Areas
            </p>
            <h1 className="mt-3 font-display text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl text-balance">
              Serving American Fork & Utah County
            </h1>
            <p className="mt-5 text-lg text-gray-300 text-pretty">
              All Wired is based in American Fork, Utah and serves homeowners and businesses
              throughout Utah County. From repairs to panel upgrades and EV charger installation,
              we are your nearby licensed electrician. Call to confirm service availability for your
              specific location.
            </p>
            <div className="mt-7">
              <CallButton variant="primary" label={`Call ${BUSINESS.phone}`} />
            </div>
          </div>
        </div>
      </section>

      <div className="bg-gray-50 pt-6">
        <div className="container-x">
          <Breadcrumbs items={[{ name: 'Home', path: '/' }, { name: 'Service Areas' }]} />
        </div>
      </div>

      <section className="section-pad bg-gray-50">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-2xl font-bold text-navy-900 sm:text-3xl text-balance">
              Communities We Serve
            </h2>
            <p className="mt-3 text-base text-navy-600">
              Click your city to see the electrical services available in your area.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {LOCATIONS.map((l, i) => (
              <Reveal key={l.slug} delay={i * 50}>
                <Link
                  to={`/${l.slug}`}
                  className="group block h-full rounded-2xl border border-navy-100 bg-white p-6 shadow-sm transition-all hover:border-electric-300 hover:shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900">
                      <MapPin className="h-5 w-5 text-amber-400" aria-hidden="true" />
                    </span>
                    <ArrowRight className="h-5 w-5 text-navy-300 transition-transform group-hover:translate-x-1 group-hover:text-electric-600" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-navy-900">
                    {l.city}, {l.state}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-600">
                    {l.short === 'American Fork'
                      ? 'Our primary service area and home base.'
                      : `${l.county} — near American Fork.`}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {SERVICES.slice(0, 3).map((s) => (
                      <span
                        key={s.slug}
                        className="rounded-md bg-gray-50 px-2 py-0.5 text-xs text-navy-500"
                      >
                        {s.shortName}
                      </span>
                    ))}
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Not Sure If We Serve Your Area?"
        subtitle="Call All Wired and we will confirm service availability for your location. We serve American Fork and communities throughout Utah County."
      />
    </>
  );
}
