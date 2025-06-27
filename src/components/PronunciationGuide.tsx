
import { useState } from 'react';
import { Volume2, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface PronunciationGuideProps {
  transliteration: string;
}

const PronunciationGuide = ({ transliteration }: PronunciationGuideProps) => {
  const [showGuide, setShowGuide] = useState(false);

  const pronunciationTips = [
    { letter: 'kh', tip: 'Like clearing your throat gently' },
    { letter: 'gh', tip: 'Like the French "r" sound' },
    { letter: 'dh', tip: 'Like "th" in "this"' },
    { letter: 'th', tip: 'Like "th" in "think"' },
    { letter: 'aa', tip: 'Long "a" sound as in "father"' },
    { letter: 'ee', tip: 'Long "e" sound as in "see"' },
    { letter: 'oo', tip: 'Long "o" sound as in "moon"' }
  ];

  const getRelevantTips = () => {
    return pronunciationTips.filter(tip => 
      transliteration.toLowerCase().includes(tip.letter)
    );
  };

  return (
    <Card className="bg-gradient-to-r from-indigo-50 to-purple-50 border-indigo-200">
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <Volume2 className="w-5 h-5 text-indigo-600" />
            <h3 className="font-semibold text-indigo-900">Pronunciation Guide</h3>
          </div>
          <Button
            onClick={() => setShowGuide(!showGuide)}
            variant="ghost"
            size="sm"
          >
            <Info className="w-4 h-4" />
          </Button>
        </div>
        
        {showGuide && (
          <div className="space-y-2">
            {getRelevantTips().map((tip, index) => (
              <div key={index} className="text-sm">
                <span className="font-medium text-indigo-800">{tip.letter}:</span>
                <span className="text-indigo-700 ml-2">{tip.tip}</span>
              </div>
            ))}
            {getRelevantTips().length === 0 && (
              <p className="text-sm text-indigo-700">No special pronunciation notes for this Kalima.</p>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PronunciationGuide;
