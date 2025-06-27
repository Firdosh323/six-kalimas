
import { useState, useEffect } from 'react';
import { Bell, BellOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const DailyReminder = () => {
  const [reminderEnabled, setReminderEnabled] = useState(false);
  const [reminderTime, setReminderTime] = useState('09:00');

  useEffect(() => {
    const savedReminder = localStorage.getItem('daily-reminder');
    if (savedReminder) {
      const reminder = JSON.parse(savedReminder);
      setReminderEnabled(reminder.enabled);
      setReminderTime(reminder.time);
    }
  }, []);

  const toggleReminder = () => {
    const newEnabled = !reminderEnabled;
    setReminderEnabled(newEnabled);
    
    const reminderData = {
      enabled: newEnabled,
      time: reminderTime
    };
    
    localStorage.setItem('daily-reminder', JSON.stringify(reminderData));
    
    if (newEnabled) {
      // In a real app, this would set up actual notifications
      console.log(`Daily reminder set for ${reminderTime}`);
    }
  };

  const handleTimeChange = (time: string) => {
    setReminderTime(time);
    if (reminderEnabled) {
      const reminderData = {
        enabled: reminderEnabled,
        time: time
      };
      localStorage.setItem('daily-reminder', JSON.stringify(reminderData));
    }
  };

  return (
    <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-purple-900">Daily Reminder</h3>
          <Button
            onClick={toggleReminder}
            variant="ghost"
            size="sm"
            className={reminderEnabled ? 'text-purple-600' : 'text-gray-400'}
          >
            {reminderEnabled ? <Bell className="w-5 h-5" /> : <BellOff className="w-5 h-5" />}
          </Button>
        </div>
        <p className="text-sm text-purple-700 mb-3">
          Get reminded to recite the Kalimas daily
        </p>
        <div className="flex items-center space-x-2">
          <input
            type="time"
            value={reminderTime}
            onChange={(e) => handleTimeChange(e.target.value)}
            className="px-2 py-1 border border-purple-200 rounded text-sm"
            disabled={!reminderEnabled}
          />
          <span className="text-sm text-purple-600">
            {reminderEnabled ? 'Active' : 'Inactive'}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default DailyReminder;
