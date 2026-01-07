"use client";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { OrderData, OrderStatus } from "@/types/order";

type TabType = OrderStatus | "all";

interface OrderTabsProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
  orders: OrderData[]; // কাউন্ট ক্যালকুলেট করার জন্য প্রপস যোগ করা হয়েছে
}

export function OrderTabs({ activeTab, onTabChange, orders }: OrderTabsProps) {
  const tabs: TabType[] = [
    "all",
    "pending",
    "processing",
    "shipped",
    "delivered",
    "cancelled",
  ];

  // প্রতিটি স্ট্যাটাসের জন্য অর্ডারের সংখ্যা বের করা
  const counts = useMemo(() => {
    const countsMap: Record<TabType, number> = {
      all: orders.length,
      pending: 0,
      processing: 0,
      shipped: 0,
      delivered: 0,
      cancelled: 0,
    };

    orders.forEach((order) => {
      if (countsMap[order.status] !== undefined) {
        countsMap[order.status]++;
      }
    });

    return countsMap;
  }, [orders]);

  return (
    <div className="flex items-center bg-slate-100/80 p-1 rounded-[22px] w-fit border border-slate-200/50 backdrop-blur-md">
      {tabs.map((tab) => {
        const isActive = activeTab === tab;
        const count = counts[tab];

        return (
          <button
            key={tab}
            onClick={() => onTabChange(tab)}
            className={cn(
              "relative px-5 py-2.5 text-[10px] font-black uppercase tracking-[0.15em] transition-all duration-300 z-10 flex items-center gap-2 italic",
              isActive ? "text-slate-900" : "text-slate-400 hover:text-slate-600"
            )}
          >
            {isActive && (
              <motion.div
                layoutId="activeTabGlow"
                className="absolute inset-0 bg-white rounded-[18px] shadow-[0_4px_12px_rgba(0,0,0,0.05)] z-[-1]"
                transition={{ type: "spring", bounce: 0.15, duration: 0.6 }}
              />
            )}
            
            <span>{tab}</span>

            {/* Count Badge */}
            <span
              className={cn(
                "px-1.5 py-0.5 rounded-md text-[9px] font-bold transition-colors tabular-nums",
                isActive 
                  ? "bg-pink-100 text-pink-600 shadow-[0_0_10px_rgba(219,39,119,0.1)]" 
                  : "bg-slate-200/50 text-slate-400"
              )}
            >
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
}