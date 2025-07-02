
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Volume2, BookOpen, Download } from 'lucide-react';

interface ContextualLinksProps {
  type: 'quick-navigation' | 'learning-resources' | 'audio-features';
  currentKalimaId?: number;
}

const ContextualLinks = ({ type, currentKalimaId }: ContextualLinksProps) => {
  if (type === 'quick-navigation') {
    return (
      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
        <CardContent className="p-6">
          <h3 className="font-bold text-blue-900 mb-4 flex items-center">
            <ArrowRight className="w-5 h-5 mr-2" />
            Quick Navigation
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            <Link 
              to="/" 
              className="flex items-center p-2 bg-white/80 rounded-lg hover:bg-white transition-colors text-sm"
            >
              <BookOpen className="w-4 h-4 mr-2 text-blue-600" />
              All 6 Kalimas
            </Link>
            <Link 
              to="/#audio-features" 
              className="flex items-center p-2 bg-white/80 rounded-lg hover:bg-white transition-colors text-sm"
            >
              <Volume2 className="w-4 h-4 mr-2 text-blue-600" />
              Audio Guide
            </Link>
            <Link 
              to="/#pdf-download" 
              className="flex items-center p-2 bg-white/80 rounded-lg hover:bg-white transition-colors text-sm"
            >
              <Download className="w-4 h-4 mr-2 text-blue-600" />
              PDF Download
            </Link>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (type === 'learning-resources') {
    return (
      <Card className="bg-gradient-to-r from-emerald-50 to-green-50 border-emerald-200">
        <CardContent className="p-6">
          <h3 className="font-bold text-emerald-900 mb-4 flex items-center">
            <BookOpen className="w-5 h-5 mr-2" />
            Islamic Learning Resources
          </h3>
          <div className="space-y-3">
            <Link 
              to="/#memorization-tips" 
              className="flex items-center justify-between p-3 bg-white/80 rounded-lg hover:bg-white transition-colors"
            >
              <span className="text-sm font-medium text-emerald-800">
                🧠 Easy way to memorize 6 Kalimas
              </span>
              <ArrowRight className="w-4 h-4 text-emerald-600" />
            </Link>
            <Link 
              to="/#importance-section" 
              className="flex items-center justify-between p-3 bg-white/80 rounded-lg hover:bg-white transition-colors"
            >
              <span className="text-sm font-medium text-emerald-800">
                📖 Importance of 6 Kalimas in Islam
              </span>
              <ArrowRight className="w-4 h-4 text-emerald-600" />
            </Link>
            <Link 
              to="/#faq" 
              className="flex items-center justify-between p-3 bg-white/80 rounded-lg hover:bg-white transition-colors"
            >
              <span className="text-sm font-medium text-emerald-800">
                ❓ Frequently Asked Questions
              </span>
              <ArrowRight className="w-4 h-4 text-emerald-600" />
            </Link>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (type === 'audio-features') {
    return (
      <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
        <CardContent className="p-6">
          <h3 className="font-bold text-purple-900 mb-4 flex items-center">
            <Volume2 className="w-5 h-5 mr-2" />
            Audio Learning Features
          </h3>
          <div className="space-y-3">
            <div className="p-3 bg-white/80 rounded-lg">
              <p className="text-sm font-medium text-purple-800 mb-1">
                🎵 Perfect Arabic Pronunciation
              </p>
              <p className="text-xs text-purple-600">
                Listen to native Arabic recitation for each Kalima
              </p>
            </div>
            <div className="p-3 bg-white/80 rounded-lg">
              <p className="text-sm font-medium text-purple-800 mb-1">
                🔄 Repeat & Practice Mode
              </p>
              <p className="text-xs text-purple-600">
                Loop audio for better memorization
              </p>
            </div>
            <div className="p-3 bg-white/80 rounded-lg">
              <p className="text-sm font-medium text-purple-800 mb-1">
                📱 Mobile-Friendly Audio
              </p>
              <p className="text-xs text-purple-600">
                Learn anywhere with responsive audio controls
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return null;
};

export default ContextualLinks;
