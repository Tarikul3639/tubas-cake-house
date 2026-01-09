import React from "react";
import { ShieldCheck, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { ICake } from "@/types/cakes";

interface ISettingsCardProps {
  cake: ICake;
  onUpdate: (key: keyof ICake, value: any) => void;
}

export default function SettingsCard({ cake, onUpdate }: ISettingsCardProps) {
  return (
    <section className="bg-slate-900 p-8 rounded-[40px] text-white shadow-2xl shadow-slate-200">
      <div className="space-y-8">
        <div>
          <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-6 flex items-center gap-2">
            <ShieldCheck size={14} className="text-pink-500" /> Availability & Visibility
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <button 
              onClick={() => onUpdate("isActive", true)}
              className={cn("py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest border transition-all", 
              cake.isActive ? "bg-white text-slate-900 border-white shadow-lg" : "bg-white/5 text-white/40 border-white/10")}
            >
              Live / Active
            </button>
            <button 
              onClick={() => onUpdate("isActive", false)}
              className={cn("py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest border transition-all", 
              !cake.isActive ? "bg-rose-500 text-white border-rose-500 shadow-lg" : "bg-white/5 text-white/40 border-white/10")}
            >
              Archived
            </button>
          </div>
        </div>

        <div className="p-6 bg-white/5 border border-white/10 rounded-3xl">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-3">
              <Sparkles size={16} className="text-amber-400"/>
              <span className="text-[10px] font-black uppercase text-white">Customization</span>
            </div>
            <button 
              onClick={() => onUpdate("isCustomizable", ! cake.isCustomizable)}
              className={cn("w-10 h-5 rounded-full relative transition-colors", cake.isCustomizable ? "bg-emerald-500" : "bg-slate-700")}
            >
              <div className={cn("w-3 h-3 bg-white rounded-full absolute top-1 transition-all", cake.isCustomizable ? "left-6" : "left-1")} />
            </button>
          </div>
          <p className="text-[9px] font-medium text-slate-400 leading-relaxed">
            If enabled, customers can add custom messages or select special design modifications at checkout.
          </p>
        </div>

        <div className="pt-4 border-t border-white/10">
          <div className="flex justify-between items-center text-[10px] font-mono text-slate-500">
            <span>Created At</span>
            <span>{new Date(cake.createdAt).toLocaleDateString()}</span>
          </div>
          <div className="flex justify-between items-center text-[10px] font-mono text-slate-500 mt-2">
            <span>Last Update</span>
            <span>{new Date(cake.updatedAt).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </section>
  );
}