"use client";
import { motion } from "framer-motion";
import { Star, ShoppingCart, Heart } from "lucide-react";
import Image from "next/image";

const cakes = [
  {
    id: 1,
    name: "Midnight Chocolate Truffle",
    price: 45.00,
    rating: 4.9,
    badge: "Bestseller",
    image: "/cake1.png"
  },
  {
    id: 2,
    name: "Red Velvet Romance",
    price: 38.50,
    rating: 4.8,
    badge: "Trending",
    image: "/cake2.png"
  },
  {
    id: 3,
    name: "Vanilla Bean Dream",
    price: 32.00,
    rating: 4.7,
    badge: "Classic",
    image: "/cake3.png"
  },
  {
    id: 4,
    name: "Strawberry Cream Bliss",
    price: 42.00,
    rating: 5.0,
    badge: "New",
    image: "/cake4.png"
  }
];

export default function PopularCakes() {
  return (
    <section className="py-24 bg-[#fffafb]">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1.5 bg-pink-100/50 rounded-full border border-pink-100 mb-4"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-pink-600">Taste the Excellence</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-800 italic mb-4">
            Most Popular <span className="text-pink-500">Creations</span>
          </h2>
          <p className="text-slate-500 font-medium">
            Hand-picked delicacies that our community loves the most. Pure ingredients, pure joy.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {cakes.map((cake, index) => (
            <motion.div
              key={cake.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative bg-white rounded-[32px] p-4 border border-pink-50 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(255,182,193,0.15)] group-hover:-translate-y-2">
                
                {/* Badge & Wishlist */}
                <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-10">
                  <span className="px-3 py-1 bg-slate-900 text-white text-[10px] font-black uppercase tracking-wider rounded-full">
                    {cake.badge}
                  </span>
                  <button className="w-8 h-8 rounded-full bg-white/80 backdrop-blur-md border border-pink-50 flex items-center justify-center text-slate-400 hover:text-pink-500 transition-colors shadow-sm">
                    <Heart size={16} />
                  </button>
                </div>

                {/* Product Image Placeholder */}
                <div className="relative aspect-square w-full bg-pink-50/50 rounded-[24px] overflow-hidden mb-6 flex items-center justify-center">
                   <div className="text-pink-200 font-black text-4xl opacity-30 group-hover:scale-110 transition-transform duration-700">
                     Cake Image
                   </div>
                   {/* <Image src={cake.image} fill className="object-cover" /> */}
                   
                   {/* Hover Quick Add Button */}
                   <motion.button 
                     initial={{ opacity: 0, y: 10 }}
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                     className="absolute bottom-4 inset-x-4 py-3 bg-white/90 backdrop-blur-md rounded-xl shadow-lg flex items-center justify-center gap-2 text-sm font-bold text-slate-800 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 border border-white"
                   >
                     <ShoppingCart size={16} className="text-pink-500" />
                     Quick Add
                   </motion.button>
                </div>

                {/* Details */}
                <div className="px-2 pb-2">
                  <div className="flex items-center gap-1 mb-2">
                    <Star size={12} className="text-amber-400 fill-amber-400" />
                    <span className="text-xs font-bold text-slate-500">{cake.rating}</span>
                  </div>
                  <h3 className="text-lg font-black text-slate-800 leading-tight mb-2 group-hover:text-pink-600 transition-colors">
                    {cake.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-black text-slate-900">${cake.price.toFixed(2)}</span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Per Piece</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}