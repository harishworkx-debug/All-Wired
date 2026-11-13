import { Link } from 'react-router-dom';
import {
  Phone,
  Zap,
  ShieldCheck,
  Clock,
  Star,
  Wrench,
  BatteryCharging,
  Plug,
  Lightbulb,
  MapPin,
  ArrowRight,
  Award,
  ThumbsUp,
  Handshake,
  CheckCircle2,
  FileText,
  BookOpen,
} from 'lucide-react';
import Seo from '@/components/Seo';
import Reveal from '@/components/Reveal';
import CallButton from '@/components/CallButton';
import FaqList from '@/components/FaqList';
import CtaSection from '@/components/CtaSection';
import { BUSINESS, CORE_SERVICES, LOCATIONS, locationUrl } from '@/data/business';
import { BLOG_POSTS } from '@/data/blog';
import { localBusinessSchema, organizationSchema, websiteSchema } from '@/lib/schema';

const ICONS: Record<string, typeof Wrench> = {
  Wrench,
  Zap,
  BatteryCharging,
  Plug,
  Lightbulb,
};

const heroImage =
  'https://images.pexels.com/photos/27928762/pexels-photo-27928762.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600';

const homeFaqs = [
  {
    q: 'What electrical services does All Wired LLC provide in American Fork and Lehi?',
    a: 'All Wired LLC specializes in residential and commercial electrical services, including comprehensive electrical repairs, troubleshooting, 200-amp and 400-amp electrical panel upgrades, circuit breaker replacements, whole-home wiring, basement finishing, indoor and outdoor lighting installations, Level 2 EV charger installations, and standby generator backup power systems.',
  },
  {
    q: 'How much experience does All Wired LLC have?',
    a: 'All Wired LLC brings over 40 years of hands-on experience in the electrical contracting industry. Our master electricians are fully licensed in Utah (License #123184-5502) and hold a 5.0 rating on HomeAdvisor.',
  },
  {
    q: 'Do you offer free estimates on electrical projects?',
    a: 'Yes. All Wired LLC provides free, transparent project estimates for homeowners and businesses in American Fork, Lehi, and surrounding Utah County communities. Call (801) 800-2828 or submit our online request form to get started.',
  },
  {
    q: 'Do you provide emergency electrical services in American Fork, UT?',
    a: 'Yes. We offer prompt emergency electrical services for urgent safety hazards such as burning smells from breaker panels, sparking outlets, power loss to critical medical or heating circuits, and sudden electrical failures.',
  },
  {
    q: 'Do you pull permits and coordinate with Rocky Mountain Power for panel upgrades?',
    a: 'Absolutely. We manage all city permit filings with American Fork and neighboring municipalities, coordinate service disconnects and reconnects with Rocky Mountain Power, and ensure every job passes municipal code inspections.',
  },
  {
    q: 'What areas does All Wired LLC serve?',
    a: 'Our primary base is American Fork, UT. We actively serve homeowners and businesses throughout Northern Utah County, including Lehi, Pleasant Grove, Highland, Alpine, Cedar Hills, Lindon, Orem, Provo, and Draper.',
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
        title="Electrician in American Fork, UT | All Wired LLC"
        description="Looking for a reliable electrician in American Fork, UT? All Wired LLC provides electrical repairs, panel upgrades, wiring, lighting and EV charger installation. Call (801) 800-2828."
        path="/"
        jsonLd={jsonLd}
        ogImage={heroImage}
      />

      {/* Section 1: Hero */}
      <section className="relative overflow-hidden bg-navy-900">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Licensed electrician installing an electrical panel in American Fork, UT"
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
                  American Fork & Lehi, Utah
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-gray-200 ring-1 ring-white/15">
                  <ShieldCheck className="h-3 w-3" aria-hidden="true" />
                  Utah License #{BUSINESS.license.number}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-gray-200 ring-1 ring-white/15">
                  <Star className="h-3 w-3 fill-amber-400 text-amber-400" aria-hidden="true" />
                  5.0 on HomeAdvisor
                </span>
              </div>

              <h1 className="mt-6 font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl text-balance">
                Trusted Electrician in American Fork, UT – Residential Electrical Services
              </h1>
              <p className="mt-5 text-lg text-gray-200 sm:text-xl text-pretty leading-relaxed">
                Looking for a reliable electrician in American Fork, UT? All Wired LLC delivers over
                40 years of licensed electrical craftsmanship. From urgent troubleshooting and 200A
                panel upgrades to custom lighting, EV chargers, and generator installations, we get the
                job done right the first time.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <CallButton variant="primary" label={`Call ${BUSINESS.phone}`} />
                <Link to="/contact" className="btn-secondary">
                  Request a Quote
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-300">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-amber-400" aria-hidden="true" />
                  Free Project Estimates
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-amber-400" aria-hidden="true" />
                  Prompt Emergency Service
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-amber-400" aria-hidden="true" />
                  Over 40 Years Experience
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
              <p className="font-display text-3xl font-extrabold text-navy-900">40+</p>
              <p className="mt-1 text-sm text-navy-500">Years of Electrical Experience</p>
            </div>
            <div>
              <p className="font-display text-3xl font-extrabold text-navy-900">5.0</p>
              <p className="mt-1 text-sm text-navy-500">Verified Rating on HomeAdvisor</p>
            </div>
            <div>
              <p className="font-display text-3xl font-extrabold text-navy-900">
                {BUSINESS.license.number.split('-')[0]}
              </p>
              <p className="mt-1 text-sm text-navy-500">Utah Master Electrician License</p>
            </div>
            <div>
              <p className="font-display text-3xl font-extrabold text-navy-900">10</p>
              <p className="mt-1 text-sm text-navy-500">Utah County Communities Served</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Professional Electrical Services in American Fork, Utah */}
      <section className="section-pad">
        <div className="container-x">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-electric-600">
              Core Service Offerings
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy-900 sm:text-4xl text-balance">
              Professional Electrical Services in American Fork, Utah
            </h2>
            <p className="mt-4 text-base text-navy-600 sm:text-lg leading-relaxed">
              At All Wired LLC, we provide comprehensive residential and commercial electrical solutions tailored to
              Utah County homeowners. Whether you need an emergency repair, are renovating a historic home in American
              Fork, or require high-capacity power for modern electronics, our licensed electricians handle every detail
              to current National Electrical Code (NEC) standards.
            </p>
          </Reveal>

          {/* 5 Main Service Pillar Cards */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CORE_SERVICES.map((s, i) => {
              const Icon = ICONS[s.icon] ?? Wrench;
              return (
                <Reveal key={s.slug} delay={i * 70}>
                  <Link
                    to={`/${s.slug}`}
                    className="card group flex h-full flex-col overflow-hidden transition-all duration-300 hover:border-electric-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={s.image}
                        alt={s.imageAlt}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 to-transparent" />
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
                          Explore Service
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              );
            })}

            {/* Quick Consultation Card */}
            <Reveal delay={350}>
              <div className="flex h-full flex-col justify-between rounded-2xl border-2 border-dashed border-amber-300 bg-amber-50/60 p-6 text-center sm:p-8">
                <div>
                  <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-amber-400 shadow-md">
                    <FileText className="h-6 w-6 text-navy-900" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-display text-xl font-bold text-navy-900">
                    Need Custom Electrical Work?
                  </h3>
                  <p className="mt-2 text-sm text-navy-700 leading-relaxed">
                    Have an unusual electrical challenge, commercial project, or hot tub installation?
                    Speak directly with a master electrician for custom sizing and a free estimate.
                  </p>
                </div>
                <div className="mt-6 flex flex-col gap-2.5">
                  <CallButton variant="primary" label={`Call ${BUSINESS.phone}`} className="w-full" />
                  <Link to="/contact" className="btn-outline w-full bg-white text-sm">
                    Request Online Estimate
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Section 4: Deep Content & Detailed Pillars */}
      <section className="section-pad bg-gray-50 border-t border-navy-100">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-wider text-electric-600">
                Local Expertise
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold text-navy-900 sm:text-4xl text-balance">
                Residential Electrician Serving American Fork and Lehi
              </h2>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-navy-700">
                <p>
                  Utah County has experienced unprecedented growth over the last two decades. Established
                  neighborhoods in central American Fork often feature homes with 30- to 60-year-old electrical
                  wiring, 100-amp service panels, and ungrounded two-prong outlets that are no longer suited to
                  the intense electrical demands of modern living.
                </p>
                <p>
                  Meanwhile, rapidly expanding residential developments in Lehi, Highland, and Alpine demand
                  high-capacity infrastructure for smart homes, electric vehicle charging stations, hot tubs, and
                  finished basements. All Wired LLC bridges the gap with deep regional knowledge. We understand
                  local soil conditions for grounding electrodes, Rocky Mountain Power utility connection requirements,
                  and municipal permit protocols across American Fork, Lehi, and Utah County.
                </p>
                <p>
                  When you work with us, there are no subcontractors or commission-driven salespeople. You receive
                  honest advice, transparent pricing, and careful, code-compliant craftsmanship backed by over 40 years
                  of trade experience.
                </p>
              </div>
              <div className="mt-6">
                <Link to="/about" className="inline-flex items-center gap-2 font-semibold text-electric-600 hover:text-electric-700">
                  Learn more about our company story and credentials
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-md sm:p-8">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400">
                    <ShieldCheck className="h-5 w-5 text-navy-900" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-navy-900">Safety & Code Compliance</h3>
                    <p className="text-xs text-navy-500">Every project inspected & permitted</p>
                  </div>
                </div>
                <ul className="mt-6 space-y-3.5 text-sm text-navy-800">
                  {[
                    'Full compliance with the National Electrical Code (NEC) & Utah State Amendments',
                    'Direct coordination with Rocky Mountain Power for disconnects and reconnects',
                    'Dedicated 20A, 30A, and 50A circuits engineered for modern continuous appliance loads',
                    'Arc-Fault (AFCI) and Ground-Fault (GFCI) protection safeguarding your family against electrical fires',
                    'Comprehensive copper grounding electrode and water-pipe bonding systems',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-electric-500" aria-hidden="true" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Section 5: Specific Service Pillars Deep Dive */}
      <section className="section-pad">
        <div className="container-x">
          <div className="space-y-16">
            {/* Pillar 1: Repairs & Troubleshooting */}
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <Reveal>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-900">
                  Diagnostic Excellence
                </span>
                <h2 className="mt-3 font-display text-2xl font-bold text-navy-900 sm:text-3xl">
                  Electrical Repairs and Troubleshooting
                </h2>
                <p className="mt-4 text-base leading-relaxed text-navy-700">
                  Intermittent electrical issues like buzzing switches, dead receptacles, or lights that dim when the
                  refrigerator kicks on are early warnings of serious underlying faults. Using professional digital
                  multimeters and circuit tracers, we trace wiring faults to their exact origin without tearing up unnecessary
                  drywall. We resolve open neutrals, loose backstab connections, and ground faults safely and permanently.
                </p>
                <div className="mt-5">
                  <Link
                    to="/electrical-repairs-and-upgrades"
                    className="inline-flex items-center gap-2 font-semibold text-electric-600 hover:text-electric-700"
                  >
                    Learn about electrical repairs & troubleshooting
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <div className="overflow-hidden rounded-2xl shadow-md border border-navy-100">
                  <img
                    src="https://images.pexels.com/photos/20500461/pexels-photo-20500461.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                    alt="Electrician diagnosing circuit breaker panel in American Fork"
                    className="h-72 w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </Reveal>
            </div>

            {/* Pillar 2: Panels & Breakers */}
            <div className="grid gap-10 lg:grid-cols-2 items-center lg:flex-row-reverse">
              <Reveal className="lg:order-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-electric-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-electric-900">
                  Service Heavy-Ups
                </span>
                <h2 className="mt-3 font-display text-2xl font-bold text-navy-900 sm:text-3xl">
                  Electrical Panel Upgrades and Circuit Breaker Repairs
                </h2>
                <p className="mt-4 text-base leading-relaxed text-navy-700">
                  Upgrading from an outdated 100-amp service to a clean 200-amp or 400-amp main panel is the single
                  most impactful safety improvement for an older Utah County home. We replace hazardous Federal Pacific,
                  Zinsco, and split-bus fuse panels with modern Square D or Siemens breaker panels, complete with whole-home
                  surge suppression, dual ground rods, and dedicated breaker capacity for your current and future loads.
                </p>
                <div className="mt-5">
                  <Link
                    to="/electrical-repairs-and-upgrades"
                    className="inline-flex items-center gap-2 font-semibold text-electric-600 hover:text-electric-700"
                  >
                    Explore panel upgrades & replacement options
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </Reveal>
              <Reveal delay={100} className="lg:order-1">
                <div className="overflow-hidden rounded-2xl shadow-md border border-navy-100">
                  <img
                    src="https://images.pexels.com/photos/27928759/pexels-photo-27928759.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                    alt="New 200A electrical breaker panel upgrade installation"
                    className="h-72 w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </Reveal>
            </div>

            {/* Pillar 3: Home Wiring & Installations */}
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <Reveal>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-900">
                  Code-Certified Wiring
                </span>
                <h2 className="mt-3 font-display text-2xl font-bold text-navy-900 sm:text-3xl">
                  Home Wiring and Electrical Installations
                </h2>
                <p className="mt-4 text-base leading-relaxed text-navy-700">
                  From custom new construction homes in Highland to finished basements in Lehi and kitchen additions in
                  American Fork, our rough-in and finish wiring is second to none. We install properly sized Romex conductors,
                  UL-listed steel junction boxes, dedicated appliance circuits, and fan-rated ceiling boxes designed to safely
                  support dynamic rotating loads.
                </p>
                <div className="mt-5">
                  <Link
                    to="/wiring-and-installations"
                    className="inline-flex items-center gap-2 font-semibold text-electric-600 hover:text-electric-700"
                  >
                    View home wiring & installation capabilities
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <div className="overflow-hidden rounded-2xl shadow-md border border-navy-100">
                  <img
                    src="https://images.pexels.com/photos/8488029/pexels-photo-8488029.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                    alt="Residential outlet and branch circuit electrical wiring"
                    className="h-72 w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </Reveal>
            </div>

            {/* Pillar 4: Lighting */}
            <div className="grid gap-10 lg:grid-cols-2 items-center lg:flex-row-reverse">
              <Reveal className="lg:order-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-electric-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-electric-900">
                  Interior & Exterior Illumination
                </span>
                <h2 className="mt-3 font-display text-2xl font-bold text-navy-900 sm:text-3xl">
                  Indoor and Outdoor Lighting Installation
                </h2>
                <p className="mt-4 text-base leading-relaxed text-navy-700">
                  Lighting elevates your daily lifestyle and enhances property value. We install wafer-thin canless LED recessed
                  ceiling downlights, dimmable under-cabinet kitchen lighting, dramatic dining chandeliers, and low-voltage
                  outdoor landscape illumination. All exterior fixtures are weather-sealed to handle freezing Utah winters.
                </p>
                <div className="mt-5">
                  <Link
                    to="/lighting-solutions"
                    className="inline-flex items-center gap-2 font-semibold text-electric-600 hover:text-electric-700"
                  >
                    See our lighting solutions & designs
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </Reveal>
              <Reveal delay={100} className="lg:order-1">
                <div className="overflow-hidden rounded-2xl shadow-md border border-navy-100">
                  <img
                    src="https://images.pexels.com/photos/4792521/pexels-photo-4792521.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                    alt="Recessed LED ceiling lighting installation in home"
                    className="h-72 w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </Reveal>
            </div>

            {/* Pillar 5 & 6: EV Chargers & Generators */}
            <div className="grid gap-8 sm:grid-cols-2">
              <Reveal>
                <div className="h-full rounded-2xl border border-navy-100 bg-white p-6 shadow-sm sm:p-8 flex flex-col justify-between">
                  <div>
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-400">
                      <BatteryCharging className="h-6 w-6 text-navy-900" aria-hidden="true" />
                    </span>
                    <h2 className="mt-4 font-display text-2xl font-bold text-navy-900">
                      EV Charger Installation for Your Home
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-navy-600">
                      Charge your electric vehicle up to 8x faster with a dedicated Level 2 home charging station. We install
                      Tesla Wall Connectors, ChargePoint, and universal 240V NEMA 14-50 outlets. Includes panel load calculations
                      and safe 50A/60A breaker installations in garages, carports, and outdoor pedestals.
                    </p>
                  </div>
                  <div className="mt-6 border-t border-navy-100 pt-4">
                    <Link
                      to="/ev-chargers-and-modern-power"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-electric-600 hover:text-electric-700"
                    >
                      Learn more about home EV charger installation
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={100}>
                <div className="h-full rounded-2xl border border-navy-100 bg-white p-6 shadow-sm sm:p-8 flex flex-col justify-between">
                  <div>
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900">
                      <Zap className="h-6 w-6 text-amber-400" aria-hidden="true" />
                    </span>
                    <h2 className="mt-4 font-display text-2xl font-bold text-navy-900">
                      Generator Installation and Backup Power Solutions
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-navy-600">
                      Keep your home heated, your food preserved, and critical medical devices operating during severe winter
                      outages. We install whole-home automatic standby generators as well as manual transfer switches and outdoor
                      inlet boxes for portable generator hookups, preventing dangerous utility backfeeding.
                    </p>
                  </div>
                  <div className="mt-6 border-t border-navy-100 pt-4">
                    <Link
                      to="/generators-and-backup-power"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-electric-600 hover:text-electric-700"
                    >
                      Explore generator and backup power solutions
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Why Choose All Wired LLC */}
      <section className="bg-navy-900 py-16 lg:py-24">
        <div className="container-x">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-wider text-amber-400">
                The All Wired Difference
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl text-balance">
                Why Homeowners Choose All Wired LLC
              </h2>
              <p className="mt-4 text-base text-gray-300 sm:text-lg leading-relaxed">
                When you invite an electrician into your home, you deserve complete peace of mind. All Wired LLC has built
                a trusted reputation in American Fork, Lehi, and Utah County on a simple foundation: master-level
                craftsmanship, transparent communication, and genuine care for customer safety.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <CallButton variant="primary" label={`Call ${BUSINESS.phone}`} />
                <Link to="/contact" className="btn-secondary">
                  Request a Quote
                </Link>
              </div>
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: Award,
                  title: '40+ Years Experience',
                  text: 'Decades of real-world troubleshooting, panel installations, and master-level trade expertise.',
                },
                {
                  icon: ShieldCheck,
                  title: 'Licensed & Insured',
                  text: 'Active Utah contractor license #123184-5502 with full commercial liability and worker coverage.',
                },
                {
                  icon: Star,
                  title: '5.0 Verified Rating',
                  text: 'Perfect 5.0 score from verified local homeowners on HomeAdvisor and Angi.',
                },
                {
                  icon: Clock,
                  title: 'Prompt & Emergency Service',
                  text: 'Fast response for urgent hazards, power loss, and safety concerns when you need help most.',
                },
                {
                  icon: ThumbsUp,
                  title: 'Free Honest Estimates',
                  text: 'Clear, upfront pricing with no hidden trip fees, sales pressure, or surprise surcharges.',
                },
                {
                  icon: Handshake,
                  title: 'Direct Master Communication',
                  text: 'Talk directly with an experienced electrician—not an automated bot or third-party call center.',
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

      {/* Section 7: Service Areas */}
      <section className="section-pad bg-gray-50 border-t border-navy-100">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-electric-600">
              Verified Service Areas
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy-900 sm:text-4xl text-balance">
              Proudly Serving American Fork, Lehi & Utah County
            </h2>
            <p className="mt-4 text-base text-navy-600 sm:text-lg">
              Based in American Fork, we provide residential and commercial electrical services across our verified Utah County service area.
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

      {/* Section 8: Educational Guides & Content Marketing Section */}
      <section className="section-pad bg-gray-50 border-t border-navy-100">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-400/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-900 ring-1 ring-amber-400/30">
              <BookOpen className="h-3 w-3" aria-hidden="true" />
              Electrical Knowledge Hub
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy-900 sm:text-4xl text-balance">
              Latest Electrical Guides & Advice for Utah Homeowners
            </h2>
            <p className="mt-4 text-base text-navy-600">
              Expert articles and practical advice to help you maintain a safe, efficient, and up-to-code electrical system.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {BLOG_POSTS.slice(0, 3).map((post, i) => (
              <Reveal key={post.slug} delay={i * 60}>
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:border-electric-200 hover:shadow-lg">
                  <Link to={`/blog/${post.slug}`} className="relative block aspect-[16/9] overflow-hidden bg-navy-100">
                    <img
                      src={post.image}
                      alt={post.imageAlt}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-navy-950/80 px-2.5 py-1 text-xs font-semibold text-amber-300 backdrop-blur-sm">
                      {post.category}
                    </span>
                  </Link>

                  <div className="flex flex-1 flex-col p-6">
                    <div className="text-xs text-navy-500">
                      {post.publishDate} • {post.readTime}
                    </div>

                    <h3 className="mt-3 font-display text-lg font-bold text-navy-900 transition-colors group-hover:text-electric-600">
                      <Link to={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>

                    <p className="mt-3 flex-1 text-xs sm:text-sm leading-relaxed text-navy-600 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="mt-5 border-t border-navy-50 pt-4 flex items-center justify-between">
                      <Link
                        to={post.targetService.url}
                        className="text-xs font-medium text-navy-500 hover:text-electric-600 underline"
                      >
                        Explore {post.targetService.name}
                      </Link>
                      <Link
                        to={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-electric-600 group-hover:text-electric-700"
                      >
                        Read
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10 text-center">
            <Link to="/blog" className="btn-outline">
              Browse All 10 Electrical Guides
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Section 9: Frequently Asked Questions About Electrical Services */}
      <section className="section-pad bg-white">
        <div className="container-x">
          <Reveal className="mx-auto max-w-3xl">
            <p className="text-center text-sm font-semibold uppercase tracking-wider text-electric-600">
              Answers & Advice
            </p>
            <h2 className="mt-3 text-center font-display text-3xl font-bold text-navy-900 sm:text-4xl text-balance">
              Frequently Asked Questions About Electrical Services
            </h2>
            <p className="mt-4 text-center text-base text-navy-600">
              Clear answers to the most common electrical questions from American Fork and Lehi homeowners.
            </p>
            <div className="mt-10">
              <FaqList faqs={homeFaqs} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Section 9: Final CTA */}
      <CtaSection
        title="Ready to Request a Quote from All Wired LLC?"
        subtitle="Speak with a licensed master electrician with over 40 years of Utah County experience. Call (801) 800-2828 for free estimates and emergency services."
      />
    </>
  );
}
