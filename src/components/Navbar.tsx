import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  const scrollToSection = (id: string) => {
    setIsMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const isSolid = isScrolled || isMobileOpen;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[90] transition-all duration-300 ${
        isSolid
          ? "bg-[#0A0A0B]/80 backdrop-blur-lg border-b border-white/5"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10 flex items-center justify-between h-16 md:h-20">
            <a
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
                setIsMobileOpen(false);
              }}
              className="text-[#D7E2EA] font-black text-xl uppercase tracking-tighter"
            >
              Manuja<span className="text-primary">.</span>
            </a>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                  className="text-[#D7E2EA]/70 hover:text-white text-sm font-medium uppercase tracking-wider transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Mobile toggle */}
            <button
              onClick={() => setIsMobileOpen((v) => !v)}
              className="lg:hidden w-10 h-10 flex items-center justify-center text-[#D7E2EA]"
              aria-label={isMobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileOpen}
            >
              {isMobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile menu panel */}
          <AnimatePresence>
            {isMobileOpen && (
              <motion.nav
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25 }}
                className="lg:hidden overflow-hidden bg-[#0A0A0B]/95 backdrop-blur-lg border-t border-white/5"
              >
                <div className="flex flex-col px-5 py-4">
                  {navItems.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(item.id);
                      }}
                      className="py-3 text-[#D7E2EA]/80 hover:text-white text-lg font-medium uppercase tracking-wider border-b border-white/5 last:border-b-0 transition-colors"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
    </header>
  );
};

export default Navbar;
