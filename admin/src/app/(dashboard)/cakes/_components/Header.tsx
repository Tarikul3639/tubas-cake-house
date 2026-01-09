"use client";
import React from "react";
import { Cake, Plus, LayoutGrid, List } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface HeaderProps {
  view: "grid" | "table";
  setView: (view: "grid" | "table") => void;
}

export function Header({ view, setView }: HeaderProps) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10">
      <div>
        <h2 className="text-3xl font-black text-slate-900 italic tracking-tighter uppercase flex items-center gap-4">
          <div className="p-3 bg-pink-600 text-white rounded-[28px] shadow-2xl shadow-pink-200 animate-in fade-in zoom-in duration-700">
            <Cake size={28} />
          </div>
          Cake <span className="text-pink-600">Inventory</span>
        </h2>
        <div className="flex items-center gap-3 mt-2">
          <span className="h-1 w-8 bg-pink-600 rounded-full" />
          <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.3em] italic">
            Nexion Core • System Access 2026
          </p>
        </div>
      </div>
      
      <div className="flex items-center gap-4 w-full md:w-auto">
        {/* View Switcher Container */}
        <div className="hidden sm:flex bg-slate-100/80 backdrop-blur-md p-1.5 rounded-[22px] border border-slate-200/50">
           <button 
             onClick={() => setView("grid")} 
             className={cn(
               "p-2.5 rounded-[18px] transition-all duration-300 flex items-center gap-2 px-4", 
               view === "grid" ? "bg-white shadow-lg text-pink-600 font-bold" : "text-slate-400 hover:text-slate-600"
             )}
           >
             <LayoutGrid size={18} />
             {view === "grid" && <span className="text-[10px] uppercase tracking-widest">Grid</span>}
           </button>
           
           <button 
             onClick={() => setView("table")} 
             className={cn(
               "p-2.5 rounded-[18px] transition-all duration-300 flex items-center gap-2 px-4", 
               view === "table" ? "bg-white shadow-lg text-pink-600 font-bold" : "text-slate-400 hover:text-slate-600"
             )}
           >
             <List size={18} />
             {view === "table" && <span className="text-[10px] uppercase tracking-widest">Table</span>}
           </button>
        </div>

        {/* Create Button Logic Linked to Editor */}
        <Link href="/cakes/new" className="flex-1 md:flex-none">
          <button className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-slate-950 text-white rounded-[24px] text-[11px] font-black uppercase tracking-[0.2em] hover:bg-pink-600 transition-all shadow-[0_20px_40px_rgba(0,0,0,0.1)] hover:shadow-pink-200 active:scale-95 group">
            <div className="p-1 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
              <Plus size={16} strokeWidth={4} />
            </div>
            Create New Product
          </button>
        </Link>
      </div>
    </div>
  );
}