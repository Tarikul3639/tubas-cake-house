"use client";
import React, { useEffect, useState } from "react";
import {
  ArrowLeft, Save, Trash2, Plus, Sparkles,
  Image as ImageIcon, Truck, ShieldCheck,
  X, Star, Loader2, TrendingUp,
  Type, AlignLeft, Layers, CheckCircle2, 
  DollarSign, Package, Tag
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useParams } from "next/navigation";

// --- Types (Using your newly provided ICake types) ---
import { ICake, IVariant, ICategory } from "@/types/cakes"; 
import { initialCakes as cakeProducts } from "@/store/cakes";

const CATEGORIES: ICategory[] = [
  "Birthday", "Wedding", "Anniversary", "Graduation", 
  "Baby Shower", "Holiday", "Custom", "Kids"
];

export default function CakeEditPage() {
  const params = useParams();
  const _id = params._id as string;

  const [cake, setCake] = useState<ICake | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [newVariant, setNewVariant] = useState<IVariant>({ name: "", price: 0, stock: 0 });

  useEffect(() => {
    if (_id) {
      // Assuming cakeProducts matches ICake type
      const foundProduct = cakeProducts.find((p) => p._id === _id);
      if (foundProduct) setCake(foundProduct as ICake);
      setIsLoading(false);
    }
  }, [_id]);

  const handleUpdate = (key: keyof ICake, value: any) => {
    if (!cake) return;
    setCake({ ...cake, [key]: value });
  };

  const addVariant = () => {
    if (!newVariant.name) return;
    const currentVariants = cake?.variants || [];
    handleUpdate("variants", [...currentVariants, newVariant]);
    setNewVariant({ name: "", price: 0, stock: 0 });
  };

  if (isLoading) return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 gap-4">
      <Loader2 className="animate-spin text-pink-500" size={40} />
      <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 italic">Nexion Core Accessing...</p>
    </div>
  );

  if (!cake) return <div className="p-20 text-center font-black">404 | CAKE DATA NOT FOUND</div>;

  return (
    // Overlap Fix: pt-[64px]
    <div className="min-h-screen w-full bg-[#F8FAFC] pb-24 font-sans text-slate-900">
      
      {/* --- STICKY HEADER (Overlap Fix: top-[64px]) --- */}
      <header className="sticky top-17 z-30 bg-white/90 backdrop-blur-xl border-b border-slate-200/60 px-8 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/cakes" className="p-3 bg-slate-100 hover:bg-pink-50 rounded-2xl transition-all group">
              <ArrowLeft size={20} className="text-slate-600 group-hover:-translate-x-1 transition-transform" />
            </Link>
            <div>
              <h1 className="text-xl font-black tracking-tighter uppercase italic text-slate-800 flex items-center gap-3">
                Edit: <span className="text-pink-500">{cake.name}</span>
              </h1>
              <div className="flex gap-3 mt-1 items-center">
                <span className="text-[9px] font-black bg-slate-900 text-white px-2 py-0.5 rounded uppercase tracking-widest">ID: {cake._id}</span>
                <span className="text-[10px] font-bold text-emerald-600 flex items-center gap-1">
                  <TrendingUp size={12}/> {cake.salesCount || 0} Sold
                </span>
                <span className="text-[10px] font-bold text-amber-500 flex items-center gap-1">
                  <Star size={12} fill="currentColor"/> {cake.rating || 0} ({cake.reviewCount || 0})
                </span>
              </div>
            </div>
          </div>
          <button className="flex items-center gap-3 px-8 py-4 bg-slate-950 text-white rounded-2xl font-black text-[11px] uppercase tracking-widest hover:bg-pink-600 transition-all active:scale-95 shadow-xl shadow-pink-100">
            <Save size={16} /> Sync Database
          </button>
        </div>
      </header>

      <main className="w-full mx-auto mt-8 grid grid-cols-12 gap-8">
        
        {/* LEFT COLUMN */}
        <div className="col-span-12 lg:col-span-7 space-y-8">
          
          {/* BASIC INFO */}
          <section className="bg-white p-8 rounded-[40px] shadow-sm border border-slate-100">
            <div className="flex items-center gap-3 mb-8">
               <div className="p-2.5 bg-slate-50 rounded-xl text-slate-500"><Type size={20} /></div>
               <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">General Information</h3>
            </div>
            <div className="grid gap-6">
               <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">Cake Title</label>
                  <input value={cake.name} onChange={(e) => handleUpdate("name", e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 font-bold text-slate-800 focus:border-pink-500 outline-none transition-all" />
               </div>
               <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">URL Slug</label>
                    <input value={cake.slug} onChange={(e) => handleUpdate("slug", e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 font-mono text-xs outline-none" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">Category</label>
                    <select value={cake.category} onChange={(e) => handleUpdate("category", e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 font-bold text-xs outline-none appearance-none">
                       {CATEGORIES.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                    </select>
                  </div>
               </div>
               <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">Short Preview Description</label>
                  <textarea value={cake.shortDescription} onChange={(e) => handleUpdate("shortDescription", e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3 text-sm font-medium h-20 outline-none resize-none" />
               </div>
               <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">Full Narrative Description</label>
                  <textarea value={cake.description} onChange={(e) => handleUpdate("description", e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3 text-sm font-medium h-48 outline-none" />
               </div>
            </div>
          </section>

          {/* PRICING & INVENTORY */}
          <section className="bg-white p-8 rounded-[40px] shadow-sm border border-slate-100">
            <div className="flex items-center gap-3 mb-8">
               <div className="p-2.5 bg-emerald-50 rounded-xl text-emerald-500"><DollarSign size={20} /></div>
               <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Financial & Stock</h3>
            </div>
            <div className="grid grid-cols-3 gap-6">
               <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">Base Price (৳)</label>
                  <input type="number" value={cake.price} onChange={(e) => handleUpdate("price", Number(e.target.value))} className="w-full bg-slate-950 text-white rounded-2xl px-5 py-4 font-black text-xl outline-none" />
               </div>
               <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">Discount (৳/%)</label>
                  <input type="number" value={cake.discount || 0} onChange={(e) => handleUpdate("discount", Number(e.target.value))} className="w-full bg-pink-50 text-pink-600 border border-pink-100 rounded-2xl px-5 py-4 font-black text-xl outline-none" />
               </div>
               <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">Global Stock</label>
                  <input type="number" value={cake.stock} onChange={(e) => handleUpdate("stock", Number(e.target.value))} className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 font-black text-xl outline-none" />
               </div>
            </div>
          </section>

          {/* VARIANTS MATRIX */}
          <section className="bg-white p-8 rounded-[40px] shadow-sm border border-slate-100">
            <div className="flex items-center justify-between mb-8">
               <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-indigo-50 rounded-xl text-indigo-500"><Layers size={20} /></div>
                  <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Flavor / Size Variants</h3>
               </div>
            </div>
            <div className="space-y-3">
               {cake.variants?.map((v, idx) => (
                 <div key={idx} className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 group">
                    <div className="flex-1">
                       <p className="text-[10px] font-black uppercase text-slate-400 mb-1">Variant Name</p>
                       <input value={v.name} onChange={(e) => {
                          const updated = [...(cake.variants || [])];
                          updated[idx].name = e.target.value;
                          handleUpdate("variants", updated);
                       }} className="bg-transparent font-bold text-slate-800 outline-none w-full" />
                    </div>
                    <div className="w-24">
                       <p className="text-[10px] font-black uppercase text-slate-400 mb-1">Price</p>
                       <input type="number" value={v.price} onChange={(e) => {
                          const updated = [...(cake.variants || [])];
                          updated[idx].price = Number(e.target.value);
                          handleUpdate("variants", updated);
                       }} className="bg-transparent font-black text-pink-500 outline-none w-full" />
                    </div>
                    <div className="w-20">
                       <p className="text-[10px] font-black uppercase text-slate-400 mb-1">Stock</p>
                       <input type="number" value={v.stock} onChange={(e) => {
                          const updated = [...(cake.variants || [])];
                          updated[idx].stock = Number(e.target.value);
                          handleUpdate("variants", updated);
                       }} className="bg-transparent font-black text-slate-800 outline-none w-full" />
                    </div>
                    <button onClick={() => handleUpdate("variants", cake.variants?.filter((_, i) => i !== idx))} className="p-2 text-slate-300 hover:text-rose-500 transition-colors">
                       <Trash2 size={18} />
                    </button>
                 </div>
               ))}

               {/* Add New Variant UI */}
               <div className="grid grid-cols-12 gap-3 p-4 border-2 border-dashed border-slate-200 rounded-2xl bg-slate-50/50 mt-4">
                  <input placeholder="Variant Name (e.g. Vanilla)" value={newVariant.name} onChange={e => setNewVariant({...newVariant, name: e.target.value})} className="col-span-5 bg-white border border-slate-200 rounded-xl px-4 py-2 text-xs font-bold outline-none focus:border-indigo-500" />
                  <input placeholder="Price" type="number" value={newVariant.price || ""} onChange={e => setNewVariant({...newVariant, price: Number(e.target.value)})} className="col-span-3 bg-white border border-slate-200 rounded-xl px-4 py-2 text-xs font-bold outline-none focus:border-indigo-500" />
                  <input placeholder="Stock" type="number" value={newVariant.stock || ""} onChange={e => setNewVariant({...newVariant, stock: Number(e.target.value)})} className="col-span-2 bg-white border border-slate-200 rounded-xl px-4 py-2 text-xs font-bold outline-none focus:border-indigo-500" />
                  <button onClick={addVariant} className="col-span-2 bg-indigo-500 text-white rounded-xl font-black text-[10px] uppercase hover:bg-indigo-600 transition-all">Add</button>
               </div>
            </div>
          </section>
        </div>

        {/* RIGHT COLUMN */}
        <div className="col-span-12 lg:col-span-5 space-y-8">
          
          {/* MEDIA MANAGEMENT */}
          <section className="bg-white p-8 rounded-[40px] shadow-sm border border-slate-100">
            <div className="flex items-center gap-3 mb-8">
               <div className="p-2.5 bg-blue-50 rounded-xl text-blue-500"><ImageIcon size={20} /></div>
               <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Product Assets</h3>
            </div>
            <div className="space-y-6">
              <div className="relative group aspect-video rounded-[32px] overflow-hidden bg-slate-100 border border-slate-200">
                 <img src={cake.images[0]} alt="main" className="w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="bg-white px-4 py-2 rounded-xl font-black text-[10px] uppercase tracking-widest">Replace Primary</button>
                 </div>
              </div>
              <div className="grid grid-cols-4 gap-3">
                 {cake.images.slice(1).map((img, i) => (
                    <div key={i} className="aspect-square rounded-2xl overflow-hidden bg-slate-100 relative group">
                       <img src={img} className="w-full h-full object-cover" />
                       <button className="absolute inset-0 bg-rose-500/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-white">
                          <Trash2 size={14}/>
                       </button>
                    </div>
                 ))}
                 <button className="aspect-square rounded-2xl border-2 border-dashed border-slate-200 flex items-center justify-center text-slate-400 hover:text-pink-500 hover:border-pink-200 transition-all">
                    <Plus size={20}/>
                 </button>
              </div>
            </div>
          </section>

          {/* SETTINGS CARD */}
          <section className="bg-slate-900 p-8 rounded-[40px] text-white shadow-2xl shadow-slate-200">
             <div className="space-y-8">
                <div>
                   <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-6 flex items-center gap-2">
                      <ShieldCheck size={14} className="text-pink-500" /> Availability & Visibility
                   </h3>
                   <div className="grid grid-cols-2 gap-4">
                      <button 
                        onClick={() => handleUpdate("isActive", true)}
                        className={cn("py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest border transition-all", 
                        cake.isActive ? "bg-white text-slate-900 border-white shadow-lg" : "bg-white/5 text-white/40 border-white/10")}
                      >
                         Live / Active
                      </button>
                      <button 
                        onClick={() => handleUpdate("isActive", false)}
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
                        onClick={() => handleUpdate("isCustomizable", !cake.isCustomizable)}
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

          {/* QUICK LOGISTICS INFO */}
          <section className="bg-white p-6 rounded-[32px] shadow-sm border border-slate-100 flex items-center justify-between">
             <div className="flex items-center gap-4">
                <div className="p-3 bg-pink-50 rounded-2xl text-pink-500">
                   <Package size={20}/>
                </div>
                <div>
                   <p className="text-[10px] font-black uppercase text-slate-400">Inventory Warning</p>
                   <p className="text-xs font-bold text-slate-700">{cake.stock < 10 ? 'Low Stock Alert' : 'Stock Levels Healthy'}</p>
                </div>
             </div>
             <div className="text-right">
                <p className="text-xl font-black text-slate-900">{cake.stock}</p>
                <p className="text-[9px] font-bold text-slate-400 uppercase">Units</p>
             </div>
          </section>

        </div>
      </main>
    </div>
  );
}