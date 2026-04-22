"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";

const navLinks = [
  { name: "Home", href: "/" },
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
        "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-[6vw] pt-6 transition-all duration-700",
        isScrolled
          ? "bg-[#0A0806]/90 backdrop-blur-xl border-b border-white/5 pb-4"
          : "bg-gradient-to-b from-[#0A0806]/80 via-[#0A0806]/20 to-transparent pb-8 border-transparent"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Refined Luxury Logo */}
      <Link
        href="/"
        className="flex items-center hover:opacity-80 transition-opacity drop-shadow-md"
      >
        <img src="/logo.png" alt="AL-REEM MANDI" className="h-12 md:h-16 w-auto object-contain" />
      </Link>

      {/* Nav Links with Gold Underline Hover */}
      <div className="hidden md:flex items-center gap-12">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="group relative text-[11px] uppercase tracking-[0.2em] font-sans font-bold text-[#F9F6F0]/80 hover:text-[#D4AF37] transition-colors duration-500 py-2 drop-shadow-md"
          >
            {link.name}
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#D4AF37] transform scale-x-0 origin-right transition-transform duration-500 ease-out group-hover:scale-x-100 group-hover:origin-left" />
          </Link>
        ))}
      </div>

      {/* Premium Button */}
      <div className="flex items-center">
        <Link
          href="https://www.swiggy.com/search?query=Alreem+Mandhi"
          target="_blank"
          rel="noopener noreferrer"
          className="relative px-8 py-3.5 rounded-full bg-[#D4AF37] text-[#0A0806] text-[12px] font-sans font-bold tracking-[0.2em] uppercase transition-all duration-500 hover:scale-105"
        >
          Order Now
        </Link>
      </div>
    </motion.nav>
  );
}
