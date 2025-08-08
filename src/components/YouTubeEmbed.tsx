import { AspectRatio } from "@/components/ui/aspect-ratio";

interface YouTubeEmbedProps {
  videoId: string;
  title?: string;
}

const YouTubeEmbed = ({ videoId, title = "6 Kalimas Video Guide" }: YouTubeEmbedProps) => {
  const src = `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`;
  return (
    <div className="rounded-xl overflow-hidden border border-emerald-100 shadow-sm bg-white">
      <AspectRatio ratio={16 / 9}>
        <iframe
          src={src}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-full"
        />
      </AspectRatio>
    </div>
  );
};

export default YouTubeEmbed;
