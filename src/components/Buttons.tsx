import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
}

export const ContactButton: React.FC<ButtonProps> = ({ label, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-full bg-white text-[#0A0A0B] uppercase tracking-widest font-bold transition-all hover:bg-[#D7E2EA] active:scale-95 shadow-lg hover:shadow-white/10",
        "px-8 py-3.5 sm:px-10 sm:py-4 text-sm sm:text-base",
        "relative overflow-hidden group",
        className
      )}
    >
      <span className="relative z-10">{label}</span>
    </button>
  );
};

export const LiveProjectButton: React.FC<ButtonProps> = ({ label, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] uppercase tracking-widest font-medium transition-colors hover:bg-[#D7E2EA]/10 active:scale-95",
        "px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base",
        className
      )}
    >
      {label}
    </button>
  );
};

export const CaseStudyButton: React.FC<ButtonProps> = ({ label, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-full bg-white text-[#0A0A0B] uppercase tracking-widest font-bold transition-all hover:bg-[#D7E2EA] active:scale-95 shadow-lg hover:shadow-white/10",
        "px-6 py-2.5 sm:px-8 sm:py-3 text-xs sm:text-sm",
        className
      )}
    >
      {label}
    </button>
  );
};
