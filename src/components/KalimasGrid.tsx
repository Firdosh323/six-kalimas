
import { Card, CardContent } from '@/components/ui/card';
import FavoriteButton from '@/components/FavoriteButton';

interface Kalima {
  id: number;
  name: string;
  shortTitle: string;
  arabic: string;
  cardColor: string;
}

interface KalimasGridProps {
  kalimas: Kalima[];
  activeKalima: number | null;
  onCardClick: (id: number) => void;
}

const KalimasGrid = ({ kalimas, activeKalima, onCardClick }: KalimasGridProps) => {
  return (
    <section className="px-4 py-0">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-4">
            The Six Sacred Kalimas
          </h2>
          <p className="text-lg text-emerald-700">
            Click on any Kalima to learn more about its meaning and significance
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {kalimas.map(kalima => (
            <Card 
              key={kalima.id} 
              className={`cursor-pointer transform hover:scale-105 transition-all duration-300 hover:shadow-2xl border-0 overflow-hidden ${activeKalima === kalima.id ? 'ring-4 ring-emerald-400 scale-105' : ''}`} 
              onClick={() => onCardClick(kalima.id)}
            >
              <CardContent className="p-0">
                <div className={`bg-gradient-to-br ${kalima.cardColor} text-white p-6 relative`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-xl font-bold`}>
                      {kalima.id}
                    </div>
                    <FavoriteButton kalimaId={kalima.id} title={kalima.name} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{kalima.shortTitle}</h3>
                </div>
                
                <div className="p-6 bg-slate-800/90 text-white">
                  <div className="text-right mb-4">
                    <p className="text-lg font-arabic leading-relaxed" dir="rtl">
                      {kalima.arabic.length > 80 ? `${kalima.arabic.substring(0, 80)}...` : kalima.arabic}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KalimasGrid;
