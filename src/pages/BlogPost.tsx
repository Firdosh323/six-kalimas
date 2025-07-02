
import { useParams, Link, Navigate } from 'react-router-dom';
import { Calendar, Clock, User, ArrowLeft, Share2, Bookmark, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import AppFooter from '@/components/AppFooter';
import { blogPosts } from '@/data/blogPosts';
import { useSEO } from '@/hooks/useSEO';
import { useVisitCount } from '@/hooks/useVisitCount';
import { useState, useEffect } from 'react';

const BlogPost = () => {
  const { slug } = useParams();
  const visitCount = useVisitCount();
  const [readingProgress, setReadingProgress] = useState(0);
  const [isBookmarked, setIsBookmarked] = useState(false);
  useSEO();

  const post = blogPosts.find(p => p.slug === slug);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setReadingProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Check if post is bookmarked
    const bookmarks = JSON.parse(localStorage.getItem('bookmarkedPosts') || '[]');
    setIsBookmarked(bookmarks.includes(slug));
  }, [slug]);

  const handleBookmark = () => {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarkedPosts') || '[]');
    if (isBookmarked) {
      const updated = bookmarks.filter((id: string) => id !== slug);
      localStorage.setItem('bookmarkedPosts', JSON.stringify(updated));
    } else {
      bookmarks.push(slug);
      localStorage.setItem('bookmarkedPosts', JSON.stringify(bookmarks));
    }
    setIsBookmarked(!isBookmarked);
  };

  const handleShare = async () => {
    const shareData = {
      title: post?.title,
      text: post?.excerpt,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  const downloadPDF = () => {
    console.log('Downloading PDF guide...');
  };

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && p.tags.some(tag => post.tags.includes(tag)))
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
      {/* Reading Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-emerald-600 z-50 transition-all duration-300"
        style={{ width: `${readingProgress}%` }}
      />
      
      <Header visitCount={visitCount} onDownloadPDF={downloadPDF} />
      
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-emerald-600 mb-8">
          <Link to="/" className="hover:text-emerald-800">Home</Link>
          <span>/</span>
          <Link to="/blog" className="hover:text-emerald-800">Blog</Link>
          <span>/</span>
          <span className="text-emerald-800">{post.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <article className="lg:col-span-3">
            <Card className="border-emerald-200">
              <CardContent className="p-8">
                {/* Article Header */}
                <div className="mb-8">
                  <div className="flex items-center space-x-4 text-sm text-emerald-600 mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  
                  <h1 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-4">
                    {post.title}
                  </h1>
                  
                  <p className="text-xl text-emerald-700 leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="bg-emerald-100 text-emerald-700">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center space-x-4">
                    <Button onClick={handleShare} variant="outline" size="sm">
                      <Share2 className="w-4 h-4 mr-2" />
                      Share
                    </Button>
                    <Button 
                      onClick={handleBookmark} 
                      variant="outline" 
                      size="sm"
                      className={isBookmarked ? 'bg-emerald-100 text-emerald-700' : ''}
                    >
                      <Bookmark className="w-4 h-4 mr-2" />
                      {isBookmarked ? 'Bookmarked' : 'Bookmark'}
                    </Button>
                  </div>
                </div>

                {/* Featured Image */}
                <div className="aspect-video overflow-hidden rounded-lg mb-8">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Article Content */}
                <div className="prose prose-emerald max-w-none">
                  <div className="text-emerald-800 leading-relaxed space-y-6">
                    <p className="text-lg">
                      {post.content || `This comprehensive guide covers everything you need to know about ${post.title.toLowerCase()}. Learn step-by-step instructions, understand the deeper meanings, and discover practical applications in your daily Islamic practice.`}
                    </p>
                    
                    <h2 className="text-2xl font-bold text-emerald-900 mt-8 mb-4">Understanding the Fundamentals</h2>
                    <p>
                      Islamic knowledge forms the foundation of a believer's spiritual journey. Each aspect covered in this guide has been carefully researched and presented according to authentic Islamic sources and scholarly interpretations.
                    </p>
                    
                    <h2 className="text-2xl font-bold text-emerald-900 mt-8 mb-4">Practical Implementation</h2>
                    <p>
                      Learning is most effective when combined with practice. This section provides practical steps and methods to implement these teachings in your daily routine, making your spiritual practice more meaningful and consistent.
                    </p>
                    
                    <h2 className="text-2xl font-bold text-emerald-900 mt-8 mb-4">Benefits and Rewards</h2>
                    <p>
                      Understanding the spiritual benefits and rewards associated with these practices helps strengthen your motivation and connection with Allah. Each practice carries unique blessings that enhance your faith and spiritual well-being.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Related Articles */}
            {relatedPosts.length > 0 && (
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-emerald-900 mb-6">Related Articles</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedPosts.map((relatedPost) => (
                    <Card key={relatedPost.id} className="border-emerald-200 hover:shadow-lg transition-shadow">
                      <div className="aspect-video overflow-hidden rounded-t-lg">
                        <img 
                          src={relatedPost.image} 
                          alt={relatedPost.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-emerald-900 mb-2 line-clamp-2">
                          {relatedPost.title}
                        </h4>
                        <p className="text-sm text-emerald-600 mb-3 line-clamp-2">
                          {relatedPost.excerpt}
                        </p>
                        <Link to={`/blog/${relatedPost.slug}`}>
                          <Button variant="outline" size="sm" className="w-full">
                            Read More
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Back to Blog */}
              <Card className="border-emerald-200">
                <CardContent className="p-4">
                  <Link to="/blog">
                    <Button variant="outline" className="w-full">
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Back to Blog
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Popular Posts */}
              <Card className="border-emerald-200">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-emerald-900 mb-4">Popular Articles</h4>
                  <div className="space-y-3">
                    {blogPosts.slice(0, 4).map((popularPost) => (
                      <Link 
                        key={popularPost.id} 
                        to={`/blog/${popularPost.slug}`}
                        className="block text-sm text-emerald-700 hover:text-emerald-900 line-clamp-2"
                      >
                        {popularPost.title}
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Tags */}
              <Card className="border-emerald-200">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-emerald-900 mb-4">Tags</h4>
                  <div className="flex flex-wrap gap-2">
                    {Array.from(new Set(blogPosts.flatMap(p => p.tags))).slice(0, 12).map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-emerald-100 text-emerald-700 text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </aside>
        </div>
      </main>

      <AppFooter />
    </div>
  );
};

export default BlogPost;
