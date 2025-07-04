
import { Calendar, CheckCircle, Target, Users2, Sunrise, Moon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const PracticalGuidanceSection = () => {
  const practicalTips = [
    {
      icon: <Calendar className="w-6 h-6 text-emerald-600" />,
      title: "Daily Practice Routine",
      content: "Create a consistent daily schedule for recitation. Start with 10 minutes each morning and evening, gradually increasing as you become more comfortable with the declarations."
    },
    {
      icon: <Target className="w-6 h-6 text-blue-600" />,
      title: "Setting Realistic Goals",
      content: "Begin with one Kalima per week. Focus on understanding the meaning deeply before moving to the next. Quality of understanding is more important than speed of memorization."
    },
    {
      icon: <Users2 className="w-6 h-6 text-purple-600" />,
      title: "Learning with Family",
      content: "Practice together as a family. Children learn better through group recitation, and adults can support each other's learning journey while strengthening family bonds."
    }
  ];

  const dailyIntegration = [
    {
      time: "Morning (Fajr time)",
      icon: <Sunrise className="w-5 h-5 text-amber-500" />,
      practice: "Recite 1st and 2nd Kalima",
      benefit: "Start your day with faith affirmation and spiritual clarity"
    },
    {
      time: "Evening (Maghrib time)",
      icon: <Moon className="w-5 h-5 text-indigo-500" />,
      practice: "Recite 5th Kalima (Istighfar)",
      benefit: "End your day seeking forgiveness and spiritual purification"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-emerald-50 to-blue-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Practical Learning Guidance
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Step-by-step guidance for integrating Islamic declarations into your daily life and spiritual practice
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {practicalTips.map((tip, index) => (
            <Card key={index} className="bg-white hover:shadow-lg transition-shadow border border-gray-200">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-3 p-3 bg-gray-50 rounded-full w-fit">
                  {tip.icon}
                </div>
                <CardTitle className="text-lg text-gray-900">
                  {tip.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed text-center">
                  {tip.content}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Integrating Declarations into Daily Prayer Times
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dailyIntegration.map((item, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
                <div className="p-2 bg-white rounded-lg shadow-sm">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 mb-2">{item.time}</h4>
                  <p className="text-emerald-700 font-medium mb-2">{item.practice}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-emerald-100 to-blue-100 rounded-2xl p-8">
          <div className="text-center mb-6">
            <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Building Sustainable Habits
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Weekly Learning Plan</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                  <span>Week 1-2: Master 1st and 2nd Kalima</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span>Week 3-4: Learn 3rd and 4th Kalima</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span>Week 5-6: Complete with 5th and 6th Kalima</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Success Indicators</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>Reciting with understanding, not just memorization</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>Feeling spiritual connection during recitation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>Natural integration into daily prayers</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticalGuidanceSection;
