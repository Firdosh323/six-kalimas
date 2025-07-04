
import { BookOpen, Heart, Star, Users, Lightbulb, Shield } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const IslamicTeachingsSection = () => {
  const teachings = [
    {
      icon: <Heart className="w-6 h-6 text-rose-600" />,
      question: "What is the spiritual significance of reciting Kalimas?",
      answer: "Reciting Kalimas purifies the heart and strengthens your connection with Allah. Each declaration serves as a spiritual cleansing that removes doubt and reinforces faith.",
      details: "When you recite these sacred words with understanding and sincerity, they become a form of dhikr (remembrance) that brings peace to the soul and clarity to the mind."
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-amber-600" />,
      question: "How do the Six Kalimas guide daily Islamic practice?",
      answer: "The Kalimas provide a framework for Islamic belief and practice, from affirming faith to seeking forgiveness and protection from spiritual harm.",
      details: "They serve as daily reminders of core Islamic principles: monotheism, prophethood, gratitude, repentance, and reliance on Allah's guidance."
    },
    {
      icon: <Shield className="w-6 h-6 text-emerald-600" />,
      question: "Why is understanding the meaning important, not just memorization?",
      answer: "Understanding transforms mechanical recitation into heartfelt worship. When you know what you're saying, each word becomes a conscious act of devotion.",
      details: "The Prophet (PBUH) emphasized that Allah looks at our hearts and intentions. Meaningful recitation with understanding creates deeper spiritual impact than mere memorization."
    },
    {
      icon: <Users className="w-6 h-6 text-blue-600" />,
      question: "How do these declarations unite the global Muslim community?",
      answer: "These universal declarations create bonds that transcend cultural and linguistic differences, uniting believers worldwide in shared faith and purpose.",
      details: "From Indonesia to Morocco, Muslims recite these same sacred words, creating a sense of unity and brotherhood that spans continents and cultures."
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Understanding Islamic Teachings
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Discover answers to common questions about the spiritual significance and practical application of Islamic declarations in daily life
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {teachings.map((teaching, index) => (
            <Card key={index} className="bg-white hover:shadow-xl transition-all duration-300 border border-slate-200">
              <CardHeader className="pb-4">
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-slate-100 rounded-lg">
                    {teaching.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                      {teaching.question}
                    </h3>
                    <p className="text-slate-700 leading-relaxed">
                      {teaching.answer}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="bg-slate-50 rounded-lg p-4 border-l-4 border-slate-300">
                  <p className="text-slate-600 text-sm italic leading-relaxed">
                    {teaching.details}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Begin Your Learning Journey
              </h3>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Start with understanding rather than memorization. Focus on the meaning of each declaration, 
                then gradually work on proper pronunciation and regular recitation.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <Star className="w-4 h-4 text-amber-500" />
                  <span className="text-sm text-slate-700">Read translations carefully</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="w-4 h-4 text-amber-500" />
                  <span className="text-sm text-slate-700">Practice with audio guidance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="w-4 h-4 text-amber-500" />
                  <span className="text-sm text-slate-700">Reflect on spiritual meanings</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-emerald-100 to-blue-100 rounded-xl p-6">
              <BookOpen className="w-12 h-12 text-emerald-600 mb-4" />
              <h4 className="text-lg font-semibold text-slate-900 mb-2">
                Educational Approach
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Our platform combines traditional Islamic scholarship with modern learning methods, 
                making these sacred teachings accessible to learners of all backgrounds and levels.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IslamicTeachingsSection;
