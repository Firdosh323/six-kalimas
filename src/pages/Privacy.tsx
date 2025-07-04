
import Header from '@/components/Header';
import AppFooter from '@/components/AppFooter';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Eye, Cookie, Database, Lock } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
      <Header visitCount={0} onDownloadPDF={() => {}} />
      
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-emerald-800 mb-4">Privacy Policy</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Your privacy is important to us. Learn how we protect your information.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Last updated: January 2024
          </p>
        </div>

        <div className="space-y-8">
          <Card className="border-emerald-200">
            <CardHeader>
              <CardTitle className="flex items-center text-emerald-800">
                <Shield className="w-6 h-6 mr-3 text-emerald-600" />
                Our Commitment to Privacy
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                At 6kalimas.com, we are committed to protecting your privacy and ensuring 
                the security of your personal information. This privacy policy explains how 
                we collect, use, and protect information when you use our website.
              </p>
              <p>
                We believe in transparency and want you to understand exactly what information 
                we collect and how we use it to improve your learning experience.
              </p>
            </CardContent>
          </Card>

          <Card className="border-emerald-200">
            <CardHeader>
              <CardTitle className="flex items-center text-emerald-800">
                <Database className="w-6 h-6 mr-3 text-emerald-600" />
                Information We Collect
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <h3 className="font-semibold text-emerald-800">Information You Provide</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Contact information when you reach out to us</li>
                <li>Feedback and comments you submit</li>
                <li>Any other information you voluntarily provide</li>
              </ul>
              
              <h3 className="font-semibold text-emerald-800">Information Automatically Collected</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Basic usage statistics (page views, time spent)</li>
                <li>Device and browser information</li>
                <li>IP address and general location</li>
                <li>Referral sources</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-emerald-200">
            <CardHeader>
              <CardTitle className="flex items-center text-emerald-800">
                <Eye className="w-6 h-6 mr-3 text-emerald-600" />
                How We Use Your Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide and improve our educational content</li>
                <li>Respond to your questions and feedback</li>
                <li>Understand how our website is used</li>
                <li>Improve website performance and user experience</li>
                <li>Ensure website security and prevent abuse</li>
              </ul>
              <p className="font-semibold text-emerald-800">
                We do not sell, trade, or rent your personal information to third parties.
              </p>
            </CardContent>
          </Card>

          <Card className="border-emerald-200">
            <CardHeader>
              <CardTitle className="flex items-center text-emerald-800">
                <Cookie className="w-6 h-6 mr-3 text-emerald-600" />
                Cookies and Tracking
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                We use cookies and similar technologies to enhance your browsing experience 
                and understand how our website is used.
              </p>
              
              <h3 className="font-semibold text-emerald-800">Types of Cookies We Use:</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Essential Cookies:</strong> Required for website functionality</li>
                <li><strong>Analytics Cookies:</strong> Help us understand website usage</li>
                <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
              </ul>
              
              <p>
                You can control cookies through your browser settings. However, disabling 
                certain cookies may affect website functionality.
              </p>
            </CardContent>
          </Card>

          <Card className="border-emerald-200">
            <CardHeader>
              <CardTitle className="flex items-center text-emerald-800">
                <Lock className="w-6 h-6 mr-3 text-emerald-600" />
                Data Security
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                We implement appropriate security measures to protect your information against 
                unauthorized access, alteration, disclosure, or destruction.
              </p>
              
              <h3 className="font-semibold text-emerald-800">Security Measures Include:</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Encrypted data transmission (HTTPS)</li>
                <li>Secure server infrastructure</li>
                <li>Regular security updates and monitoring</li>
                <li>Limited access to personal information</li>
              </ul>
              
              <p>
                While we strive to protect your information, no method of transmission over 
                the internet is 100% secure. We cannot guarantee absolute security.
              </p>
            </CardContent>
          </Card>

          <Card className="border-emerald-200">
            <CardHeader>
              <CardTitle className="text-emerald-800">
                Third-Party Services
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                Our website may use third-party services for analytics, hosting, and other 
                functionality. These services have their own privacy policies.
              </p>
              
              <h3 className="font-semibold text-emerald-800">Third-Party Services May Include:</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Web hosting providers</li>
                <li>Analytics services</li>
                <li>Content delivery networks</li>
              </ul>
              
              <p>
                We encourage you to review the privacy policies of any third-party services 
                you interact with through our website.
              </p>
            </CardContent>
          </Card>

          <Card className="border-emerald-200">
            <CardHeader>
              <CardTitle className="text-emerald-800">
                Your Rights and Choices
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access information we have about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt out of certain communications</li>
                <li>Disable cookies through your browser</li>
              </ul>
              
              <p>
                To exercise these rights or if you have questions about your privacy, 
                please contact us through our contact page.
              </p>
            </CardContent>
          </Card>

          <Card className="border-emerald-200">
            <CardHeader>
              <CardTitle className="text-emerald-800">
                Children's Privacy
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                Our website is family-friendly and suitable for all ages. We do not knowingly 
                collect personal information from children under 13 without parental consent.
              </p>
              <p>
                If you are a parent and believe your child has provided personal information, 
                please contact us so we can remove such information.
              </p>
            </CardContent>
          </Card>

          <Card className="border-emerald-200">
            <CardHeader>
              <CardTitle className="text-emerald-800">
                Changes to This Policy
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                We may update this privacy policy from time to time to reflect changes in 
                our practices or legal requirements. We will notify users of significant 
                changes by posting a notice on our website.
              </p>
              <p>
                Your continued use of our website after changes are posted constitutes 
                acceptance of the updated privacy policy.
              </p>
            </CardContent>
          </Card>

          <div className="bg-emerald-50 p-6 rounded-lg border border-emerald-200">
            <h3 className="text-lg font-semibold text-emerald-800 mb-3">
              Contact Us About Privacy
            </h3>
            <p className="text-emerald-700">
              If you have questions about this privacy policy or how we handle your 
              information, please contact us through our contact page. We're committed 
              to addressing your privacy concerns promptly.
            </p>
          </div>
        </div>
      </main>

      <AppFooter />
    </div>
  );
};

export default Privacy;
