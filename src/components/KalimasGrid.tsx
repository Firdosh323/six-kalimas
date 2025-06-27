
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

const KalimasGrid = ({
  kalimas,
  activeKalima,
  onCardClick
}: KalimasGridProps) => {
  const getCardBackgroundColor = (id: number) => {
    switch (id) {
      case 1: return 'bg-emerald-50';
      case 2: return 'bg-blue-50';
      case 3: return 'bg-purple-50';
      case 4: return 'bg-orange-50';
      case 5: return 'bg-pink-50';
      case 6: return 'bg-cyan-50';
      default: return 'bg-gray-50';
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
              className={`cursor-pointer transform hover:scale-105 transition-all duration-300 hover:shadow-lg border border-gray-200 overflow-hidden ${
                activeKalima === kalima.id ? 'ring-4 ring-emerald-400 scale-105' : ''
              } ${getCardBackgroundColor(kalima.id)}`} 
              onClick={() => onCardClick(kalima.id)}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 ${getCircleColor(kalima.id)} rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg`}>
                    {kalima.id}
                  </div>
                  <div onClick={(e) => e.stopPropagation()}>
                    <FavoriteButton kalimaId={kalima.id} title={kalima.shortTitle} />
                  </div>
                </div>
                
                <h3 className="text-lg font-bold mb-6 text-gray-800">
                  {kalima.shortTitle}
                </h3>
                
                {/* Arabic Text - More prominent and visual */}
                <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm mb-2">
                  <p className="text-2xl font-arabic leading-loose text-center text-emerald-800 font-semibold" dir="rtl">
                    {kalima.arabic.length > 50 ? `${kalima.arabic.substring(0, 50)}...` : kalima.arabic}
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
