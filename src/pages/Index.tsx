import { useState, useEffect } from 'react';
import { Trophy, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SearchBar from '@/components/SearchBar';
import { kalimas } from '@/data/kalimas';
import { duas } from '@/data/duas';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import KalimaOfTheDay from '@/components/KalimaOfTheDay';
import KalimasGrid from '@/components/KalimasGrid';
import KalimaDetail from '@/components/KalimaDetail';
import DuaDetail from '@/components/DuaDetail';
import Features from '@/components/Features';
import Statistics from '@/components/Statistics';
import FAQ from '@/components/FAQ';
import AppFooter from '@/components/AppFooter';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();
  const [activeKalima, setActiveKalima] = useState<number | null>(null);
  const [activeDua, setActiveDua] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredKalimas, setFilteredKalimas] = useState(kalimas);
  const [visitCount, setVisitCount] = useState(0);
  const [dailyContent, setDailyContent] = useState<{
    id: number;
    shortTitle: string;
    meaning: string;
    type: 'kalima' | 'dua';
  } | null>(null);

  useEffect(() => {
    // Determine if today should show Kalima or Dua based on date
    const today = new Date();
    const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));
    
    // Alternate between kalima and dua every day
    const isKalimaDay = dayOfYear % 2 === 0;
    
    if (isKalimaDay) {
      const kalimaIndex = Math.floor(dayOfYear / 2) % kalimas.length;
      const selectedKalima = kalimas[kalimaIndex];
      setDailyContent({
        id: selectedKalima.id,
        shortTitle: selectedKalima.shortTitle,
        meaning: selectedKalima.meaning,
        type: 'kalima'
      });
    } else {
      const duaIndex = Math.floor(dayOfYear / 2) % duas.length;
      const selectedDua = duas[duaIndex];
      setDailyContent({
        id: selectedDua.id,
        shortTitle: selectedDua.shortTitle,
        meaning: selectedDua.meaning,
        type: 'dua'
      });
    }

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

    // Track visits
    const visits = parseInt(localStorage.getItem('site-visits') || '0') + 1;
    localStorage.setItem('site-visits', visits.toString());
    setVisitCount(visits);

    // Update meta description with high-volume keywords
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Learn all 6 Kalimas of Islam - 1st kalma to 6th kalma with Arabic text, English translation, transliteration and audio. Complete guide to islamic six kalma including Tayyibah, Shahadat, Tamjeed, Tawheed, Istighfar, Radde Kufr.');
    }

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim() === '') {
      setFilteredKalimas(kalimas);
    } else {
      const filtered = kalimas.filter(kalima => 
        kalima.name.toLowerCase().includes(query.toLowerCase()) ||
        kalima.title.toLowerCase().includes(query.toLowerCase()) ||
        kalima.translation.toLowerCase().includes(query.toLowerCase()) ||
        kalima.transliteration.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredKalimas(filtered);
    }
  };

  const clearSearch = () => {
    setSearchQuery('');
    setFilteredKalimas(kalimas);
  };

  const scrollToKalima = (id: number) => {
    navigate(`/kalima/${id}`);
  };

  const handleCardClick = (id: number) => {
    navigate(`/kalima/${id}`);
  };

  const handleReadMore = (id: number, type: 'kalima' | 'dua') => {
    if (type === 'kalima') {
      setActiveKalima(id);
    } else {
      setActiveDua(id);
    }
  };

  const downloadPDF = () => {
    console.log('Downloading PDF guide...');
  };

  const selectedKalima = activeKalima ? kalimas.find(k => k.id === activeKalima) : null;
  const selectedDua = activeDua ? duas.find(d => d.id === activeDua) : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
      {/* SEO Meta Tags with Enhanced Keywords */}
      <div style={{ display: 'none' }}>
        <h1>6 Kalimas of Islam - Complete Guide to Islamic Six Kalma (1 to 6 Kalma)</h1>
        <h2>Learn 1st Kalma, 2nd Kalma, 3rd Kalma, 4th Kalma, 5th Kalma, 6th Kalma with Arabic Text and Translation</h2>
        <p>Complete collection of 6 kalimas in Islam including Kalma Tayyibah, Kalma Shahadat, Kalma Tamjeed, Kalma Tawheed, Kalma Istighfar, and Kalma Radde Kufr with Arabic text, English translation, transliteration and audio recitation.</p>
      </div>

      <Header visitCount={visitCount} onDownloadPDF={downloadPDF} />
      
      <main>
        <Hero />

        {/* Ad Placeholder */}
        <section className="py-[5px] mx-[2px] px-0">
          <div className="container mx-2px max-w-1xl px-0">
            {/* Ad space */}
          </div>
        </section>

        {dailyContent && (
          <KalimaOfTheDay content={dailyContent} onReadMore={handleReadMore} />
        )}

        <KalimasGrid 
          kalimas={filteredKalimas} 
          activeKalima={activeKalima} 
          onCardClick={handleCardClick} 
        />

        {/* Detailed Kalimas Section */}
        {activeKalima && selectedKalima && (
          <KalimaDetail 
            kalima={selectedKalima} 
            onClose={() => setActiveKalima(null)} 
          />
        )}

        {/* Detailed Dua Section */}
        {activeDua && selectedDua && (
          <DuaDetail 
            dua={selectedDua} 
            onClose={() => setActiveDua(null)} 
          />
        )}

        <Features />
        <FAQ />
        <Statistics visitCount={visitCount} />
      </main>

      <AppFooter />
    </div>
  );
};

export default Index;
