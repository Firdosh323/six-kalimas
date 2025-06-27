
import { useState, useEffect } from 'react';
import { Type, Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const FontSizeControl = () => {
  const [fontSize, setFontSize] = useState(16);

  useEffect(() => {
    const savedSize = localStorage.getItem('font-size');
    if (savedSize) {
      const size = parseInt(savedSize);
      setFontSize(size);
      document.documentElement.style.setProperty('--font-size-arabic', `${size}px`);
    }
  }, []);

  const adjustFontSize = (delta: number) => {
    const newSize = Math.max(12, Math.min(32, fontSize + delta));
    setFontSize(newSize);
    localStorage.setItem('font-size', newSize.toString());
    document.documentElement.style.setProperty('--font-size-arabic', `${newSize}px`);
  };

  return (
    <Card className="bg-gradient-to-r from-gray-50 to-slate-50 border-gray-200">
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Type className="w-5 h-5 text-gray-600" />
            <span className="font-semibold text-gray-900">Font Size</span>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              onClick={() => adjustFontSize(-2)}
              variant="outline"
              size="sm"
              disabled={fontSize <= 12}
            >
              <Minus className="w-3 h-3" />
            </Button>
            <span className="text-sm font-medium w-8 text-center">{fontSize}</span>
            <Button
              onClick={() => adjustFontSize(2)}
              variant="outline"
              size="sm"
              disabled={fontSize >= 32}
            >
              <Plus className="w-3 h-3" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FontSizeControl;
