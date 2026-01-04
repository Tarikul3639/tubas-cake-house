"use client";
import { useState, useMemo, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronDown, Star, Weight, Utensils, RotateCcw, Box } from "lucide-react";
import { CakeCard } from "@/components/cards/CakeCard";
import { initialCakes } from "@/data/cakes";

export default function CakesPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const categoryFromUrl = searchParams.get("category");

  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("popularity");
  const [priceRange, setPriceRange] = useState(150);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [selectedWeight, setSelectedWeight] = useState<string>("all");
  const [selectedCategory, setSelectedCategory] = useState<string>(categoryFromUrl || "all");

  useEffect(() => {
    if (categoryFromUrl) {
      setSelectedCategory(categoryFromUrl);
    }
  }, [categoryFromUrl]);

  const filteredCakes = useMemo(() => {
    let result = [...initialCakes];

    // ১. ক্যাটাগরি ফিল্টার (এখানে 'Custom' কেকও অন্তর্ভুক্ত)
    if (selectedCategory !== "all") {
      result = result.filter((cake) => cake.category.toLowerCase() === selectedCategory.toLowerCase());
    }

    // ২. সার্চ ফিল্টার
    if (searchQuery) {
      result = result.filter((cake) =>
        cake.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // ৩. ওজন (Weight) ফিল্টার
    if (selectedWeight !== "all") {
      result = result.filter((cake) => cake.weight === selectedWeight);
    }

    // ৪. প্রাইস ফিল্টার
    result = result.filter((cake) => cake.price <= priceRange);

    // ৫. সর্টিং
    result.sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      return 0;
    });

    return result;
  }, [searchQuery, priceRange, selectedRating, sortBy, selectedCategory, selectedWeight]);

  return (
    <main className="min-h-screen bg-[#fffafb] pt-28 pb-20">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-4xl md:text-6xl font-black text-slate-800 italic mb-2">
              {selectedCategory === "all" ? "Nexion" : selectedCategory} <span className="text-pink-500">Cakes</span>
            </h1>
            <p className="text-slate-500 font-medium tracking-tight">আমাদের সিগনেচার এবং কাস্টম কালেকশন থেকে বেছে নিন।</p>
          </div>
          <button 
            onClick={() => {setSelectedCategory("all"); setSelectedWeight("all"); setSearchQuery(""); setPriceRange(150);}}
            className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-pink-500 hover:text-white hover:bg-pink-500 bg-pink-50 px-6 py-3 rounded-full transition-all border border-pink-100"
          >
            <RotateCcw size={14} /> Clear All
          </button>
        </header>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* --- Extended Sidebar --- */}
          <aside className="w-full lg:w-72 space-y-6">
            
            {/* Search */}
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-pink-500 transition-colors" size={18} />
              <input
                type="text"
                placeholder="Search cakes..."
                className="w-full pl-12 pr-4 py-4 bg-white border border-pink-50 rounded-[24px] focus:outline-none focus:ring-2 focus:ring-pink-100 transition-all font-bold text-slate-700 shadow-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Categories (Custom Cake Option Included) */}
            <div className="bg-white p-6 rounded-[32px] border border-pink-50 shadow-sm">
              <h4 className="font-black text-slate-800 mb-4 uppercase text-[10px] tracking-[0.2em] flex items-center gap-2">
                <Utensils size={14} className="text-pink-500"/> Categories
              </h4>
              <div className="space-y-2">
                {["all", "Custom", "Bestseller", "Trending", "Classic"].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`flex items-center justify-between w-full px-4 py-3 rounded-2xl text-xs font-black uppercase tracking-wider transition-all ${
                      selectedCategory === cat ? "bg-pink-500 text-white shadow-lg" : "bg-slate-50 text-slate-500 hover:bg-pink-50"
                    }`}
                  >
                    {cat}
                    {cat === "Custom" && <Box size={14} className={selectedCategory === cat ? "text-white" : "text-pink-400"} />}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="bg-white p-6 rounded-[32px] border border-pink-50 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h4 className="font-black text-slate-800 uppercase text-[10px] tracking-[0.2em]">Max Price</h4>
                <span className="bg-pink-50 text-pink-500 px-3 py-1 rounded-lg font-black text-sm">${priceRange}</span>
              </div>
              <input
                type="range" min="10" max="250" step="10"
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
                className="w-full accent-pink-500 cursor-pointer h-1.5 bg-slate-100 rounded-lg appearance-none"
              />
            </div>

            {/* Weight Filter */}
            <div className="bg-white p-6 rounded-[32px] border border-pink-50 shadow-sm">
              <h4 className="font-black text-slate-800 mb-4 uppercase text-[10px] tracking-[0.2em] flex items-center gap-2">
                <Weight size={14} className="text-pink-500"/> Cake Weight
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {["all", "1 Lbs", "2 Lbs", "3 Lbs", "5 Lbs"].map((w) => (
                  <button
                    key={w}
                    onClick={() => setSelectedWeight(w)}
                    className={`py-3 rounded-xl text-[10px] font-black uppercase transition-all border ${
                      selectedWeight === w ? "bg-slate-900 text-white border-slate-900 shadow-md" : "bg-transparent text-slate-400 border-slate-100 hover:border-pink-200"
                    }`}
                  >
                    {w}
                  </button>
                ))}
              </div>
            </div>

          </aside>

          {/* --- Content Grid --- */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-8 px-2">
               <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                 Showing {filteredCakes.length} Results
               </p>
               <div className="flex items-center gap-4">
                  <select
                    className="bg-transparent border-none text-[10px] font-black text-slate-600 uppercase tracking-widest outline-none cursor-pointer"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option value="popularity">Popularity</option>
                    <option value="price-low">Price: Low</option>
                    <option value="price-high">Price: High</option>
                    <option value="rating">Top Rated</option>
                  </select>
               </div>
            </div>

            <AnimatePresence mode="popLayout">
              {filteredCakes.length > 0 ? (
                <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                  {filteredCakes.map((cake, index) => (
                    <CakeCard key={cake._id} cake={cake} index={index} onLoveClick={() => {}} onAddToCart={() => {}} />
                  ))}
                </motion.div>
              ) : (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-32 bg-white rounded-[48px] border-2 border-dashed border-pink-100">
                  <div className="w-20 h-20 bg-pink-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Box className="text-pink-200" size={32} />
                  </div>
                  <p className="text-slate-400 font-black uppercase text-xs tracking-widest">No cakes found in this filter.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </main>
  );
}