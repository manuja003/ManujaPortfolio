import React from "react";
import { FadeIn } from "./FadeIn";

const services = [
  {
    num: "01",
    name: "Web Development",
    desc: "Building responsive, high-performance web applications using modern frameworks like React, Next.js, and TypeScript.",
  },
  {
    num: "02",
    name: "UI/UX Design",
    desc: "Designing intuitive and visually appealing user interfaces with a focus on user experience and accessibility.",
  },
  {
    num: "03",
    name: "Full-Stack Development",
    desc: "Developing end-to-end solutions, from database architecture to frontend implementation, ensuring seamless integration.",
  },
  {
    num: "04",
    name: "Backend Systems",
    desc: "Architecting scalable backend infrastructures and APIs using Node.js, Python, and cloud services.",
  },
  {
    num: "05",
    name: "Software Solutions",
    desc: "Solving complex business problems with custom software tailored to specific requirements and industry standards.",
  },
];

export const ServicesSection = () => {
  return (
    <section className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="text-[#0C0C0C] font-black uppercase text-center text-[clamp(3rem,12vw,160px)] mb-16 sm:mb-20 md:mb-28">
          Services
        </h2>

        <div className="w-full max-w-5xl">
          {services.map((service, i) => (
            <FadeIn
              key={i}
              delay={i * 0.1}
              className="flex flex-col md:flex-row items-start md:items-center py-8 sm:py-10 md:py-12 border-b border-[rgba(12,12,12,0.15)] last:border-0 gap-6 md:gap-12"
            >
              <span className="text-[#0C0C0C] font-black leading-none text-[clamp(3rem,10vw,140px)] min-w-[120px] md:min-w-[200px]">
                {service.num}
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="text-[#0C0C0C] font-medium uppercase text-[clamp(1rem,2.2vw,2.1rem)]">
                  {service.name}
                </h3>
                <p className="text-[#0C0C0C] font-light leading-relaxed max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)] opacity-60">
                  {service.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
