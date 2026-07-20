import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { LiveProjectButton, CaseStudyButton } from "./Buttons";
import { FadeIn } from "./FadeIn";
import { Link, useNavigate } from "react-router-dom";

type ProjectCardData = {
  id: string;
  num: string;
  client: string;
  category: string;
  description: string;
  liveLink: string;
  /** Overrides the "Live Project" button label, e.g. when the link is a demo request page. */
  liveLinkLabel?: string;
  images: string[];
  gradient: string;
  hasCaseStudy?: boolean;
};

const projects: ProjectCardData[] = [
  {
    id: "evodine",
    num: "01",
    client: "EvoDine",
    category: "Flutter Mobile + Web POS",
    description: "Restaurant POS built as a cross-platform Flutter app (Android + iOS) alongside a web client — real-time kitchen order board over SignalR, Bluetooth thermal receipt printing, and cashier payment processing.",
    liveLink: "https://www.evosolutions.lk/products/evodine",
    liveLinkLabel: "Request a Demo",
    images: [
      "/images/projects/evodine/dashboard.jpg",
      "/images/projects/evodine/order.jpg",
      "/images/projects/evodine/login.png",
    ],
    gradient: "linear-gradient(135deg, #f97316 0%, #fbbf24 50%, #10b981 100%)",
    hasCaseStudy: true,
  },
  {
    id: "cheap-chaser",
    num: "02",
    client: "Cheap Chaser",
    category: "Travel Platform",
    description: "A travel platform that simplifies trip planning for tourists visiting Sri Lanka, featuring itinerary customization and budget tracking.",
    liveLink: "https://cheap-gray.vercel.app/",
    images: [
      "/images/projects/CheapChaser.png",
      "/images/projects/CheapChaser.png",
      "/images/projects/CheapChaser.png",
    ],
    gradient: "linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #ec4899 100%)",
    hasCaseStudy: true,
  },
  {
    id: "udara-store",
    num: "03",
    client: "Udara Store",
    category: "Personal / Shop",
    description: "Responsive web application for 'Udara Store,' featuring product pages with descriptions and an engaging user experience.",
    liveLink: "https://udarastore.com/",
    images: [
      "/images/projects/image.png",
      "/images/projects/image.png",
      "/images/projects/image.png",
    ],
    gradient: "linear-gradient(135deg, #3b82f6 0%, #2dd4bf 50%, #10b981 100%)",
    hasCaseStudy: true,
  },
  {
    id: "galle-lanka-travels",
    num: "04",
    client: "Galle Lanka Travels",
    category: "Travel & Tours",
    description: "Trusted travel service in Sri Lanka offering customizable tours and vehicle hire with professional drivers.",
    liveLink: "https://galle-lanka-explore.vercel.app",
    images: [
      "/images/projects/GalleLankaTravels.png",
      "/images/projects/GalleLankaTravels.png",
      "/images/projects/GalleLankaTravels.png",
    ],
    gradient: "linear-gradient(135deg, #f59e0b 0%, #ef4444 50%, #8b5cf6 100%)",
    hasCaseStudy: true,
  },
  // {
  //   id: "quality-education",
  //   num: "05",
  //   client: "Quality Education",
  //   category: "UN SDG Project",
  //   description: "A web application inspired by UN SDG 'Quality Education,' featuring gallery and content pages.",
  //   liveLink: "https://education-sdg-demo.netlify.app",
  //   images: [
  //     "/images/projects/QualityEdu.png",
  //     "/images/projects/QualityEdu.png",
  //     "/images/projects/QualityEdu.png",
  //   ],
  //   gradient: "linear-gradient(135deg, #10b981 0%, #3b82f6 50%, #6366f1 100%)",
  //   hasCaseStudy: true,
  // },
  /* {
    id: "event-ticketing",
    num: "05",
    client: "Event Ticketing",
    category: "Java Full-Stack",
    description: "Full-stack event management solution with multithreaded seat allocation and concurrent booking handling.",
    liveLink: "https://github.com/manuja003/event-ticketing",
    images: [
      "/images/event.jpg",
      "/images/event.jpg",
      "/images/event.jpg",
    ],
    gradient: "linear-gradient(135deg, #ec4899 0%, #f43f5e 50%, #fb923c 100%)",
    hasCaseStudy: true,
  },
  {
    id: "grading-visualizer",
    num: "06",
    client: "Grading Visualizer",
    category: "Python Data Analysis",
    description: "Dynamic grading analysis system transforming academic data into interactive histograms using Python.",
    liveLink: "https://github.com/manuja003/university-grading",
    images: [
      "/images/grade.jpg",
      "/images/grade.jpg",
      "/images/grade.jpg",
    ],
    gradient: "linear-gradient(135deg, #8b5cf6 0%, #6366f1 50%, #3b82f6 100%)",
    hasCaseStudy: true,
  },
  {
    id: "plane-management",
    num: "07",
    client: "Plane Management",
    category: "Java CLI",
    description: "Aviation operations system using 2D arrays for seat mapping and flight scheduling with CSV persistence.",
    liveLink: "https://github.com/manuja003/plane-management",
    images: [
      "/images/flight.jpg",
      "/images/flight.jpg",
      "/images/flight.jpg",
    ],
    gradient: "linear-gradient(135deg, #2dd4bf 0%, #10b981 50%, #3b82f6 100%)",
    hasCaseStudy: true,
  }, */
];

