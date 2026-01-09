"use client";
import React from "react";
import { motion } from "motion/react";
import { 
  FileWarning, 
  ArrowLeft, 
  Search, 
  RefreshCcw, 
  CakeSlice 
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CakeNotFound() {
  return (
    <div className="min-h-[70vh] w-full flex items-center justify-center p-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full text-center"
      >
        {/* 🎨 Icon Section with Animated Background */}
        <div className="relative mb-8 flex justify-center">
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0] 
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute inset-0 bg-pink-100/50 blur-3xl rounded-full"
          />
          <div className="relative bg-white p-8 rounded-[40px] border border-slate-100 shadow-2xl shadow-pink-100/50">
            <CakeSlice size={64} className="text-pink-500 stroke-[1.5]" />
            <motion.div 
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              className="absolute -top-2 -right-2 bg-rose-500 text-white p-2 rounded-2xl shadow-lg"
            >
              <FileWarning size={20} />
            </motion.div>
          </div>
        </div>

        {/* 📝 Text Section */}
        <h1 className="text-4xl font-black text-slate-900 tracking-tighter mb-4 italic">
          CAKE <span className="text-pink-600">NOT FOUND</span>
        </h1>
        <p className="text-slate-500 font-medium text-sm leading-relaxed mb-10 px-6">
          দুঃখিত! আপনি যে কেকটি খুঁজছেন তা আমাদের ডেটাবেজে খুঁজে পাওয়া যায়নি। সম্ভবত এটি ডিলিট করা হয়েছে অথবা আইডিটি ভুল।
        </p>

        {/* 🕹️ Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/admin/inventory" className="w-full sm:w-auto">
            <Button 
              variant="default" 
              className="w-full sm:w-auto bg-slate-900 hover:bg-pink-600 text-white rounded-2xl px-8 py-6 font-bold transition-all gap-2 group"
            >
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              Back to Inventory
            </Button>
          </Link>
          
          <Button 
            variant="outline"
            onClick={() => window.location.reload()}
            className="w-full sm:w-auto border-slate-200 text-slate-600 rounded-2xl px-8 py-6 font-bold hover:bg-slate-50 transition-all gap-2"
          >
            <RefreshCcw size={18} />
            Try Refreshing
          </Button>
        </div>

        {/* 🔍 Suggestion Helper */}
        <div className="mt-12 pt-8 border-t border-slate-100">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] flex items-center justify-center gap-2">
            <Search size={12} />
            Need help? Contact support or check ID
          </p>
        </div>
      </motion.div>
    </div>
  );
}