"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  TrendingUp,
  Package,
  Users,
  DollarSign,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  Plus,
  Calendar,
  Banknote,
  Wallet,
} from "lucide-react";
import { cn } from "@/lib/utils";

// Types & Mock Data (Assuming Nexion Standard)
import { ordersMockData } from "@/store/order";
import {
  OrderData,
  OrderStatus,
  PaymentStatus,
  PaymentMethod,
} from "@/types/order";

// Components (Assuming these are separate files)
import { OrderDetailsDialog } from "./orders/_components/OrderDetailsDialog";

// --- Sub-component: OrderTableRow ---
const statusStyles: Record<OrderStatus, string> = {
  pending: "bg-amber-50 text-amber-600 border-amber-100",
  processing: "bg-blue-50 text-blue-600 border-blue-100",
  shipped: "bg-purple-50 text-purple-600 border-purple-100",
  delivered: "bg-emerald-50 text-emerald-600 border-emerald-100",
  cancelled: "bg-rose-50 text-rose-600 border-rose-100",
};

function OrderTableRow({ order, index }: { order: OrderData; index: number }) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <>
      {/* Mobile View: Card */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.05 }}
        className="block md:hidden bg-white p-5 rounded-[24px] border border-slate-100 mb-4 shadow-sm"
      >
        <div className="flex justify-between items-start mb-4">
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
            #{order.orderId.split("-").pop()}
          </span>
          <span
            className={cn(
              "px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-tighter border italic",
              statusStyles[order.status]
            )}
          >
            {order.status}
          </span>
        </div>
        <div className="flex justify-between items-end">
          <div>
            <p className="text-sm font-bold text-slate-700">
              {order.customer.name}
            </p>
            <p className="text-[11px] font-black text-slate-900 mt-1 italic">
              ৳{order.pricing.totalAmount.toLocaleString()}
            </p>
          </div>
          <div className="flex gap-2">
            <OrderDetailsDialog order={order} />
          </div>
        </div>
      </motion.div>

      {/* Desktop View: Table Row */}
      <motion.tr className="hidden md:table-row group hover:bg-slate-50/50 transition-all border-b border-slate-50 last:border-0">
        <td className="px-6 py-5">
          <span className="text-xs font-black text-slate-900 tracking-wider">
            #{order.orderId.split("-").pop()}
          </span>
        </td>
        <td className="px-6 py-5">
          <div className="flex flex-col">
            <span className="text-sm font-bold text-slate-700 leading-tight">
              {order.customer.name}
            </span>
            <span className="text-[10px] text-slate-400 font-medium italic">
              {order.customer.phone}
            </span>
          </div>
        </td>
        <td className="px-6 py-5">
          <div className="flex items-center gap-2 text-slate-500">
            <Calendar size={13} className="text-slate-300" />
            <span className="text-[11px] font-bold tracking-tighter">
              {formatDate(order.timeline.orderedAt)}
            </span>
          </div>
        </td>
        <td className="px-6 py-5">
          <span className="text-sm font-black text-slate-900 italic tabular-nums">
            ৳{order.pricing.totalAmount.toLocaleString()}
          </span>
        </td>
        <td className="px-6 py-5">
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-white border border-slate-100 hover:border-pink-200 transition-all">
              <div
                className={cn(
                  "p-1 rounded-lg",
                  order.payment.status === "paid"
                    ? "bg-emerald-50 text-emerald-500"
                    : "bg-pink-50 text-pink-500"
                )}
              >
                {order.payment.method === "cod" ? (
                  <Banknote size={12} />
                ) : (
                  <Wallet size={12} />
                )}
              </div>
              <div className="flex flex-col space-y-1 items-start leading-none text-left">
                <span
                  className={cn(
                    "text-[8px] font-black uppercase",
                    order.payment.status === "paid"
                      ? "text-emerald-600"
                      : "text-slate-400"
                  )}
                >
                  {order.payment.status}
                </span>
                <span className="text-[7px] font-bold text-slate-300 uppercase">
                  {order.payment.method}
                </span>
              </div>
            </button>
          </div>
        </td>
        <td className="px-6 py-5 text-center">
          <span
            className={cn(
              "inline-block px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest border italic",
              statusStyles[order.status]
            )}
          >
            {order.status}
          </span>
        </td>
        <td className="px-6 py-5 text-right">
          <div className="flex items-center justify-end gap-2">
            <OrderDetailsDialog order={order} />
          </div>
        </td>
      </motion.tr>
    </>
  );
}

