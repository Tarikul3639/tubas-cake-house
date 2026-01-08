"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Package,
  Users,
  DollarSign,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  Plus,
} from "lucide-react";
import { cn } from "@/lib/utils";

// Types & Mock Data
import { ordersMockData } from "@/store/order";

// Components
import { DesktopRow } from "./_components/DesktopRow";
import { MobileCard } from "./_components/MobileCard";

// --- Main Dashboard ---
const stats = [
  { title: "Total Revenue", value: "৳45,200", trend: "+12.5%", isPositive: true, icon: DollarSign, color: "bg-emerald-500" },
  { title: "Total Orders", value: "128", trend: "+8.2%", isPositive: true, icon: Package, color: "bg-pink-500" },
  { title: "New Customers", value: "42", trend: "-3.1%", isPositive: false, icon: Users, color: "bg-blue-500" },
  { title: "Pending Orders", value: "14", trend: "Live", isPositive: true, icon: Clock, color: "bg-amber-500" },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-8 pb-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h2 className="text-2xl font-black text-slate-900 italic tracking-tighter uppercase">Overview</h2>
          <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-1">Nexion Analytics Engine</p>
        </div>
        <div className="flex gap-3 w-full md:w-auto">
          <button className="flex-1 md:flex-none px-5 py-2.5 bg-white border border-slate-200 rounded-2xl text-[11px] font-black uppercase tracking-widest text-slate-600 hover:bg-slate-50 transition-all">Reports</button>
          <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-5 py-2.5 bg-slate-900 text-white rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-pink-600 transition-all shadow-xl shadow-slate-200">
            <Plus size={14} /> Add Product
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item, index) => (
          <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="p-6 bg-white rounded-[32px] border border-slate-100 shadow-sm group">
            <div className="flex justify-between items-start mb-4">
              <div className={cn("p-3 rounded-2xl text-white shadow-lg shadow-inherit transition-transform group-hover:scale-110", item.color)}>
                <item.icon size={20} />
              </div>
              <div className={cn("flex items-center gap-1 text-[10px] font-black italic tracking-tighter", item.isPositive ? "text-emerald-600" : "text-rose-600")}>
                {item.trend} {item.isPositive ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
              </div>
            </div>
            <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em]">{item.title}</p>
            <h3 className="text-2xl font-black text-slate-900 mt-1 italic tracking-tighter">{item.value}</h3>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Orders Section */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex justify-between items-center px-2">
            <div>
              <h3 className="font-black text-slate-900 italic uppercase tracking-tighter">Recent Orders</h3>
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Real-time update</p>
            </div>
            <Link href="/orders" className="text-pink-600 text-[10px] font-black uppercase italic hover:underline tracking-widest">Explore All</Link>
          </div>

          {/* Desktop Table View */}
          <div className="hidden md:block bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-slate-50/50 text-slate-400 text-[9px] font-black uppercase tracking-[0.2em]">
                <tr>
                  <th className="px-6 py-4">ID</th>
                  <th className="px-6 py-4">Client</th>
                  <th className="px-6 py-4">Ordered At</th>
                  <th className="px-6 py-4">Amount</th>
                  <th className="px-6 py-4">Payment</th>
                  <th className="px-6 py-4 text-center">Status</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {ordersMockData.map((order, i) => (
                  <DesktopRow key={order._id} order={order} index={i} />
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className="md:hidden space-y-4">
            {ordersMockData.map((order, i) => (
              <MobileCard key={order._id} order={order} index={i} />
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm p-6">
            <h3 className="font-black text-slate-900 mb-6 italic uppercase tracking-tighter text-center border-b border-slate-50 pb-4">Hot Items</h3>
            <div className="space-y-5">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="flex items-center gap-4 group cursor-pointer">
                   <div className="w-12 h-12 bg-pink-50 rounded-2xl flex items-center justify-center text-lg shadow-sm group-hover:scale-110 transition-transform">{i === 0 ? "🥇" : i === 1 ? "🥈" : "🥉"}</div>
                   <div className="flex-1">
                     <p className="text-xs font-black text-slate-800 italic uppercase leading-none">Choco Fudge</p>
                     <p className="text-[9px] font-bold text-slate-400 mt-1 uppercase">45 Orders</p>
                   </div>
                   <p className="text-xs font-black text-pink-600 italic">৳1.5k</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}