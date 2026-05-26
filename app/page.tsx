"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import CategoryNav from "@/components/CategoryNav";
import ServerGrid from "@/components/ServerGrid";
import InstallGuide from "@/components/InstallGuide";
import FAQ from "@/components/FAQ";
import GuidesSection from "@/components/GuidesSection";
import Footer from "@/components/Footer";
import { type Category } from "@/data/servers";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<Category | "all">("all");

  return (
    <main className="min-h-screen">
      <Hero />
      <CategoryNav
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      <ServerGrid activeCategory={activeCategory} />
      <InstallGuide />
      <GuidesSection />
      <FAQ />
      <Footer />
    </main>
  );
}
