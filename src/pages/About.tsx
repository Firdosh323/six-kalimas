
import { Star, Heart, BookOpen, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import AppFooter from '@/components/AppFooter';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
      <Header visitCount={0} onDownloadPDF={() => {}} />
      
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-emerald-800 mb-4">About 6 Kalimas</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Your trusted companion for learning and understanding the sacred 6 Kalimas of Islam
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="border-emerald-200">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Heart className="w-8 h-8 text-emerald-600 mr-3" />
                <h2 className="text-2xl font-semibold text-emerald-800">Our Mission</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                At 6kalimas.com, we are dedicated to making Islamic knowledge accessible to Muslims worldwide. 
                Our mission is to provide authentic, accurate, and easily understandable content about the 
                six fundamental declarations of faith in Islam, helping believers strengthen their connection with Allah.
              </p>
            </CardContent>
          </Card>

          <Card className="border-emerald-200">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <BookOpen className="w-8 h-8 text-emerald-600 mr-3" />
                <h2 className="text-2xl font-semibold text-emerald-800">Our Vision</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                We envision a world where every Muslim has easy access to authentic Islamic teachings. 
                Through 6kalimas.com, we aim to bridge the gap between traditional Islamic education and 
                modern digital learning, making it simple for people of all ages to learn and memorize the Kalimas.
              </p>
            </CardContent>
          </Card>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-emerald-800 mb-6 text-center">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-emerald-100">
              <Star className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-emerald-800">Authentic Content</h3>
              <p className="text-gray-600">
                All Kalimas are presented with original Arabic text, accurate transliterations, 
                and verified English translations from trusted Islamic sources.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-emerald-100">
              <Users className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-emerald-800">Audio Pronunciation</h3>
              <p className="text-gray-600">
                High-quality audio recitations help you learn the correct pronunciation 
                of each Kalima, making memorization easier and more effective.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-emerald-100">
              <BookOpen className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-emerald-800">Educational Resources</h3>
              <p className="text-gray-600">
                Comprehensive explanations, meanings, and benefits of each Kalima 
                to deepen your understanding of these sacred declarations.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12 bg-white p-8 rounded-lg shadow-sm border border-emerald-100">
          <h2 className="text-3xl font-bold text-emerald-800 mb-6 text-center">Why Choose 6kalimas.com?</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-emerald-700 mb-2">Scholarly Accuracy</h3>
              <p className="text-gray-700">
                Our content is reviewed by Islamic scholars and verified against authentic sources 
                including the Quran and Sunnah to ensure complete accuracy and authenticity.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-emerald-700 mb-2">User-Friendly Design</h3>
              <p className="text-gray-700">
                We've designed 6kalimas.com with simplicity in mind, making it easy for users of all 
                ages and technical backgrounds to navigate and learn from our content.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-emerald-700 mb-2">Free Access</h3>
              <p className="text-gray-700">
                We believe Islamic knowledge should be freely accessible to all. That's why 
                6kalimas.com is completely free to use, with no hidden fees or premium subscriptions.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-emerald-700 mb-2">Mobile Optimized</h3>
              <p className="text-gray-700">
                Access the 6 Kalimas anytime, anywhere. Our website is fully optimized for mobile 
                devices, tablets, and desktops for seamless learning on any platform.
              </p>
            </div>
          </div>
        </section>

        <section className="text-center bg-emerald-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-emerald-800 mb-4">Join Our Community</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Become part of the growing community of Muslims using 6kalimas.com to strengthen their faith. 
            Start your journey of learning and memorizing the sacred Kalimas today.
          </p>
          <Link to="/">
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3">
              Start Learning Now
            </Button>
          </Link>
        </section>
      </main>

      <AppFooter />
    </div>
  );
};

export default About;
