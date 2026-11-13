import { Link, useParams, Navigate } from 'react-router-dom';
import {
  MapPin,
  Phone,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Home,
  AlertTriangle,
  ClipboardCheck,
  Building2,
  ShieldCheck,
  Zap,
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
  SERVICES,
  CORE_SERVICES,
  getLocation,
  LOCATIONS,
  locationUrl,
  serviceLocationUrl,
  coreServiceLocationUrl,
} from '@/data/business';
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
  const isSecondary = location.slug === 'lehi-ut';
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

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-navy-900">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/2898199/pexels-photo-2898199.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600"
            alt={`Licensed electrician serving ${location.city}, ${location.state}`}
            className="h-full w-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-900/90 to-navy-900/65" />
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
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-electric-500/20 px-3 py-1 text-xs font-semibold text-electric-300 ring-1 ring-electric-400/40">
                    <ShieldCheck className="h-3 w-3" aria-hidden="true" />
                    Primary Base & Headquarters
                  </span>
                )}
                {isSecondary && (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-electric-500/20 px-3 py-1 text-xs font-semibold text-electric-300 ring-1 ring-electric-400/40">
                    <Zap className="h-3 w-3" aria-hidden="true" />
                    Silicon Slopes Primary Expansion Hub
                  </span>
                )}
              </div>
              <h1 className="mt-5 font-display text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl text-balance">
                Electrician in {location.city}, {location.state}
              </h1>
              <p className="mt-5 text-lg text-gray-200 text-pretty">{location.description}</p>
              <div className="mt-7 flex flex-wrap items-center gap-4">
                <CallButton variant="primary" label={`Call ${BUSINESS.phone}`} />
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-xl border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
                >
                  Request a Free Estimate
                </Link>
              </div>
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
              { name: 'Service Areas', path: '/service-areas' },
              { name: location.city },
            ]}
          />
        </div>
      </div>

      {/* Main Content Area */}
      <section className="section-pad bg-gray-50">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-3">
            <Reveal className="lg:col-span-2 space-y-10">
              {/* Local Overview */}
              <div>
                <h2 className="font-display text-2xl font-bold text-navy-900 sm:text-3xl">
                  Local Electrical Services in {location.city}, Utah
                </h2>
                <p className="mt-4 text-base leading-relaxed text-navy-600">
                  {location.context}
                </p>
              </div>

              {/* Housing & Electrical Architecture */}
              {location.housingProfile && (
                <div className="rounded-2xl border border-navy-100 bg-white p-6 sm:p-8 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-electric-50 text-electric-600">
                      <Home className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-navy-900">
                      Housing Profile & Electrical Systems in {location.city}
                    </h3>
                  </div>
                  <p className="mt-4 text-sm sm:text-base leading-relaxed text-navy-600">
                    {location.housingProfile}
                  </p>
                </div>
              )}

              {/* Common Electrical Challenges & Upgrades */}
              {location.challenges && location.challenges.length > 0 && (
                <div className="rounded-2xl border border-amber-200/70 bg-amber-50/50 p-6 sm:p-8">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400/20 text-amber-700">
                      <AlertTriangle className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-navy-900">
                      Common Electrical Upgrades in {location.city} Homes
                    </h3>
                  </div>
                  <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                    {location.challenges.map((challenge, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2
                          className="mt-0.5 h-4 w-4 shrink-0 text-amber-600"
                          aria-hidden="true"
                        />
                        <span className="text-xs sm:text-sm leading-relaxed text-navy-700">
                          {challenge}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Local Proof of Work / Project Spotlights */}
              {location.projects && location.projects.length > 0 && (
                <div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-electric-50 text-electric-600">
                      <ClipboardCheck className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-navy-900">
                        Recent Electrical Work in {location.city}
                      </h3>
                      <p className="text-xs sm:text-sm text-navy-500">
                        Real project examples and electrical solutions completed nearby
                      </p>
                    </div>
                  </div>
                  <div className="mt-5 grid gap-4 sm:grid-cols-3">
                    {location.projects.map((proj, i) => (
                      <div
                        key={i}
                        className="rounded-xl border border-navy-100 bg-white p-5 shadow-sm hover:border-electric-200 transition-colors"
                      >
                        <h4 className="font-display text-sm font-bold text-navy-900">
                          {proj.title}
                        </h4>
                        <p className="mt-2 text-xs sm:text-sm leading-relaxed text-navy-600">
                          {proj.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Services Available in this City */}
              <div>
                <h3 className="font-display text-xl font-bold text-navy-900">
                  Primary Electrical Pillars in {location.city}
                </h3>
                <p className="mt-1 text-sm text-navy-500">
                  Explore our core electrical service solutions tailored to {location.city} homes and businesses.
                </p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {CORE_SERVICES.map((cs) => (
                    <Link
                      key={cs.slug}
                      to={coreServiceLocationUrl(cs.slug, location.slug)}
                      className="group flex items-center justify-between rounded-xl border border-electric-200 bg-electric-50/40 px-4 py-3.5 transition-all hover:border-electric-400 hover:bg-electric-50 hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
                    >
                      <span className="text-sm font-semibold text-navy-900 group-hover:text-electric-600">
                        {cs.name} in {location.city}
                      </span>
                      <ChevronRight
                        className="h-4 w-4 text-electric-600 transition-transform group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </Link>
                  ))}
                </div>

                <h4 className="mt-8 font-display text-lg font-bold text-navy-900">
                  Specialized Electrical Services in {location.city}
                </h4>
                <p className="mt-1 text-sm text-navy-500">
                  Targeted electrical repair, wiring, and modern efficiency installations.
                </p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {SERVICES.map((s) => (
                    <Link
                      key={s.slug}
                      to={serviceLocationUrl(s.slug, location.slug)}
                      className="group flex items-center justify-between rounded-xl border border-navy-100 bg-white px-4 py-3.5 transition-all hover:border-electric-300 hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
                    >
                      <span className="text-sm font-medium text-navy-800 group-hover:text-electric-600">
                        {s.name} in {location.city}
                      </span>
                      <ChevronRight
                        className="h-4 w-4 text-navy-300 transition-transform group-hover:translate-x-0.5 group-hover:text-electric-600"
                        aria-hidden="true"
                      />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Why Choose All Wired */}
              <div className="rounded-2xl border border-navy-100 bg-white p-6 sm:p-8 shadow-sm">
                <h3 className="font-display text-xl font-bold text-navy-900">
                  Why {location.city} Homeowners Choose All Wired
                </h3>
                <ul className="mt-5 space-y-3">
                  {[
                    `Licensed Utah master electrician with over 40 years of industry experience`,
                    `Based right in American Fork, just ${isPrimary ? 'here in town' : 'minutes away'} for rapid dispatch`,
                    `Transparent upfront pricing with zero hidden fees and free project estimates`,
                    `Full permit management, utility disconnect coordination, and city inspection sign-offs`,
                    `Same-day emergency response for hazardous panels, power losses, and sparking circuits`,
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2
                        className="mt-0.5 h-5 w-5 shrink-0 text-electric-500"
                        aria-hidden="true"
                      />
                      <span className="text-sm leading-relaxed text-navy-700 sm:text-base">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Sidebar */}
            <Reveal delay={100}>
              <div className="sticky top-24 space-y-6">
                {/* Contact Card */}
                <div className="rounded-2xl bg-navy-900 p-6 text-center shadow-lg">
                  <Phone className="mx-auto h-8 w-8 text-amber-400" aria-hidden="true" />
                  <p className="mt-3 text-sm text-gray-300">
                    Call to schedule service in {location.city}
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
                  <p className="mt-3 text-xs text-gray-400">
                    Free estimates · Emergency service · 40+ Years Experience
                  </p>
                </div>

                {/* Local Utility & Permitting Info */}
                {location.utilityInfo && (
                  <div className="rounded-2xl border border-navy-100 bg-white p-5 shadow-sm">
                    <div className="flex items-center gap-2">
                      <Building2 className="h-5 w-5 text-electric-600" aria-hidden="true" />
                      <h4 className="font-display text-sm font-bold text-navy-900">
                        Local Utility & Code Coordination
                      </h4>
                    </div>
                    <dl className="mt-3 space-y-2.5 text-xs text-navy-600">
                      <div>
                        <dt className="font-semibold text-navy-800">Electric Utility:</dt>
                        <dd>{location.utilityInfo.powerCompany}</dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-navy-800">Permits Division:</dt>
                        <dd>{location.utilityInfo.permitsOffice}</dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-navy-800">Permit Handling:</dt>
                        <dd>{location.utilityInfo.notes}</dd>
                      </div>
                    </dl>
                  </div>
                )}

                {/* Service Hours */}
                <div className="rounded-2xl border border-navy-100 bg-white p-5 shadow-sm">
                  <h4 className="font-display text-sm font-bold text-navy-900">
                    Operating Hours in {location.city}
                  </h4>
                  <ul className="mt-3 space-y-1.5 text-xs text-navy-600">
                    <li className="flex justify-between">
                      <span className="font-medium">Monday - Friday:</span>
                      <span>8:00 AM - 5:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-medium">Saturday:</span>
                      <span>9:00 AM - 2:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-medium">Sunday:</span>
                      <span className="text-navy-400">Closed (Emergency Only)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Nearby Service Areas & Browse */}
      <section className="section-pad">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-2">
            <Reveal>
              <h2 className="font-display text-2xl font-bold text-navy-900">
                Nearby Service Areas
              </h2>
              <p className="mt-3 text-base text-navy-600">
                All Wired also serves these neighboring Utah County and Salt Lake County communities.
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
                Explore our full suite of residential, commercial, and emergency electrical solutions.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link to="/services" className="btn-outline">
                  All Electrical Services
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </Link>
                <Link to="/contact" className="btn-primary">
                  Request an Estimate
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Local FAQs */}
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

      {/* Final CTA */}
      <CtaSection
        title={`Call All Wired for Electrical Service in ${location.city}`}
        subtitle="Speak with a licensed electrician about your project. Free estimates, emergency service, and over 40 years of experience."
      />
    </>
  );
}
