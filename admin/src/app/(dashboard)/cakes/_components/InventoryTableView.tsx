"use client";
import React from "react";
import {
  TrendingUp,
  Edit3,
  Trash2,
  Layers,
  MoreHorizontal,
  Tag,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { CakeProduct } from "@/types/cakes";
import { CakeEditDialog } from "./CakeEditDialog";
import { CakeAnalyticsDialog } from "./CakeAnalyticsDialog";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";

interface TableViewProps {
  cakes: CakeProduct[];
  onDelete: (id: string) => void;
}

export function InventoryTableView({ cakes, onDelete }: TableViewProps) {
  return (
    <div className="bg-white rounded-[40px] border border-slate-100 shadow-sm overflow-hidden transition-all duration-500">
      <div className="overflow-x-auto no-scrollbar">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/50 text-slate-400 text-[9px] font-black uppercase tracking-[0.2em] border-b border-slate-50">
              <th className="px-8 py-6">Product Insight</th>
              <th className="px-8 py-6 text-center">Price & Offers</th>
              <th className="px-8 py-6">Inventory</th>
              <th className="px-8 py-6">Performance</th>
              <th className="px-8 py-6 text-center">Control</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {cakes.map((cake) => {
              const defaultVariant =
                cake.variants.find((v) => v.isDefault) || cake.variants[0];
              const hasOffer = cake.offer?.isActive;

              // Price Calculation with Offer
              const discountAmount = hasOffer
                ? cake.offer?.type === "percentage"
                  ? (defaultVariant.price * (cake.offer?.value || 0)) / 100
                  : cake.offer?.value || 0
                : 0;
              const finalPrice = defaultVariant.price - discountAmount;

              return (
                <tr
                  key={cake._id}
                  className="group hover:bg-pink-50/20 transition-all duration-300"
                >
                  {/* 1. Image & Name */}
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-4">
                      <div className="relative w-14 h-14 rounded-4xl bg-slate-100 overflow-hidden border border-slate-50 group-hover:scale-105 transition-transform">
                        <Avatar className="w-full h-full rounded-none">
                          <AvatarImage
                            src={cake.imageUrl}
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <AvatarFallback className="rounded-none bg-pink-50 text-pink-200 font-bold text-lg sm:text-4xl">
                            {cake.name.charAt(0).toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-black text-slate-800 tracking-tight group-hover:text-pink-600 transition-colors leading-none">
                          {cake.name}
                        </span>
                        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">
                          ID: {cake._id.slice(-6)}
                        </span>
                      </div>
                    </div>
                  </td>

                  {/* 2. PRICE & OFFER SECTION (Updated) */}
                  <td className="px-8 py-5">
                    <div className="flex flex-col items-center justify-center gap-1">
                      {hasOffer ? (
                        <>
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-bold text-slate-300 line-through decoration-pink-300">
                              ৳{defaultVariant.price.toLocaleString()}
                            </span>
                            <span className="bg-pink-100 text-pink-600 px-1.5 py-0.5 rounded-md text-[8px] font-black uppercase flex items-center gap-1">
                              <Tag size={8} /> -{cake.offer?.value}
                              {cake.offer?.type === "percentage" ? "%" : "৳"}
                            </span>
                          </div>
                          <span className="text-sm font-black text-slate-900 italic">
                            ৳{finalPrice.toLocaleString()}
                          </span>
                        </>
                      ) : (
                        <span className="text-sm font-black text-slate-900 italic">
                          ৳{defaultVariant.price.toLocaleString()}
                        </span>
                      )}
                      <span className="text-[8px] font-black text-slate-400 uppercase tracking-tighter">
                        PER {defaultVariant.label}
                      </span>
                    </div>
                  </td>

                  {/* 3. Inventory */}
                  <td className="px-8 py-5">
                    <div className="flex flex-col">
                      <span className="inline-flex w-fit px-2 py-0.5 bg-slate-900 text-white rounded-md text-[8px] font-black uppercase mb-1">
                        {cake.category}
                      </span>
                      <div className="flex items-center gap-1.5">
                        <div
                          className={cn(
                            "w-1.5 h-1.5 rounded-full animate-pulse",
                            defaultVariant.stock > 10
                              ? "bg-emerald-500"
                              : "bg-rose-500"
                          )}
                        />
                        <span className="text-[11px] font-black text-slate-700 italic">
                          {defaultVariant.stock} In Stock
                        </span>
                      </div>
                    </div>
                  </td>

                  {/* 4. Sales */}
                  <td className="px-8 py-5">
                    <div className="flex flex-col">
                      <span className="text-xs font-black text-slate-800 italic flex items-center gap-1">
                        <TrendingUp size={12} className="text-emerald-500" />{" "}
                        {cake.totalSold || 0}
                      </span>
                      <span className="text-[9px] text-slate-400 font-bold uppercase tracking-tighter">
                        Orders Done
                      </span>
                    </div>
                  </td>

                  {/* 5. Controls */}
                  <td className="px-8 py-5 text-right">
                    <motion.div
                      key={cake._id}
                      initial={{ opacity: 1, x: 0 }}
                      whileHover={{ x: -10 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="flex items-center justify-end gap-2"
                    >
                      <Dialog>
                        <DialogTrigger asChild>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-2.5 bg-white border border-slate-100 text-slate-400 rounded-xl hover:bg-slate-900 hover:text-white transition-all"
                          >
                            <TrendingUp size={14} />
                          </motion.button>
                        </DialogTrigger>
                        <CakeAnalyticsDialog
                          cake={cake}
                          finalPrice={finalPrice}
                        />
                      </Dialog>
                      <Dialog>
                        <DialogTrigger asChild>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-2.5 bg-white border border-slate-100 text-slate-900 rounded-xl hover:bg-pink-600 hover:text-white transition-all"
                          >
                            <Edit3 size={14} />
                          </motion.button>
                        </DialogTrigger>
                        <CakeEditDialog cake={cake} />
                      </Dialog>

                      <button
                        onClick={() => onDelete(cake._id)}
                        className="p-2.5 bg-rose-50 text-rose-500 rounded-xl hover:bg-rose-500 hover:text-white transition-all"
                      >
                        <Trash2 size={14} />
                      </button>
                    </motion.div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
