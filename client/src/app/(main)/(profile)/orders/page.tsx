"use client";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Package,
  Truck,
  CheckCircle2,
  Clock,
  ArrowLeft,
  Search,
  AlertCircle,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useMemo } from "react";
import { initialCakes } from "@/data/cakes";

interface IOrder {
  _id: string;
  orderId: string;
  date: string;
  status: string;
  total: number;
  items: typeof initialCakes;
}

const orders: IOrder[] = [
  {
    _id: "1",
    orderId: "NX-99281",
    date: "Jan 05, 2026",
    status: "Baking",
    total: 125.0,
    items: [initialCakes[0], initialCakes[1]],
  },
  {
    _id: "2",
    orderId: "NX-99150",
    date: "Dec 28, 2025",
    status: "Delivered",
    total: 45.5,
    items: [initialCakes[2]],
  },
  {
    _id: "3",
    orderId: "NX-99075",
    date: "Dec 22, 2025",
    status: "Cancelled",
    total: 30.0,
    items: [initialCakes[3]],
  },
];

export default function MyOrdersPage() {
  const [expandedOrderId, setExpandedOrderId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  // ১. Searching Functionality
  const filteredOrders = useMemo(() => {
    return orders.filter((order) =>
      order.orderId.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const toggleOrder = (id: string) => {
    setExpandedOrderId(expandedOrderId === id ? null : id);
  };

  return (
    <main className="min-h-screen bg-[#fffafb] pt-28 pb-20">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Header & Search */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <header>
            <Link
              href="/profile/settings"
              className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-pink-500 mb-4 transition-all"
            >
              <ArrowLeft size={14} /> Back to Profile
            </Link>
            <h1 className="text-4xl font-black text-slate-800 italic">
              Order <span className="text-pink-500">History</span>
            </h1>
          </header>

          <div className="relative group min-w-72">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-pink-500 transition-colors"
              size={18}
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Order ID (e.g. NX-99...)"
              className="w-full bg-white border border-pink-50 rounded-2xl py-4 pl-12 pr-6 text-sm font-bold focus:outline-none focus:border-pink-300 shadow-sm"
            />
          </div>
        </div>

        {/* Orders List */}
        <div className="space-y-6">
          <AnimatePresence mode="popLayout">
            {filteredOrders.map((order, idx) => {
              const isExpanded = expandedOrderId === order._id;
              const isError =
                order.status === "Cancelled" || order.status === "Error";

              return (
                <motion.div
                  key={order._id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-white rounded-[40px] border border-pink-50 overflow-hidden shadow-xl shadow-pink-100/10"
                >
                  {/* Card Header */}
                  <div
                    onClick={() => toggleOrder(order._id)}
                    className={`p-6 md:px-10 flex flex-wrap items-center justify-between gap-4 cursor-pointer transition-colors ${
                      isError ? "bg-red-50" : "bg-slate-900"
                    } text-${isError ? "red-900" : "white"}`}
                  >
                    <div className="flex items-center gap-6">
                      <div>
                        <p
                          className={`text-[9px] font-black uppercase tracking-widest mb-1 ${
                            isError ? "text-red-400" : "text-slate-400"
                          }`}
                        >
                          Order ID
                        </p>
                        <p className="text-sm font-black italic">{order.orderId}</p>
                      </div>
                      <div
                        className={`h-8 w-px hidden sm:block ${
                          isError ? "bg-red-200" : "bg-white/10"
                        }`}
                      />
                      <div>
                        <p
                          className={`text-[9px] font-black uppercase tracking-widest mb-1 ${
                            isError ? "text-red-400" : "text-slate-400"
                          }`}
                        >
                          Date
                        </p>
                        <p className="text-sm font-black italic">
                          {order.date}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <StatusBadge status={order.status} />
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        className={`${
                          isError ? "bg-red-200/50" : "bg-white/10"
                        } p-2.5 rounded-xl`}
                      >
                        <ChevronDown size={18} />
                      </motion.div>
                    </div>
                  </div>

                  {/* Expandable Content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                      >
                        <div className="p-6 md:p-10 border-t border-pink-50">
                          <div className="flex flex-col md:flex-row gap-10">
                            <div className="flex-1 space-y-6">
                              <p className="text-[9px] font-black uppercase tracking-widest text-slate-400">
                                Order Items
                              </p>
                              {order.items.map((item) => (
                                <div
                                  key={item._id}
                                  className="flex items-center gap-4"
                                >
                                  <div className="relative w-16 h-16 rounded-2xl overflow-hidden bg-pink-50 shrink-0 shadow-sm">
                                    <Image
                                      src={item.imageUrl}
                                      alt={item.name}
                                      fill
                                      className="object-cover"
                                    />
                                  </div>
                                  <div>
                                    <h4 className="font-black text-slate-800 text-sm italic">
                                      {item.name}
                                    </h4>
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                                      {item.weight} • Qty: 1
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>

                            {/* Timeline Logic */}
                            <div className="md:w-64 space-y-6 border-t md:border-t-0 md:border-l border-pink-50 pt-6 md:pt-0 md:pl-10">
                              <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-4">
                                Progress Tracking
                              </p>
                              <div className="space-y-4">
                                {isError ? (
                                  <TimelineItem
                                    icon={<AlertCircle size={14} />}
                                    label="Failed"
                                    sub="Order was cancelled"
                                    isError
                                  />
                                ) : (
                                  <>
                                    <TimelineItem
                                      icon={<Clock size={14} />}
                                      label="Order Received"
                                      sub="Confirmed"
                                      completed
                                    />
                                    <TimelineItem
                                      icon={<Package size={14} />}
                                      label="Baking"
                                      sub="Chef working"
                                      active={order.status === "Baking"}
                                      completed={[
                                        "Shipping",
                                        "Delivered",
                                      ].includes(order.status)}
                                    />
                                    <TimelineItem
                                      icon={<Truck size={14} />}
                                      label="Shipping"
                                      sub="Out for delivery"
                                      active={order.status === "Shipping"}
                                      completed={order.status === "Delivered"}
                                    />
                                    <TimelineItem
                                      icon={<CheckCircle2 size={14} />}
                                      label="Delivered"
                                      sub="Cake arrived!"
                                      active={order.status === "Delivered"}
                                      completed={order.status === "Delivered"}
                                    />
                                  </>
                                )}
                              </div>
                              <div className="mt-8 pt-6 border-t border-pink-50 flex items-center justify-between">
                                <p className="text-[9px] font-black uppercase tracking-widest text-slate-400">
                                  Total Paid
                                </p>
                                <p className="text-xl font-black text-pink-500 tracking-tighter">
                                  ${order.total.toFixed(2)}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {/* Empty Search Result */}
          {filteredOrders.length === 0 && (
            <div className="text-center py-20 bg-white rounded-[48px] border-2 border-dashed border-pink-100">
              <Search size={64} className="mx-auto text-pink-100 mb-4" />
              <h3 className="text-xl font-black text-slate-400 uppercase tracking-widest">
                No matching orders
              </h3>
              <button
                onClick={() => setSearchQuery("")}
                className="text-pink-500 font-bold underline mt-4"
              >
                Clear search
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

function StatusBadge({ status }: { status: string }) {
  const isDelivered = status === "Delivered";
  const isError = status === "Cancelled" || status === "Error";

  const colors = isError
    ? "bg-red-500 text-white"
    : isDelivered
    ? "bg-green-500/20 text-green-500"
    : "bg-pink-500 text-white";

  return (
    <span
      className={`flex items-center gap-2 px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-widest ${colors}`}
    >
      {isError ? (
        <AlertCircle size={12} />
      ) : isDelivered ? (
        <CheckCircle2 size={12} />
      ) : (
        <div className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />
      )}
      {status}
    </span>
  );
}

function TimelineItem({ icon, label, sub, completed, active, isError }: any) {
  const colorClass = isError
    ? "text-red-500"
    : completed
    ? "text-green-500"
    : active
    ? "text-pink-500"
    : "text-slate-200";
  return (
    <div className="flex gap-3">
      <div className={`mt-1 shrink-0 ${colorClass}`}>{icon}</div>
      <div>
        <p
          className={`text-[10px] font-black uppercase tracking-tight ${
            active || completed ? "text-slate-800" : "text-slate-500"
          }`}
        >
          {label}
        </p>
        <p className="text-[8px] font-medium text-slate-400 uppercase">{sub}</p>
      </div>
    </div>
  );
}
