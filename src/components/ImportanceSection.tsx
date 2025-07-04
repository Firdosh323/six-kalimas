
import { Heart, Shield, Star, BookOpen, Users, Sparkles } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ImportanceSection = () => {
  const importancePoints = [
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Foundation of Faith",
      description: "These declarations establish the core principles that guide every Muslim's spiritual journey.",
      details: "Beginning with the Shahada, these sacred words affirm our belief and commitment to Islamic teachings.",
      color: "bg-red-50 border-red-200"
    },
    {
      icon: <Shield className="w-8 h-8 text-emerald-600" />,
      title: "Spiritual Protection",
      description: "Regular recitation provides spiritual strength and protection from negative influences.",
      details: "These powerful declarations serve as a shield for the heart and mind, bringing peace and clarity.",
      color: "bg-emerald-50 border-emerald-200"
    },
    {
      icon: <Star className="w-8 h-8 text-blue-600" />,
      title: "Path to Paradise",
      description: "Prophet Muhammad (PBUH) taught that sincere recitation opens doors to divine mercy.",
      details: "Each declaration carries profound spiritual weight and brings believers closer to Allah's blessings.",
      color: "bg-blue-50 border-blue-200"
    },
    {
      icon: <BookOpen className="w-8 h-8 text-purple-600" />,
      title: "Complete Education",
      description: "Learning these declarations provides comprehensive understanding of Islamic beliefs.",
      details: "From unity of God to seeking forgiveness, each declaration teaches essential spiritual concepts.",
      color: "bg-purple-50 border-purple-200"
    },
    {
      icon: <Users className="w-8 h-8 text-orange-600" />,
      title: "Global Unity",
      description: "These universal declarations unite Muslims worldwide, creating bonds that transcend cultures.",
      details: "Muslims everywhere learn these same sacred words, fostering shared faith and community.",
      color: "bg-orange-50 border-orange-200"
    },
    {
      icon: <Sparkles className="w-8 h-8 text-pink-600" />,
      title: "Daily Spiritual Practice",
      description: "These declarations serve as powerful remembrance of Allah throughout the day.",
      details: "Regular recitation strengthens faith and provides comfort during both joyful and challenging times.",
      color: "bg-pink-50 border-pink-200"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-amber-50 via-white to-emerald-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why These Declarations Matter
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-4">
            Understanding the profound impact of these sacred declarations on spiritual growth and daily life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {importancePoints.map((point, index) => (
            <Card key={index} className={`${point.color} hover:shadow-xl transition-all duration-300 border-2`}>
              <CardHeader className="pb-4">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white rounded-xl shadow-sm">
                    {point.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {point.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600 italic border-l-4 border-gray-300 pl-4">
                  {point.details}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-emerald-800 to-blue-800 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Transform Your Spiritual Journey
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h4 className="text-xl font-semibold text-emerald-200 mb-3">Inner Peace</h4>
              <p className="text-emerald-100 text-sm leading-relaxed">
                Find tranquility and spiritual balance through regular practice and understanding
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h4 className="text-xl font-semibold text-blue-200 mb-3">Divine Connection</h4>
              <p className="text-blue-100 text-sm leading-relaxed">
                Strengthen your relationship with Allah through these sacred declarations
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h4 className="text-xl font-semibold text-purple-200 mb-3">Spiritual Growth</h4>
              <p className="text-purple-100 text-sm leading-relaxed">
                Deepen your understanding of Islamic teachings and enhance your faith
              </p>
            </div>
          </div>
          <blockquote className="text-lg italic text-emerald-100 border-l-4 border-emerald-300 pl-6 max-w-4xl mx-auto">
            "These sacred declarations are windows to understanding Islamic faith, 
            pathways to spiritual growth, and sources of comfort in our daily lives."
          </blockquote>
        </div>

        <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">
            A Timeless Tradition
          </h3>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              For over fourteen centuries, Muslims have preserved and passed down these sacred declarations. 
              They represent the essence of Islamic belief as revealed in the Quran and taught by Prophet Muhammad (PBUH).
            </p>
            <p className="mb-4">
              Each declaration serves a unique purpose in worship and daily spiritual practice. From affirming 
              faith to seeking divine guidance, these words have provided strength and direction to countless believers.
            </p>
            <p className="text-emerald-800 font-semibold">
              Today, learning these declarations with proper pronunciation and deep understanding remains 
              as important as ever for Muslims seeking to strengthen their faith and spiritual connection.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImportanceSection;
