
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User, ArrowRight, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import AppFooter from '@/components/AppFooter';
import { blogPosts } from '@/data/blogPosts';
import { useSEO } from '@/hooks/useSEO';
import { useVisitCount } from '@/hooks/useVisitCount';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);
  const visitCount = useVisitCount();
  useSEO();

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim() === '') {
      setFilteredPosts(blogPosts);
    } else {
      const filtered = blogPosts.filter(post => 
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(query.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
      );
      setFilteredPosts(filtered);
    }
  };

  const downloadPDF = () => {
    console.log('Downloading PDF guide...');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
      <Header visitCount={visitCount} onDownloadPDF={downloadPDF} />
      
      <main className="container mx-auto px-4 py-8">
        {/* Blog Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-4">
            Islamic Knowledge Blog
          </h1>
          <p className="text-xl text-emerald-700 mb-8">
            Comprehensive guides on Islamic prayers, duas, and spiritual practices
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-emerald-500 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search Islamic topics..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="pl-10 border-emerald-200 focus:border-emerald-500"
            />
          </div>
        </div>

        {/* Featured Post */}
        {filteredPosts.length > 0 && (
          <div className="mb-12">
            <Card className="overflow-hidden border-emerald-200 hover:shadow-lg transition-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="aspect-video lg:aspect-square overflow-hidden">
                  <img 
                    src={filteredPosts[0].image} 
                    alt={filteredPosts[0].title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 text-sm text-emerald-600 mb-4">
                    <span className="bg-emerald-100 px-3 py-1 rounded-full">Featured</span>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{filteredPosts[0].date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{filteredPosts[0].readTime}</span>
                    </div>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-emerald-900 mb-4">
                    {filteredPosts[0].title}
                  </h2>
                  <p className="text-emerald-700 mb-6 text-lg leading-relaxed">
                    {filteredPosts[0].excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {filteredPosts[0].tags.map((tag, index) => (
                      <span key={index} className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button className="w-fit bg-emerald-600 hover:bg-emerald-700">
                    Read Full Article <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>
        )}

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.slice(1).map((post) => (
            <Card key={post.id} className="overflow-hidden border-emerald-200 hover:shadow-lg transition-shadow group">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center space-x-4 text-sm text-emerald-600 mb-2">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <CardTitle className="text-emerald-900 group-hover:text-emerald-700 transition-colors">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-emerald-700 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag, index) => (
                    <span key={index} className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <Button variant="outline" className="w-full border-emerald-200 text-emerald-700 hover:bg-emerald-50">
                  Read More <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-emerald-600 text-lg">No articles found matching your search.</p>
            <Button 
              onClick={() => handleSearch('')}
              variant="outline" 
              className="mt-4 border-emerald-200 text-emerald-700"
            >
              Clear Search
            </Button>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-r from-emerald-600 to-emerald-800 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Stay Updated with Islamic Knowledge</h3>
          <p className="text-emerald-100 mb-6">
            Get the latest articles on Islamic prayers, duas, and spiritual guidance delivered to your inbox.
          </p>
          <Link to="/">
            <Button className="bg-white text-emerald-700 hover:bg-emerald-50">
              Explore More Islamic Content
            </Button>
          </Link>
        </div>
      </main>

      <AppFooter />
    </div>
  );
};

export default Blog;
