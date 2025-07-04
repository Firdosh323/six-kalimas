
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, FileText, Globe } from 'lucide-react';
import { generateSitemap, generateRobotsTxt } from '@/utils/generateSitemap';
import { toast } from 'sonner';

const SitemapGenerator = () => {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerateSitemap = async () => {
    setIsGenerating(true);
    try {
      const sitemap = generateSitemap();
      toast.success('Sitemap generated and downloaded successfully!');
    } catch (error) {
      toast.error('Failed to generate sitemap');
      console.error('Sitemap generation error:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleGenerateRobots = () => {
    try {
      const robotsTxt = generateRobotsTxt();
      
      // Download robots.txt
      const blob = new Blob([robotsTxt], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'robots.txt';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      
      toast.success('robots.txt generated and downloaded successfully!');
    } catch (error) {
      toast.error('Failed to generate robots.txt');
      console.error('robots.txt generation error:', error);
    }
  };

  const handleViewSitemap = () => {
    const sitemap = generateSitemap();
    const newWindow = window.open();
    if (newWindow) {
      newWindow.document.write(`<pre>${sitemap}</pre>`);
      newWindow.document.title = 'Generated Sitemap';
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Globe className="w-5 h-5" />
          <span>SEO Tools</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button 
            onClick={handleGenerateSitemap}
            disabled={isGenerating}
            className="flex items-center space-x-2"
          >
            <Download className="w-4 h-4" />
            <span>{isGenerating ? 'Generating...' : 'Download Sitemap'}</span>
          </Button>
          
          <Button 
            onClick={handleViewSitemap}
            variant="outline"
            className="flex items-center space-x-2"
          >
            <FileText className="w-4 h-4" />
            <span>View Sitemap</span>
          </Button>
          
          <Button 
            onClick={handleGenerateRobots}
            variant="outline"
            className="flex items-center space-x-2"
          >
            <Download className="w-4 h-4" />
            <span>Download robots.txt</span>
          </Button>
        </div>
        
        <div className="text-sm text-gray-600 space-y-2">
          <p><strong>Sitemap includes:</strong></p>
          <ul className="list-disc list-inside space-y-1 text-xs">
            <li>Homepage (priority 1.0, daily updates)</li>
            <li>All 6 individual Kalima pages (priority 0.9, monthly updates)</li>
            <li>Blog section (priority 0.8, weekly updates)</li>
            <li>About, Contact pages (priority 0.7-0.6, monthly updates)</li>
            <li>Legal pages (priority 0.3, yearly updates)</li>
          </ul>
          <p className="text-xs mt-2">
            <strong>Note:</strong> Upload the generated sitemap.xml to your website root directory and submit it to Google Search Console for better indexing.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default SitemapGenerator;
