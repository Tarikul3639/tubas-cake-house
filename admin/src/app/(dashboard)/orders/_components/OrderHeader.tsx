"use client";
import React from "react";
import { Download, Layers, Sparkles } from "lucide-react";

interface OrderHeaderProps {
  onExport: () => void;
  totalOrders?: number;
}

export function OrderHeader({ onExport, totalOrders = 0 }: OrderHeaderProps) {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
      {/* --- Title & Meta Section --- */}
      <div className="space-y-1">
        <div className="flex items-center gap-3">
          {/* Brand Icon Box */}
          <div className="p-2.5 bg-slate-900 rounded-2xl text-white shadow-xl shadow-slate-200 rotate-3 group hover:rotate-0 transition-transform duration-300">
            <Layers size={22} strokeWidth={2.5} />
          </div>
          
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <h2 className="text-3xl font-black text-slate-900 tracking-tighter italic">
                Order <span className="text-pink-600">Flux</span>
              </h2>
              {/* Live Count Badge */}
              <div className="flex items-center gap-1.5 px-3 py-1 bg-emerald-50 border border-emerald-100 rounded-full animate-pulse">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">
                  {totalOrders} Active
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.25em] ml-1 flex items-center gap-2">
          <Sparkles size={12} className="text-pink-400" />
          Real-time delivery & transaction intelligence
        </p>
      </div>

      {/* --- Action Buttons --- */}
      <div className="flex items-center gap-3">
        <button
          onClick={onExport}
          className="group flex items-center gap-3 px-6 py-3.5 bg-white border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white rounded-4xl text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 shadow-lg shadow-slate-100 active:scale-95"
        >
          <Download 
            size={16} 
            strokeWidth={3} 
            className="group-hover:-translate-y-1 transition-transform" 
          />
          Export Archive
        </button>
      </div>
    </div>
  );
}