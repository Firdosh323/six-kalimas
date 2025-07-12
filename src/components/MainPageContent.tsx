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
const MainPageContent = ({
  dailyContent,
  filteredKalimas,
  onDownloadPDF
}: MainPageContentProps) => {
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
  return <>
      {/* Daily Content - Keep users engaged */}
      {dailyContent && <KalimaOfTheDay content={dailyContent} onReadMore={handleReadMore} />}

      {/* Main Kalimas Grid - Primary content */}
      <KalimasGrid kalimas={filteredKalimas} activeKalima={activeKalima} onCardClick={handleCardClick} />

      {/* Learning Support Section */}
      <MemorizationTips />
      
      {/* Practical Features */}
      <Features />
      
      {/* Importance and Benefits */}
      <ImportanceSection />
      
      {/* Download Resources */}
      <PDFDownloadSection onDownloadPDF={onDownloadPDF} />

      {/* FAQ - Addresses user questions */}
      <FAQ />

      {/* SEO Tools Section - Only visible in development */}
      {process.env.NODE_ENV === 'development'}

      {/* Modal Sections */}
      {activeKalima && selectedKalima && <KalimaDetail kalima={selectedKalima} onClose={() => setActiveKalima(null)} />}

      {activeDua && selectedDua && <DuaDetail dua={selectedDua} onClose={() => setActiveDua(null)} />}
    </>;
};
export default MainPageContent;