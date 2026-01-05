"use client";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import {
  Star,
  ShoppingBag,
  Heart,
  ArrowLeft,
  ShieldCheck,
  Truck,
  Clock,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { initialCakes } from "@/data/cakes";
import { CakeCard } from "@/components/cards/CakeCard";
import { useState } from "react";

import image1 from "@/app/assets/cakes/cake (5).jpg";
import image2 from "@/app/assets/cakes/cake (6).jpg";
import image3 from "@/app/assets/cakes/cake (7).jpg";

export default function CakeDetailsPage() {
  const params = useParams();
  // params._id
  const cake = initialCakes.find((item) => item._id === params._id);

  if (!cake) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-[#fffafb]">
        <p className="font-black uppercase tracking-widest text-slate-400">
          Cake Not Found!
        </p>
        <Link href="/cakes" className="text-pink-500 font-bold underline">
          Go Back
        </Link>
      </div>
    );
  }

  // Related Products according to the current cake
  const relatedCakes = initialCakes
    .filter((item) => item._id !== params._id)
    .filter((item) => item.category === cake.category)
    .slice(0, 4);

  const [cakes, setCakes] = useState(relatedCakes);

  const onLoveClick = (id: string) => {
    setCakes((prevCakes) =>
      prevCakes.map((cake) =>
        cake._id === id ? { ...cake, isLoved: !cake.isLoved } : cake
      )
    );
  };

  const onAddToCart = (id: string) => {
    setCakes((prevCakes) =>
      prevCakes.map((cake) =>
        cake._id === id ? { ...cake, isInCart: !cake.isInCart } : cake
      )
    );
  };

  // Image Gallery State
  const images = [image1, image2, image3, image1];

  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <main className="min-h-screen bg-[#fffafb] pt-24 pb-20">
      <div className="container mx-auto px-6">
        {/* Back Button */}
        <Link
          href="/cakes"
          className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-pink-500 mb-8 transition-colors group"
        >
          <ArrowLeft
            size={14}
            className="group-hover:-translate-x-1 transition-transform"
          />{" "}
          Back to Collection
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image Gallery Section */}
          <div className="flex flex-col-reverse sm:flex-row-reverse gap-4 h-full items-start">
            {/* Thumbnails Column - Vertical on Desktop, Horizontal on Mobile */}
            <div className="flex flex-row sm:flex-col gap-3 w-full sm:w-24 shrink-0">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={`relative aspect-square w-full rounded-2xl overflow-hidden border-2 transition-all duration-300 ${
                    activeImage === img
                      ? "border-pink-500 ring-4 ring-pink-50"
                      : "border-white hover:border-pink-200 shadow-sm"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${cake.name} view ${idx}`}
                    fill
                    className="object-cover"
                  />
                  {/* Active Overlay */}
                  {activeImage !== img && (
                    <div className="absolute inset-0 bg-white/40 group-hover:bg-transparent transition-colors" />
                  )}
                </button>
              ))}
            </div>

            {/* Main Active Image - Large Display */}
            <div className="flex-1 w-full">
              <motion.div
                key={activeImage.src} 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="relative aspect-square w-full rounded-[40px] overflow-hidden border-2 border-pink-100 shadow-2xl shadow-pink-100/50"
              >
                <Image
                  src={activeImage}
                  alt={cake.name}
                  fill
                  className="object-cover"
                  priority
                />

                {/* Badge on Main Image */}
                <div className="absolute top-6 left-6 z-10">
                  <span className="bg-slate-900/90 backdrop-blur-md text-white px-4 py-2 rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-xl">
                    {cake.badge}
                  </span>
                </div>

                {/* Aesthetic Inner Shadow/Gradient */}
                <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.02)]" />
              </motion.div>
            </div>
          </div>

          {/* Right: Info Section - Refined sizes */}
          <div className="space-y-6">
            <header>
              <div className="flex items-center gap-2 mb-3 text-amber-400">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={12}
                      fill={
                        i < Math.floor(cake.rating) ? "currentColor" : "none"
                      }
                    />
                  ))}
                </div>
                <span className="text-xs font-black text-slate-800 ml-1">
                  {cake.rating}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-black text-slate-800 italic leading-[1.1]">
                {cake.name.split(" ").slice(0, -1).join(" ")}{" "}
                <span className="text-pink-500">
                  {cake.name.split(" ").pop()}
                </span>
              </h1>

              <p className="mt-4 text-slate-500 text-sm font-medium leading-relaxed max-w-md">
                আমাদের এই {cake.name} তৈরি করা হয়েছে প্রিমিয়াম ইনগ্রেডিয়েন্টস
                দিয়ে। প্রতিটি বাইটে আপনি পাবেন আসল স্বাদের নিশ্চয়তা। ঘরোয়া
                অনুষ্ঠানে বা গিফট হিসেবে এটি সেরা পছন্দ।
              </p>
            </header>

            {/* Price & Weight */}
            <div className="flex items-center gap-4">
              <div className="text-4xl font-black text-slate-800 tracking-tighter">
                ${cake.price.toFixed(2)}
              </div>
              <div className="h-8 w-px bg-slate-200 mx-2" />
              <div className="bg-white border border-pink-50 px-3 py-1.5 rounded-xl flex items-center gap-2 shadow-sm">
                <span className="text-[9px] font-black uppercase text-slate-400">
                  Weight:
                </span>
                <span className="text-xs font-black text-pink-500">
                  {cake.weight}
                </span>
              </div>
            </div>

            {/* Buttons - More compact */}
            <div className="flex gap-3 pt-4">
              <button className="flex-2 bg-slate-900 text-white py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 hover:bg-pink-500 transition-all shadow-lg active:scale-95">
                <ShoppingBag size={16} /> Add to Cart
              </button>
              <button className="flex-1 max-w-15 aspect-square bg-white border border-pink-50 text-pink-500 rounded-2xl flex items-center justify-center hover:bg-pink-50 transition-all shadow-sm group active:scale-95">
                <Heart
                  size={20}
                  className={
                    cake.isLoved
                      ? "fill-pink-500"
                      : "group-hover:fill-pink-500 transition-all"
                  }
                />
              </button>
            </div>

            <hr className="border-pink-50/50" />

            {/* Features - Minimalist */}
            <div className="grid grid-cols-3 gap-2">
              {[
                { icon: <ShieldCheck size={18} />, label: "Quality" },
                { icon: <Truck size={18} />, label: "Fast Delivery" },
                { icon: <Clock size={18} />, label: "Freshly Baked" },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-1.5 p-2">
                  <div className="text-pink-400">{item.icon}</div>
                  <span className="text-[7px] font-black uppercase tracking-tighter text-slate-400 text-center">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --- Related Products Section --- */}
        <section className="mt-24 border-t border-pink-50 pt-16">
          <div className="flex items-center justify-between mb-10">
            <div>
              <p className="text-pink-500 font-black uppercase tracking-[0.3em] text-[9px] mb-2">
                More To Love
              </p>
              <h2 className="text-2xl md:text-3xl font-black text-slate-800 italic">
                Related <span className="text-pink-500">Products</span>
              </h2>
            </div>
            <Link
              href="/cakes"
              className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-pink-500 transition-colors"
            >
              View All
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedCakes.map((item, index) => (
              <CakeCard
                key={item._id}
                cake={item}
                index={index}
                onLoveClick={onLoveClick}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
