import { useParams, Navigate } from 'react-router-dom';
import { kalimas } from '@/data/kalimas';
import Header from '@/components/Header';
import KalimaDetail from '@/components/KalimaDetail';
import AppFooter from '@/components/AppFooter';
import RelatedKalimas from '@/components/RelatedKalimas';
import ContextualLinks from '@/components/ContextualLinks';
import { useEffect, useState } from 'react';
import { updateCanonicalUrl, generateAudioSchema, generateEducationalSchema } from '@/utils/seoUtils';

const Kalima = () => {
  const { id } = useParams();
  const [visitCount, setVisitCount] = useState(0);
  
  const kalimaId = parseInt(id || '1');
  const kalima = kalimas.find(k => k.id === kalimaId);

  useEffect(() => {
    // Track visits
    const visits = parseInt(localStorage.getItem('site-visits') || '0');
    setVisitCount(visits);

    if (kalima) {
      // Update canonical URL for this specific kalima page
      updateCanonicalUrl(`/kalima/${kalimaId}`);

      // SEO: Add structured data for individual Kalima
      const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": `${kalima.name} - ${kalima.title}`,
        "description": `Learn ${kalima.name} with Arabic text, English translation, transliteration and audio recitation. Complete Islamic guide with perfect pronunciation.`,
        "author": {
          "@type": "Organization",
          "name": "6 Kalimas Guide"
        },
        "publisher": {
          "@type": "Organization",
          "name": "6 Kalimas Guide",
          "logo": {
            "@type": "ImageObject",
            "url": "https://6kalimas.com/uploads/favicons/6kalimas_favicon.ico",
            "alt": "6 Kalimas Islamic learning platform logo"
          }
        },
        "datePublished": "2024-01-01",
        "dateModified": new Date().toISOString().split('T')[0],
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `https://6kalimas.com/kalima/${kalimaId}`
        },
        "articleBody": `${kalima.meaning} ${kalima.tafsir}`,
        "keywords": `${kalima.name}, kalima with audio, islamic kalma pronunciation, 6 kalimas arabic text, muslim prayers audio`,
        "image": {
          "@type": "ImageObject",
          "url": "https://images.unsplash.com/photo-1466442929976-97f336a657be",
          "alt": "Beautiful Islamic mosque architecture representing the spiritual essence of 6 Kalimas in Islam"
        }
      };

      // Add audio schema for this kalima
      const audioSchema = generateAudioSchema(kalimaId, kalima.name);
      
      // Add educational schema for this kalima
      const educationalSchema = generateEducationalSchema(kalima);

      const script1 = document.createElement('script');
      script1.type = 'application/ld+json';
      script1.innerHTML = JSON.stringify(articleSchema);
      document.head.appendChild(script1);

      const script2 = document.createElement('script');
      script2.type = 'application/ld+json';
      script2.innerHTML = JSON.stringify(audioSchema);
      document.head.appendChild(script2);

      const script3 = document.createElement('script');
      script3.type = 'application/ld+json';
      script3.innerHTML = JSON.stringify(educationalSchema);
      document.head.appendChild(script3);

      // Update page title and meta description with audio emphasis
      document.title = `${kalima.name} - ${kalima.title} with Audio | 6 Kalimas of Islam`;
      
      let metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', `Learn ${kalima.name} (${kalima.title}) with Arabic text, transliteration, English translation, perfect audio pronunciation and detailed meaning. Complete Islamic learning guide.`);
      }

      return () => {
        document.head.removeChild(script1);
        document.head.removeChild(script2);
        document.head.removeChild(script3);
      };
    }
  }, [kalima, kalimaId]);

  if (!kalima) {
    return <Navigate to="/404" replace />;
  }

  const downloadPDF = () => {
    console.log('Downloading PDF guide...');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
      {/* SEO Meta Tags with proper alt descriptions */}
      <div style={{ display: 'none' }}>
        <h1>{kalima.name} - {kalima.title} with Audio Recitation - 6 Kalimas of Islam</h1>
        <p>Learn {kalima.name} with Arabic text, transliteration, English translation, perfect audio pronunciation and detailed meaning. Complete Islamic learning guide.</p>
        <img src="https://images.unsplash.com/photo-1466442929976-97f336a657be" alt="Magnificent Islamic mosque with traditional Islamic architecture showcasing the spiritual beauty of 6 Kalimas in Islam" style={{ display: 'none' }} />
        <img src="https://images.unsplash.com/photo-1492321936769-b49830bc1d1e" alt="Peaceful Islamic building under starlit sky representing the divine nature of Islamic Kalimas and prayers" style={{ display: 'none' }} />
      </div>

      <Header visitCount={visitCount} onDownloadPDF={downloadPDF} />
      
      {/* Main Content with Proper H1-H6 Structure */}
      <main className="pt-20">
        <div className="container mx-auto max-w-6xl px-4">
          <header className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-4">
              {kalima.name} with Audio
            </h1>
            <h2 className="text-2xl md:text-3xl text-emerald-700 mb-2">
              {kalima.title} - Perfect Arabic Pronunciation
            </h2>
            <p className="text-lg text-emerald-600 max-w-3xl mx-auto">
              The {kalima.id === 1 ? 'First' : kalima.id === 2 ? 'Second' : kalima.id === 3 ? 'Third' : kalima.id === 4 ? 'Fourth' : kalima.id === 5 ? 'Fifth' : 'Sixth'} Kalima of Islam with High-Quality Audio Recitation - Essential Islamic Declaration of Faith
            </p>
          </header>
        </div>

        <KalimaDetail 
          kalima={kalima} 
          onClose={() => window.history.back()} 
        />

        {/* Contextual Navigation Links */}
        <section className="py-8 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <ContextualLinks type="quick-navigation" currentKalimaId={kalimaId} />
              <ContextualLinks type="learning-resources" currentKalimaId={kalimaId} />
              <ContextualLinks type="audio-features" currentKalimaId={kalimaId} />
            </div>
          </div>
        </section>

        {/* Related Kalimas Section */}
        <RelatedKalimas currentKalimaId={kalimaId} />

        {/* Additional SEO Content with proper alt texts */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-4xl">
            <h3 className="text-2xl font-bold text-emerald-900 mb-6">
              About {kalima.name} with Audio Learning
            </h3>
            <div className="prose prose-emerald max-w-none">
              <h4 className="text-xl font-semibold text-emerald-800 mb-3">
                Importance in Islam - Audio Enhanced Learning
              </h4>
              <p className="text-gray-700 mb-4">
                {kalima.tafsir} Our audio feature helps you learn the perfect Arabic pronunciation, making it easier to memorize and recite this sacred Kalima correctly.
              </p>
              
              <h4 className="text-xl font-semibold text-emerald-800 mb-3">
                How to Use Audio for {kalima.name} Memorization
              </h4>
              <p className="text-gray-700 mb-4">
                This sacred Kalima should be recited with sincerity and understanding. Use our high-quality audio recitation feature to learn proper pronunciation, then practice along with the Arabic text while understanding its meaning.
              </p>

              <h5 className="text-lg font-semibold text-emerald-800 mb-3">
                Audio Learning Benefits for Islamic Kalimas
              </h5>
              <p className="text-gray-700">
                {kalima.name} is part of the six fundamental Kalimas in Islam. Our audio feature makes it easy to learn correct pronunciation, helping strengthen your Islamic faith and connection with Allah through proper recitation.
              </p>
            </div>
          </div>
        </section>
      </main>

      <AppFooter />
    </div>
  );
};

export default Kalima;
