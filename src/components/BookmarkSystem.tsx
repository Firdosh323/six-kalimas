
import { useState, useEffect } from 'react';
import { Bookmark, BookmarkCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface BookmarkSystemProps {
  kalimaId: number;
  title: string;
}

const BookmarkSystem = ({ kalimaId, title }: BookmarkSystemProps) => {
  const [bookmarks, setBookmarks] = useState<number[]>([]);
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    const savedBookmarks = JSON.parse(localStorage.getItem('kalima-bookmarks') || '[]');
    setBookmarks(savedBookmarks);
    setIsBookmarked(savedBookmarks.includes(kalimaId));
  }, [kalimaId]);

  const toggleBookmark = () => {
    let updatedBookmarks;
    if (isBookmarked) {
      updatedBookmarks = bookmarks.filter(id => id !== kalimaId);
    } else {
      updatedBookmarks = [...bookmarks, kalimaId];
    }
    
    setBookmarks(updatedBookmarks);
    setIsBookmarked(!isBookmarked);
    localStorage.setItem('kalima-bookmarks', JSON.stringify(updatedBookmarks));
  };

  return (
    <Button
      onClick={toggleBookmark}
      variant="outline"
      size="sm"
      className={`transition-colors ${
        isBookmarked ? 'bg-yellow-50 border-yellow-300 text-yellow-700' : 'border-gray-300'
      }`}
    >
      {isBookmarked ? <BookmarkCheck className="w-4 h-4 mr-2" /> : <Bookmark className="w-4 h-4 mr-2" />}
      {isBookmarked ? 'Bookmarked' : 'Bookmark'}
    </Button>
  );
};

export default BookmarkSystem;
