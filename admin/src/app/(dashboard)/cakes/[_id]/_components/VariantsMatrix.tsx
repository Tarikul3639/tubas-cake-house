import React, { useState } from "react";
import { Layers, Trash2 } from "lucide-react";
import { ICake, IVariant } from "@/types/cakes";

interface IVariantsMatrix {
  cake: ICake;
  onUpdate: (key: keyof ICake, value: any) => void;
}

export default function VariantsMatrix({ cake, onUpdate }: IVariantsMatrix) {
  const [newVariant, setNewVariant] = useState<IVariant>({ name: "", price: 0, stock: 0 });

  const addVariant = () => {
    if (! newVariant.name) return;
    const currentVariants = cake?. variants || [];
    onUpdate("variants", [...currentVariants, newVariant]);
    setNewVariant({ name: "", price: 0, stock: 0 });
  };

  return (
    <section className="bg-white p-8 rounded-[40px] shadow-sm border border-slate-100">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-indigo-50 rounded-xl text-indigo-500"><Layers size={20} /></div>
          <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Flavor / Size Variants</h3>
        </div>
      </div>
      <div className="space-y-3">
        {cake.variants?. map((v, idx) => (
          <div key={idx} className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 group">
            <div className="flex-1">
              <p className="text-[10px] font-black uppercase text-slate-400 mb-1">Variant Name</p>
              <input 
                value={v.name} 
                onChange={(e) => {
                  const updated = [... (cake.variants || [])];
                  updated[idx]. name = e.target.value;
                  onUpdate("variants", updated);
                }} 
                className="bg-transparent font-bold text-slate-800 outline-none w-full" 
              />
            </div>
            <div className="w-24">
              <p className="text-[10px] font-black uppercase text-slate-400 mb-1">Price</p>
              <input 
                type="number" 
                value={v. price} 
                onChange={(e) => {
                  const updated = [...(cake.variants || [])];
                  updated[idx].price = Number(e.target.value);
                  onUpdate("variants", updated);
                }} 
                className="bg-transparent font-black text-pink-500 outline-none w-full" 
              />
            </div>
            <div className="w-20">
              <p className="text-[10px] font-black uppercase text-slate-400 mb-1">Stock</p>
              <input 
                type="number" 
                value={v.stock} 
                onChange={(e) => {
                  const updated = [...(cake.variants || [])];
                  updated[idx].stock = Number(e. target.value);
                  onUpdate("variants", updated);
                }} 
                className="bg-transparent font-black text-slate-800 outline-none w-full" 
              />
            </div>
            <button 
              onClick={() => onUpdate("variants", cake.variants?.filter((_, i) => i !== idx))} 
              className="p-2 text-slate-300 hover:text-rose-500 transition-colors"
            >
              <Trash2 size={18} />
            </button>
          </div>
        ))}

        {/* Add New Variant UI */}
        <div className="grid grid-cols-12 gap-3 p-4 border-2 border-dashed border-slate-200 rounded-2xl bg-slate-50/50 mt-4">
          <input 
            placeholder="Variant Name (e.g.  Vanilla)" 
            value={newVariant.name} 
            onChange={e => setNewVariant({...newVariant, name: e.target.value})} 
            className="col-span-5 bg-white border border-slate-200 rounded-xl px-4 py-2 text-xs font-bold outline-none focus:border-indigo-500" 
          />
          <input 
            placeholder="Price" 
            type="number" 
            value={newVariant. price || ""} 
            onChange={e => setNewVariant({...newVariant, price: Number(e. target.value)})} 
            className="col-span-3 bg-white border border-slate-200 rounded-xl px-4 py-2 text-xs font-bold outline-none focus:border-indigo-500" 
          />
          <input 
            placeholder="Stock" 
            type="number" 
            value={newVariant.stock || ""} 
            onChange={e => setNewVariant({... newVariant, stock: Number(e.target.value)})} 
            className="col-span-2 bg-white border border-slate-200 rounded-xl px-4 py-2 text-xs font-bold outline-none focus:border-indigo-500" 
          />
          <button 
            onClick={addVariant} 
            className="col-span-2 bg-indigo-500 text-white rounded-xl font-black text-[10px] uppercase hover:bg-indigo-600 transition-all"
          >
            Add
          </button>
        </div>
      </div>
    </section>
  );
}