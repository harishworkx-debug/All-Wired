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
  BookOpen,
  MapPin,
  Building2,
} from 'lucide-react';
import Seo from '@/components/Seo';
import Reveal from '@/components/Reveal';
import CallButton from '@/components/CallButton';
import Breadcrumbs from '@/components/Breadcrumbs';
import CtaSection from '@/components/CtaSection';
import FaqList from '@/components/FaqList';
import ServiceAreaLinks from '@/components/ServiceAreaLinks';
import {
  BUSINESS,
  CORE_SERVICES,
  getCoreService,
  getLocation,
  locationUrl,
  coreServiceLocationUrl,
} from '@/data/business';
import {
  localBusinessSchema,
  breadcrumbSchema,
  faqSchema,
  placeSchema,
} from '@/lib/schema';

const ICONS: Record<string, typeof Wrench> = {
  Wrench,
  Zap,
  BatteryCharging,
  Plug,
  Lightbulb,
};

interface ServiceCrossLink {
  title: string;
  url: string;
  anchorText: string;
  description: string;
}

interface ServiceBlogLink {
  title: string;
  url: string;
  readTime: string;
  category: string;
}

const SERVICE_CROSS_LINKS: Record<string, ServiceCrossLink[]> = {
  'electrical-repairs-and-upgrades': [
    {
      title: 'Home Wiring & Installations',
      url: '/wiring-and-installations',
      anchorText: 'professional electrical wiring and installation',
      description:
        'When troubleshooting reveals damaged branch circuits, deteriorating cloth insulation, or outdated aluminum wiring, explore our comprehensive wiring services.',
    },
    {
      title: 'EV Chargers & Modern Power',
      url: '/ev-chargers-and-modern-power',
      anchorText: 'Level 2 EV charger installation in American Fork',
      description:
        'Before installing continuous high-current appliances, our master electricians evaluate panel amperage capacity to confirm your system can support fast vehicle charging.',
    },
    {
      title: 'Generators & Backup Power',
      url: '/generators-and-backup-power',
      anchorText: 'home generator installation and transfer switch solutions',
      description:
        'Upgrading your main circuit breaker panel is the ideal milestone to install an automatic transfer switch (ATS) or manual generator interlock for winter storm power resilience.',
    },
  ],
  'wiring-and-installations': [
    {
      title: 'Electrical Repairs and Upgrades',
      url: '/electrical-repairs-and-upgrades',
      anchorText: 'electrical repair and troubleshooting in American Fork',
      description:
        'If your existing wiring exhibits tripping breakers, burning smells, or ungrounded two-prong outlets prior to your remodel, review our licensed repair services.',
    },
    {
      title: 'Lighting Solutions',
      url: '/lighting-solutions',
      anchorText: 'indoor and outdoor lighting installation',
      description:
        'Finishing a basement or custom addition? Combine your new branch wiring rough-in with ultra-thin canless recessed LED downlights and architectural fixtures.',
    },
    {
      title: 'EV Chargers & Modern Power',
      url: '/ev-chargers-and-modern-power',
      anchorText: 'dedicated EV charging circuit installation',
      description:
        'Modern high-draw electric vehicles require dedicated 240V 50A/60A copper lines run inside protective conduit directly from the breaker panel.',
    },
  ],
  'lighting-solutions': [
    {
      title: 'Wiring and Installations',
      url: '/wiring-and-installations',
      anchorText: 'professional home electrical wiring',
      description:
        'Installing new recessed canless lights, heavy chandeliers, or ceiling fans in rooms without existing fixtures requires clean, code-compliant wire runs through ceiling joists.',
    },
    {
      title: 'Electrical Repairs and Upgrades',
      url: '/electrical-repairs-and-upgrades',
      anchorText: 'electrical repairs and panel upgrades',
      description:
        'Experiencing flickering LED bulbs, buzzing dimmer switches, or warm wall plates? Our master technicians isolate and repair underlying switch and circuit faults.',
    },
  ],
  'generators-and-backup-power': [
    {
      title: 'Electrical Repairs and Upgrades',
      url: '/electrical-repairs-and-upgrades',
      anchorText: 'electrical panel upgrade in American Fork',
      description:
        'Whole-home standby generators interface directly with your main breaker panel. Discover whether your service requires a 200-amp heavy-up before generator commissioning.',
    },
    {
      title: 'Wiring and Installations',
      url: '/wiring-and-installations',
      anchorText: 'home electrical wiring and installations',
      description:
        'Connecting a portable generator requires a heavy-duty outdoor power inlet box and code-compliant mechanical interlock kit to prevent dangerous utility backfeeding.',
    },
  ],
  'ev-chargers-and-modern-power': [
    {
      title: 'Electrical Repairs and Upgrades',
      url: '/electrical-repairs-and-upgrades',
      anchorText: 'electrical panel upgrades for EV charging',
      description:
        'An EV charging station is one of the highest continuous electrical loads in a home. Upgrading older 100A panels to 200A prevents service overloads and nuisance breaker trips.',
    },
    {
      title: 'Wiring and Installations',
      url: '/wiring-and-installations',
      anchorText: 'dedicated 240V circuit installation',
      description:
        'Level 2 charging stations require dedicated 240-volt circuits utilizing commercial-grade copper conductors sized strictly under National Electrical Code Article 625.',
    },
  ],
};

