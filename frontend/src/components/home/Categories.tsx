"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const categories = [
  {
    id: 1,
    name: "Wedding Cakes",
    count: "120+ Designs",
    image: "/cat-wedding.jpg", // placeholder path
    color: "bg-rose-50",
  },
  {
    id: 2,
    name: "Cupcakes",
    count: "45 Flavors",
    image: "/cat-cupcake.jpg",
    color: "bg-pink-50",
  },
  {
    id: 3,
    name: "Birthday Cakes",
    count: "300+ Styles",
    image: "/cat-birthday.jpg",
    color: "bg-amber-50",
  },
  {
    id: 4,
    name: "Pastries",
    count: "20+ Varieties",
    image: "/cat-pastry.jpg",
    color: "bg-blue-50",
  },
];

export default function Categories() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <p className="text-pink-500 font-black uppercase tracking-[0.3em] text-xs mb-3">Explore</p>
            <h2 className="text-4xl md:text-5xl font-black text-slate-800 italic">
              Our Sweet <span className="text-pink-500">Categories</span>
            </h2>
          </div>
          <p className="text-slate-500 font-medium max-w-xs md:text-right">
            Every category is crafted with love and the finest ingredients.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className={`relative aspect-4/5 ${category.color} rounded-[40px] overflow-hidden border border-white shadow-xl shadow-slate-100 transition-all group-hover:shadow-pink-100 group-hover:shadow-2xl`}>
                {/* Text Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
                  <h3 className="text-2xl font-black text-slate-800 leading-tight mb-1">{category.name}</h3>
                  <p className="text-sm font-bold text-pink-500 uppercase tracking-wider">{category.count}</p>
                </div>

                {/* Decorative Circle Background */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/50 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />

                {/* Image Placeholder - Jokhoni real image thakbe */}
                <div className="absolute top-10 right-0 w-full h-full opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 flex items-center justify-center italic font-black text-6xl text-pink-200">
                  {/* <Image src={category.image} alt={category.name} fill className="object-contain" /> */}
                  Cake
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}