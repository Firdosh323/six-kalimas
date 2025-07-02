
import { Brain, Clock, Repeat, BookOpen, Volume2, Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const MemorizationTips = () => {
  const tips = [
    {
      icon: <Repeat className="w-6 h-6 text-blue-600" />,
      title: "Daily Repetition Method",
      description: "Recite each Kalima 10-15 times daily. Start with the 1st Kalima and gradually add more. Consistency is key to memorizing all 6 Kalimas effectively.",
      color: "bg-blue-50 border-blue-200"
    },
    {
      icon: <Volume2 className="w-6 h-6 text-emerald-600" />,
      title: "Audio Learning Technique",
      description: "Listen to Arabic audio recitations while reading. Use our Kalima with audio feature to perfect pronunciation and memorize through repetitive listening.",
      color: "bg-emerald-50 border-emerald-200"
    },
    {
      icon: <Brain className="w-6 h-6 text-purple-600" />,
      title: "Meaning-Based Memory",
      description: "Understand the English translation first. When you know what each Kalima means, memorizing the Arabic text becomes much easier and more meaningful.",
      color: "bg-purple-50 border-purple-200"
    },
    {
      icon: <Clock className="w-6 h-6 text-orange-600" />,
      title: "Time-Spaced Learning",
      description: "Practice for 15-20 minutes sessions with breaks. Review previously memorized Kalimas before learning new ones. This prevents forgetting.",
      color: "bg-orange-50 border-orange-200"
    },
    {
      icon: <BookOpen className="w-6 h-6 text-indigo-600" />,
      title: "Write and Practice",
      description: "Write each Kalima in Arabic script repeatedly. Physical writing helps reinforce memory patterns and improves retention of all 6 Kalimas.",
      color: "bg-indigo-50 border-indigo-200"
    },
    {
      icon: <Target className="w-6 h-6 text-pink-600" />,
      title: "Progressive Goals",
      description: "Set weekly targets: Week 1-2 (1st & 2nd Kalima), Week 3-4 (3rd & 4th), Week 5-6 (5th & 6th). Celebrate each milestone achieved.",
      color: "bg-pink-50 border-pink-200"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Easy Way to Memorize 6 Kalimas
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-2">
            Master all six Kalimas with proven memorization techniques used by millions of Muslims worldwide
          </p>
          <p className="text-emerald-600 font-medium">
            ✨ Perfect for beginners • Audio-assisted learning • Step-by-step guidance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {tips.map((tip, index) => (
            <Card key={index} className={`${tip.color} hover:shadow-lg transition-all duration-300 border-2`}>
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-2 bg-white rounded-lg shadow-sm">
                    {tip.icon}
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-900">
                    {tip.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  {tip.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-emerald-100 to-blue-100 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Complete Memorization Timeline
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <h4 className="font-semibold text-emerald-800 mb-2">Weeks 1-2</h4>
              <p className="text-sm text-gray-700">Master 1st & 2nd Kalima with audio assistance</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <h4 className="font-semibold text-blue-800 mb-2">Weeks 3-4</h4>
              <p className="text-sm text-gray-700">Learn 3rd & 4th Kalima through repetition</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <h4 className="font-semibold text-purple-800 mb-2">Weeks 5-6</h4>
              <p className="text-sm text-gray-700">Complete 5th & 6th Kalima memorization</p>
            </div>
          </div>
          <p className="text-gray-600 italic">
            "The easy way to memorize 6 Kalimas is through consistent practice and understanding their beautiful meanings"
          </p>
        </div>
      </div>
    </section>
  );
};

export default MemorizationTips;
