import { Link } from 'react-router-dom';
import { Wrench, Zap, BatteryCharging, Home, Building2, Phone, ArrowRight, CheckCircle2, Lightbulb, Plug, ShieldCheck, Search } from 'lucide-react';
import Seo from '@/components/Seo';
import Reveal from '@/components/Reveal';
import CallButton from '@/components/CallButton';
import Breadcrumbs from '@/components/Breadcrumbs';
import CtaSection from '@/components/CtaSection';
import ServiceAreaLinks from '@/components/ServiceAreaLinks';
import { BUSINESS, SERVICES } from '@/data/business';
import { breadcrumbSchema } from '@/lib/schema';

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

export default function ServicesOverviewPage() {
  const jsonLd = [
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Services', path: '/services' },
    ]),
  ];

  return (
    <>
      <Seo
        title="Electrical Services in American Fork, UT | All Wired"
        description="All Wired offers electrical repair, panel upgrades, EV charger installation, remodel electrical work, and residential and commercial services in American Fork, UT. Call (801) 800-2828."
        path="/services"
        jsonLd={jsonLd}
      />

      <section className="bg-navy-900 py-14 lg:py-20">
        <div className="container-x">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-amber-400">
              Electrical Services
            </p>
            <h1 className="mt-3 font-display text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl text-balance">
              Complete Electrical Services for American Fork & Utah County
            </h1>
            <p className="mt-5 text-lg text-gray-300 text-pretty">
              All Wired handles a wide range of electrical projects for homes and businesses. From
              repairs and panel upgrades to EV charger installation and remodel wiring, every project
              gets personalized attention and quality workmanship.
            </p>
            <div className="mt-7">
              <CallButton variant="primary" label={`Call ${BUSINESS.phone}`} />
            </div>
          </div>
        </div>
      </section>

      <div className="bg-gray-50 pt-6">
        <div className="container-x">
          <Breadcrumbs items={[{ name: 'Home', path: '/' }, { name: 'Electrical Services' }]} />
        </div>
      </div>

      <section className="section-pad bg-gray-50">
        <div className="container-x">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => {
              const Icon = ICONS[s.icon] ?? Wrench;
              return (
                <Reveal key={s.slug} delay={i * 80}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="card group flex h-full flex-col overflow-hidden transition-all duration-300 hover:border-electric-300 hover:shadow-xl hover:-translate-y-1"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={s.image}
                        alt={s.imageAlt}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent" />
                      <span className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-400 shadow-lg">
                        <Icon className="h-5 w-5 text-navy-900" aria-hidden="true" />
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h2 className="font-display text-xl font-bold text-navy-900 transition-colors group-hover:text-electric-600">
                        {s.name}
                      </h2>
                      <p className="mt-2 text-sm leading-relaxed text-navy-600 flex-1">{s.description}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {s.commonIssues.slice(0, 2).map((issue) => (
                          <span
                            key={issue}
                            className="inline-flex items-center gap-1.5 rounded-lg bg-gray-50 px-2.5 py-1 text-xs text-navy-600"
                          >
                            <CheckCircle2 className="h-3 w-3 text-electric-500" aria-hidden="true" />
                            {issue.length > 40 ? issue.slice(0, 40) + '...' : issue}
                          </span>
                        ))}
                      </div>
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

      <section className="section-pad">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-2xl font-bold text-navy-900 sm:text-3xl text-balance">
              Not Sure Which Service You Need?
            </h2>
            <p className="mt-4 text-base text-navy-600 sm:text-lg">
              Call and describe what you are experiencing. We will help you figure out the right
              service and next steps, no obligation.
            </p>
            <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <CallButton variant="dark" label={`Call ${BUSINESS.phone}`} />
              <Link to="/service-areas" className="btn-outline">
                Check Service Areas
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad border-t border-navy-100 bg-white">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-electric-600">
              Service Areas
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold text-navy-900 sm:text-3xl text-balance">
              Electrical Services Throughout Utah County
            </h2>
            <p className="mt-4 text-base text-navy-600">
              Select your city to view local electrical services and schedule a free estimate.
            </p>
          </Reveal>
          <div className="mt-10">
            <ServiceAreaLinks />
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
