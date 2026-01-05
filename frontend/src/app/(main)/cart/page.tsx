"use client";
import { motion, AnimatePresence } from "framer-motion";
import {
  Trash2,
  Plus,
  Minus,
  ArrowRight,
  ShoppingBag,
  ChevronLeft,
  Ticket,
  ShieldCheck,
  Truck,
  RefreshCw,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { initialCakes } from "@/data/cakes";

export default function CartPage() {
  const [cartItems, setCartItems] = useState(
    initialCakes.slice(0, 2).map((item) => ({ ...item, quantity: 1 }))
  );

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const freeDeliveryThreshold = 100; // ১০০ ডলার হলে ডেলিভারি ফ্রি
  const deliveryFee = subtotal > freeDeliveryThreshold ? 0 : 5.0;
  const progress = Math.min((subtotal / freeDeliveryThreshold) * 100, 100);

  const updateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item._id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item._id !== id));
  };

  return (
    <main className="min-h-screen bg-[#fffafb] pt-28 pb-20">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Side: Items & Progression */}
          <div className="lg:col-span-7">
            <header className="mb-8">
              <Link
                href="/cakes"
                className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-pink-500 transition-all mb-4 group"
              >
                <ChevronLeft
                  size={14}
                  className="group-hover:-translate-x-1 transition-transform"
                />{" "}
                Back to shop
              </Link>
              <h1 className="text-4xl font-black text-slate-800 italic">
                Shopping <span className="text-pink-500">Bag</span>
              </h1>
            </header>

            {/* 1. Free Delivery Progress - খালি ভাব দূর করবে */}
            <div className="bg-white p-6 rounded-[32px] border border-pink-50 mb-8 shadow-sm">
              <div className="flex justify-between items-center mb-3">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 flex items-center gap-2">
                  <Truck size={14} className="text-pink-500" />
                  {subtotal >= freeDeliveryThreshold
                    ? "You've unlocked free delivery!"
                    : `Add $${(freeDeliveryThreshold - subtotal).toFixed(
                        2
                      )} more for free delivery`}
                </p>
                <span className="text-[10px] font-black text-pink-500">
                  {Math.round(progress)}%
                </span>
              </div>
              <div className="h-1.5 w-full bg-pink-50 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  className="h-full bg-pink-500"
                />
              </div>
            </div>

            {/* Items List */}
            <div className="space-y-4">
              <AnimatePresence mode="popLayout">
                {cartItems.length > 0 ? (
                  cartItems.map((item) => (
                    <motion.div
                      key={item._id}
                      layout
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="bg-white p-5 rounded-[32px] border border-pink-50 flex items-center gap-5 hover:shadow-md transition-all"
                    >
                      <div className="relative w-24 h-24 rounded-[24px] overflow-hidden bg-pink-50 shrink-0 shadow-inner">
                        <Image
                          src={item.imageUrl}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3 className="font-black text-slate-800 text-base mb-1">
                          {item.name}
                        </h3>
                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">
                          {item.weight}
                        </p>
                        <div className="flex items-center gap-4 mt-3 lg:hidden">
                          {/* Mobile Quantity control placeholder */}
                        </div>
                      </div>

                      <div className="hidden md:flex items-center bg-slate-50 rounded-2xl p-1.5 border border-slate-100">
                        <button
                          onClick={() => updateQuantity(item._id, -1)}
                          className="w-8 h-8 flex items-center justify-center hover:bg-white rounded-xl transition-all text-slate-500 hover:shadow-sm"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-10 text-center text-xs font-black text-slate-800">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item._id, 1)}
                          className="w-8 h-8 flex items-center justify-center hover:bg-white rounded-xl transition-all text-slate-500 hover:shadow-sm"
                        >
                          <Plus size={14} />
                        </button>
                      </div>

                      <div className="text-right ml-4">
                        <p className="text-sm font-black text-slate-800 mb-2">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                        <button
                          onClick={() => removeItem(item._id)}
                          className="text-slate-300 hover:text-red-500 transition-colors"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <div className="text-center py-20 bg-white rounded-[40px] border border-pink-50">
                    <ShoppingBag
                      className="mx-auto text-pink-100 mb-4"
                      size={64}
                    />
                    <h2 className="text-xl font-black text-slate-400 uppercase tracking-widest">
                      Bag is empty
                    </h2>
                    <motion.div
                      whileHover={{ y: -4 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-block mt-8"
                    >
                      <Link
                        href="/cakes"
                        className="group relative flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-4xl font-black uppercase tracking-[0.2em] text-[10px] transition-all duration-300 hover:bg-pink-500 hover:shadow-[0_20px_40px_rgba(236,72,153,0.3)] overflow-hidden"
                      >
                        {/* Background Shine Effect */}
                        <div className="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />

                        <span className="relative z-10">Start Shopping</span>
                        <ArrowRight
                          size={16}
                          className="relative z-10 group-hover:translate-x-1 transition-transform"
                        />
                      </Link>
                    </motion.div>
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right Side: Order Summary */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900 text-white p-10 rounded-[48px] shadow-2xl shadow-pink-200/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-[100px] pointer-events-none" />

              <h2 className="text-2xl font-black italic mb-8">Order Summary</h2>

              {/* Coupon Section */}
              <div className="mb-8 group">
                <label className="text-[9px] font-black uppercase tracking-widest text-slate-500 mb-3 block ml-1">
                  Have a promo code?
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="NEXION20"
                    className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-5 py-3 text-sm font-bold focus:outline-none focus:border-pink-500 transition-all"
                  />
                  <button className="bg-white text-slate-900 px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-pink-500 hover:text-white transition-all">
                    Apply
                  </button>
                </div>
              </div>

              <div className="space-y-4 mb-10">
                <div className="flex justify-between text-[11px] font-bold uppercase tracking-widest text-slate-400">
                  <span>Subtotal</span>
                  <span className="text-white">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-[11px] font-bold uppercase tracking-widest text-slate-400">
                  <span>Shipping</span>
                  <span className="text-white">
                    {deliveryFee === 0 ? "FREE" : `$${deliveryFee.toFixed(2)}`}
                  </span>
                </div>
                <div className="h-px bg-white/10 my-4" />
                <div className="flex justify-between items-end">
                  <span className="text-sm font-black uppercase tracking-tighter">
                    Total Amount
                  </span>
                  <span className="text-3xl font-black text-pink-500 tracking-tighter">
                    ${(subtotal + deliveryFee).toFixed(2)}
                  </span>
                </div>
              </div>

              <button className="w-full bg-pink-500 hover:bg-white hover:text-slate-900 py-5 rounded-[24px] font-black uppercase tracking-[0.3em] text-[11px] flex items-center justify-center gap-3 transition-all group shadow-xl shadow-pink-500/20 active:scale-95">
                Secure Checkout
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </div>

            {/* 3. Trust Badges */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-3xl border border-pink-50 flex items-center gap-3">
                <ShieldCheck className="text-pink-500" size={20} />
                <span className="text-[9px] font-black uppercase tracking-tight text-slate-500 leading-tight">
                  Secure Payment Guaranteed
                </span>
              </div>
              <div className="bg-white p-5 rounded-3xl border border-pink-50 flex items-center gap-3">
                <RefreshCw className="text-pink-500" size={20} />
                <span className="text-[9px] font-black uppercase tracking-tight text-slate-500 leading-tight">
                  Easy Returns & Exchanges
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
