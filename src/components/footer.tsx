export function Footer() {
  return (
    <footer className="bg-[#0E0C0A] text-[#E8D8B5] py-16 px-6 md:px-12 border-t border-[#C8A96A]/20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <h3 className="text-2xl font-serif text-[#C8A96A] mb-4">Al-Reem Mandhi</h3>
          <p className="opacity-80 max-w-sm">
            Authentic Arabian mandhi experience. Slow cooked underground. Served with heritage. Loved across Kerala.
          </p>
        </div>
        
        <div>
          <h4 className="text-lg text-[#C8A96A] mb-4">Explore</h4>
          <ul className="space-y-2 opacity-80">
            <li><a href="#story" className="hover:text-[#C8A96A] transition">Our Story</a></li>
            <li><a href="#menu" className="hover:text-[#C8A96A] transition">The Menu</a></li>
            <li><a href="#locations" className="hover:text-[#C8A96A] transition">Locations</a></li>
            <li><a href="#order" className="hover:text-[#C8A96A] transition">Order Online</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg text-[#C8A96A] mb-4">Contact</h4>
          <ul className="space-y-2 opacity-80">
            <li>+91 98765 43210</li>
            <li>hello@alreemmandhi.com</li>
            <li>Kalamassery, Ernakulam, Kerala</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-[#C8A96A]/10 flex flex-col md:flex-row justify-between items-center opacity-60 text-sm">
        <p>&copy; {new Date().getFullYear()} Al-Reem Mandhi. All rights reserved.</p>
        <p className="mt-4 md:mt-0">Crafted with fire and tradition.</p>
      </div>
    </footer>
  );
}
