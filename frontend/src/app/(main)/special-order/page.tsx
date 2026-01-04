"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { 
  Calendar, 
  ChevronRight, 
  MessageSquare, 
  Layers, 
  Utensils, 
  Image as ImageIcon,
  Send
} from "lucide-react";

export default function SpecialOrderPage() {
  const [step, setStep] = useState(1);

  return (
    <main className="min-h-screen bg-[#fffafb] pt-28 pb-20">
      <div className="container mx-auto px-6 max-w-5xl">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <motion.span 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            className="text-pink-500 font-black uppercase tracking-[0.3em] text-[10px]"
          >
            Custom Creations
          </motion.span>
          <h1 className="text-4xl md:text-6xl font-black text-slate-800 italic mt-2">
            Design Your <span className="text-pink-500">Dream Cake</span>
          </h1>
          <p className="text-slate-500 mt-4 font-medium">আপনার জীবনের বিশেষ মুহূর্তের জন্য তৈরি হবে বিশেষ কেক।</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Left: Info & Requirements */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-8 rounded-[40px] border border-pink-50 shadow-sm">
              <h3 className="font-black text-slate-800 text-xl mb-4">How it works?</h3>
              <ul className="space-y-6">
                {[
                  { icon: <Layers size={18}/>, title: "Choose Specs", desc: "Size, flavor & tiers" },
                  { icon: <MessageSquare size={18}/>, title: "Add Details", desc: "Message & design notes" },
                  { icon: <Calendar size={18}/>, title: "Pickup Date", desc: "Select your timeline" },
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-2xl bg-pink-50 flex items-center justify-center text-pink-500 shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-black text-slate-800 text-sm">{item.title}</h4>
                      <p className="text-xs text-slate-500 font-medium">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-900 p-8 rounded-[40px] text-white">
              <h3 className="font-black text-lg mb-2 italic">Need Help?</h3>
              <p className="text-slate-400 text-sm mb-4">Our master baker is available for consultation.</p>
              <button className="w-full py-3 bg-pink-500 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-pink-600 transition-all">
                Call Now
              </button>
            </div>
          </div>

          {/* Right: The Order Form */}
          <div className="lg:col-span-2">
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="bg-white p-8 md:p-12 rounded-[40px] border border-pink-50 shadow-[0_30px_60px_rgba(255,182,193,0.1)]"
            >
              <form className="space-y-8">
                
                {/* 1. Basic Configuration */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Flavor</label>
                    <div className="relative">
                      <Utensils className="absolute left-4 top-1/2 -translate-y-1/2 text-pink-400" size={18} />
                      <select className="w-full pl-12 pr-4 py-4 bg-pink-50/30 border border-pink-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-200 font-bold text-slate-700 appearance-none">
                        <option>Premium Chocolate</option>
                        <option>Vanilla Bean</option>
                        <option>Red Velvet</option>
                        <option>Lotus Biscoff</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Size (Weight)</label>
                    <select className="w-full px-6 py-4 bg-pink-50/30 border border-pink-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-200 font-bold text-slate-700 appearance-none">
                      <option>1 KG (Standard)</option>
                      <option>2 KG (Medium)</option>
                      <option>5 KG (Large / Party)</option>
                      <option>Custom Tiered Cake</option>
                    </select>
                  </div>
                </div>

                {/* 2. Message on Cake */}
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Message on Cake</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Happy Birthday Nexion"
                    className="w-full px-6 py-4 bg-pink-50/30 border border-pink-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-200 font-bold text-slate-800"
                  />
                </div>

                {/* 3. Reference Image Upload */}
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Reference Image (Optional)</label>
                  <div className="border-2 border-dashed border-pink-100 rounded-[32px] p-10 flex flex-col items-center justify-center bg-pink-50/10 hover:bg-pink-50/30 transition-all cursor-pointer group">
                    <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-pink-400 group-hover:scale-110 transition-transform">
                      <ImageIcon size={20} />
                    </div>
                    <p className="mt-4 text-sm font-bold text-slate-500">Click to upload or drag image</p>
                    <p className="text-[10px] text-slate-400 mt-1 uppercase">PNG, JPG up to 5MB</p>
                  </div>
                </div>

                {/* 4. Special Instructions */}
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Special Instructions</label>
                  <textarea 
                    rows={4}
                    placeholder="Describe your vision (Colors, specific decorations, etc.)"
                    className="w-full px-6 py-4 bg-pink-50/30 border border-pink-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-200 font-bold text-slate-800"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-5 bg-pink-500 text-white rounded-[24px] font-black uppercase tracking-[0.2em] shadow-lg shadow-pink-200 flex items-center justify-center gap-3"
                >
                  <Send size={18} />
                  Submit Special Order
                </motion.button>
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </main>
  );
}