
import { useState, useEffect } from 'react';
import { Trophy, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SearchBar from '@/components/SearchBar';
import { kalimas } from '@/data/kalimas';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import KalimaOfTheDay from '@/components/KalimaOfTheDay';
import KalimasGrid from '@/components/KalimasGrid';
import KalimaDetail from '@/components/KalimaDetail';
import Features from '@/components/Features';
import Statistics from '@/components/Statistics';
import AppFooter from '@/components/AppFooter';

const Index = () => {
  const [activeKalima, setActiveKalima] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredKalimas, setFilteredKalimas] = useState(kalimas);
  const [visitCount, setVisitCount] = useState(0);
  const [kalimaOfTheDay, setKalimaOfTheDay] = useState(kalimas[0]);
  
  useEffect(() => {
    // Set Kalima of the Day based on current date
    const today = new Date();
    const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));
    const kalimaIndex = dayOfYear % kalimas.length;
    setKalimaOfTheDay(kalimas[kalimaIndex]);

    // SEO: Add structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "6 Kalimas of Islam",
      "description": "Learn and recite the 6 Kalimas of Islam - sacred declarations that form the foundation of Islamic faith. Arabic text with English translations and meanings.",
      "url": window.location.href,
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://6kalimas.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
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
    setActiveKalima(id);
    setTimeout(() => {
      const element = document.getElementById(`kalima-${id}`);
      element?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }, 100);
  };

  const handleCardClick = (id: number) => {
    scrollToKalima(id);
  };

  const downloadPDF = () => {
    console.log('Downloading PDF guide...');
    // In a real implementation, this would trigger a PDF download
  };

  const selectedKalima = activeKalima ? kalimas.find(k => k.id === activeKalima) : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
      {/* SEO Meta Tags */}
      <div style={{ display: 'none' }}>
        <h1>6 Kalimas of Islam - Sacred Declarations of Faith</h1>
        <p>Learn the Six Kalimas: Tayyibah, Shahadat, Tamjeed, Tawheed, Istighfar, and Radde Kufr. Complete with Arabic text, transliteration, translation, and meanings.</p>
      </div>

      <Header visitCount={visitCount} onDownloadPDF={downloadPDF} />
      <Hero />

      {/* Ad Placeholder */}
      <section className="py-[5px] mx-[2px] px-0">
        <div className="container mx-2px max-w-1xl px-0">
          <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            <h3 className="text-lg font-semibold text-gray-600 mb-2">Ad Placeholder</h3>
            <p className="text-gray-500">Your AdSense ad could be displayed here.</p>
          </div>
        </div>
      </section>

      <KalimaOfTheDay kalima={kalimaOfTheDay} onReadMore={scrollToKalima} />

      {/* Action Buttons */}
      <section className="py-6 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg">
              <Trophy className="w-5 h-5 mr-2" />
              Test Your Knowledge
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
              <Bell className="w-5 h-5 mr-2" />
              Set Daily Reminder
            </Button>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-[10px] px-[10px]">
        <div className="container mx-auto max-w-4xl">
          <SearchBar onSearch={handleSearch} onClear={clearSearch} />
          {searchQuery && (
            <p className="text-center mt-4 text-emerald-700">
              Found {filteredKalimas.length} result{filteredKalimas.length !== 1 ? 's' : ''} for "{searchQuery}"
            </p>
          )}
        </div>
      </section>

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

      <Features />
      <Statistics visitCount={visitCount} />
      <AppFooter />
    </div>
  );
};

export default Index;
