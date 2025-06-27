
import { X, Volume2, Heart, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface Dua {
  id: number;
  title: string;
  shortTitle: string;
  arabic: string;
  transliteration: string;
  translation: string;
  meaning: string;
}

interface DuaDetailProps {
  dua: Dua;
  onClose: () => void;
}

const DuaDetail = ({ dua, onClose }: DuaDetailProps) => {
  const playAudio = () => {
    console.log(`Playing audio for dua ${dua.id}`);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <Card className="max-w-2xl w-full max-h-[90vh] overflow-y-auto bg-white">
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-1">{dua.title}</h2>
              <p className="text-gray-600">{dua.shortTitle}</p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Arabic Text */}
          <div className="mb-6 p-4 bg-emerald-50 rounded-lg">
            <p className="text-2xl leading-relaxed text-right font-arabic text-gray-900 mb-2">
              {dua.arabic}
            </p>
          </div>

          {/* Transliteration */}
          <div className="mb-4">
            <h3 className="font-semibold text-gray-900 mb-2">Transliteration:</h3>
            <p className="text-gray-700 italic leading-relaxed">
              {dua.transliteration}
            </p>
          </div>

          {/* Translation */}
          <div className="mb-4">
            <h3 className="font-semibold text-gray-900 mb-2">Translation:</h3>
            <p className="text-gray-700 leading-relaxed">
              {dua.translation}
            </p>
          </div>

          {/* Meaning */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-900 mb-2">Meaning:</h3>
            <p className="text-gray-700 leading-relaxed">
              {dua.meaning}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 pt-4 border-t">
            <Button
              onClick={playAudio}
              className="flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700"
            >
              <Volume2 className="w-4 h-4" />
              <span>Listen</span>
            </Button>
            <Button
              variant="outline"
              className="flex items-center space-x-2"
            >
              <Heart className="w-4 h-4" />
              <span>Favorite</span>
            </Button>
            <Button
              variant="outline"
              className="flex items-center space-x-2"
            >
              <Share2 className="w-4 h-4" />
              <span>Share</span>
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default DuaDetail;
