
import { useState, useEffect } from 'react';
import { CheckCircle, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProgressTrackerProps {
  kalimaId: number;
  title: string;
}

const ProgressTracker = ({ kalimaId, title }: ProgressTrackerProps) => {
  const [isCompleted, setIsCompleted] = useState(false);
  const [readCount, setReadCount] = useState(0);

  useEffect(() => {
    const progress = JSON.parse(localStorage.getItem('kalima-progress') || '{}');
    const kalimaProgress = progress[kalimaId] || { completed: false, count: 0 };
    setIsCompleted(kalimaProgress.completed);
    setReadCount(kalimaProgress.count);
  }, [kalimaId]);

  const markAsRead = () => {
    const progress = JSON.parse(localStorage.getItem('kalima-progress') || '{}');
    const newCount = readCount + 1;
    const completed = newCount >= 3; // Mark as completed after 3 reads

    progress[kalimaId] = {
      completed,
      count: newCount,
      lastRead: new Date().toISOString()
    };

    localStorage.setItem('kalima-progress', JSON.stringify(progress));
    setReadCount(newCount);
    setIsCompleted(completed);
  };

  return (
    <div className="flex items-center space-x-4 bg-amber-50 rounded-lg p-3">
      <Button
        onClick={markAsRead}
        size="sm"
        className="bg-amber-600 hover:bg-amber-700"
      >
        <Clock className="w-4 h-4 mr-2" />
        Mark as Read
      </Button>
      <div className="flex items-center space-x-2">
        {isCompleted && <CheckCircle className="w-5 h-5 text-green-600" />}
        <span className="text-sm text-amber-800">
          Read {readCount} time{readCount !== 1 ? 's' : ''}
          {isCompleted && ' (Completed!)'}
        </span>
      </div>
    </div>
  );
};

export default ProgressTracker;
