"use client";
import React from "react";
import { Cake, Plus, LayoutGrid, List } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeaderProps {
  view: "grid" | "table";
  setView: (view: "grid" | "table") => void;
}

export function InventoryHeader({ view, setView }: HeaderProps) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
      <div>
        <h2 className="text-2xl font-black text-slate-900 italic tracking-tighter uppercase flex items-center gap-3">
          <div className="p-2.5 bg-pink-600 text-white rounded-3xl shadow-lg shadow-pink-100">
            <Cake size={24} />
          </div>
          Cake Inventory
        </h2>
        <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em] mt-2">
          Nexion Premium Admin Portal • 2026 Edition
        </p>
      </div>
      
      <div className="flex gap-3 w-full md:w-auto">
        <div className="hidden sm:flex bg-slate-100 p-1.5 rounded-2xl">
           <button onClick={() => setView("grid")} className={cn("p-2 rounded-xl transition-all", view === "grid" ? "bg-white shadow-md text-pink-600" : "text-slate-400")}><LayoutGrid size={18} /></button>
           <button onClick={() => setView("table")} className={cn("p-2 rounded-xl transition-all", view === "table" ? "bg-white shadow-md text-pink-600" : "text-slate-400")}><List size={18} /></button>
        </div>
        <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-900 text-white rounded-[22px] text-[11px] font-black uppercase tracking-widest hover:bg-pink-600 transition-all shadow-xl shadow-slate-200 active:scale-95">
          <Plus size={16} strokeWidth={3} /> Create New Product
        </button>
      </div>
    </div>
  );
}