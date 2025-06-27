
// Analytics and performance monitoring utilities
export const trackPageView = (pageName: string) => {
  // Track page views
  if (typeof gtag !== 'undefined') {
    gtag('config', 'GA_TRACKING_ID', {
      page_title: pageName,
      page_location: window.location.href
    });
  }
  
  console.log(`Page view tracked: ${pageName}`);
};

export const trackKalimaView = (kalimaId: number, kalimaName: string) => {
  // Track which Kalimas are viewed most
  const views = JSON.parse(localStorage.getItem('kalima-views') || '{}');
  views[kalimaId] = (views[kalimaId] || 0) + 1;
  localStorage.setItem('kalima-views', JSON.stringify(views));
  
  if (typeof gtag !== 'undefined') {
    gtag('event', 'kalima_view', {
      'kalima_id': kalimaId,
      'kalima_name': kalimaName
    });
  }
  
  console.log(`Kalima view tracked: ${kalimaName}`);
};

export const trackUserEngagement = (action: string, value?: string) => {
  // Track user engagement events
  if (typeof gtag !== 'undefined') {
    gtag('event', action, {
      'engagement_value': value || ''
    });
  }
  
  console.log(`User engagement tracked: ${action}`, value);
};

export const getPerformanceMetrics = () => {
  // Get basic performance metrics
  if ('performance' in window) {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    return {
      loadTime: navigation.loadEventEnd - navigation.loadEventStart,
      domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
      firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime || 0,
      firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0
    };
  }
  return null;
};
