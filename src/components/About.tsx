
import { useState, useEffect } from 'react';

const About = () => {
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
    
    const section = document.getElementById('about');
    if (section) {
      observer.observe(section);
    }
    
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-700 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <h2 className="section-title text-center mx-auto">About Me</h2>
          
          <div className="mt-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-card p-6 transform transition-all duration-500 hover:scale-[1.02]">
                <h3 className="text-xl font-semibold mb-4">Who I Am</h3>
                <p className="text-foreground/80 leading-relaxed">
                  I'm a passionate Software Engineering student with a keen interest in technology and innovation. 
                  Currently pursuing my BEng (Hons) Software Engineering degree at the University of Westminster (IIT), 
                  I am dedicated to expanding my knowledge and skills in the field of software development.
                </p>
              </div>
              
              <div className="glass-card p-6 transform transition-all duration-500 hover:scale-[1.02]">
                <h3 className="text-xl font-semibold mb-4">My Journey</h3>
                <p className="text-foreground/80 leading-relaxed">
                  My journey in technology began with a curiosity about how digital systems work. 
                  Through academic studies and personal projects, I've developed a strong foundation in 
                  programming languages and software development practices. I'm constantly seeking 
                  opportunities to apply my knowledge to real-world problems.
                </p>
              </div>
              
              <div className="glass-card p-6 transform transition-all duration-500 hover:scale-[1.02]">
                <h3 className="text-xl font-semibold mb-4">My Goals</h3>
                <p className="text-foreground/80 leading-relaxed">
                  I aim to become a skilled software engineer capable of creating innovative solutions 
                  to complex problems. I'm particularly interested in web development and application design,
                  with a focus on creating intuitive, user-friendly experiences. My academic journey is just 
                  the beginning of my path in the ever-evolving field of technology.
                </p>
              </div>
            </div>
            
            <div className="mt-6 glass-card p-6">
              <h3 className="text-xl font-semibold mb-4">My Approach</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                I believe in a holistic approach to software engineering that balances technical excellence 
                with user-centered design. I'm passionate about creating solutions that not only function 
                flawlessly but also provide an exceptional user experience.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Throughout my academic journey, I've developed a methodical approach to problem-solving and 
                a commitment to continuous learning. As technology evolves, I'm dedicated to staying at the 
                forefront of innovation, adopting new tools and methodologies to enhance my skills as a 
                software engineer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
