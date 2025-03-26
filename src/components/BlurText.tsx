
import { useState, useEffect } from "react";

type AnimateBy = "letters" | "words";
type Direction = "left" | "right" | "top" | "bottom";

interface BlurTextProps {
  text: string;
  delay?: number;
  animateBy?: AnimateBy;
  direction?: Direction;
  onAnimationComplete?: () => void;
  className?: string;
}

const BlurText = ({
  text,
  delay = 100,
  animateBy = "letters",
  direction = "bottom",
  onAnimationComplete,
  className = "",
}: BlurTextProps) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  useEffect(() => {
    if (isVisible) {
      const timeout = setTimeout(() => {
        onAnimationComplete?.();
      }, getMaxDelay());
      
      return () => clearTimeout(timeout);
    }
  }, [isVisible, onAnimationComplete]);
  
  const getMaxDelay = () => {
    const units = animateBy === "letters" ? text.length : text.split(" ").length;
    return units * delay + 500; // Additional time for animation duration
  };
  
  const getAnimation = () => {
    switch (direction) {
      case "left":
        return "animate-slideInFromLeft";
      case "right":
        return "animate-slideInFromRight";
      case "top":
        return "animate-slideInFromTop";
      case "bottom":
        return "animate-slideInFromBottom";
      default:
        return "animate-slideInFromBottom";
    }
  };
  
  const renderContent = () => {
    if (animateBy === "words") {
      return text.split(" ").map((word, index) => (
        <span
          key={index}
          className={`inline-block opacity-0 ${isVisible ? getAnimation() : ""}`}
          style={{
            animationDelay: `${index * delay}ms`,
            animationFillMode: "forwards",
          }}
        >
          {word}{index < text.split(" ").length - 1 ? "\u00A0" : ""}
        </span>
      ));
    } else {
      return text.split("").map((letter, index) => (
        <span
          key={index}
          className={`inline-block opacity-0 ${isVisible ? getAnimation() : ""}`}
          style={{
            animationDelay: `${index * delay}ms`,
            animationFillMode: "forwards",
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </span>
      ));
    }
  };
  
  return <div className={className}>{renderContent()}</div>;
};

export default BlurText;
