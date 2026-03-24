import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, BookOpen, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-50 flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-md">
        {/* Logo */}
        <div className="w-20 h-20 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
          <Star className="w-10 h-10 text-white" />
        </div>

        {/* 404 */}
        <p className="text-8xl font-bold text-emerald-200 leading-none mb-2">404</p>
        <h1 className="text-2xl font-bold text-emerald-900 mb-3">Page Not Found</h1>
        <p className="text-emerald-700 mb-8 leading-relaxed">
          The page you're looking for doesn't exist. Explore the 6 Kalimas or browse our Islamic knowledge blog.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
          <Link to="/">
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white w-full sm:w-auto">
              <Home className="w-4 h-4 mr-2" /> Back to Home
            </Button>
          </Link>
          <Link to="/blog">
            <Button variant="outline" className="border-emerald-200 text-emerald-700 hover:bg-emerald-50 w-full sm:w-auto">
              <BookOpen className="w-4 h-4 mr-2" /> Browse Blog
            </Button>
          </Link>
        </div>

        {/* Quick Kalima links */}
        <p className="text-sm text-emerald-600 font-medium mb-3">Or go directly to a Kalima:</p>
        <div className="grid grid-cols-3 gap-2">
          {[1, 2, 3, 4, 5, 6].map(id => (
            <Link
              key={id}
              to={`/kalima/${id}`}
              className="text-sm bg-white border border-emerald-100 rounded-lg px-3 py-2 text-emerald-700 hover:bg-emerald-50 hover:border-emerald-300 transition-colors"
            >
              Kalima #{id}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotFound;
