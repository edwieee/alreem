"use client";

import { motion } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { HTMLMotionProps } from "framer-motion";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface AnimatedButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline";
}

export const AnimatedButton = ({
  variant = "primary",
  className,
  children,
  ...props
}: AnimatedButtonProps) => {
  const baseStyles = "relative inline-flex items-center justify-center px-6 py-3 text-sm font-medium transition-colors overflow-hidden rounded-full";
  
  const variants = {
    primary: "bg-[#D4AF37] text-[#0A0806] hover:bg-[#F5C518] shadow-[0_0_20px_rgba(212,175,55,0.2)]",
    secondary: "bg-[#2B1B12] text-[#D4AF37] hover:bg-[#3d271a] border border-[#D4AF37]/20",
    outline: "border border-[#D4AF37]/50 text-[#FDFCF0] hover:bg-[#D4AF37] hover:text-[#0A0806] hover:border-[#D4AF37]"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(baseStyles, variants[variant as keyof typeof variants], className)}
      {...props}
    >
      <span className="relative z-10">{children as React.ReactNode}</span>
    </motion.button>
  );
};
