"use client";
import { motion } from "framer-motion";
import { Eye, Package, CreditCard, Banknote, Wallet, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import { StatusDropdown } from "@/app/(dashboard)/orders/_components/StatusDropdown";
import { OrderDetailsDialog } from "./OrderDetailsDialog";
import { PaymentUpdateDialog } from "./PaymentUpdateDialog";
import {
  OrderData,
  OrderStatus,
  PaymentStatus,
  PaymentMethod,
} from "@/types/order";

// --- Status Styles Configuration ---
const statusStyles: Record<OrderStatus, string> = {
  pending: "bg-amber-50 text-amber-600 border-amber-100",
  processing: "bg-blue-50 text-blue-600 border-blue-100",
  shipped: "bg-purple-50 text-purple-600 border-purple-100",
  delivered: "bg-emerald-50 text-emerald-600 border-emerald-100",
  cancelled: "bg-rose-50 text-rose-600 border-rose-100",
};

interface OrderTableRowProps {
  order: OrderData;
  index: number;
  onStatusUpdate: (orderId: string, newStatus: OrderStatus) => void;
  onPaymentUpdate: (orderId: string, status: PaymentStatus, method: PaymentMethod) => void;
}

export function OrderTableRow({ order, index, onStatusUpdate, onPaymentUpdate }: OrderTableRowProps) {
  
  // Formatters
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const formatPrice = (amount: number) => {
    return `৳${amount.toLocaleString()}`;
  };

  const getItemsSummary = (items: OrderData["items"]) => {
    if (items.length === 0) return "No items";
    const firstItem = items[0].name;
    return items.length > 1 ? `${firstItem} +${items.length - 1} more` : firstItem;
  };

  return (
    <motion.tr
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="group hover:bg-slate-50/80 transition-all duration-300 border-b border-slate-50 last:border-0"
    >
      {/* 1. Order ID */}
      <td className="px-6 py-5">
        <span className="text-xs font-black text-slate-900 tracking-wider">
          {order.orderId}
        </span>
      </td>

      {/* 2. Customer Info */}
      <td className="px-6 py-5">
        <div className="flex flex-col">
          <span className="text-sm font-bold text-slate-700 leading-tight">
            {order.customer.name}
          </span>
          <span className="text-[10px] text-slate-400 font-medium tracking-wide">
            {order.customer.phone}
          </span>
        </div>
      </td>

      {/* 3. Date */}
      <td className="px-6 py-5">
        <div className="flex items-center gap-2 text-slate-500">
          <Calendar size={13} className="text-slate-300" />
          <span className="text-[11px] font-bold">{formatDate(order.timeline.orderedAt)}</span>
        </div>
      </td>

      {/* 4. Items Summary */}
      <td className="px-6 py-5">
        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-slate-100 rounded-lg text-slate-400">
            <Package size={14} />
          </div>
          <span className="text-[11px] text-slate-500 font-medium italic max-w-37.5 truncate">
            {getItemsSummary(order.items)}
          </span>
        </div>
      </td>

      {/* 5. Total Price */}
      <td className="px-6 py-5">
        <span className="text-sm font-black text-slate-900 tracking-tight">
          {formatPrice(order.pricing.totalAmount)}
        </span>
      </td>

      {/* 6. Interactive Payment Status */}
      <td className="px-6 py-5">
        <PaymentUpdateDialog
          order={order}
          onUpdate={onPaymentUpdate}
        >
          <button className="flex items-center gap-2.5 px-3 py-2 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-pink-200 transition-all active:scale-95 group/pay">
            <div className={cn(
              "p-1.5 rounded-xl transition-colors",
              order.payment.status === "paid" ? "bg-emerald-50 text-emerald-500" : "bg-pink-50 text-pink-500"
            )}>
              {order.payment.method === "cod" ? <Banknote size={14} /> : <Wallet size={14} />}
            </div>
            <div className="flex flex-col items-start leading-none">
              <span className={cn(
                "text-[9px] font-black uppercase tracking-widest",
                order.payment.status === "paid" ? "text-emerald-600" : "text-slate-400 group-hover/pay:text-pink-500"
              )}>
                {order.payment.status}
              </span>
              <span className="text-[8px] font-bold text-slate-300 uppercase mt-0.5">
                {order.payment.method}
              </span>
            </div>
          </button>
        </PaymentUpdateDialog>
      </td>

      {/* 7. Order Status Badge */}
      <td className="px-6 py-5 text-center">
        <span className={cn(
          "inline-block px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest border shadow-sm italic",
          statusStyles[order.status]
        )}>
          {order.status}
        </span>
      </td>

      {/* 8. Actions */}
      <td className="px-6 py-5">
        <div className="flex items-center justify-end gap-2">
          <OrderDetailsDialog order={order} />
          
          <div className="h-6 w-px bg-slate-200" /> {/* Divider */}

          <StatusDropdown
            currentStatus={order.status}
            onStatusChange={(newVal) => onStatusUpdate(order._id, newVal)}
            title="Update Status"
          />
        </div>
      </td>
    </motion.tr>
  );
}