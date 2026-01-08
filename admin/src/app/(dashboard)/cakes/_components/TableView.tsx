"use client";
import React from "react";
import { TrendingUp, Edit3, Trash2, Tag, Package, Layers } from "lucide-react";
import { cn } from "@/lib/utils";
import { ICake } from "@/types/cakes";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import Link from "next/link";

interface TableViewProps {
  cakes: ICake[];
  onDelete: (id: string) => void;
}

export function TableView({ cakes, onDelete }: TableViewProps) {
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
              <th className="px-8 py-6 text-right">Control Hub</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {cakes.map((cake) => {
              // --- New Logic based on ICake Standard ---
              const hasDiscount = cake.discount && cake.discount > 0;
              const finalPrice = hasDiscount
                ? cake.price * (1 - (cake.discount || 0) / 100)
                : cake.price;

              return (
                <tr
                  key={cake._id}
                  className="group hover:bg-pink-50/20 transition-all duration-300"
                >
                  {/* 1. Image & Identity */}
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-4">
                      <div className="relative w-12 h-12 rounded-2xl bg-slate-100 overflow-hidden border border-slate-50 group-hover:scale-105 transition-transform">
                        <Avatar className="w-full h-full rounded-none">
                          <AvatarImage
                            src={cake.images[0]} // Using first image from array
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <AvatarFallback className="rounded-none bg-pink-50 text-pink-300 font-black text-xl italic">
                            {cake.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-black text-slate-800 tracking-tight group-hover:text-pink-600 transition-colors leading-none">
                          {cake.name}
                        </span>
                        <div className="flex items-center gap-2 mt-1.5">
                          <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                            ID: {cake._id.slice(-6)}
                          </span>
                          <span
                            className={cn(
                              "px-1.5 py-0.5 rounded text-[8px] font-black uppercase",
                              cake.isActive
                                ? "bg-emerald-100 text-emerald-600"
                                : "bg-slate-100 text-slate-500"
                            )}
                          >
                            {cake.isActive ? "Active" : "Draft"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </td>

                  {/* 2. Price & Offer Section */}
                  <td className="px-8 py-5">
                    <div className="flex flex-col items-center justify-center">
                      {hasDiscount ? (
                        <>
                          <div className="flex items-center gap-2 mb-0.5">
                            <span className="text-[10px] font-bold text-slate-300 line-through decoration-pink-300">
                              ৳{cake.price.toLocaleString()}
                            </span>
                            <span className="bg-pink-100 text-pink-600 px-1.5 py-0.5 rounded-md text-[8px] font-black uppercase flex items-center gap-1">
                              <Tag size={8} /> -৳{(cake.price * (cake.discount || 0) / 100).toLocaleString()}
                            </span>
                          </div>
                          <span className="text-sm font-black text-slate-900 italic">
                            ৳{finalPrice.toLocaleString()}
                          </span>
                        </>
                      ) : (
                        <span className="text-sm font-black text-slate-900 italic">
                          ৳{cake.price.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </td>

                  {/* 3. Inventory */}
                  <td className="px-8 py-5">
                    <div className="flex flex-col">
                      <span className="inline-flex w-fit px-2 py-0.5 bg-slate-900 text-white rounded-md text-[8px] font-black uppercase mb-1.5">
                        {cake.category}
                      </span>
                      <div className="flex items-center gap-2">
                        <div
                          className={cn(
                            "w-2 h-2 rounded-full",
                            cake.stock > 10
                              ? "bg-emerald-500"
                              : "bg-rose-500 animate-pulse"
                          )}
                        />
                        <span className="text-[11px] font-black text-slate-700 italic">
                          {cake.stock} Units
                        </span>
                      </div>
                    </div>
                  </td>

                  {/* 4. Performance (Sales Analytics) */}
                  <td className="px-8 py-5">
                    <div className="flex flex-col">
                      <span className="text-xs font-black text-slate-800 italic flex items-center gap-1.5">
                        <TrendingUp size={12} className="text-emerald-500" />
                        {cake.salesCount || 0}
                      </span>
                      <span className="text-[9px] text-slate-400 font-bold uppercase tracking-tighter mt-0.5">
                        Gross Sales
                      </span>
                    </div>
                  </td>

                  {/* 5. Control Hub */}
                  <td className="px-8 py-5">
                    <div className="flex items-center justify-end gap-2">
                      {/* Edit Navigation */}
                      <Link href={`cakes/${cake._id}`}>
                        <motion.button
                          whileHover={{
                            scale: 1.1,
                            backgroundColor: "#0f172a",
                            color: "#fff",  
                            transition: { type: "tween", duration: 0 },
                          }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2.5 bg-white border border-slate-100 text-slate-400 rounded-xl transition-all duration-300 shadow-sm"
                        >
                          <TrendingUp size={14} />
                        </motion.button>
                      </Link>

                      {/* Delete Action */}
                      <button
                        onClick={() => onDelete(cake._id)}
                        className="p-2.5 bg-rose-50 text-rose-500 rounded-xl hover:bg-rose-500 hover:text-white transition-all duration-300 active:scale-95"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
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
