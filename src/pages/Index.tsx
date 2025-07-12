
import { useState } from 'react';
import { kalimas } from '@/data/kalimas';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Statistics from '@/components/Statistics';
import AppFooter from '@/components/AppFooter';
import MainPageContent from '@/components/MainPageContent';
import { useSEO } from '@/hooks/useSEO';
import { useDailyContent } from '@/hooks/useDailyContent';
import { useVisitCount } from '@/hooks/useVisitCount';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredKalimas, setFilteredKalimas] = useState(kalimas);
  
  // Custom hooks
  useSEO();
  const dailyContent = useDailyContent();
  const visitCount = useVisitCount();

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

  const downloadPDF = () => {
    console.log('Downloading PDF guide...');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
      <Header visitCount={visitCount} onDownloadPDF={downloadPDF} />
      
      <main>
        <Hero />
        
        <MainPageContent 
          dailyContent={dailyContent}
          filteredKalimas={filteredKalimas}
          onDownloadPDF={downloadPDF}
        />
        
        <Statistics visitCount={visitCount} />
      </main>

      <AppFooter />
    </div>
  );
};

export default Index;
