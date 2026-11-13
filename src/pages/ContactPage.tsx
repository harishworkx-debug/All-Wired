import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  MapPin,
  Clock,
  Globe,
  ExternalLink,
  Navigation,
  Send,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Award,
} from 'lucide-react';
import Seo from '@/components/Seo';
import Reveal from '@/components/Reveal';
import CallButton from '@/components/CallButton';
import Breadcrumbs from '@/components/Breadcrumbs';
import ServiceAreaLinks from '@/components/ServiceAreaLinks';
import { BUSINESS, CORE_SERVICES } from '@/data/business';
import { localBusinessSchema, breadcrumbSchema } from '@/lib/schema';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    service: 'electrical-repairs-and-upgrades',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
  };

  const jsonLd = [
    localBusinessSchema(),
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Contact', path: '/contact' },
    ]),
  ];

  return (
    <>
      <Seo
        title="Contact All Wired LLC | Electrician in American Fork, UT"
        description="Looking for a reliable electrician in American Fork, UT? Contact All Wired LLC. Call (801) 800-2828 for fast repairs, panel upgrades, EV chargers, and generator installations. Free estimates."
        path="/contact"
        jsonLd={jsonLd}
      />

      {/* Hero Section */}
      <section className="bg-navy-900 py-16 lg:py-24">
        <div className="container-x">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-400/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-300 ring-1 ring-amber-400/30">
                <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                American Fork & Lehi, Utah
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

            <h1 className="mt-4 font-display text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl text-balance">
              Contact Your Local Electrician in American Fork, Utah
            </h1>

            <p className="mt-5 text-lg text-gray-300 text-pretty leading-relaxed">
              Have an electrical repair, planning a panel upgrade, or need an EV charger installed?
              Speak directly with an experienced master electrician. Request a free estimate below or
              call us directly at <span className="font-semibold text-amber-400">{BUSINESS.phone}</span>.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <CallButton variant="primary" label={`Call ${BUSINESS.phone}`} />
              <a href="#estimate-form" className="btn-secondary">
                Request Free Estimate
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="bg-gray-50 pt-6">
        <div className="container-x">
          <Breadcrumbs items={[{ name: 'Home', path: '/' }, { name: 'Contact' }]} />
        </div>
      </div>

      {/* Contact Form & Business Details */}
      <section className="section-pad bg-gray-50" id="estimate-form">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-12 items-start">
            {/* Left Column: Interactive Estimate Form */}
            <div className="lg:col-span-7">
              <Reveal>
                <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-md sm:p-8">
                  <div className="flex items-center justify-between border-b border-navy-100 pb-5">
                    <div>
                      <h2 className="font-display text-2xl font-bold text-navy-900">
                        Request a Free Project Estimate
                      </h2>
                      <p className="mt-1 text-sm text-navy-600">
                        Fill out the details below, and we will get back to you promptly.
                      </p>
                    </div>
                  </div>

                  {submitted ? (
                    <div className="my-8 rounded-xl bg-emerald-50 border border-emerald-200 p-6 text-center">
                      <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-600" aria-hidden="true" />
                      <h3 className="mt-3 font-display text-xl font-bold text-navy-900">
                        Estimate Request Received!
                      </h3>
                      <p className="mt-2 text-sm text-navy-700">
                        Thank you for contacting All Wired LLC. A licensed electrician will review your project
                        details and call you shortly. For immediate assistance, please call us directly.
                      </p>
                      <div className="mt-5">
                        <a
                          href={BUSINESS.phoneHref}
                          className="inline-flex items-center gap-2 rounded-xl bg-navy-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-electric-600"
                        >
                          <Phone className="h-4 w-4 text-amber-400" aria-hidden="true" />
                          Call {BUSINESS.phone} Now
                        </a>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label htmlFor="name" className="block text-sm font-semibold text-navy-800">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            required
                            placeholder="John Smith"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="mt-1.5 w-full rounded-xl border border-navy-200 px-4 py-2.5 text-sm text-navy-900 outline-none transition-all focus:border-electric-600 focus:ring-2 focus:ring-electric-600/20"
                          />
                        </div>

                        <div>
                          <label htmlFor="phone" className="block text-sm font-semibold text-navy-800">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            required
                            placeholder="(801) 000-0000"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="mt-1.5 w-full rounded-xl border border-navy-200 px-4 py-2.5 text-sm text-navy-900 outline-none transition-all focus:border-electric-600 focus:ring-2 focus:ring-electric-600/20"
                          />
                        </div>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label htmlFor="email" className="block text-sm font-semibold text-navy-800">
                            Email Address
                          </label>
                          <input
                            type="email"
                            id="email"
                            placeholder="john@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="mt-1.5 w-full rounded-xl border border-navy-200 px-4 py-2.5 text-sm text-navy-900 outline-none transition-all focus:border-electric-600 focus:ring-2 focus:ring-electric-600/20"
                          />
                        </div>

                        <div>
                          <label htmlFor="city" className="block text-sm font-semibold text-navy-800">
                            City / Location *
                          </label>
                          <input
                            type="text"
                            id="city"
                            required
                            placeholder="e.g. American Fork or Lehi"
                            value={formData.city}
                            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                            className="mt-1.5 w-full rounded-xl border border-navy-200 px-4 py-2.5 text-sm text-navy-900 outline-none transition-all focus:border-electric-600 focus:ring-2 focus:ring-electric-600/20"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="service" className="block text-sm font-semibold text-navy-800">
                          Select Service Needed *
                        </label>
                        <select
                          id="service"
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="mt-1.5 w-full rounded-xl border border-navy-200 px-4 py-2.5 text-sm text-navy-900 outline-none transition-all focus:border-electric-600 focus:ring-2 focus:ring-electric-600/20 bg-white"
                        >
                          <option value="electrical-repairs-and-upgrades">
                            Electrical Repairs & Panel Upgrades
                          </option>
                          <option value="wiring-and-installations">
                            Wiring & Installations (Basements, Remodels, Dedicated Circuits)
                          </option>
                          <option value="lighting-solutions">
                            Lighting Solutions (Indoor Recessed LED & Landscape)
                          </option>
                          <option value="generators-and-backup-power">
                            Generators & Backup Power Solutions
                          </option>
                          <option value="ev-chargers-and-modern-power">
                            EV Charger Installation (Level 2 Home Charging)
                          </option>
                          <option value="other-emergency">
                            Emergency Electrical / Other Inquiries
                          </option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-semibold text-navy-800">
                          Project Description *
                        </label>
                        <textarea
                          id="message"
                          rows={4}
                          required
                          placeholder="Tell us about your project, symptoms, timeline, or questions..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="mt-1.5 w-full rounded-xl border border-navy-200 px-4 py-2.5 text-sm text-navy-900 outline-none transition-all focus:border-electric-600 focus:ring-2 focus:ring-electric-600/20"
                        />
                      </div>

                      <button
                        type="submit"
                        className="btn-call w-full cursor-pointer py-3.5 text-base font-bold shadow-lg"
                      >
                        <Send className="h-4 w-4" aria-hidden="true" />
                        Submit Estimate Request
                      </button>

                      <p className="text-center text-xs text-navy-500">
                        🔒 Your information is kept strictly confidential. We never spam or sell client information.
                      </p>
                    </form>
                  )}
                </div>
              </Reveal>
            </div>

            {/* Right Column: Verified Business Information & Hours */}
            <div className="space-y-6 lg:col-span-5">
              <Reveal delay={100}>
                <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-sm sm:p-8">
                  <h2 className="font-display text-xl font-bold text-navy-900">
                    Business Information
                  </h2>
                  <p className="mt-1 text-xs text-navy-500">
                    Verified Google Business Profile Information
                  </p>

                  <div className="mt-6 space-y-5">
                    {/* Phone */}
                    <div className="flex items-start gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-400">
                        <Phone className="h-5 w-5 text-navy-900" aria-hidden="true" />
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-navy-500">Phone</p>
                        <a
                          href={BUSINESS.phoneHref}
                          className="font-display text-xl font-bold text-navy-900 hover:text-electric-600"
                        >
                          {BUSINESS.phone}
                        </a>
                        <p className="text-xs text-navy-500">Direct line to master electricians</p>
                      </div>
                    </div>

                    {/* Address */}
                    <div className="flex items-start gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-900">
                        <MapPin className="h-5 w-5 text-amber-400" aria-hidden="true" />
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-navy-500">Physical Address</p>
                        <p className="text-sm font-medium text-navy-900">
                          {BUSINESS.address.street}
                          <br />
                          {BUSINESS.address.city}, {BUSINESS.address.state} {BUSINESS.address.zip}
                        </p>
                        <a
                          href={BUSINESS.mapsLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-1.5 inline-flex items-center gap-1 text-xs font-semibold text-electric-600 hover:text-electric-700"
                        >
                          Get Google Maps Directions
                          <ExternalLink className="h-3 w-3" aria-hidden="true" />
                        </a>
                      </div>
                    </div>

                    {/* Hours */}
                    <div className="flex items-start gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-900">
                        <Clock className="h-5 w-5 text-amber-400" aria-hidden="true" />
                      </span>
                      <div className="flex-1">
                        <p className="text-xs font-semibold uppercase tracking-wider text-navy-500">Business Hours</p>
                        <ul className="mt-2 space-y-1.5 text-xs">
                          {BUSINESS.hours.map((h) => (
                            <li key={h.day} className="flex justify-between">
                              <span className="text-navy-700 font-medium">{h.day}</span>
                              <span className={h.time === 'Closed' ? 'text-navy-400' : 'font-semibold text-navy-900'}>
                                {h.time}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* License */}
                    <div className="flex items-start gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-900">
                        <ShieldCheck className="h-5 w-5 text-amber-400" aria-hidden="true" />
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-navy-500">Utah Licensing</p>
                        <p className="text-sm font-medium text-navy-900">License #{BUSINESS.license.number}</p>
                        <p className="text-xs text-navy-500">Active · Insured · Bonded</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 border-t border-navy-100 pt-6">
                    <CallButton variant="dark" label={`Call ${BUSINESS.phone}`} className="w-full" />
                  </div>
                </div>
              </Reveal>

              {/* Map Embed */}
              <Reveal delay={150}>
                <div className="overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-sm">
                  <div className="flex items-center justify-between border-b border-navy-100 px-5 py-3.5">
                    <h3 className="font-display text-sm font-bold text-navy-900">Location Map</h3>
                    <a
                      href={BUSINESS.mapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-electric-600 hover:text-electric-700"
                    >
                      <Navigation className="h-3.5 w-3.5" aria-hidden="true" />
                      Open Maps
                    </a>
                  </div>
                  <div className="relative w-full" style={{ paddingBottom: '60%' }}>
                    <iframe
                      src={BUSINESS.mapsEmbed}
                      className="absolute inset-0 h-full w-full"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="strict-origin-when-cross-origin"
                      title={`Google Maps showing All Wired LLC location in ${BUSINESS.address.city}, ${BUSINESS.address.state}`}
                    />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Links to All Five Service Pages */}
      <section className="section-pad border-t border-navy-100 bg-white">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-electric-600">
              Our Services
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold text-navy-900 sm:text-3xl text-balance">
              Explore Our Core Electrical Services
            </h2>
            <p className="mt-3 text-base text-navy-600">
              Click any of our main service categories below to view detailed service processes and options.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CORE_SERVICES.map((s) => (
              <Link
                key={s.slug}
                to={`/${s.slug}`}
                className="group flex items-center justify-between rounded-xl border border-navy-100 bg-white p-5 shadow-sm transition-all hover:border-electric-300 hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
              >
                <div>
                  <h3 className="font-display text-base font-bold text-navy-900 group-hover:text-electric-600 transition-colors">
                    {s.name}
                  </h3>
                  <p className="mt-1 text-xs text-navy-500 line-clamp-1">{s.tagline}</p>
                </div>
                <ArrowRight className="h-4 w-4 shrink-0 text-navy-300 transition-transform group-hover:translate-x-1 group-hover:text-electric-600" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Areas Served */}
      <section className="section-pad bg-gray-50 border-t border-navy-100">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-electric-600">
              Service Coverage
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold text-navy-900 sm:text-3xl text-balance">
              Communities We Proudly Serve
            </h2>
            <p className="mt-3 text-base text-navy-600">
              All Wired LLC provides electrical repairs and installations throughout American Fork, Lehi, and Utah County.
            </p>
          </Reveal>

          <div className="mt-10">
            <ServiceAreaLinks />
          </div>
        </div>
      </section>
    </>
  );
}
