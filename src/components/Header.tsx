
import { Star, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { generateKalimasPDF } from '@/utils/pdfGenerator';

interface HeaderProps {
  visitCount: number;
  onDownloadPDF?: () => void;
}

const Header = ({ visitCount, onDownloadPDF }: HeaderProps) => {
  const handleDownloadPDF = () => {
    if (onDownloadPDF) {
      onDownloadPDF();
    } else {
      generateKalimasPDF();
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-emerald-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-lg flex items-center justify-center">
              <Star className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-emerald-900">6 Kalimas</h1>
              <p className="text-sm text-emerald-600">Sacred Declarations of Faith</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <span className="text-sm text-emerald-600">Visits: {visitCount.toLocaleString()}</span>
            <Button onClick={handleDownloadPDF} variant="outline" size="sm">
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
