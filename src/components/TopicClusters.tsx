
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, ArrowRight, Volume2 } from 'lucide-react';
import { topicClusters } from '@/utils/relatedContent';
import { kalimas } from '@/data/kalimas';

const TopicClusters = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-amber-50 to-emerald-50">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-4">
            📚 Learn by Islamic Topics
          </h2>
          <p className="text-emerald-700 text-lg max-w-3xl mx-auto">
            Discover the 6 Kalimas organized by their spiritual themes. Each topic cluster helps you understand 
            the deeper connections between different Islamic declarations and their meanings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {topicClusters.map((cluster) => (
            <Card key={cluster.id} className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white/90 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white">
                <CardTitle className="text-xl mb-2">{cluster.title}</CardTitle>
                <p className="text-emerald-100 text-sm leading-relaxed">
                  {cluster.description}
                </p>
              </CardHeader>
              
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-emerald-800 mb-3 flex items-center">
                      <BookOpen className="w-4 h-4 mr-2" />
                      Included Kalimas:
                    </h4>
                    <div className="space-y-2">
                      {cluster.kalimas.map((kalimaId) => {
                        const kalima = kalimas.find(k => k.id === kalimaId);
                        if (!kalima) return null;
                        
                        return (
                          <Link 
                            key={kalimaId} 
                            to={`/kalima/${kalimaId}`}
                            className="block p-3 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors group"
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-3">
                                <div className="w-6 h-6 bg-emerald-200 rounded-full flex items-center justify-center text-xs font-bold text-emerald-800">
                                  {kalima.id}
                                </div>
                                <div>
                                  <p className="font-medium text-emerald-900 text-sm">
                                    {kalima.name}
                                  </p>
                                  <p className="text-emerald-600 text-xs">
                                    {kalima.shortTitle}
                                  </p>
                                </div>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Volume2 className="w-3 h-3 text-emerald-600" />
                                <ArrowRight className="w-3 h-3 text-emerald-600 group-hover:translate-x-1 transition-transform" />
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-emerald-100">
                    <h5 className="font-medium text-emerald-800 text-sm mb-2">Key Learning Topics:</h5>
                    <div className="flex flex-wrap gap-1">
                      {cluster.keywords.slice(0, 3).map((keyword) => (
                        <span 
                          key={keyword}
                          className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-emerald-200">
            <h3 className="text-xl font-bold text-emerald-900 mb-3">
              🎯 Complete Your Islamic Learning Journey
            </h3>
            <p className="text-emerald-700 mb-4 max-w-2xl mx-auto">
              Master all 6 Kalimas with our comprehensive audio guides, translations, and detailed explanations. 
              Perfect for beginners and advanced learners alike.
            </p>
            <Link to="/">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                <Volume2 className="w-4 h-4 mr-2" />
                Start Learning All Kalimas with Audio
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopicClusters;
