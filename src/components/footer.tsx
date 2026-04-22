import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="bg-[#0A0806] text-[#FDFCF0] pt-32 pb-12 px-6 md:px-12 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-[radial-gradient(circle,rgba(212,175,55,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 mb-24">
          <div className="md:col-span-5">
            <img src="/logo.png" alt="AL-REEM MANDI" className="h-24 md:h-32 w-auto object-contain mb-8" />
            <p className="text-[#FDFCF0]/60 max-w-sm leading-relaxed font-light text-lg">
              Crafting authentic Arabian experiences since 2010. We bring the heritage of slow-cooked Mandhi to the heart of Kerala, served with nomadic warmth and modern elegance.
            </p>
            <div className="flex gap-6 mt-10">
              <a href="https://www.instagram.com/alreem_mandi/" target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] text-xs uppercase tracking-[0.2em] font-bold hover:opacity-100 transition-opacity opacity-60">
                Instagram
              </a>
              <a href="https://www.facebook.com/AlreemRestaurants/" target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] text-xs uppercase tracking-[0.2em] font-bold hover:opacity-100 transition-opacity opacity-60">
                Facebook
              </a>
            </div>
          </div>

          <div className="md:col-span-2 md:col-start-7">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#D4AF37]/40 mb-8">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'Menu', 'Experience', 'Branches'].map(item => (
                <li key={item}>
                  <a href={`/#${item.toLowerCase().replace(' ', '')}`} className="text-[#FDFCF0]/80 hover:text-[#D4AF37] transition-colors text-sm font-light">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3 md:col-start-10">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#D4AF37]/40 mb-8">The Experience</h4>
            <ul className="space-y-6">
              <li className="group cursor-pointer">
                <span className="block text-[#FDFCF0]/40 text-[10px] uppercase mb-1">General Inquiries</span>
                <a href="tel:+918893410410" className="text-[#FDFCF0]/90 group-hover:text-[#D4AF37] transition-colors">+91 88934 10410</a>
              </li>
              <li className="group cursor-pointer">
                <span className="block text-[#FDFCF0]/40 text-[10px] uppercase mb-1">Dine-in Reservations</span>
                <a href="mailto:info@alreemrestaurant.com" className="text-[#FDFCF0]/90 group-hover:text-[#D4AF37] transition-colors">info@alreemrestaurant.com</a>
              </li>
              <li className="group cursor-pointer">
                <span className="block text-[#FDFCF0]/40 text-[10px] uppercase mb-1">Athani Branch</span>
                <span className="text-[#FDFCF0]/90 group-hover:text-[#D4AF37] transition-colors">Athani, Ernakulam, Kerala</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Large Decorative Text */}
        <div className="pt-12 border-t border-[#D4AF37]/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-1 items-center md:items-start">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#FDFCF0]/30">&copy; {new Date().getFullYear()} AL-REEM RESTAURANTS PVT LTD.</p>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#FDFCF0]/30">AUTHENTIC ARABIC KUZHI MANDHI EXPERIENCE</p>
          </div>

          <div className="order-first md:order-last">
            <h1 className="text-[15vw] md:text-[12vw] font-serif leading-none tracking-[-0.05em] text-[#FDFCF0]/[0.02] absolute bottom-[-2vw] right-[-1vw] select-none pointer-events-none uppercase">
              Al-Reem
            </h1>
          </div>

          <div className="flex gap-8 text-[10px] uppercase tracking-[0.3em] text-[#FDFCF0]/40">
            <a href="#" className="hover:text-[#D4AF37]">Privacy</a>
            <a href="#" className="hover:text-[#D4AF37]">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
