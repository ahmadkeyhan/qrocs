"use client"

import Hero from "@/components/home/hero";
import Features from "@/components/home/features";
import Plans from "@/components/home/plans";
import Faq from "@/components/home/faq";

export default function Home() {
  return (
    <div className="min-h-screen pb-20 pt-2">
      <main className="flex flex-col gap-4 items-center">
        <Hero />
        <Features />
        <Plans />
        <Faq />
      </main>
    </div>
  );
}
