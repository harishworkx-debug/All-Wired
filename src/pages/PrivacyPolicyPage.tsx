import Seo from '@/components/Seo';
import Breadcrumbs from '@/components/Breadcrumbs';
import { BUSINESS } from '@/data/business';

export default function PrivacyPolicyPage() {
  return (
    <>
      <Seo
        title="Privacy Policy | All Wired"
        description="Privacy Policy for All Wired, an electrician serving American Fork, UT and Utah County."
        path="/privacy-policy"
      />

      <div className="bg-gray-50 pt-6">
        <div className="container-x">
          <Breadcrumbs items={[{ name: 'Home', path: '/' }, { name: 'Privacy Policy' }]} />
        </div>
      </div>

      <section className="section-pad bg-gray-50">
        <div className="container-x">
          <div className="mx-auto max-w-3xl">
            <h1 className="font-display text-3xl font-extrabold text-navy-900 sm:text-4xl">
              Privacy Policy
            </h1>
            <p className="mt-4 text-sm text-navy-500">Last updated: November 2026</p>

            <div className="prose mt-8 max-w-none space-y-6 text-navy-700">
              <div>
                <h2 className="font-display text-xl font-bold text-navy-900">Overview</h2>
                <p className="mt-3 text-base leading-relaxed">
                  {BUSINESS.legalName} ("All Wired," "we," "us") respects your privacy. This Privacy
                  Policy explains how we handle information when you visit our website at{' '}
                  {BUSINESS.website}.
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl font-bold text-navy-900">Information We Collect</h2>
                <p className="mt-3 text-base leading-relaxed">
                  This is a call-only website. We do not use contact forms, booking forms, or online
                  lead capture tools. We do not collect personal information such as names, email
                  addresses, or home addresses through this website.
                </p>
                <p className="mt-3 text-base leading-relaxed">
                  When you call us, we may record information you share verbally — such as your name,
                  address, and the nature of your electrical issue — solely for the purpose of
                  providing service.
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl font-bold text-navy-900">Cookies and Analytics</h2>
                <p className="mt-3 text-base leading-relaxed">
                  We do not use advertising cookies or third-party tracking cookies on this website.
                  Standard web server logs may be collected by our hosting provider for security and
                  operational purposes.
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl font-bold text-navy-900">Third-Party Links</h2>
                <p className="mt-3 text-base leading-relaxed">
                  This website may contain links to third-party services such as Google Maps. We are
                  not responsible for the privacy practices of those services. We encourage you to
                  review their privacy policies.
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl font-bold text-navy-900">Your Choices</h2>
                <p className="mt-3 text-base leading-relaxed">
                  Since we do not collect personal information through this website, there is no
                  account to manage or data to delete from our site. If you have called us and would
                  like your information removed from our service records, please contact us at{' '}
                  {BUSINESS.phone}.
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl font-bold text-navy-900">Contact Us</h2>
                <p className="mt-3 text-base leading-relaxed">
                  If you have questions about this Privacy Policy, call us at{' '}
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
