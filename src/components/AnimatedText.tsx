import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = "" }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.2"],
  });

  const words = text.split(" ");

  return (
    <p ref={containerRef} className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block mr-[0.25em] whitespace-nowrap">
          {word.split("").map((char, j) => (
            <Character key={j} progress={scrollYProgress} index={i * 10 + j} total={text.length}>
              {char}
            </Character>
          ))}
        </span>
      ))}
    </p>
  );
};

interface CharacterProps {
  children: string;
  progress: any;
  index: number;
  total: number;
}

const Character: React.FC<CharacterProps> = ({ children, progress, index, total }) => {
  // Calculate individual character start and end points
  const start = index / total;
  const end = start + (1 / total) * 5; // Slight overlap for smoother feel
  
  const opacity = useTransform(progress, [start, end], [0.2, 1]);

  return (
    <span className="relative inline-block">
      <span className="opacity-20">{children}</span>
      <motion.span
        style={{ opacity }}
        className="absolute left-0 top-0 text-foreground"
      >
        {children}
      </motion.span>
    </span>
  );
};
