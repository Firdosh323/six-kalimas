
import { getMetaTags } from './metaTags';
import { getWebsiteSchema, getFAQSchema, getCourseSchema } from './structuredData';

export const injectSEOTags = () => {
  const metaTags = getMetaTags();
  
  // Update title
  document.title = metaTags.title;
  
  // Update meta description
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.setAttribute('content', metaTags.description);
  }
  
  // Update canonical URL
  const canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) {
    canonical.setAttribute('href', metaTags.canonical);
  }
};

export const injectStructuredData = () => {
  // Remove existing structured data
  const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
  existingScripts.forEach(script => {
    if (script.parentNode) {
      script.parentNode.removeChild(script);
    }
  });
  
  // Add new structured data
  const schemas = [getWebsiteSchema(), getFAQSchema(), getCourseSchema()];
  
  schemas.forEach(schema => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(schema);
    document.head.appendChild(script);
  });
};

export const initializeSEO = () => {
  injectSEOTags();
  injectStructuredData();
};
