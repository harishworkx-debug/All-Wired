/**
 * Analytics and Conversion Tracking Utility
 * Supports Google Analytics 4 (gtag.js) and Google Tag Manager (dataLayer)
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

/**
 * Track phone call clicks as high-intent conversion events
 * Maps to 'phone_call_click' event in GA4
 */
export function trackPhoneCall(source = 'website_call_button'): void {
  try {
    if (typeof window !== 'undefined') {
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'phone_call_click', {
          event_category: 'engagement',
          event_label: source,
          value: 1,
        });
      }
      if (Array.isArray(window.dataLayer)) {
        window.dataLayer.push({
          event: 'phone_call_click',
          call_source: source,
        });
      }
    }
  } catch {
    // Fail silently in environments where analytics is blocked
  }
}

/**
 * Track quote request form submissions as primary lead conversions
 * Maps to recommended standard GA4 'generate_lead' event
 */
export function trackQuoteSubmission(service = 'general_electrical', location = 'American Fork'): void {
  try {
    if (typeof window !== 'undefined') {
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'generate_lead', {
          event_category: 'conversion',
          event_label: service,
          service_requested: service,
          location_area: location,
          value: 1,
        });
      }
      if (Array.isArray(window.dataLayer)) {
        window.dataLayer.push({
          event: 'generate_lead',
          service_requested: service,
          location_area: location,
        });
      }
    }
  } catch {
    // Fail silently
  }
}

