import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface StoryTextProps {
  lines: string[];
  className?: string;
  staggerDelay?: number;
}

export const StoryText = ({
  lines,
  className = "",
  staggerDelay = 0.3,
}: StoryTextProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20% 0px" });

  return (
    <div ref={ref} className={`text-center ${className}`}>
      {lines.map((line, index) => (
        <motion.p
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            duration: 1,
            delay: index * staggerDelay,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="text-story-large mb-2"
        >
          {line}
        </motion.p>
      ))}
    </div>
  );
};

export default StoryText;
