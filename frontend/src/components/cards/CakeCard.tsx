"use client";
import { motion } from "framer-motion";
import { Star, ShoppingCart, Heart } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { StaticImageData } from "next/image";

interface Cake {
  _id: string;
  name: string;
  price: number;
  rating: number;
  badge: string;
  imageUrl: StaticImageData;
  isLoved?: boolean;
  isInCart?: boolean;
}

interface CakeCardProps {
  cake: Cake;
  index: number;
  onLoveClick: (id: string) => void;
  onAddToCart: (id: string) => void;
}

export function CakeCard({ cake, index, onLoveClick, onAddToCart }: CakeCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group"
    >
      <div className="relative bg-white rounded-[40px] p-3 border border-pink-50 transition-all duration-500 hover:shadow-[0_30px_60px_rgba(255,182,193,0.2)] group-hover:-translate-y-2">
        
        {/* 1. Top Bar: Badge & Actions */}
        <div className="absolute top-8 left-8 right-8 flex justify-between items-start z-30">
          <span className="px-3 py-1 bg-slate-900 text-white text-[9px] font-black uppercase tracking-widest rounded-full shadow-lg">
            {cake.badge}
          </span>

          <div className="flex flex-col gap-2 md:translate-x-4 md:opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
            {/* Love Button */}
            <button
              onClick={() => onLoveClick(cake._id)}
              className={`w-10 h-10 rounded-full active:scale-95 backdrop-blur-md border transition-all duration-300 flex items-center justify-center shadow-sm
                ${cake.isLoved 
                  ? "bg-pink-500 border-pink-500 text-white" 
                  : "bg-white/90 border-pink-100 text-pink-400 hover:bg-pink-500 hover:border-pink-500 hover:text-white"
                }`}
            >
              <Heart size={18} fill={cake.isLoved ? "currentColor" : "none"} />
            </button>

            {/* Cart Button */}
            <button
              onClick={() => onAddToCart(cake._id)}
              className={`w-10 h-10 rounded-full backdrop-blur-md border flex items-center justify-center transition-all duration-300 shadow-sm active:scale-95
                ${cake.isInCart 
                  ? "bg-pink-500 border-pink-500 text-white shadow-pink-400/40" 
                  : "bg-white/90 border-pink-100 text-slate-700 hover:bg-pink-500 hover:border-pink-500 hover:text-white"
                }`}
            >
              <ShoppingCart size={18} />
            </button>
          </div>
        </div>

        {/* 2. Image Wrapper */}
        <div className="relative aspect-square w-full rounded-[32px] overflow-hidden mb-6">
          <Avatar className="w-full h-full rounded-none group-hover:scale-110 transition-transform duration-1000">
            <AvatarImage src={cake.imageUrl.src} className="object-cover" />
            <AvatarFallback className="w-full h-full rounded-none opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 flex items-center justify-center italic font-black text-6xl text-pink-200">
              CAKE
            </AvatarFallback>
          </Avatar>

          {/* Price Overlay */}
          <div className="absolute bottom-4 left-4 right-4 md:translate-y-2 md:opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-20">
            <div className="bg-white/80 backdrop-blur-md py-2 px-4 rounded-2xl flex items-center justify-between border border-white/50">
              <span className="text-sm font-black text-slate-900">${cake.price.toFixed(2)}</span>
              <div className="flex items-center gap-1">
                <Star size={10} className="text-amber-400 fill-amber-400" />
                <span className="text-[10px] font-bold text-slate-600">{cake.rating}</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Details */}
        <div className="px-2 text-center">
          <h3 className="text-xl font-black text-slate-800 leading-tight mb-1 group-hover:text-pink-500 transition-colors">
            {cake.name}
          </h3>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
            Premium Quality
          </p>
        </div>
      </div>
    </motion.div>
  );
}