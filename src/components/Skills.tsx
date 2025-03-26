import { useState, useEffect } from 'react';
import { Code, Database, Layout, Cpu, PenTool, Users } from 'lucide-react';

type SkillCategory = {
  id: string;
  title: string;
  icon: React.ReactNode;
  skills: string[];
};

const Skills = () => {
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
    
    const section = document.getElementById('skills');
    if (section) {
      observer.observe(section);
    }
    
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const skillCategories: SkillCategory[] = [
    {
      id: 'programming',
      title: 'Programming Languages',
      icon: <Code className="h-6 w-6 text-primary" />,
      skills: ['React', 'HTML', 'CSS', 'Python', 'Java', 'JavaScript']
    },
    {
      id: 'frontend',
      title: 'Frontend Development',
      icon: <Layout className="h-6 w-6 text-primary" />,
      skills: ['React', 'HTML', 'CSS', 'JavaScript']
    },
    {
      id: 'backend',
      title: 'Backend Development',
      icon: <Database className="h-6 w-6 text-primary" />,
      skills: ['Spring Boot', 'MySQL', 'Java', 'Python']
    },
    {
      id: 'tools',
      title: 'Development Tools',
      icon: <Cpu className="h-6 w-6 text-primary" />,
      skills: ['Git', 'GitHub', 'VS Code', 'IntelliJ IDEA']
    },
    {
      id: 'soft',
      title: 'Soft Skills',
      icon: <Users className="h-6 w-6 text-primary" />,
      skills: ['Teamwork', 'Communication', 'Leadership', 'Quick Learner', 'Time Management']
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-700 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <h2 className="section-title text-center mx-auto">My Skills</h2>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div 
                key={category.id}
                className="glass-card p-8 transition-all duration-500 hover:shadow-lg transform hover:-translate-y-1"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  opacity: 0,
                  animation: isVisible ? 'fadeIn 0.5s ease-out forwards' : 'none'
                }}
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-full bg-primary/10 mr-4">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap">
                  {category.skills.map(skill => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
