"use client";
import React, { useState } from "react";
import { Search, Crown, ChevronRight, Sparkles } from "lucide-react";

export default function SearchTierSection({
  searchQuery, 
  setSearchQuery,
  numberOfPlatinumCustomers
}: {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  numberOfPlatinumCustomers: number;
}) {

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
      {/* 1. Search Bar Container */}
      <div className="lg:col-span-8 relative group">
        {/* Decorative Glow on Focus */}
        <div className="absolute -inset-1 bg-linear-to-r from-pink-500/20 to-rose-500/20 rounded-[34px] blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-500" />

        <div className="relative flex items-center">
          <div className="absolute left-6 text-slate-400 group-focus-within:text-pink-600 group-focus-within:scale-110 transition-all duration-300">
            <Search size={20} strokeWidth={2.5} />
          </div>

          <input
            type="text"
            placeholder="Search by identity, email or digital signature..."
            className="w-full pl-16 pr-6 py-5 bg-white border border-slate-300 rounded-[30px] text-sm font-medium text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-pink-200 focus:ring-0 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] transition-all duration-300 font-serif"
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
          />

          {/* Search Shortcut Hint */}
          <div className="absolute right-5 hidden sm:flex items-center gap-1 px-2 py-1 bg-slate-50 border border-slate-100 rounded-lg text-[9px] font-black text-slate-400">
            <span className="text-[11px]">⌘</span> K
          </div>
        </div>
      </div>

      {/* 2. Membership Pulse Card */}
      <div className="lg:col-span-4 relative group cursor-pointer">
        {/* Background Layer */}
        <div className="absolute inset-0 bg-linear-to-br from-pink-500 to-rose-600 rounded-[30px] shadow-[0_20px_40px_-10px_rgba(244,63,94,0.3)] transition-transform duration-500 group-hover:scale-[1.02]" />

        {/* Content Layer */}
        <div className="relative p-5 flex items-center justify-between text-white overflow-hidden rounded-[30px]">
          {/* Animated Background Icon */}
          <Sparkles className="absolute -right-4 -top-4 w-24 h-24 opacity-10 rotate-12 group-hover:scale-125 transition-transform duration-700" />

          <div className="flex items-center gap-4">
            <div className="p-3.5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-4xl shadow-inner group-hover:bg-white/20 transition-colors">
              <Crown
                size={22}
                fill="white"
                className="group-hover:rotate-12 transition-transform"
              />
            </div>

            <div>
              <p className="text-[9px] uppercase font-black tracking-[0.2em] text-pink-100 leading-none mb-1.5">
                Membership Pulse
              </p>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-black italic tracking-tighter">
                  {numberOfPlatinumCustomers}
                </span>
                <span className="text-[10px] font-black uppercase opacity-90 tracking-widest italic">
                  Platinum Tiers
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white/10 p-2 rounded-full backdrop-blur-md group-hover:translate-x-1 transition-transform">
            <ChevronRight size={18} strokeWidth={3} />
          </div>
        </div>
      </div>
    </div>
  );
}
