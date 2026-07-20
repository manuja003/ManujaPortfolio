import React, { useEffect, useRef, useState } from "react";

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
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const top = rect.top + window.scrollY;
      const scrollY = window.scrollY;
      const currentOffset = (scrollY - top + window.innerHeight) * 0.3;
      setOffset(currentOffset);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const trippledImages1 = [...imagesRow1, ...imagesRow1, ...imagesRow1];
  const trippledImages2 = [...imagesRow2, ...imagesRow2, ...imagesRow2];

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden"
    >
      {/* Row 1 - Moves RIGHT on scroll */}
      <div
        className="flex gap-3 mb-3 transition-transform"
        style={{
          transform: `translateX(${offset - 200}px)`,
          willChange: "transform",
        }}
      >
        {trippledImages1.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Work ${i}`}
            loading="lazy"
            className="w-[420px] h-[270px] rounded-2xl object-cover flex-shrink-0"
          />
        ))}
      </div>

      {/* Row 2 - Moves LEFT on scroll */}
      <div
        className="flex gap-3 transition-transform"
        style={{
          transform: `translateX(${-(offset - 200)}px)`,
          willChange: "transform",
        }}
      >
        {trippledImages2.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Work ${i}`}
            loading="lazy"
            className="w-[420px] h-[270px] rounded-2xl object-cover flex-shrink-0"
          />
        ))}
      </div>
    </section>
  );
};
