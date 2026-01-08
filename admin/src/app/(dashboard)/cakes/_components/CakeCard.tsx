"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Edit3,
  Trash2,
  Star,
  TrendingUp,
  Layers,
  Zap,
  Package,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ICake } from "@/types/cakes";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";

export function CakeCard({
  cake,
  index,
  onDelete,
}: {
  cake: ICake;
  index: number;
  onDelete: (id: string) => void;
}) {
  const [isHovered, setIsHovered] = useState(false);

  // --- New Logic based on ICake Standard ---
  // Price Calculation with Discount
  const hasDiscount = cake.discount && cake.discount > 0;
  const finalPrice = hasDiscount
    ? cake.price - (cake.discount || 0)
    : cake.price;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, ease: "circOut" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative bg-white rounded-2xl sm:rounded-[32px] border border-slate-100 p-3 sm:p-4 transition-all duration-500 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.08)] sm:hover:shadow-[0_32px_64px_-12px_rgba(0,0,0,0.08)] w-full max-w-sm mx-auto"
    >
      {/* 🖼️ Image Section */}
      <div className="relative aspect-square w-full rounded-xl sm:rounded-[24px] overflow-hidden bg-slate-50">
        {/* Admin context link */}
        <Link href={`/cakes/${cake._id}`} className="absolute inset-0 z-10" />

        <Avatar className="w-full h-full rounded-none">
          <AvatarImage
            src={cake.images[0]} // First image as main
            alt={cake.name}
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <AvatarFallback className="rounded-none bg-pink-50 text-pink-200 font-bold text-lg sm:text-4xl">
            {cake.name.charAt(0).toUpperCase()}
          </AvatarFallback>
        </Avatar>

        {/* 🏷️ Status & Discount Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1.5 sm:gap-2 z-20">
          <div
            className={cn(
              "px-2 py-1 sm:px-3 sm:py-1 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-tighter backdrop-blur-md border border-white/20 shadow-sm text-white",
              cake.isActive ? "bg-emerald-500/80" : "bg-slate-500/80"
            )}
          >
            {cake.isActive ? "Active" : "Inactive"}
          </div>

          {hasDiscount && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="px-2 py-1 sm:px-3 sm:py-1 bg-pink-600 rounded-full text-[9px] sm:text-[10px] font-black uppercase text-white shadow-lg flex items-center gap-0.5 sm:gap-1"
            >
              <Zap size={8} className="sm:[size:10]" fill="white" />৳
              {cake.discount} OFF
            </motion.div>
          )}
        </div>

        {/* 🛠️ Admin Quick Actions (Visible on Hover) */}
        <div
          className={cn(
            "absolute inset-0 bg-slate-900/40 backdrop-blur-[2px] flex items-center justify-center gap-3 transition-all duration-300 z-20",
            isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
        >
          <Link
            href={`/cakes/${cake._id}`}
            className="p-3 bg-white rounded-2xl text-slate-900 hover:bg-pink-500 hover:text-white transition-all transform hover:scale-110 shadow-xl"
          >
            <TrendingUp size={18} />
          </Link>
          <button
            onClick={() => onDelete(cake._id)}
            className="p-3 bg-white rounded-2xl text-rose-500 hover:bg-rose-500 hover:text-white transition-all transform hover:scale-110 shadow-xl"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>

      {/* 📝 Content Section */}
      <div className="mt-4 sm:mt-5 px-1 pb-2">
        <div className="flex items-center justify-between text-slate-400 mb-2">
          <div className="flex items-center gap-1 bg-slate-50 px-1.5 py-1 sm:px-2 sm:py-1 rounded-md sm:rounded-lg">
            <Layers size={10} className="sm:[size:12] text-slate-500" />
            <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest">
              {cake.category}
            </span>
          </div>
          <div className="flex items-center gap-1 text-amber-500">
            <Star size={10} className="sm:[size:12]" fill="currentColor" />
            <span className="text-[11px] sm:text-xs font-black">
              {cake.rating || 0}
            </span>
          </div>
        </div>

        <h4 className="text-base sm:text-lg font-black text-slate-900 tracking-tight leading-tight mb-1 truncate group-hover:text-pink-600 transition-colors">
          {cake.name}
        </h4>

        <p className="text-[10px] sm:text-[11px] text-slate-400 font-medium line-clamp-1 italic mb-3 sm:mb-4">
          {cake.shortDescription}
        </p>

        {/* 💰 Price & Stock Stats */}
        <div className="flex items-end justify-between pt-3 sm:pt-4 border-t border-slate-50">
          <div className="flex flex-col">
            {hasDiscount && (
              <span className="text-[10px] sm:text-xs font-bold text-slate-300 line-through decoration-pink-400/50">
                ৳{cake.price.toLocaleString()}
              </span>
            )}
            <div className="flex items-baseline gap-1">
              <span className="text-xl sm:text-2xl font-black text-slate-900 italic tracking-tighter">
                ৳{finalPrice.toLocaleString()}
              </span>
            </div>
          </div>

          <div className="text-right space-y-1">
            <div className="flex items-center gap-1.5 justify-end text-emerald-600">
              <TrendingUp size={10} className="sm:size-3" />
              <span className="text-[9px] sm:text-[10px] font-black uppercase">
                {cake.salesCount || 0} Sold
              </span>
            </div>
            <div
              className={cn(
                "flex items-center gap-1.5 justify-end",
                cake.stock < 10
                  ? "text-rose-500 animate-pulse"
                  : "text-slate-400"
              )}
            >
              <Package size={10} className="sm:size-3" />
              <span className="text-[9px] sm:text-[10px] font-black uppercase">
                {cake.stock} Stock
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
