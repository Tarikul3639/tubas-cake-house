"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { OrderData, OrderStatus } from "@/types/order";
import { OrderDetailsDialog } from "../orders/_components/OrderDetailsDialog";

const statusStyles: Record<OrderStatus, string> = {
  pending: "bg-amber-50 text-amber-600 border-amber-100",
  processing: "bg-blue-50 text-blue-600 border-blue-100",
  shipped: "bg-purple-50 text-purple-600 border-purple-100",
  delivered: "bg-emerald-50 text-emerald-600 border-emerald-100",
  cancelled: "bg-rose-50 text-rose-600 border-rose-100",
};

// --- Sub-component: Mobile Card ---
export const MobileCard = ({ order, index }: { order: OrderData; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="bg-white p-5 rounded-[24px] border border-slate-100 mb-4 shadow-sm"
    >
      <div className="flex justify-between items-start mb-4">
        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">#{order.orderId.split("-").pop()}</span>
        <span className={cn("px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-tighter border italic", statusStyles[order.status])}>
          {order.status}
        </span>
      </div>
      <div className="flex justify-between items-end">
        <div>
          <p className="text-sm font-bold text-slate-700">{order.customer.name}</p>
          <p className="text-[11px] font-black text-slate-900 mt-1 italic">৳{order.pricing.totalAmount.toLocaleString()}</p>
        </div>
        <OrderDetailsDialog order={order} />
      </div>
    </motion.div>
  );
}   