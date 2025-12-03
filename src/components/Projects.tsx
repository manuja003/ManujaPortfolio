import { useState, useEffect } from 'react';
import { ExternalLink, Github, Download } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
};

const Projects = () => {
  const [isVisible, setIsVisible] = useState(true); // Set to true by default to ensure visibility
  
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
      id: 1,
      title: "Software Development Group Project (Cheap Chaser)",
      description: "We are created a travel platform that simplifies trip planning for tourists visiting Sri Lanka. Cheap Chaser offers a user-friendly experience, integrating features like itinerary customization, budget tracking, and accommodation and activity bookings into one easy to use interface.",
      image: "/images/projects/CheapChaser.png",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/manuja003/travel-management",
      demo: "https://cheap-gray.vercel.app/",
    },
    {
      id: 2,
      title: "Udara Store Website",
      description: "Developed a responsive web application for shop called 'Udara Store,' featuring a  products Pages with Descriptions, images and a contact page using Typescript, CSS, and JavaScript for an engaging user experience.",
      image: "/images/image.png",
      tags: ["React", "Tailwind Css", "TypeScript", "HTML"],
      github: "https://github.com/manuja003/education-sdg",
      demo: "https://udara-store.vercel.app/",
    },
    {
      id: 3,
      title: "Galle Lanka Travels",
      description: "Galle Lanka Travels is a trusted travel and vehicle hire service in Sri Lanka, helping visitors explore the island with ease. We offer customizable tours, airport transfers, and comfortable vehicles with professional drivers, so you can enjoy stress-free, budget-friendly journeys to Sri Lanka’s most beautiful destinations.",
      image: "/images/projects/.png",
      tags: ["React", "Tailwind Css", "TypeScript", "HTML"],
      // github: "https://github.com/manuja003/education-sdg",
      demo: "https://education-sdg-demo.netlify.app",
    },
    {
      id: 4,
      title: "Quality Education Website",
      description: "Developed a responsive web application inspired by the UN SDG 'Quality Education,' featuring a Gallery Page with Descriptions, Content Page and Sitemap, using HTML, CSS, and JavaScript for an engaging user experience.",
      image: "/images/projects/QualityEdu.png",
      tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      github: "https://github.com/manuja003/education-sdg",
      demo: "https://education-sdg-demo.netlify.app",
    },
    {
      id: 5,
      title: "Real-Time Event Ticketing System",
      description: "Built a full-stack event management solution featuring multithreaded seat allocation and concurrent booking handling, demonstrating OOP principles and exception handling in Java.",
      image: "/images/event.jpg",
      tags: ["Java", "OOP", "Multithreading", "Exception Handling"],
      github: "https://github.com/manuja003/event-ticketing",
    },
    {
      id: 6,
      title: "University Grading Visualizer",
      description: "Developed a dynamic grading analysis system using Python with graphics.py, transforming raw academic data into interactive histograms that visually represent grade distributions across faculties.",
      image: "/images/grade.jpg",
      tags: ["Python", "Data Visualization", "Graphics.py", "Data Analysis"],
      github: "https://github.com/manuja003/university-grading",
    },
    {
      id: 7,
      title: "Plane Management Console",
      description: "Created an aviation operations system utilizing 2D arrays for seat mapping and flight scheduling, with CSV data persistence for airline staff administration.",
      image: "/images/flight.jpg",
      tags: ["Java", "2D Arrays", "CSV", "Flight Management"],
      github: "https://github.com/manuja003/plane-management",
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-700 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <div className="flex justify-between items-center mb-16">
            <h2 className="section-title">My Projects</h2>
            
            <a 
              href="/documents/ManujaPinsaraCV.pdf" 
              download="ManujaPinsaraCV.pdf"
              className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/80 transition-colors shadow-md hover:shadow-lg"
            >
              <Download className="h-5 w-5" />
              Download CV
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.id} 
                className="project-card glass-card"
                style={{ '--animation-order': index } as React.CSSProperties}
              >
                <div className="relative overflow-hidden h-60 group rounded-t-xl">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  
                  <p className="text-foreground/70 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="skill-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    {project.github && (
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-sm text-foreground/70 hover:text-primary transition-colors"
                      >
                        <Github className="h-4 w-4 mr-1" />
                        Source Code
                      </a>
                    )}
                    
                    {project.demo && (
                      <a 
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-sm text-foreground/70 hover:text-primary transition-colors"
                      >
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Live Demo
                      </a>
                    )}
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
