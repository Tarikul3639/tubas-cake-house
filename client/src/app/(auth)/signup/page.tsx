"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { User, Mail, Lock, ArrowRight } from "lucide-react";

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fffafb] px-4 py-20 relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-pink-500/20 rounded-full blur-[150px]" />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md bg-white/80 backdrop-blur-xl border border-white p-8 rounded-[32px] shadow-[0_30px_60px_rgba(0,0,0,0.05)] z-10"
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-black text-slate-800 tracking-tight italic">Join TC House</h2>
          <p className="text-slate-500 mt-2 font-medium">Start your sweet journey with us!</p>
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-1.5">
            <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Full Name</label>
            <div className="relative group">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-pink-500 transition-colors" size={18} />
              <input type="text" placeholder="Tuba Akter" className="w-full bg-white/50 border border-slate-100 py-3.5 pl-12 pr-4 rounded-2xl outline-none focus:border-pink-300 focus:ring-4 focus:ring-pink-50 transition-all font-medium" />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Email</label>
            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-pink-500 transition-colors" size={18} />
              <input type="email" placeholder="tuba@example.com" className="w-full bg-white/50 border border-slate-100 py-3.5 pl-12 pr-4 rounded-2xl outline-none focus:border-pink-300 focus:ring-4 focus:ring-pink-50 transition-all font-medium" />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Password</label>
            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-pink-500 transition-colors" size={18} />
              <input type="password" placeholder="Create a strong password" className="w-full bg-white/50 border border-slate-100 py-3.5 pl-12 pr-4 rounded-2xl outline-none focus:border-pink-300 focus:ring-4 focus:ring-pink-50 transition-all font-medium" />
            </div>
          </div>

          <motion.button 
            whileHover={{ y: -2 }}
            className="w-full py-4 bg-linear-to-r from-pink-600 to-rose-500 text-white rounded-2xl font-bold shadow-xl shadow-pink-200 flex items-center justify-center gap-2 mt-4 group"
          >
            Create Account
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </form>

        <p className="text-center mt-8 text-sm font-medium text-slate-500">
          Already a member? 
          <Link href="/login" className="text-pink-600 font-bold ml-1 hover:underline">Sign In</Link>
        </p>
      </motion.div>
    </div>
  );
}