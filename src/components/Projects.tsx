import { useState, useEffect } from 'react';
import { ExternalLink, Github, Download } from 'lucide-react';
import { Link, useNavigate } from "react-router-dom";
import { CaseStudyButton } from "./Buttons";

type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
  gradient: string;
  hasCaseStudy?: boolean;
};

const Projects = () => {
  const [isVisible, setIsVisible] = useState(true); // Set to true by default to ensure visibility
  const navigate = useNavigate();
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    const section = document.getElementById('projects');
    if (section) {
      observer.observe(section);
    }
    
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const projects: Project[] = [
    {
      id: "cheap-chaser",
      title: "Software Development Group Project (Cheap Chaser)",
      description: "We are created a travel platform that simplifies trip planning for tourists visiting Sri Lanka. Cheap Chaser offers a user-friendly experience, integrating features like itinerary customization, budget tracking, and accommodation and activity bookings into one easy to use interface.",
      image: "/images/projects/CheapChaser.png",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/manuja003/travel-management",
      demo: "https://cheap-gray.vercel.app/",
      gradient: "linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #ec4899 100%)",
      hasCaseStudy: true,
    },
    {
      id: "udara-store",
      title: "Udara Store Website",
      description: "Developed a responsive web application for shop called 'Udara Store,' featuring a  products Pages with Descriptions, images and a contact page using Typescript, CSS, and JavaScript for an engaging user experience.",
      image: "/images/projects/image.png",
      tags: ["React", "Tailwind Css", "TypeScript", "HTML"],
      github: "https://github.com/manuja003/education-sdg",
      demo: "https://udara-store.vercel.app/",
      gradient: "linear-gradient(135deg, #3b82f6 0%, #2dd4bf 50%, #10b981 100%)",
      hasCaseStudy: true,
    },
    {
      id: "galle-lanka-travels",
      title: "Galle Lanka Travels",
      description: "Galle Lanka Travels is a trusted travel and vehicle hire service in Sri Lanka, helping visitors explore the island with ease. We offer customizable tours, airport transfers, and comfortable vehicles with professional drivers, so you can enjoy stress-free, budget-friendly journeys to Sri Lanka’s most beautiful destinations.",
      image: "/images/projects/GalleLankaTravels.png",
      tags: ["React", "Tailwind Css", "TypeScript", "HTML"],
      demo: "https://galle-lanka-explore.vercel.app",
      gradient: "linear-gradient(135deg, #f59e0b 0%, #ef4444 50%, #8b5cf6 100%)",
      hasCaseStudy: true,
    },
    {
      id: "quality-education",
      title: "Quality Education Website",
      description: "Developed a responsive web application inspired by the UN SDG 'Quality Education,' featuring a Gallery Page with Descriptions, Content Page and Sitemap, using HTML, CSS, and JavaScript for an engaging user experience.",
      image: "/images/projects/QualityEdu.png",
      tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      github: "https://github.com/manuja003/education-sdg",
      demo: "https://education-sdg-demo.netlify.app",
      gradient: "linear-gradient(135deg, #10b981 0%, #3b82f6 50%, #6366f1 100%)",
      hasCaseStudy: true,
    },
    /* {
      id: "event-ticketing",
      title: "Real-Time Event Ticketing System",
      description: "Built a full-stack event management solution featuring multithreaded seat allocation and concurrent booking handling, demonstrating OOP principles and exception handling in Java.",
      image: "/images/event.jpg",
      tags: ["Java", "OOP", "Multithreading", "Exception Handling"],
      github: "https://github.com/manuja003/event-ticketing",
      gradient: "linear-gradient(135deg, #ec4899 0%, #f43f5e 50%, #fb923c 100%)",
      hasCaseStudy: true,
    },
    {
      id: "grading-visualizer",
      title: "University Grading Visualizer",
      description: "Developed a dynamic grading analysis system using Python with graphics.py, transforming raw academic data into interactive histograms that visually represent grade distributions across faculties.",
      image: "/images/grade.jpg",
      tags: ["Python", "Data Visualization", "Graphics.py", "Data Analysis"],
      github: "https://github.com/manuja003/university-grading",
      gradient: "linear-gradient(135deg, #8b5cf6 0%, #6366f1 50%, #3b82f6 100%)",
      hasCaseStudy: true,
    },
    {
      id: "plane-management",
      title: "Plane Management Console",
      description: "Created an aviation operations system utilizing 2D arrays for seat mapping and flight scheduling, with CSV data persistence for airline staff administration.",
      image: "/images/flight.jpg",
      tags: ["Java", "2D Arrays", "CSV", "Flight Management"],
      github: "https://github.com/manuja003/plane-management",
      gradient: "linear-gradient(135deg, #2dd4bf 0%, #10b981 50%, #3b82f6 100%)",
      hasCaseStudy: true,
    } */
  ];

  return (
    <section id="projects" className="py-20 bg-[#0A0A0B]">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-700 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <div className="flex justify-between items-center mb-16">
            <h2 className="section-title text-[#D7E2EA]">My Projects</h2>
            
            <a 
              href="/documents/ManujaPinsaraCV.pdf" 
              download="ManujaPinsaraCV.pdf"
              className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/80 transition-colors shadow-md hover:shadow-lg"
            >
              <Download className="h-5 w-5" />
              Download CV
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <div 
                key={project.id} 
                className="relative group rounded-[40px] overflow-hidden"
                style={{ 
                  '--animation-order': index,
                  border: "8px solid transparent",
                  background: `linear-gradient(#1A1A1C, #1A1A1C) padding-box, ${project.gradient} border-box`,
                } as React.CSSProperties}
              >
                {/* Glow effect */}
                <div
                  className="absolute inset-0 w-full h-full opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity duration-500"
                  style={{
                    background: project.gradient,
                    filter: "blur(50px)",
                  }}
                />

                <div className="relative z-10">
                  <div className="relative overflow-hidden h-64 group-hover:h-72 transition-all duration-500">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-4 text-[#D7E2EA]">{project.title}</h3>
                    
                    <p className="text-[#D7E2EA]/70 mb-6 line-clamp-3 group-hover:line-clamp-none transition-all duration-500 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap mb-8 gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-[#D7E2EA]/10 text-[#D7E2EA]/80 rounded-full text-xs font-medium border border-[#D7E2EA]/20">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap gap-6 items-center">
                      {project.hasCaseStudy && (
                        <CaseStudyButton 
                          label="View Case Study" 
                          onClick={() => navigate(`/project/${project.id}`)}
                        />
                      )}
                      <div className="flex space-x-6">
                        {project.github && (
                          <a 
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-sm text-[#D7E2EA]/60 hover:text-white transition-colors"
                          >
                            <Github className="h-5 w-5 mr-2" />
                            Source
                          </a>
                        )}
                        
                        {project.demo && (
                          <a 
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-sm text-[#D7E2EA]/60 hover:text-white transition-colors"
                          >
                            <ExternalLink className="h-5 w-5 mr-2" />
                            Live
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
