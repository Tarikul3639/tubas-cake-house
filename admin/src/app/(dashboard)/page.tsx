"use client";
import React from "react";
import { motion } from "motion/react";
import { 
  TrendingUp, 
  Package, 
  Users, 
  DollarSign, 
  ArrowUpRight, 
  ArrowDownRight,
  Clock
} from "lucide-react";

// Mock data for Stats
const stats = [
  { 
    title: "Total Revenue", 
    value: "৳45,200", 
    trend: "+12.5%", 
    isPositive: true, 
    icon: DollarSign, 
    color: "bg-emerald-500" 
  },
  { 
    title: "Total Orders", 
    value: "128", 
    trend: "+8.2%", 
    isPositive: true, 
    icon: Package, 
    color: "bg-pink-500" 
  },
  { 
    title: "New Customers", 
    value: "42", 
    trend: "-3.1%", 
    isPositive: false, 
    icon: Users, 
    color: "bg-blue-500" 
  },
  { 
    title: "Pending Orders", 
    value: "14", 
    trend: "Live", 
    isPositive: true, 
    icon: Clock, 
    color: "bg-amber-500" 
  },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Overview</h2>
          <p className="text-slate-500 text-sm">Welcome back! Here's what's happening today.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 transition-all">
            Download Report
          </button>
          <button className="px-4 py-2 bg-pink-600 text-white rounded-lg text-sm font-medium hover:bg-pink-700 transition-all shadow-lg shadow-pink-200">
            + Add New Cake
          </button>
        </div>
      </div>

      {/* Stats Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 rounded-xl ${item.color} text-white`}>
                <item.icon size={24} />
              </div>
              <div className={`flex items-center gap-1 text-xs font-bold ${item.isPositive ? 'text-emerald-600' : 'text-rose-600'}`}>
                {item.trend}
                {item.isPositive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
              </div>
            </div>
            <div>
              <p className="text-sm text-slate-500 font-medium">{item.title}</p>
              <h3 className="text-2xl font-bold text-slate-800 mt-1">{item.value}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Orders Table */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-50 flex justify-between items-center">
            <h3 className="font-bold text-slate-800">Recent Orders</h3>
            <button className="text-pink-600 text-sm font-semibold hover:underline">View All</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider">
                <tr>
                  <th className="px-6 py-4 font-semibold">Order ID</th>
                  <th className="px-6 py-4 font-semibold">Customer</th>
                  <th className="px-6 py-4 font-semibold">Cake Name</th>
                  <th className="px-6 py-4 font-semibold">Status</th>
                  <th className="px-6 py-4 font-semibold">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {[1, 2, 3, 4, 5].map((_, i) => (
                  <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-slate-700">#ORD-00{i+1}</td>
                    <td className="px-6 py-4 text-sm text-slate-600">Rahim Ahmed</td>
                    <td className="px-6 py-4 text-sm text-slate-600">Red Velvet Cake</td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-[10px] font-bold uppercase">
                        Pending
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm font-bold text-slate-800">৳1,200</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Popular Cakes / Quick Actions */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
            <h3 className="font-bold text-slate-800 mb-4 text-center underline decoration-pink-200">Popular Cakes</h3>
            <div className="space-y-4">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="flex items-center gap-4 p-2 hover:bg-slate-50 rounded-xl transition-all cursor-pointer">
                   <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center text-pink-600 font-bold">
                     {i === 0 ? "🥇" : i === 1 ? "🥈" : "🥉"}
                   </div>
                   <div className="flex-1">
                     <p className="text-sm font-bold text-slate-700 leading-none">Vanilla Choco-Blast</p>
                     <p className="text-xs text-slate-500 mt-1">Sold 45 times</p>
                   </div>
                   <p className="text-sm font-bold text-pink-600">৳1,500</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Quick Support / System Status */}
          <div className="bg-slate-900 rounded-2xl p-6 text-white relative overflow-hidden group">
            <TrendingUp className="absolute -right-4 -bottom-4 w-24 h-24 text-white/5 group-hover:scale-110 transition-transform" />
            <h4 className="text-lg font-bold mb-2">Bakery Performance</h4>
            <p className="text-slate-400 text-xs mb-4">Your sales are 15% higher than last week. Keep it up!</p>
            <button className="w-full py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-xs font-bold transition-all">
              View Analytics
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}