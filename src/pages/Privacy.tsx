
import { Shield, Eye, Cookie, Database, Lock, UserCheck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import AppFooter from '@/components/AppFooter';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
      <Header visitCount={0} onDownloadPDF={() => {}} />
      
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center mb-12">
          <Shield className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-emerald-800 mb-4">Privacy Policy</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            How we protect and handle your information at 6kalimas.com
          </p>
        </div>

        <div className="space-y-8">
          <Card className="border-emerald-200">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <UserCheck className="w-8 h-8 text-emerald-600 mr-3" />
                <h2 className="text-2xl font-semibold text-emerald-800">Our Commitment to Privacy</h2>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>
                  At 6kalimas.com, we are committed to protecting your privacy and ensuring the 
                  security of any personal information you may provide. This Privacy Policy explains 
                  how we collect, use, disclose, and safeguard your information when you visit our 
                  website.
                </p>
                <p>
                  <strong>Effective Date:</strong> This Privacy Policy is effective as of December 2024 
                  and applies to all users of 6kalimas.com.
                </p>
                <p>
                  <strong>Contact Information:</strong> If you have questions about this Privacy Policy, 
                  please contact us at privacy@6kalimas.com.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-emerald-200">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Database className="w-8 h-8 text-emerald-600 mr-3" />
                <h2 className="text-2xl font-semibold text-emerald-800">Information We Collect</h2>
              </div>
              <div className="space-y-4 text-gray-700">
                <div>
                  <h3 className="text-lg font-semibold text-emerald-700 mb-2">Information You Provide</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Contact information when you reach out to us via our contact form</li>
                    <li>Email address if you subscribe to updates or newsletters</li>
                    <li>Feedback, comments, or suggestions you provide</li>
                    <li>Any other information you voluntarily provide</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-emerald-700 mb-2">Automatically Collected Information</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Browser type and version</li>
                    <li>Operating system information</li>
                    <li>IP address (anonymized)</li>
                    <li>Pages visited on our website</li>
                    <li>Time and date of visits</li>
                    <li>Referring website information</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-emerald-700 mb-2">Information We Do NOT Collect</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Personal religious practices or beliefs</li>
                    <li>Financial information or payment details</li>
                    <li>Sensitive personal identifiers</li>
                    <li>Location data beyond general geographic region</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-emerald-200">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Eye className="w-8 h-8 text-emerald-600 mr-3" />
                <h2 className="text-2xl font-semibold text-emerald-800">How We Use Your Information</h2>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>We use the information we collect for the following purposes:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-emerald-700 mb-2">Website Improvement</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Analyze user behavior and preferences</li>
                      <li>• Improve website functionality</li>
                      <li>• Optimize content delivery</li>
                    </ul>
                  </div>
                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-emerald-700 mb-2">Communication</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Respond to your inquiries</li>
                      <li>• Send updates about the website</li>
                      <li>• Provide technical support</li>
                    </ul>
                  </div>
                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-emerald-700 mb-2">Legal Compliance</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Comply with applicable laws</li>
                      <li>• Protect against fraud</li>
                      <li>• Enforce our terms of service</li>
                    </ul>
                  </div>
                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-emerald-700 mb-2">Analytics</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Understand usage patterns</li>
                      <li>• Measure website performance</li>
                      <li>• Generate anonymous statistics</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-emerald-200">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Cookie className="w-8 h-8 text-emerald-600 mr-3" />
                <h2 className="text-2xl font-semibold text-emerald-800">Cookies and Tracking Technologies</h2>
              </div>
              <div className="space-y-4 text-gray-700">
                <div>
                  <h3 className="text-lg font-semibold text-emerald-700 mb-2">What Are Cookies?</h3>
                  <p>
                    Cookies are small text files stored on your device when you visit our website. 
                    They help us provide you with a better browsing experience and understand how 
                    you use our website.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-emerald-700 mb-2">Types of Cookies We Use</h3>
                  <div className="space-y-3">
                    <div className="border-l-4 border-emerald-300 pl-4">
                      <h4 className="font-semibold">Essential Cookies</h4>
                      <p className="text-sm">Required for basic website functionality and cannot be disabled.</p>
                    </div>
                    <div className="border-l-4 border-emerald-300 pl-4">
                      <h4 className="font-semibold">Analytics Cookies</h4>
                      <p className="text-sm">Help us understand how visitors interact with our website (Google Analytics).</p>
                    </div>
                    <div className="border-l-4 border-emerald-300 pl-4">
                      <h4 className="font-semibold">Advertising Cookies</h4>
                      <p className="text-sm">Used by Google AdSense to display relevant advertisements.</p>
                    </div>
                    <div className="border-l-4 border-emerald-300 pl-4">
                      <h4 className="font-semibold">Preference Cookies</h4>
                      <p className="text-sm">Remember your settings to enhance your user experience.</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-emerald-700 mb-2">Managing Cookies</h3>
                  <p>
                    You can control and manage cookies through your browser settings. However, 
                    disabling certain cookies may affect the functionality of 6kalimas.com.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-emerald-200">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Lock className="w-8 h-8 text-emerald-600 mr-3" />
                <h2 className="text-2xl font-semibold text-emerald-800">Third-Party Services</h2>
              </div>
              <div className="space-y-4 text-gray-700">
                <div>
                  <h3 className="text-lg font-semibold text-emerald-700 mb-2">Google Analytics</h3>
                  <p>
                    We use Google Analytics to analyze website traffic and user behavior. Google Analytics 
                    collects information anonymously and reports website trends without identifying 
                    individual visitors. You can opt-out of Google Analytics by installing the 
                    <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" 
                       className="text-emerald-600 hover:underline"> Google Analytics Opt-out Browser Add-on</a>.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-emerald-700 mb-2">Google AdSense</h3>
                  <p>
                    6kalimas.com uses Google AdSense to display advertisements. Google may use cookies 
                    to serve ads based on your visits to this and other websites. You can manage your 
                    ad preferences and opt-out of personalized advertising by visiting 
                    <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" 
                       className="text-emerald-600 hover:underline"> Google's Ad Settings</a>.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-emerald-700 mb-2">External Links</h3>
                  <p>
                    Our website may contain links to external websites. We are not responsible for 
                    the privacy practices of these third-party sites and encourage you to review 
                    their privacy policies.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-emerald-200">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-emerald-800 mb-4">Your Rights and Choices</h2>
              <div className="space-y-4 text-gray-700">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-emerald-700 mb-2">Access</h4>
                    <p className="text-sm">Request access to personal information we hold about you.</p>
                  </div>
                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-emerald-700 mb-2">Correction</h4>
                    <p className="text-sm">Request correction of inaccurate personal information.</p>
                  </div>
                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-emerald-700 mb-2">Deletion</h4>
                    <p className="text-sm">Request deletion of your personal information.</p>
                  </div>
                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-emerald-700 mb-2">Opt-out</h4>
                    <p className="text-sm">Opt-out of marketing communications at any time.</p>
                  </div>
                </div>
                <p className="text-center">
                  <strong>To exercise these rights, contact us at:</strong> privacy@6kalimas.com
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-emerald-200">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-emerald-800 mb-4">Data Security</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  We implement appropriate technical and organizational security measures to protect 
                  your personal information against unauthorized access, alteration, disclosure, or 
                  destruction. These measures include:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>SSL encryption for data transmission</li>
                  <li>Regular security assessments</li>
                  <li>Access controls and authentication</li>
                  <li>Data minimization practices</li>
                  <li>Regular backups and recovery procedures</li>
                </ul>
                <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
                  <p className="text-amber-800">
                    <strong>Note:</strong> While we strive to protect your personal information, 
                    no method of transmission over the Internet or electronic storage is 100% secure. 
                    We cannot guarantee absolute security.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-emerald-200">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-emerald-800 mb-4">Children's Privacy</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  6kalimas.com is designed to be family-friendly and educational for users of all ages, 
                  including children learning Islamic fundamentals. However, we do not knowingly collect 
                  personal information from children under 13 years of age without parental consent.
                </p>
                <p>
                  If you are a parent or guardian and believe your child has provided personal information 
                  to us, please contact us at privacy@6kalimas.com, and we will delete such information 
                  from our records.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-emerald-200">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-emerald-800 mb-4">International Users</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  6kalimas.com serves users globally. If you are accessing our website from outside 
                  the jurisdiction where our servers are located, please be aware that your information 
                  may be transferred to, stored, and processed in countries with different privacy laws.
                </p>
                <p>
                  By using our website, you consent to the transfer of your information to our facilities 
                  and those third parties with whom we share it as described in this Privacy Policy.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-emerald-200">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-emerald-800 mb-4">Changes to This Privacy Policy</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  We may update this Privacy Policy from time to time to reflect changes in our 
                  practices or for other operational, legal, or regulatory reasons. We will notify 
                  you of any material changes by:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Posting the updated Privacy Policy on this page</li>
                  <li>Updating the "Last Updated" date</li>
                  <li>Sending an email notification (if you have provided your email address)</li>
                </ul>
                <p>
                  We encourage you to review this Privacy Policy periodically to stay informed 
                  about how we protect your information.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="bg-emerald-50 p-6 rounded-lg border border-emerald-200">
            <div className="text-center">
              <h3 className="text-xl font-bold text-emerald-800 mb-4">Contact Information</h3>
              <div className="space-y-2 text-emerald-700">
                <p><strong>Privacy Officer:</strong> privacy@6kalimas.com</p>
                <p><strong>General Inquiries:</strong> info@6kalimas.com</p>
                <p><strong>Website:</strong> https://6kalimas.com</p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-emerald-200">
              <p className="text-center text-emerald-800 font-semibold">
                Last Updated: December 2024
              </p>
              <p className="text-center text-sm text-emerald-600 mt-2">
                This Privacy Policy may be updated periodically. Please check this page regularly 
                for the most current version.
              </p>
            </div>
          </div>
        </div>
      </main>

      <AppFooter />
    </div>
  );
};

export default Privacy;
