
import { BookOpen, Clock, Heart, Users } from 'lucide-react';
import { Card } from '@/components/ui/card';
import DailyReminder from '@/components/DailyReminder';

const Features = () => {
  return (
    <section className="py-12 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <BookOpen className="w-8 h-8 text-blue-600 mx-auto mb-3" />
            <h3 className="font-semibold text-blue-900 mb-2">Complete Learning</h3>
            <p className="text-sm text-blue-700">Arabic, transliteration, and meanings</p>
          </Card>
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <Clock className="w-8 h-8 text-purple-600 mx-auto mb-3" />
            <h3 className="font-semibold text-purple-900 mb-2">Progress Tracking</h3>
            <p className="text-sm text-purple-700">Track your reading progress</p>
          </Card>
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <Heart className="w-8 h-8 text-pink-600 mx-auto mb-3" />
            <h3 className="font-semibold text-pink-900 mb-2">Favorites</h3>
            <p className="text-sm text-pink-700">Save your favorite Kalimas</p>
          </Card>
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <Users className="w-8 h-8 text-green-600 mx-auto mb-3" />
            <h3 className="font-semibold text-green-900 mb-2">Share & Learn</h3>
            <p className="text-sm text-green-700">Share with family and friends</p>
          </Card>
        </div>
        
        <div className="mt-8 max-w-md mx-auto">
          <DailyReminder />
        </div>
      </div>
    </section>
  );
};

export default Features;
