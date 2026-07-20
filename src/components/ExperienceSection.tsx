import React from "react";
import { FadeIn } from "./FadeIn";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experienceData = [
  {
    role: "Software Engineer Intern",
    company: "Scienter Technologies (Pvt) Ltd",
    location: "Colombo, Sri Lanka",
    duration: "June 2025 - July 2026",
    desc: "Spearheading the development of enterprise-grade software modules. Collaborating with cross-functional teams to optimize legacy systems, implement modern design patterns, and ensure the delivery of robust, high-availability technical solutions.",
    gradient: "linear-gradient(135deg, #06B6D4 0%, #7DD3FC 50%, #FFFFFF 100%)",
  },
  {
    role: "Full Stack Developer",
    company: "Freelance",
    location: "Remote",
    duration: "2023 - Present",
    desc: "Delivering end-to-end web applications for diverse clients. Architected multiple MERN-stack projects, focusing on responsive UI/UX, database normalization, and secure API integration to drive business growth.",
    gradient: "linear-gradient(137deg, #4361EE 0%, #E0AEFF 45%, #F72585 100%)",
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="bg-[#0A0A0B] px-5 sm:px-8 md:px-10 py-32 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-20">
          <span className="text-primary font-bold uppercase tracking-[0.3em] text-sm mb-6">
            02 / Professional Track
          </span>
          <h2 className="hero-heading font-black uppercase text-center text-[clamp(3.5rem,10vw,120px)] leading-none tracking-tighter">
            Experience<span className="text-primary">.</span>
          </h2>
        </div>

        <div className="flex flex-col gap-8">
          {experienceData.map((item, i) => (
            <FadeIn key={i} delay={i * 0.1} y={30}>
              <div 
                className="group relative p-8 md:p-12 rounded-[40px] overflow-hidden transition-all"
                style={{
                  border: "8px solid transparent",
                  background: `linear-gradient(#1A1A1C, #1A1A1C) padding-box, ${item.gradient} border-box`,
                }}
              >
                <div className="absolute inset-0 w-full h-full opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity"
                  style={{
                    background: item.gradient,
                    filter: "blur(60px)",
                  }}
                />
                
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3 text-primary">
                      <Briefcase size={20} />
                      <span className="text-xs uppercase tracking-[0.2em] font-bold">Work Experience</span>
                    </div>
                    <h3 className="text-2xl md:text-4xl font-bold text-[#D7E2EA] group-hover:text-white transition-colors">
                      {item.role}
                    </h3>
                    <div className="flex flex-wrap gap-6 text-[#D7E2EA]/40 font-medium">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{item.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{item.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <span className="text-xl md:text-2xl font-bold text-primary/80">{item.company}</span>
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-white/5 relative z-10">
                  <p className="text-[#D7E2EA]/60 text-lg leading-relaxed max-w-4xl">
                    {item.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
