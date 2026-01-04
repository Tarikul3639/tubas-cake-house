"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { CakeCard } from "@/components/cards/CakeCard";
import { StaticImageData } from "next/image";
import cake1 from "@/app/assets/cakes/cake (5).jpg";
import cake2 from "@/app/assets/cakes/cake (6).jpg";
import cake3 from "@/app/assets/cakes/cake (7).jpg";
import cake4 from "@/app/assets/cakes/cake (4).jpg";

interface Cake {
  _id: string;
  name: string;
  price: number;
  rating: number;
  badge: string;
  imageUrl: StaticImageData;
  isLoved?: boolean;
  isInCart?: boolean;
}

const initialCakes: Cake[] = [
  {
    _id: "1",
    name: "Midnight Chocolate Truffle",
    price: 45.0,
    rating: 4.9,
    badge: "Bestseller",
    imageUrl: cake1,
    isLoved: true,
    isInCart: false,
  },
  {
    _id: "2",
    name: "Red Velvet Romance",
    price: 38.5,
    rating: 4.8,
    badge: "Trending",
    imageUrl: cake2,
    isLoved: false,
    isInCart: true,
  },
  {
    _id: "3",
    name: "Vanilla Bean Dream",
    price: 32.0,
    rating: 4.7,
    badge: "Classic",
    imageUrl: cake3,
    isLoved: true,
    isInCart: false,
  },
  {
    _id: "4",
    name: "Strawberry Cream Bliss",
    price: 42.0,
    rating: 5.0,
    badge: "New",
    imageUrl: cake4,
    isLoved: false,
    isInCart: true,
  },
  {
    _id: "5",
    name: "Lemon Zest Delight",
    price: 36.0,
    rating: 4.6,
    badge: "Popular",
    imageUrl: cake1,
    isLoved: false,
    isInCart: false,
  },
];

export default function PopularCakes() {
  const [cakes, setCakes] = useState<Cake[]>(initialCakes);

  const handleLoveClick = (id: string) => {
    setCakes((prevCakes) =>
      prevCakes.map((cake) =>
        cake._id === id ? { ...cake, isLoved: !cake.isLoved } : cake
      )
    );
  };

  const handleAddToCart = (id: string) => {
    setCakes((prevCakes) =>
      prevCakes.map((cake) =>
        cake._id === id ? { ...cake, isInCart: !cake.isInCart } : cake
      )
    );
  };

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
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-pink-600">
              Taste the Excellence
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-800 italic mb-4">
            Most Popular <span className="text-pink-500">Creations</span>
          </h2>
          <p className="text-slate-500 font-medium">
            Hand-picked delicacies that our community loves the most. Pure
            ingredients, pure joy.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {cakes.map((cake, index) => (
            <CakeCard
              key={cake._id}
              cake={cake}
              index={index}
              onLoveClick={handleLoveClick}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
