import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface StoryTextProps {
  lines: string[];
  className?: string;
  staggerDelay?: number;
  variant?: "light" | "dark";
}

export const StoryText = ({
  lines,
  className = "",
  staggerDelay = 0.4,
  variant = "dark",
}: StoryTextProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-15% 0px" });

  const textClass = variant === "light" 
    ? "text-story-large text-story-dark" 
    : "text-story-large";

  return (
    <div ref={ref} className={`text-center max-w-4xl mx-auto px-6 ${className}`}>
      {lines.map((line, index) => (
        <motion.p
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{
            duration: 1.2,
            delay: index * staggerDelay,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className={`${textClass} ${line === "" ? "h-8" : "mb-4"}`}
        >
          {line}
        </motion.p>
      ))}
    </div>
  );
};

export default StoryText;
