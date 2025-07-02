
import { useState, useEffect } from 'react';
import { kalimas } from '@/data/kalimas';
import { duas } from '@/data/duas';

export const useDailyContent = () => {
  const [dailyContent, setDailyContent] = useState<{
    id: number;
    shortTitle: string;
    meaning: string;
    type: 'kalima' | 'dua';
  } | null>(null);

  useEffect(() => {
    // Determine if today should show Kalima or Dua based on date
    const today = new Date();
    const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));
    
    // Alternate between kalima and dua every day
    const isKalimaDay = dayOfYear % 2 === 0;
    
    if (isKalimaDay) {
      const kalimaIndex = Math.floor(dayOfYear / 2) % kalimas.length;
      const selectedKalima = kalimas[kalimaIndex];
      setDailyContent({
        id: selectedKalima.id,
        shortTitle: selectedKalima.shortTitle,
        meaning: selectedKalima.meaning,
        type: 'kalima'
      });
    } else {
      const duaIndex = Math.floor(dayOfYear / 2) % duas.length;
      const selectedDua = duas[duaIndex];
      setDailyContent({
        id: selectedDua.id,
        shortTitle: selectedDua.shortTitle,
        meaning: selectedDua.meaning,
        type: 'dua'
      });
    }
  }, []);

  return dailyContent;
};
