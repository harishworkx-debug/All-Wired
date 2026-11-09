import { Phone } from 'lucide-react';
import { BUSINESS } from '@/data/business';
import CallButton from './CallButton';

interface CtaSectionProps {
  title?: string;
  subtitle?: string;
}

export default function CtaSection({
  title = 'Ready to Get Started?',
  subtitle = 'Call All Wired today to discuss your electrical needs. We offer free estimates and emergency service.',
}: CtaSectionProps) {
  return (
    <section className="bg-navy-900 py-16 lg:py-20">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-800 via-navy-900 to-electric-900 px-6 py-12 shadow-2xl sm:px-12 lg:py-16">
          <div className="bg-grid absolute inset-0 opacity-30" aria-hidden="true" />
          <div className="relative flex flex-col items-center text-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-400 shadow-lg">
              <Phone className="h-7 w-7 text-navy-900" aria-hidden="true" />
            </span>
            <h2 className="mt-6 max-w-2xl text-2xl font-bold text-white sm:text-3xl lg:text-4xl text-balance">
              {title}
            </h2>
            <p className="mt-4 max-w-xl text-base text-gray-300 sm:text-lg">{subtitle}</p>
            <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row">
              <CallButton variant="primary" label={`Call ${BUSINESS.phone}`} />
              <p className="text-sm text-gray-400">Free estimates · Emergency service available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
