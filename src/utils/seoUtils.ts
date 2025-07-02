
export const generateCanonicalUrl = (path: string = '') => {
  const baseUrl = 'https://6kalimas.com';
  return `${baseUrl}${path}`;
};

export const updateCanonicalUrl = (path: string = '') => {
  const canonicalUrl = generateCanonicalUrl(path);
  
  // Remove existing canonical link
  const existingCanonical = document.querySelector('link[rel="canonical"]');
  if (existingCanonical) {
    existingCanonical.remove();
  }
  
  // Add new canonical link
  const canonicalLink = document.createElement('link');
  canonicalLink.rel = 'canonical';
  canonicalLink.href = canonicalUrl;
  document.head.appendChild(canonicalLink);
};

export const generateAudioSchema = (kalimaId: number, title: string) => {
  return {
    "@context": "https://schema.org",
    "@type": "AudioObject",
    "name": `${title} - Perfect Arabic Recitation`,
    "description": `High-quality audio recitation of ${title} with proper Arabic pronunciation for Islamic learning`,
    "contentUrl": `https://6kalimas.com/audio/${getAudioFileName(kalimaId)}`,
    "encodingFormat": "audio/mpeg",
    "inLanguage": "ar",
    "educationalUse": "Islamic Studies",
    "learningResourceType": "Audio Recitation",
    "audience": {
      "@type": "EducationalAudience",
      "educationalRole": "Muslim Learners"
    }
  };
};

export const generateEducationalSchema = (kalima: any) => {
  return {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": `${kalima.name} - ${kalima.title}`,
    "description": `Complete Islamic learning resource for ${kalima.name} including Arabic text, English translation, transliteration, audio recitation and detailed explanation`,
    "educationalLevel": "All Levels",
    "learningResourceType": "Islamic Education",
    "inLanguage": ["ar", "en"],
    "teaches": `${kalima.name} recitation and meaning`,
    "hasPart": [
      {
        "@type": "AudioObject",
        "name": `${kalima.name} Audio Recitation`,
        "contentUrl": `https://6kalimas.com/audio/${getAudioFileName(kalima.id)}`
      },
      {
        "@type": "Text",
        "name": `${kalima.name} Arabic Text`,
        "text": kalima.arabic
      },
      {
        "@type": "Text", 
        "name": `${kalima.name} English Translation`,
        "text": kalima.translation
      }
    ]
  };
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
