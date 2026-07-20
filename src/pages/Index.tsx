import { HeroSection } from "../components/HeroSection";
import { MarqueeSection } from "../components/MarqueeSection";
import { AboutSection } from "../components/AboutSection";
import { ExperienceSection } from "../components/ExperienceSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { EducationSection } from "../components/EducationSection";
import { AchievementsSection } from "../components/AchievementsSection";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

const Index = () => {
  return (
    <div className="bg-[#0A0A0B] font-kanit">
      <main className="overflow-x-clip">
        <HeroSection />
        <MarqueeSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <AchievementsSection />
        <TestimonialsSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
