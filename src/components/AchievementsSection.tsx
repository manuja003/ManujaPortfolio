import React from "react";
import { GlowCard } from "./GlowCard";
import { Award } from "lucide-react";

const achievements = [
  {
    title: "LinkedIn Learning Certificates",
    date: "2023-2024",
    desc: "Advanced Java, React.js Essential Training, Python for Beginners, and React with TypeScript.",
    gradient: "linear-gradient(137deg, #FF3D77 0%, #FFB1CE 45%, #FF9D3C 100%)",
  },
  {
    title: "Competition Participation",
    date: "2023-2024",
    desc: "Active participation in HaExtreme 3.0 and the Hult Prize.",
    gradient: "linear-gradient(137deg, #FFFFFF 0%, #7DD3FC 45%, #06B6D4 100%)",
  },
  {
    title: "Leadership Roles",
    date: "2011-2024",
    desc: "Divisional Officer at St. John Ambulance, Senior Prefect at Mahinda College, and Cadet Leader.",
    gradient: "linear-gradient(137deg, #4361EE 0%, #E0AEFF 45%, #F72585 100%)",
  },
  {
    title: "Sports Achievement",
    date: "2015",
    desc: "All Island Singer Cricket Tournament U13 Runners-Up Team Member.",
    gradient: "linear-gradient(137deg, #10B981 0%, #34D399 45%, #059669 100%)",
  },
];

export const AchievementsSection = () => {
  return (
    <section id="achievements" className="bg-[#0A0A0B] px-5 sm:px-8 md:px-10 py-32 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-20">
          <span className="text-primary font-bold uppercase tracking-[0.3em] text-sm mb-6">
            06 / Recognition
          </span>
          <h2 className="hero-heading font-black uppercase text-center text-[clamp(3.5rem,10vw,120px)] leading-none tracking-tighter">
            Achievements<span className="text-primary">.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-6 lg:gap-6">
          {achievements.map((item, i) => (
            <GlowCard
              key={i}
              title={item.title}
              gradient={item.gradient}
              delay={i * 0.1}
              className="min-h-[240px]"
              icon={<Award />}
            >
              <div className="flex flex-col gap-2 mt-4">
                <span className="text-primary font-bold">{item.date}</span>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

