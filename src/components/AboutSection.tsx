import React from "react";
import { FadeIn } from "./FadeIn";
import { AnimatedText } from "./AnimatedText";
import { ContactButton } from "./Buttons";
import { Code2, Cpu, Globe, Smartphone } from "lucide-react";

export const AboutSection = () => {
  const highlights = [
    { icon: <Smartphone size={24} />, title: "Mobile", desc: "Flutter — Android & iOS" },
    { icon: <Code2 size={24} />, title: "Full Stack", desc: "React, Node.js & Java" },
    { icon: <Cpu size={24} />, title: "Software Eng", desc: "IIT Sri Lanka (Westminster)" },
    { icon: <Globe size={24} />, title: "Sri Lanka", desc: "Based in Colombo" },
  ];

  return (
    <section id="about" className="min-h-screen w-full relative flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-32 overflow-hidden bg-[#0C0C0C]">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left Side: Content */}
          <div className="flex flex-col items-start text-left">
            <FadeIn delay={0} y={30}>
              <span className="text-primary font-bold uppercase tracking-[0.3em] text-sm mb-6 block">
                01 / Who I Am
              </span>
              <h2 className="text-[#D7E2EA] font-black uppercase leading-none tracking-tighter text-[clamp(3.5rem,10vw,120px)] mb-10">
                About<br /><span className="text-primary">Me.</span>
              </h2>
            </FadeIn>

            <AnimatedText
              text="Software Engineer building cross-platform mobile apps with Flutter, backed by full-stack web and a year of industry experience."
              className="text-[#D7E2EA] font-medium leading-relaxed max-w-xl text-2xl mb-8"
            />
            
            <FadeIn delay={0.2} y={20}>
              <p className="text-[#D7E2EA]/60 text-lg leading-relaxed max-w-lg mb-12">
                A Software Engineering undergraduate at IIT Sri Lanka (University of Westminster), fresh off a year-long engineering internship. Most recently I built EvoDine — a Flutter POS running on Android and iOS with a real-time kitchen board and Bluetooth receipt printing — and shipped the web platform behind it. I enjoy the messy parts: unreliable networks, device hardware, and the details that only show up once real users are on the system.
              </p>
            </FadeIn>

            <FadeIn delay={0.3} y={20}>
              <div className="flex flex-col sm:flex-row gap-6">
                <ContactButton label="Let's Talk" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} />
                <a 
                  href="/documents/ManujaPinsaraCV.pdf" 
                  download="ManujaPinsaraCV.pdf"
                  className="px-10 py-4 rounded-full border border-white/10 text-white font-bold uppercase tracking-widest hover:bg-white/5 transition-all text-center flex items-center justify-center"
                >
                  Download CV
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Right Side: Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, i) => (
              <FadeIn key={i} delay={0.1 * i} y={30} className="group">
                <div 
                  className="p-8 rounded-[40px] relative overflow-hidden transition-all"
                  style={{
                    border: "8px solid transparent",
                    background: `linear-gradient(#1A1A1C, #1A1A1C) padding-box, linear-gradient(135deg, #06B6D4 0%, #7DD3FC 50%, #FFFFFF 100%) border-box`,
                  }}
                >
                  <div className="absolute inset-0 w-full h-full opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity"
                    style={{
                      background: "linear-gradient(135deg, #06B6D4 0%, #7DD3FC 100%)",
                      filter: "blur(40px)",
                    }}
                  />
                  
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform relative z-10">
                    {item.icon}
                  </div>
                  
                  <h3 className="text-[#D7E2EA] font-bold text-xl uppercase tracking-tight mb-2 relative z-10">
                    {item.title}
                  </h3>
                  <p className="text-[#D7E2EA]/40 font-medium relative z-10">
                    {item.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
