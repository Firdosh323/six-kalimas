
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { kalimas } from '@/data/kalimas';
import { updateCanonicalUrl } from '@/utils/seoUtils';
import { getFAQSchema, getHowToSchema } from '@/utils/structuredData';

export const useSEO = () => {
  const location = useLocation();

  useEffect(() => {
    // Update canonical URL based on current path
    updateCanonicalUrl(location.pathname);

    // SEO: Primary WebSite structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "6 Kalimas of Islam with Audio - Complete Learning Guide",
      "description": "Learn all 6 Kalimas of Islam with perfect audio pronunciation. 1st kalma to 6th kalma with Arabic text, English translations, transliterations, and detailed meanings.",
      "url": "https://6kalimas.com",
      "keywords": "6 kalimas, 6 kalimas with audio, islamic kalima, muslim declarations, shahada, tawheed, istighfar, kalima tayyibah, kalima shahadat, 6 kalimas for kids, how to memorize 6 kalimas",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://6kalimas.com/?search={search_term_string}",
        "query-input": "required name=search_term_string"
      },
      "mainEntity": {
        "@type": "ItemList",
        "name": "6 Kalimas of Islam",
        "description": "Complete list of the 6 Kalimas of Islam with audio, Arabic text, and English translations",
        "itemListElement": kalimas.map((kalima, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "item": {
            "@type": "LearningResource",
            "name": `${kalima.name} - ${kalima.shortTitle}`,
            "description": kalima.meaning,
            "url": `https://6kalimas.com/kalima/${kalima.id}`,
            "educationalLevel": "All Levels",
            "learningResourceType": "Islamic Education",
            "inLanguage": ["ar", "en"],
            "associatedMedia": {
              "@type": "AudioObject",
              "contentUrl": `https://6kalimas.com/audio/${['First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth'][index]}_Kalma.mp3`,
              "encodingFormat": "audio/mpeg"
            }
          }
        }))
      }
    };

    // Educational website schema
    const educationalSchema = {
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      "name": "6 Kalimas Islamic Learning Platform",
      "url": "https://6kalimas.com",
      "description": "Comprehensive Islamic education platform for learning all 6 Kalimas with Arabic text, audio pronunciation, English translations, and memorization techniques for Muslims worldwide.",
      "educationalCredentialAwarded": "Islamic Knowledge",
      "sameAs": [
        "https://6kalimas.com/about"
      ],
      "audience": {
        "@type": "EducationalAudience",
        "educationalRole": "Muslim Learners",
        "audienceType": "Muslims worldwide, New Muslims, Children learning Islam, Islamic students"
      },
      "provider": {
        "@type": "Organization",
        "name": "6 Kalimas Guide",
        "url": "https://6kalimas.com"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Free Islamic Learning Resources",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Course",
              "name": "6 Kalimas Complete Audio Course",
              "description": "Learn all 6 Kalimas with high-quality audio pronunciation"
            },
            "price": "0",
            "priceCurrency": "USD"
          }
        ]
      }
    };

    const script1 = document.createElement('script');
    script1.type = 'application/ld+json';
    script1.id = 'schema-website';
    script1.innerHTML = JSON.stringify(structuredData);
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.type = 'application/ld+json';
    script2.id = 'schema-educational';
    script2.innerHTML = JSON.stringify(educationalSchema);
    document.head.appendChild(script2);

    // Add HowTo schema on homepage
    if (location.pathname === '/') {
      const howToSchema = getHowToSchema();
      const script3 = document.createElement('script');
      script3.type = 'application/ld+json';
      script3.id = 'schema-howto';
      script3.innerHTML = JSON.stringify(howToSchema);
      document.head.appendChild(script3);

      // Add FAQ schema on homepage
      const faqSchema = getFAQSchema();
      const script4 = document.createElement('script');
      script4.type = 'application/ld+json';
      script4.id = 'schema-faq';
      script4.innerHTML = JSON.stringify(faqSchema);
      document.head.appendChild(script4);

      // Update homepage meta description with longtail keywords
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', 'Learn all 6 Kalimas of Islam with perfect audio pronunciation — 1st to 6th kalma with Arabic text, English translation, transliteration, word-by-word meaning, and memorization tips. Complete free guide for Muslims, new converts, and children. Includes Kalima Tayyibah, Shahadat, Tamjeed, Tawheed, Istighfar, and Radde Kufr.');
      }

      return () => {
        [script1, script2, script3, script4].forEach(s => {
          if (document.head.contains(s)) document.head.removeChild(s);
        });
      };
    }

    // Update meta description for non-home pages
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Learn all 6 Kalimas of Islam with Arabic text, English translation, and audio pronunciation. Complete Islamic learning guide for all 6 Kalimas with meanings and memorization tips.');
    }

    return () => {
      [script1, script2].forEach(s => {
        if (document.head.contains(s)) document.head.removeChild(s);
      });
    };
  }, [location.pathname]);
};
