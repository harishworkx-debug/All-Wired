import { Phone } from 'lucide-react';
import { BUSINESS } from '@/data/business';

interface CallButtonProps {
  variant?: 'primary' | 'small' | 'dark' | 'light';
  label?: string;
  className?: string;
}

const VARIANT_CLASSES: Record<NonNullable<CallButtonProps['variant']>, string> = {
  primary: 'btn-call',
  small: 'btn-call-sm',
  dark: 'inline-flex items-center justify-center gap-2 rounded-xl bg-navy-900 px-5 py-3 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:bg-navy-800 hover:-translate-y-0.5',
  light:
    'inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-base font-semibold text-navy-900 shadow-lg transition-all duration-200 hover:bg-gray-50 hover:-translate-y-0.5',
};

export default function CallButton({
  variant = 'primary',
  label = `Call ${BUSINESS.phone}`,
  className = '',
}: CallButtonProps) {
  return (
    <a
      href={BUSINESS.phoneHref}
      className={`${VARIANT_CLASSES[variant]} ${className}`}
      aria-label={`Call All Wired at ${BUSINESS.phone}`}
    >
      <Phone className="h-5 w-5 shrink-0" aria-hidden="true" />
      <span>{label}</span>
    </a>
  );
}
