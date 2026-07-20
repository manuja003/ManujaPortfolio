import React from "react";
import { FadeIn } from "./FadeIn";
import { Magnet } from "./Magnet";
import { ContactButton } from "./Buttons";

const marqueeText = "Hi, I'm Manuja Pinsara Lankanath";
const separator = "✦";

export const HeroSection = () => {
  const items = Array(6).fill(`${marqueeText} ${separator} `);

  return (
    <section id="top" className="min-h-[100svh] w-full flex flex-col relative overflow-hidden bg-[#0A0A0B]">
      {/* Marquee keyframes and styles */}
      <style>{`
        @keyframes marquee-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee-scroll 15s linear infinite;
          will-change: transform;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        .marquee-mask {
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }
        .hero-text-stroke {
          -webkit-text-stroke: 1px rgba(215, 226, 234, 0.2);
          text-stroke: 1px rgba(215, 226, 234, 0.2);
        }
      `}</style>

      {/* Accessible page heading (visual title is the animated marquee below) */}
      <h1 className="sr-only">
        Manuja Pinsara Lankanath — Software Engineer &amp; MERN Stack Developer
      </h1>

      {/* Hero Marquee Heading */}
      <div className="flex-1 flex flex-col justify-center items-center z-0 w-full">
        <FadeIn delay={0.15} y={40} className="w-full">
          <div className="marquee-mask w-full overflow-hidden py-10">
            <div className="marquee-track flex whitespace-nowrap">
              {[...items, ...items].map((text, i) => (
                <span
                  key={i}
                  className="hero-heading hero-text-stroke font-black uppercase tracking-tighter leading-none text-[12vw] sm:text-[13vw] md:text-[14vw] lg:text-[15vw] px-8"
                >
                  {text}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Hero Portrait */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 w-[220px] sm:w-[360px] md:w-[440px] lg:w-[520px] bottom-0 pointer-events-none sm:pointer-events-auto">
        <FadeIn delay={0.6} y={30}>
          <Magnet padding={150} strength={3}>
            <img
              src="/manujaa.png"
              alt="Manuja Portrait"
              className="w-full h-auto object-contain"
            />
          </Magnet>
        </FadeIn>
      </div>

      {/* Bottom Bar */}
      <div className="flex justify-between items-end px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 w-full z-20">
        <FadeIn delay={0.35} y={20}>
          <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug text-[clamp(0.75rem,1.4vw,1.5rem)] max-w-[160px] sm:max-w-[220px] md:max-w-[260px]">
            a software engineer driven by crafting striking and unforgettable projects
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton 
            label="Contact Me" 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} 
          />
        </FadeIn>
      </div>
    </section>
  );
};

