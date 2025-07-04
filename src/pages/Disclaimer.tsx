
import Header from '@/components/Header';
import AppFooter from '@/components/AppFooter';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle, Info, Shield, BookOpen } from 'lucide-react';

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
      <Header visitCount={0} onDownloadPDF={() => {}} />
      
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-emerald-800 mb-4">Disclaimer</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Important information about the use of 6kalimas.com
          </p>
        </div>

        <div className="space-y-8">
          <Card className="border-emerald-200">
            <CardHeader>
              <CardTitle className="flex items-center text-emerald-800">
                <AlertTriangle className="w-6 h-6 mr-3 text-emerald-600" />
                General Disclaimer
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                The information provided on 6kalimas.com is for educational and informational purposes only. 
                While we strive to provide accurate and authentic Islamic content, users should verify 
                information with qualified Islamic scholars and authentic sources.
              </p>
              <p>
                This website is not intended to replace formal Islamic education or guidance from 
                qualified religious authorities. Always consult with knowledgeable Islamic scholars 
                for religious guidance and clarification.
              </p>
            </CardContent>
          </Card>

          <Card className="border-emerald-200">
            <CardHeader>
              <CardTitle className="flex items-center text-emerald-800">
                <BookOpen className="w-6 h-6 mr-3 text-emerald-600" />
                Content Accuracy
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                We make every effort to ensure the accuracy of the Arabic text, transliterations, 
                and translations of the 6 Kalimas. However, we cannot guarantee absolute accuracy 
                and recommend cross-referencing with other authentic Islamic sources.
              </p>
              <p>
                The content on this website has been compiled from various Islamic sources and 
                reviewed for accuracy, but users are encouraged to verify information independently.
              </p>
            </CardContent>
          </Card>

          <Card className="border-emerald-200">
            <CardHeader>
              <CardTitle className="flex items-center text-emerald-800">
                <Shield className="w-6 h-6 mr-3 text-emerald-600" />
                Limitation of Liability
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                6kalimas.com and its operators shall not be liable for any direct, indirect, 
                incidental, or consequential damages arising from the use of this website or 
                reliance on its content.
              </p>
              <p>
                Users access and use this website at their own risk. We do not warrant that 
                the website will be error-free, uninterrupted, or free from harmful components.
              </p>
            </CardContent>
          </Card>

          <Card className="border-emerald-200">
            <CardHeader>
              <CardTitle className="flex items-center text-emerald-800">
                <Info className="w-6 h-6 mr-3 text-emerald-600" />
                External Links
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                Our website may contain links to external websites. We are not responsible for 
                the content, accuracy, or availability of external sites. Links are provided 
                for convenience and do not constitute endorsement.
              </p>
              <p>
                Users should exercise caution when visiting external links and review their 
                respective terms and privacy policies.
              </p>
            </CardContent>
          </Card>

          <Card className="border-emerald-200">
            <CardHeader>
              <h2 className="text-2xl font-bold text-emerald-800">
                Educational Purpose
              </h2>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                This website is designed as an educational tool to help Muslims learn and 
                understand the 6 Kalimas. It is not intended to provide religious rulings 
                or serve as a substitute for proper Islamic education.
              </p>
              <p>
                For specific religious questions or guidance, please consult qualified 
                Islamic scholars or educational institutions.
              </p>
            </CardContent>
          </Card>

          <Card className="border-emerald-200">
            <CardHeader>
              <h2 className="text-2xl font-bold text-emerald-800">
                Technical Disclaimer
              </h2>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                While we strive to maintain the website's functionality, we cannot guarantee 
                continuous availability or error-free operation. Technical issues may 
                occasionally affect access to content.
              </p>
              <p>
                We reserve the right to modify, update, or discontinue any part of the 
                website without prior notice.
              </p>
            </CardContent>
          </Card>

          <Card className="border-emerald-200">
            <CardHeader>
              <h2 className="text-2xl font-bold text-emerald-800">
                User Responsibility
              </h2>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                Users are responsible for verifying the accuracy of information before 
                relying on it for religious or educational purposes. We encourage seeking 
                guidance from qualified Islamic teachers and scholars.
              </p>
              <p>
                By using this website, you acknowledge that you have read, understood, 
                and agree to be bound by this disclaimer.
              </p>
            </CardContent>
          </Card>

          <div className="bg-emerald-50 p-6 rounded-lg border border-emerald-200">
            <h3 className="text-lg font-semibold text-emerald-800 mb-3">
              Contact Information
            </h3>
            <p className="text-emerald-700">
              If you have questions about this disclaimer or need clarification about 
              any content on our website, please contact us through our contact page.
            </p>
          </div>
        </div>
      </main>

      <AppFooter />
    </div>
  );
};

export default Disclaimer;
