"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Lock, ArrowRight, Github } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fffafb] px-4 py-20 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-72 h-72 bg-pink-100 rounded-full blur-[120px] opacity-60" />
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-rose-100 rounded-full blur-[120px] opacity-60" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white/70 backdrop-blur-xl border border-white p-8 rounded-[32px] shadow-[0_20px_50px_rgba(255,182,193,0.2)] z-10"
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-black text-slate-800 tracking-tight italic">Welcome Back</h2>
          <p className="text-slate-500 mt-2 font-medium">Sweet treats are waiting for you!</p>
        </div>

        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-pink-500 transition-colors" size={18} />
              <input 
                type="email" 
                placeholder="hello@example.com"
                className="w-full bg-white border border-slate-100 py-3.5 pl-12 pr-4 rounded-2xl outline-none focus:border-pink-300 focus:ring-4 focus:ring-pink-50 transition-all font-medium text-slate-700"
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center px-1">
              <label className="text-sm font-bold text-slate-700">Password</label>
              <Link href="/forgot-password" className="text-xs font-bold text-pink-500 hover:text-pink-600">Forgot?</Link>
            </div>
            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-pink-500 transition-colors" size={18} />
              <input 
                type="password" 
                placeholder="••••••••"
                className="w-full bg-white border border-slate-100 py-3.5 pl-12 pr-4 rounded-2xl outline-none focus:border-pink-300 focus:ring-4 focus:ring-pink-50 transition-all font-medium text-slate-700"
              />
            </div>
          </div>

          <motion.button 
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold shadow-xl shadow-slate-200 flex items-center justify-center gap-2 mt-2 group"
          >
            Sign In
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </form>

        <p className="text-center mt-8 text-sm font-medium text-slate-500">
          Don't have an account? 
          <Link href="/signup" className="text-pink-500 font-bold ml-1 hover:underline underline-offset-4">Create one</Link>
        </p>
      </motion.div>
    </div>
  );
}