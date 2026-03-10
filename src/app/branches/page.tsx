"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Branches } from "@/components/branches";

export default function BranchesPage() {
  return (
    <main className="min-h-screen bg-[#0A0806] flex flex-col pt-20">
      <Navbar />
      <div className="flex-1 flex flex-col justify-center">
        <Branches />
      </div>
      <Footer />
    </main>
  );
}
