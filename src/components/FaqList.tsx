import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export interface FaqItem {
  q: string;
  a: string;
}

export default function FaqList({ faqs }: { faqs: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-navy-100 rounded-2xl border border-navy-100 bg-white shadow-sm">
      {faqs.map((faq, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span className="text-base font-semibold text-navy-900">{faq.q}</span>
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-50 text-navy-600">
                {isOpen ? (
                  <Minus className="h-4 w-4" aria-hidden="true" />
                ) : (
                  <Plus className="h-4 w-4" aria-hidden="true" />
                )}
              </span>
            </button>
            {isOpen && (
              <div className="px-5 pb-5 text-sm leading-relaxed text-navy-600 sm:px-6 sm:text-base">
                {faq.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
