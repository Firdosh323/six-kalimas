
import { useState, useEffect } from 'react';
import { Target, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const ReadingGoals = () => {
  const [dailyGoal, setDailyGoal] = useState(3);
  const [weeklyGoal, setWeeklyGoal] = useState(21);
  const [dailyProgress, setDailyProgress] = useState(0);
  const [weeklyProgress, setWeeklyProgress] = useState(0);

  useEffect(() => {
    const goals = JSON.parse(localStorage.getItem('reading-goals') || '{}');
    const progress = JSON.parse(localStorage.getItem('reading-progress-stats') || '{}');
    
    if (goals.daily) setDailyGoal(goals.daily);
    if (goals.weekly) setWeeklyGoal(goals.weekly);
    
    const today = new Date().toDateString();
    const thisWeek = getWeekKey(new Date());
    
    setDailyProgress(progress[today] || 0);
    setWeeklyProgress(progress[thisWeek] || 0);
  }, []);

  const getWeekKey = (date: Date) => {
    const startOfWeek = new Date(date);
    startOfWeek.setDate(date.getDate() - date.getDay());
    return startOfWeek.toISOString().split('T')[0];
  };

  const updateGoals = () => {
    const goals = { daily: dailyGoal, weekly: weeklyGoal };
    localStorage.setItem('reading-goals', JSON.stringify(goals));
  };

  return (
    <Card className="bg-gradient-to-r from-orange-50 to-red-50 border-orange-200">
      <CardContent className="p-4">
        <div className="flex items-center space-x-2 mb-3">
          <Target className="w-5 h-5 text-orange-600" />
          <h3 className="font-semibold text-orange-900">Reading Goals</h3>
        </div>
        
        <div className="space-y-3">
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm text-orange-700">Daily Goal</span>
              <span className="text-sm font-medium">{dailyProgress}/{dailyGoal}</span>
            </div>
            <div className="w-full bg-orange-200 rounded-full h-2">
              <div 
                className="bg-orange-600 h-2 rounded-full transition-all" 
                style={{ width: `${Math.min((dailyProgress / dailyGoal) * 100, 100)}%` }}
              ></div>
            </div>
          </div>
          
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm text-orange-700">Weekly Goal</span>
              <span className="text-sm font-medium">{weeklyProgress}/{weeklyGoal}</span>
            </div>
            <div className="w-full bg-orange-200 rounded-full h-2">
              <div 
                className="bg-orange-600 h-2 rounded-full transition-all" 
                style={{ width: `${Math.min((weeklyProgress / weeklyGoal) * 100, 100)}%` }}
              ></div>
            </div>
          </div>
          
          <div className="flex space-x-2">
            <input
              type="number"
              value={dailyGoal}
              onChange={(e) => setDailyGoal(Number(e.target.value))}
              className="w-16 px-2 py-1 border rounded text-sm"
              min="1"
            />
            <Button onClick={updateGoals} size="sm" className="bg-orange-600 hover:bg-orange-700">
              Set Goals
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReadingGoals;
