"use client";

import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 bg-[#F9F8F6]">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <span className="text-sm font-semibold tracking-wider text-[#3A5F45] uppercase">
              (about us)
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1C241F] leading-tight">
              We provide complete, reliable, and affordable landscaping solutions across the USA.
            </h2>
            <p className="text-lg text-[#4A6046] leading-relaxed">
              At Greenora, we create beautiful, functional outdoor spaces with care and expertise. From design to maintenance, we ensure your outdoor spaces are built to last.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[500px] rounded-2xl overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1000&auto=format&fit=crop" 
              alt="Landscaping work" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.1)]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
