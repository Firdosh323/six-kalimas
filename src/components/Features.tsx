
import { BookOpen, Clock, Heart, Users } from 'lucide-react';
import { Card } from '@/components/ui/card';
import DailyReminder from '@/components/DailyReminder';

const Features = () => {
  return (
    <section className="py-12 px-4 bg-gradient-to-r from-emerald-50 to-teal-50">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center p-6 hover:shadow-lg transition-shadow border-emerald-100">
            <BookOpen className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
            <h3 className="font-semibold text-emerald-900 mb-2">Complete Learning</h3>
            <p className="text-sm text-emerald-700">Arabic, transliteration, and meanings</p>
          </Card>
          <Card className="text-center p-6 hover:shadow-lg transition-shadow border-emerald-100">
            <Clock className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
            <h3 className="font-semibold text-emerald-900 mb-2">Progress Tracking</h3>
            <p className="text-sm text-emerald-700">Track your reading progress</p>
          </Card>
          <Card className="text-center p-6 hover:shadow-lg transition-shadow border-emerald-100">
            <Heart className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
            <h3 className="font-semibold text-emerald-900 mb-2">Favorites</h3>
            <p className="text-sm text-emerald-700">Save your favorite Kalimas</p>
          </Card>
          <Card className="text-center p-6 hover:shadow-lg transition-shadow border-emerald-100">
            <Users className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
            <h3 className="font-semibold text-emerald-900 mb-2">Share & Learn</h3>
            <p className="text-sm text-emerald-700">Share with family and friends</p>
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
