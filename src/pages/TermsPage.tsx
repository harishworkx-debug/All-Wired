import Seo from '@/components/Seo';
import Breadcrumbs from '@/components/Breadcrumbs';
import { BUSINESS } from '@/data/business';

export default function TermsPage() {
  return (
    <>
      <Seo
        title="Terms and Conditions | All Wired"
        description="Terms and Conditions for All Wired, an electrician serving American Fork, UT and Utah County."
        path="/terms-and-conditions"
      />

      <div className="bg-gray-50 pt-6">
        <div className="container-x">
          <Breadcrumbs items={[{ name: 'Home', path: '/' }, { name: 'Terms and Conditions' }]} />
        </div>
      </div>

      <section className="section-pad bg-gray-50">
        <div className="container-x">
          <div className="mx-auto max-w-3xl">
            <h1 className="font-display text-3xl font-extrabold text-navy-900 sm:text-4xl">
              Terms and Conditions
            </h1>
            <p className="mt-4 text-sm text-navy-500">Last updated: November 2026</p>

            <div className="mt-8 max-w-none space-y-6 text-navy-700">
              <div>
                <h2 className="font-display text-xl font-bold text-navy-900">Acceptance of Terms</h2>
                <p className="mt-3 text-base leading-relaxed">
                  By accessing and using this website, you accept and agree to be bound by these
                  Terms and Conditions. If you do not agree, please do not use this website.
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl font-bold text-navy-900">About This Website</h2>
                <p className="mt-3 text-base leading-relaxed">
                  This website is operated by {BUSINESS.legalName}, a licensed electrician based in{' '}
                  {BUSINESS.address.city}, {BUSINESS.address.state}. This is a call-only website. We
                  do not offer online booking, forms, or scheduling. All service inquiries must be
                  made by phone at {BUSINESS.phone}.
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl font-bold text-navy-900">No Warranties</h2>
                <p className="mt-3 text-base leading-relaxed">
                  Information on this website is provided for general informational purposes only. We
                  strive to keep information accurate and up to date, but we make no warranties about
                  completeness or accuracy. Service availability, pricing, and scope are confirmed by
                  phone and may vary by project.
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl font-bold text-navy-900">Service Availability</h2>
                <p className="mt-3 text-base leading-relaxed">
                  Service areas and availability are subject to change. Listing a city on this
                  website does not guarantee service in every part of that city. Call us to confirm
                  availability for your specific location before relying on this website for service.
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl font-bold text-navy-900">Licensing</h2>
                <p className="mt-3 text-base leading-relaxed">
                  All Wired is licensed in the State of Utah, license number{' '}
                  {BUSINESS.license.number}, expiring {BUSINESS.license.expires}. License information
                  is self-reported and should be verified independently.
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl font-bold text-navy-900">Limitation of Liability</h2>
                <p className="mt-3 text-base leading-relaxed">
                  {BUSINESS.legalName} is not liable for any damages arising from the use of this
                  website or reliance on information presented here. All electrical work is performed
                  under separate agreement and subject to applicable codes and inspections.
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl font-bold text-navy-900">Contact</h2>
                <p className="mt-3 text-base leading-relaxed">
                  For questions about these Terms and Conditions, call us at{' '}
                  <a href={BUSINESS.phoneHref} className="font-medium text-electric-600 hover:underline">
                    {BUSINESS.phone}
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
