import { Link, useParams, Navigate } from 'react-router-dom';
import {
  Wrench, Zap, BatteryCharging, Home, Building2, Phone, CheckCircle2, ArrowRight, MapPin,
  Lightbulb, Plug, ShieldCheck, Search,
} from 'lucide-react';
import Seo from '@/components/Seo';
import Reveal from '@/components/Reveal';
import CallButton from '@/components/CallButton';
import Breadcrumbs from '@/components/Breadcrumbs';
import CtaSection from '@/components/CtaSection';
import FaqList from '@/components/FaqList';
import ServiceLinks from '@/components/ServiceLinks';
import ServiceAreaLinks from '@/components/ServiceAreaLinks';
import { BUSINESS, getService, getLocation, SERVICES, LOCATIONS, locationUrl } from '@/data/business';
import { serviceSchema, breadcrumbSchema } from '@/lib/schema';

const ICONS: Record<string, typeof Wrench> = {
  Wrench, Zap, BatteryCharging, Home, House: Home, Building2, Lightbulb, Plug, ShieldCheck, Search,
};

interface ServiceLocationPageProps {
  serviceSlug?: string;
  locationSlug?: string;
}

export default function ServiceLocationPage({
  serviceSlug: propServiceSlug,
  locationSlug: propLocationSlug,
}: ServiceLocationPageProps = {}) {
  const params = useParams();
  const serviceSlug = propServiceSlug ?? params.serviceSlug;
  const locationSlug = propLocationSlug ?? params.locationSlug;
  const service = serviceSlug ? getService(serviceSlug) : undefined;
  const location = locationSlug ? getLocation(locationSlug) : undefined;

  if (!service || !location) return <Navigate to="/404" replace />;

  const Icon = ICONS[service.icon] ?? Wrench;
  const path = `/${service.slug}-${location.slug}`;
  const isPrimary = location.slug === 'american-fork-ut';

  const locationSpecificFaqs = [
    ...service.faqs.map((f) => ({
      q: f.q,
      a: f.a,
    })),
    {
      q: `Do you offer ${service.name.toLowerCase()} in ${location.city}, Utah?`,
      a: isPrimary
        ? `Yes. All Wired is based in ${location.city} and offers ${service.name.toLowerCase()} directly to local homeowners and businesses. Call ${BUSINESS.phone} to discuss your project.`
        : `Yes. ${location.city} is within our Utah County service area, and we offer ${service.name.toLowerCase()} to homeowners and businesses there. Call ${BUSINESS.phone} to confirm availability for your specific location.`,
    },
  ];

  const jsonLd = [
    serviceSchema(service, location.slug),
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Services', path: '/services' },
      { name: service.name, path: `/services/${service.slug}` },
      { name: `${service.name} in ${location.city}`, path },
    ]),
  ];

  return (
    <>
      <Seo
        title={`${service.name} in ${location.city}, ${location.state} | All Wired`}
        description={`${service.name} in ${location.city}, ${location.state}. ${service.tagline}. Licensed electrician with over 40 years of experience. Call ${BUSINESS.phone}.`}
        path={path}
        jsonLd={jsonLd}
        ogImage={service.image}
      />

      <section className="relative overflow-hidden bg-navy-900">
        <div className="absolute inset-0">
          <img
            src={service.image}
            alt={`${service.name} in ${location.city}, ${location.state} — ${service.imageAlt}`}
            className="h-full w-full object-cover"
            loading="eager"
            fetchPriority="high"
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
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-gray-200 ring-1 ring-white/15">
                  <Icon className="h-3 w-3" aria-hidden="true" />
                  {service.name}
                </span>
              </div>
              <h1 className="mt-5 font-display text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl text-balance">
                {service.name} in {location.city}, {location.state}
              </h1>
              <p className="mt-5 text-lg text-gray-200 text-pretty">
                {isPrimary
                  ? service.description
                  : `All Wired offers ${service.name.toLowerCase()} to homeowners and businesses in ${location.city}, ${location.state}. ${service.tagline}.`}
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <CallButton variant="primary" label={`Call ${BUSINESS.phone}`} />
                <Link to="/services" className="btn-secondary">
                  All Services
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </Link>
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
              { name: 'Services', path: '/services' },
              { name: service.name, path: `/services/${service.slug}` },
              { name: `${location.city}, ${location.state}` },
            ]}
          />
        </div>
      </div>

      <section className="section-pad bg-gray-50">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-3">
            <Reveal className="lg:col-span-2">
              <h2 className="font-display text-2xl font-bold text-navy-900 sm:text-3xl">
                {service.name} in {location.city}: What We Do
              </h2>
              <p className="mt-4 text-base leading-relaxed text-navy-600">
                {isPrimary
                  ? service.description
                  : `If you are in ${location.city} and need ${service.name.toLowerCase()}, All Wired is your nearby licensed electrician. ${service.description}`}
              </p>
              {location.context && (
                <p className="mt-4 text-base leading-relaxed text-navy-600">
                  {location.context}
                </p>
              )}

              <h3 className="mt-8 font-display text-xl font-bold text-navy-900">
                Common Issues We Address in {location.city}
              </h3>
              <ul className="mt-4 space-y-3">
                {service.commonIssues.map((issue, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-electric-500" aria-hidden="true" />
                    <span className="text-sm leading-relaxed text-navy-700 sm:text-base">{issue}</span>
                  </li>
                ))}
              </ul>

              <h3 className="mt-8 font-display text-xl font-bold text-navy-900">
                Our {service.name} Process
              </h3>
              <div className="mt-4 space-y-5">
                {service.process.map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-navy-900 font-display text-base font-bold text-amber-400">
                      {i + 1}
                    </span>
                    <div>
                      <h4 className="font-display text-base font-bold text-navy-900">{step.title}</h4>
                      <p className="mt-1 text-sm leading-relaxed text-navy-600 sm:text-base">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="sticky top-24 space-y-5">
                <div className="rounded-2xl bg-navy-900 p-6 text-center shadow-lg">
                  <Phone className="mx-auto h-8 w-8 text-amber-400" aria-hidden="true" />
                  <p className="mt-3 text-sm text-gray-300">
                    Call about {service.name.toLowerCase()} in {location.city}
                  </p>
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

                <Link
                  to={locationUrl(location.slug)}
                  className="group block rounded-2xl border border-navy-100 bg-white p-5 shadow-sm transition-all hover:border-electric-300 hover:shadow-md cursor-pointer"
                >
                  <p className="text-sm font-bold text-navy-900 group-hover:text-electric-600 transition-colors">Service Area</p>
                  <p className="mt-1.5 text-sm text-navy-600">
                    Serving {location.city}, {location.state} and nearby Utah County communities.
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-electric-600 group-hover:text-electric-700">
                    All services in {location.city}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </Link>
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
                {service.name} in Nearby Utah County Areas
              </h2>
              <p className="mt-3 text-base text-navy-600">
                All Wired also offers {service.name.toLowerCase()} in these neighboring communities.
              </p>
              <div className="mt-5">
                <ServiceAreaLinks highlight={location.slug} />
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-display text-2xl font-bold text-navy-900">
                Other Electrical Services in {location.city}
              </h2>
              <p className="mt-3 text-base text-navy-600">
                We offer a full range of electrical services beyond {service.name.toLowerCase()}.
              </p>
              <div className="mt-5">
                <ServiceLinks highlight={service.slug} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-pad bg-gray-50">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl">
            <h2 className="text-center font-display text-2xl font-bold text-navy-900 sm:text-3xl text-balance">
              {service.name} in {location.city} — FAQs
            </h2>
            <div className="mt-8">
              <FaqList faqs={locationSpecificFaqs} />
            </div>
          </Reveal>
        </div>
      </section>

      <CtaSection
        title={`Call All Wired for ${service.name} in ${location.city}`}
        subtitle="Speak with a licensed electrician today. Free estimates, emergency service, and over 40 years of experience serving Utah County."
      />
    </>
  );
}
