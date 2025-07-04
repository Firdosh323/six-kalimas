
import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import AppFooter from '@/components/AppFooter';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
      <Header visitCount={0} onDownloadPDF={() => {}} />
      
      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-emerald-800 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Have questions about the 6 Kalimas or need help with Islamic learning? 
            We're here to assist you on your spiritual journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-emerald-200">
            <CardHeader>
              <CardTitle className="text-2xl text-emerald-800">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-emerald-700 mb-2">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="border-emerald-200 focus:border-emerald-500"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-emerald-700 mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="border-emerald-200 focus:border-emerald-500"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-emerald-700 mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="border-emerald-200 focus:border-emerald-500"
                    placeholder="What is your message about?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-emerald-700 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="border-emerald-200 focus:border-emerald-500"
                    placeholder="Please share your questions or feedback..."
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-emerald-200">
              <CardHeader>
                <CardTitle className="text-2xl text-emerald-800">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-emerald-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-emerald-800">Email</h3>
                    <p className="text-gray-600">contact@6kalimas.com</p>
                    <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-emerald-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-emerald-800">Support</h3>
                    <p className="text-gray-600">Online support available</p>
                    <p className="text-sm text-gray-500">Monday to Friday, 9 AM - 6 PM</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-emerald-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-emerald-800">Community</h3>
                    <p className="text-gray-600">Serving Muslims worldwide</p>
                    <p className="text-sm text-gray-500">Educational content in multiple languages</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-emerald-200 bg-gradient-to-r from-emerald-50 to-emerald-100">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-emerald-800 mb-4">
                  Islamic Learning Support
                </h3>
                <p className="text-emerald-700 mb-4">
                  Our team is dedicated to helping you understand and memorize the 6 Kalimas. 
                  Whether you're a beginner or looking to deepen your knowledge, we're here to guide you.
                </p>
                <ul className="space-y-2 text-emerald-600">
                  <li>• Questions about Kalima meanings</li>
                  <li>• Memorization techniques and tips</li>
                  <li>• Islamic education resources</li>
                  <li>• Technical website support</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-emerald-800 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-emerald-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-emerald-800 mb-3">
                  How can I learn the correct pronunciation?
                </h3>
                <p className="text-gray-700">
                  Each Kalima page includes transliteration to help with pronunciation. 
                  Practice slowly and listen to native Arabic speakers when possible.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-emerald-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-emerald-800 mb-3">
                  Are the translations authentic?
                </h3>
                <p className="text-gray-700">
                  Yes, all translations are verified against authentic Islamic sources 
                  and reviewed by knowledgeable Muslims to ensure accuracy.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-emerald-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-emerald-800 mb-3">
                  Can I download content for offline use?
                </h3>
                <p className="text-gray-700">
                  Yes, we provide PDF downloads of all 6 Kalimas that you can 
                  save for offline study and reference.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-emerald-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-emerald-800 mb-3">
                  Is this website suitable for children?
                </h3>
                <p className="text-gray-700">
                  Absolutely! Our content is family-friendly and designed to help 
                  Muslims of all ages learn and understand the Kalimas.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <AppFooter />
    </div>
  );
};

export default Contact;
