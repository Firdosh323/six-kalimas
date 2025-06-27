
import { Mail, Phone, MapPin, Clock, MessageSquare } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Header from '@/components/Header';
import AppFooter from '@/components/AppFooter';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
      <Header visitCount={0} onDownloadPDF={() => {}} />
      
      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-emerald-800 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            We're here to help you on your journey of learning the 6 Kalimas of Islam
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-emerald-200">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold text-emerald-800 mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-emerald-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-emerald-700">Email Us</h3>
                      <p className="text-gray-600">info@6kalimas.com</p>
                      <p className="text-sm text-gray-500 mt-1">
                        For general inquiries, feedback, or technical support
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <MessageSquare className="w-6 h-6 text-emerald-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-emerald-700">Support</h3>
                      <p className="text-gray-600">support@6kalimas.com</p>
                      <p className="text-sm text-gray-500 mt-1">
                        Technical issues, suggestions, or content corrections
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-emerald-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-emerald-700">Response Time</h3>
                      <p className="text-gray-600">Within 24-48 hours</p>
                      <p className="text-sm text-gray-500 mt-1">
                        We strive to respond to all inquiries promptly
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-emerald-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-emerald-700">Service Area</h3>
                      <p className="text-gray-600">Global - Serving Muslims Worldwide</p>
                      <p className="text-sm text-gray-500 mt-1">
                        Available in multiple languages and time zones
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-emerald-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-emerald-800 mb-4">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-emerald-700">How can I report an error?</h4>
                    <p className="text-sm text-gray-600">
                      Please email us at support@6kalimas.com with details about the error you found.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-emerald-700">Can I suggest new features?</h4>
                    <p className="text-sm text-gray-600">
                      Absolutely! We welcome all suggestions to improve 6kalimas.com for our users.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-emerald-700">Is the content verified by scholars?</h4>
                    <p className="text-sm text-gray-600">
                      Yes, all our content is reviewed by qualified Islamic scholars for accuracy.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="border-emerald-200">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold text-emerald-800 mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="border-emerald-200 focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className="border-emerald-200 focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Brief description of your inquiry"
                      className="border-emerald-200 focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please provide details about your inquiry..."
                      rows={6}
                      className="border-emerald-200 focus:border-emerald-500"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3"
                  >
                    Send Message
                  </Button>
                </form>

                <div className="mt-6 p-4 bg-emerald-50 rounded-lg">
                  <p className="text-sm text-emerald-700">
                    <strong>Note:</strong> We respect your privacy and will never share your personal 
                    information with third parties. Your message will be handled confidentially and 
                    used solely for responding to your inquiry.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <section className="mt-12 text-center bg-white p-8 rounded-lg shadow-sm border border-emerald-100">
          <h2 className="text-2xl font-bold text-emerald-800 mb-4">Other Ways to Connect</h2>
          <p className="text-gray-700 mb-6">
            Stay updated with the latest features and Islamic content from 6kalimas.com
          </p>
          <div className="flex justify-center space-x-4">
            <Button variant="outline" className="border-emerald-300 text-emerald-700 hover:bg-emerald-50">
              Subscribe to Updates
            </Button>
            <Button variant="outline" className="border-emerald-300 text-emerald-700 hover:bg-emerald-50">
              Join Our Community
            </Button>
          </div>
        </section>
      </main>

      <AppFooter />
    </div>
  );
};

export default Contact;
