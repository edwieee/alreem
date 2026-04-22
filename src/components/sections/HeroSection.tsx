"use client";

import { motion } from "framer-motion";
import { AnimatedButton } from "../ui/animated-button";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-16 px-6 overflow-hidden">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#F9F8F6]/80 mix-blend-overlay z-10" />
        <img 
          src="https://images.unsplash.com/photo-1558904541-efa843a96f0f?q=80&w=2000&auto=format&fit=crop" 
          alt="Landscaping Background" 
          className="w-full h-full object-cover opacity-40"
        />
        {/* Soft bottom gradient to blend into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#F9F8F6] to-transparent z-10" />
      </div>

      <div className="container mx-auto relative z-10 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-sm font-semibold tracking-wider text-[#3A5F45] uppercase mb-4 block">
            Greenora Landscape & Design
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-[#1C241F] leading-tight mb-6">
            Expert Landscaping, Personalized for You
          </h1>
          <p className="text-lg md:text-xl text-[#4A6046] mb-10 max-w-2xl mx-auto leading-relaxed">
            From design to maintenance, our team delivers professional landscaping solutions tailored to your home, ensuring every garden looks its best year-round.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <AnimatedButton variant="primary" className="w-full sm:w-auto text-base px-8 py-4">
              Work with us
            </AnimatedButton>
            <AnimatedButton variant="outline" className="w-full sm:w-auto text-base px-8 py-4">
              View Projects
            </AnimatedButton>
          </div>
        </motion.div>
      </div>

      {/* Stats Bar */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="container mx-auto relative z-10 mt-auto pt-20"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center border-t border-[#DCE5DE] pt-8">
          <div>
            <h3 className="text-4xl font-bold text-[#1E3A2B] mb-2">15+</h3>
            <p className="text-sm text-[#4A6046] font-medium">Years in the Industry</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-[#1E3A2B] mb-2">99%</h3>
            <p className="text-sm text-[#4A6046] font-medium">Client Satisfaction</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-[#1E3A2B] mb-2">500+</h3>
            <p className="text-sm text-[#4A6046] font-medium">Completed Projects</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-[#1E3A2B] mb-2">24</h3>
            <p className="text-sm text-[#4A6046] font-medium">Expert Landscapers</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
