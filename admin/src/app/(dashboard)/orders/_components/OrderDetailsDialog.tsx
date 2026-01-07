"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import {
  Eye,
  Package,
  User,
  MapPin,
  CreditCard,
  Printer,
  X,
  Truck,
  Hash,
  ShoppingBag,
  TicketPercent,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { OrderData } from "@/types/order";

export const OrderDetailsDialog = ({ order }: { order: OrderData }) => {
  const formatPrice = (amount: number) => `৳${amount.toLocaleString()}`;
  const { subTotal, deliveryCharge, discount, totalAmount } = order.pricing;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="p-2.5 text-slate-400 hover:text-pink-600 hover:bg-pink-50 rounded-xl transition-all active:scale-95 group outline-none">
          <Eye size={18} strokeWidth={2.5} />
        </button>
      </DialogTrigger>

      <DialogContent className="max-w-xl w-[95vw] h-auto max-h-[90vh] p-0 overflow-hidden border-none rounded-[24px] md:rounded-[32px] shadow-2xl outline-none bg-white [&>button]:hidden flex flex-col">
        
        {/* --- Header Section (Fixed) --- */}
        <div className="bg-slate-900 p-5 md:p-6 text-white relative overflow-hidden shrink-0">
          <div className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 bg-pink-500/20 rounded-full -mr-16 -mt-16 blur-3xl animate-pulse" />
          
          <div className="relative z-10">
            <div className="flex justify-between items-center mb-4 md:mb-6">
              <div className="flex items-center gap-2 px-2.5 py-1 bg-white/10 backdrop-blur-md rounded-lg border border-white/10">
                <ShoppingBag size={10} className="text-pink-400" />
                <span className="text-[9px] font-black uppercase tracking-[0.2em]">
                  Nexion Invoice
                </span>
              </div>

              <DialogClose asChild>
                <button className="p-2 bg-white/10 hover:bg-rose-500 backdrop-blur-md text-white rounded-full transition-all active:scale-90 border border-white/10 outline-none">
                  <X size={16} strokeWidth={3} />
                </button>
              </DialogClose>
            </div>

            <div className="flex items-baseline gap-1.5">
              <span className="text-slate-500 font-black text-lg italic">#</span>
              <DialogTitle className="text-2xl md:text-4xl font-black tracking-tighter italic leading-none">
                {order.orderId.replace("TCH-", "")}
              </DialogTitle>
            </div>
            
            <p className="text-slate-400 text-[9px] font-black uppercase tracking-[0.15em] mt-2 flex items-center gap-2">
              <Hash size={10} className="text-pink-500" />
              {new Date(order.timeline.orderedAt).toLocaleDateString("en-US", {
                month: "short", day: "numeric", year: "numeric"
              })}
            </p>
          </div>
        </div>

        {/* --- Scrollable Body Content --- */}
        <div className="flex-1 overflow-y-auto p-5 md:p-8 space-y-6 md:space-y-8 custom-scrollbar bg-white">
          
          {/* Customer & Shipping Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <section className="space-y-2">
              <h3 className="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                <User size={12} className="text-pink-500" strokeWidth={3} /> Customer
              </h3>
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <p className="font-black text-slate-900 text-sm md:text-base italic">{order.customer.name}</p>
                <p className="text-[11px] text-slate-500 font-bold mt-0.5">{order.customer.phone}</p>
              </div>
            </section>

            <section className="space-y-2">
              <h3 className="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                <MapPin size={12} className="text-pink-500" strokeWidth={3} /> Destination
              </h3>
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <p className="text-[11px] text-slate-600 leading-relaxed font-bold italic">
                  {order.customer.fullAddress}
                </p>
              </div>
            </section>
          </div>

          {/* Items Summary */}
          <section className="space-y-3">
            <h3 className="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
              <Package size={12} className="text-pink-500" strokeWidth={3} /> Basket Intelligence
            </h3>
            <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm">
              <div className="divide-y divide-slate-50">
                {order.items.map((item) => (
                  <div key={item._id} className="flex justify-between items-center p-4 hover:bg-slate-50 transition-colors">
                    <div className="flex gap-3 items-center">
                      <div className="w-10 h-10 shrink-0 rounded-lg overflow-hidden border border-slate-100 bg-slate-50">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="text-xs font-black text-slate-900 italic truncate leading-tight">{item.name}</span>
                        <span className="text-[9px] text-slate-400 font-black uppercase mt-1 tracking-tighter">
                          {item.variant?.label} • {item.quantity} Qty
                        </span>
                      </div>
                    </div>
                    <span className="text-xs font-black text-slate-900 tabular-nums shrink-0 ml-2">
                      {formatPrice(item.unitPrice * item.quantity)}
                    </span>
                  </div>
                ))}
              </div>

              {/* Pricing Breakdown */}
              <div className="bg-slate-50/80 p-4 space-y-2.5 border-t border-slate-100">
                <div className="flex justify-between text-[10px] font-bold text-slate-500 uppercase">
                  <span>Sub-total</span>
                  <span className="tabular-nums">{formatPrice(subTotal)}</span>
                </div>
                <div className="flex justify-between text-[10px] font-bold text-emerald-600 uppercase">
                  <span className="flex items-center gap-1"><Truck size={10} /> Logistics</span>
                  <span className="tabular-nums">+ {formatPrice(deliveryCharge)}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-[10px] font-bold text-pink-600 uppercase">
                    <span className="flex items-center gap-1"><TicketPercent size={10} /> Discount</span>
                    <span className="tabular-nums">- {formatPrice(discount)}</span>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Payment Status Bar */}
          <div className="bg-slate-900 rounded-3xl p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/10 rounded-lg">
                <CreditCard size={14} className="text-pink-500" />
              </div>
              <div className="flex flex-col">
                <span className="text-[8px] text-slate-400 font-black uppercase tracking-widest">Method</span>
                <span className="text-[11px] font-black italic uppercase">{order.payment.method}</span>
              </div>
            </div>
            <div className="text-right">
                <span className={cn(
                  "px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest italic",
                  order.payment.status === "paid" ? "bg-emerald-500 text-white" : "bg-amber-500 text-white"
                )}>
                  {order.payment.status}
                </span>
            </div>
          </div>
        </div>

        {/* --- Footer Action (Fixed) --- */}
        <div className="p-5 md:p-6 bg-slate-50 border-t border-slate-100 shrink-0 flex items-center justify-between gap-4">
          <div className="flex flex-col">
            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Total</span>
            <span className="text-xl md:text-2xl font-black text-slate-900 tracking-tighter italic tabular-nums">
              {formatPrice(totalAmount)}
            </span>
          </div>
          <button
            onClick={() => window.print()}
            className="flex items-center gap-2 px-5 py-3 bg-slate-900 hover:bg-pink-600 text-white rounded-2xl md:rounded-3xl font-black text-[10px] uppercase tracking-widest transition-all duration-300 shadow-lg active:scale-95 group"
          >
            <Printer size={14} strokeWidth={3} /> 
            <span className="hidden sm:inline">Generate PDF</span>
            <span className="sm:hidden">PDF</span>
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};