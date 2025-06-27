
import { useState, useEffect } from 'react';
import { Play, Pause, Volume2, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';

interface AudioPlayerProps {
  kalimaId: number;
  title: string;
}

const AudioPlayer = ({ kalimaId, title }: AudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(45); // Placeholder duration in seconds
  const [volume, setVolume] = useState([80]);

  // Simulate audio playback
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isPlaying && currentTime < duration) {
      interval = setInterval(() => {
        setCurrentTime(prev => {
          if (prev >= duration) {
            setIsPlaying(false);
            return duration;
          }
          return prev + 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isPlaying, currentTime, duration]);

  const handlePlay = () => {
    if (currentTime >= duration) {
      setCurrentTime(0);
    }
    setIsPlaying(!isPlaying);
    console.log(`${isPlaying ? 'Pausing' : 'Playing'} audio for ${title}`);
  };

  const handleRestart = () => {
    setCurrentTime(0);
    setIsPlaying(false);
  };

  const handleProgressChange = (value: number[]) => {
    setCurrentTime(value[0]);
    if (isPlaying) {
      // In real implementation, seek to this position
      console.log(`Seeking to ${value[0]} seconds`);
    }
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-xl p-6 border-2 border-emerald-200">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <Button
            onClick={handlePlay}
            size="lg"
            className="bg-emerald-600 hover:bg-emerald-700 w-12 h-12 rounded-full"
          >
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
          </Button>
          
          <Button
            onClick={handleRestart}
            variant="outline"
            size="sm"
            className="border-emerald-300 text-emerald-700 hover:bg-emerald-100"
          >
            <RotateCcw className="w-4 h-4" />
          </Button>
          
          <div className="flex items-center space-x-2">
            <Volume2 className="w-4 h-4 text-emerald-600" />
            <div className="w-20">
              <Slider
                value={volume}
                onValueChange={setVolume}
                max={100}
                step={1}
                className="w-full"
              />
            </div>
          </div>
        </div>
        
        <div className="text-sm text-emerald-800 font-medium">
          {formatTime(currentTime)} / {formatTime(duration)}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="space-y-2">
        <Slider
          value={[currentTime]}
          onValueChange={handleProgressChange}
          max={duration}
          step={1}
          className="w-full"
        />
        <div className="flex justify-between text-xs text-emerald-700">
          <span>Listen to Arabic recitation</span>
          <span>{Math.round(progress)}% complete</span>
        </div>
      </div>

      {/* Status indicator */}
      <div className="mt-3 flex items-center space-x-2">
        <div className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`}></div>
        <span className="text-sm text-emerald-800">
          {isPlaying ? 'Playing recitation...' : currentTime >= duration ? 'Recitation complete' : 'Ready to play'}
        </span>
      </div>
    </div>
  );
};

export default AudioPlayer;
