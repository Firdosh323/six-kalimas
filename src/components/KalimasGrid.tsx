
import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';

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

const KalimasGrid = ({
  kalimas,
  activeKalima,
  onCardClick
}: KalimasGridProps) => {
  const getCardBackgroundColor = (id: number) => {
    switch (id) {
      case 1: return 'bg-emerald-100';
      case 2: return 'bg-blue-100';
      case 3: return 'bg-purple-100';
      case 4: return 'bg-orange-100';
      case 5: return 'bg-pink-100';
      case 6: return 'bg-cyan-100';
      default: return 'bg-gray-100';
    }
  };

  const getCircleColor = (id: number) => {
    switch (id) {
      case 1: return 'bg-emerald-500';
      case 2: return 'bg-blue-500';
      case 3: return 'bg-purple-500';
      case 4: return 'bg-orange-500';
      case 5: return 'bg-pink-500';
      case 6: return 'bg-cyan-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <section className="px-4 py-0">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-emerald-900 mb-2 md:text-2xl">
            The Six Sacred Kalimas
          </h2>
          <p className="text-emerald-700 text-base">
            Click on any Kalima to learn more about its meaning and significance
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {kalimas.map(kalima => (
            <Card 
              key={kalima.id} 
              className={`cursor-pointer transform hover:scale-105 transition-all duration-300 hover:shadow-lg border-0 overflow-hidden ${
                activeKalima === kalima.id ? 'ring-4 ring-emerald-400 scale-105' : ''
              } ${getCardBackgroundColor(kalima.id)}`} 
              onClick={() => onCardClick(kalima.id)}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 ${getCircleColor(kalima.id)} rounded-full flex items-center justify-center text-white text-xl font-bold`}>
                    {kalima.id}
                  </div>
                  <Heart className="w-6 h-6 text-gray-400 hover:text-red-500 transition-colors" />
                </div>
                
                <h3 className="text-lg font-bold mb-4 text-gray-800">
                  {kalima.shortTitle}
                </h3>
                
                <div className="text-right">
                  <p className="text-lg font-arabic leading-relaxed text-gray-700" dir="rtl">
                    {kalima.arabic.length > 60 ? `${kalima.arabic.substring(0, 60)}...` : kalima.arabic}
                  </p>
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
