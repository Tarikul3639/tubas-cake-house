"use client";
import React, { useState } from "react";
import { 
  Plus, Search, Filter, Cake, Layers, LayoutGrid, List, ArrowUpDown, TrendingUp 
} from "lucide-react";
import { cn } from "@/lib/utils";
import { CakeCard } from "./_components/CakeCard";
import { CakeProduct } from "@/types/cakes"; 
import { cakeProducts as initialCakes } from "@/store/cakes"; 

export default function CakesAdminPage() {
  const [view, setView] = useState<"grid" | "table">("grid");
  const [cakes, setCakes] = useState<CakeProduct[]>(initialCakes);
  const [searchTerm, setSearchTerm] = useState("");

  const handleDelete = (id: string) => {
    if(confirm("Are you sure you want to delete this cake?")) {
      setCakes(cakes.filter(c => c._id !== id));
    }
  };

  const filteredCakes = cakes.filter(c => 
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    c.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8 pb-10">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h2 className="text-2xl font-black text-slate-900 italic tracking-tighter uppercase flex items-center gap-3">
            <div className="p-2.5 bg-pink-600 text-white rounded-[20px] shadow-lg shadow-pink-100">
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

      {/* Filters Bar */}
      <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
        <div className="relative w-full lg:w-[500px] group">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-pink-500 transition-colors" size={18} />
          <input 
            type="text" 
            placeholder="Search by name, category, or tags..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-14 pr-6 py-4 bg-white border border-slate-100 rounded-[24px] text-sm focus:outline-none focus:ring-4 focus:ring-pink-500/5 focus:border-pink-200 transition-all shadow-sm font-medium"
          />
        </div>
        
        <div className="flex items-center gap-3 w-full lg:w-auto overflow-x-auto no-scrollbar pb-2 lg:pb-0">
          <button className="flex items-center gap-2 px-5 py-3 bg-white border border-slate-100 rounded-2xl text-[10px] font-black uppercase tracking-widest text-slate-600 hover:border-pink-200 hover:bg-slate-50 transition-all">
            <Filter size={14} /> Category
          </button>
          <button className="flex items-center gap-2 px-5 py-3 bg-white border border-slate-100 rounded-2xl text-[10px] font-black uppercase tracking-widest text-slate-600 hover:border-pink-200 hover:bg-slate-50 transition-all">
            <ArrowUpDown size={14} /> Sort By
          </button>
          <div className="h-8 w-[1px] bg-slate-200 mx-2 hidden lg:block" />
          <div className="px-4 py-2 bg-slate-900/5 rounded-full">
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-tighter whitespace-nowrap">
               <span className="text-pink-600">{filteredCakes.length}</span> Products Found
            </p>
          </div>
        </div>
      </div>

      {/* Content Rendering */}
      {view === "grid" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredCakes.map((cake, index) => (
            <CakeCard key={cake._id} cake={cake} index={index} onDelete={() => handleDelete(cake._id)} />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-slate-50/80 text-slate-400 text-[9px] font-black uppercase tracking-[0.2em]">
              <tr>
                <th className="px-8 py-5">Cake Product</th>
                <th className="px-8 py-5">Classification</th>
                <th className="px-8 py-5">Stock (Default)</th>
                <th className="px-8 py-5">Performance</th>
                <th className="px-8 py-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {filteredCakes.map((cake) => {
                const defaultVariant = cake.variants.find(v => v.isDefault) || cake.variants[0];
                return (
                  <tr key={cake._id} className="group hover:bg-slate-50/50 transition-all">
                    <td className="px-8 py-5">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-2xl overflow-hidden">
                          <img src={cake.imageUrl} alt={cake.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm font-black text-slate-800 tracking-tight">{cake.name}</span>
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{cake._id}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-5">
                      <span className="px-3 py-1 bg-pink-50 text-pink-600 rounded-full text-[9px] font-black uppercase tracking-widest">
                        {cake.category}
                      </span>
                    </td>
                    <td className="px-8 py-5">
                      <div className="flex flex-col">
                        <span className={cn("text-xs font-black italic", defaultVariant.stock > 5 ? "text-emerald-500" : "text-rose-500")}>
                          {defaultVariant.stock} Units Left
                        </span>
                        <span className="text-[10px] text-slate-400 font-bold uppercase">{defaultVariant.label}</span>
                      </div>
                    </td>
                    <td className="px-8 py-5">
                       <div className="flex items-center gap-3">
                          <div className="flex flex-col">
                            <span className="text-xs font-black text-slate-700 italic flex items-center gap-1">
                              <TrendingUp size={12} className="text-emerald-500" /> {cake.totalSold}
                            </span>
                            <span className="text-[9px] text-slate-400 font-bold uppercase">Total Sold</span>
                          </div>
                       </div>
                    </td>
                    <td className="px-8 py-5 text-right">
                       <button className="p-2.5 bg-slate-100 hover:bg-slate-900 hover:text-white rounded-xl transition-all">
                         <Plus size={14} />
                       </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {/* Empty State */}
      {filteredCakes.length === 0 && (
        <div className="py-32 text-center bg-white rounded-[40px] border-2 border-dashed border-slate-100">
           <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Layers className="text-slate-200" size={40} />
           </div>
           <h3 className="text-lg font-black text-slate-800 italic uppercase">No Products Found</h3>
           <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-2">Try adjusting your filters or search keywords</p>
        </div>
      )}
    </div>
  );
}