"use client";
import React from "react";
import { Type } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ICake, ICategory } from "@/types/cakes";

export const CATEGORIES: ICategory[] = [
  "Birthday", "Wedding", "Anniversary", "Graduation",
  "Baby Shower", "Holiday", "Custom", "Kids"
];

interface IBasicInfo {
  cake: ICake;
  onUpdate: (key: keyof ICake, value: any) => void;
}

export default function BasicInfo({ cake, onUpdate }: IBasicInfo) {
  return (
    <section className="bg-white p-8 rounded-[40px] shadow-sm border border-slate-100">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2.5 bg-slate-50 rounded-xl text-slate-500"><Type size={20} /></div>
        <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">General Information</h3>
      </div>
      <div className="grid gap-6">
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">Cake Title</label>
          <input 
            value={cake.name} 
            onChange={(e) => onUpdate("name", e.target.value)} 
            className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 font-bold text-slate-800 focus:border-pink-500 outline-none transition-all" 
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">URL Slug</label>
            <input 
              value={cake.slug} 
              onChange={(e) => onUpdate("slug", e.target.value)} 
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 font-mono text-xs outline-none" 
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">Category</label>
            
            {/* shadcn Select Component */}
            <Select 
              value={cake.category} 
              onValueChange={(value) => onUpdate("category", value)}
            >
              <SelectTrigger className="w-full bg-slate-50 border-slate-200 rounded-xl px-4 py-5 font-bold text-xs outline-none focus:ring-0 focus:ring-offset-0 border shadow-none">
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent className="rounded-2xl border-slate-100 shadow-xl">
                <SelectGroup>
                  <SelectLabel className="text-[10px] font-black uppercase tracking-widest text-slate-400 py-3">Available Types</SelectLabel>
                  {CATEGORIES.map((cat) => (
                    <SelectItem 
                      key={cat} 
                      value={cat}
                      className="text-xs font-bold py-3 focus:bg-pink-50 focus:text-pink-600 cursor-pointer rounded-xl transition-colors"
                    >
                      {cat}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>

          </div>
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">Short Preview Description</label>
          <textarea 
            value={cake.shortDescription} 
            onChange={(e) => onUpdate("shortDescription", e.target.value)} 
            className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3 text-sm font-medium h-20 outline-none resize-none" 
          />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">Full Narrative Description</label>
          <textarea 
            value={cake.description} 
            onChange={(e) => onUpdate("description", e.target.value)} 
            className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3 text-sm font-medium h-48 outline-none" 
          />
        </div>
      </div>
    </section>
  );
}