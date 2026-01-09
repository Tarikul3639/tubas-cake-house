"use client";
import React from "react";
import { ArrowLeft, Save, Star, TrendingUp, PlusCircle, Database } from "lucide-react";
import Link from "next/link";
import { ICake } from "@/types/cakes";

interface IHeader {
  cake: ICake;
  onSave?: () => void;
  isEditMode: boolean;
}

export default function Header({ cake, onSave, isEditMode }: IHeader) {
  return (
    <header className="bg-white/90 backdrop-blur-xl px-8 py-4">
      <div className="mx-auto flex items-center justify-between">
        <div className="flex items-center gap-6">
          {/* Back Button */}
          <Link href="/cakes" className="p-3 bg-slate-100 hover:bg-pink-50 rounded-2xl transition-all group">
            <ArrowLeft size={20} className="text-slate-600 group-hover:-translate-x-1 transition-transform" />
          </Link>

          <div>
            <div className="flex items-center gap-3">
              {/* Dynamic Title based on mode */}
              <h1 className="text-xl font-black tracking-tighter uppercase italic text-slate-800 flex items-center gap-2">
                {isEditMode ? (
                  <>
                    Update: <span className="text-pink-500">{cake.name || "Untitled Cake"}</span>
                  </>
                ) : (
                  <>
                    Create <span className="text-pink-500">New Cake</span>
                  </>
                )}
              </h1>
              
              {!isEditMode && (
                <span className="bg-pink-100 text-pink-600 text-[8px] font-black px-2 py-0.5 rounded-full uppercase tracking-tighter">
                  New Draft
                </span>
              )}
            </div>

            {/* Metadata Section - Only fully visible in Edit Mode */}
            <div className="flex gap-4 mt-1.5 items-center">
              {isEditMode ? (
                <>
                  <span className="text-[9px] font-black bg-slate-900 text-white px-2 py-0.5 rounded uppercase tracking-widest">
                    ID: {cake._id?.slice(-8)}
                  </span>
                  <div className="flex items-center gap-3 border-l border-slate-200 pl-4">
                    <span className="text-[10px] font-bold text-emerald-600 flex items-center gap-1.5">
                      <TrendingUp size={12} /> {cake.salesCount || 0} Sold
                    </span>
                    <span className="text-[10px] font-bold text-amber-500 flex items-center gap-1.5">
                      <Star size={12} fill="currentColor" /> {cake.rating || 0}
                    </span>
                  </div>
                </>
              ) : (
                <span className="text-[10px] font-bold text-slate-400 italic">
                  Enter details to initialize product core...
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Action Button */}
        <button 
          onClick={onSave}
          className="group flex items-center gap-3 px-8 py-4 bg-slate-950 text-white rounded-2xl font-black text-[11px] uppercase tracking-widest hover:bg-pink-600 transition-all active:scale-95 shadow-xl shadow-pink-100/20"
        >
          {isEditMode ? (
            <>
              <Database size={16} className="group-hover:animate-pulse" /> 
              Sync Database
            </>
          ) : (
            <>
              <PlusCircle size={16} className="group-hover:rotate-90 transition-transform" /> 
              Publish Product
            </>
          )}
        </button>
      </div>
    </header>
  );
}