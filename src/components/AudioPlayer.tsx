
import { useState, useEffect, useRef } from 'react';
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
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState([80]);
  const [isLoading, setIsLoading] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Map kalima IDs to file names
  const getAudioFileName = (id: number) => {
    const fileNames = {
      1: 'First_Kalma.mp3',
      2: 'Second_Kalma.mp3',
      3: 'Third_Kalma.mp3',
      4: 'Fourth_Kalma.mp3',
      5: 'Fifth_Kalma.mp3',
      6: 'Sixth_Kalma.mp3'
    };
    return fileNames[id as keyof typeof fileNames] || 'First_Kalma.mp3';
  };

  // Audio file URLs from public/audio folder
  const audioUrl = `/audio/${getAudioFileName(kalimaId)}`;

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
      setIsLoading(false);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    const handleLoadStart = () => {
      setIsLoading(true);
    };

    const handleCanPlay = () => {
      setIsLoading(false);
    };

    const handleError = () => {
      console.error('Error loading audio file:', audioUrl);
      setIsLoading(false);
    };

    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('loadstart', handleLoadStart);
    audio.addEventListener('canplay', handleCanPlay);
    audio.addEventListener('error', handleError);

    return () => {
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('loadstart', handleLoadStart);
      audio.removeEventListener('canplay', handleCanPlay);
      audio.removeEventListener('error', handleError);
    };
  }, [audioUrl]);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = volume[0] / 100;
    }
  }, [volume]);

  const handlePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        await audio.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.error('Error playing audio:', error);
      setIsLoading(false);
    }
  };

  const handleRestart = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.currentTime = 0;
      setCurrentTime(0);
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      }
    }
  };

  const handleProgressChange = (value: number[]) => {
    const audio = audioRef.current;
    if (audio && duration > 0) {
      const newTime = value[0];
      audio.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const formatTime = (seconds: number) => {
    if (isNaN(seconds)) return '0:00';
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-xl p-6 border-2 border-emerald-200">
      <audio
        ref={audioRef}
        src={audioUrl}
        preload="metadata"
      />
      
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <Button
            onClick={handlePlay}
            size="lg"
            disabled={isLoading}
            className="bg-emerald-600 hover:bg-emerald-700 w-12 h-12 rounded-full"
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : isPlaying ? (
              <Pause className="w-5 h-5" />
            ) : (
              <Play className="w-5 h-5 ml-0.5" />
            )}
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
          max={duration || 100}
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
        <div className={`w-2 h-2 rounded-full ${
          isLoading ? 'bg-yellow-500 animate-pulse' :
          isPlaying ? 'bg-green-500 animate-pulse' : 
          'bg-gray-400'
        }`}></div>
        <span className="text-sm text-emerald-800">
          {isLoading ? 'Loading audio...' :
           isPlaying ? 'Playing recitation...' : 
           currentTime >= duration && duration > 0 ? 'Recitation complete' : 
           'Ready to play'}
        </span>
      </div>
    </div>
  );
};

export default AudioPlayer;
