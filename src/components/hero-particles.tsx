"use client";

import { motion } from "framer-motion";

export function HeroParticles() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden mix-blend-screen opacity-60">
      {/* Subtle Smoke Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(43,27,18,0.1)_0%,transparent_80%)] blur-[100px] animate-[smoke-drift_20s_ease-in-out_infinite_alternate]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(212,175,55,0.05)_0%,transparent_60%)] blur-[120px] animate-[smoke-drift_25s_ease-in-out_infinite_alternate_reverse]" />
      
      {/* Floating Particles (Spices/Glow) */}
      <div className="absolute w-[8px] h-[8px] rounded-full bg-[#D4AF37]/40 blur-[2px] left-[60%] animate-[float-spice_8s_ease-in-out_infinite]" />
      <div className="absolute w-[12px] h-[12px] rounded-full bg-[#8B5A2B]/40 blur-[3px] left-[75%] top-[10%] animate-[float-spice_12s_ease-in-out_infinite_1s]" />
      <div className="absolute w-[6px] h-[6px] rounded-full bg-[#D4AF37]/50 blur-[1px] left-[65%] top-[80%] animate-[float-spice_15s_ease-in-out_infinite_2s]" />
      <div className="absolute w-[20px] h-[4px] rounded-full bg-[#8B5A2B]/30 blur-[2px] left-[52%] top-[30%] rotate-45 animate-[float-spice_10s_ease-in-out_infinite_0.5s]" />
      <div className="absolute w-[15px] h-[15px] rounded-full bg-[#D4AF37]/20 blur-[6px] left-[85%] animate-[float-spice_18s_ease-in-out_infinite_3s]" />
      
      {/* Falling Rice / Heat Embers */}
      <div className="absolute w-[4px] h-[12px] rounded-full bg-[#FDFCF0]/60 blur-[1px] left-[68%] animate-[float-rice_6s_linear_infinite]" />
      <div className="absolute w-[3px] h-[10px] rounded-full bg-[#FDFCF0]/40 blur-[1px] left-[72%] top-[5%] animate-[float-rice_8s_linear_infinite_1s]" />
      <div className="absolute w-[5px] h-[14px] rounded-full bg-[#FDFCF0]/50 blur-[2px] left-[62%] animate-[float-rice_7s_linear_infinite_2.5s]" />
      <div className="absolute w-[4px] h-[10px] rounded-full bg-[#FDFCF0]/30 blur-[1px] left-[80%] top-[40%] animate-[float-rice_9s_linear_infinite_0.2s]" />
      
    </div>
  );
}
