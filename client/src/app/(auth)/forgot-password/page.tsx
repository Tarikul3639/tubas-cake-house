"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, ArrowLeft, Send, Sparkles } from "lucide-react";
import { useState } from "react";

export default function ForgotPasswordPage() {
  const [isSent, setIsSent] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fffafb] px-4 py-20 relative overflow-hidden">
      {/* Decorative Blur Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-rose-100/40 rounded-full blur-[120px] -z-10" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white/80 backdrop-blur-2xl border border-white p-8 rounded-[32px] shadow-[0_30px_70px_rgba(236,72,153,0.1)] z-10"
      >
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-pink-50 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-pink-100">
            <Sparkles className="text-pink-500" size={32} />
          </div>
          <h2 className="text-3xl font-black text-slate-800 tracking-tight italic">Forgot Password?</h2>
          <p className="text-slate-500 mt-2 font-medium">
            {isSent 
              ? "Check your inbox for the magic link!" 
              : "No worries! Enter your email and we'll send you a reset link."}
          </p>
        </div>

        {!isSent ? (
          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setIsSent(true); }}>
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Email Address</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-pink-500 transition-colors" size={18} />
                <input 
                  type="email" 
                  required
                  placeholder="tuba@example.com"
                  className="w-full bg-white border border-slate-100 py-4 pl-12 pr-4 rounded-2xl outline-none focus:border-pink-300 focus:ring-4 focus:ring-pink-50 transition-all font-medium text-slate-700"
                />
              </div>
            </div>

            <motion.button 
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold shadow-xl shadow-slate-200 flex items-center justify-center gap-2 group transition-all"
            >
              Send Reset Link
              <Send size={18} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </form>
        ) : (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center p-6 bg-pink-50/50 rounded-2xl border border-pink-100"
          >
            <p className="text-sm text-pink-700 font-semibold">
              If an account exists for that email, you will receive a password reset link shortly.
            </p>
            <button 
              onClick={() => setIsSent(false)}
              className="mt-4 text-xs font-bold text-pink-500 hover:underline"
            >
              Didn't get the email? Try again
            </button>
          </motion.div>
        )}

        <div className="mt-8 pt-6 border-t border-slate-50">
          <Link 
            href="/login" 
            className="flex items-center justify-center gap-2 text-sm font-bold text-slate-500 hover:text-pink-500 transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Sign In
          </Link>
        </div>
      </motion.div>
    </div>
  );
}