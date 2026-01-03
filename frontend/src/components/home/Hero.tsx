"use client";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import cakeImage from "@/app/assets/hero-page.jpg"; // Placeholder image path
import user1 from "@/app/assets/users/user (1).jpg"; // Placeholder user images
import user2 from "@/app/assets/users/user (2).jpg";
import user3 from "@/app/assets/users/user (3).jpg";
import user4 from "@/app/assets/users/user (4).jpg";

export default function Hero() {
  const users = [user1, user2, user3, user4];
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#fffafb] pt-20">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-pink-100 rounded-full blur-[120px] opacity-50" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-rose-100 rounded-full blur-[150px] opacity-50" />

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Side: Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="row-start-2 lg:row-start-auto flex items-center gap-2 bg-pink-50 w-fit px-4 py-1.5 rounded-full border border-pink-100 mb-6">
            <Star size={14} className="text-pink-500 fill-pink-500" />
            <span className="text-xs font-bold text-pink-600 uppercase tracking-widest">
              Premium Bakery in Town
            </span>
          </div>

          {/* Hero Title */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-slate-800 leading-[1.15] md:leading-[1.1] mb-4 md:mb-6 italic">
            Taste the{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-500 to-rose-400 font-black">
              Magic
            </span>{" "}
            <br className="hidden sm:block" />
            in Every Single Bite.
          </h1>

          {/* Hero Description */}
          <p className="text-base md:text-lg text-slate-500 font-medium max-w-lg mb-8 md:mb-10 leading-relaxed px-1 sm:px-0">
            From classic vanilla to exotic truffle, we craft artisanal cakes
            that make your special moments unforgettable.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-6 md:px-8 py-3.5 md:py-4 bg-slate-900 text-white rounded-2xl font-bold shadow-xl shadow-slate-200 flex items-center justify-center gap-3 group"
            >
              <Link href="/cart" className="flex items-center gap-3">
                Order Your Cake
              </Link>
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              className="w-full sm:w-auto"
            >
              <Link
                href="/cakes"
                className="flex items-center justify-center px-6 md:px-8 py-3.5 md:py-4 bg-white text-slate-700 border border-pink-100 rounded-2xl font-bold hover:bg-pink-50 transition-colors"
              >
                View Menu
              </Link>
            </motion.button>
          </div>

          <div className="mt-12 flex items-center gap-6">
            <div className="flex -space-x-3">
              <div className="flex -space-x-3">
                {users.map((user, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white overflow-hidden relative bg-linear-to-br from-pink-100 to-rose-50"
                  >
                    <Avatar className="w-full h-full bg-transparent rounded-full">
                      <AvatarImage src={user.src} />
                      <AvatarFallback className="bg-transparent flex items-center justify-center w-full h-full rounded-full text-pink-200 font-black">
                        U{i + 1}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-sm font-bold text-slate-600">
              <span className="text-pink-500">2.5k+</span> Happy Customers
            </p>
          </div>
        </motion.div>

        {/* Right Side: Animated Image Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative row-start-1 lg:row-start-auto mt-15 lg:mt-0"
        >
          {/* Main Image Container */}
          <div className="relative w-full aspect-square max-w-125 mx-auto">
            {/* Floating Effect for the Cake Image */}

            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="w-full h-full relative z-10 bg-linear-to-br from-pink-100 to-rose-50 rounded-[60px] flex items-center justify-center overflow-hidden border border-white shadow-2xl"
            >
              {/* Image Placeholder */}
              <Avatar className="w-full h-full bg-transparent rounded-[60px]">
                <AvatarImage src={cakeImage.src} className="rounded-[60px]" />
                <AvatarFallback className="bg-transparent">
                  <div className="text-pink-200 font-black text-8xl uppercase opacity-20 rotate-12 select-none">
                    Cake
                  </div>
                </AvatarFallback>
              </Avatar>
              {/* Jokhoni cake image thakbe, ekhane <Image /> tag hobe */}
            </motion.div>

            {/* Decorative Elements around the cake */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-2 border-dashed border-pink-200 rounded-full scale-110 z-0"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
