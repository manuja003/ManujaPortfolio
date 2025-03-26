import { useState, useEffect } from 'react';
import { Award, Download } from 'lucide-react';

type Achievement = {
  id: number;
  title: string;
  date: string;
  description: string;
  certificate?: string;
};

const Achievements = () => {
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
    
    const section = document.getElementById('achievements');
    if (section) {
      observer.observe(section);
    }
    
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const achievements: Achievement[] = [
    {
      id: 1,
      title: "LinkedIn Learning Certificates",
      date: "2023-2024",
      description: "• Certificate in Advanced Java Programming\n• Certificate in React.js Essential Training\n• Certificate in Java Object-Oriented Programming\n• Certificate in Python for Beginners\n• Certificate in React: Using TypeScript\n• Certificate in React Essential Training",
      certificate: "#"
    },
    {
      id: 2,
      title: "Coding Competition Participation",
      date: "2023-2024",
      description: "• HaExtreme 3.0\n• Hult Prize",
    },
    {
      id: 3,
      title: "Leadership & Extracurricular Activities",
      date: "2011-2024",
      description: "• Divisional Officer at St. John Ambulance Brigade - Galle District (2024)\n• Cadet Leader at St. John Ambulance Brigade (2021-2022)\n• Chief Student Consultant at Mahinda College (2020)\n• Senior Prefect at Mahinda College Board of Prefects (2019-2020)\n• Vice President of Mahinda College Mass Media Circle (2021/22)\n• Prefect at Bodhiraja Dhamma School (2017/18)\n• Member of Mahinda College Mass Media Circle (2014-2022)\n• Member of Mahinda College scout troop (2011-2015)",
    },
    {
      id: 4,
      title: "Sports Achievement",
      date: "2015",
      description: "• All Island Singer Cricket Tournament U13 Runners-Up Team Member",
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-700 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <h2 className="section-title text-center mx-auto">Achievements & Certificates</h2>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div 
                key={achievement.id}
                className="glass-card p-8 flex flex-col h-full"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  opacity: 0,
                  animation: isVisible ? 'fadeIn 0.5s ease-out forwards' : 'none'
                }}
              >
                <div className="flex items-start mb-4">
                  <div className="p-2 rounded-full bg-primary/10 mr-4 mt-1">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{achievement.title}</h3>
                    <p className="text-foreground/60 text-sm">{achievement.date}</p>
                  </div>
                </div>
                
                <p className="text-foreground/70 mb-6 flex-grow whitespace-pre-line">
                  {achievement.description}
                </p>
                
                {achievement.certificate && (
                  <a 
                    href={achievement.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-primary/80 hover:text-primary transition-colors self-start mt-auto"
                  >
                    <Download className="h-4 w-4 mr-1" />
                    View Certificate
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
