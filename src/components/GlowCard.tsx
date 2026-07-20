import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface GlowCardProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
  icon?: React.ReactElement<LucideIcon>;
  gradient: string;
  delay: number;
  className?: string;
}

export const GlowCard: React.FC<GlowCardProps> = ({ 
  title, 
  description, 
  children, 
  icon, 
  gradient, 
  delay,
  className = ""
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "50px" }}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
      className={`relative flex flex-col justify-start items-start w-full group ${className}`}
    >
      {/* Glow Background */}
      <div
        className="absolute inset-0 w-full h-full opacity-10 rounded-[40px] pointer-events-none group-hover:opacity-25 transition-opacity duration-500"
        style={{
          background: gradient,
          filter: "blur(60px)",
        }}
      />

      {/* Foreground Card with Gradient Border */}
      <div
        className="self-stretch w-full h-full rounded-[40px] z-10 overflow-hidden transition-all duration-500"
        style={{
          border: "8px solid transparent",
          background: `linear-gradient(#1A1A1C, #1A1A1C) padding-box, ${gradient} border-box`,
        }}
      >
        <div className="w-full h-full p-8 md:p-10 flex flex-col justify-between relative z-10">
          <div className="flex flex-col gap-6 h-full">
            {icon && (
              <div className="text-primary group-hover:scale-110 transition-transform duration-500">
                {React.cloneElement(icon as React.ReactElement<{ size?: number; strokeWidth?: number }>, {
                  size: 40,
                  strokeWidth: 2,
                })}
              </div>
            )}
            <div>
              <h3 className="text-white font-black text-2xl mb-4 uppercase tracking-tight group-hover:text-primary transition-colors">
                {title}
              </h3>
              {description && (
                <p className="text-[#D7E2EA]/60 text-lg leading-relaxed font-normal">
                  {description}
                </p>
              )}
              {children}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
