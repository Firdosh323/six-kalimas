
import { useState, useEffect } from 'react';
import { Wifi, WifiOff } from 'lucide-react';

const OfflineModeIndicator = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (isOnline) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-orange-500 text-white px-4 py-2 rounded-lg shadow-lg flex items-center space-x-2 z-50">
      <WifiOff className="w-4 h-4" />
      <span className="text-sm">Offline Mode</span>
    </div>
  );
};

export default OfflineModeIndicator;
