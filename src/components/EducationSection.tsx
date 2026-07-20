import React from "react";
import { GlowCard } from "./GlowCard";
import { BookOpen } from "lucide-react";

const educationData = [
  {
    degree: "BEng (Hons) Software Engineering",
    institution: "IIT Sri Lanka",
    sub: "University of Westminster",
    duration: "2023 - Present",
    desc: "Focus on OOP, Database Systems, Web Development, and Algorithms.",
    gradient: "linear-gradient(137deg, #4361EE 0%, #E0AEFF 45%, #F72585 100%)",
  },
  {
    degree: "GCE Advanced Level",
    institution: "Mahinda College",
    sub: "Galle, Sri Lanka",
    duration: "2022",
    desc: "Commerce Stream: Accounting (B), ICT (C), Business Studies (C).",
    gradient: "linear-gradient(137deg, #FF3D77 0%, #FFB1CE 45%, #FF9D3C 100%)",
  },
  {
    degree: "GCE Ordinary Level",
    institution: "Mahinda College",
    sub: "Galle, Sri Lanka",
    duration: "2019",
    desc: "Achieved high grades in Mathematics, ICT, and Drama.",
    gradient: "linear-gradient(137deg, #FFFFFF 0%, #7DD3FC 45%, #06B6D4 100%)",
  },
];

export const EducationSection = () => {
  return (
    <section id="education" className="bg-[#0A0A0B] px-5 sm:px-8 md:px-10 py-32 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-20">
          <span className="text-primary font-bold uppercase tracking-[0.3em] text-sm mb-6">
            05 / Academic Path
          </span>
          <h2 className="hero-heading font-black uppercase text-center text-[clamp(3.5rem,10vw,120px)] leading-none tracking-tighter">
            Education<span className="text-primary">.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 lg:gap-6">
          {educationData.map((edu, i) => (
            <GlowCard
              key={i}
              title={edu.degree}
              gradient={edu.gradient}
              delay={i * 0.15}
              className="min-h-[320px]"
              icon={<BookOpen />}
            >
              <div className="flex flex-col gap-2 mt-4">
                <span className="text-primary font-bold text-lg">{edu.duration}</span>
                <span className="text-gray-400 uppercase tracking-widest text-[10px]">{edu.institution}</span>
                <span className="text-gray-500 text-[10px]">{edu.sub}</span>
                <p className="text-gray-400 text-sm mt-2 leading-relaxed">{edu.desc}</p>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

