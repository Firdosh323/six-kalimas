
import { useState, useEffect } from 'react';
import { Timer, Play, Pause } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface ReadingSpeedTrackerProps {
  kalimaId: number;
}

const ReadingSpeedTracker = ({ kalimaId }: ReadingSpeedTrackerProps) => {
  const [isTracking, setIsTracking] = useState(false);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [averageSpeed, setAverageSpeed] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isTracking && startTime) {
      interval = setInterval(() => {
        setElapsedTime(Date.now() - startTime);
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isTracking, startTime]);

  const startTracking = () => {
    setIsTracking(true);
    setStartTime(Date.now());
    setElapsedTime(0);
  };

  const stopTracking = () => {
    if (startTime) {
      const totalTime = Date.now() - startTime;
      const speeds = JSON.parse(localStorage.getItem('reading-speeds') || '{}');
      speeds[kalimaId] = speeds[kalimaId] || [];
      speeds[kalimaId].push(totalTime);
      localStorage.setItem('reading-speeds', JSON.stringify(speeds));
      
      const avgSpeed = speeds[kalimaId].reduce((a: number, b: number) => a + b, 0) / speeds[kalimaId].length;
      setAverageSpeed(avgSpeed);
    }
    setIsTracking(false);
    setStartTime(null);
  };

  const formatTime = (ms: number) => {
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    return `${minutes}:${(seconds % 60).toString().padStart(2, '0')}`;
  };

  return (
    <Card className="bg-gradient-to-r from-cyan-50 to-blue-50 border-cyan-200">
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <Timer className="w-5 h-5 text-cyan-600" />
            <h3 className="font-semibold text-cyan-900">Reading Speed</h3>
          </div>
          <Button
            onClick={isTracking ? stopTracking : startTracking}
            size="sm"
            className="bg-cyan-600 hover:bg-cyan-700"
          >
            {isTracking ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </Button>
        </div>
        <div className="text-sm text-cyan-700">
          <p>Current: {formatTime(elapsedTime)}</p>
          {averageSpeed > 0 && <p>Average: {formatTime(averageSpeed)}</p>}
        </div>
      </CardContent>
    </Card>
  );
};

export default ReadingSpeedTracker;
