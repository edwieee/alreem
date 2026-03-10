"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";

const navLinks = [
  { name: "Story", href: "/#story" },
  { name: "Menu", href: "/#menu" },
  { name: "Experience", href: "/#experience" },
  { name: "Branches", href: "/branches" },
];

export function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.nav
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-[6vw] py-6 transition-all duration-700",
        isScrolled
          ? "bg-[#0A0806]/85 backdrop-blur-xl border-b border-white/5 py-4"
          : "bg-transparent border-transparent"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Refined Luxury Logo */}
      <Link 
        href="/" 
        className="text-[26px] font-serif text-[#D4AF37] tracking-[0.02em] font-semibold flex items-center gap-2 hover:opacity-80 transition-opacity"
      >
        AL-REEM <span className="text-[#D4AF37]/50 text-sm font-light mt-1 tracking-[0.3em]">EST. 2010</span>
      </Link>

      {/* Nav Links with Gold Underline Hover */}
      <div className="hidden md:flex items-center gap-12">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="group relative text-[11px] uppercase tracking-[0.15em] font-sans font-bold text-[#FDFCF0]/70 hover:text-[#D4AF37] transition-colors duration-500 py-2"
          >
            {link.name}
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#D4AF37] transform scale-x-0 origin-right transition-transform duration-500 ease-out group-hover:scale-x-100 group-hover:origin-left" />
          </Link>
        ))}
      </div>

      {/* Premium Button */}
      <div className="flex items-center">
        <Link
          href="/#order"
          className="relative overflow-hidden px-8 py-3.5 rounded-[40px] bg-gradient-to-r from-[#D4AF37] to-[#E8C34B] text-[#0A0806] text-[12px] font-bold tracking-[0.15em] uppercase transition-all duration-500 hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] hover:-translate-y-1 group"
        >
          <span className="relative z-10">Order Now</span>
          {/* Subtle shine effect */}
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-[150%]" />
        </Link>
      </div>
    </motion.nav>
  );
}
