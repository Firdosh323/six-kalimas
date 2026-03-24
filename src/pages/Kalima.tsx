
import { useParams, Navigate } from 'react-router-dom';
import { kalimas } from '@/data/kalimas';
import Header from '@/components/Header';
import KalimaDetail from '@/components/KalimaDetail';
import AppFooter from '@/components/AppFooter';
import RelatedKalimas from '@/components/RelatedKalimas';
import ContextualLinks from '@/components/ContextualLinks';
import { useEffect, useState } from 'react';
import { updateCanonicalUrl, generateEducationalSchema } from '@/utils/seoUtils';
import { getBreadcrumbSchema, getKalimaFAQSchema } from '@/utils/structuredData';

const KALIMA_ORDINALS = ['First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth'];

const KALIMA_SEO_META: Record<number, { title: string; description: string; keywords: string }> = {
  1: {
    title: "Kalima Tayyibah (1st Kalima) - Arabic Text, Meaning, Benefits & Audio | 6 Kalimas",
    description: "Learn Kalima Tayyibah (First Kalima) — La ilaha illa Allah, Muhammadur Rasool Allah — with Arabic text, word-by-word translation, full meaning, benefits, and perfect audio pronunciation. The foundation of Islamic faith.",
    keywords: "kalima tayyibah, first kalima, 1st kalima, la ilaha illa allah, first kalima in arabic, kalima tayyibah meaning, kalima tayyibah arabic text, first kalima audio, kalima tayyibah english translation, shahada first kalima"
  },
  2: {
    title: "Kalima Shahadat (2nd Kalima) - Arabic Text, Meaning, When to Recite & Audio | 6 Kalimas",
    description: "Complete guide to Kalima Shahadat (Second Kalima) — Ash-hadu an la ilaha illa Allah — with Arabic text, English translation, transliteration, meaning, when it is recited, and audio pronunciation guide.",
    keywords: "kalima shahadat, second kalima, 2nd kalima, ash-hadu an la ilaha illa allah, kalima shahadat arabic text, second kalima meaning, kalima shahadat audio, shahada kalima, kalima shahadat english, testimony of faith kalima"
  },
  3: {
    title: "Kalima Tamjeed (3rd Kalima) - Arabic Text, 5 Phrases, Meaning & Audio | 6 Kalimas",
    description: "Learn Kalima Tamjeed (Third Kalima) — Subhan Allah wa Alhamdulillah — with full Arabic text, 5 glorification phrases explained, English translation, when to recite, and high-quality audio pronunciation.",
    keywords: "kalima tamjeed, third kalima, 3rd kalima, kalima tamjeed arabic, subhan allah alhamdulillah, third kalima meaning, kalima tamjeed audio, tamjeed in english, kalima tamjeed translation, 5 phrases kalima tamjeed"
  },
  4: {
    title: "Kalima Tawheed (4th Kalima) - Arabic Text, Meaning, Unity of Allah & Audio | 6 Kalimas",
    description: "Master Kalima Tawheed (Fourth Kalima) — the complete declaration of Allah's oneness — with full Arabic text, word-by-word translation, tafsir on Islamic monotheism, benefits, and audio pronunciation.",
    keywords: "kalima tawheed, fourth kalima, 4th kalima, kalima tawheed arabic, tawheed meaning in islam, fourth kalima meaning, kalima tawheed audio, unity of allah kalima, kalima tawheed meaning english, la ilaha illa allah wahdahu"
  },
  5: {
    title: "Kalima Istighfar (5th Kalima) - Arabic Text, When to Recite, Benefits & Audio | 6 Kalimas",
    description: "Complete guide to Kalima Istighfar (Fifth Kalima) — Astaghfiru Allah Rabbi — with full Arabic text, word-by-word meaning, when to recite it, spiritual benefits, hadith references, and audio pronunciation.",
    keywords: "kalima istighfar, fifth kalima, 5th kalima, astaghfiru allah, kalima istighfar arabic text, fifth kalima meaning, kalima istighfar audio, seeking forgiveness kalima, kalima istighfar benefits, when to recite kalima istighfar"
  },
  6: {
    title: "Kalima Radde Kufr (6th Kalima) - Arabic Text, Meaning, Importance & Audio | 6 Kalimas",
    description: "Deep dive into Kalima Radde Kufr (Sixth Kalima) — the rejection of disbelief — with complete Arabic text, transliteration, meaning of each rejected sin, when to recite it, and audio pronunciation guide.",
    keywords: "kalima radde kufr, sixth kalima, 6th kalima, kalima rad e kufr, kalima radde kufr arabic, sixth kalima meaning, kalima radde kufr audio, rejection of disbelief kalima, kalima radde kufr english, 6th kalima full text"
  }
};

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

      const seoMeta = KALIMA_SEO_META[kalimaId];

      // SEO: Add structured data for individual Kalima
      const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": seoMeta.title,
        "description": seoMeta.description,
        "author": {
          "@type": "Organization",
          "name": "6 Kalimas Guide",
          "url": "https://6kalimas.com"
        },
        "publisher": {
          "@type": "Organization",
          "name": "6 Kalimas Guide",
          "url": "https://6kalimas.com",
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
        "keywords": seoMeta.keywords,
        "image": {
          "@type": "ImageObject",
          "url": "https://images.unsplash.com/photo-1466442929976-97f336a657be",
          "alt": `${kalima.name} - ${KALIMA_ORDINALS[kalimaId - 1]} Kalima of Islam with audio pronunciation`
        },
        "about": {
          "@type": "Thing",
          "name": kalima.name,
          "description": kalima.meaning
        }
      };
      
      // Add educational schema for this kalima
      const educationalSchema = generateEducationalSchema(kalima);

      // Add breadcrumb schema
      const breadcrumbSchema = getBreadcrumbSchema(kalimaId, kalima.name);

      // Add per-kalima FAQ schema
      const faqSchema = getKalimaFAQSchema(kalimaId, kalima.name);

      const script1 = document.createElement('script');
      script1.type = 'application/ld+json';
      script1.id = `schema-article-${kalimaId}`;
      script1.innerHTML = JSON.stringify(articleSchema);
      document.head.appendChild(script1);

      const script2 = document.createElement('script');
      script2.type = 'application/ld+json';
      script2.id = `schema-educational-${kalimaId}`;
      script2.innerHTML = JSON.stringify(educationalSchema);
      document.head.appendChild(script2);

      const script3 = document.createElement('script');
      script3.type = 'application/ld+json';
      script3.id = `schema-breadcrumb-${kalimaId}`;
      script3.innerHTML = JSON.stringify(breadcrumbSchema);
      document.head.appendChild(script3);

      const script4 = document.createElement('script');
      script4.type = 'application/ld+json';
      script4.id = `schema-faq-${kalimaId}`;
      script4.innerHTML = JSON.stringify(faqSchema);
      document.head.appendChild(script4);

      // Update page title with longtail keywords
      document.title = seoMeta.title;
      
      // Update meta description
      let metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', seoMeta.description);
      }

      // Update meta keywords
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', seoMeta.keywords);
      }

      // Update OG tags
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute('content', seoMeta.title);
      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute('content', seoMeta.description);
      const ogUrl = document.querySelector('meta[property="og:url"]');
      if (ogUrl) ogUrl.setAttribute('content', `https://6kalimas.com/kalima/${kalimaId}`);

      // Update Twitter tags
      const twTitle = document.querySelector('meta[property="twitter:title"]');
      if (twTitle) twTitle.setAttribute('content', seoMeta.title);
      const twDesc = document.querySelector('meta[property="twitter:description"]');
      if (twDesc) twDesc.setAttribute('content', seoMeta.description);

      return () => {
        [script1, script2, script3, script4].forEach(s => {
          if (document.head.contains(s)) document.head.removeChild(s);
        });
      };
    }
  }, [kalima, kalimaId]);

  if (!kalima) {
    return <Navigate to="/404" replace />;
  }

  const downloadPDF = () => {
    console.log('Downloading PDF guide...');
  };

  const ordinal = KALIMA_ORDINALS[kalimaId - 1];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
      <Header visitCount={visitCount} onDownloadPDF={downloadPDF} />
      
      {/* Main Content with Proper H1-H6 Structure */}
      <main className="pt-20">
        <div className="container mx-auto max-w-6xl px-4">
          <header className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-4">
              {kalima.name} — {ordinal} Kalima of Islam
            </h1>
            <h2 className="text-2xl md:text-3xl text-emerald-700 mb-2">
              {kalima.title}
            </h2>
            <p className="text-lg text-emerald-600 max-w-3xl mx-auto">
              Complete guide to the {ordinal} Kalima: Arabic text, English translation, transliteration, meaning, and audio pronunciation
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
            <h2 className="text-2xl font-bold text-emerald-900 mb-6 text-center">Learning Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <ContextualLinks type="quick-navigation" currentKalimaId={kalimaId} />
              <ContextualLinks type="learning-resources" currentKalimaId={kalimaId} />
              <ContextualLinks type="audio-features" currentKalimaId={kalimaId} />
            </div>
          </div>
        </section>

        {/* Related Kalimas Section */}
        <RelatedKalimas currentKalimaId={kalimaId} />

        {/* Additional SEO Content */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-emerald-900 mb-6">
              Complete Guide to {kalima.name}
            </h2>
            <div className="prose prose-emerald max-w-none">
              <h3 className="text-xl font-semibold text-emerald-800 mb-3">
                Importance in Islam
              </h3>
              <p className="text-gray-700 mb-4">
                {kalima.tafsir}
              </p>
              
              <h3 className="text-xl font-semibold text-emerald-800 mb-3">
                How to Memorize {kalima.name}
              </h3>
              <p className="text-gray-700 mb-4">
                This sacred Kalima should be recited with sincerity and understanding. Practice the Arabic text while understanding its meaning to strengthen your Islamic faith and connection with Allah. Use the audio player above to hear authentic pronunciation, then follow along with the transliteration before attempting to recite from memory.
              </p>

              <h3 className="text-xl font-semibold text-emerald-800 mb-3">
                {kalima.name} in Daily Islamic Practice
              </h3>
              <p className="text-gray-700 mb-4">
                {kalima.name} is the {ordinal.toLowerCase()} of the six fundamental Kalimas every Muslim should know. Regular recitation deepens your connection with Allah, strengthens your Islamic faith, and helps you internalize the core principles of Islamic belief. Incorporate it into your daily adhkar (remembrance) practice for maximum spiritual benefit.
              </p>

              <h3 className="text-xl font-semibold text-emerald-800 mb-3">
                Learning with Audio Pronunciation
              </h3>
              <p className="text-gray-700">
                Correct Arabic pronunciation of {kalima.name} is essential for proper recitation. Our high-quality audio player features authentic Arabic recitation to help you perfect your pronunciation. Listen repeatedly, follow the transliteration, and practice until you can recite with confidence. This audio-guided approach has helped thousands of Muslims worldwide master all 6 Kalimas.
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
