"use client";

import { useRef, useEffect, useState } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ImageSequence } from "@/components/image-sequence";
import { HeroParticles } from "@/components/hero-particles";
import TestimonialsSection from "@/components/ui/testimonial-v2";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Home() {
  const isMobile = useIsMobile();
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress within the sequence container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Calculate Opacity for different storytelling sections based on scroll percentages
  // 0-20% Hero
  const heroOpacity = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  // 20-40% Story of Mandhi
  const storyOpacity = useTransform(scrollYProgress, [0.2, 0.25, 0.35, 0.4], [0, 1, 1, 0]);
  const storyY = useTransform(scrollYProgress, [0.2, 0.25, 0.35, 0.4], [50, 0, 0, -50]);

  // 40-60% Ingredient Reveal
  const ingredientOpacity = useTransform(scrollYProgress, [0.4, 0.45, 0.55, 0.6], [0, 1, 1, 0]);
  const ingredientY = useTransform(scrollYProgress, [0.4, 0.45, 0.55, 0.6], [50, 0, 0, -50]);

  // 60-80% Cooking Experience
  const cookingOpacity = useTransform(scrollYProgress, [0.6, 0.65, 0.75, 0.8], [0, 1, 1, 0]);
  const cookingY = useTransform(scrollYProgress, [0.6, 0.65, 0.75, 0.8], [50, 0, 0, -50]);

  // 80-100% Final Reveal
  const revealOpacity = useTransform(scrollYProgress, [0.8, 0.85, 1], [0, 1, 1]);
  const revealY = useTransform(scrollYProgress, [0.8, 0.85, 1], [50, 0, 0]);

  return (
    <main className="min-h-screen bg-[#0A0806]">
      <Navbar />

      {/* Mobile Optimized Static Hero */}
      <section className="md:hidden relative h-screen min-h-[600px] max-h-[850px] flex flex-col justify-center px-6 overflow-hidden bg-[#0A0806]">
        {/* Optimized Static Image Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/mandhinames/chickenmandhi.webp"
            alt="Al-Reem Premium Mandhi"
            fill
            quality={65}
            priority
            sizes="(max-width: 800px) 100vw, 800px"
            className="object-cover object-[80%_center]"
          />
          {/* Pure Black Gradient Overlay (70% to 90% opacity) */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0806]/70 to-[#0A0806]/90 z-10" />
        </div>

        {/* Content Container (Left-aligned, simplified animation) */}
        <motion.div 
          className="relative z-20 flex flex-col gap-6 w-full pt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: "linear" }}
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="text-[#D4AF37] text-[10px] uppercase font-bold tracking-[0.2em]">
              The Original Kuzhi Mandhi
            </span>
            <div className="w-8 h-[1px] bg-[#D4AF37]" />
          </div>

          {/* Headline - High Contrast, Tight Leading */}
          <h1 className="font-serif text-white font-semibold text-[42px] leading-[1.1] tracking-tight">
            Crafted by <br /><span className="text-[#D4AF37]">Fire.</span>
          </h1>

          {/* Subtext - Reduced Visually in Hierarchy compared to CTA */}
          <p className="text-white/80 text-[15px] leading-[1.2] font-light max-w-[85%] mt-1">
            Slow cooked underground.<br />Served with heritage.
          </p>

          {/* CTA Group - Not edge-to-edge, strong contrast, no glassmorphism */}
          <div className="flex flex-col gap-4 w-full max-w-[300px] mt-6">
            <a 
              href="https://www.swiggy.com/search?query=Alreem+Mandhi" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full text-center py-4 rounded-full bg-[#D4AF37] text-[#0A0806] text-[12px] font-bold tracking-[0.2em] uppercase"
            >
              Order Now
            </a>
            <a 
              href="#menu" 
              className="w-full text-center py-4 rounded-full border border-white/20 text-white text-[12px] font-bold tracking-[0.2em] uppercase"
            >
              Explore Menu
            </a>
          </div>
        </motion.div>
      </section>

      {/* Scrollytelling Container (Desktop Only, 300vh) */}
      <section ref={containerRef} className="hidden md:block relative h-[300vh]">
        {/* Sticky Visuals */}
        <div className="sticky top-0 h-screen overflow-hidden">
          <ImageSequence progress={scrollYProgress} frameCount={188} />
          <HeroParticles />
          {/* Highly Refined Background Overlays */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            {/* Scrims: Top and Bottom edge gradients for smooth dark integration */}
            <div className="absolute inset-x-0 top-0 h-[30%] bg-gradient-to-b from-[#0A0806]/90 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-[#0A0806]/90 to-transparent" />

            {/* Global base darkening */}
            <div className="absolute inset-0 bg-[#0A0806]/10" />

            {/* Left 40% clean dark canvas fading to 60% right visual */}
            <div className="absolute inset-y-0 left-0 w-[100%] sm:w-[60%] md:w-[50%] bg-gradient-to-r from-[#0A0806] via-[#0A0806]/80 to-transparent" />
          </div>
          {/* 1. Hero (0-15%) */}
          <motion.div
            style={{ opacity: heroOpacity, y: heroY }}
            className="absolute inset-0 flex flex-col justify-center px-6 md:px-16 lg:px-24 pointer-events-none"
          >
            <div className="w-full md:w-[45vw] max-w-[650px] relative z-10 pt-[12vh] pointer-events-auto">
              {/* Overhead Rhythm Label */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-4 mb-6"
              >
                <span className="text-[#D4AF37] text-[10px] md:text-[11px] font-sans tracking-[0.3em] uppercase font-bold">
                  The Original Kuzhi Mandhi
                </span>
                <div className="w-12 h-[1px] bg-[#D4AF37]/50" />
              </motion.div>

              <div className="overflow-hidden mb-1">
                <motion.h1
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  className="font-serif text-[#F9F6F0] font-semibold leading-[1.05] tracking-[-0.03em] drop-shadow-xl"
                  style={{ fontSize: "clamp(48px, 6vw, 84px)" }}
                >
                  Crafted by <span className="text-[#D4AF37]">Fire.</span>
                </motion.h1>
              </div>
              <div className="overflow-hidden mb-1">
                <motion.h1
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1.2, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className="font-serif text-[#F9F6F0] font-semibold leading-[1.05] tracking-[-0.03em] drop-shadow-xl"
                  style={{ fontSize: "clamp(48px, 6vw, 84px)" }}
                >
                  Perfected by
                </motion.h1>
              </div>
              <div className="overflow-hidden mb-10">
                <motion.h1
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="font-serif text-[#D4AF37] font-semibold leading-[1.05] tracking-[-0.03em] drop-shadow-xl"
                  style={{ fontSize: "clamp(48px, 6vw, 84px)" }}
                >
                  Time.
                </motion.h1>
              </div>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="text-[#E5E5E5] mb-12 max-w-[480px] font-sans antialiased font-light leading-relaxed tracking-[0.02em] text-[16px] md:text-[18px] opacity-90 drop-shadow-sm"
              >
                Slow cooked underground. Served with heritage.<br />Loved across Kerala.
              </motion.p>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col sm:flex-row w-full sm:w-auto gap-[20px]"
              >
                <a
                  href="https://www.swiggy.com/search?query=Alreem+Mandhi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-center gap-3 px-[40px] py-[18px] rounded-full bg-[#D4AF37] text-[#0A0806] text-[12px] font-sans font-bold tracking-[0.2em] uppercase transition-all duration-500 ease-out transform hover:-translate-y-1 hover:scale-105 hover:bg-[#F5C518] shadow-lg hover:shadow-[0_15px_40px_-10px_rgba(212,175,55,0.7)]"
                >
                  Order Now
                  <svg className="w-4 h-4 transition-transform duration-500 ease-out group-hover:translate-x-2 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="#menu"
                  className="group flex items-center justify-center gap-3 px-[32px] py-[18px] rounded-full border border-white/10 bg-white/5 text-[#F9F6F0] text-[12px] font-sans font-medium tracking-[0.3em] uppercase transition-all duration-500 ease-out transform hover:-translate-y-1 hover:scale-105 hover:bg-white/10 hover:border-white/30 backdrop-blur-md"
                >
                  Explore Menus
                  <svg className="w-4 h-4 text-[#D4AF37] opacity-0 -ml-4 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:ml-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 1 }}
              className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 pointer-events-none"
            >
              <div className="w-[1px] h-10 bg-[#FDFCF0]/20 overflow-hidden relative">
                <motion.div
                  initial={{ y: "-100%" }}
                  animate={{ y: "200%" }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-x-0 top-0 w-full h-[40%] bg-[#D4AF37]"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* 2. Story (15-30%) */}
          <motion.div
            style={{ opacity: storyOpacity, y: storyY }}
            className="absolute inset-x-6 md:inset-x-16 lg:inset-x-24 top-1/2 -translate-y-1/2 w-full md:w-[45vw] max-w-2xl text-left pointer-events-none"
          >
            <h2 className="font-serif text-[40px] md:text-[64px] text-[#FDFCF0] leading-[1.1] tracking-[-0.02em] mb-6 font-medium">
              Mandhi is not just <br /> <span className="text-[#D4AF37] italic font-light">rice and meat.</span>
            </h2>
            <div className="space-y-2 text-lg md:text-2xl text-[#FDFCF0]/60 leading-relaxed font-light">
              <p>It is fire. It is patience. It is tradition.</p>
            </div>
          </motion.div>

          {/* 3. Ingredients (30-50%) */}
          <motion.div
            style={{ opacity: ingredientOpacity, y: ingredientY }}
            className="absolute inset-x-6 md:inset-x-16 lg:inset-x-24 top-1/2 -translate-y-1/2 w-full md:w-[45vw] max-w-2xl text-left pointer-events-none"
          >
            <h2 className="font-serif text-[40px] md:text-[64px] text-[#FDFCF0] leading-[1.1] tracking-[-0.02em] mb-6 font-medium">
              Only the <br /><span className="text-[#D4AF37] italic font-light">finest ingredients.</span>
            </h2>
            <div className="space-y-2 text-lg md:text-2xl text-[#FDFCF0]/60 leading-relaxed font-light">
              <p>Fragrant basmati rice.</p>
              <p>Hand-selected spices. Fresh cuts of meat.</p>
              <p>Combined with fire and time.</p>
            </div>
          </motion.div>

          {/* 4. Cooking (50-70%) */}
          <motion.div
            style={{ opacity: cookingOpacity, y: cookingY }}
            className="absolute inset-x-6 md:inset-x-16 lg:inset-x-24 top-1/2 -translate-y-1/2 w-full md:w-[45vw] max-w-2xl text-left pointer-events-none"
          >
            <h2 className="font-serif text-[40px] md:text-[64px] text-[#FDFCF0] leading-[1.1] tracking-[-0.02em] mb-6 font-medium">
              Slow cooked <br /><span className="text-[#D4AF37] italic font-light">beneath the earth.</span>
            </h2>
            <div className="space-y-4 text-lg md:text-2xl text-[#FDFCF0]/60 leading-relaxed font-light">
              <p>Cooked underground with controlled heat and aromatic spices.</p>
              <p>Every grain absorbs deep, authentic flavor.</p>
            </div>
          </motion.div>

          {/* 5. Reveal (70-85%) */}
          <motion.div
            style={{ opacity: revealOpacity }}
            className="absolute inset-0 bg-[#0A0806]/60 backdrop-blur-md z-0 pointer-events-none"
          />

          <motion.div
            style={{ opacity: revealOpacity, y: revealY }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10 pointer-events-none"
          >
            <h2 className="font-serif text-[48px] md:text-[84px] text-[#FDFCF0] mb-8 max-w-4xl font-medium leading-[1.05] tracking-[-0.03em]">
              The taste Kerala <br /><span className="text-[#D4AF37] italic font-light">fell in love with.</span>
            </h2>
            <div className="text-xl md:text-2xl text-[#FDFCF0]/80 font-light flex flex-col items-center">
              <p>Tender meat. Fragrant rice. Fire-crafted flavor.</p>
              <p className="mt-8 text-[14px] text-[#D4AF37] tracking-[0.2em] uppercase font-bold">Mandhi the way it was meant to be.</p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Signature Dishes */}
      <section id="menu" className="py-20 md:py-24 px-4 md:px-12 max-w-7xl mx-auto">
        <h2 className="font-serif text-3xl md:text-5xl text-center text-[#D4AF37] mb-10 md:mb-16 drop-shadow-[0_4px_24px_rgba(0,0,0,1)]">Signature Mandhi</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              name: "Chicken mandi",
              desc: "Chicken Mandi is a fragrant Arabian rice dish with tender spiced chicken and smoky flavors, served with traditional flair.",
              image: "/mandhinames/chickenmandhi.webp"
            },
            {
              name: "Mutton mandi",
              desc: "A flavorful rice dish with juicy, slow-cooked mutton and rich Arabic spices, served with an authentic smoky touch.",
              image: "/mandhinames/mutton-mandhi.webp"
            },
            {
              name: "Beef mandi",
              desc: "Beef Mandi is a hearty Arabic rice dish with tender, spiced beef slow-cooked to perfection and served with smoky, fragrant rice.",
              image: "/mandhinames/beefmandhi.webp"
            },
            {
              name: "Alfaham mandi",
              desc: "A delicious fusion of juicy grilled chicken and fragrant spiced rice, our Alfaham Mandi is a smoky, flavorful twist on the classic.",
              image: "/mandhinames/alfaham-mandhi.webp"
            },
            {
              name: "Peri peri mandi",
              desc: "Peri Peri Mandi is a spicy fusion of Arabic rice and tender meat tossed in zesty Peri Peri sauce for a bold, fiery flavor.",
              image: "/mandhinames/periperi-mandhi.webp"
            },
            {
              name: "Honey chilly mandi",
              desc: "Blends sweet and spicy flavors with tender meat, aromatic rice, and a drizzle of honey chili glaze for a bold fusion twist.",
              image: "/mandhinames/honey-chilly-mandhi.webp"
            }
          ].map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: isMobile ? 0.4 : 0.8, delay: isMobile ? 0 : index * 0.1, ease: isMobile ? "linear" : [0.16, 1, 0.3, 1] }}
              className="relative h-[360px] md:h-[420px] lg:h-[440px] rounded-[1.5rem] overflow-hidden group cursor-pointer border border-[#D4AF37]/20 md:border-[#D4AF37]/30 transition-all duration-700 shadow-none md:shadow-xl md:hover:border-[#D4AF37]/50 md:hover:shadow-[0_20px_40px_-10px_rgba(212,175,55,0.15)]"
            >
              {/* Image Background seamlessly optimized via next/image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  quality={65}
                  className="object-cover transition-transform duration-1000 md:group-hover:scale-[1.08]"
                />
              </div>

              {/* Permanent Bottom Dark Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0806] via-[#0A0806]/70 to-transparent opacity-95 pointer-events-none z-0" />

              {/* Text Container with slight upward lift on hover */}
              <div className="absolute inset-x-0 bottom-0 z-10 p-6 md:p-8 flex flex-col justify-end transition-transform duration-700 md:group-hover:-translate-y-2 pointer-events-none">
                <h3 className="font-sans text-[32px] md:text-[34px] font-medium text-[#D4AF37] mb-3">
                  {item.name}
                </h3>

                <p className="text-[#FDFCF0]/90 font-sans font-light text-[15px] md:text-[16px] leading-[1.7]">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Dynamic Testimonials / Social Proof */}
      <TestimonialsSection />

      {/* Restaurant Experience Redesign */}
      <section id="experience" className="py-20 md:py-40 px-4 md:px-12 bg-[#0A0806]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div
            initial={{ x: isMobile ? 0 : -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: isMobile ? 0.4 : 1, ease: isMobile ? "linear" : [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-none md:shadow-2xl md:shadow-black/80 relative bg-[#0A0806]">
              <Image
                src="/experience-plate.png"
                alt="Al-Reem Luxury Dining"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={65}
                className="object-contain p-2 md:p-4 transition-transform duration-[2.5s] ease-out md:hover:scale-[1.08] opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0806]/80 via-transparent to-transparent pointer-events-none" />
            </div>
            {/* Floating decorative elements (hidden on mobile for performance) */}
            <div className="hidden md:block absolute -bottom-10 -right-10 w-48 h-48 border border-[#D4AF37]/20 rounded-full blur-2xl animate-pulse" />
            <div className="hidden md:block absolute -top-10 -left-10 w-32 h-32 bg-[#D4AF37]/5 rounded-full blur-xl" />
          </motion.div>

          <div className="text-left">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#D4AF37] font-sans font-bold tracking-[0.3em] uppercase text-xs mb-6 block"
            >
              The Al-Reem Atmosphere
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-5xl md:text-7xl text-[#FDFCF0] mb-8 leading-[1.1]"
            >
              Food tastes better <br />
              <span className="text-[#D4AF37] italic">when shared.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-[#FDFCF0]/70 font-light max-w-xl leading-relaxed mb-12"
            >
              Experience the warmth of Arabian hospitality in our modern, premium dining spaces designed for families and friends to create lasting memories over authentic flavors.
            </motion.p>

            <div className="grid grid-cols-2 gap-8 mb-12 border-y border-[#D4AF37]/10 py-10">
              <div>
                <h4 className="text-[#D4AF37] font-serif text-2xl mb-2">Modern Luxury</h4>
                <p className="text-sm text-[#FDFCF0]/60">Elegantly designed interiors that blend tradition with contemporary aesthetics.</p>
              </div>
              <div>
                <h4 className="text-[#D4AF37] font-serif text-2xl mb-2">Arabic Heritage</h4>
                <p className="text-sm text-[#FDFCF0]/60">Authentic recipes passed down through generations, prepared with pride.</p>
              </div>
            </div>

            <motion.a
              href="/branches"
              whileHover={{ x: 10 }}
              className="inline-flex items-center gap-4 text-[#D4AF37] font-bold tracking-widest uppercase text-xs group"
            >
              Explore our locations
              <span className="w-12 h-[1px] bg-[#D4AF37] group-hover:w-20 transition-all duration-500" />
            </motion.a>
          </div>
        </div>
      </section>

      {/* Final CTA Redesign */}
      <section id="order" className="py-24 md:py-40 px-4 md:px-6 relative overflow-hidden bg-[#0A0806]">
        {/* Cinematic background for CTA */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0A0806]/90 z-10" />
          <Image
            src="/order-bg.jpg"
            alt="CTA Background"
            fill
            sizes="100vw"
            quality={50}
            className="object-cover grayscale opacity-20"
          />
          
          {/* Seamless edge blending to remove hard borders */}
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#0A0806] to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0A0806] to-transparent z-20 pointer-events-none" />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="font-serif text-6xl md:text-8xl text-[#FDFCF0] mb-12 leading-tight tracking-tight drop-shadow-md"
          >
            Taste the Mandhi Everyone <span className="gold-gradient-text">Talks About</span>
          </motion.h2>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 md:gap-8 mt-12 md:mt-16 w-full px-4">
            <motion.a
              href="https://www.swiggy.com/search?query=Alreem+Mandhi"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={isMobile ? {} : { scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-10 md:px-12 py-5 md:py-6 bg-gradient-to-r from-[#D4AF37] via-[#F5C518] to-[#D4AF37] text-[#0A0806] font-bold rounded-full text-[12px] md:text-[13px] tracking-[0.2em] uppercase shadow-[0_0_40px_rgba(212,175,55,0.4)] transition-all duration-500 hover:shadow-[0_0_60px_rgba(212,175,55,0.7)]"
            >
              Order Online Now
            </motion.a>
            <motion.a
              href="/branches"
              whileHover={{ backgroundColor: "rgba(253, 252, 240, 0.05)" }}
              className="px-12 py-6 border border-[#FDFCF0]/20 text-[#FDFCF0] rounded-full text-[13px] tracking-[0.2em] uppercase backdrop-blur-sm"
            >
              Visit a Branch
            </motion.a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
