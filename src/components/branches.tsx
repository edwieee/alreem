import React from 'react';
import { Phone, MapPin } from 'lucide-react';

const branches = [
  {
    id: 'athani',
    name: 'Athani, Nedumbassery',
    badge: 'Athani · Flagship',
    rating: '4.4',
    address: 'Near Athani Junction, Kottayi Road, Desom, Ernakulam – 683585',
    note: '15 mins from Cochin International Airport · Original Flagship',
    reviews: '4,812 Google reviews',
    phone: '+91 88934 10410',
    link: 'https://www.google.com/maps/place/Hotel+Al-Reem+Athani/@10.1453125,76.3507376,820m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3b080f6875b5a87f:0x2089032f23e00d91!8m2!3d10.1453125!4d76.3533125!16s%2Fg%2F11rcbnt010?entry=ttu&g_ep=EgoyMDI2MDMwOC4wIKXMDSoASAFQAw%3D%3D',
    linkText: '📍 View on Google Maps',
    image: '/branchesimg/athani.jpg'
  },
  {
    id: 'thammanam',
    name: 'Thammanam, Kochi',
    badge: 'Thammanam · Kochi',
    rating: '4.3',
    address: 'Near Arya Vaidya Sala, DD Village, Thammanam – Pullepady Rd, Ernakulam – 682032',
    reviews: '8,956 Google reviews',
    phone: '+91 70347 10710',
    link: 'https://www.google.com/maps/place/Al+Reem+Thammanam/@9.9846645,76.3116145,820m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3b080d2f53fd26ff:0x175d4f6ed45ccec0!8m2!3d9.9846645!4d76.3116145!16s%2Fg%2F11f3n1_4rs?entry=ttu&g_ep=EgoyMDI2MDMwOC4wIKXMDSoASAFQAw%3D%3D',
    linkText: '📍 View on Google Maps',
    image: '/branchesimg/thammanam.jpg'
  },
  {
    id: 'edappally',
    name: 'Edappally, Kochi',
    badge: 'Edappally · Kochi',
    rating: '4.2',
    address: 'NH 66, Amrita Nagar, Edappally, Ernakulam – 682024',
    reviews: '4,287 Google reviews',
    phone: '+91 90722 10210',
    link: 'https://www.google.com/maps/place/Al+Reem+Edappally/@10.0452979,76.2948064,820m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3b080d0b256a3251:0x7de78ce4fca4a6c1!8m2!3d10.0452979!4d76.2973813!16s%2Fg%2F11hxns84m3?entry=ttu&g_ep=EgoyMDI2MDMwOC4wIKXMDSoASAFQAw%3D%3D',
    linkText: '📍 View on Google Maps',
    image: '/branchesimg/edapilly.jpg'
  },
  {
    id: 'muvattupuzha',
    name: 'Muvattupuzha',
    badge: 'Muvattupuzha',
    rating: '4.2',
    address: 'SH 1 Vazhappily – Pezhakkappilly Road, Vazhappily, Muvattupuzha – 686669',
    reviews: '5,332 Google reviews',
    phone: '+91 90484 10410',
    link: 'https://www.google.com/maps/place/Al+Reem+Mandi+Restaurant/@10.0084587,76.5663372,820m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3b07e73f0ae6afd5:0xcac003f795a6ad95!8m2!3d10.0084587!4d76.5689121!16s%2Fg%2F11btvl87rz?entry=ttu&g_ep=EgoyMDI2MDMwOC4wIKXMDSoASAFQAw%3D%3D',
    linkText: '📍 View on Google Maps',
    image: '/branchesimg/muvattupuzha.jpg'
  },
  {
    id: 'aroor',
    name: 'Aroor, Kochi',
    badge: 'Aroor · Kochi',
    rating: '4.3',
    address: 'Aroor Gram Panchayat, Aroor, Kochi – 688534',
    reviews: '3,780 Google reviews',
    phone: '+91 94975 10510',
    link: 'https://www.google.com/maps/place/Al-Reem+Restaurant/@9.8794002,76.3017111,820m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3b08718f0d377bef:0x8d5546809fed368c!8m2!3d9.8794002!4d76.304286!16s%2Fg%2F11cn91skv3?entry=ttu&g_ep=EgoyMDI2MDMwOC4wIKXMDSoASAFQAw%3D%3D',
    linkText: '📍 View on Google Maps',
    image: '/branchesimg/aroor.png'
  },
  {
    id: 'palakkad',
    name: 'Manali, Palakkad',
    badge: 'Palakkad',
    rating: '3.4',
    address: 'Ramanathapuram Gramam, Near Trinity Super Speciality Eye Hospital, Manali, Palakkad – 678001',
    reviews: '343 Google reviews',
    phone: 'Contact via Google Maps',
    link: 'https://www.google.com/maps/place/Al+Reem+Palakkad/@10.7773125,76.6669876,818m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3ba86d00671325bd:0xf0f16b8b97410428!8m2!3d10.7773125!4d76.6695625!16s%2Fg%2F11wwmddbb6?entry=ttu&g_ep=EgoyMDI2MDMwOC4wIKXMDSoASAFQAw%3D%3D',
    linkText: '📍 View on Google Maps',
    image: '/branchesimg/palakkad.jpg'
  }
];

