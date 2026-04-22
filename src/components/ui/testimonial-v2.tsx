"use client";

import React from 'react';
import { motion } from "framer-motion";

// --- Types ---
interface Testimonial {
  text: string;
  name: string;
  role: string;
  rating: number;
}

// --- Data ---
const testimonials: Testimonial[] = [
  {
    text: "I've had Mandi in many places, but this one was truly exceptional. This Mandi was an absolute revelation. The flavors were incredible, and the chicken was so tender it practically melted in my mouth. It was truly one of the best dining experiences I've ever had. It was an unforgettable meal.",
    name: "Binil S.",
    role: "91 reviews on Google",
    rating: 5,
  },
  {
    text: "They have the finest kuzhimandhi. When we plan to have mandhi, our first priority is Al-Reem — they have their own unique taste, always the same. I love it ❣️",
    name: "Jerin M.",
    role: "175 reviews on Google",
    rating: 4,
  },
  {
    text: "This is the famous Manthi restaurant in Kerala, which has several branches throughout the state.",
    name: "Rohind N M.",
    role: "209 reviews on Google",
    rating: 5,
  },
  {
    text: "Al-reem is one of the best mandhi restaurant. I visited so many times here for tasting different mandhi. My favorite is alfaham mandhi because the taste was amazing — best one compared to other restaurants. Parking available. Service is good and welcoming. Mandhi quantity is great.",
    name: "Arun Das",
    role: "Thammanam Branch",
    rating: 5,
  },
  {
    text: "I've been dining at Al-Reem for six years, and each visit reaffirms why it's my favorite. Despite living abroad, every time I return, the quality remains consistently excellent. I've tried many mandi places in the state, and nothing compares to Al-Reem. If you're looking for the best mandi, Al-Reem is the place to go.",
    name: "Akarsh M",
    role: "Muvattupuzha Branch",
    rating: 5,
  },
  {
    text: "I've had Mandi in many places, but this one was truly exceptional. The flavors were incredible, and the chicken was so tender it practically melted in my mouth.",
    name: "Binil S.",
    role: "91 reviews on Google",
    rating: 5,
  }
];

const firstColumn = testimonials.slice(0, 2);
const secondColumn = testimonials.slice(2, 4);
const thirdColumn = testimonials.slice(4, 6);

// --- Sub-Components ---
const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.ul
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 20,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-transparent transition-colors duration-300 list-none m-0 p-0"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, name, role, rating }, i) => (
                <motion.li
                  key={`${index}-${i}`}
                  aria-hidden={index === 1 ? "true" : "false"}
                  tabIndex={index === 1 ? -1 : 0}
                  whileHover={{
                    scale: 1.03,
                    y: -8,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.4), 0 10px 10px -5px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(212, 175, 55, 0.2)",
                    transition: { type: "spring", stiffness: 400, damping: 17 }
                  }}
                  className="p-8 rounded-3xl border border-[#D4AF37]/20 shadow-lg shadow-black/20 max-w-sm w-full bg-[#2B1B12]/40 backdrop-blur-md transition-all duration-300 cursor-default select-none group"
                >
                  <blockquote className="m-0 p-0">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={`text-lg ${i < rating ? 'text-[#D4AF37]' : 'text-neutral-600'}`}>★</span>
                      ))}
                    </div>
                    <p className="text-[#FDFCF0]/90 leading-relaxed font-light m-0 transition-colors duration-300">
                      &quot;{text}&quot;
                    </p>
                    <footer className="flex items-center gap-3 mt-6 pt-6 border-t border-[#D4AF37]/10">
                      <div className="flex flex-col">
                        <cite className="font-serif font-medium tracking-tight leading-5 text-[#D4AF37] transition-colors duration-300 not-italic text-lg">
                          {name}
                        </cite>
                        <span className="text-sm font-light leading-5 tracking-wide text-[#FDFCF0]/60 mt-0.5 transition-colors duration-300">
                          {role}
                        </span>
                      </div>
                    </footer>
                  </blockquote>
                </motion.li>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.ul>
    </div>
  );
};

export default function TestimonialsSection() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="bg-[#0A0806] py-24 relative overflow-hidden border-y border-[#D4AF37]/10"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#2B1B12_0%,transparent_70%)] opacity-30" />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{
          duration: 1.2,
          ease: [0.16, 1, 0.3, 1]
        }}
        className="container px-4 z-10 mx-auto relative"
      >
        <div className="flex flex-col items-center justify-center max-w-[580px] mx-auto mb-16 text-center">
          <div className="flex justify-center mb-6">
            <div className="border border-[#D4AF37]/30 py-1.5 px-6 rounded-full text-xs font-semibold tracking-widest uppercase text-[#D4AF37] bg-[#D4AF37]/5 backdrop-blur-sm">
              Social Proof
            </div>
          </div>

          <h2 id="testimonials-heading" className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#D4AF37] mb-6 drop-shadow-[0_4px_24px_rgba(0,0,0,1)]">
            Loved by thousands across Kerala.
          </h2>
          <p className="text-center mt-2 text-[#FDFCF0]/80 font-light text-lg md:text-xl leading-relaxed max-w-md drop-shadow-[0_2px_12px_rgba(0,0,0,1)]">
            Don&apos;t just take our word for it. See what our community says about their Al-Reem experience.
          </p>
        </div>

        {/* Desktop Marquee Layout */}
        <div
          className="hidden md:flex justify-center gap-6 md:gap-8 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] max-h-[600px] overflow-hidden"
          role="region"
          aria-label="Scrolling Testimonials"
        >
          <TestimonialsColumn testimonials={firstColumn} duration={25} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={35} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={28} />
        </div>

        {/* Mobile Horizontal Layout */}
        <div 
          className="md:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory mt-8 pb-8 px-4 w-full [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          role="region"
          aria-label="Testimonials Carousel"
        >
          {testimonials.map(({ text, name, role, rating }, i) => (
            <div key={i} className="min-w-[85vw] snap-center">
              <div className="p-6 rounded-3xl border border-[#D4AF37]/20 shadow-lg w-full bg-[#2B1B12]/80 backdrop-blur-md h-full flex flex-col justify-between">
                <blockquote className="m-0 p-0 flex-1 flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <span key={j} className={`text-lg ${j < rating ? 'text-[#D4AF37]' : 'text-neutral-600'}`}>★</span>
                    ))}
                  </div>
                  <p className="text-[#FDFCF0]/90 leading-relaxed font-light m-0 text-[15px] flex-1">
                    &quot;{text}&quot;
                  </p>
                  <footer className="mt-6 pt-6 border-t border-[#D4AF37]/10">
                    <div className="flex flex-col">
                      <cite className="font-serif font-medium tracking-tight leading-5 text-[#D4AF37] not-italic text-lg">
                        {name}
                      </cite>
                      <span className="text-sm font-light leading-5 tracking-wide text-[#FDFCF0]/60 mt-1">
                        {role}
                      </span>
                    </div>
                  </footer>
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
