"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search, Inbox } from "lucide-react";
import { OrderTableRow } from "./OrderTableRow";
import { OrderData, OrderStatus, PaymentStatus, PaymentMethod } from "@/types/order";

interface OrderTableProps {
  filteredOrders: OrderData[];
  onStatusUpdate: (orderId: string, newStatus: OrderStatus) => void;
  onPaymentUpdate: (orderId: string, status: PaymentStatus, method: PaymentMethod) => void;
}

export function OrderTable({
  filteredOrders,
  onStatusUpdate,
  onPaymentUpdate,
}: OrderTableProps) {
  return (
    <div className="overflow-x-auto custom-scrollbar">
      <table className="w-full text-left border-separate border-spacing-0">
        {/* --- Header --- */}
        <thead className="bg-slate-50/50 sticky top-0 z-20 backdrop-blur-md">
          <tr>
            <th className="px-6 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 border-b border-slate-100 italic">
              Order Reference
            </th>
            <th className="px-6 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 border-b border-slate-100">
              Client Info
            </th>
            <th className="px-6 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 border-b border-slate-100">
              Timestamp
            </th>
            <th className="px-6 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 border-b border-slate-100">
              Basket
            </th>
            <th className="px-6 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 border-b border-slate-100">
              Financials
            </th>
            <th className="px-6 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 border-b border-slate-100">
              Payment Status
            </th>
            <th className="px-6 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 border-b border-slate-100 text-center">
              Delivery
            </th>
            <th className="px-6 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 border-b border-slate-100 text-right">
              Management
            </th>
          </tr>
        </thead>

        {/* --- Body --- */}
        <tbody className="relative">
          <AnimatePresence mode="popLayout" initial={false}>
            {filteredOrders.length > 0 ? (
              filteredOrders.map((order, index) => (
                <OrderTableRow
                  key={order._id}
                  order={order}
                  index={index} // এনিমেশন ডিলের জন্য ইনডেক্স পাস করা যেতে পারে
                  onStatusUpdate={onStatusUpdate}
                  onPaymentUpdate={onPaymentUpdate}
                />
              ))
            ) : (
              <motion.tr
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
              >
                <td colSpan={8} className="px-6 py-32 text-center">
                  <div className="flex flex-col items-center justify-center">
                    <div className="relative mb-6">
                      <div className="absolute inset-0 bg-pink-100 blur-3xl rounded-full opacity-20 animate-pulse" />
                      <div className="relative p-6 bg-slate-50 rounded-[32px] border border-slate-100 text-slate-300">
                        <Inbox size={48} strokeWidth={1} />
                      </div>
                    </div>
                    <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest italic">
                      No Records Found
                    </h3>
                    <p className="text-[11px] font-medium text-slate-400 mt-1">
                      We couldn't find any orders matching your current filters.
                    </p>
                  </div>
                </td>
              </motion.tr>
            )}
          </AnimatePresence>
        </tbody>
      </table>
    </div>
  );
}