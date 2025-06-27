
import { Card, CardContent } from '@/components/ui/card';
import AudioPlayer from '@/components/AudioPlayer';
import ShareButton from '@/components/ShareButton';
import ProgressTracker from '@/components/ProgressTracker';

interface KalimaDetailProps {
  kalima: {
    id: number;
    name: string;
    title: string;
    arabic: string;
    transliteration: string;
    translation: string;
    meaning: string;
    cardColor: string;
  };
  onClose: () => void;
}

const KalimaDetail = ({ kalima, onClose }: KalimaDetailProps) => {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-emerald-50 to-amber-50">
      <div className="container mx-auto max-w-6xl">
        <Card id={`kalima-${kalima.id}`} className="overflow-hidden shadow-2xl border-0 bg-white/90 backdrop-blur-sm animate-fade-in">
          <CardContent className="p-0">
            <div className={`bg-gradient-to-r ${kalima.cardColor} text-white p-8`}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-xl font-bold">
                    {kalima.id}
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold">{kalima.name}</h2>
                    <p className="text-white/90 text-lg">{kalima.title}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <ShareButton kalimaId={kalima.id} title={kalima.name} />
                  <button onClick={onClose} className="text-white/70 hover:text-white transition-colors text-2xl">
                    ×
                  </button>
                </div>
              </div>
            </div>

            <div className="p-8 space-y-8">
              {/* Audio Player */}
              <AudioPlayer kalimaId={kalima.id} title={kalima.name} />

              {/* Arabic Text */}
              <div className="text-center">
                <div className="bg-gradient-to-r from-amber-50 to-emerald-50 rounded-xl p-8 border border-emerald-100">
                  <p className="text-2xl md:text-3xl leading-relaxed text-emerald-900 font-arabic" dir="rtl">
                    {kalima.arabic}
                  </p>
                </div>
              </div>

              {/* Transliteration */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="font-semibold text-emerald-800 mb-3">Transliteration:</h4>
                <p className="text-lg text-gray-700 italic leading-relaxed">
                  {kalima.transliteration}
                </p>
              </div>

              {/* Translation */}
              <div className="bg-emerald-50 rounded-xl p-6">
                <h4 className="font-semibold text-emerald-800 mb-3">Translation:</h4>
                <p className="text-lg text-emerald-900 leading-relaxed">
                  "{kalima.translation}"
                </p>
              </div>

              {/* Meaning */}
              <div className="bg-amber-50 rounded-xl p-6">
                <h4 className="font-semibold text-amber-800 mb-3">Significance:</h4>
                <p className="text-gray-700 leading-relaxed">
                  {kalima.meaning}
                </p>
              </div>

              {/* Progress Tracker */}
              <ProgressTracker kalimaId={kalima.id} title={kalima.name} />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default KalimaDetail;
