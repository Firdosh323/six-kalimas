
// Type declarations for gtag
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js',
      targetId: string | Date,
      config?: Record<string, any>
    ) => void;
  }
}

// Analytics utility functions
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'GA_TRACKING_ID', {
      page_path: url,
    });
  }
};

export const trackKalimaRead = (kalimaId: number, kalimaName: string) => {
  trackEvent('kalima_read', {
    kalima_id: kalimaId,
    kalima_name: kalimaName,
  });
};

export const trackSearch = (searchQuery: string) => {
  trackEvent('search', {
    search_term: searchQuery,
  });
};

export const trackFavorite = (kalimaId: number, action: 'add' | 'remove') => {
  trackEvent('favorite_kalima', {
    kalima_id: kalimaId,
    action: action,
  });
};
