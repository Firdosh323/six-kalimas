
import { useState } from 'react';
import { Share2, Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ShareButtonProps {
  kalimaId: number;
  title: string;
}

const ShareButton = ({ kalimaId, title }: ShareButtonProps) => {
  const [copied, setCopied] = useState(false);

  const shareUrl = `${window.location.origin}#kalima-${kalimaId}`;

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${title} - 6 Kalimas of Islam`,
          text: `Learn about ${title} from the 6 Sacred Kalimas of Islam`,
          url: shareUrl,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback to copying to clipboard
      try {
        await navigator.clipboard.writeText(shareUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (error) {
        console.log('Error copying to clipboard:', error);
      }
    }
  };

  return (
    <Button
      onClick={handleShare}
      variant="outline"
      size="sm"
      className="border-emerald-200 text-emerald-700 hover:bg-emerald-50"
    >
      {copied ? (
        <Check className="w-4 h-4 mr-2" />
      ) : navigator.share ? (
        <Share2 className="w-4 h-4 mr-2" />
      ) : (
        <Copy className="w-4 h-4 mr-2" />
      )}
      {copied ? 'Copied!' : 'Share'}
    </Button>
  );
};

export default ShareButton;