const SERVICE_BLOG_GUIDES: Record<string, ServiceBlogLink[]> = {
  'electrical-repairs-and-upgrades': [
    {
      title: '7 Signs Your Home Needs an Electrical Panel Upgrade',
      url: '/blog/signs-home-needs-electrical-panel-upgrade',
      readTime: '6 min read',
      category: 'Electrical Panels',
    },
    {
      title: 'When Should You Replace an Electrical Breaker?',
      url: '/blog/when-should-you-replace-an-electrical-breaker',
      readTime: '5 min read',
      category: 'Electrical Panels',
    },
    {
      title: 'Why Do Circuit Breakers Keep Tripping?',
      url: '/blog/why-do-circuit-breakers-keep-tripping',
      readTime: '5 min read',
      category: 'Electrical Panels',
    },
    {
      title: 'Common Electrical Problems in Older Homes',
      url: '/blog/common-electrical-problems-in-older-homes',
      readTime: '6 min read',
      category: 'Home Wiring',
    },
  ],
  'wiring-and-installations': [
    {
      title: 'What to Expect During a Home Electrical Wiring Project',
      url: '/blog/what-to-expect-during-a-home-electrical-wiring-project',
      readTime: '6 min read',
      category: 'Home Wiring',
    },
    {
      title: 'Common Electrical Problems in Older Homes',
      url: '/blog/common-electrical-problems-in-older-homes',
      readTime: '6 min read',
      category: 'Home Wiring',
    },
    {
      title: 'Electrical Safety Checklist for Homeowners',
      url: '/blog/electrical-safety-checklist-for-homeowners',
      readTime: '5 min read',
      category: 'Safety',
    },
  ],
  'lighting-solutions': [
    {
      title: 'What to Know Before Installing Outdoor Lighting',
      url: '/blog/what-to-know-before-installing-outdoor-lighting',
      readTime: '5 min read',
      category: 'Lighting',
    },
    {
      title: 'Electrical Safety Checklist for Homeowners',
      url: '/blog/electrical-safety-checklist-for-homeowners',
      readTime: '5 min read',
      category: 'Safety',
    },
  ],
  'generators-and-backup-power': [
    {
      title: 'Is Your Home Ready for a Backup Generator?',
      url: '/blog/is-your-home-ready-for-a-backup-generator',
      readTime: '6 min read',
      category: 'Generators',
    },
    {
      title: 'Electrical Safety Checklist for Homeowners',
      url: '/blog/electrical-safety-checklist-for-homeowners',
      readTime: '5 min read',
      category: 'Safety',
    },
  ],
  'ev-chargers-and-modern-power': [
    {
      title: 'How Much Does EV Charger Installation Cost in Utah?',
      url: '/blog/how-much-does-ev-charger-installation-cost-in-utah',
      readTime: '5 min read',
      category: 'EV Charging',
    },
    {
      title: 'Level 1 vs Level 2 EV Charging for Homeowners',
      url: '/blog/level-1-vs-level-2-ev-charging-for-homeowners',
      readTime: '5 min read',
      category: 'EV Charging',
    },
    {
      title: '7 Signs Your Home Needs an Electrical Panel Upgrade',
      url: '/blog/signs-home-needs-electrical-panel-upgrade',
      readTime: '6 min read',
      category: 'Electrical Panels',
    },
  ],
};

