"use client";
import React from "react";
import { DollarSign, Tag, Calculator, Package } from "lucide-react";
import { ICake } from "@/types/cakes";

interface IPricingInventory {
  cake: ICake;
  onUpdate: (key: keyof ICake, value: any) => void;
}

export default function PricingInventory({
  cake,
  onUpdate,
}: IPricingInventory) {
  // Calculation Logic
  const price = cake.price || 0;
  const discountAmount = cake.discount || 0;
  const discountPercentage =
    price > 0 ? Math.round((discountAmount / price) * 100) : 0;
  const finalPrice = price - discountAmount;

  return (
    <section className="bg-white p-8 rounded-[40px] shadow-sm border border-slate-100">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-emerald-50 rounded-xl text-emerald-500">
            <DollarSign size={20} />
          </div>
          <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">
            Financial & Stock
          </h3>
        </div>

        {/* Live Status Badge */}
        <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-2xl border border-slate-100">
          <Calculator size={14} className="text-slate-400" />
          <span className="text-[10px] font-black uppercase text-slate-500 italic">
            Auto-Calculation Active
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* 1. Base Price */}
        <div className="space-y-3">
          <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">
            Base Price (৳)
          </label>
          <div className="relative">
            <input
              type="number"
              value={cake.price}
              onChange={(e) => onUpdate("price", Number(e.target.value))}
              className="w-full bg-slate-950 text-white rounded-[24px] px-6 py-5 font-black text-2xl outline-none focus:ring-2 ring-emerald-500/20 transition-all [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              placeholder="0"
            />
            <span className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-500 font-black italic">
              BDT
            </span>
          </div>
        </div>

        {/* 2. Discount with Live Percentage */}
        <div className="space-y-2">
          <div className="flex justify-between items-center px-1">
            <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">
              Discount (৳)
            </label>
            {discountPercentage > 0 && (
              <span className="text-[10px] font-black text-pink-500 bg-pink-50 px-2 py-0.5 rounded-lg animate-pulse">
                {discountPercentage}% OFF
              </span>
            )}
          </div>
          <div className="relative">
            <input
              type="number"
              value={cake.discount}
              onChange={(e) => onUpdate("discount", Number(e.target.value))}
              className="w-full bg-pink-50 text-pink-600 border border-pink-100 rounded-[24px] px-6 py-5 font-black text-2xl outline-none focus:ring-2 ring-pink-500/20 transition-all [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              placeholder="0"
            />
            <Tag
              size={18}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-pink-300"
            />
          </div>
        </div>

        {/* 3. Final Price Display (Read Only) */}
        <div className="space-y-3">
          <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">
            Customer Pays (Final)
          </label>
          <div className="w-full bg-emerald-50 border border-emerald-100 text-emerald-700 rounded-[24px] px-6 py-5 font-black text-2xl flex items-center justify-between shadow-inner">
            <span>৳ {finalPrice.toLocaleString()}</span>
            <span className="text-[10px] bg-emerald-500 text-white px-2 py-1 rounded-md uppercase tracking-tighter">
              Net
            </span>
          </div>
        </div>
      </div>

      {/* Global Stock Section - Full Width for better UI balance */}
      <div className="mt-8 pt-8 border-t border-slate-50 flex items-center gap-6">
        <div className="flex-1 space-y-3">
          <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1 flex items-center gap-2">
            <Package size={12} /> Global Inventory Stock
          </label>
          <input
            type="number"
            value={cake.stock}
            onChange={(e) => onUpdate("stock", Number(e.target.value))}
            className="w-full bg-slate-50 border border-slate-200 rounded-[24px] px-6 py-4 font-black text-xl outline-none focus:bg-white focus:border-slate-900 transition-all [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            placeholder="0"
          />
        </div>
        <div className="hidden md:block w-1/3 p-4 bg-slate-50 rounded-3xl border border-dashed border-slate-200">
          <p className="text-[9px] text-slate-400 font-bold uppercase leading-relaxed">
            * The base price and discount will be applied to all cake variants
            unless specified otherwise.
          </p>
        </div>
      </div>
    </section>
  );
}
