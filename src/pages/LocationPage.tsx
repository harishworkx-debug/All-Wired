import { Link, useParams, Navigate } from 'react-router-dom';
import { MapPin, Phone, CheckCircle2, ArrowRight, ChevronRight } from 'lucide-react';
import Seo from '@/components/Seo';
import Reveal from '@/components/Reveal';
import CallButton from '@/components/CallButton';
import Breadcrumbs from '@/components/Breadcrumbs';
import CtaSection from '@/components/CtaSection';
import FaqList from '@/components/FaqList';
import ServiceAreaLinks from '@/components/ServiceAreaLinks';
import { BUSINESS, SERVICES, getLocation, LOCATIONS, locationUrl, serviceLocationUrl } from '@/data/business';
import { placeSchema, breadcrumbSchema, localBusinessSchema } from '@/lib/schema';

interface LocationPageProps {
  locationSlug?: string;
}

export default function LocationPage({ locationSlug: propSlug }: LocationPageProps = {}) {
  const params = useParams();
  const rawSlug = propSlug ?? params.locationSlug ?? params.slug;
  const location = rawSlug ? getLocation(rawSlug) : undefined;

  if (!location) return <Navigate to="/404" replace />;

  const isPrimary = location.slug === 'american-fork-ut';
  const urlPath = locationUrl(location.slug);
  const jsonLd = [
    localBusinessSchema(),
    placeSchema(location),
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Service Areas', path: '/service-areas' },
      { name: location.city, path: urlPath },
    ]),
  ];

  return (
    <>
      <Seo
        title={location.metaTitle}
        description={location.metaDescription}
        path={urlPath}
        jsonLd={jsonLd}
      />

      <section className="relative overflow-hidden bg-navy-900">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/2898199/pexels-photo-2898199.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600"
            alt={`Electrician serving ${location.city}, ${location.state}`}
            className="h-full w-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-900/85 to-navy-900/60" />
        </div>
        <div className="container-x relative">
          <div className="py-16 sm:py-20 lg:py-24">
            <div className="max-w-2xl">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-400/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-300 ring-1 ring-amber-400/30">
                  <MapPin className="h-3 w-3" aria-hidden="true" />
                  {location.city}, {location.state}
                </span>
                {isPrimary && (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-gray-200 ring-1 ring-white/15">
                    Primary Service Area
                  </span>
                )}
              </div>
              <h1 className="mt-5 font-display text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl text-balance">
                Electrician in {location.city}, {location.state}
              </h1>
              <p className="mt-5 text-lg text-gray-200 text-pretty">{location.description}</p>
              <div className="mt-7">
                <CallButton variant="primary" label={`Call ${BUSINESS.phone}`} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-gray-50 pt-6">
        <div className="container-x">
          <Breadcrumbs
            items={[
              { name: 'Home', path: '/' },
              { name: 'Service Areas', path: '/service-areas' },
              { name: location.city },
            ]}
          />
        </div>
      </div>

      <section className="section-pad bg-gray-50">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-3">
            <Reveal className="lg:col-span-2">
              <h2 className="font-display text-2xl font-bold text-navy-900 sm:text-3xl">
                Electrical Services in {location.city}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-navy-600">
                {location.context}
              </p>

              <h3 className="mt-8 font-display text-xl font-bold text-navy-900">
                Services Available in {location.city}
              </h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {SERVICES.map((s) => (
                  <Link
                    key={s.slug}
                    to={`/${s.slug}-${location.slug}`}
                    className="group flex items-center justify-between rounded-xl border border-navy-100 bg-white px-4 py-3.5 transition-all hover:border-electric-300 hover:shadow-md"
                  >
                    <span className="text-sm font-medium text-navy-800 group-hover:text-electric-600">
                      {s.name} in {location.city}
                    </span>
                    <ChevronRight className="h-4 w-4 text-navy-300 transition-transform group-hover:translate-x-0.5 group-hover:text-electric-600" aria-hidden="true" />
                  </Link>
                ))}
              </div>

              <h3 className="mt-8 font-display text-xl font-bold text-navy-900">
                Why {location.city} Homeowners Choose All Wired
              </h3>
              <ul className="mt-4 space-y-3">
                {[
                  `Licensed Utah electrician with over 30 years of experience`,
                  `Based in American Fork, just ${isPrimary ? 'right here in town' : 'minutes away'}`,
                  `Free project estimates and emergency service available`,
                  `Permits, inspections, and code compliance on every job`,
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-electric-500" aria-hidden="true" />
                    <span className="text-sm leading-relaxed text-navy-700 sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={100}>
              <div className="sticky top-24 space-y-5">
                <div className="rounded-2xl bg-navy-900 p-6 text-center shadow-lg">
                  <Phone className="mx-auto h-8 w-8 text-amber-400" aria-hidden="true" />
                  <p className="mt-3 text-sm text-gray-300">Call to schedule service in {location.city}</p>
                  <a
                    href={BUSINESS.phoneHref}
                    className="mt-2 block font-display text-2xl font-bold text-white hover:text-amber-400"
                  >
                    {BUSINESS.phone}
                  </a>
                  <div className="mt-4">
                    <CallButton variant="primary" label="Call Now" className="w-full" />
                  </div>
                  <p className="mt-3 text-xs text-gray-400">Free estimates · Emergency service</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-2">
            <Reveal>
              <h2 className="font-display text-2xl font-bold text-navy-900">
                Nearby Service Areas
              </h2>
              <p className="mt-3 text-base text-navy-600">
                All Wired also serves these neighboring Utah County communities.
              </p>
              <div className="mt-5">
                <ServiceAreaLinks highlight={location.slug} />
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-display text-2xl font-bold text-navy-900">
                Browse All Services
              </h2>
              <p className="mt-3 text-base text-navy-600">
                See the full range of electrical services we offer.
              </p>
              <div className="mt-5">
                <Link to="/services" className="btn-outline">
                  All Electrical Services
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-pad bg-gray-50">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl">
            <h2 className="text-center font-display text-2xl font-bold text-navy-900 sm:text-3xl text-balance">
              {location.city} Electrical Service FAQs
            </h2>
            <div className="mt-8">
              <FaqList faqs={location.faqs} />
            </div>
          </Reveal>
        </div>
      </section>

      <CtaSection
        title={`Call All Wired for Electrical Service in ${location.city}`}
        subtitle="Speak with a licensed electrician about your project. Free estimates, emergency service, and over 30 years of experience."
      />
    </>
  );
}

