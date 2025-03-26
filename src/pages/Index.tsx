
import { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Achievements from '../components/Achievements';
import Education from '../components/Education';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Initialize page with a smooth reveal
    document.body.classList.add('opacity-0');
    
    setTimeout(() => {
      document.body.classList.remove('opacity-0');
      document.body.classList.add('transition-opacity', 'duration-500', 'opacity-100');
    }, 100);
    
    // Preload images for better UX
    const imageUrls = [
      'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1',
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b',
      'https://images.unsplash.com/photo-1436491865332-7a61a109cc05',
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173'
    ];
    
    imageUrls.forEach(url => {
      const img = new Image();
      img.src = url;
    });
    
    return () => {
      document.body.classList.remove('transition-opacity', 'duration-500', 'opacity-100');
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Achievements />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
