import { Link } from 'react-router-dom';
import {
  Phone,
  Zap,
  ShieldCheck,
  Clock,
  Star,
  Wrench,
  BatteryCharging,
  Home,
  Building2,
  MapPin,
  ArrowRight,
  Award,
  ThumbsUp,
  Handshake,
  CheckCircle2,
  Lightbulb,
  Plug,
  Search,
} from 'lucide-react';
import Seo from '@/components/Seo';
import Reveal from '@/components/Reveal';
import CallButton from '@/components/CallButton';
import FaqList from '@/components/FaqList';
import CtaSection from '@/components/CtaSection';
import { BUSINESS, SERVICES, LOCATIONS, locationUrl } from '@/data/business';
import { localBusinessSchema, organizationSchema, websiteSchema } from '@/lib/schema';

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

const heroImage =
  'https://images.pexels.com/photos/27928762/pexels-photo-27928762.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600';

const homeFaqs = [
  {
    q: 'What electrical services does All Wired offer in American Fork?',
    a: 'All Wired offers electrical repair, panel upgrades, EV charger installation, remodel and addition electrical work, and both residential and commercial electrical services throughout American Fork and nearby Utah County communities.',
  },
  {
    q: 'Is All Wire a licensed electrician in Utah?',
    a: `Yes. All Wired is licensed in Utah, license number ${BUSINESS.license.number}, with over 30 years of experience in the electrical industry.`,
  },
  {
    q: 'Do you offer emergency electrical service?',
    a: 'Yes. All Wired offers emergency electrical services. If you have an urgent safety concern, call (801) 800-2828 and we will discuss availability.',
  },
  {
    q: 'Do you provide free estimates?',
    a: 'Yes. All Wired offers free project estimates. Call us to discuss your project and we will walk you through the scope and cost.',
  },
  {
    q: 'What areas does All Wired serve?',
    a: 'All Wired is based in American Fork, UT and serves Utah County communities including Lehi, Pleasant Grove, Highland, Alpine, Cedar Hills, Lindon, Orem, Provo, and surrounding areas. Call to confirm service availability for your specific location.',
  },
];

