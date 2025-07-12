
export const getWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "6 Kalimas of Islam with Audio - Complete Learning Guide",
  "description": "Learn all 6 Kalimas of Islam with perfect audio pronunciation including 1st kalma, 2nd kalma, 3rd kalma, 4th kalma, 5th kalma, 6th kalma with Arabic text, English translations and meanings.",
  "url": "https://6kalimas.com/",
  "keywords": "6 kalimas with audio, learn kalimas online, islamic kalmas pronunciation, kalima audio recitation, 6 kalma arabic text, muslim prayers audio, how to pronounce kalimas",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://6kalimas.com/?search={search_term_string}",
    "query-input": "required name=search_term_string"
  },
  "publisher": {
    "@type": "Organization",
    "name": "6 Kalimas Guide",
    "url": "https://6kalimas.com/"
  },
  "mainEntity": [
    {
      "@type": "Article",
      "name": "1st Kalma - Kalima Tayyibah with Audio",
      "description": "The first Kalima with perfect audio pronunciation - fundamental declaration of faith in Islam",
      "url": "https://6kalimas.com/kalima/1",
      "associatedMedia": {
        "@type": "AudioObject",
        "contentUrl": "https://6kalimas.com/audio/First_Kalma.mp3",
        "encodingFormat": "audio/mpeg",
        "name": "First Kalima Audio Pronunciation"
      }
    },
    {
      "@type": "Article", 
      "name": "2nd Kalma - Kalima Shahadat with Audio",
      "description": "The second Kalima with audio recitation - testimony of faith",
      "url": "https://6kalimas.com/kalima/2",
      "associatedMedia": {
        "@type": "AudioObject",
        "contentUrl": "https://6kalimas.com/audio/Second_Kalma.mp3",
        "encodingFormat": "audio/mpeg",
        "name": "Second Kalima Audio Pronunciation"
      }
    },
    {
      "@type": "Article",
      "name": "3rd Kalma - Kalima Tamjeed with Audio", 
      "description": "The third Kalima with perfect pronunciation - glorification of Allah",
      "url": "https://6kalimas.com/kalima/3",
      "associatedMedia": {
        "@type": "AudioObject",
        "contentUrl": "https://6kalimas.com/audio/Third_Kalma.mp3",
        "encodingFormat": "audio/mpeg",
        "name": "Third Kalima Audio Pronunciation"
      }
    },
    {
      "@type": "Article",
      "name": "4th Kalma - Kalima Tawheed with Audio",
      "description": "The fourth Kalima with audio learning - unity of Allah",
      "url": "https://6kalimas.com/kalima/4",
      "associatedMedia": {
        "@type": "AudioObject",
        "contentUrl": "https://6kalimas.com/audio/Fourth_Kalma.mp3",
        "encodingFormat": "audio/mpeg",
        "name": "Fourth Kalima Audio Pronunciation"
      }
    },
    {
      "@type": "Article",
      "name": "5th Kalma - Kalima Istighfar with Audio",
      "description": "The fifth Kalima with pronunciation guide - seeking forgiveness",
      "url": "https://6kalimas.com/kalima/5",
      "associatedMedia": {
        "@type": "AudioObject",
        "contentUrl": "https://6kalimas.com/audio/Fifth_Kalma.mp3",
        "encodingFormat": "audio/mpeg",
        "name": "Fifth Kalima Audio Pronunciation"
      }
    },
    {
      "@type": "Article",
      "name": "6th Kalma - Kalima Radde Kufr with Audio",
      "description": "The sixth Kalima with audio recitation - rejection of disbelief",
      "url": "https://6kalimas.com/kalima/6",
      "associatedMedia": {
        "@type": "AudioObject",
        "contentUrl": "https://6kalimas.com/audio/Sixth_Kalma.mp3",
        "encodingFormat": "audio/mpeg",
        "name": "Sixth Kalima Audio Pronunciation"
      }
    }
  ]
});

export const getFAQSchema = () => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What are the 6 Kalimas of Islam with audio?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The 6 Kalimas with audio are fundamental Islamic declarations: 1) Kalima Tayyibah (Purity), 2) Kalima Shahadat (Testimony), 3) Kalima Tamjeed (Glorification), 4) Kalima Tawheed (Unity), 5) Kalima Istighfar (Forgiveness), and 6) Kalima Radde Kufr (Rejection of Disbelief). Each comes with high-quality Arabic audio pronunciation."
      }
    },
    {
      "@type": "Question",
      "name": "How do you pronounce the Arabic text of Kalimas with audio?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Each Kalima page includes high-quality audio pronunciation and transliteration to help you learn the correct Arabic pronunciation. Use our audio feature to practice perfect recitation."
      }
    },
    {
      "@type": "Question",
      "name": "Can I download the Kalimas audio files?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our platform provides access to all 6 Kalimas with audio recitation. Each Kalima has its own audio player for learning proper Arabic pronunciation."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to memorize all 6 Kalimas with audio?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "With our audio-guided approach, most people can memorize all 6 Kalimas within 2-4 weeks with daily practice of 15-20 minutes."
      }
    }
  ]
});

export const getCourseSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "6 Kalimas Audio Learning Course",
  "description": "Complete Islamic education course for learning all 6 Kalimas with perfect audio pronunciation, Arabic text, and English translations",
  "provider": {
    "@type": "Organization",
    "name": "6 Kalimas Guide"
  },
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
    "category": "Free"
  },
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": "online",
    "courseWorkload": "PT4W",
    "teaches": "Islamic Kalimas with Audio Pronunciation"
  },
  "educationalCredentialAwarded": "Islamic Knowledge Certification"
});
