
import { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FavoriteButtonProps {
  kalimaId: number;
  title: string;
}

const FavoriteButton = ({ kalimaId, title }: FavoriteButtonProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('kalima-favorites') || '[]');
    setIsFavorite(favorites.includes(kalimaId));
  }, [kalimaId]);

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('kalima-favorites') || '[]');
    let updatedFavorites;

    if (isFavorite) {
      updatedFavorites = favorites.filter((id: number) => id !== kalimaId);
    } else {
      updatedFavorites = [...favorites, kalimaId];
    }

    localStorage.setItem('kalima-favorites', JSON.stringify(updatedFavorites));
    setIsFavorite(!isFavorite);
  };

  return (
    <Button
      onClick={toggleFavorite}
      variant="ghost"
      size="sm"
      className={`transition-colors ${
        isFavorite ? 'text-red-500 hover:text-red-600' : 'text-gray-400 hover:text-red-500'
      }`}
    >
      <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
    </Button>
  );
};

export default FavoriteButton;
