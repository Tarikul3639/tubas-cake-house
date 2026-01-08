"use client";
import { motion } from "framer-motion";
import { Calendar, Banknote, Wallet } from "lucide-react";
import { cn } from "@/lib/utils";
import { OrderData, OrderStatus } from "@/types/order";

// Components
import { OrderDetailsDialog } from "../orders/_components/OrderDetailsDialog";

const statusStyles: Record<OrderStatus, string> = {
  pending: "bg-amber-50 text-amber-600 border-amber-100",
  processing: "bg-blue-50 text-blue-600 border-blue-100",
  shipped: "bg-purple-50 text-purple-600 border-purple-100",
  delivered: "bg-emerald-50 text-emerald-600 border-emerald-100",
  cancelled: "bg-rose-50 text-rose-600 border-rose-100",
};

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

// --- Sub-component: Desktop Row (Strictly for Table) ---
export function DesktopRow({ order, index }: { order: OrderData; index: number }) {
  return (
    <motion.tr 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: index * 0.05 }}
      className="group hover:bg-slate-50/50 transition-all border-b border-slate-50 last:border-0"
    >
      <td className="px-6 py-5">
        <span className="text-xs font-black text-slate-900 tracking-wider">
          #{order.orderId.split("-").pop()}
        </span>
      </td>
      <td className="px-6 py-5">
        <div className="flex flex-col">
          <span className="text-sm font-bold text-slate-700 leading-tight">{order.customer.name}</span>
          <span className="text-[10px] text-slate-400 font-medium italic">{order.customer.phone}</span>
        </div>
      </td>
      <td className="px-6 py-5">
        <div className="flex items-center gap-2 text-slate-500">
          <Calendar size={13} className="text-slate-300" />
          <span className="text-[11px] font-bold tracking-tighter">{formatDate(order.timeline.orderedAt)}</span>
        </div>
      </td>
      <td className="px-6 py-5">
        <span className="text-sm font-black text-slate-900 italic tabular-nums">
          ৳{order.pricing.totalAmount.toLocaleString()}
        </span>
      </td>
      <td className="px-6 py-5">
        <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-white border border-slate-100 w-fit">
          <div className={cn("p-1 rounded-lg", order.payment.status === "paid" ? "bg-emerald-50 text-emerald-500" : "bg-pink-50 text-pink-500")}>
            {order.payment.method === "cod" ? <Banknote size={12} /> : <Wallet size={12} />}
          </div>
          <div className="flex flex-col items-start leading-none text-left">
            <span className={cn("text-[8px] font-black uppercase", order.payment.status === "paid" ? "text-emerald-600" : "text-slate-400")}>
              {order.payment.status}
            </span>
            <span className="text-[7px] font-bold text-slate-300 uppercase">{order.payment.method}</span>
          </div>
        </div>
      </td>
      <td className="px-6 py-5 text-center">
        <span className={cn("inline-block px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest border italic", statusStyles[order.status])}>
          {order.status}
        </span>
      </td>
      <td className="px-6 py-5 text-right">
        <OrderDetailsDialog order={order} />
      </td>
    </motion.tr>
  );
}

