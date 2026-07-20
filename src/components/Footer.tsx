import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter, ArrowUp, Download, Instagram } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github size={20} />, href: "https://github.com/manuja003", label: "GitHub" },
    { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/manuja-pinsara-lankanath-559a22294/", label: "LinkedIn" },
    { icon: <Instagram size={20} />, href: "https://www.instagram.com/_manuja_pinsara_/", label: "Instagram" },
    { icon: <Mail size={20} />, href: "mailto:manujalankanath@gmail.com", label: "Email" },
  ];

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-[#0A0A0B] pt-20 pb-10 px-5 sm:px-8 md:px-10 relative z-10 overflow-hidden">
      {/* Decorative Gradient Background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-gradient-to-t from-primary/10 to-transparent pointer-events-none opacity-50" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16">
          {/* Brand Section */}
          <div className="md:col-span-5 flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-[#D7E2EA] font-black text-4xl mb-6 uppercase tracking-tighter">
                Manuja<span className="text-primary">.</span>
              </h2>
              <p className="text-[#D7E2EA]/60 text-lg max-w-sm mb-8 leading-relaxed">
                Software Engineering student at IIT Sri Lanka (University of Westminster), passionate about building exceptional digital experiences.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-[#D7E2EA]/20 flex items-center justify-center text-[#D7E2EA]/60 hover:text-white hover:border-white transition-all duration-300"
                    whileHover={{ y: -5 }}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 flex flex-col items-start md:items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="text-[#D7E2EA] font-bold uppercase tracking-widest text-sm mb-8">Navigation</h4>
              <ul className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-[#D7E2EA]/60 hover:text-white transition-colors duration-200 text-lg"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Action Section */}
          <div className="md:col-span-4 flex flex-col items-start md:items-end">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col items-start md:items-end w-full"
            >
              <h4 className="text-[#D7E2EA] font-bold uppercase tracking-widest text-sm mb-8">Get In Touch</h4>
              <a
                href="mailto:manujalankanath@gmail.com"
                className="text-[#D7E2EA] font-medium text-xl md:text-2xl mb-8 hover:text-primary transition-colors duration-200 break-all"
              >
                manujalankanath@gmail.com
              </a>

              <a
                href="/documents/ManujaPinsaraCV.pdf"
                download="ManujaPinsaraCV.pdf"
                className="flex items-center gap-3 px-8 py-4 bg-white text-[#0A0A0B] rounded-full font-bold uppercase tracking-widest hover:bg-[#D7E2EA] transition-all duration-300 group"
              >
                <Download size={20} className="group-hover:translate-y-1 transition-transform" />
                Download CV
              </a>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-[#D7E2EA]/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[#D7E2EA]/40 text-sm">
            &copy; {currentYear} Manuja Pinsara Lankanath. All rights reserved.
          </p>
          
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-[#D7E2EA]/60 hover:text-white transition-colors duration-300"
          >
            <span className="uppercase tracking-widest text-xs font-bold">Back to top</span>
            <div className="w-10 h-10 rounded-full border border-[#D7E2EA]/20 flex items-center justify-center group-hover:border-white transition-all duration-300">
              <ArrowUp size={18} className="group-hover:-translate-y-1 transition-transform" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
