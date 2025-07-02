
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

export const generateEducationalSchema = (kalima: any) => {
  return {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": `${kalima.name} - ${kalima.title}`,
    "description": `Complete Islamic learning resource for ${kalima.name} including Arabic text, English translation, transliteration and detailed explanation`,
    "educationalLevel": "All Levels",
    "learningResourceType": "Islamic Education",
    "inLanguage": ["ar", "en"],
    "teaches": `${kalima.name} recitation and meaning`,
    "hasPart": [
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
