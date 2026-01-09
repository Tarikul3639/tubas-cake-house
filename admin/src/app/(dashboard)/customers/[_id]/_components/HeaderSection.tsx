import React from "react";
import { Save, ArrowLeft, Hash } from "lucide-react";
import Link from "next/link";
import { ICustomer } from "@/types/customer";

interface HeaderSectionProps {
  customer:  ICustomer;
}

export default function HeaderSection({ customer }:  HeaderSectionProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Link href="/customers" className="p-3 bg-slate-100 hover:bg-pink-50 rounded-2xl transition-all group">
          <ArrowLeft size={20} className="text-slate-600 group-hover:-translate-x-1 transition-transform" />
        </Link>
        <div>
          <h1 className="text-xl font-black text-slate-900 tracking-tighter italic uppercase leading-none">
            Modify <span className="text-pink-600">Customer</span>
          </h1>
          <p className="text-[9px] text-slate-400 font-bold uppercase tracking-[0.2em] mt-2 flex items-center gap-2">
            <Hash size={10} /> UUID: {customer._id}
          </p>
        </div>
      </div>

      <button className="flex items-center gap-2 px-8 py-4 bg-slate-950 text-white rounded-[22px] text-[11px] font-black uppercase tracking-widest hover:bg-pink-600 transition-all shadow-xl shadow-slate-200 active:scale-95 group">
        <Save size={16} className="group-hover:rotate-12 transition-transform" />
        Commit Changes
      </button>
    </div>
  );
}