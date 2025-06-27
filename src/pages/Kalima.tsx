
import { useParams, Navigate } from 'react-router-dom';
import { kalimas } from '@/data/kalimas';
import Header from '@/components/Header';
import KalimaDetail from '@/components/KalimaDetail';
import AppFooter from '@/components/AppFooter';
import { useEffect, useState } from 'react';

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
      // SEO: Add structured data for individual Kalima
      const structuredData = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": `${kalima.name} - ${kalima.title}`,
        "description": kalima.meaning,
        "author": {
          "@type": "Organization",
          "name": "6 Kalimas Guide"
        },
        "publisher": {
          "@type": "Organization",
          "name": "6 Kalimas Guide",
          "logo": {
            "@type": "ImageObject",
            "url": "https://6kalimas.com/favicon.ico"
          }
        },
        "datePublished": "2024-01-01",
        "dateModified": "2024-01-01",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `https://6kalimas.com/kalima/${kalimaId}`
        },
        "articleBody": `${kalima.meaning} ${kalima.tafsir}`,
        "keywords": "6 kalimas, islamic kalma, muslim prayers, kalma in arabic, kalma with translation"
      };

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.innerHTML = JSON.stringify(structuredData);
      document.head.appendChild(script);

      // Update page title and meta description
      document.title = `${kalima.name} - ${kalima.title} | 6 Kalimas of Islam`;
      
      let metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', `Learn ${kalima.name} (${kalima.title}) with Arabic text, English translation, transliteration and detailed meaning. ${kalima.meaning}`);
      }

      return () => {
        document.head.removeChild(script);
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
      {/* SEO Meta Tags */}
      <div style={{ display: 'none' }}>
        <h1>{kalima.name} - {kalima.title} - 6 Kalimas of Islam</h1>
        <p>Learn {kalima.name} with Arabic text, transliteration, English translation and detailed meaning. Complete guide to Islamic Kalimas.</p>
      </div>

      <Header visitCount={visitCount} onDownloadPDF={downloadPDF} />
      
      {/* Main Content with Proper H1-H6 Structure */}
      <main className="pt-20">
        <div className="container mx-auto max-w-6xl px-4">
          <header className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-4">
              {kalima.name}
            </h1>
            <h2 className="text-2xl md:text-3xl text-emerald-700 mb-2">
              {kalima.title}
            </h2>
            <p className="text-lg text-emerald-600 max-w-3xl mx-auto">
              The {kalima.id === 1 ? 'First' : kalima.id === 2 ? 'Second' : kalima.id === 3 ? 'Third' : kalima.id === 4 ? 'Fourth' : kalima.id === 5 ? 'Fifth' : 'Sixth'} Kalima of Islam - Essential Islamic Declaration of Faith
            </p>
          </header>
        </div>

        <KalimaDetail 
          kalima={kalima} 
          onClose={() => window.history.back()} 
        />

        {/* Additional SEO Content */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-4xl">
            <h3 className="text-2xl font-bold text-emerald-900 mb-6">
              About {kalima.name}
            </h3>
            <div className="prose prose-emerald max-w-none">
              <h4 className="text-xl font-semibold text-emerald-800 mb-3">
                Importance in Islam
              </h4>
              <p className="text-gray-700 mb-4">
                {kalima.tafsir}
              </p>
              
              <h4 className="text-xl font-semibold text-emerald-800 mb-3">
                How to Recite {kalima.name}
              </h4>
              <p className="text-gray-700 mb-4">
                This sacred Kalima should be recited with sincerity and understanding. Listen to the audio pronunciation above and practice the Arabic text along with understanding its meaning.
              </p>

              <h5 className="text-lg font-semibold text-emerald-800 mb-3">
                Related Kalimas
              </h5>
              <p className="text-gray-700">
                {kalima.name} is part of the six fundamental Kalimas in Islam. Each Kalima serves a specific purpose in strengthening a Muslim's faith and connection with Allah.
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
