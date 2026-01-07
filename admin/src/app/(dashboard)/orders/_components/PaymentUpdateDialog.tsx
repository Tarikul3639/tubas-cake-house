"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import {
  CreditCard,
  Save,
  Banknote,
  Wallet,
  ShieldCheck,
  Zap,
  Fingerprint,
  ChevronRight,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { OrderData, PaymentStatus, PaymentMethod } from "@/types/order";

interface PaymentUpdateProps {
  order: OrderData;
  onUpdate: (
    orderId: string,
    status: PaymentStatus,
    method: PaymentMethod,
    transactionId?: string
  ) => void;
  children: React.ReactNode;
}

export const PaymentUpdateDialog = ({
  order,
  onUpdate,
  children,
}: PaymentUpdateProps) => {
  const [status, setStatus] = useState<PaymentStatus>(order.payment.status);
  const [method, setMethod] = useState<PaymentMethod>(order.payment.method);
  const [txId, setTxId] = useState(order.payment.transactionId || "");
  const [open, setOpen] = useState(false);

  const handleSave = () => {
    onUpdate(order._id, status, method, txId);
    setOpen(false);
  };

  const paymentMethods: { value: PaymentMethod; label: string; icon: any }[] = [
    { value: "bkash", label: "bKash", icon: Wallet },
    { value: "nagad", label: "Nagad", icon: Wallet },
    { value: "cod", label: "COD", icon: Banknote }, // Label shortened for mobile
    { value: "card", label: "Card", icon: CreditCard },
  ];

  const statusOptions: { value: PaymentStatus; label: string; color: string }[] = [
    { value: "unpaid", label: "Unpaid", color: "bg-rose-500" },
    { value: "paid", label: "Paid", color: "bg-emerald-500" },
    { value: "partial", label: "Partial", color: "bg-amber-500" },
    { value: "refunded", label: "Refunded", color: "bg-slate-400" },
  ];

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-105 max-h-[92vh] w-[95vw] p-0 overflow-hidden border-none rounded-[32px] md:rounded-4xl shadow-2xl outline-none bg-white flex flex-col [&>button]:hidden">
        
        {/* --- Header: Dark Neon --- */}
        <div className="bg-slate-900 p-6 md:p-8 text-white relative shrink-0 overflow-hidden">
          <DialogClose asChild>
            <button className="absolute top-4 right-4 z-50 p-2 bg-white/10 hover:bg-rose-500 backdrop-blur-md rounded-full transition-all active:scale-90 border border-white/5 outline-none">
              <X size={16} strokeWidth={3} />
            </button>
          </DialogClose>
          
          <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/20 rounded-full -mr-16 -mt-16 blur-3xl animate-pulse" />
          
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="p-3 bg-pink-600 rounded-2xl shadow-xl shadow-pink-900/40 mb-3 rotate-3">
              <Zap size={22} className="fill-white text-white" />
            </div>
            <DialogTitle className="text-xl md:text-2xl font-black tracking-tighter italic">
              Payment <span className="text-pink-500">Flux</span>
            </DialogTitle>
            <p className="text-slate-500 text-[9px] font-black uppercase tracking-[0.2em] mt-2 flex items-center gap-2">
              <Fingerprint size={12} className="text-pink-500" />
              ID: {order.orderId}
            </p>
          </div>
        </div>

        {/* --- Scrollable Body --- */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-7 custom-scrollbar">
          
          {/* 1. Gateways */}
          <section className="space-y-4">
            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
              <CreditCard size={12} className="text-pink-500" strokeWidth={3} /> Gateways
            </h3>
            <div className="grid grid-cols-2 gap-2.5">
              {paymentMethods.map((pm) => (
                <button
                  key={pm.value}
                  onClick={() => setMethod(pm.value)}
                  className={cn(
                    "flex items-center gap-2.5 p-3.5 rounded-2xl border-2 transition-all duration-300 active:scale-95 group",
                    method === pm.value
                      ? "border-slate-900 bg-slate-900 text-white shadow-md"
                      : "border-slate-100 bg-slate-50 text-slate-400 hover:border-pink-200"
                  )}
                >
                  <pm.icon size={16} className={cn(method === pm.value ? "text-pink-500" : "text-slate-300")} strokeWidth={2.5} />
                  <span className="text-[10px] font-black uppercase tracking-tight italic truncate">{pm.label}</span>
                </button>
              ))}
            </div>
          </section>

          {/* 2. Ledger Status */}
          <section className="space-y-4">
            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
              <ShieldCheck size={12} className="text-pink-500" strokeWidth={3} /> Status
            </h3>
            <div className="flex flex-wrap gap-2">
              {statusOptions.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setStatus(opt.value)}
                  className={cn(
                    "px-4 py-2 rounded-full border-2 text-[10px] font-black uppercase tracking-widest transition-all flex items-center gap-2",
                    status === opt.value
                      ? "bg-white border-pink-500 text-slate-900 shadow-sm"
                      : "bg-white border-slate-100 text-slate-400 hover:border-slate-200"
                  )}
                >
                  {status === opt.value && <div className={cn("w-1.5 h-1.5 rounded-full animate-pulse", opt.color)} />}
                  {opt.label}
                </button>
              ))}
            </div>
          </section>

          {/* 3. Transaction ID */}
          <section className="space-y-3">
            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Reference ID</h3>
            <div className="relative group">
              <input
                type="text"
                value={txId}
                onChange={(e) => setTxId(e.target.value)}
                placeholder="TXN-90X..."
                className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-4 py-3.5 text-xs font-bold text-slate-900 outline-none focus:border-pink-500 focus:bg-white transition-all placeholder:text-slate-300"
              />
              <ChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-200 group-focus-within:text-pink-500" size={16} />
            </div>
          </section>
        </div>

        {/* --- Footer (Fixed) --- */}
        <div className="p-6 md:p-8 bg-slate-50 border-t border-slate-100 shrink-0">
          <button
            onClick={handleSave}
            className="w-full py-4 bg-slate-900 hover:bg-pink-600 text-white rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] transition-all duration-300 shadow-lg active:scale-95 flex items-center justify-center gap-2 italic"
          >
            <Save size={16} strokeWidth={3} />
            Authorize
          </button>
          <DialogClose asChild>
            <button className="w-full mt-4 text-[9px] font-black text-slate-400 uppercase tracking-widest hover:text-rose-500 transition-colors">
              Cancel
            </button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};