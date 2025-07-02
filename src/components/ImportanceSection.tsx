
import { Heart, Shield, Star, BookOpen, Users, Sparkles } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ImportanceSection = () => {
  const importancePoints = [
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Foundation of Islamic Faith",
      description: "The 6 Kalimas form the bedrock of Islamic belief, establishing the fundamental principles every Muslim must know and understand.",
      details: "Starting with the Kalima Tayyibah (1st Kalima), these declarations strengthen our connection with Allah and affirm our faith in Islam.",
      color: "bg-red-50 border-red-200"
    },
    {
      icon: <Shield className="w-8 h-8 text-emerald-600" />,
      title: "Spiritual Protection & Purification",
      description: "Regular recitation of all 6 Kalimas provides spiritual protection and purifies the heart from negative influences.",
      details: "The 5th Kalima (Istighfar) specifically seeks Allah's forgiveness, while the 6th Kalima (Radde Kufr) protects from disbelief.",
      color: "bg-emerald-50 border-emerald-200"
    },
    {
      icon: <Star className="w-8 h-8 text-blue-600" />,
      title: "Path to Paradise",
      description: "The Prophet Muhammad (PBUH) emphasized that sincere recitation of these Kalimas opens the doors to Jannah (Paradise).",
      details: "Each Kalima carries immense spiritual weight and brings the believer closer to Allah's mercy and blessings.",
      color: "bg-blue-50 border-blue-200"
    },
    {
      icon: <BookOpen className="w-8 h-8 text-purple-600" />,
      title: "Complete Islamic Education",
      description: "Learning all 6 Kalimas provides comprehensive Islamic education covering Tawheed, Prophethood, and essential beliefs.",
      details: "From the 2nd Kalima (Shahadat) to the 4th Kalima (Tawheed), each declaration teaches crucial Islamic concepts.",
      color: "bg-purple-50 border-purple-200"
    },
    {
      icon: <Users className="w-8 h-8 text-orange-600" />,
      title: "Unity of Muslim Ummah",
      description: "These universal declarations unite Muslims worldwide, regardless of language, culture, or nationality.",
      details: "Every Muslim, from children to adults, learns these same Kalimas, creating a bond of faith across the global Muslim community.",
      color: "bg-orange-50 border-orange-200"
    },
    {
      icon: <Sparkles className="w-8 h-8 text-pink-600" />,
      title: "Daily Spiritual Strength",
      description: "Regular recitation of the 6 Kalimas provides daily spiritual nourishment and strengthens one's relationship with Allah.",
      details: "These sacred words serve as powerful dhikr (remembrance of Allah) that can be recited throughout the day for spiritual benefit.",
      color: "bg-pink-50 border-pink-200"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-amber-50 via-white to-emerald-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Importance of 6 Kalimas in Islam
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-4">
            Discover why these six sacred declarations are essential for every Muslim's spiritual journey
          </p>
          <p className="text-emerald-600 font-medium">
            🕌 Strengthen Your Faith • 📿 Daily Spiritual Practice • 🌟 Path to Paradise
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
                    <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                      {point.title}
                    </CardTitle>
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
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            The Profound Impact of 6 Kalimas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h4 className="text-xl font-semibold text-emerald-200 mb-3">Spiritual Growth</h4>
              <p className="text-emerald-100 text-sm leading-relaxed">
                Regular recitation of all 6 Kalimas elevates spiritual consciousness and brings inner peace
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h4 className="text-xl font-semibold text-blue-200 mb-3">Divine Connection</h4>
              <p className="text-blue-100 text-sm leading-relaxed">
                These sacred declarations strengthen the bond between the believer and Allah Almighty
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h4 className="text-xl font-semibold text-purple-200 mb-3">Islamic Identity</h4>
              <p className="text-purple-100 text-sm leading-relaxed">
                Learning the 6 Kalimas reinforces Islamic identity and deepens understanding of faith
              </p>
            </div>
          </div>
          <blockquote className="text-lg italic text-emerald-100 border-l-4 border-emerald-300 pl-6 max-w-4xl mx-auto">
            "The importance of 6 Kalimas in Islam cannot be overstated - they are the keys to understanding 
            our faith, the foundation of our beliefs, and the pathway to Allah's mercy and blessings."
          </blockquote>
        </div>

        <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">
            Historical Significance of the 6 Kalimas
          </h3>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The tradition of learning and reciting the 6 Kalimas has been passed down through generations 
              of Muslims for over 1400 years. These declarations encapsulate the essence of Islamic teachings 
              as revealed in the Holy Quran and practiced by Prophet Muhammad (PBUH).
            </p>
            <p className="mb-4">
              Each of the six Kalimas serves a specific purpose in Islamic worship and daily life. From the 
              fundamental declaration of faith in the 1st Kalima to the protection prayer in the 6th Kalima, 
              these sacred words have guided millions of Muslims throughout history.
            </p>
            <p className="text-emerald-800 font-semibold">
              Today, learning the 6 Kalimas with audio assistance and understanding their meanings has become 
              more accessible than ever, allowing Muslims worldwide to connect with their faith more deeply.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImportanceSection;
