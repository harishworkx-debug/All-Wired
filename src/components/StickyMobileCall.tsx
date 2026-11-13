import { Phone } from 'lucide-react';
import { BUSINESS } from '@/data/business';
import { trackPhoneCall } from '@/lib/analytics';

export default function StickyMobileCall() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 lg:hidden">
      <div className="border-t border-navy-100 bg-white/95 shadow-[0_-4px_12px_rgba(16,31,53,0.08)] backdrop-blur-md">
        <a
          href={BUSINESS.phoneHref}
          onClick={() => trackPhoneCall('sticky_mobile_bottom_bar')}
          className="flex items-center justify-center gap-2.5 px-4 py-3.5"
          aria-label={`Call All Wired at ${BUSINESS.phone}`}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-400 animate-pulse-ring">
            <Phone className="h-4.5 w-4.5 text-navy-900" aria-hidden="true" />
          </span>
          <span className="text-base font-bold text-navy-900">Call {BUSINESS.phone}</span>
        </a>
      </div>
    </div>
  );
}
