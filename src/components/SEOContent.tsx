
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Volume2, BookOpen, Heart, Users } from 'lucide-react';

const SEOContent = () => {
  return (
    <>
      {/* Hidden structured content for SEO */}
      <div style={{ display: 'none' }}>
        <h1>Six Kalimas of Islam - Complete Islamic Learning Guide</h1>
        <p>Learn the essential Islamic declarations with Arabic text, English translations, and pronunciation guides for spiritual growth and understanding.</p>
        
        {/* Educational content markup */}
        <div itemScope itemType="https://schema.org/LearningResource">
          <meta itemProp="learningResourceType" content="Islamic Education" />
          <meta itemProp="educationalLevel" content="All Levels" />
          <meta itemProp="teaches" content="Islamic Kalimas and Declarations" />
        </div>
      </div>

      {/* Visible SEO-optimized content */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 via-white to-emerald-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Learn the 6 Kalimas with Audio?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              The Six Kalimas are fundamental Islamic declarations that every Muslim should know. 
              Our audio-guided learning approach makes it easy to master proper pronunciation and understand deep meanings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="bg-white border-emerald-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center pb-3">
                <Volume2 className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
                <CardTitle className="text-lg text-emerald-900">Perfect Pronunciation</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 text-sm">
                  Learn correct Arabic pronunciation with native speaker audio for each of the 6 Kalimas
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center pb-3">
                <BookOpen className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <CardTitle className="text-lg text-blue-900">Complete Meanings</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 text-sm">
                  Understand the deep spiritual significance and English translation of each Kalima
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-purple-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center pb-3">
                <Heart className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                <CardTitle className="text-lg text-purple-900">Spiritual Growth</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 text-sm">
                  Strengthen your Islamic faith through daily recitation and memorization
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-orange-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center pb-3">
                <Users className="w-8 h-8 text-orange-600 mx-auto mb-3" />
                <CardTitle className="text-lg text-orange-900">Global Community</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 text-sm">
                  Join millions of Muslims worldwide who learn and recite these sacred declarations
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-emerald-800 to-blue-800 rounded-2xl p-8 text-white">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                The Six Kalimas Every Muslim Should Know
              </h3>
              <p className="text-emerald-100 text-lg max-w-4xl mx-auto">
                These sacred Islamic declarations have been recited by Muslims for over 1400 years. 
                Each Kalima serves a unique purpose in Islamic worship and spiritual development.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h4 className="text-xl font-semibold text-emerald-200 mb-3">1st & 2nd Kalima</h4>
                <p className="text-emerald-100 text-sm leading-relaxed">
                  Kalima Tayyibah and Shahadat - The foundation of Islamic faith and testimony
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h4 className="text-xl font-semibold text-blue-200 mb-3">3rd & 4th Kalima</h4>
                <p className="text-blue-100 text-sm leading-relaxed">
                  Kalima Tamjeed and Tawheed - Glorification and unity of Allah
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h4 className="text-xl font-semibold text-purple-200 mb-3">5th & 6th Kalima</h4>
                <p className="text-purple-100 text-sm leading-relaxed">
                  Kalima Istighfar and Radde Kufr - Seeking forgiveness and rejecting disbelief
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">
              How to Learn Kalimas with Our Audio Guide
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-emerald-800 mb-3">Step-by-Step Learning</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• Listen to perfect Arabic pronunciation</li>
                  <li>• Read along with transliteration</li>
                  <li>• Understand English translation</li>
                  <li>• Practice daily recitation</li>
                  <li>• Track your memorization progress</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-emerald-800 mb-3">Benefits of Audio Learning</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• Correct pronunciation from day one</li>
                  <li>• Better retention and memorization</li>
                  <li>• Authentic Arabic accent learning</li>
                  <li>• Convenient mobile-friendly access</li>
                  <li>• Self-paced learning experience</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SEOContent;
