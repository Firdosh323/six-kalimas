
import { Star, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface HeaderProps {
  visitCount: number;
  onDownloadPDF: () => void;
}

const Header = ({ visitCount, onDownloadPDF }: HeaderProps) => {
  const handlePDFDownload = () => {
    // Create a link to download the PDF from the uploads folder
    const link = document.createElement('a');
    link.href = '/uploads/pdfs/6-kalimas-pdf.pdf';
    link.download = '6-kalimas-complete-guide.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Call the original onDownloadPDF for analytics tracking
    onDownloadPDF();
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-emerald-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-lg flex items-center justify-center">
              <Star className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-emerald-900">6 Kalimas</h1>
              <p className="text-sm text-emerald-600">Sacred Declarations of Faith</p>
            </div>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <span className="text-sm text-emerald-600">Visits: {visitCount.toLocaleString()}</span>
            <Button onClick={handlePDFDownload} variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              PDF Guide
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
