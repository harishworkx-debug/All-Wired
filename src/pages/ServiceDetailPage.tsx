import { Link, useParams, Navigate } from 'react-router-dom';
import {
  Wrench, Zap, BatteryCharging, Home, Building2, Phone, CheckCircle2, ArrowRight, AlertTriangle, Lightbulb, Plug, ShieldCheck, Search,
} from 'lucide-react';
import Seo from '@/components/Seo';
import Reveal from '@/components/Reveal';
import CallButton from '@/components/CallButton';
import Breadcrumbs from '@/components/Breadcrumbs';
import CtaSection from '@/components/CtaSection';
import FaqList from '@/components/FaqList';
import ServiceLinks from '@/components/ServiceLinks';
import ServiceAreaLinks from '@/components/ServiceAreaLinks';
import { BUSINESS, SERVICES, getService, LOCATIONS, getCoreService } from '@/data/business';
import { serviceSchema, breadcrumbSchema } from '@/lib/schema';

const ICONS: Record<string, typeof Wrench> = {
  Wrench, Zap, BatteryCharging, Home, House: Home, Building2, Lightbulb, Plug, ShieldCheck, Search,
};

export default function ServiceDetailPage() {
  const { serviceSlug } = useParams();
  const service = serviceSlug ? getService(serviceSlug) : undefined;

  if (!service) {
    const core = serviceSlug ? getCoreService(serviceSlug) : undefined;
    if (core) return <Navigate to={`/${core.slug}`} replace />;
    return <Navigate to="/404" replace />;
  }

  const Icon = ICONS[service.icon] ?? Wrench;
  const jsonLd = [
    serviceSchema(service),
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Services', path: '/services' },
      { name: service.name, path: `/services/${service.slug}` },
    ]),
  ];

  return (
    <>
      <Seo
        title={service.metaTitle}
        description={service.metaDescription}
        path={`/services/${service.slug}`}
        jsonLd={jsonLd}
        ogImage={service.image}
      />

      <section className="bg-navy-900 py-14 lg:py-20">
        <div className="container-x">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-400 shadow-lg">
                  <Icon className="h-6 w-6 text-navy-900" aria-hidden="true" />
                </span>
                <p className="text-sm font-semibold uppercase tracking-wider text-amber-400">
                  {service.name}
                </p>
              </div>
              <h1 className="mt-5 font-display text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl text-balance">
                {service.name} in American Fork, UT
              </h1>
              <p className="mt-5 text-lg text-gray-300 text-pretty">{service.description}</p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <CallButton variant="primary" label={`Call ${BUSINESS.phone}`} />
                <Link to={`/${service.slug}-american-fork-ut`} className="btn-secondary">
                  {service.name} in American Fork
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </Link>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="overflow-hidden rounded-3xl shadow-xl">
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="bg-gray-50 pt-6">
        <div className="container-x">
          <Breadcrumbs
            items={[
              { name: 'Home', path: '/' },
              { name: 'Services', path: '/services' },
              { name: service.name },
            ]}
          />
        </div>
      </div>

      <section className="section-pad bg-gray-50">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-3">
            <Reveal className="lg:col-span-2">
              <h2 className="font-display text-2xl font-bold text-navy-900 sm:text-3xl">
                About Our {service.name} Service
              </h2>
              <p className="mt-4 text-base leading-relaxed text-navy-600">
                {service.description}
              </p>

              <h3 className="mt-8 font-display text-xl font-bold text-navy-900">
                Common Electrical Issues We Address
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
                  <p className="mt-3 text-sm text-gray-300">Call to discuss your project</p>
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

                <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-amber-600" aria-hidden="true" />
                    <p className="text-sm font-bold text-amber-800">Electrical Safety Tip</p>
                  </div>
                  <p className="mt-2 text-sm text-amber-700">
                    If you notice burning smells, sparking, or warm outlets, stop using the circuit
                    and call immediately. These are signs of a serious safety issue.
                  </p>
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
                Available in These Utah County Locations
              </h2>
              <p className="mt-3 text-base text-navy-600">
                All Wired offers {service.name.toLowerCase()} throughout American Fork and nearby
                communities. Call to confirm availability for your area.
              </p>
              <div className="mt-5">
                <ServiceAreaLinks />
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-display text-2xl font-bold text-navy-900">Related Electrical Services</h2>
              <p className="mt-3 text-base text-navy-600">
                All Wired also offers these complementary services.
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
              {service.name} FAQs
            </h2>
            <div className="mt-8">
              <FaqList faqs={service.faqs} />
            </div>
          </Reveal>
        </div>
      </section>

      <CtaSection
        title={`Call All Wired for ${service.name}`}
        subtitle="Speak with a licensed electrician today. Free estimates, emergency service, and over 30 years of experience."
      />
    </>
  );
}
