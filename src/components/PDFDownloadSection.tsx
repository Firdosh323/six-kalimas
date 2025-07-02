
import { Download, FileText, Star, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface PDFDownloadSectionProps {
  onDownloadPDF: () => void;
}

const PDFDownloadSection = ({ onDownloadPDF }: PDFDownloadSectionProps) => {
  const features = [
    "Complete Arabic text of all 6 Kalimas",
    "English translations and transliterations", 
    "Detailed meanings and explanations",
    "Pronunciation guides for each Kalima",
    "Memorization tips and techniques",
    "Printable format for offline learning"
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-r from-emerald-900 to-blue-900 text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <FileText className="w-8 h-8 text-emerald-300" />
            <h2 className="text-3xl md:text-4xl font-bold">
              6 Kalimas PDF Download
            </h2>
          </div>
          <p className="text-xl text-emerald-100 mb-2">
            Get Your Complete 6 Kalimas Guide in PDF Format
          </p>
          <p className="text-emerald-200">
            Perfect for printing, offline study, and sharing with family
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <Card className="bg-white/10 backdrop-blur-sm border-emerald-300/30">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Star className="w-6 h-6 text-yellow-400 mr-2" />
                  What's Included in Your 6 Kalima PDF?
                </h3>
                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-emerald-300 mt-0.5 flex-shrink-0" />
                      <span className="text-emerald-100">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center lg:text-left">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-emerald-300/30">
              <h3 className="text-2xl font-bold mb-4">
                Download Your Free 6 Kalimas PDF Guide
              </h3>
              <p className="text-emerald-100 mb-6 leading-relaxed">
                This comprehensive PDF contains all six Kalimas with Arabic text, English translations,
                and detailed explanations. Perfect for students, teachers, and anyone wanting to learn 
                the essential Islamic declarations of faith.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-emerald-200">
                  <CheckCircle className="w-5 h-5" />
                  <span>High-quality printable format</span>
                </div>
                <div className="flex items-center space-x-2 text-emerald-200">
                  <CheckCircle className="w-5 h-5" />
                  <span>Works offline on any device</span>
                </div>
                <div className="flex items-center space-x-2 text-emerald-200">
                  <CheckCircle className="w-5 h-5" />
                  <span>Free download, no registration required</span>
                </div>
              </div>

              <Button 
                onClick={onDownloadPDF}
                className="mt-8 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                size="lg"
              >
                <Download className="w-6 h-6 mr-3" />
                Download 6 Kalma PDF Now
              </Button>
              
              <p className="text-sm text-emerald-300 mt-4">
                ⭐ Trusted by 100,000+ Muslims worldwide
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white/5 rounded-xl p-6 max-w-4xl mx-auto">
            <h4 className="text-xl font-semibold text-emerald-200 mb-3">
              Why Choose Our 6 Kalimas PDF Download?
            </h4>
            <p className="text-emerald-100 leading-relaxed">
              Our 6 Kalimas PDF is the most comprehensive guide available online. Created by Islamic scholars 
              and educators, it combines traditional Islamic knowledge with modern learning techniques. 
              Whether you're a beginner or looking to perfect your recitation, this PDF guide provides 
              everything you need to master all six Kalimas with confidence and understanding.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PDFDownloadSection;
