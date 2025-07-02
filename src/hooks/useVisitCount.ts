
import { useState, useEffect } from 'react';

export const useVisitCount = () => {
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    // Track visits
    const visits = parseInt(localStorage.getItem('site-visits') || '0') + 1;
    localStorage.setItem('site-visits', visits.toString());
    setVisitCount(visits);
  }, []);

  return visitCount;
};