export default function HomePage() {
  const jsonLd = [
    localBusinessSchema(),
    organizationSchema(),
    websiteSchema(),
  ];

  return (
    <>
      <Seo
        title="All Wired | Electrician in American Fork, UT"
        description="Licensed electrician in American Fork, UT offering electrical repair, panel upgrades, EV charger installation, and remodel electrical work. Over 30 years of experience. Call (801) 800-2828."
        path="/"
        jsonLd={jsonLd}
        ogImage={heroImage}
      />

      {/* Section 1: Hero */}
      <section className="relative overflow-hidden bg-navy-900">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Professional electrician installing an electrical panel in American Fork, UT"
            className="h-full w-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-900/85 to-navy-900/60" />
        </div>
        <div className="container-x relative">
          <div className="py-20 sm:py-24 lg:py-32 lg:pr-12">
            <div className="max-w-2xl">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-400/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-300 ring-1 ring-amber-400/30">
                  <MapPin className="h-3 w-3" aria-hidden="true" />
                  American Fork, Utah
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-gray-200 ring-1 ring-white/15">
                  <ShieldCheck className="h-3 w-3" aria-hidden="true" />
                  Licensed & Insured
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-gray-200 ring-1 ring-white/15">
                  <Star className="h-3 w-3 fill-amber-400 text-amber-400" aria-hidden="true" />
                  5.0 on HomeAdvisor
                </span>
              </div>

              <h1 className="mt-6 font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl text-balance">
                Professional Electrical Services in American Fork, UT
              </h1>
              <p className="mt-5 text-lg text-gray-200 sm:text-xl text-pretty">
                Contact All Wired to discuss your electrical service needs in American Fork and our
                verified surrounding service areas.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <CallButton variant="primary" label={`Call ${BUSINESS.phone}`} />
                <Link to="/services" className="btn-secondary">
                  Explore Electrical Services
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-300">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-amber-400" aria-hidden="true" />
                  Free Estimates
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-amber-400" aria-hidden="true" />
                  Emergency Service
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-amber-400" aria-hidden="true" />
                  Over 30 Years Experience
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Trust Indicators */}
      <section className="border-b border-navy-100 bg-gray-50">
        <div className="container-x py-10 lg:py-12">
          <div className="grid grid-cols-2 gap-6 text-center md:grid-cols-4">
            <div>
              <p className="font-display text-3xl font-extrabold text-navy-900">30+</p>
              <p className="mt-1 text-sm text-navy-500">Years of Experience</p>
            </div>
            <div>
              <p className="font-display text-3xl font-extrabold text-navy-900">5.0</p>
              <p className="mt-1 text-sm text-navy-500">Rating on HomeAdvisor</p>
            </div>
            <div>
              <p className="font-display text-3xl font-extrabold text-navy-900">{BUSINESS.license.number.split('-')[0]}</p>
              <p className="mt-1 text-sm text-navy-500">Utah Licensed Electrician</p>
            </div>
            <div>
              <p className="font-display text-3xl font-extrabold text-navy-900">10</p>
              <p className="mt-1 text-sm text-navy-500">Utah County Areas Served</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Services */}
      <section className="section-pad">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-electric-600">
              Our Electrical Services
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy-900 sm:text-4xl text-balance">
              Complete Electrical Solutions for Homes & Businesses
            </h2>
            <p className="mt-4 text-base text-navy-600 sm:text-lg">
              From small repairs to full panel upgrades and EV charger installation, All Wired handles
              a wide range of electrical projects across American Fork and Utah County.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => {
              const Icon = ICONS[s.icon] ?? Wrench;
              return (
                <Reveal key={s.slug} delay={i * 80}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="card group flex h-full flex-col overflow-hidden transition-all duration-300 hover:border-electric-300 hover:shadow-xl hover:-translate-y-1"
                  >
                    <div className="relative h-44 overflow-hidden">
                      <img
                        src={s.image}
                        alt={s.imageAlt}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent" />
                      <span className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-400 shadow-lg">
                        <Icon className="h-5.5 w-5.5 text-navy-900" aria-hidden="true" />
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="font-display text-xl font-bold text-navy-900 transition-colors group-hover:text-electric-600">
                        {s.name}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-navy-600 flex-1">
                        {s.tagline}
                      </p>
                      <div className="mt-5 flex items-center justify-between border-t border-navy-100 pt-4">
                        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-electric-600 group-hover:text-electric-700">
                          View Service Details
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 4: Why Choose */}
      <section className="bg-navy-900 py-16 lg:py-24">
        <div className="container-x">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-wider text-amber-400">
                Why Choose All Wired
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl text-balance">
                Experience, Honesty, and Workmanship You Can Trust
              </h2>
              <p className="mt-4 text-base text-gray-300 sm:text-lg">
                All Wired takes on a wide range of electrical projects with a personalized approach.
                We are committed to building strong, long-term relationships with our clients and
                guaranteeing your satisfaction.
              </p>
              <div className="mt-7">
                <CallButton variant="primary" label={`Call ${BUSINESS.phone}`} />
              </div>
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: Award,
                  title: 'Licensed & Experienced',
                  text: 'Utah license #123184-5502 with over 30 years in the electrical industry.',
                },
                {
                  icon: Clock,
                  title: 'Emergency Service',
                  text: 'Electrical emergencies happen. We offer emergency service when you need it.',
                },
                {
                  icon: ThumbsUp,
                  title: 'Free Estimates',
                  text: 'We offer free project estimates so you know the scope before work begins.',
                },
                {
                  icon: Handshake,
                  title: 'Personalized Service',
                  text: 'Every project gets individual attention. We build long-term client relationships.',
                },
                {
                  icon: ShieldCheck,
                  title: 'Safety First',
                  text: 'Permits, inspections, and code compliance on every project, big or small.',
                },
                {
                  icon: Star,
                  title: '5.0 Rated',
                  text: 'Rated 5.0 by verified reviewers on HomeAdvisor and Angi.',
                },
              ].map((item, i) => (
                <Reveal key={i} delay={i * 60}>
                  <div className="rounded-2xl border border-navy-700 bg-navy-800/50 p-5 backdrop-blur-sm transition-colors hover:border-amber-400/40">
                    <item.icon className="h-8 w-8 text-amber-400" aria-hidden="true" />
                    <h3 className="mt-3 font-display text-base font-bold text-white">{item.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-gray-400">{item.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Service Areas */}
      <section className="section-pad bg-gray-50">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-electric-600">
              Service Areas
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy-900 sm:text-4xl text-balance">
              Serving American Fork & Utah County
            </h2>
            <p className="mt-4 text-base text-navy-600 sm:text-lg">
              Based in American Fork, we serve homeowners and businesses throughout Utah County. Call
              to confirm service availability for your specific location.
            </p>
          </Reveal>

          <Reveal className="mt-10">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {LOCATIONS.map((l) => (
                <Link
                  key={l.slug}
                  to={locationUrl(l.slug)}
                  className="group flex items-center justify-between rounded-xl border border-navy-100 bg-white px-4 py-3.5 transition-all hover:border-electric-300 hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
                >
                  <span className="flex items-center gap-2.5">
                    <MapPin className="h-4 w-4 text-amber-500" aria-hidden="true" />
                    <span className="text-sm font-medium text-navy-800 group-hover:text-electric-600">
                      {l.city}
                    </span>
                  </span>
                  <ArrowRight className="h-4 w-4 text-navy-300 transition-transform group-hover:translate-x-0.5 group-hover:text-electric-600" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </Reveal>
          <Reveal className="mt-8 text-center">
            <Link to="/service-areas" className="btn-outline">
              View All Service Areas
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Section 6: How It Works */}
      <section className="section-pad">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-electric-600">
              How It Works
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy-900 sm:text-4xl text-balance">
              Getting Electrical Help Is Simple
            </h2>
            <p className="mt-4 text-base text-navy-600 sm:text-lg">
              No forms, no online booking. Just call and talk directly with a licensed electrician.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: '1',
                title: 'Call All Wired',
                text: 'Pick up the phone and call (801) 800-2828. Talk directly with us, no call centers.',
              },
              {
                step: '2',
                title: 'Explain Your Issue',
                text: 'Tell us what you are experiencing. The more detail you share, the better we can prepare.',
              },
              {
                step: '3',
                title: 'Discuss Availability',
                text: 'We discuss service availability, scheduling, and whether an estimate is needed.',
              },
              {
                step: '4',
                title: 'Confirm Next Steps',
                text: 'We confirm the next steps directly by phone, so you always know what to expect.',
              },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="relative h-full rounded-2xl border border-navy-100 bg-white p-6 shadow-sm">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 font-display text-xl font-bold text-amber-400">
                    {item.step}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold text-navy-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-600">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10 text-center">
            <CallButton variant="dark" label={`Call ${BUSINESS.phone}`} />
          </Reveal>
        </div>
      </section>

      {/* Section 7: FAQs */}
      <section className="section-pad bg-gray-50">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl">
            <p className="text-center text-sm font-semibold uppercase tracking-wider text-electric-600">
              FAQs
            </p>
            <h2 className="mt-3 text-center font-display text-3xl font-bold text-navy-900 sm:text-4xl text-balance">
              Frequently Asked Questions
            </h2>
            <div className="mt-10">
              <FaqList faqs={homeFaqs} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Section 8: Final CTA */}
      <CtaSection
        title="Call All Wired for Electrical Service"
        subtitle="Speak with a licensed electrician about your project. Free estimates, emergency service, and over 30 years of experience."
      />
    </>
  );
}
