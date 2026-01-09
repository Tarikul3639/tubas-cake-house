"use client";
import React from "react";
import { motion } from "motion/react";
import { Loader2, CakeSlice, Sparkles } from "lucide-react";

export function LoadingState() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-pink-50/50 rounded-full blur-[120px] -z-10" />
      
      <div className="relative flex flex-col items-center">
        {/* Animated Icon Section */}
        <div className="relative mb-10">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-24 h-24 bg-white rounded-[32px] shadow-[0_20px_50px_rgba(236,72,153,0.15)] border border-pink-50 flex items-center justify-center relative z-10"
          >
            <CakeSlice size={40} className="text-pink-500 stroke-[1.5]" />
          </motion.div>

          {/* Orbiting Loader */}
          <div className="absolute inset-x-0 -inset-y-4 flex items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-32 h-32 border-t-2 border-r-2 border-pink-500/30 border-l-2 border-l-transparent border-b-2 border-b-transparent rounded-full"
            />
          </div>

          {/* Floating Sparkles */}
          <motion.div
            animate={{ 
              y: [0, -10, 0],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -top-4 -right-4 text-amber-400"
          >
            <Sparkles size={20} fill="currentColor" />
          </motion.div>
        </div>

        {/* Textual Feedback */}
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-3">
            <Loader2 className="animate-spin text-slate-900" size={16} />
            <h2 className="text-xl font-black text-slate-900 tracking-tighter italic">
              Tubas <span className="text-pink-600">CORE</span>
            </h2>
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 italic"
          >
            Accessing Tubas Cake Database...
          </motion.p>
        </div>

        {/* Progress bar-like animation */}
        <div className="mt-8 w-48 h-1 bg-slate-100 rounded-full overflow-hidden">
          <motion.div 
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-full bg-linear-to-r from-transparent via-pink-500 to-transparent"
          />
        </div>
      </div>
    </div>
  );
}