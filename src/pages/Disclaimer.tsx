
import { AlertTriangle, Shield, BookOpen, Gavel } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import AppFooter from '@/components/AppFooter';

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
      <Header visitCount={0} onDownloadPDF={() => {}} />
      
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center mb-12">
          <AlertTriangle className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-emerald-800 mb-4">Disclaimer</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Important information about the use of 6kalimas.com
          </p>
        </div>

        <div className="space-y-8">
          <Card className="border-emerald-200">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <BookOpen className="w-8 h-8 text-emerald-600 mr-3" />
                <h2 className="text-2xl font-semibold text-emerald-800">Educational Purpose</h2>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>
                  The content provided on 6kalimas.com is intended for educational and informational 
                  purposes only. This website serves as a digital resource to help Muslims learn and 
                  understand the six fundamental declarations of faith (Kalimas) in Islam.
                </p>
                <p>
                  While we strive to ensure the accuracy and authenticity of all Islamic content 
                  presented on this website, users are encouraged to consult with qualified Islamic 
                  scholars and refer to original sources such as the Quran and authentic Hadith 
                  for comprehensive understanding and verification.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-emerald-200">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Shield className="w-8 h-8 text-emerald-600 mr-3" />
                <h2 className="text-2xl font-semibold text-emerald-800">Content Accuracy</h2>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>Religious Content:</strong> All Kalimas, translations, and transliterations 
                  have been carefully reviewed and cross-referenced with authentic Islamic sources. 
                  However, 6kalimas.com does not claim to be the ultimate authority on Islamic jurisprudence 
                  or religious interpretation.
                </p>
                <p>
                  <strong>Audio Pronunciations:</strong> The audio recitations provided are meant to 
                  assist in learning correct pronunciation. Users are advised to seek guidance from 
                  qualified Quran teachers for perfecting their recitation.
                </p>
                <p>
                  <strong>Translations:</strong> English translations are provided to help non-Arabic 
                  speakers understand the meanings. However, the true essence and complete meaning 
                  can only be fully captured in the original Arabic text.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-emerald-200">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Gavel className="w-8 h-8 text-emerald-600 mr-3" />
                <h2 className="text-2xl font-semibold text-emerald-800">Legal Disclaimers</h2>
              </div>
              <div className="space-y-4 text-gray-700">
                <div>
                  <h3 className="text-lg font-semibold text-emerald-700 mb-2">No Professional Advice</h3>
                  <p>
                    6kalimas.com does not provide religious, legal, or professional advice. The information 
                    on this website should not be used as a substitute for consultation with qualified 
                    Islamic scholars, religious authorities, or professional advisors.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-emerald-700 mb-2">Use at Your Own Risk</h3>
                  <p>
                    The use of information from 6kalimas.com is at your own risk. We make no representations 
                    or warranties of any kind, express or implied, about the completeness, accuracy, 
                    reliability, suitability, or availability of the information, products, services, 
                    or related graphics contained on the website.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-emerald-700 mb-2">Limitation of Liability</h3>
                  <p>
                    In no event will 6kalimas.com, its operators, or contributors be liable for any loss 
                    or damage including without limitation, indirect or consequential loss or damage, 
                    or any loss or damage whatsoever arising from the use of this website.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-emerald-200">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-emerald-800 mb-4">Third-Party Content</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>External Links:</strong> Our website may contain links to other websites of 
                  interest. However, once you have used these links to leave our site, you should note 
                  that we do not have any control over that other website. Therefore, we cannot be 
                  responsible for the protection and privacy of any information which you provide whilst 
                  visiting such sites.
                </p>
                <p>
                  <strong>Google AdSense:</strong> This website uses Google AdSense to display advertisements. 
                  Google uses cookies to serve ads based on your visits to this site and other sites on 
                  the Internet. The ads displayed are selected by Google and may not reflect the views 
                  or endorsements of 6kalimas.com.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-emerald-200">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-emerald-800 mb-4">Modifications and Updates</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>Content Updates:</strong> We reserve the right to modify, update, or remove 
                  any content on 6kalimas.com at any time without prior notice. We continuously strive 
                  to improve the accuracy and quality of our content based on scholarly review and 
                  user feedback.
                </p>
                <p>
                  <strong>Website Availability:</strong> While we endeavor to keep 6kalimas.com available 
                  24/7, we do not guarantee uninterrupted access. The website may be temporarily 
                  unavailable due to maintenance, technical issues, or other factors beyond our control.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-emerald-200">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-emerald-800 mb-4">Contact Information</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  If you have any questions about this disclaimer, concerns about the content, or 
                  suggestions for improvement, please contact us at:
                </p>
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <p><strong>Email:</strong> info@6kalimas.com</p>
                  <p><strong>Support:</strong> support@6kalimas.com</p>
                  <p><strong>Website:</strong> https://6kalimas.com</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="bg-emerald-50 p-6 rounded-lg border border-emerald-200">
            <p className="text-center text-emerald-800 font-semibold">
              Last Updated: December 2024
            </p>
            <p className="text-center text-sm text-emerald-600 mt-2">
              This disclaimer is subject to change without notice. Please review it periodically 
              to stay informed of any updates.
            </p>
          </div>
        </div>
      </main>

      <AppFooter />
    </div>
  );
};

export default Disclaimer;
