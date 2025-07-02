
import { useEffect } from 'react';
import { kalimas } from '@/data/kalimas';

export const useSEO = () => {
  useEffect(() => {
    // SEO: Add structured data with enhanced keywords
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "6 Kalimas of Islam - Complete Guide",
      "description": "Learn all 6 Kalimas of Islam including 1st kalma, 2nd kalma, 3rd kalma, 4th kalma, 5th kalma, 6th kalma with Arabic text, English translations, transliterations and audio recitations.",
      "url": window.location.href,
      "keywords": "6 kalimas, 1 to 6 kalma, islamic six kalma, kalma in islam, muslim kalma, 6 kalma in arabic, kalma with translation, islamic declarations, shahada, tawheed, istighfar",
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

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Update meta description with high-volume keywords
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Learn all 6 Kalimas of Islam - 1st kalma to 6th kalma with Arabic text, English translation, transliteration and audio. Complete guide to islamic six kalma including Tayyibah, Shahadat, Tamjeed, Tawheed, Istighfar, Radde Kufr.');
    }

    return () => {
      document.head.removeChild(script);
    };
  }, []);
};
