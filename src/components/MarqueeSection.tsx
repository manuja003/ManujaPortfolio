import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const imagesRow1 = [
  "/images/projects/CheapChaser.png",
  "/images/projects/image.png",
  "/images/projects/GalleLankaTravels.png",
  "/images/projects/QualityEdu.png",
  "/images/projects/CheapChaser.png",
  "/images/projects/image.png",
  "/images/projects/GalleLankaTravels.png",
  "/images/projects/QualityEdu.png",
];

const imagesRow2 = [
  "/images/projects/GalleLankaTravels.png",
  "/images/projects/QualityEdu.png",
  "/images/projects/CheapChaser.png",
  "/images/projects/image.png",
  "/images/projects/GalleLankaTravels.png",
  "/images/projects/QualityEdu.png",
  "/images/projects/CheapChaser.png",
  "/images/projects/image.png",
];

export const MarqueeSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  // Drive the parallax off scroll progress without triggering React re-renders
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const xRight = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const xLeft = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);

  const trippledImages1 = [...imagesRow1, ...imagesRow1, ...imagesRow1];
  const trippledImages2 = [...imagesRow2, ...imagesRow2, ...imagesRow2];

  const imgClass =
    "w-[220px] h-[140px] sm:w-[320px] sm:h-[200px] md:w-[420px] md:h-[270px] rounded-2xl object-cover flex-shrink-0";

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden"
    >
      {/* Row 1 - Moves RIGHT on scroll */}
      <motion.div
        className="flex gap-3 mb-3"
        style={{ x: xRight, willChange: "transform" }}
      >
        {trippledImages1.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Work sample ${i + 1}`}
            loading="lazy"
            className={imgClass}
          />
        ))}
      </motion.div>

      {/* Row 2 - Moves LEFT on scroll */}
      <motion.div
        className="flex gap-3"
        style={{ x: xLeft, willChange: "transform" }}
      >
        {trippledImages2.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Work sample ${i + 1}`}
            loading="lazy"
            className={imgClass}
          />
        ))}
      </motion.div>
    </section>
  );
};
