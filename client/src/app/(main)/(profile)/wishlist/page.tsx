"use client";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Heart, 
  ShoppingBag, 
  ArrowLeft 
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { initialCakes } from "@/data/cakes";
import { CakeCard } from "@/components/cards/CakeCard"; // Adjust this path according to your component


export default function WishlistPage() {
  // Initial State according to your CakeCard data format
  const [wishlistItems, setWishlistItems] = useState(
    initialCakes.slice(0, 4).map(cake => ({
      ...cake,
      isLoved: true, // Since this is wishlist, default to true
      isInCart: false
    }))
  );


  // Love click will remove item from wishlist
  const handleLoveClick = (id: string) => {
    setWishlistItems(prev => prev.filter(item => item._id !== id));
  };


  // Cart logic (you can connect to your app's global state if available)
  const handleAddToCart = (id: string) => {
    setWishlistItems(prev => 
      prev.map(item => item._id === id ? { ...item, isInCart: !item.isInCart } : item)
    );
  };


  return (
    <main className="min-h-screen bg-[#fffafb] pt-28 pb-20">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header Section */}
        <header className="mb-16 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <Link href="/settings" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-pink-500 mb-4 transition-all group">
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Profile
            </Link>
            <h1 className="text-5xl font-black text-slate-800 italic tracking-tight">
              My <span className="text-pink-500">Wishlist</span>
            </h1>
          </div>
          
          <div className="bg-white px-8 py-5 rounded-[32px] border border-pink-50 shadow-xl shadow-pink-100/20 flex items-center gap-4">
            <div className="w-12 h-12 bg-pink-500 rounded-2xl flex items-center justify-center shadow-lg shadow-pink-200">
                <Heart className="text-white fill-white" size={24} />
            </div>
            <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Saved Treats</p>
                <p className="text-lg font-black text-slate-800 leading-none mt-1">
                    {wishlistItems.length} {wishlistItems.length <= 1 ? "Item" : "Items"}
                </p>
            </div>
          </div>
        </header>


        {/* Wishlist Grid using your Reusable CakeCard */}
        <AnimatePresence mode="popLayout">
          {wishlistItems.length > 0 ? (
            <motion.div 
                layout
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10"
            >
              {wishlistItems.map((cake, idx) => (
                <CakeCard 
                  key={cake._id}
                  cake={cake as any} // Type matching if necessary
                  index={idx}
                  onLoveClick={handleLoveClick}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-32 bg-white rounded-[80px] border border-dashed border-pink-100 shadow-inner"
            >
              <div className="relative inline-block mb-8">
                <div className="w-24 h-24 bg-pink-50 rounded-[40px] flex items-center justify-center">
                    <Heart size={40} className="text-pink-200" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                    <ShoppingBag size={14} className="text-pink-500" />
                </div>
              </div>
              <h2 className="text-3xl font-black text-slate-800 italic mb-2">No cakes saved yet!</h2>
              <p className="text-slate-400 font-medium max-w-xs mx-auto mb-10">
                Your wishlist is craving some sweets. Start adding your favorite cakes!
              </p>
              <Link href="/cakes" className="bg-slate-900 text-white px-12 py-5 rounded-[24px] font-black uppercase tracking-[0.2em] text-[11px] hover:bg-pink-500 transition-all shadow-2xl hover:shadow-pink-500/40 active:scale-95">
                Explore Menu
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
