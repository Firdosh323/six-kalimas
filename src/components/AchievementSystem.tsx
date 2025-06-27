
import { useState, useEffect } from 'react';
import { Award, Star, Trophy, Medal } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AchievementSystem = () => {
  const [achievements, setAchievements] = useState<string[]>([]);

  const achievementList = [
    { id: 'first_read', title: 'First Reader', description: 'Read your first Kalima', icon: Star },
    { id: 'all_kalimas', title: 'Complete Scholar', description: 'Read all 6 Kalimas', icon: Trophy },
    { id: 'week_streak', title: 'Weekly Warrior', description: 'Read for 7 days straight', icon: Medal },
    { id: 'fast_reader', title: 'Speed Reader', description: 'Read a Kalima in under 30 seconds', icon: Award },
  ];

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('achievements') || '[]');
    setAchievements(saved);
    
    // Check for new achievements
    checkAchievements();
  }, []);

  const checkAchievements = () => {
    const progress = JSON.parse(localStorage.getItem('kalima-progress') || '{}');
    const streaks = JSON.parse(localStorage.getItem('reading-streaks') || '{}');
    const speeds = JSON.parse(localStorage.getItem('reading-speeds') || '{}');
    
    const newAchievements = [...achievements];
    
    // Check first read
    if (Object.keys(progress).length > 0 && !achievements.includes('first_read')) {
      newAchievements.push('first_read');
    }
    
    // Check all kalimas read
    if (Object.keys(progress).length >= 6 && !achievements.includes('all_kalimas')) {
      newAchievements.push('all_kalimas');
    }
    
    // Check week streak
    if (streaks.current >= 7 && !achievements.includes('week_streak')) {
      newAchievements.push('week_streak');
    }
    
    // Check speed reading
    const hasSpeedReading = Object.values(speeds).some((times: any) => 
      times.some((time: number) => time < 30000)
    );
    if (hasSpeedReading && !achievements.includes('fast_reader')) {
      newAchievements.push('fast_reader');
    }
    
    if (newAchievements.length > achievements.length) {
      setAchievements(newAchievements);
      localStorage.setItem('achievements', JSON.stringify(newAchievements));
    }
  };

  return (
    <Card className="bg-gradient-to-r from-gold-50 to-yellow-50 border-yellow-300">
      <CardContent className="p-4">
        <div className="flex items-center space-x-2 mb-3">
          <Award className="w-5 h-5 text-yellow-600" />
          <h3 className="font-semibold text-yellow-900">Achievements</h3>
        </div>
        
        <div className="grid grid-cols-2 gap-2">
          {achievementList.map((achievement) => {
            const Icon = achievement.icon;
            const isUnlocked = achievements.includes(achievement.id);
            
            return (
              <div
                key={achievement.id}
                className={`p-2 rounded text-center transition-all ${
                  isUnlocked 
                    ? 'bg-yellow-100 border border-yellow-300' 
                    : 'bg-gray-100 border border-gray-200 opacity-50'
                }`}
              >
                <Icon className={`w-6 h-6 mx-auto mb-1 ${
                  isUnlocked ? 'text-yellow-600' : 'text-gray-400'
                }`} />
                <div className="text-xs font-medium">{achievement.title}</div>
                <div className="text-xs text-gray-600">{achievement.description}</div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default AchievementSystem;
