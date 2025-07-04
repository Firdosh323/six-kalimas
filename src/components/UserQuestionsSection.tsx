
import { MessageCircle, HelpCircle, Clock, Book } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const UserQuestionsSection = () => {
  const commonQuestions = [
    {
      category: "Learning & Practice",
      icon: <Book className="w-5 h-5 text-blue-600" />,
      questions: [
        {
          q: "How long does it take to memorize all six Kalimas?",
          a: "With consistent daily practice (15-20 minutes), most people can memorize all six Kalimas within 4-6 weeks. The key is understanding the meaning first, which makes memorization much easier."
        },
        {
          q: "Should I learn Arabic script or focus on transliteration first?",
          a: "Start with transliteration to get comfortable with pronunciation, then gradually learn Arabic script. Understanding the meaning should always come first, regardless of which script you use."
        },
        {
          q: "What's the best time of day to recite these declarations?",
          a: "While they can be recited anytime, many Muslims find morning (after Fajr) and evening (after Maghrib) particularly spiritually beneficial. The key is consistency rather than specific timing."
        }
      ]
    },
    {
      category: "Spiritual Understanding",
      icon: <MessageCircle className="w-5 h-5 text-emerald-600" />,
      questions: [
        {
          q: "Do I need to understand Arabic to benefit from reciting Kalimas?",
          a: "While understanding Arabic enhances the experience, sincere recitation with knowledge of the English meaning is spiritually beneficial. Many non-Arabic speaking Muslims find deep connection through translation."
        },
        {
          q: "Can children learn these declarations effectively?",
          a: "Yes! Children often learn faster when taught through stories, songs, and repetition. Focus on making it enjoyable and explain the meanings in simple terms they can understand."
        },
        {
          q: "How do these declarations strengthen faith in daily life?",
          a: "Regular recitation serves as spiritual anchors throughout the day, reminding you of your beliefs during both challenging and joyful moments, providing comfort and guidance."
        }
      ]
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Your Questions Answered
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Real questions from learners like you, answered with practical guidance and Islamic wisdom
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {commonQuestions.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="bg-gradient-to-br from-gray-50 to-white border border-gray-200">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center space-x-3 text-xl">
                  {category.icon}
                  <span>{category.category}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {category.questions.map((item, index) => (
                  <div key={index} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                    <div className="flex items-start space-x-3 mb-3">
                      <HelpCircle className="w-4 h-4 text-gray-500 mt-1 flex-shrink-0" />
                      <h4 className="font-semibold text-gray-900 leading-relaxed">
                        {item.q}
                      </h4>
                    </div>
                    <p className="text-gray-600 leading-relaxed pl-7">
                      {item.a}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-50 to-emerald-50 rounded-2xl p-8 text-center">
          <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Learning Timeline & Expectations
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">Week 1-2</div>
              <p className="text-gray-700 text-sm">Focus on understanding meanings and basic pronunciation</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-600 mb-2">Week 3-4</div>
              <p className="text-gray-700 text-sm">Build memorization through daily repetition and practice</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600 mb-2">Week 5-6</div>
              <p className="text-gray-700 text-sm">Perfect pronunciation and integrate into daily prayers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserQuestionsSection;
