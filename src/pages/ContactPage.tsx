import { Phone, MapPin, Clock, Globe, ExternalLink, Navigation } from 'lucide-react';
import Seo from '@/components/Seo';
import Reveal from '@/components/Reveal';
import CallButton from '@/components/CallButton';
import Breadcrumbs from '@/components/Breadcrumbs';
import { BUSINESS } from '@/data/business';
import { localBusinessSchema, breadcrumbSchema } from '@/lib/schema';

export default function ContactPage() {
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
        title="Contact All Wired | Electrician in American Fork, UT"
        description="Contact All Wired for electrical service in American Fork, UT. Call (801) 800-2828 for repairs, panel upgrades, EV chargers, and more. Free estimates and emergency service."
        path="/contact"
        jsonLd={jsonLd}
      />

      <section className="bg-navy-900 py-14 lg:py-20">
        <div className="container-x">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-amber-400">
              Contact
            </p>
            <h1 className="mt-3 font-display text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl text-balance">
              Contact All Wired
            </h1>
            <p className="mt-5 text-lg text-gray-300 text-pretty">
              Call us directly to discuss your electrical needs. We do not use online forms — just
              pick up the phone and speak with a licensed electrician.
            </p>
            <div className="mt-7">
              <CallButton variant="primary" label={`Call ${BUSINESS.phone}`} />
            </div>
          </div>
        </div>
      </section>

      <div className="bg-gray-50 pt-6">
        <div className="container-x">
          <Breadcrumbs items={[{ name: 'Home', path: '/' }, { name: 'Contact' }]} />
        </div>
      </div>

      <section className="section-pad bg-gray-50">
        <div className="container-x">
          <div className="grid gap-8 lg:grid-cols-2">
            <Reveal>
              <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-sm sm:p-8">
                <h2 className="font-display text-2xl font-bold text-navy-900">Business Information</h2>
                <div className="mt-6 space-y-5">
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-400">
                      <Phone className="h-5 w-5 text-navy-900" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-navy-500">Phone</p>
                      <a
                        href={BUSINESS.phoneHref}
                        className="font-display text-xl font-bold text-navy-900 hover:text-electric-600"
                      >
                        {BUSINESS.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-900">
                      <MapPin className="h-5 w-5 text-amber-400" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-navy-500">Address</p>
                      <p className="text-base text-navy-900">
                        {BUSINESS.address.street}
                        <br />
                        {BUSINESS.address.city}, {BUSINESS.address.state} {BUSINESS.address.zip}
                      </p>
                      <a
                        href={BUSINESS.mapsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1.5 inline-flex items-center gap-1 text-sm font-medium text-electric-600 hover:text-electric-700"
                      >
                        Open in Google Maps
                        <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-900">
                      <Globe className="h-5 w-5 text-amber-400" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-navy-500">Website</p>
                      <a
                        href={BUSINESS.website}
                        className="text-base text-navy-900 hover:text-electric-600"
                      >
                        www.allwiredamericanfork.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-900">
                      <Clock className="h-5 w-5 text-amber-400" aria-hidden="true" />
                    </span>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-navy-500">Business Hours</p>
                      <ul className="mt-2 space-y-1.5">
                        {BUSINESS.hours.map((h) => (
                          <li key={h.day} className="flex justify-between text-sm">
                            <span className="text-navy-700">{h.day}</span>
                            <span className={h.time === 'Closed' ? 'text-navy-400' : 'font-medium text-navy-900'}>
                              {h.time}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-6 border-t border-navy-100 pt-6">
                  <CallButton variant="dark" label={`Call ${BUSINESS.phone}`} className="w-full" />
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-sm">
                <div className="flex items-center justify-between border-b border-navy-100 px-5 py-4">
                  <h2 className="font-display text-lg font-bold text-navy-900">Find Us on the Map</h2>
                  <a
                    href={BUSINESS.mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-electric-600 hover:text-electric-700"
                  >
                    <Navigation className="h-4 w-4" aria-hidden="true" />
                    Directions
                  </a>
                </div>
                <div className="relative w-full" style={{ paddingBottom: '75%' }}>
                  <iframe
                    src={BUSINESS.mapsEmbed}
                    className="absolute inset-0 h-full w-full"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title={`Map showing All Wired location in ${BUSINESS.address.city}, ${BUSINESS.address.state}`}
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-navy-900 py-14 lg:py-16">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl text-balance">
              Ready to Speak With an Electrician?
            </h2>
            <p className="mt-4 text-base text-gray-300 sm:text-lg">
              Call {BUSINESS.phone} now. We offer free estimates and emergency service for American
              Fork and Utah County.
            </p>
            <div className="mt-6 flex justify-center">
              <CallButton variant="primary" label={`Call ${BUSINESS.phone}`} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
