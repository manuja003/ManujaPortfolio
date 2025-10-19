import { ArrowDown } from 'lucide-react';
import BlurText from "./BlurText";
import { BackgroundLines } from "./ui/background-lines";

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      const htmlElement = aboutSection as HTMLElement;
      window.scrollTo({
        top: htmlElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-16">
      <BackgroundLines className="absolute inset-0">
        <div />
      </BackgroundLines>
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <div className="w-full max-w-4xl">
          {/* <h2 className="text-2xl md:text-3xl mb-6 font-medium text-primary animate-slideInFromLeft tracking-wider">
            Hello
          </h2> */}
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-white dark:text-white animate-slideInFromLeft leading-tight" 
              style={{ 
                animationDelay: '200ms',
                textShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
              }}>
            <div className="mb-4">I'M</div>
            <div className="mb-16">
              <span className="bg-gradient-to-r from-white via-primary/50 to-white text-transparent bg-clip-text inline-block">
                MANUJA PINSARA LANKANATH
              </span>
            </div>
            <div className="text-3xl md:text-4xl lg:text-5xl space-y-2">
              <div className="text-primary bg-gradient-to-r from-primary to-primary/80 text-transparent bg-clip-text">
                SOFTWARE
              </div>
              <div className="bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
                ENGINEERING UNDERGRADUATE
              </div>
            </div>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12 animate-slideInFromLeft leading-relaxed" 
             style={{ 
               animationDelay: '400ms',
               textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
             }}>
            <span className="font-semibold text-primary">Software Engineering Student</span> | 
            <span className="font-medium"> Passionate About Technology and Innovation</span>
          </p>
            
          <div className="flex flex-wrap gap-6 justify-center animate-slideInFromLeft" style={{ animationDelay: '600ms' }}>
            <a
              href="#projects"
              className="px-8 py-4 bg-transparent text-white border-2 border-white rounded-full font-medium hover:bg-white hover:text-navy dark:hover:text-background transition-all duration-300 transform hover:scale-105"
            >
              VIEW MY PROJECTS
            </a>
            
            <a
              href="#contact"
              className="px-8 py-4 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-primary/50"
            >
              CONTACT ME
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
