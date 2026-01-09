"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  Search, 
  UserPlus, 
  Mail, 
  Phone, 
  ShoppingBag, 
  Crown, 
  MoreVertical,
  ChevronRight,
  MapPin,
  Calendar,
  Zap,
  Star,
  Coins
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { ICustomer } from "@/types/customer";
import { customers } from "@/store/customers";

export default function CustomersPage() {
  return (
    <div className="space-y-8 pb-12">
      {/* 1. Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl font-black text-slate-900 italic tracking-tighter uppercase flex items-center gap-3">
            <div className="p-2.5 bg-slate-950 text-white rounded-2xl shadow-xl shadow-slate-200">
              <Zap size={24} fill="currentColor" />
            </div>
            Customer <span className="text-pink-600">Base</span>
          </h2>
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em] mt-3 flex items-center gap-2 italic">
            <span className="w-8 h-px bg-slate-200" /> Nexion Relationship Manager
          </p>
        </div>
        <button className="flex items-center justify-center gap-3 px-8 py-4 bg-slate-950 text-white rounded-[24px] text-[11px] font-black uppercase tracking-widest hover:bg-pink-600 transition-all shadow-xl shadow-slate-200 active:scale-95 group">
          <UserPlus size={18} className="group-hover:rotate-12 transition-transform" /> 
          Register New Customer
        </button>
      </div>

      {/* 2. Search & Tier Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 relative group">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-pink-500 transition-colors" size={20} />
          <input 
            type="text" 
            placeholder="Search by identity, email or digital signature..." 
            className="w-full pl-14 pr-6 py-5 bg-white border border-slate-100 rounded-[30px] text-sm font-bold focus:outline-none focus:ring-4 focus:ring-pink-500/5 focus:border-pink-200 transition-all shadow-sm placeholder:text-slate-300"
          />
        </div>
        <div className="lg:col-span-4 bg-linear-to-br from-pink-500 to-rose-600 rounded-[30px] p-5 flex items-center justify-between text-white shadow-lg shadow-pink-100">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white/20 backdrop-blur-md rounded-2xl"><Crown size={24} /></div>
            <div>
              <p className="text-[9px] uppercase font-black tracking-widest opacity-80 leading-none">Membership Pulse</p>
              <p className="text-xl font-black italic tracking-tighter mt-1">12 Platinum Tiers</p>
            </div>
          </div>
          <ChevronRight className="opacity-50" />
        </div>
      </div>

      {/* 3. Main Data Table */}
      <div className="bg-white rounded-[40px] border border-slate-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto no-scrollbar">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 text-slate-400 text-[9px] font-black uppercase tracking-[0.2em] border-b border-slate-50">
                <th className="px-10 py-7">Customer Identity</th>
                <th className="px-6 py-7">Loyalty & Status</th>
                <th className="px-6 py-7">Financial History</th>
                <th className="px-10 py-7 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {customers.map((user: ICustomer, index: number) => (
                <motion.tr 
                  key={user._id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="group hover:bg-pink-50/20 transition-all duration-300 cursor-pointer"
                >
                  {/* Identity Column */}
                  <td className="px-10 py-6">
                    <div className="flex items-center gap-5">
                      <div className="relative">
                        <Avatar className="h-14 w-14 rounded-[22px] border-2 border-white shadow-md group-hover:scale-105 transition-transform">
                          <AvatarImage src={user.profilePic} className="object-cover" />
                          <AvatarFallback className="bg-pink-100 text-pink-600 font-black text-xl italic">{user.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        {user.isActive && <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full" />}
                      </div>
                      <div>
                        <p className="font-black text-slate-800 text-base tracking-tight leading-none">{user.name}</p>
                        <div className="flex items-center gap-3 mt-2 text-slate-400">
                           <span className="flex items-center gap-1.5 text-[10px] font-bold"><Mail size={12} className="text-pink-400" /> {user.email}</span>
                           <span className="flex items-center gap-1.5 text-[10px] font-bold"><Phone size={12} /> {user.phone || 'N/A'}</span>
                        </div>
                      </div>
                    </div>
                  </td>

                  {/* Loyalty & Status Column (Merged) */}
                  <td className="px-6 py-6">
                    <div className="flex flex-col gap-2">
                      <div className={cn(
                        "inline-flex items-center self-start gap-2 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest shadow-sm border",
                        user.membershipTier === 'Platinum' ? "bg-slate-900 text-white border-slate-900" :
                        user.membershipTier === 'Gold' ? "bg-amber-50 text-amber-600 border-amber-100" :
                        "bg-slate-50 text-slate-500 border-slate-200"
                      )}>
                        <Star size={10} fill={user.membershipTier === 'Platinum' ? "white" : "currentColor"} />
                        {user.membershipTier || 'Silver'}
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-500">
                        <Coins size={12} className="text-amber-500" />
                        <span className="text-[10px] font-black italic tracking-tighter">{user.loyaltyPoints || 0} POINTS</span>
                      </div>
                    </div>
                  </td>

                  {/* Financial History Column (Merged 3 Fields) */}
                  <td className="px-6 py-6">
                    <div className="space-y-1.5">
                      <div className="flex items-baseline gap-2">
                        <span className="text-base font-black text-slate-950 italic">৳{(user.totalSpent || 0).toLocaleString()}</span>
                        <span className="text-[8px] font-black text-slate-400 uppercase tracking-tighter">Spent</span>
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <span className="flex items-center gap-1.5 text-[10px] font-bold text-slate-600 uppercase tracking-tighter">
                          <ShoppingBag size={11} className="text-pink-500" /> {user.totalOrders || 0} Orders
                        </span>
                        <span className="flex items-center gap-1.5 text-[9px] font-bold text-slate-400">
                          <Calendar size={11} /> 
                          Last: {user.lastOrderDate ? new Date(user.lastOrderDate).toLocaleDateString() : 'Never'}
                        </span>
                      </div>
                    </div>
                  </td>

                  {/* Actions */}
                  <td className="px-10 py-6 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-3 bg-white border border-slate-100 text-slate-400 rounded-2xl hover:bg-slate-900 hover:text-white transition-all shadow-sm">
                        <MoreVertical size={16} />
                      </button>
                      <button className="p-3 bg-pink-50 text-pink-600 rounded-2xl hover:bg-pink-600 hover:text-white transition-all shadow-sm shadow-pink-50">
                        <ChevronRight size={16} />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 4. Footer */}
        <div className="bg-slate-50/50 px-10 py-6 border-t border-slate-50 flex items-center justify-between">
           <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Showing {customers.length} Accounts • Data Synced</p>
           <div className="flex gap-2">
              <button className="px-5 py-2.5 bg-white border border-slate-200 rounded-xl text-[10px] font-black uppercase hover:bg-slate-100 transition-all">Prev</button>
              <button className="px-5 py-2.5 bg-slate-950 text-white rounded-xl text-[10px] font-black uppercase shadow-lg shadow-slate-200">Next</button>
           </div>
        </div>
      </div>
    </div>
  );
}