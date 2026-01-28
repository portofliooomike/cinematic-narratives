import { useState } from "react";
import { motion } from "framer-motion";

interface VideoSectionProps {
  youtubeId: string;
  className?: string;
  variant?: "dark" | "light";
}

export const VideoSection = ({ 
  youtubeId, 
  className = "",
  variant = "dark"
}: VideoSectionProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const containerClass = variant === "light" 
    ? "video-container video-container-light" 
    : "video-container";

  return (
    <motion.div 
      className={`${containerClass} ${className}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {!isPlaying ? (
        <motion.div
          className="video-overlay"
          onClick={handlePlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Film grain texture overlay */}
          <div 
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            }}
          />
          
          <motion.div 
            className="play-button"
            animate={{ 
              scale: isHovered ? 1.1 : 1,
              boxShadow: isHovered 
                ? "0 0 60px hsla(40, 20%, 94%, 0.2)" 
                : "0 0 30px hsla(40, 20%, 94%, 0.05)"
            }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <polygon points="6,4 18,12 6,20" />
            </svg>
          </motion.div>
          
          {/* "Watch" hint text */}
          <motion.span
            className="absolute bottom-6 left-0 right-0 text-center text-xs tracking-[0.2em] uppercase"
            style={{ 
              color: variant === "light" 
                ? "hsl(30 5% 30% / 0.5)" 
                : "hsl(30 5% 60% / 0.5)" 
            }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
            transition={{ duration: 0.3 }}
          >
            Watch Film
          </motion.span>
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
    </motion.div>
  );
};

export default VideoSection;
