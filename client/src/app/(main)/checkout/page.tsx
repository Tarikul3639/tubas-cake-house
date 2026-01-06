"use client";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  MapPin,
  Phone,
  User,
  Calendar,
  MessageSquare,
  Truck,
  Check,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CheckoutPage() {
  const router = useRouter();
  const [paymentMethod, setPaymentMethod] = useState<"cod" | "digital">("cod");
  const [transactionId, setTransactionId] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // এখানে আপনি ডেটা সেভ করার লজিক (API Call) দিতে পারেন
    console.log({ paymentMethod, transactionId });
    router.push("/checkout/success");
  };

  return (
    <main className="min-h-screen bg-[#fffafb] pt-28 pb-20">
      <div className="container mx-auto px-6 max-w-3xl">
        <Link
          href="/cart"
          className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-pink-500 mb-8 transition-all"
        >
          <ChevronLeft size={14} /> Back to Bag
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-8 md:p-12 rounded-[48px] border border-pink-50 shadow-xl shadow-pink-100/20"
        >
          <header className="mb-10">
            <h1 className="text-3xl font-black text-slate-800 italic">
              Delivery <span className="text-pink-500">Details</span>
            </h1>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-2">
              Nexion Secure Checkout
            </p>
          </header>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputGroup
                label="Full Name"
                icon={<User size={18} />}
                placeholder="John Doe"
              />
              <InputGroup
                label="Phone Number"
                icon={<Phone size={18} />}
                placeholder="017XXXXXXXX"
                type="tel"
              />
            </div>

            <InputGroup
              label="Shipping Address"
              icon={<MapPin size={18} />}
              placeholder="House, Road, Area..."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputGroup
                label="Delivery Date"
                icon={<Calendar size={18} />}
                type="date"
              />
              <InputGroup
                label="Note for Baker"
                icon={<MessageSquare size={18} />}
                placeholder="Extra cream, please!"
              />
            </div>

            {/* Payment Method Selection */}
            <div className="space-y-4 pt-6">
              <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 ml-1">
                Select Payment Method
              </label>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Cash on Delivery */}
                <button
                  type="button"
                  onClick={() => setPaymentMethod("cod")}
                  className={`flex items-center justify-between p-5 rounded-3xl border-2 transition-all ${
                    paymentMethod === "cod"
                      ? "border-pink-500 bg-pink-50/30"
                      : "border-slate-100 bg-slate-50 hover:border-pink-200 shadow-sm"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                        paymentMethod === "cod"
                          ? "border-pink-500 bg-pink-500"
                          : "border-slate-300 bg-white"
                      }`}
                    >
                      {paymentMethod === "cod" && (
                        <Check size={12} className="text-white" />
                      )}
                    </div>
                    <span className="text-sm font-black text-slate-800 tracking-tight">
                      Cash on Delivery
                    </span>
                  </div>
                  <Truck
                    size={20}
                    className={
                      paymentMethod === "cod"
                        ? "text-pink-500"
                        : "text-slate-400"
                    }
                  />
                </button>

                {/* Digital Payment */}
                <button
                  type="button"
                  onClick={() => setPaymentMethod("digital")}
                  className={`flex items-center justify-between p-5 rounded-3xl border-2 transition-all ${
                    paymentMethod === "digital"
                      ? "border-pink-500 bg-pink-50/30"
                      : "border-slate-100 bg-slate-50 hover:border-pink-200 shadow-sm"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                        paymentMethod === "digital"
                          ? "border-pink-500 bg-pink-500"
                          : "border-slate-300 bg-white"
                      }`}
                    >
                      {paymentMethod === "digital" && (
                        <Check size={12} className="text-white" />
                      )}
                    </div>
                    <span className="text-sm font-black text-slate-800 tracking-tight">
                      bKash / Nagad
                    </span>
                  </div>
                  <div className="flex -space-x-2">
                    {/* bKash Icon Placeholder */}
                    <div
                      className="w-8 h-8 bg-[#D12053] rounded-full border-2 border-white flex items-center justify-center shadow-sm"
                      title="bKash"
                    >
                      <span className="text-[7px] font-black text-white italic">
                        bkash
                      </span>
                    </div>
                    {/* Nagad Icon Placeholder */}
                    <div
                      className="w-8 h-8 bg-[#F7941D] rounded-full border-2 border-white flex items-center justify-center shadow-sm"
                      title="Nagad"
                    >
                      <span className="text-[7px] font-black text-white italic">
                        Nagad
                      </span>
                    </div>
                  </div>
                </button>
              </div>
            </div>

            {/* Digital Payment Instruction Box */}
            <AnimatePresence>
              {paymentMethod === "digital" && (
                <motion.div
                  initial={{ opacity: 0, height: 0, scale: 0.95 }}
                  animate={{ opacity: 1, height: "auto", scale: 1 }}
                  exit={{ opacity: 0, height: 0, scale: 0.95 }}
                  className="overflow-hidden"
                >
                  <div className="bg-slate-900 text-white p-6 rounded-[32px] space-y-4 shadow-xl">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse" />
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-pink-500">
                        Payment Instructions
                      </p>
                    </div>

                    <div className="space-y-3">
                      <p className="text-xs font-medium text-slate-300 leading-relaxed">
                        ১. আমাদের নাম্বারে{" "}
                        <span className="text-white font-bold">Send Money</span>{" "}
                        করুন:{" "}
                        <span className="text-pink-400 font-black">
                          017XXXXXXXX
                        </span>
                      </p>
                      <p className="text-xs font-medium text-slate-300 leading-relaxed">
                        ২. পেমেন্ট সফল হলে নিচের ঘরে আপনার{" "}
                        <span className="text-white font-bold">
                          Transaction ID
                        </span>{" "}
                        টি প্রদান করুন।
                      </p>
                    </div>

                    <div className="pt-2">
                      <label className="text-[9px] font-black uppercase tracking-widest text-slate-500 mb-2 block">
                        Your Transaction ID
                      </label>
                      <input
                        type="text"
                        value={transactionId}
                        onChange={(e) => setTransactionId(e.target.value)}
                        placeholder="TRX99281XXX"
                        required={paymentMethod === "digital"}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-sm font-bold focus:outline-none focus:border-pink-500 transition-all text-white placeholder:text-slate-600"
                      />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <button
              type="submit"
              className="w-full bg-slate-900 text-white py-5 rounded-[24px] font-black uppercase tracking-[0.3em] text-[11px] mt-8 hover:bg-pink-500 transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2"
            >
              Place Order Now
            </button>
          </form>
        </motion.div>
      </div>
    </main>
  );
}

function InputGroup({ label, icon, ...props }: any) {
  return (
    <div className="space-y-2">
      <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 ml-1">
        {label}
      </label>
      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-pink-400">
          {icon}
        </div>
        <input
          {...props}
          className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-6 text-sm font-bold focus:outline-none focus:border-pink-300 focus:bg-white transition-all"
          required
        />
      </div>
    </div>
  );
}
