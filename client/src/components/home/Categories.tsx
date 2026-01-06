"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link"; 
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import cakes1 from "@/app/assets/cakes/cake (1).jpg";
import cakes2 from "@/app/assets/cakes/cake (2).jpg";
import cakes3 from "@/app/assets/cakes/cake (3).jpg";
import cakes4 from "@/app/assets/cakes/cake (4).jpg";

const categories = [
  {
    id: 1,
    name: "Wedding Cakes",
    slug: "Custom", 
    count: "120+ Designs",
    image: cakes1,
    color: "bg-rose-50",
  },
  {
    id: 2,
    name: "Cupcakes",
    slug: "Classic", 
    count: "45 Flavors",
    image: cakes2,
    color: "bg-pink-50",
  },
  {
    id: 3,
    name: "Birthday Cakes",
    slug: "Bestseller",
    count: "300+ Styles",
    image: cakes3,
    color: "bg-amber-50",
  },
  {
    id: 4,
    name: "Pastries",
    slug: "Trending",
    count: "20+ Varieties",
    image: cakes4,
    color: "bg-blue-50",
  },
];

export default function Categories() {
  return (
    <section className="py-24 bg-white font-sans">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <p className="text-pink-500 font-black uppercase tracking-[0.4em] text-[10px] mb-3">
              Explore Collections
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              Our Sweet <span className="text-pink-500 italic">Categories</span>
            </h2>
          </div>
          <p className="text-slate-400 font-medium max-w-xs md:text-right text-sm italic text-balance">
            Artisan creations tailored for your most precious moments.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            // According to category, link to cakes page with appropriate query param
            <Link 
              href={`/cakes?category=${category.slug}`} 
              key={category.id}
              className="block"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }} // Hover effect
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group cursor-pointer"
              >
                <div
                  className={`relative aspect-4/5 rounded-[45px] overflow-hidden ${category.color} border-4 border-white shadow-2xl shadow-slate-200/60 transition-all duration-500`}
                >
                  <Avatar className="w-full h-full rounded-none absolute inset-0">
                    <AvatarImage
                      src={category.image.src}
                      alt={category.name}
                      className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                    />
                    <AvatarFallback className="w-full h-full rounded-none flex items-center justify-center italic font-black text-6xl text-pink-200">
                      cake
                    </AvatarFallback>
                  </Avatar>

                  <div className="absolute inset-0 bg-linear-to-t from-pink-500/70 via-pink-500/10 to-transparent z-10 opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                  <div className="absolute inset-x-0 bottom-0 p-8 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex flex-col gap-1">
                      <p className="text-pink-500 font-black text-[10px] uppercase tracking-[0.3em] drop-shadow-sm">
                        {category.count}
                      </p>
                      <h3 className="text-2xl font-black text-white leading-tight tracking-tight drop-shadow-md">
                        {category.name}
                      </h3>
                    </div>
                    <div className="mt-4 overflow-hidden">
                      <motion.div
                        className="h-0.5 bg-white/80 rounded-full origin-left"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                      />
                    </div>
                  </div>

                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-y-2 group-hover:translate-y-0 z-30">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-lg">
                      <ArrowRight size={18} strokeWidth={3} />
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}