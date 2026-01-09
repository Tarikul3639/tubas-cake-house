import React from "react";
import { Wallet, Calendar, StickyNote, Clock } from "lucide-react";
import { ICustomer } from "@/types/customer";

interface RevenueMetricsCardProps {
  customer: ICustomer;
}

export default function RevenueMetricsCard({ customer }: RevenueMetricsCardProps) {
  return (
    <div className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-sm">
      <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-6 flex items-center gap-2">
        <Wallet size={12} className="text-pink-500" /> Revenue Metrics
      </h3>
      <div className="space-y-6 text-slate-900">
        <div className="flex justify-between items-end border-b border-slate-50 pb-4">
          <div className="space-y-1">
            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-none">
              Total Spent
            </p>
            <p className="text-2xl font-black italic tracking-tighter">
              ${customer.totalSpent?. toLocaleString()}
            </p>
          </div>
          <div className="text-right space-y-1">
            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-none">
              Order Flow
            </p>
            <p className="text-2xl font-black italic tracking-tighter">
              {customer.totalOrders} Units
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3">
          <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
            <div className="flex items-center gap-2 text-slate-400">
              <Calendar size={12} />
              <span className="text-[9px] font-black uppercase tracking-widest">
                Registration
              </span>
            </div>
            <span className="text-[10px] font-bold">
              {customer.createdAt
                ? new Date(customer.createdAt).toLocaleDateString()
                : "N/A"}
            </span>
          </div>
          <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
            <div className="flex items-center gap-2 text-slate-400">
              <StickyNote size={12} />
              <span className="text-[9px] font-black uppercase tracking-widest">
                Last Update
              </span>
            </div>
            <span className="text-[10px] font-bold">
              {customer.updatedAt
                ? new Date(customer.updatedAt).toLocaleDateString()
                : "N/A"}
            </span>
          </div>
          <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
            <div className="flex items-center gap-2 text-slate-400">
              <Clock size={12} />
              <span className="text-[9px] font-black uppercase tracking-widest">
                Last Activity
              </span>
            </div>
            <span className="text-[10px] font-bold">
              {customer.lastOrderDate
                ? new Date(customer. lastOrderDate).toLocaleDateString()
                : "N/A"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}