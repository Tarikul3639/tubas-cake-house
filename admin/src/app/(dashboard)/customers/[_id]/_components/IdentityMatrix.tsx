"use client";
import React from "react";
import { Camera, Upload, User, Mail, Phone, RefreshCw } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ICustomer } from "@/types/customer";

interface IdentityMatrixProps {
  customer: ICustomer;
  onChange: (field: keyof ICustomer, value: any) => void;
}

export default function IdentityMatrix({ customer, onChange }: IdentityMatrixProps) {
  return (
    <div className="bg-white rounded-[28px] border border-slate-100 p-8 shadow-sm relative overflow-hidden">

      {/* Header */}
      <h3 className="text-[11px] font-black uppercase tracking-[0.35em] text-pink-500 mb-8 flex items-center gap-3">
        <span className="p-2 bg-pink-100 rounded-lg text-pink-600">
          <User size={14} />
        </span>
        Identity Matrix
      </h3>

      {/* --- PROFILE STRIP --- */}
      <div className="flex flex-col md:flex-row items-center gap-8 p-6 rounded-2xl bg-slate-50 border border-slate-100 mb-10">

        {/* Avatar */}
        <div className="relative group/avatar shrink-0">
          <Avatar className="h-32 w-32 rounded-2xl border-[5px] border-white shadow-sm bg-white">
            <AvatarImage src={customer.profilePic} className="object-cover" />
            <AvatarFallback className="rounded-none bg-slate-100 text-slate-400 font-black text-4xl">
              {customer.name?.charAt(0) || "?"}
            </AvatarFallback>
          </Avatar>

          <label className="absolute inset-0 rounded-2xl bg-slate-900/60 text-white opacity-0 group-hover/avatar:opacity-100 transition flex flex-col items-center justify-center cursor-pointer">
            <Camera size={22} />
            <span className="text-[9px] mt-1 font-bold uppercase tracking-widest">
              Change
            </span>
            <input type="file" className="hidden" />
          </label>
        </div>

        {/* Profile URL + Upload */}
        <div className="flex-1 w-full space-y-3">
          <div className="relative">
            <input
              type="text"
              value={customer.profilePic || ""}
              onChange={(e) => onChange("profilePic", e.target.value)}
              placeholder="Profile image URL"
              className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 pr-8 text-xs font-semibold focus:outline-none focus:ring-4 focus:ring-pink-500/10 focus:border-pink-300"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-pink-500">
              <RefreshCw size={13} />
            </button>
          </div>

          <button className="inline-flex items-center gap-2 px-4 py-2.5 bg-pink-100 text-pink-500 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-pink-600 hover:text-white transition-all duration-300 active:scale-95">
            <Upload size={12} />
            Upload Image
          </button>
        </div>
      </div>

      {/* --- FORM GRID --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Full Name */}
        <div className="md:col-span-2 space-y-2">
          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            Full Name
          </label>
          <input
            type="text"
            value={customer.name}
            onChange={(e) => onChange("name", e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-sm font-bold text-slate-700 focus:outline-none focus:ring-4 focus:ring-pink-500/10 focus:border-pink-300"
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            Email
          </label>
          <div className="relative">
            <Mail size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" />
            <input
              type="email"
              value={customer.email}
              disabled
              className="w-full bg-slate-100 border border-slate-200 rounded-2xl pl-11 pr-4 py-4 text-xs font-bold text-slate-400 cursor-not-allowed focus:outline-none focus:ring-4 focus:ring-pink-500/10 focus:border-pink-300"
            />
          </div>
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            Phone
          </label>
          <div className="relative">
            <Phone size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" />
            <input
              type="text"
              value={customer.phone}
              onChange={(e) => onChange("phone", e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-2xl pl-11 pr-4 py-4 text-xs font-bold text-slate-700 focus:outline-none focus:ring-4 focus:ring-pink-500/10 focus:border-pink-300"
            />
          </div>
        </div>

      </div>
    </div>
  );
}
