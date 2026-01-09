import React from "react";
import { Package } from "lucide-react";
import { ICake } from "@/types/cakes";

interface IQuickLogistics {
  cake: ICake;
}

export default function QuickLogistics({ cake }: IQuickLogistics) {
    const isLowStock = cake.stock < 10;
  return (
    <section className="bg-white p-6 rounded-[32px] shadow-sm border border-slate-100 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className={`p-3 rounded-2xl ${isLowStock ? 'bg-pink-50 text-pink-500' : 'bg-emerald-50 text-emerald-500'}`}>
          <Package size={20}/>
        </div>
        <div>
          <p className="text-[10px] font-black uppercase text-slate-400">Inventory Warning</p>
          <p className="text-xs font-bold text-slate-700">{isLowStock ? 'Low Stock Alert' : 'Stock Levels Healthy'}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-xl font-black text-slate-900">{cake.stock}</p>
        <p className="text-[9px] font-bold text-slate-400 uppercase">Units</p>
      </div>
    </section>
  );
}