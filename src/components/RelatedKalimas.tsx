
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Volume2 } from 'lucide-react';
import { getRelatedKalimas, RelatedKalima } from '@/utils/relatedContent';

interface RelatedKalimasProps {
  currentKalimaId: number;
}

const RelatedKalimas = ({ currentKalimaId }: RelatedKalimasProps) => {
  const relatedKalimas = getRelatedKalimas(currentKalimaId);

  if (relatedKalimas.length === 0) return null;

  return (
    <section className="py-12 bg-gradient-to-r from-emerald-25 to-blue-25">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-emerald-900 mb-4">
            🔗 Related Islamic Kalimas
          </h2>
          <p className="text-emerald-700 max-w-2xl mx-auto">
            Continue your Islamic learning journey with these related Kalimas. 
            Each one complements your understanding of Islamic faith and devotion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {relatedKalimas.map((kalima) => (
            <Card key={kalima.id} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className={`bg-gradient-to-r ${kalima.cardColor} text-white`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">
                      {kalima.id}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{kalima.name}</CardTitle>
                      <p className="text-white/90 text-sm">{kalima.title}</p>
                    </div>
                  </div>
                  <Volume2 className="w-5 h-5 text-white/80" />
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <div className="mb-4">
                  <p className="text-emerald-700 text-sm font-medium mb-2">
                    🔗 {kalima.reason}
                  </p>
                  <p className="text-gray-600 text-sm">
                    Learn this Kalima with Arabic text, translation, transliteration, and perfect audio pronunciation.
                  </p>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-xs text-gray-500">
                    <span className="flex items-center">
                      <BookOpen className="w-3 h-3 mr-1" />
                      Text & Translation
                    </span>
                    <span className="flex items-center">
                      <Volume2 className="w-3 h-3 mr-1" />
                      Audio Guide
                    </span>
                  </div>
                  
                  <Link to={`/kalima/${kalima.id}`}>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="group-hover:bg-emerald-50 group-hover:text-emerald-700 group-hover:border-emerald-300"
                    >
                      Learn Now
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Link back to all Kalimas */}
        <div className="text-center mt-8">
          <Link to="/">
            <Button 
              variant="outline" 
              className="bg-white/80 backdrop-blur-sm hover:bg-emerald-50 border-emerald-200"
            >
              <BookOpen className="w-4 h-4 mr-2" />
              View All 6 Kalimas with Audio
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RelatedKalimas;
