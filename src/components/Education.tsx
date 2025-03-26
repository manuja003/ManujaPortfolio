import { useState, useEffect } from 'react';
import { BookOpen, ExternalLink, Github } from 'lucide-react';

type Education = {
  id: number;
  degree: string;
  institution: string;
  location: string;
  duration: string;
  description: string;
  image: string;
  link?: string;
};

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    const section = document.getElementById('education');
    if (section) {
      observer.observe(section);
    }
    
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const educationData: Education[] = [
    {
      id: 1,
      degree: "BEng (Hons) Software Engineering",
      institution: "Informatic Institute of Technology Sri Lanka affiliated with the University of Westminster",
      location: "Colombo",
      duration: "2023 - Present",
      description: "• Object Oriented Programming\n• Database System\n• Software Development Group Project\n• Server-Side Web Development\n• Algorithms, Theory, Design and Implementation\n• Software Engineering Principles and Practice\n• Software Development I\n• Mathematics For Computing\n• Trends in Computer\n• Computer Systems Fundamentals\n• Web Designing and Development\n• Software Development II",
      image: "/images/IIT-Campus-Logo.jpg",
      link: "https://www.westminster.ac.uk/"
    },
    {
      id: 2,
      degree: "GCE A/L",
      institution: "Mahinda College",
      location: "Galle",
      duration: "2022",
      description: "• Passed in Commerce Stream with:\n  - Accounting (B)\n  - ICT (C)\n  - Business Studies (C)",
      image: "/images/GCE.jpg",
    },
    {
      id: 3,
      degree: "GCE O/L",
      institution: "Mahinda College",
      location: "Galle",
      duration: "2019",
      description: "• Passed with:\n  - Mathematics (A)\n  - ICT (A)\n  - Drama (A)\n  - English (B)\n  - Sinhala (B)\n  - History (B)\n  - Commerce (B)\n  - Science (C)\n  - Buddhism (C)\n  - Tamil (2020) (C)",
      image: "/images/GCE.jpg",
    }
  ];

  return (
    <section id="education" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-700 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <div className="flex justify-between items-center mb-16">
            <h2 className="section-title">My Education</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {educationData.map((education, index) => (
              <div 
                key={education.id} 
                className="glass-card overflow-hidden"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  opacity: 0,
                  animation: isVisible ? 'fadeIn 0.5s ease-out forwards' : 'none'
                }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={education.image} 
                    alt={education.degree}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{education.degree}</h3>
                  <p className="text-primary font-medium mb-2">{education.institution}</p>
                  <p className="text-sm text-foreground/60 mb-1">{education.location}</p>
                  <p className="text-foreground/60 text-sm mb-4">{education.duration}</p>
                  
                  <div className="text-foreground/70 mb-6 whitespace-pre-line">
                    {education.description}
                  </div>
                  
                  {education.link && (
                    <div className="mt-4">
                      <a 
                        href={education.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors"
                      >
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Visit Institution Website
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
