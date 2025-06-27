import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
interface KalimaOfTheDayProps {
  kalima: {
    id: number;
    shortTitle: string;
    meaning: string;
  };
  onReadMore: (id: number) => void;
}
const KalimaOfTheDay = ({
  kalima,
  onReadMore
}: KalimaOfTheDayProps) => {
  return <section className="py-4 px-4">
      <div className="container mx-2px max-w-1xl px-0">
        <div className="p-6 rounded-2xl border bg-gradient-to-tr from-blue-500 to-indigo-600 from-opacity-20 to-opacity-5 border-white text-white relative overflow-hidden py-[10px]">
          <div className="flex items-start space-x-3 mb-0.5 px-0">
            <div className="bg-white/20 rounded-full p-2">
              <Star className="w-6 h-6" />
            </div>
            <div>
              <h2 className="mb-2 font-semibold text-lg">Kalima of the Day</h2>
              <h3 className="text-xl mb-2 font-bold">{kalima.shortTitle}</h3>
              <p className="text-white/80 mb-4 leading-relaxed">
                {kalima.meaning}
              </p>
              <Button onClick={() => onReadMore(kalima.id)} className="bg-white text-gray-900 hover:bg-white/90">
                Read More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default KalimaOfTheDay;