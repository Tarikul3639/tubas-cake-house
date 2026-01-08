"use client";
import React from "react";
import { X, Globe, Truck, TrendingUp } from "lucide-react";
import { CakeProduct } from "@/types/cakes";
import {
  DialogContent,
  DialogTitle,
  DialogClose,
  DialogDescription,
} from "@/components/ui/dialog";

export function CakeAnalyticsDialog({
  cake,
  finalPrice
}: {
  cake: CakeProduct;
  finalPrice: number;
}) {
  return (
    <DialogContent className="max-w-2xl rounded-[48px] p-0 overflow-hidden border-none [&>button]:hidden">
      {/* Accessibility: Screen readers needs Title and Description */}
      <DialogDescription className="sr-only">
        Viewing sales and engagement metrics for {cake.name}
      </DialogDescription>

      <div className="p-10 bg-linear-to-br from-slate-950 to-slate-800 text-white relative">
        <div className="relative z-10 flex justify-between items-center">
          <div>
            <p className="text-[10px] font-black uppercase text-pink-500 tracking-[0.3em] mb-2">
              Internal Metrics
            </p>
            {/* Fix: Using DialogTitle instead of h2 */}
            <DialogTitle className="text-4xl font-black italic tracking-tighter leading-none">
              {cake.name}
            </DialogTitle>
          </div>
          <DialogClose className="p-3 bg-white/10 rounded-full hover:bg-rose-500 transition-all">
            <X size={20} />
          </DialogClose>
        </div>
      </div>

      <div className="p-10 grid grid-cols-2 gap-8 bg-white">
        <div className="space-y-2">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
            <Globe size={14} className="text-pink-500" /> SEO Status
          </p>
          <p className="text-sm font-bold text-slate-700 italic truncate">
            {cake.seo?.metaTitle || "No Meta Title Set"}
          </p>
        </div>

        <div className="space-y-2">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
            <Truck size={14} className="text-blue-500" /> Logistics
          </p>
          <p className="text-sm font-bold text-slate-700 italic">
            {cake.delivery.sameDayAvailable
              ? "Same Day Active"
              : "Standard Only"}
          </p>
        </div>

        <div className="col-span-2 p-8 bg-slate-50 rounded-[40px] border border-slate-100 flex justify-between items-center">
          <div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
              Gross Revenue
            </p>
            <p className="text-3xl font-black italic text-slate-900 mt-1">
              ৳{(cake.totalSold * finalPrice).toLocaleString()}
            </p>
          </div>
          <div className="text-right">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
              Engagement
            </p>
            <p className="text-3xl font-black italic text-pink-600 mt-1">
              {cake.totalReviews} <span className="text-sm">Reviews</span>
            </p>
          </div>
        </div>
      </div>
    </DialogContent>
  );
}
