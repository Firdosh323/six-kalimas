
import { Card, CardContent } from '@/components/ui/card';
import { Copy, Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
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
    tafsir: string;
    cardColor: string;
  };
  onClose: () => void;
}

const KalimaDetail = ({ kalima, onClose }: KalimaDetailProps) => {
  const { toast } = useToast();

  const copyToClipboard = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast({
        title: "Copied!",
        description: `${label} copied to clipboard`,
      });
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      
      toast({
        title: "Copied!",
        description: `${label} copied to clipboard`,
      });
    }
  };

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
              
              {/* Audio emphasis banner */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="flex items-center space-x-3">
                  <Volume2 className="w-6 h-6 text-emerald-200" />
                  <div>
                    <h3 className="font-bold text-emerald-100">🎵 Kalima with Audio Feature</h3>
                    <p className="text-white/80 text-sm">
                      Perfect pronunciation with our high-quality Arabic audio recitation
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 space-y-8">
              {/* Enhanced Audio Player Section */}
              <div className="bg-gradient-to-r from-emerald-25 to-blue-25 rounded-2xl p-6 border-2 border-emerald-200">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-emerald-900 mb-2 flex items-center justify-center">
                    <Volume2 className="w-6 h-6 mr-2" />
                    Listen to Perfect Arabic Pronunciation
                  </h3>
                  <p className="text-emerald-700">
                    🎧 Use headphones for the best audio experience • 🔄 Repeat until mastered
                  </p>
                </div>
                <AudioPlayer kalimaId={kalima.id} title={kalima.name} />
              </div>

              {/* Arabic Text */}
              <div className="text-center">
                <div className="bg-gradient-to-r from-amber-50 to-emerald-50 rounded-xl p-8 border border-emerald-100 relative">
                  <Button
                    onClick={() => copyToClipboard(kalima.arabic, 'Arabic text')}
                    variant="ghost"
                    size="sm"
                    className="absolute top-2 right-2 text-emerald-600 hover:text-emerald-800"
                  >
                    <Copy size={16} />
                  </Button>
                  <p className="text-2xl md:text-3xl leading-relaxed text-emerald-900 font-arabic" dir="rtl">
                    {kalima.arabic}
                  </p>
                </div>
              </div>

              {/* Transliteration */}
              <div className="bg-gray-50 rounded-xl p-6 relative">
                <Button
                  onClick={() => copyToClipboard(kalima.transliteration, 'Transliteration')}
                  variant="ghost"
                  size="sm"
                  className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
                >
                  <Copy size={16} />
                </Button>
                <h4 className="font-semibold text-emerald-800 mb-3">
                  Transliteration (How to Pronounce):
                </h4>
                <p className="text-lg text-gray-700 italic leading-relaxed">
                  {kalima.transliteration}
                </p>
                <p className="text-sm text-emerald-600 mt-2">
                  💡 Follow along with the audio above for perfect pronunciation
                </p>
              </div>

              {/* Translation */}
              <div className="bg-emerald-50 rounded-xl p-6 relative">
                <Button
                  onClick={() => copyToClipboard(kalima.translation, 'Translation')}
                  variant="ghost"
                  size="sm"
                  className="absolute top-2 right-2 text-emerald-600 hover:text-emerald-800"
                >
                  <Copy size={16} />
                </Button>
                <h4 className="font-semibold text-emerald-800 mb-3">English Translation:</h4>
                <p className="text-lg text-emerald-900 leading-relaxed">
                  "{kalima.translation}"
                </p>
              </div>

              {/* Meaning */}
              <div className="bg-blue-50 rounded-xl p-6 relative">
                <Button
                  onClick={() => copyToClipboard(kalima.meaning, 'Meaning')}
                  variant="ghost"
                  size="sm"
                  className="absolute top-2 right-2 text-blue-600 hover:text-blue-800"
                >
                  <Copy size={16} />
                </Button>
                <h4 className="font-semibold text-blue-800 mb-3">Detailed Meaning:</h4>
                <p className="text-gray-700 leading-relaxed">
                  {kalima.meaning}
                </p>
              </div>

              {/* Deeper Meaning (Tafsir) */}
              <div className="bg-amber-50 rounded-xl p-6 relative">
                <Button
                  onClick={() => copyToClipboard(kalima.tafsir, 'Deeper Meaning (Tafsir)')}
                  variant="ghost"
                  size="sm"
                  className="absolute top-2 right-2 text-amber-600 hover:text-amber-800"
                >
                  <Copy size={16} />
                </Button>
                <h4 className="font-semibold text-amber-800 mb-3">Deeper Meaning (Tafsir):</h4>
                <p className="text-gray-700 leading-relaxed">
                  {kalima.tafsir}
                </p>
              </div>

              {/* Progress Tracker */}
              <ProgressTracker kalimaId={kalima.id} title={kalima.name} />

              {/* Audio Learning Tips */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
                <h4 className="font-semibold text-purple-800 mb-3 flex items-center">
                  <Volume2 className="w-5 h-5 mr-2" />
                  Audio Learning Tips for This Kalima:
                </h4>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• Listen to the audio 3-5 times while reading the Arabic text</li>
                  <li>• Practice pronunciation by repeating after each audio playback</li>
                  <li>• Use the audio feature daily to improve your recitation</li>
                  <li>• Focus on proper Arabic pronunciation with the audio guidance</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default KalimaDetail;