export function Branches() {
  return (
    <section id="locations" className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto w-full relative z-10">
      {/* 10. Section Header Improvement */}
      <div className="text-center mb-16 max-w-3xl mx-auto flex flex-col items-center">
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent to-[#D4AF37] mb-6 opacity-60" />
        <span className="text-[12px] text-[#D4AF37] font-bold tracking-[0.25em] uppercase mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">Our Locations</span>
        <h2 className="font-serif text-5xl md:text-[64px] text-[#FDFCF0] mb-6 drop-shadow-[0_4px_24px_rgba(0,0,0,1)] leading-[1.1]">
          Find Your Branch
        </h2>
        <p className="text-[#FDFCF0]/70 font-sans font-light text-[18px] md:text-[20px] tracking-[0.02em] max-w-[600px]">
          Kerala&apos;s most loved Kuzhimandhi — now across 6 destinations.
        </p>
      </div>

      {/* 11. Grid Layout Improvements (3 cards row, gap-10 which is 40px) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {branches.map((branch) => (
          <div
            key={branch.id}
            /* 4. Card Depth, 7. Hover Interaction */
            className="group relative min-h-[520px] rounded-[20px] border border-[#FDFCF0]/10 p-8 flex flex-col justify-end overflow-hidden transition-all duration-700 hover:-translate-y-3 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8),0_0_0_1px_rgba(212,175,55,0.3)] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] bg-[#0A0806]"
          >
            {/* Image Background */}
            <div
              /* 8. Image Framing, 7. Image Scale, 13. Image Tone Consistency (brightness/contrast) */
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.05] brightness-90 contrast-[1.1]"
              style={{ backgroundImage: `url(${branch.image})` }}
            />

            {/* 1. Image Readability Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0806]/60 to-[#0A0806]/95 opacity-90 transition-opacity duration-700 group-hover:opacity-100" />

            {/* 3. Rating Badge Redesign, 14. Micro Animation */}
            <div className="absolute top-6 right-6 bg-[#0A0806]/40 backdrop-blur-md border border-[#D4AF37]/30 text-[#FDFCF0] text-[13px] font-medium px-4 py-2 rounded-full flex items-center gap-1.5 shadow-[0_8px_32px_rgba(0,0,0,0.5)] z-20 transition-transform duration-500 group-hover:scale-110">
              <span className="text-[#D4AF37]">⭐</span> {branch.rating}
            </div>

            {/* Content Payload - 9. Consistent Spacing System */}
            <div className="relative z-10 flex flex-col h-full justify-end">

              {/* 2. Typography Hierarchy (28px Title) */}
              <h3 className="font-serif text-[28px] font-semibold text-[#FDFCF0] drop-shadow-[0_2px_12px_rgba(0,0,0,1)] tracking-[-0.01em] leading-[1.2]">
                {branch.name}
              </h3>

              {/* Spacing: Title -> Address (8px) */}
              <div className="h-[8px]" />

              <p className="text-[#FDFCF0]/60 font-sans font-light text-[14px] leading-[1.6] min-h-[44px] drop-shadow-[0_2px_8px_rgba(0,0,0,1)] line-clamp-2">
                {branch.address}
              </p>

              {/* Spacing: Address -> Reviews (16px) */}
              <div className="h-[16px]" />

              {/* Reviews */}
              <div className="flex items-center gap-2 drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">
                <span className="text-sm font-medium text-[#D4AF37]">
                  {branch.rating >= '4' ? '⭐⭐⭐⭐' : '⭐⭐⭐'}{branch.rating >= '4.3' && '⭐'}
                </span>
                <span className="text-[13px] text-[#FDFCF0]/50 font-medium">
                  {branch.reviews}
                </span>
              </div>

              {/* Spacing: Reviews -> Contact (20px) */}
              <div className="h-[20px]" />

              <div className="h-[1px] w-full bg-gradient-to-r from-[#D4AF37]/20 via-[#D4AF37]/5 to-transparent mb-[20px]" />

              {/* 5. Contact Call-To-Action */}
              <div className="group/contact flex items-center justify-between cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#D4AF37]/10 flex items-center justify-center border border-[#D4AF37]/20 transition-colors duration-300 group-hover/contact:bg-[#D4AF37]/20">
                    <Phone size={14} className="text-[#D4AF37]" />
                  </div>
                  <span className="text-[11px] text-[#FDFCF0]/40 font-bold tracking-[0.2em] uppercase transition-colors duration-300 group-hover/contact:text-[#FDFCF0]/60">
                    Contact
                  </span>
                </div>
                {branch.phone.startsWith('+') ? (
                  <a href={`tel:${branch.phone.replace(/\s+/g, '')}`} className="text-[15px] font-medium text-[#FDFCF0] transition-colors duration-300 group-hover/contact:text-[#D4AF37] tracking-[0.02em]">
                    {branch.phone}
                  </a>
                ) : (
                  <span className="text-[15px] font-medium text-[#FDFCF0]/70 tracking-[0.02em]">{branch.phone}</span>
                )}
              </div>

              {/* Spacing: Contact -> Maps (16px) */}
              <div className="h-[16px]" />

              {/* 6. Google Maps Button Enhancement */}
              <a
                href={branch.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn relative flex items-center justify-center gap-2 w-full bg-[#0A0806]/40 backdrop-blur-md border border-[#D4AF37]/30 text-[#D4AF37] py-[14px] rounded-[12px] overflow-hidden transition-all duration-500 hover:border-[#D4AF37]/80 hover:text-[#0A0806] hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:-translate-y-[2px]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/0 via-[#D4AF37] to-[#D4AF37]/0 opacity-0 transition-opacity duration-500 group-hover/btn:opacity-100" />
                <MapPin size={16} className="relative z-10 transition-transform duration-500 group-hover/btn:scale-110 group-hover/btn:animate-[bounce_1s_ease-in-out_infinite]" />
                <span className="relative z-10 text-[12px] font-bold tracking-[0.15em] uppercase">
                  {branch.linkText}
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
