"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CakeSlice, ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-6 relative overflow-hidden">

      {/* Soft Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#ffe4e6,transparent_60%)]" />

      <div className="relative z-10 w-full max-w-xl text-center">

        {/* Icon */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-6 w-24 h-24 rounded-3xl bg-linear-to-br from-pink-500 to-rose-600 flex items-center justify-center shadow-xl shadow-pink-200"
        >
          <CakeSlice size={42} strokeWidth={1.6} className="text-white" />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2">
            Page Not Found
          </h1>

          <p className="text-slate-500 text-sm leading-relaxed max-w-md mx-auto">
            The page you’re looking for was removed, renamed, or never existed.
          </p>
        </motion.div>

        {/* Unique Element – Path Indicator */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-10 h-1 bg-linear-to-r from-pink-500 via-rose-400 to-transparent rounded-full"
        />

        <p className="mt-3 text-xs text-slate-400 uppercase tracking-widest">
          Lost in navigation
        </p>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
        >
          <Link href="/">
            <button className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-slate-900 text-white text-xs font-semibold tracking-wide hover:bg-pink-600 transition active:scale-95 translate-all duration-300 cursor-pointer">
              <Home size={15} />
              Dashboard
            </button>
          </Link>

          <button
            onClick={() => window.history.back()}
            className="group inline-flex items-center gap-2 px-7 py-3 rounded-xl border border-slate-200 hover:border-pink-200 bg-white text-slate-600 text-xs font-semibold hover:bg-pink-50 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
          >
            <ArrowLeft size={15} className="group-hover:text-pink-600 transform group-hover:-translate-x-0.5 transition-all duration-300" />
            Go Back
          </button>
        </motion.div>

        {/* Footer */}
        <p className="mt-16 text-[10px] text-slate-400 tracking-[0.35em] font-semibold uppercase">
          Tuba’s Bakery • Admin Panel
        </p>
      </div>
    </div>
  );
}