interface CoreServicePageProps {
  slug?: string;
  locationSlug?: string;
}

export default function CoreServicePage({
  slug: propSlug,
  locationSlug: propLocationSlug,
}: CoreServicePageProps = {}) {
  const params = useParams();
  const slug = propSlug ?? params.serviceSlug ?? params.slug;
  const service = slug ? getCoreService(slug) : undefined;

  const locSlug = propLocationSlug ?? params.locationSlug;
  const location = locSlug ? getLocation(locSlug) : undefined;

  if (!service) return <Navigate to="/404" replace />;

  const Icon = ICONS[service.icon] ?? Wrench;
  const canonicalPath = location
    ? coreServiceLocationUrl(service.slug, location.slug)
    : `/${service.slug}`;
  const crossLinks = SERVICE_CROSS_LINKS[service.slug] || [];
  const relatedGuides = SERVICE_BLOG_GUIDES[service.slug] || [];

  const pageTitle = location
    ? `${service.name} in ${location.city}, ${location.state} | All Wired LLC`
    : service.seoTitle;
  const pageDescription = location
    ? `Looking for professional ${service.name.toLowerCase()} in ${location.city}, UT? All Wired LLC provides master craftsmanship, code compliance & upfront estimates. Call (801) 800-2828.`
    : service.metaDescription;
  const heroH1 = location
    ? `${service.name} in ${location.city}, ${location.state}`
    : service.h1;

  const breadcrumbItems = location
    ? [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: service.name, path: `/${service.slug}` },
        { name: `${service.name} in ${location.city}`, path: canonicalPath },
      ]
    : [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: service.name, path: canonicalPath },
      ];

  const jsonLd = [
    localBusinessSchema(),
    breadcrumbSchema(breadcrumbItems),
    ...(location ? [placeSchema(location)] : []),
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: location ? `${service.name} in ${location.city}` : service.name,
      description: pageDescription,
      serviceType: service.name,
      provider: {
        '@type': 'Electrician',
        name: BUSINESS.legalName,
        alternateName: BUSINESS.name,
        telephone: '+1-801-800-2828',
        url: BUSINESS.website,
      },
      areaServed: location
        ? {
            '@type': 'City',
            name: location.city,
            containedInPlace: {
              '@type': 'AdministrativeArea',
              name: 'Utah County',
            },
          }
        : {
            '@type': 'AdministrativeArea',
            name: 'Utah County',
          },
    },
    ...(service.faqs && service.faqs.length > 0 ? [faqSchema(service.faqs)] : []),
  ];

  const otherCoreServices = CORE_SERVICES.filter((s) => s.slug !== service.slug);

  return (
    <>
      <Seo
        title={pageTitle}
        description={pageDescription}
        path={canonicalPath}
        jsonLd={jsonLd}
        ogImage={service.image}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-navy-900">
        <div className="absolute inset-0">
          <img
            src={service.image}
            alt={service.imageAlt}
            className="h-full w-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-900/90 to-navy-900/60" />
        </div>

        <div className="container-x relative">
          <div className="max-w-2xl py-20 sm:py-24 lg:py-28">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-400/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-300 ring-1 ring-amber-400/30">
                <MapPin className="h-3.5 w-3.5 text-amber-400" aria-hidden="true" />
                {location ? `${location.city}, ${location.state} Service` : 'Licensed Utah Electrical Service'}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-gray-200 ring-1 ring-white/15">
                <ShieldCheck className="h-3.5 w-3.5 text-amber-400" aria-hidden="true" />
                Utah License #{BUSINESS.license.number}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-gray-200 ring-1 ring-white/15">
                <Award className="h-3.5 w-3.5 text-amber-400" aria-hidden="true" />
                40+ Years Experience
              </span>
            </div>

            <h1 className="mt-5 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl text-balance">
              {heroH1}
            </h1>

            <p className="mt-5 text-lg leading-relaxed text-gray-200 sm:text-xl text-pretty">
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
                5.0 Rated on Google & HomeAdvisor
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="bg-gray-50 pt-6">
        <div className="container-x">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
      </div>

      {/* Main Content & Sidebar */}
      <section className="section-pad bg-gray-50">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Primary SEO Content */}
            <div className="space-y-10 lg:col-span-2">
              {location && (
                <Reveal>
                  <div className="rounded-2xl border border-electric-200 bg-electric-50/60 p-6 sm:p-8">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-electric-600 text-white shadow-sm">
                        <MapPin className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <div>
                        <h2 className="font-display text-xl font-bold text-navy-900">
                          {service.name} Serving {location.city}, UT
                        </h2>
                        <p className="text-xs sm:text-sm text-navy-600">
                          Dedicated master electrical craftsmanship for {location.city} homeowners & businesses
                        </p>
                      </div>
                    </div>
                    <p className="mt-4 text-sm sm:text-base leading-relaxed text-navy-700">
                      {location.housingProfile}
                    </p>
                    {location.utilityInfo && (
                      <div className="mt-5 border-t border-electric-200/70 pt-4 text-xs sm:text-sm text-navy-700">
                        <p className="font-semibold text-navy-900">Local Utility & Permitting Coordination:</p>
                        <p className="mt-1 text-navy-600">
                          We manage all meter release coordination with {location.utilityInfo.powerCompany} and file electrical permits directly through {location.utilityInfo.permitsOffice}. {location.utilityInfo.notes}
                        </p>
                      </div>
                    )}
                  </div>
                </Reveal>
              )}

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

              {/* Step 3: Contextual Service-to-Service Internal Links */}
              {crossLinks.length > 0 && (
                <Reveal>
                  <div className="rounded-2xl border border-navy-200 bg-white p-6 shadow-sm sm:p-8">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-electric-50 text-electric-600">
                        <Plug className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-bold text-navy-900">
                          Related Electrical Systems & Cross-Connections
                        </h3>
                        <p className="text-xs sm:text-sm text-navy-500">
                          Comprehensive solutions for homes requiring integrated power upgrades
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 grid gap-4">
                      {crossLinks.map((cl, clIdx) => (
                        <div
                          key={clIdx}
                          className="rounded-xl border border-navy-100 bg-gray-50/70 p-4 transition-all hover:border-electric-300 hover:bg-white"
                        >
                          <p className="text-sm leading-relaxed text-navy-700">
                            {cl.description}{' '}
                            <Link
                              to={cl.url}
                              className="font-bold text-electric-600 hover:text-electric-700 underline underline-offset-2"
                            >
                              {cl.anchorText}
                            </Link>
                            .
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              )}

              {/* Step 3: Service-to-Blog Internal Links */}
              {relatedGuides.length > 0 && (
                <Reveal>
                  <div className="rounded-2xl border border-amber-200/80 bg-amber-50/40 p-6 shadow-sm sm:p-8">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400/20 text-amber-800">
                        <BookOpen className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-bold text-navy-900">
                          Helpful Homeowner Guides & Advice
                        </h3>
                        <p className="text-xs sm:text-sm text-navy-600">
                          Read in-depth technical guides written by our master electricians
                        </p>
                      </div>
                    </div>

                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                      {relatedGuides.map((guide, gIdx) => (
                        <Link
                          key={gIdx}
                          to={guide.url}
                          className="group flex flex-col justify-between rounded-xl border border-navy-100 bg-white p-4 transition-all hover:-translate-y-0.5 hover:border-electric-300 hover:shadow-md"
                        >
                          <div>
                            <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-700">
                              {guide.category} • {guide.readTime}
                            </span>
                            <h4 className="mt-1.5 font-display text-sm font-bold text-navy-900 group-hover:text-electric-600 transition-colors">
                              {guide.title}
                            </h4>
                          </div>
                          <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-electric-600">
                            Read Guide
                            <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </Reveal>
              )}
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
                      View all service areas
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
            <ServiceAreaLinks serviceSlug={service.slug} serviceName={service.name} highlight={location?.slug} />
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
