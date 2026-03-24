
import { Trophy, BookOpen, Users, Clock } from 'lucide-react';

interface StatisticsProps {
  visitCount: number;
}

const Statistics = ({ visitCount }: StatisticsProps) => {
  return (
    <section className="py-16 px-4 bg-emerald-50">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold text-emerald-900 mb-8">Learning Statistics</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-emerald-100">
            <Trophy className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-emerald-900">{visitCount.toLocaleString()}</div>
            <div className="text-sm text-emerald-700">Total Visits</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-emerald-100">
            <BookOpen className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-emerald-900">6</div>
            <div className="text-sm text-emerald-700">Sacred Kalimas</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-emerald-100">
            <Users className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-emerald-900">1.8B+</div>
            <div className="text-sm text-emerald-700">Muslims Worldwide</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-emerald-100">
            <Clock className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-emerald-900">1400+</div>
            <div className="text-sm text-emerald-700">Years of History</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
