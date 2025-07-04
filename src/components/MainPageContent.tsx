import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { kalimas } from '@/data/kalimas';
import { duas } from '@/data/duas';
import KalimaOfTheDay from '@/components/KalimaOfTheDay';
import KalimasGrid from '@/components/KalimasGrid';
import KalimaDetail from '@/components/KalimaDetail';
import DuaDetail from '@/components/DuaDetail';
import Features from '@/components/Features';
import FAQ from '@/components/FAQ';
import MemorizationTips from '@/components/MemorizationTips';
import PDFDownloadSection from '@/components/PDFDownloadSection';
import ImportanceSection from '@/components/ImportanceSection';
import TopicClusters from '@/components/TopicClusters';
import IslamicTeachingsSection from '@/components/IslamicTeachingsSection';
import UserQuestionsSection from '@/components/UserQuestionsSection';
import PracticalGuidanceSection from '@/components/PracticalGuidanceSection';
import SitemapGenerator from '@/components/SitemapGenerator';

interface MainPageContentProps {
  dailyContent: {
    id: number;
    shortTitle: string;
    meaning: string;
    type: 'kalima' | 'dua';
  } | null;
  filteredKalimas: typeof kalimas;
  onDownloadPDF: () => void;
}

const MainPageContent = ({ dailyContent, filteredKalimas, onDownloadPDF }: MainPageContentProps) => {
  const navigate = useNavigate();
  const [activeKalima, setActiveKalima] = useState<number | null>(null);
  const [activeDua, setActiveDua] = useState<number | null>(null);

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

  const selectedKalima = activeKalima ? kalimas.find(k => k.id === activeKalima) : null;
  const selectedDua = activeDua ? duas.find(d => d.id === activeDua) : null;

  return (
    <>
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

      {/* SEO Tools Section - Only visible in development or with special access */}
      {process.env.NODE_ENV === 'development' && (
        <section className="py-8 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-2xl font-bold text-center mb-6">SEO Tools (Dev Only)</h2>
            <SitemapGenerator />
          </div>
        </section>
      )}

      {/* New Educational Content Sections */}
      <IslamicTeachingsSection />
      
      <UserQuestionsSection />
      
      <PracticalGuidanceSection />

      {/* Topic Clusters Section */}
      <TopicClusters />

      {/* Existing Content Sections */}
      <MemorizationTips />
      
      <ImportanceSection />
      
      <PDFDownloadSection onDownloadPDF={onDownloadPDF} />

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
    </>
  );
};

export default MainPageContent;
