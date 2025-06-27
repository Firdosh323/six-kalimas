
import { useState, useEffect } from 'react';
import { Flame, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ReadingStreaks = () => {
  const [currentStreak, setCurrentStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);
  const [lastReadDate, setLastReadDate] = useState<string | null>(null);

  useEffect(() => {
    const streakData = JSON.parse(localStorage.getItem('reading-streaks') || '{}');
    setCurrentStreak(streakData.current || 0);
    setLongestStreak(streakData.longest || 0);
    setLastReadDate(streakData.lastRead || null);
  }, []);

  const updateStreak = () => {
    const today = new Date().toDateString();
    const streakData = JSON.parse(localStorage.getItem('reading-streaks') || '{}');
    
    if (streakData.lastRead === today) return; // Already counted today
    
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    
    let newCurrentStreak = 1;
    if (streakData.lastRead === yesterday.toDateString()) {
      newCurrentStreak = (streakData.current || 0) + 1;
    }
    
    const newLongestStreak = Math.max(streakData.longest || 0, newCurrentStreak);
    
    const updatedData = {
      current: newCurrentStreak,
      longest: newLongestStreak,
      lastRead: today
    };
    
    localStorage.setItem('reading-streaks', JSON.stringify(updatedData));
    setCurrentStreak(newCurrentStreak);
    setLongestStreak(newLongestStreak);
    setLastReadDate(today);
  };

  // Auto-update streak when component mounts
  useEffect(() => {
    updateStreak();
  }, []);

  return (
    <Card className="bg-gradient-to-r from-red-50 to-orange-50 border-red-200">
      <CardContent className="p-4">
        <div className="flex items-center space-x-2 mb-3">
          <Flame className="w-5 h-5 text-red-600" />
          <h3 className="font-semibold text-red-900">Reading Streak</h3>
        </div>
        
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-red-600">{currentStreak}</div>
            <div className="text-sm text-red-700">Current</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-orange-600">{longestStreak}</div>
            <div className="text-sm text-orange-700">Best</div>
          </div>
        </div>
        
        {lastReadDate && (
          <div className="flex items-center justify-center mt-3 text-xs text-red-600">
            <Calendar className="w-3 h-3 mr-1" />
            Last read: {lastReadDate}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ReadingStreaks;
