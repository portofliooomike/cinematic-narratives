import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SceneProps {
  children: ReactNode;
  className?: string;
  variant?: "dark" | "subtle" | "light" | "light-subtle";
  minHeight?: string;
}

const variantClasses = {
  dark: "scene-dark",
  subtle: "scene-subtle",
  light: "scene-light",
  "light-subtle": "scene-light-subtle",
};

export const Scene = ({
  children,
  className = "",
  variant = "dark",
  minHeight = "100vh",
}: SceneProps) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-5%" }}
      transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
      className={`scene ${variantClasses[variant]} ${className}`}
      style={{ minHeight }}
    >
      {children}
    </motion.section>
  );
};

export default Scene;
