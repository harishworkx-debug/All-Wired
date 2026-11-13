import { Link } from 'react-router-dom';
import { Phone, Home, Wrench, MapPin, ArrowLeft } from 'lucide-react';
import Seo from '@/components/Seo';
import CallButton from '@/components/CallButton';
import { BUSINESS } from '@/data/business';

export default function NotFoundPage() {
  return (
    <>
      <Seo
        title="Page Not Found | All Wired"
        description="The page you are looking for could not be found. Call All Wired at (801) 800-2828 for electrical service in American Fork, UT."
        path="/404"
        noindex={true}
      />

      <section className="bg-navy-900 py-20 lg:py-28">
        <div className="container-x">
          <div className="mx-auto max-w-xl text-center">
            <p className="font-display text-7xl font-extrabold text-amber-400 sm:text-8xl">404</p>
            <h1 className="mt-4 font-display text-2xl font-bold text-white sm:text-3xl text-balance">
              Page Not Found
            </h1>
            <p className="mt-4 text-base text-gray-300 sm:text-lg">
              The page you are looking for may have moved or no longer exists. Try one of the links
              below, or call us directly for electrical service.
            </p>

            <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <CallButton variant="primary" label={`Call ${BUSINESS.phone}`} />
              <Link to="/" className="btn-secondary">
                <ArrowLeft className="h-5 w-5" aria-hidden="true" />
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x">
          <div className="grid gap-4 sm:grid-cols-3">
            <Link
              to="/services"
              className="group rounded-2xl border border-navy-100 bg-white p-6 text-center shadow-sm transition-all hover:shadow-md"
            >
              <Wrench className="mx-auto h-8 w-8 text-amber-500" aria-hidden="true" />
              <p className="mt-3 font-display text-base font-bold text-navy-900 group-hover:text-electric-600">
                Electrical Services
              </p>
            </Link>
            <Link
              to="/service-areas"
              className="group rounded-2xl border border-navy-100 bg-white p-6 text-center shadow-sm transition-all hover:shadow-md"
            >
              <MapPin className="mx-auto h-8 w-8 text-amber-500" aria-hidden="true" />
              <p className="mt-3 font-display text-base font-bold text-navy-900 group-hover:text-electric-600">
                Service Areas
              </p>
            </Link>
            <Link
              to="/contact"
              className="group rounded-2xl border border-navy-100 bg-white p-6 text-center shadow-sm transition-all hover:shadow-md"
            >
              <Phone className="mx-auto h-8 w-8 text-amber-500" aria-hidden="true" />
              <p className="mt-3 font-display text-base font-bold text-navy-900 group-hover:text-electric-600">
                Contact
              </p>
            </Link>
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-electric-600 hover:text-electric-700"
            >
              <Home className="h-4 w-4" aria-hidden="true" />
              Return to homepage
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
