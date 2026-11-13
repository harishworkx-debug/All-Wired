import { Link } from 'react-router-dom';
import { Award, ShieldCheck, Clock, Star, Phone, ArrowRight, CheckCircle2, MapPin } from 'lucide-react';
import Seo from '@/components/Seo';
import Reveal from '@/components/Reveal';
import CallButton from '@/components/CallButton';
import Breadcrumbs from '@/components/Breadcrumbs';
import CtaSection from '@/components/CtaSection';
import { BUSINESS, LOCATIONS, locationUrl } from '@/data/business';
import { localBusinessSchema, breadcrumbSchema } from '@/lib/schema';

export default function AboutPage() {
  const jsonLd = [
    localBusinessSchema(),
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'About Us', path: '/about' },
    ]),
  ];

  return (
    <>
      <Seo
        title="About All Wired | Licensed Electrician in American Fork, UT"
        description="All Wired is a licensed electrician in American Fork, UT with over 40 years of experience. Offering personalized service, free estimates, and emergency electrical work. Call (801) 800-2828."
        path="/about"
        jsonLd={jsonLd}
      />

      <div className="bg-gray-50 pt-6">
        <div className="container-x">
          <Breadcrumbs items={[{ name: 'Home', path: '/' }, { name: 'About Us' }]} />
        </div>
      </div>

      <section className="bg-gray-50 py-12 lg:py-16">
        <div className="container-x">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-wider text-electric-600">
                About All Wired
              </p>
              <h1 className="mt-3 font-display text-3xl font-extrabold text-navy-900 sm:text-4xl lg:text-5xl text-balance">
                A Local Electrician Built on Experience and Trust
              </h1>
              <p className="mt-5 text-base leading-relaxed text-navy-600 sm:text-lg">
                All Wired is a licensed electrical contractor based in American Fork, Utah. With over
                40 years of experience in the electrical industry, we take on a wide range of
                projects, from full installations for additions and remodels to wiring and panel
                upgrades and everything in between.
              </p>
              <p className="mt-4 text-base leading-relaxed text-navy-600">
                We are committed to providing personalized service for each individual project we take
                on, and we look forward to building strong, long-term relationships with our clients
                and guaranteeing your satisfaction.
              </p>
              <div className="mt-7">
                <CallButton variant="primary" label={`Call ${BUSINESS.phone}`} />
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="overflow-hidden rounded-3xl shadow-xl">
                <img
                  src="https://images.pexels.com/photos/32497160/pexels-photo-32497160.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="Electrician examining a residential fuse box in American Fork, UT"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-2xl font-bold text-navy-900 sm:text-3xl text-balance">
              What Sets All Wired Apart
            </h2>
            <p className="mt-3 text-base text-navy-600">
              Real credentials, real experience, and a commitment to every project we take on.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Award,
                title: 'Licensed in Utah',
                text: `Utah electrical license #${BUSINESS.license.number}, expiring ${BUSINESS.license.expires}. Fully licensed for residential and commercial work.`,
              },
              {
                icon: Clock,
                title: 'Over 40 Years of Experience',
                text: 'Four decades in the electrical industry means we have seen and solved nearly every electrical problem you can encounter.',
              },
              {
                icon: ShieldCheck,
                title: 'Safety and Code Compliance',
                text: 'Every project is completed to code with proper permits and inspections. Your safety is the top priority.',
              },
              {
                icon: Star,
                title: '5.0 Customer Rating',
                text: 'Rated 5.0 out of 5 by verified reviewers on HomeAdvisor and Angi. Our work speaks for itself.',
              },
              {
                icon: Phone,
                title: 'Emergency Service Available',
                text: 'Electrical issues do not always happen during business hours. We offer emergency electrical service.',
              },
              {
                icon: CheckCircle2,
                title: 'Free Project Estimates',
                text: 'We offer free estimates so you understand the scope and cost before any work begins.',
              },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 70}>
                <div className="h-full rounded-2xl border border-navy-100 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                  <item.icon className="h-9 w-9 text-amber-500" aria-hidden="true" />
                  <h3 className="mt-4 font-display text-lg font-bold text-navy-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-600">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-900 py-16 lg:py-20">
        <div className="container-x">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal>
              <h2 className="font-display text-2xl font-bold text-white sm:text-3xl text-balance">
                Serving American Fork and Utah County
              </h2>
              <p className="mt-4 text-base text-gray-300 sm:text-lg">
                All Wired is based in American Fork and serves homeowners and businesses throughout
                Utah County. From Lehi to Provo, we are your nearby licensed electrician.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <CallButton variant="primary" label={`Call ${BUSINESS.phone}`} />
                <Link to="/service-areas" className="btn-secondary">
                  View Service Areas
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </Link>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="grid gap-3 sm:grid-cols-3">
                {LOCATIONS.slice(0, 6).map((l) => (
                  <Link
                    key={l.slug}
                    to={locationUrl(l.slug)}
                    className="group flex items-center justify-between gap-2 rounded-xl border border-navy-700 bg-navy-800/50 px-4 py-3 transition-all hover:border-amber-400/50 hover:bg-navy-800"
                  >
                    <span className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-amber-400" aria-hidden="true" />
                      <span className="text-sm font-medium text-gray-200 group-hover:text-white">{l.city}</span>
                    </span>
                    <ArrowRight className="h-4 w-4 text-gray-500 transition-transform group-hover:translate-x-1 group-hover:text-amber-400" aria-hidden="true" />
                  </Link>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaSection
        title="Talk to All Wired About Your Project"
        subtitle="Call today for a free estimate or to discuss your electrical needs. Over 40 years of experience serving American Fork and Utah County."
      />
    </>
  );
}
