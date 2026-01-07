"use client";
import React, { useState } from "react";
import { 
  Search, 
  Filter, 
  MoreVertical, 
  Eye, 
  CheckCircle, 
  Truck, 
  Clock,
  Download
} from "lucide-react";
import { motion } from "motion/react";

// Order Status Types for styling
const statusStyles: any = {
  pending: "bg-amber-100 text-amber-700 border-amber-200",
  processing: "bg-blue-100 text-blue-700 border-blue-200",
  shipped: "bg-purple-100 text-purple-700 border-purple-200",
  delivered: "bg-emerald-100 text-emerald-700 border-emerald-200",
  cancelled: "bg-rose-100 text-rose-700 border-rose-200",
};

const orders = [
  { id: "#TCH-1024", customer: "Anika Tabassum", date: "Jan 07, 2026", items: "Chocolate Truffle (2lb)", amount: "৳1,800", status: "pending" },
  { id: "#TCH-1025", customer: "Sajid Khan", date: "Jan 06, 2026", items: "Red Velvet (1lb)", amount: "৳950", status: "processing" },
  { id: "#TCH-1026", customer: "Maliha Islam", date: "Jan 06, 2026", items: "Vanilla Sponge", amount: "৳1,200", status: "shipped" },
  { id: "#TCH-1027", customer: "Tanvir Ahmed", date: "Jan 05, 2026", items: "Black Forest", amount: "৳1,500", status: "delivered" },
];

export default function OrdersPage() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="space-y-6">
      {/* Header & Export */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 tracking-tight">Orders Management</h2>
          <p className="text-slate-500 text-sm">Manage, track and update your cake deliveries.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-all shadow-sm">
          <Download size={18} /> Export CSV
        </button>
      </div>

      {/* Tabs & Search */}
      <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm space-y-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex bg-slate-100 p-1 rounded-xl w-fit">
            {["all", "pending", "processing", "completed"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 text-sm font-medium rounded-lg capitalize transition-all ${
                  activeTab === tab ? "bg-white text-pink-600 shadow-sm" : "text-slate-500 hover:text-slate-800"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-pink-500 transition-colors" size={18} />
            <input 
              type="text" 
              placeholder="Search by order ID or customer..." 
              className="pl-10 pr-4 py-2.5 w-full lg:w-80 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all"
            />
          </div>
        </div>

        {/* Table Content */}
        <div className="overflow-x-auto rounded-xl border border-slate-50">
          <table className="w-full text-left border-collapse">
            <thead className="bg-slate-50/80 text-slate-500 text-xs uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4 font-bold">Order ID</th>
                <th className="px-6 py-4 font-bold">Customer</th>
                <th className="px-6 py-4 font-bold">Date</th>
                <th className="px-6 py-4 font-bold">Items</th>
                <th className="px-6 py-4 font-bold">Amount</th>
                <th className="px-6 py-4 font-bold">Status</th>
                <th className="px-6 py-4 font-bold text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {orders.map((order, index) => (
                <motion.tr 
                  key={order.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="group hover:bg-slate-50/80 transition-colors"
                >
                  <td className="px-6 py-4 text-sm font-bold text-slate-800">{order.id}</td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-semibold text-slate-700">{order.customer}</div>
                    <div className="text-[11px] text-slate-400">+880 17XX-XXXXXX</div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">{order.date}</td>
                  <td className="px-6 py-4 text-sm text-slate-500 italic max-w-[150px] truncate">{order.items}</td>
                  <td className="px-6 py-4 text-sm font-bold text-slate-900">{order.amount}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase border ${statusStyles[order.status]}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-2">
                      <button title="View Details" className="p-2 text-slate-400 hover:text-pink-600 hover:bg-pink-50 rounded-lg transition-all">
                        <Eye size={18} />
                      </button>
                      <button title="Update Status" className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                        <MoreVertical size={18} />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Placeholder */}
        <div className="flex items-center justify-between pt-4 text-sm text-slate-500">
          <p>Showing 1 to 4 of 48 orders</p>
          <div className="flex gap-2">
            <button className="px-4 py-2 border border-slate-200 rounded-lg hover:bg-slate-50 disabled:opacity-50">Previous</button>
            <button className="px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-900 transition-all">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}