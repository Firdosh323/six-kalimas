
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { kalimas } from '@/data/kalimas';
import { updateCanonicalUrl } from '@/utils/seoUtils';

export const useSEO = () => {
  const location = useLocation();

  useEffect(() => {
    // Update canonical URL based on current path
    updateCanonicalUrl(location.pathname);

    // SEO: Add structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "6 Kalimas of Islam - Complete Guide",
      "description": "Learn all 6 Kalimas of Islam including 1st kalma, 2nd kalma, 3rd kalma, 4th kalma, 5th kalma, 6th kalma with Arabic text, English translations and transliterations.",
      "url": "https://6kalimas.com",
      "keywords": "6 kalimas, islamic kalima, muslim declarations, shahada, tawheed, istighfar",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://6kalimas.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      },
      "mainEntity": {
        "@type": "ItemList",
        "itemListElement": kalimas.map((kalima, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "item": {
            "@type": "Article",
            "name": kalima.name,
            "description": kalima.meaning,
            "url": `https://6kalimas.com/kalima/${kalima.id}`
          }
        }))
      }
    };

    // Add educational content schema
    const educationalSchema = {
      "@context": "https://schema.org",
      "@type": "EducationalWebsite",
      "name": "6 Kalimas Islamic Learning Platform",
      "description": "Comprehensive Islamic education platform for learning all 6 Kalimas with translations and memorization techniques",
      "educationalLevel": "All Levels",
      "learningResourceType": "Islamic Education",
      "teaches": "Islamic Kalimas, Islamic faith fundamentals",
      "audience": {
        "@type": "EducationalAudience", 
        "educationalRole": "Muslim Learners"
      },
      "provider": {
        "@type": "Organization",
        "name": "6 Kalimas Guide"
      }
    };

    const script1 = document.createElement('script');
    script1.type = 'application/ld+json';
    script1.innerHTML = JSON.stringify(structuredData);
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.type = 'application/ld+json';
    script2.innerHTML = JSON.stringify(educationalSchema);
    document.head.appendChild(script2);

    // Update meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Learn all 6 Kalimas of Islam - Complete guide with Arabic text, English translation and transliteration. Essential Islamic declarations including Tayyibah, Shahadat, Tamjeed, Tawheed, Istighfar, and Radde Kufr.');
    }

    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, [location.pathname]);
};