// --- Main Dashboard ---
const stats = [
  {
    title: "Total Revenue",
    value: "৳45,200",
    trend: "+12.5%",
    isPositive: true,
    icon: DollarSign,
    color: "bg-emerald-500",
  },
  {
    title: "Total Orders",
    value: "128",
    trend: "+8.2%",
    isPositive: true,
    icon: Package,
    color: "bg-pink-500",
  },
  {
    title: "New Customers",
    value: "42",
    trend: "-3.1%",
    isPositive: false,
    icon: Users,
    color: "bg-blue-500",
  },
  {
    title: "Pending Orders",
    value: "14",
    trend: "Live",
    isPositive: true,
    icon: Clock,
    color: "bg-amber-500",
  },
];

export default function AdminDashboard() {
  const handleStatusUpdate = (id: string, status: any) =>
    console.log(id, status);
  const handlePaymentUpdate = (id: string, status: any, method: any) =>
    console.log(id, status, method);

  return (
    <div className="space-y-8 pb-10">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h2 className="text-2xl font-black text-slate-900 italic tracking-tighter uppercase">
            Overview
          </h2>
          <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-1">
            Nexion Analytics Engine
          </p>
        </div>
        <div className="flex gap-3 w-full md:w-auto">
          <button className="flex-1 md:flex-none px-5 py-2.5 bg-white border border-slate-200 rounded-2xl text-[11px] font-black uppercase tracking-widest text-slate-600 hover:bg-slate-50 transition-all">
            Reports
          </button>
          <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-5 py-2.5 bg-slate-900 text-white rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-pink-600 transition-all shadow-xl shadow-slate-200">
            <Plus size={14} /> Add Product
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
            className="p-6 bg-white rounded-[32px] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-100 transition-all group"
          >
            <div className="flex justify-between items-start mb-4">
              <div
                className={`p-3 rounded-2xl ${item.color} text-white shadow-lg shadow-inherit transition-transform group-hover:scale-110`}
              >
                <item.icon size={20} />
              </div>
              <div
                className={`flex items-center gap-1 text-[10px] font-black italic tracking-tighter ${
                  item.isPositive ? "text-emerald-600" : "text-rose-600"
                }`}
              >
                {item.trend}
                {item.isPositive ? (
                  <ArrowUpRight size={12} />
                ) : (
                  <ArrowDownRight size={12} />
                )}
              </div>
            </div>
            <div>
              <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em]">
                {item.title}
              </p>
              <h3 className="text-2xl font-black text-slate-900 mt-1 italic tracking-tighter">
                {item.value}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Orders Section */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex justify-between items-center px-2">
            <div>
              <h3 className="font-black text-slate-900 italic uppercase tracking-tighter">
                Recent Orders
              </h3>
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                Real-time update
              </p>
            </div>
            <Link
              href="/orders"
              className="text-pink-600 text-[10px] font-black uppercase italic hover:underline tracking-widest"
            >
              Explore All
            </Link>
          </div>

          {/* Desktop Table */}
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
              <tbody>
                {ordersMockData.map((order, i) => (
                  <OrderTableRow key={order._id} order={order} index={i} />
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-4">
            {ordersMockData.map((order, i) => (
              <OrderTableRow key={order._id} order={order} index={i} />
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm p-6">
            <h3 className="font-black text-slate-900 mb-6 italic uppercase tracking-tighter text-center border-b border-slate-50 pb-4">
              Hot Items
            </h3>
            <div className="space-y-5">
              {[1, 2, 3].map((_, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className="w-12 h-12 bg-pink-50 rounded-2xl flex items-center justify-center text-lg shadow-sm group-hover:scale-110 transition-transform">
                    {i === 0 ? "🥇" : i === 1 ? "🥈" : "🥉"}
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-black text-slate-800 italic uppercase leading-none">
                      Choco Fudge
                    </p>
                    <p className="text-[9px] font-bold text-slate-400 mt-1 uppercase">
                      45 Orders
                    </p>
                  </div>
                  <p className="text-xs font-black text-pink-600 italic">
                    ৳1.5k
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900 rounded-[32px] p-8 text-white relative overflow-hidden group">
            <TrendingUp className="absolute -right-6 -bottom-6 w-32 h-32 text-white/5 group-hover:scale-110 transition-transform duration-700" />
            <div className="relative z-10">
              <h4 className="text-lg font-black italic uppercase tracking-tighter">
                Performance
              </h4>
              <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mt-2 mb-6 leading-relaxed">
                Your sales are up 15% this week.
              </p>
              <button className="w-full py-3 bg-white/10 hover:bg-pink-600 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all">
                Full Analytics
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
