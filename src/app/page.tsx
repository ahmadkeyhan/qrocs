"use client"

import Hero from "@/components/home/hero";
import Features from "@/components/home/features";
import Plans from "@/components/home/plans";
import Technologies from "@/components/home/technologies";
import Faq from "@/components/home/faq";

export default function Home() {
  return (
    <div className="min-h-screen pb-20 pt-2">
      <main className="flex flex-col items-center">
        <Hero />
        <Features />
        <Plans />
        <Technologies />
        <Faq />
      </main>
    </div>
  );
}
