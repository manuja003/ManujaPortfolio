import React from "react";
import { GlowCard } from "./GlowCard";
import { Code, Database, Layout, Cpu, Users, Smartphone } from "lucide-react";

const skillCategories = [
  {
    title: "Mobile",
    icon: <Smartphone />,
    skills: ["Flutter", "Dart", "Android", "iOS", "Material Design", "Play Store Release"],
    gradient: "linear-gradient(137deg, #F97316 0%, #FBBF24 45%, #10B981 100%)",
  },
  {
    title: "Engineering",
    icon: <Code />,
    skills: ["Dart", "Java", "Python", "TypeScript", "JavaScript", "C++", "C#", "SQL"],
    gradient: "linear-gradient(137deg, #FF3D77 0%, #FFB1CE 45%, #FF9D3C 100%)",
  },
  {
    title: "Interface",
    icon: <Layout />,
    skills: ["React", "Angular", "RxJS", "PrimeNG", "Tailwind CSS", "Framer Motion", "Shadcn UI", "Micro-frontends", "Responsive Design"],
    gradient: "linear-gradient(137deg, #FFFFFF 0%, #7DD3FC 45%, #06B6D4 100%)",
  },
  {
    title: "Infrastructure",
    icon: <Database />,
    skills: ["Node.js", "Express", "ASP.NET Core", "Spring Boot", "Firebase", "MongoDB", "PostgreSQL", "SQL Server", "REST APIs", "SignalR / Real-time"],
    gradient: "linear-gradient(137deg, #4361EE 0%, #E0AEFF 45%, #F72585 100%)",
  },
  {
    title: "Ecosystem",
    icon: <Cpu />,
    skills: ["Git / GitHub", "Flutter Test", "Karma / Jasmine", "Vitest", "Playwright", "Vite", "Docker", "Postman", "CI/CD Foundations"],
    gradient: "linear-gradient(137deg, #10B981 0%, #34D399 45%, #059669 100%)",
  },
  {
    title: "Strategy",
    icon: <Users />,
    skills: ["Agile / Scrum", "System Design", "Tech Documentation", "Project Management"],
    gradient: "linear-gradient(137deg, #F59E0B 0%, #FBBF24 45%, #D97706 100%)",
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="bg-[#0A0A0B] px-5 sm:px-8 md:px-10 py-32 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="flex flex-col items-center mb-24">
          <span className="text-primary font-bold uppercase tracking-[0.3em] text-sm mb-6">
            03 / My Expertise
          </span>
          <h2 className="hero-heading font-black uppercase text-center text-[clamp(3.5rem,10vw,120px)] leading-none tracking-tighter">
            Skills<span className="text-primary">.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-6 lg:gap-6">
          {skillCategories.map((category, i) => (
            <GlowCard
              key={i}
              title={category.title}
              icon={category.icon}
              gradient={category.gradient}
              delay={i * 0.1}
              className="min-h-[260px]"
            >
              <div className="flex flex-wrap gap-2 mt-4">
                {category.skills.map((skill, j) => (
                  <span
                    key={j}
                    className="px-3 py-1.5 rounded-full bg-[#1A1A1C] border border-white/10 text-gray-400 text-xs font-medium hover:border-white/30 hover:text-white transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

