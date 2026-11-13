import { Link, useParams, Navigate } from 'react-router-dom';
import {
  Wrench,
  Zap,
  BatteryCharging,
  Plug,
  Lightbulb,
  Phone,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Star,
  Clock,
  Award,
} from 'lucide-react';
import Seo from '@/components/Seo';
import Reveal from '@/components/Reveal';
import CallButton from '@/components/CallButton';
import Breadcrumbs from '@/components/Breadcrumbs';
import CtaSection from '@/components/CtaSection';
import FaqList from '@/components/FaqList';
import ServiceAreaLinks from '@/components/ServiceAreaLinks';
import { BUSINESS, CORE_SERVICES, getCoreService } from '@/data/business';
import { localBusinessSchema, breadcrumbSchema } from '@/lib/schema';

const ICONS: Record<string, typeof Wrench> = {
  Wrench,
  Zap,
  BatteryCharging,
  Plug,
  Lightbulb,
};

interface CoreServicePageProps {
  slug?: string;
}

export default function CoreServicePage({ slug: propSlug }: CoreServicePageProps = {}) {
  const params = useParams();
  const slug = propSlug ?? params.serviceSlug ?? params.slug;
  const service = slug ? getCoreService(slug) : undefined;

  if (!service) return <Navigate to="/404" replace />;

  const Icon = ICONS[service.icon] ?? Wrench;
  const canonicalPath = `/${service.slug}`;

  const jsonLd = [
    localBusinessSchema(),
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Services', path: '/services' },
      { name: service.name, path: canonicalPath },
    ]),
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: service.h1,
      description: service.metaDescription,
      provider: {
        '@type': 'Electrician',
        name: BUSINESS.legalName,
        telephone: BUSINESS.phone,
        url: BUSINESS.website,
      },
      areaServed: [
        { '@type': 'City', name: 'American Fork', addressRegion: 'UT' },
        { '@type': 'City', name: 'Lehi', addressRegion: 'UT' },
        { '@type': 'AdministrativeArea', name: 'Utah County' },
      ],
    },
  ];

  const otherCoreServices = CORE_SERVICES.filter((s) => s.slug !== service.slug);

  return (
    <>
      <Seo
        title={service.seoTitle}
        description={service.metaDescription}
        path={canonicalPath}
        jsonLd={jsonLd}
        ogImage={service.image}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-navy-900 py-16 lg:py-24">
        <div className="absolute inset-0">
          <img
            src={service.image}
            alt={service.imageAlt}
            className="h-full w-full object-cover opacity-20"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900/90 to-navy-900/80" />
        </div>
        <div className="container-x relative">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-400/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-300 ring-1 ring-amber-400/30">
                <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                {service.shortName}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-gray-200 ring-1 ring-white/15">
                <ShieldCheck className="h-3 w-3 text-amber-400" aria-hidden="true" />
                Licensed & Insured #123184-5502
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-gray-200 ring-1 ring-white/15">
                <Award className="h-3 w-3 text-amber-400" aria-hidden="true" />
                Over 40 Years Experience
              </span>
            </div>

            <h1 className="mt-5 font-display text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl text-balance">
              {service.h1}
            </h1>

            <p className="mt-5 text-lg text-gray-200 sm:text-xl text-pretty leading-relaxed">
              {service.tagline}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <CallButton variant="primary" label={`Call ${BUSINESS.phone}`} />
              <Link to="/contact" className="btn-secondary">
                Request Free Estimate
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-300">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-amber-400" aria-hidden="true" />
                Free On-Site Estimates
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-amber-400" aria-hidden="true" />
                Prompt & Emergency Service
              </span>
              <span className="flex items-center gap-1.5">
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden="true" />
                5.0 Rated HomeAdvisor
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumbs */}
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

      {/* Main Content & Sidebar */}
      <section className="section-pad bg-gray-50">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Primary SEO Content */}
            <div className="space-y-12 lg:col-span-2">
              {service.sections.map((sec, i) => (
                <Reveal key={i}>
                  <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-sm sm:p-8">
                    <h2 className="font-display text-2xl font-bold text-navy-900 sm:text-3xl">
                      {sec.h2}
                    </h2>
                    {sec.lead && (
                      <p className="mt-3 text-base font-medium text-electric-600 sm:text-lg">
                        {sec.lead}
                      </p>
                    )}
                    <div className="mt-4 space-y-4 text-base leading-relaxed text-navy-700">
                      {sec.body.map((para, pIdx) => (
                        <p key={pIdx}>{para}</p>
                      ))}
                    </div>

                    {sec.points && (
                      <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                        {sec.points.map((pt, ptIdx) => (
                          <li key={ptIdx} className="flex items-start gap-2.5 text-sm text-navy-800">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-electric-500" aria-hidden="true" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Sidebar */}
            <div>
              <div className="sticky top-24 space-y-6">
                {/* Contact Box */}
                <div className="rounded-2xl bg-navy-900 p-6 text-center text-white shadow-xl">
                  <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-amber-400">
                    <Phone className="h-6 w-6 text-navy-900" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-display text-xl font-bold text-white">
                    Speak With a Licensed Electrician
                  </h3>
                  <p className="mt-2 text-sm text-gray-300">
                    Over 40 years of trusted local electrical service in American Fork and Lehi.
                  </p>
                  <a
                    href={BUSINESS.phoneHref}
                    className="mt-3 block font-display text-2xl font-extrabold text-amber-400 hover:text-amber-300"
                  >
                    {BUSINESS.phone}
                  </a>
                  <div className="mt-4">
                    <CallButton variant="primary" label="Call Now" className="w-full" />
                  </div>
                  <div className="mt-3">
                    <Link to="/contact" className="btn-secondary w-full text-center">
                      Request Online Estimate
                    </Link>
                  </div>
                  <p className="mt-3 text-xs text-gray-400">
                    Free project estimates · Emergency service available
                  </p>
                </div>

                {/* Primary Service Areas */}
                <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-sm">
                  <h3 className="font-display text-lg font-bold text-navy-900">
                    Primary Service Areas
                  </h3>
                  <p className="mt-2 text-sm text-navy-600">
                    Fast response throughout Northern Utah County including:
                  </p>
                  <ul className="mt-4 space-y-2">
                    {['American Fork, UT', 'Lehi, UT', 'Pleasant Grove, UT', 'Highland, UT', 'Alpine, UT', 'Lindon, UT'].map(
                      (city) => (
                        <li key={city} className="flex items-center gap-2 text-sm font-medium text-navy-800">
                          <CheckCircle2 className="h-4 w-4 text-electric-600" aria-hidden="true" />
                          <span>{city}</span>
                        </li>
                      )
                    )}
                  </ul>
                  <div className="mt-5 border-t border-navy-100 pt-4">
                    <Link
                      to="/service-areas"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-electric-600 hover:text-electric-700"
                    >
                      View all 10 service areas
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                </div>

                {/* Other Services */}
                <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-sm">
                  <h3 className="font-display text-lg font-bold text-navy-900">
                    Explore Other Services
                  </h3>
                  <div className="mt-4 space-y-2.5">
                    {otherCoreServices.map((cs) => (
                      <Link
                        key={cs.slug}
                        to={`/${cs.slug}`}
                        className="group flex items-center justify-between rounded-xl border border-navy-100 p-3 transition-all hover:border-electric-300 hover:bg-gray-50"
                      >
                        <span className="text-sm font-medium text-navy-800 group-hover:text-electric-600">
                          {cs.name}
                        </span>
                        <ArrowRight className="h-4 w-4 text-navy-300 transition-transform group-hover:translate-x-1 group-hover:text-electric-600" aria-hidden="true" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="section-pad border-t border-navy-100 bg-white">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-2xl font-bold text-navy-900 sm:text-3xl text-balance">
              {service.name} Available Throughout Utah County
            </h2>
            <p className="mt-3 text-base text-navy-600">
              Based in American Fork, we provide {service.name.toLowerCase()} across our verified service areas.
            </p>
          </Reveal>
          <div className="mt-10">
            <ServiceAreaLinks />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-pad bg-gray-50">
        <div className="container-x">
          <Reveal className="mx-auto max-w-3xl">
            <h2 className="text-center font-display text-2xl font-bold text-navy-900 sm:text-3xl text-balance">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-center text-base text-navy-600">
              Common questions about {service.name.toLowerCase()} in American Fork and Lehi, UT.
            </p>
            <div className="mt-8">
              <FaqList faqs={service.faqs} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <CtaSection
        title={`Ready to Schedule ${service.name} in American Fork?`}
        subtitle="Speak with a licensed electrician today. Free estimates, emergency service, and over 40 years of experience serving Utah County."
      />
    </>
  );
}

