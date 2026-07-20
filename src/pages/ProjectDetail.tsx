import React, { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, Layers, Target, Lightbulb, Code2 } from "lucide-react";
import { projectDetails } from "../data/projects";
import { Footer } from "../components/Footer";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = id ? projectDetails[id] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0A0A0B] flex flex-col items-center justify-center text-[#D7E2EA]">
        <h1 className="text-4xl font-bold mb-6">Project Not Found</h1>
        <Link to="/" className="text-primary hover:underline flex items-center gap-2">
          <ArrowLeft size={20} /> Back to Portfolio
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-[#D7E2EA] font-kanit">
      {/* Header */}
      <nav className="fixed top-0 w-full z-50 px-6 py-6 bg-[#0A0A0B]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <button 
            onClick={() => navigate(-1)}
            className="group flex items-center gap-2 text-[#D7E2EA]/60 hover:text-white transition-colors"
          >
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white transition-all">
              <ArrowLeft size={18} />
            </div>
            <span className="uppercase tracking-widest text-xs font-bold">Back</span>
          </button>
          
          <h2 className="text-xl font-black uppercase tracking-tighter">
            Manuja<span className="text-primary">.</span>
          </h2>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">
                Case Study
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter mb-8 leading-none">
                {project.title}
              </h1>
              <p className="text-xl text-[#D7E2EA]/70 leading-relaxed mb-10 max-w-xl">
                {project.fullDescription}
              </p>
              
              <div className="flex flex-wrap gap-6">
                {project.liveLink && (
                  <a 
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-8 py-4 bg-white text-[#0A0A0B] rounded-full font-bold uppercase tracking-widest hover:bg-[#D7E2EA] transition-all"
                  >
                    <ExternalLink size={20} />
                    Live Preview
                  </a>
                )}
                {project.githubLink && (
                  <a 
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-bold uppercase tracking-widest hover:bg-white/10 transition-all"
                  >
                    <Github size={20} />
                    Source Code
                  </a>
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative rounded-[40px] overflow-hidden"
              style={{
                border: "8px solid transparent",
                background: `linear-gradient(#0A0A0B, #0A0A0B) padding-box, ${project.gradient} border-box`,
              }}
            >
              <img 
                src={project.images[0]} 
                alt={project.title}
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
            {/* Challenges */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-10 rounded-[40px] bg-[#1A1A1C] border border-white/5"
            >
              <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-500 mb-6">
                <Target size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-6 uppercase tracking-tight">Challenges</h3>
              <ul className="flex flex-col gap-4">
                {project.challenges.map((c, i) => (
                  <li key={i} className="text-[#D7E2EA]/60 leading-relaxed flex gap-3">
                    <span className="text-red-500 font-bold">•</span> {c}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Solutions */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-10 rounded-[40px] bg-[#1A1A1C] border border-white/5"
            >
              <div className="w-12 h-12 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-500 mb-6">
                <Lightbulb size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-6 uppercase tracking-tight">Solutions</h3>
              <ul className="flex flex-col gap-4">
                {project.solutions.map((s, i) => (
                  <li key={i} className="text-[#D7E2EA]/60 leading-relaxed flex gap-3">
                    <span className="text-green-500 font-bold">•</span> {s}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Tech Stack */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-10 rounded-[40px] bg-[#1A1A1C] border border-white/5"
            >
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 mb-6">
                <Code2 size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-6 uppercase tracking-tight">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-[#D7E2EA]/80">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Architecture Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative p-12 md:p-20 rounded-[60px] overflow-hidden mb-32"
          >
            <div className="absolute inset-0 bg-[#1A1A1C]" />
            <div 
              className="absolute inset-0 opacity-10"
              style={{ background: project.gradient }}
            />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <div className="w-16 h-16 rounded-3xl bg-primary/10 flex items-center justify-center text-primary mb-8">
                  <Layers size={32} />
                </div>
                <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8">Architecture</h3>
                <p className="text-xl text-[#D7E2EA]/70 leading-relaxed">
                  {project.architecture}
                </p>
              </div>
              <div className="lg:col-span-5 flex justify-center">
                 {/* Visual representation of architecture could go here, or just a stylized icon */}
                 <div className="w-full h-64 border-2 border-white/5 rounded-3xl flex items-center justify-center bg-black/20 backdrop-blur-sm">
                    <Layers size={80} className="text-[#D7E2EA]/10 animate-float" />
                 </div>
              </div>
            </div>
          </motion.div>

          {/* Next Project Link */}
          <div className="flex flex-col items-center justify-center py-20 border-t border-white/5">
             <h4 className="text-[#D7E2EA]/40 uppercase tracking-widest text-sm mb-8">Ready to see more?</h4>
             <Link 
              to="/"
              className="text-4xl md:text-6xl font-black uppercase tracking-tighter hover:text-primary transition-colors"
             >
               Back to Home
             </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
