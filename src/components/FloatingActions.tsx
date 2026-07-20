import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, ArrowUp } from "lucide-react";

export const FloatingActions = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/94740107900", "_blank");
  };

  return (
    <div className="fixed bottom-6 left-0 right-0 z-[100] pointer-events-none px-4 md:px-10">
      <div className="max-w-7xl mx-auto flex justify-between items-end w-full">
        {/* WhatsApp Button - Left */}
        <motion.button
          initial={{ opacity: 0, scale: 0, x: -20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          onClick={openWhatsApp}
          className="pointer-events-auto w-12 h-12 md:w-16 md:h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(37,211,102,0.3)] transition-all group"
          aria-label="Contact on WhatsApp"
        >
          <MessageCircle size={24} className="md:w-8 md:h-8 group-hover:rotate-12 transition-transform" />
        </motion.button>

        {/* Back to Top Button - Right */}
        <AnimatePresence>
          {showBackToTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0, x: 20 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              className="pointer-events-auto w-12 h-12 md:w-16 md:h-16 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all group"
              aria-label="Back to top"
            >
              <ArrowUp size={24} className="md:w-8 md:h-8 group-hover:-translate-y-1 transition-transform" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
