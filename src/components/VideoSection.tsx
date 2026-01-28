import { useState } from "react";
import { motion } from "framer-motion";

interface VideoSectionProps {
  youtubeId: string;
  className?: string;
}

export const VideoSection = ({ youtubeId, className = "" }: VideoSectionProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className={`video-container ${className}`}>
      {!isPlaying ? (
        <motion.div
          className="video-overlay"
          onClick={handlePlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          whileHover={{ backgroundColor: "hsl(0 0% 4%)" }}
        >
          <div className="play-button">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <polygon points="5,3 19,12 5,21" />
            </svg>
          </div>
        </motion.div>
      ) : (
        <motion.iframe
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1`}
          title="Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      )}
    </div>
  );
};

export default VideoSection;
