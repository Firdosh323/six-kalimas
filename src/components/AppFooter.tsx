
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const AppFooter = () => {
  return (
    <footer className="bg-emerald-900 text-white py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-lg flex items-center justify-center">
              <Star className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-xl font-bold">6 Kalimas</h3>
          </div>
          <p className="text-emerald-200 mb-6 leading-relaxed">
            May these sacred declarations strengthen your faith and bring you closer to Allah. 
            Recite them with sincerity and understanding.
          </p>
        </div>
        
        <div className="border-t border-emerald-800 pt-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <div>
              <h4 className="font-semibold mb-3">Features</h4>
              <ul className="space-y-2 text-emerald-200 text-sm">
                <li>Audio Recitation</li>
                <li>Progress Tracking</li>
                <li>Daily Reminders</li>
                <li>Favorites System</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Learn</h4>
              <ul className="space-y-2 text-emerald-200 text-sm">
                <li>Arabic Text</li>
                <li>Transliteration</li>
                <li>English Translation</li>
                <li>Detailed Meanings</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Resources</h4>
              <ul className="space-y-2 text-emerald-200 text-sm">
                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                <li>PDF Downloads</li>
                <li>Mobile Friendly</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Legal</h4>
              <ul className="space-y-2 text-emerald-200 text-sm">
                <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link to="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link></li>
                <li>Terms of Service</li>
                <li>Cookie Policy</li>
              </ul>
            </div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-amber-400 mx-auto rounded-full mb-4"></div>
            <p className="text-emerald-300 text-sm">
              © 2024 6kalimas.com. Made with ❤️ for the Muslim Ummah.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
