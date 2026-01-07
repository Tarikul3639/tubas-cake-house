"use client";
import React from "react";
import { motion } from "motion/react";
import { 
  Plus, 
  Search, 
  MoreHorizontal, 
  Edit2, 
  Trash2, 
  Filter,
  Cake,
  Layers
} from "lucide-react";

const cakeProducts = [
  { id: 1, name: "Premium Chocolate Truffle", category: "Chocolate", price: "৳1,800", stock: 12, image: "🍫" },
  { id: 2, name: "Classic Red Velvet", category: "Velvet", price: "৳1,500", stock: 5, image: "🍓" },
  { id: 3, name: "Vanilla Cloud Cake", category: "Vanilla", price: "৳1,200", stock: 0, image: "🍦" },
  { id: 4, name: "Blueberry Cheesecake", category: "Cheese", price: "৳2,200", stock: 8, image: "🫐" },
  { id: 5, name: "Mango Delight", category: "Fruit", price: "৳1,400", stock: 15, image: "🥭" },
  { id: 6, name: "Black Forest Special", category: "Chocolate", price: "৳1,600", stock: 3, image: "🍒" },
];

export default function CakesPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 tracking-tight flex items-center gap-2">
            <Cake className="text-pink-600" /> Cake Gallery
          </h2>
          <p className="text-slate-500 text-sm">Manage your bakery inventory and pricing.</p>
        </div>
        <button className="flex items-center gap-2 px-5 py-2.5 bg-pink-600 text-white rounded-xl text-sm font-bold hover:bg-pink-700 transition-all shadow-lg shadow-pink-200">
          <Plus size={18} /> Add New Cake
        </button>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col lg:flex-row gap-4 items-center justify-between bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
        <div className="relative w-full lg:w-96 group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-pink-500 transition-colors" size={18} />
          <input 
            type="text" 
            placeholder="Search cakes by name or category..." 
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all"
          />
        </div>
        <div className="flex items-center gap-3 w-full lg:w-auto">
          <button className="flex-1 lg:flex-none flex items-center justify-center gap-2 px-4 py-2 border border-slate-200 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-50">
            <Filter size={16} /> Category
          </button>
          <button className="flex-1 lg:flex-none flex items-center justify-center gap-2 px-4 py-2 border border-slate-200 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-50">
            <Layers size={16} /> All Stock
          </button>
        </div>
      </div>

      {/* Cake Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {cakeProducts.map((cake, index) => (
          <motion.div
            key={cake.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden hover:shadow-xl hover:shadow-pink-500/5 transition-all group"
          >
            {/* Image Placeholder */}
            <div className="h-48 bg-slate-50 flex items-center justify-center relative overflow-hidden">
               <span className="text-6xl group-hover:scale-125 transition-transform duration-500">{cake.image}</span>
               <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-2 bg-white rounded-full shadow-md text-slate-600 hover:text-blue-600 transition-colors">
                    <Edit2 size={14} />
                  </button>
                  <button className="p-2 bg-white rounded-full shadow-md text-slate-600 hover:text-rose-600 transition-colors">
                    <Trash2 size={14} />
                  </button>
               </div>
               {cake.stock === 0 && (
                 <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px] flex items-center justify-center">
                   <span className="px-3 py-1 bg-rose-600 text-white text-[10px] font-bold rounded-full uppercase tracking-widest">Out of Stock</span>
                 </div>
               )}
            </div>

            {/* Content */}
            <div className="p-5">
              <div className="flex justify-between items-start mb-2">
                <span className="text-[10px] font-bold text-pink-600 uppercase tracking-wider px-2 py-0.5 bg-pink-50 rounded">
                  {cake.category}
                </span>
                <span className={`text-[11px] font-bold ${cake.stock > 0 ? 'text-emerald-600' : 'text-rose-600'}`}>
                  {cake.stock} in stock
                </span>
              </div>
              <h4 className="font-bold text-slate-800 group-hover:text-pink-600 transition-colors truncate">
                {cake.name}
              </h4>
              <div className="mt-4 flex items-center justify-between">
                <p className="text-lg font-black text-slate-900">{cake.price}</p>
                <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors text-slate-400">
                  <MoreHorizontal size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}