export const ProjectsSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={containerRef}
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-5 sm:px-8 md:px-10 py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="flex flex-col items-center mb-24">
          <span className="text-primary font-bold uppercase tracking-[0.3em] text-sm mb-6">
            04 / Selected Work
          </span>
          <h2 className="hero-heading font-black uppercase text-center text-[clamp(3.5rem,12vw,160px)] leading-none tracking-tighter">
            Projects<span className="text-primary">.</span>
          </h2>
        </div>

        <div className="w-full flex flex-col gap-[10vh]">
          {projects.map((project, i) => (
            <ProjectCard
              key={i}
              index={i}
              project={project}
              progress={scrollYProgress}
              total={projects.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  index: number;
  project: (typeof projects)[0];
  progress: MotionValue<number>;
  total: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ index, project, progress, total }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Create a scroll progress specific to this card's range
  const start = index / total;
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(progress, [start, 1], [1, targetScale]);

  return (
    <div className="h-[85vh] sm:h-[85vh] sticky top-20 md:top-32 flex justify-center items-start">
      <motion.div
        ref={cardRef}
        style={{
          scale,
          top: `${index * 28}px`,
          border: "8px solid transparent",
          background: `linear-gradient(#0C0C0C, #0C0C0C) padding-box, ${project.gradient} border-box`,
        }}
        className="w-full h-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] p-4 sm:p-6 md:p-8 flex flex-col gap-6 md:gap-8 overflow-hidden relative"
      >
        {/* Glow effect like in GlowCard */}
        <div
          className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
          style={{
            background: project.gradient,
            filter: "blur(80px)",
          }}
        />

        {/* Top Row */}
        <div className="flex flex-wrap justify-between items-center gap-4 relative z-10">
          <div className="flex items-center gap-4 md:gap-8">
            <span className="text-[#D7E2EA] font-black text-[clamp(2.5rem,8vw,100px)] leading-none">
              {project.num}
            </span>
            <div className="flex flex-col">
              <span className="text-[#D7E2EA]/60 uppercase text-xs md:text-sm tracking-widest font-medium">
                {project.category}
              </span>
              <h3 className="text-[#D7E2EA] font-medium uppercase text-lg md:text-2xl lg:text-3xl">
                {project.client}
              </h3>
            </div>
          </div>
          <div className="flex items-center gap-4">
            {project.hasCaseStudy && (
              <CaseStudyButton 
                label="View Case Study" 
                onClick={() => navigate(`/project/${project.id}`)}
                className="hidden sm:block"
              />
            )}
            <LiveProjectButton
              label={project.liveLinkLabel ?? "Live Project"}
              onClick={() => window.open(project.liveLink, "_blank")}
            />
          </div>
        </div>

        {/* Description Row */}
        <div className="relative z-10">
          <p className="text-[#D7E2EA]/80 text-sm md:text-lg max-w-2xl leading-relaxed">
            {project.description}
          </p>
          {project.hasCaseStudy && (
            <CaseStudyButton 
              label="View Case Study" 
              onClick={() => navigate(`/project/${project.id}`)}
              className="mt-4 sm:hidden"
            />
          )}
        </div>

        {/* Bottom Row - Image */}
        {/* Mobile: single hero image. sm+: multi-image collage */}
        <div className="flex-1 min-h-0 relative z-10">
          <img
            src={project.images[2]}
            alt={`${project.client} preview`}
            loading="lazy"
            className="sm:hidden w-full h-full object-cover rounded-[30px] border border-[#D7E2EA]/10"
          />
          <div className="hidden sm:grid grid-cols-10 gap-4 md:gap-6 h-full">
            <div className="col-span-4 flex flex-col gap-4 md:gap-6">
              <img
                src={project.images[0]}
                alt={`${project.client} 1`}
                loading="lazy"
                className="w-full h-[clamp(100px,12vw,180px)] object-cover rounded-[40px] md:rounded-[50px] border border-[#D7E2EA]/10"
              />
              <img
                src={project.images[1]}
                alt={`${project.client} 2`}
                loading="lazy"
                className="w-full flex-1 min-h-0 object-cover rounded-[40px] md:rounded-[50px] border border-[#D7E2EA]/10"
              />
            </div>
            <div className="col-span-6 h-full">
              <img
                src={project.images[2]}
                alt={`${project.client} 3`}
                loading="lazy"
                className="w-full h-full object-cover rounded-[40px] md:rounded-[50px] border border-[#D7E2EA]/10"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
