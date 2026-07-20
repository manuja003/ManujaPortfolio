import React from "react";
import { FadeIn } from "./FadeIn";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "Manuja is an exceptional developer who consistently delivers high-quality code. His ability to solve complex problems and design clean architectures is impressive for his level.",
    author: "Technical Mentor",
    role: "Senior Software Engineer",
    gradient: "linear-gradient(137deg, #4361EE 0%, #E0AEFF 45%, #F72585 100%)",
  },
  {
    text: "Working with Manuja on university projects was a great experience. He is a natural leader and always ensures the team stays on track with striking UI designs.",
    author: "Project Teammate",
    role: "IIT Sri Lanka",
    gradient: "linear-gradient(137deg, #FF3D77 0%, #FFB1CE 45%, #FF9D3C 100%)",
  },
];

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-32 relative z-10 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center mb-20">
          <span className="text-primary font-bold uppercase tracking-[0.3em] text-sm mb-6">
            07 / Social Proof
          </span>
          <h2 className="hero-heading font-black uppercase text-center text-[clamp(3.5rem,10vw,120px)] leading-none tracking-tighter">
            Kind Words<span className="text-primary">.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((item, i) => (
            <FadeIn key={i} delay={i * 0.1} y={30}>
              <div 
                className="p-10 md:p-14 rounded-[40px] relative group transition-all"
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
                
                
                <p className="text-[#D7E2EA] text-xl md:text-2xl font-medium leading-relaxed mb-10 italic relative z-10">
                  {item.text}
                </p>
                
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-12 h-1 bg-primary rounded-full" />
                  <div className="flex flex-col">
                    <span className="text-[#D7E2EA] font-bold text-lg uppercase tracking-tight">{item.author}</span>
                    <span className="text-[#D7E2EA]/40 text-sm font-medium">{item.role}</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
