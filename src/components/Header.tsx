
import { useState } from 'react';
import { Star, Download, BookOpen, Menu, X, Home, Info, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface HeaderProps {
  visitCount: number;
  onDownloadPDF: () => void;
}

const Header = ({ visitCount: _visitCount, onDownloadPDF }: HeaderProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handlePDFDownload = () => {
    const link = document.createElement('a');
    link.href = '/uploads/pdfs/6-kalimas-pdf.pdf';
    link.download = '6-kalimas-complete-guide.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    onDownloadPDF();
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-emerald-100 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity" onClick={() => setMobileOpen(false)}>
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-lg flex items-center justify-center">
              <Star className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold text-emerald-900">6 Kalimas</span>
              <p className="text-xs text-emerald-600 leading-none mt-0.5">Sacred Declarations of Faith</p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center space-x-2">
            <Link to="/">
              <Button variant="ghost" size="sm" className="text-emerald-700 hover:text-emerald-900 hover:bg-emerald-50">
                <Home className="w-4 h-4 mr-1.5" /> Home
              </Button>
            </Link>
            <Link to="/blog">
              <Button variant="ghost" size="sm" className="text-emerald-700 hover:text-emerald-900 hover:bg-emerald-50">
                <BookOpen className="w-4 h-4 mr-1.5" /> Blog
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="ghost" size="sm" className="text-emerald-700 hover:text-emerald-900 hover:bg-emerald-50">
                <Info className="w-4 h-4 mr-1.5" /> About
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="ghost" size="sm" className="text-emerald-700 hover:text-emerald-900 hover:bg-emerald-50">
                <Mail className="w-4 h-4 mr-1.5" /> Contact
              </Button>
            </Link>
            <Button onClick={handlePDFDownload} size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white ml-2">
              <Download className="w-4 h-4 mr-1.5" /> Free PDF
            </Button>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-emerald-700 hover:bg-emerald-50 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <nav className="md:hidden mt-3 pb-3 border-t border-emerald-100 pt-3 flex flex-col space-y-1">
            <Link to="/" onClick={() => setMobileOpen(false)}
              className="flex items-center px-3 py-2 rounded-lg text-emerald-700 hover:bg-emerald-50 font-medium">
              <Home className="w-4 h-4 mr-2" /> Home
            </Link>
            <Link to="/blog" onClick={() => setMobileOpen(false)}
              className="flex items-center px-3 py-2 rounded-lg text-emerald-700 hover:bg-emerald-50 font-medium">
              <BookOpen className="w-4 h-4 mr-2" /> Blog
            </Link>
            <Link to="/about" onClick={() => setMobileOpen(false)}
              className="flex items-center px-3 py-2 rounded-lg text-emerald-700 hover:bg-emerald-50 font-medium">
              <Info className="w-4 h-4 mr-2" /> About
            </Link>
            <Link to="/contact" onClick={() => setMobileOpen(false)}
              className="flex items-center px-3 py-2 rounded-lg text-emerald-700 hover:bg-emerald-50 font-medium">
              <Mail className="w-4 h-4 mr-2" /> Contact
            </Link>
            <button onClick={handlePDFDownload}
              className="flex items-center px-3 py-2 rounded-lg bg-emerald-600 text-white font-medium hover:bg-emerald-700 transition-colors mt-1">
              <Download className="w-4 h-4 mr-2" /> Download Free PDF
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
