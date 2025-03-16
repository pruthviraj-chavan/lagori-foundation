
import { FC } from 'react';

interface YouTubeVideoProps {
  videoId: string;
  title: string;
  description: string;
  duration: string;
}

const YouTubeVideo: FC<YouTubeVideoProps> = ({ videoId, title, description, duration }) => {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-lg">
      <div className="relative aspect-video group">
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="p-5">
        <h3 className="font-playfair text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-white/70 mb-4">{description}</p>
        <div className="flex items-center text-lagori-200">
          <span className="text-sm">{duration}</span>
        </div>
      </div>
    </div>
  );
};

export default YouTubeVideo;
