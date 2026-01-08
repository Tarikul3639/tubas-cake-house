"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Edit3,
  Trash2,
  Star,
  TrendingUp,
  Info,
  Layers,
  Zap,
  Percent,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { CakeProduct } from "@/types/cakes";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { CakeEditDialog } from "./CakeEditDialog";
import { CakeAnalyticsDialog } from "./CakeAnalyticsDialog";
import { Dialog, DialogTrigger } from "@radix-ui/react-dialog";

export function CakeCard({
  cake,
  index,
  onDelete,
}: {
  cake: CakeProduct;
  index: number;
  onDelete: (id: string) => void;
}) {
  const [isHovered, setIsHovered] = useState(false);

  // Default Variant ও Price Calculation
  const defaultVariant =
    cake.variants.find((v) => v.isDefault) || cake.variants[0];
  const hasOffer = cake.offer?.isActive;

  const discountAmount = hasOffer
    ? cake.offer?.type === "percentage"
      ? (defaultVariant.price * (cake.offer?.value || 0)) / 100
      : cake.offer?.value || 0
    : 0;

  const finalPrice = defaultVariant.price - discountAmount;

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
      <div className="relative aspect-3/3 w-full rounded-xl sm:rounded-[24px] overflow-hidden bg-slate-50">
        <Avatar className="w-full h-full rounded-none">
          <AvatarImage
            src={cake.imageUrl}
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <AvatarFallback className="rounded-none bg-pink-50 text-pink-200 font-bold text-lg sm:text-4xl">
            {cake.name.charAt(0).toUpperCase()}
          </AvatarFallback>
        </Avatar>

        {/* 🏷️ Status & Offer Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1.5 sm:gap-2 z-20">
          <div
            className={cn(
              "px-2 py-1 sm:px-3 sm:py-1 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-tighter backdrop-blur-md border border-white/20 shadow-sm text-white",
              cake.status === "active" ? "bg-emerald-500/80" : "bg-rose-500/80"
            )}
          >
            {cake.status}
          </div>

          {hasOffer && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="px-2 py-1 sm:px-3 sm:py-1 bg-pink-600 rounded-full text-[9px] sm:text-[10px] font-black uppercase text-white shadow-lg flex items-center gap-0.5 sm:gap-1"
            >
              <Zap size={8} className="sm:[size:10]" fill="white" />{" "}
              {cake.offer?.type === "percentage"
                ? `${cake.offer?.value}% OFF`
                : `৳${cake.offer?.value} OFF`}
            </motion.div>
          )}
        </div>

        {/* ⚡ Quick Action Overlay (Responsive) */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/20 backdrop-blur-[2px] z-30 flex items-center justify-center gap-2 sm:gap-3 p-2"
            >
              <Dialog>
                <DialogTrigger asChild>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-white text-slate-700 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-2xl hover:bg-pink-500 hover:text-white transition-colors"
                  >
                    <Edit3 size={16} className="sm:[size:20]" />
                  </motion.button>
                </DialogTrigger>
                <CakeEditDialog cake={cake} />
              </Dialog>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => onDelete(cake._id)}
                className="w-10 h-10 sm:w-12 sm:h-12 bg-white text-rose-500 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-2xl hover:bg-rose-500 hover:text-white transition-colors"
              >
                <Trash2 size={16} className="sm:[size:20]" />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 📝 Content Section */}
      <div className="mt-4 sm:mt-5 px-1 pb-2 sm:px-1">
        <div className="flex items-center justify-between text-slate-400 mb-2 sm:mb-2">
          <div className="flex items-center gap-1 bg-slate-50 px-1.5 py-1 sm:px-2 sm:py-1 rounded-md sm:rounded-lg">
            <Layers size={10} className="sm:[size:12] text-slate-500" />
            <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest">
              {cake.category}
            </span>
          </div>
          <div className="flex items-center gap-1 text-amber-500">
            <Star size={10} className="sm:[size:12]" fill="currentColor" />
            <span className="text-[11px] sm:text-xs font-black">
              {cake.rating}
            </span>
          </div>
        </div>

        <h4 className="text-base sm:text-lg font-black text-slate-900 tracking-tight leading-tight mb-1 sm:mb-1 truncate group-hover:text-pink-600 transition-colors line-clamp-2 sm:line-clamp-1">
          {cake.name}
        </h4>

        <p className="text-[10px] sm:text-[11px] text-slate-400 font-medium line-clamp-2 sm:line-clamp-1 italic mb-3 sm:mb-4">
          {cake.shortDescription}
        </p>

        {/* 💰 Price & Analytics Section */}
        <div className="flex items-end justify-between pt-3 sm:pt-4 border-t border-slate-50">
          <div className="flex flex-col">
            {hasOffer && (
              <span className="text-[10px] sm:text-xs font-bold text-slate-300 line-through decoration-pink-400/50">
                ৳{defaultVariant.price}
              </span>
            )}
            <div className="flex items-baseline gap-1">
              <span className="text-xl sm:text-2xl font-black text-slate-900 italic tracking-tighter">
                ৳{finalPrice.toLocaleString()}
              </span>
              <span className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                / {defaultVariant.label}
              </span>
            </div>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2.5 bg-slate-50 border border-slate-100 text-slate-400 rounded-xl hover:bg-slate-900 hover:text-white transition-all duration-300"
              >
                <TrendingUp size={14} />
              </motion.button>
            </DialogTrigger>
            <CakeAnalyticsDialog cake={cake} finalPrice={finalPrice} />
          </Dialog>
        </div>
      </div>
    </motion.div>
  );
}
