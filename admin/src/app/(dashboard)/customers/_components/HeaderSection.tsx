import React from "react";
import { Zap, UserPlus } from "lucide-react";

export default function HeaderSection() {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
      <div>
        <h2 className="text-3xl font-black text-slate-900 italic tracking-tighter uppercase flex items-center gap-3">
          <div className="p-2.5 bg-slate-950 text-white rounded-2xl shadow-xl shadow-slate-200">
            <Zap size={24} fill="currentColor" />
          </div>
          Customer <span className="text-pink-600">Base</span>
        </h2>
        <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em] mt-3 flex items-center gap-2 italic">
          <span className="w-8 h-px bg-slate-200" /> Nexion Relationship Manager
        </p>
      </div>
      <button className="flex items-center justify-center gap-3 px-8 py-4 bg-slate-950 text-white rounded-[24px] text-[11px] font-black uppercase tracking-widest hover:bg-pink-600 transition-all shadow-xl shadow-slate-200 active:scale-95 group">
        <UserPlus size={18} className="group-hover:rotate-12 transition-transform" /> 
        Register New Customer
      </button>
    </div>
  );
}