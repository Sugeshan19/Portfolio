"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

interface ScrollPopProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function ScrollPop({
  children,
  className,
  delay = 0,
}: ScrollPopProps): React.JSX.Element {
  return (
    <motion.div
      className={className}
      style={{ transformPerspective: 1000, transformOrigin: "center bottom" }}
      initial={{ opacity: 0, y: 72, scale: 0.86, rotateX: 14, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0, filter: "blur(0px)" }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{
        type: "spring",
        stiffness: 155,
        damping: 16,
        mass: 0.75,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}