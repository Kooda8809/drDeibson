/**
 * Privacy-friendly event tracking utility.
 * Ready for Google Tag Manager, Meta Pixel or Google Analytics when configured.
 */

export type AnalyticsEvent =
  | 'click_agendamento'
  | 'click_whatsapp'
  | 'click_instagram'
  | 'view_case'
  | 'click_case'
  | 'click_about_more'
  | 'click_about_cta'
  | 'click_methodology_cta'
  | 'faq_open'
  | 'scroll_hero_cta';

export function trackEvent(eventName: AnalyticsEvent, payload?: Record<string, unknown>): void {
  // Safe console debug in development
  if (import.meta.env.DEV) {
    console.debug(`[Analytics Event] ${eventName}:`, payload || {});
  }

  // Forward to window.dataLayer or gtag if present
  if (typeof window !== 'undefined') {
    const windowWithDataLayer = window as unknown as {
      dataLayer?: Array<Record<string, unknown>>;
      gtag?: (command: string, eventName: string, params?: Record<string, unknown>) => void;
    };

    if (windowWithDataLayer.dataLayer) {
      windowWithDataLayer.dataLayer.push({
        event: eventName,
        ...payload,
        timestamp: new Date().toISOString(),
      });
    }

    if (windowWithDataLayer.gtag) {
      windowWithDataLayer.gtag('event', eventName, payload);
    }
  }
}
