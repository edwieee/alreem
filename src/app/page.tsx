"use client";

import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ImageSequence } from "@/components/image-sequence";
import { HeroParticles } from "@/components/hero-particles";
import TestimonialsSection from "@/components/ui/testimonial-v2";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress within the sequence container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Calculate Opacity for different storytelling sections based on scroll percentages
  // 0-15% Hero
  const heroOpacity = useTransform(scrollYProgress, [0, 0.1, 0.15], [1, 1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.15], [0, -50]);

  // 15-30% Story of Mandhi
  const storyOpacity = useTransform(scrollYProgress, [0.15, 0.2, 0.25, 0.3], [0, 1, 1, 0]);
  const storyY = useTransform(scrollYProgress, [0.15, 0.2, 0.25, 0.3], [50, 0, 0, -50]);

  // 30-50% Ingredient Reveal
  const ingredientOpacity = useTransform(scrollYProgress, [0.3, 0.35, 0.45, 0.5], [0, 1, 1, 0]);
  const ingredientY = useTransform(scrollYProgress, [0.3, 0.35, 0.45, 0.5], [50, 0, 0, -50]);

  // 50-70% Cooking Experience
  const cookingOpacity = useTransform(scrollYProgress, [0.5, 0.55, 0.65, 0.7], [0, 1, 1, 0]);
  const cookingY = useTransform(scrollYProgress, [0.5, 0.55, 0.65, 0.7], [50, 0, 0, -50]);

  // 70-85% Final Reveal
  const revealOpacity = useTransform(scrollYProgress, [0.7, 0.75, 0.85], [0, 1, 0]);
  const revealY = useTransform(scrollYProgress, [0.7, 0.75, 0.85], [50, 0, -50]);

  return (
    <main className="min-h-screen bg-[#0A0806]">
      <Navbar />

      {/* Scrollytelling Container (400vh) */}
      <section ref={containerRef} className="relative h-[400vh]">
        {/* Sticky Visuals */}
        <div className="sticky top-0 h-screen overflow-hidden">
          <ImageSequence progress={scrollYProgress} frameCount={188} />
          <HeroParticles />
          {/* Dark Thematic Gradients for Layers and Image Bleed */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            {/* Base cinematic dark vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_20%,rgba(10,8,6,0.7)_100%)]" />

            {/* Asymmetric 40/60 Layout Text Gradient Shield: Dark on left, fading out carefully on right */}
            {/* On mobile: cover entire width to ensure text readability over the image. On sm/md+: partial width. */}
            <div
              className="absolute inset-y-0 left-0 w-full sm:w-[55%]"
              style={{
                background: "linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.15) 60%, transparent 80%)"
              }}
            />
            {/* Additional mobile-only bottom gradient to darken ground area under text if needed */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0A0806] to-transparent sm:hidden opacity-80" />

            {/* Pure sharp radial glow directly behind the text for absolute readability against the bright chicken */}
            <div className="absolute top-[30%] left-[-10%] w-[120vw] h-[120vw] md:w-[60vw] md:h-[60vw] bg-[radial-gradient(circle,rgba(10,8,6,0.8)_0%,rgba(10,8,6,0.3)_40%,transparent_70%)] blur-2xl md:blur-3xl opacity-90 md:opacity-80 mix-blend-multiply" />

            {/* Moderate Vignette Specifically Behind Text Block to improve contrast without hiding right side visuals */}
            <div className="absolute top-[10%] left-[-20%] w-[120vw] h-[120vw] md:w-[70vw] md:h-[80vw] bg-[radial-gradient(circle,rgba(0,0,0,0.8)_0%,rgba(0,0,0,0.4)_40%,transparent_70%)] blur-2xl md:blur-3xl z-0 pointer-events-none" />
          </div>
          {/* 1. Hero (0-15%) */}
          <motion.div
            style={{ opacity: heroOpacity, y: heroY }}
            className="absolute inset-0 flex flex-col justify-center px-6 md:px-8 md:pl-[6vw]"
          >
            <div className="w-full md:w-[40vw] max-w-[550px] relative z-10 pt-[15vh] md:pt-[10vh]">
              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif text-[#FDFCF0] font-bold leading-[1.05] tracking-[-0.04em] mb-[24px] drop-shadow-[0_10px_40px_rgba(0,0,0,0.8)]"
                style={{ fontSize: "clamp(44px, 5vw, 64px)" }}
              >
                Crafted by Fire. <br /> Perfected by Time.
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="text-[#FDFCF0]/80 mb-[32px] max-w-[500px] font-sans font-light leading-[1.65] tracking-[0.02em] text-[18px] md:text-[22px] drop-shadow-[0_4px_20px_rgba(0,0,0,1)] mix-blend-plus-lighter"
              >
                Slow cooked underground. Served with heritage.<br />Loved across Kerala.
              </motion.p>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col sm:flex-row w-full sm:w-auto gap-[12px] sm:gap-[18px]"
              >
                <a
                  href="#menu"
                  className="relative overflow-hidden w-full sm:w-auto text-center px-[42px] py-[16px] sm:py-[18px] rounded-[50px] bg-gradient-to-r from-[#D4AF37] via-[#F5C518] to-[#D4AF37] text-[#0A0806] text-[13px] font-bold tracking-[0.15em] uppercase hover:-translate-y-[2px] transition-transform duration-500 shadow-[0_10px_40px_-10px_rgba(212,175,55,0.6)] group"
                >
                  <span className="relative z-10">Order Now</span>
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-[150%]" />
                </a>
                <a
                  href="#story"
                  className="relative overflow-hidden w-full sm:w-auto text-center px-[42px] py-[16px] sm:py-[18px] rounded-[50px] border-[1.5px] border-[#FDFCF0]/40 bg-[#FDFCF0]/[0.15] backdrop-blur-[16px] text-[#FDFCF0] text-[13px] font-bold tracking-[0.15em] uppercase hover:bg-[#FDFCF0]/25 hover:border-[#FDFCF0]/60 transition-all duration-500 shadow-[inset_0_1px_2px_rgba(255,255,255,0.3),0_8px_32px_rgba(0,0,0,0.4)] group"
                >
                  <span className="relative z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Discover the Story</span>
                  {/* Subtle glass reflection effect on hover */}
                  <div className="absolute inset-0 -translate-x-[150%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[150%]" />
                </a>
              </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 1 }}
              className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-60 mix-blend-screen"
            >
              <span className="text-[10px] text-[#FDFCF0] font-sans font-bold tracking-[0.2em] uppercase">Scroll to Experience</span>
              <div className="w-[1px] h-12 bg-gradient-to-b from-[#D4AF37] to-transparent animate-[fall_1.5s_ease-in-out_infinite]" />
            </motion.div>
          </motion.div>

          {/* 2. Story (15-30%) */}
          <motion.div
            style={{ opacity: storyOpacity, y: storyY }}
            className="absolute inset-x-8 md:inset-x-24 top-1/2 -translate-y-1/2 max-w-2xl text-left"
          >
            <h2 className="font-serif text-4xl md:text-6xl text-[#D4AF37] mb-6 font-bold drop-shadow-[0_4px_24px_rgba(0,0,0,1)]">
              Mandhi is not just <br /> rice and meat.
            </h2>
            <div className="space-y-4 text-xl md:text-2xl text-[#FDFCF0]/90 leading-relaxed font-light drop-shadow-[0_2px_12px_rgba(0,0,0,1)]">
              <p>It is fire. It is patience. It is tradition.</p>
            </div>
          </motion.div>

          {/* 3. Ingredients (30-50%) */}
          <motion.div
            style={{ opacity: ingredientOpacity, y: ingredientY }}
            className="absolute inset-x-8 md:inset-x-24 top-1/2 -translate-y-1/2 max-w-2xl ml-auto text-right"
          >
            <h2 className="font-serif text-4xl md:text-6xl text-[#D4AF37] mb-6 font-bold drop-shadow-[0_4px_24px_rgba(0,0,0,1)]">
              Only the finest ingredients.
            </h2>
            <div className="space-y-4 text-xl md:text-2xl text-[#FDFCF0]/90 leading-relaxed font-light drop-shadow-[0_2px_12px_rgba(0,0,0,1)]">
              <p>Fragrant basmati rice.</p>
              <p>Hand-selected spices. Fresh cuts of meat.</p>
              <p>Combined with fire and time.</p>
            </div>
          </motion.div>

          {/* 4. Cooking (50-70%) */}
          <motion.div
            style={{ opacity: cookingOpacity, y: cookingY }}
            className="absolute inset-x-8 md:inset-x-24 top-1/2 -translate-y-1/2 max-w-2xl text-left"
          >
            <h2 className="font-serif text-4xl md:text-6xl text-[#D4AF37] mb-6 font-bold drop-shadow-[0_4px_24px_rgba(0,0,0,1)]">
              Slow cooked beneath the earth.
            </h2>
            <div className="space-y-4 text-xl md:text-2xl text-[#FDFCF0]/90 leading-relaxed font-light drop-shadow-[0_2px_12px_rgba(0,0,0,1)]">
              <p>Cooked underground with controlled heat and aromatic spices.</p>
              <p>Every grain absorbs deep, authentic flavor.</p>
            </div>
          </motion.div>

          {/* 5. Reveal (70-85%) */}
          <motion.div
            style={{ opacity: revealOpacity, y: revealY }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
          >
            <h2 className="font-serif text-5xl md:text-7xl text-[#D4AF37] mb-6 max-w-4xl font-bold drop-shadow-[0_4px_24px_rgba(0,0,0,1)]">
              The taste Kerala fell in love with.
            </h2>
            <div className="space-y-4 text-2xl md:text-3xl text-[#FDFCF0]/90 font-light drop-shadow-[0_2px_12px_rgba(0,0,0,1)]">
              <p>Tender meat. Fragrant rice. Fire-crafted flavor.</p>
              <p className="mt-6 text-[#D4AF37] italic font-medium drop-shadow-[0_2px_12px_rgba(0,0,0,1)]">Mandhi the way it was meant to be.</p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Signature Dishes */}
      <section id="menu" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl text-center text-[#D4AF37] mb-16 drop-shadow-[0_4px_24px_rgba(0,0,0,1)]">Signature Mandhi</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
          ].map((item) => (
            <div key={item.name} className="relative h-[400px] rounded-2xl border border-[#D4AF37]/20 p-8 flex flex-col justify-end overflow-hidden group cursor-pointer transition-all duration-500 hover:border-[#D4AF37]/50 shadow-lg shadow-black/20">
              {/* Image Background */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${item.image})` }}
              />

              {/* Fade Up Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0806] via-[#0A0806]/80 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative z-10 transition-transform duration-500 group-hover:-translate-y-2">
                <h3 className="font-serif text-3xl text-[#D4AF37] mb-3 drop-shadow-[0_2px_12px_rgba(0,0,0,1)]">{item.name}</h3>
                <p className="text-[#FDFCF0]/80 font-light text-base leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,1)]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Dynamic Testimonials / Social Proof */}
      <TestimonialsSection />

      {/* Restaurant Experience */}
      <section id="experience" className="py-32 px-6 md:px-12 text-center max-w-4xl mx-auto">
        <h2 className="font-serif text-5xl md:text-6xl text-[#D4AF37] mb-8 leading-tight">
          Food tastes better<br />when shared.
        </h2>
        <p className="text-xl md:text-2xl text-[#FDFCF0]/80 font-light max-w-2xl mx-auto">
          Experience the warmth of Arabian hospitality in our modern, premium dining spaces designed for families and friends.
        </p>
      </section>

      {/* Final CTA */}
      <section id="order" className="py-32 px-6 text-center max-w-3xl mx-auto">
        <h2 className="font-serif text-5xl md:text-6xl text-[#C8A96A] mb-8">Taste the Mandhi Everyone Talks About</h2>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
          <a href="#" className="px-8 py-4 bg-[#C8A96A] text-[#0E0C0A] font-medium rounded-full text-lg tracking-wide hover:bg-white transition-colors">
            Order Online
          </a>
          <a href="/branches" className="px-8 py-4 border border-[#C8A96A] text-[#C8A96A] rounded-full text-lg tracking-wide hover:bg-[#C8A96A]/10 transition-colors">
            Visit a Branch
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
