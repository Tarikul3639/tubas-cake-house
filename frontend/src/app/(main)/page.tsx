// src/app/(main)/page.tsx
import Hero from "@/components/home/Hero";
import Categories from "@/components/home/Categories";
import PopularCakes from "@/components/home/PopularCakes";

export default function HomePage() {
  return (
    <main>
      {/* 1. Hero Section (Prothom Impression) */}
      <Hero />

      {/* 2. Featured Categories (Next Step) */}
      <Categories />

      {/* 3. Popular Products */}
      <PopularCakes />
    </main>
  );
}