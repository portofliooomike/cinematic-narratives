import { ReactNode } from "react";

interface SceneProps {
  children: ReactNode;
  className?: string;
  variant?: "dark" | "subtle";
  minHeight?: string;
}

export const Scene = ({
  children,
  className = "",
  variant = "dark",
  minHeight = "100vh",
}: SceneProps) => {
  const bgClass = variant === "dark" ? "scene-dark" : "scene-subtle";

  return (
    <section
      className={`scene ${bgClass} ${className}`}
      style={{ minHeight }}
    >
      {children}
    </section>
  );
};

export default Scene;
