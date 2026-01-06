"use client";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Confetti from "react-confetti";

export default function SuccessPage() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  return (
    <main className="min-h-screen bg-[#fffafb] flex items-center justify-center p-6">
      <Confetti width={windowSize.width} height={windowSize.height} recycle={false} numberOfPieces={200} colors={['#ec4899', '#f472b6', '#334155']} />
      
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="max-w-md w-full text-center space-y-8"
      >
        <div className="relative inline-block">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="bg-pink-500 text-white p-6 rounded-[40px] shadow-2xl shadow-pink-200"
          >
            <CheckCircle2 size={64} strokeWidth={3} />
          </motion.div>
        </div>

        <div className="space-y-3">
          <h1 className="text-4xl font-black text-slate-800 italic">Sweet <span className="text-pink-500">Success!</span></h1>
          <p className="text-slate-500 font-medium">Your order has been placed. We're starting to bake your happiness right now!</p>
        </div>

        <div className="bg-white p-6 rounded-[32px] border border-pink-50 shadow-sm">
          <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">Order ID</p>
          <p className="text-lg font-black text-slate-800">#NX-99281</p>
        </div>

        <Link href="/cakes" className="flex items-center justify-center gap-3 bg-slate-900 text-white py-5 rounded-[24px] font-black uppercase tracking-[0.2em] text-[11px] hover:bg-pink-500 transition-all group">
          Continue Shopping <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>
    </main>
  );
}