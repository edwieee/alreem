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
    primary: "bg-[#1E3A2B] text-white hover:bg-[#3A5F45]",
    secondary: "bg-[#DCE5DE] text-[#1E3A2B] hover:bg-[#c9d4cc]",
    outline: "border border-[#1E3A2B] text-[#1E3A2B] hover:bg-[#1E3A2B] hover:text-white"
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
