
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { kalimas } from '@/data/kalimas';
import { updateCanonicalUrl } from '@/utils/seoUtils';

export const useSEO = () => {
  const location = useLocation();

  useEffect(() => {
    // Update canonical URL based on current path
    updateCanonicalUrl(location.pathname);

    // SEO: Add structured data with enhanced keywords
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "6 Kalimas of Islam - Complete Guide",
      "description": "Learn all 6 Kalimas of Islam including 1st kalma, 2nd kalma, 3rd kalma, 4th kalma, 5th kalma, 6th kalma with Arabic text, English translations, transliterations and audio recitations.",
      "url": "https://6kalimas.com",
      "keywords": "6 kalimas, 1 to 6 kalma, islamic six kalma, kalma in islam, muslim kalma, 6 kalma in arabic, kalma with translation, islamic declarations, shahada, tawheed, istighfar, kalima with audio, easy way to memorize kalimas",
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
            "url": `https://6kalimas.com/kalima/${kalima.id}`,
            "associatedMedia": {
              "@type": "AudioObject",
              "name": `${kalima.name} Audio Recitation`,
              "description": `Perfect Arabic pronunciation of ${kalima.name} for Islamic learning`,
              "contentUrl": `https://6kalimas.com/audio/${getAudioFileName(kalima.id)}`,
              "encodingFormat": "audio/mpeg"
            }
          }
        }))
      }
    };

    // Add educational content schema
    const educationalSchema = {
      "@context": "https://schema.org",
      "@type": "EducationalWebsite",
      "name": "6 Kalimas Islamic Learning Platform",
      "description": "Comprehensive Islamic education platform for learning all 6 Kalimas with audio recitations, translations, and memorization techniques",
      "educationalLevel": "All Levels",
      "learningResourceType": "Islamic Education",
      "teaches": "Islamic Kalimas, Arabic pronunciation, Islamic faith fundamentals",
      "audience": {
        "@type": "EducationalAudience", 
        "educationalRole": "Muslim Learners"
      },
      "hasCredential": "Islamic Educational Content",
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

    // Update meta description with high-volume keywords
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Learn all 6 Kalimas of Islam - 1st kalma to 6th kalma with Arabic text, English translation, transliteration and audio. Complete guide to islamic six kalma including Tayyibah, Shahadat, Tamjeed, Tawheed, Istighfar, Radde Kufr with perfect audio pronunciation.');
    }

    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, [location.pathname]);
};

const getAudioFileName = (kalimaId: number) => {
  const audioFiles = {
    1: 'First_Kalma.mp3',
    2: 'Second_Kalma.mp3', 
    3: 'Third_Kalma.mp3',
    4: 'Fourth_Kalma.mp3',
    5: 'Fifth_Kalma.mp3',
    6: 'Sixth_Kalma.mp3'
  };
  return audioFiles[kalimaId as keyof typeof audioFiles] || 'First_Kalma.mp3';
};
