
import { useState } from 'react';
import { Play, Pause, Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface AudioPlayerProps {
  kalimaId: number;
  title: string;
}

const AudioPlayer = ({ kalimaId, title }: AudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    // In a real implementation, this would play actual audio
    setIsPlaying(!isPlaying);
    console.log(`${isPlaying ? 'Pausing' : 'Playing'} audio for ${title}`);
    
    // Simulate audio duration
    if (!isPlaying) {
      setTimeout(() => setIsPlaying(false), 30000); // Auto-stop after 30 seconds
    }
  };

  return (
    <div className="flex items-center space-x-3 bg-emerald-50 rounded-lg p-3">
      <Button
        onClick={handlePlay}
        size="sm"
        className="bg-emerald-600 hover:bg-emerald-700"
      >
        {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
      </Button>
      <Volume2 className="w-4 h-4 text-emerald-600" />
      <span className="text-sm text-emerald-800">
        {isPlaying ? 'Playing...' : 'Listen to recitation'}
      </span>
    </div>
  );
};

export default AudioPlayer;
