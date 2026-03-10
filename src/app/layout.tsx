import type { Metadata } from "next";
import { Inter, Noto_Naskh_Arabic } from "next/font/google";
import localFont from "next/font/local";
import { SmoothScroll } from "@/components/smooth-scroll";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const aglatia = localFont({
  src: "../../public/fonts/agelia/Agelia DEMO.otf",
  variable: "--font-aglatia",
});

const notoNaskh = Noto_Naskh_Arabic({
  variable: "--font-noto-naskh",
  subsets: ["arabic"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Al-Reem Mandhi | The Original Kuzhi Mandhi Experience",
  description: "Authentic Arabian mandhi experience. Slow cooked underground. Served with heritage. Loved across Kerala.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${aglatia.variable} ${notoNaskh.variable} antialiased bg-[#0A0806] text-[#FDFCF0] selection:bg-[#D4AF37] selection:text-[#0A0806] min-h-screen`}
      >
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
