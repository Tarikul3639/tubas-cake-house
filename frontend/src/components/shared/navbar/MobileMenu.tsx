"use client";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { X, Instagram, Facebook, Twitter, ArrowUpRight } from "lucide-react";
import UserMenu from "./UserMenu";

export default function MobileMenu({
  isOpen,
  setIsOpen,
  navLinks,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  navLinks: { name: string; href: string }[];
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay with high blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-md z-[110] md:hidden"
          />

          <motion.div
            initial={{ x: "-100%" }} // Start off-screen to the left
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 left-0 w-full sm:w-[400px] bg-[#fffafb] z-[120] md:hidden shadow-[-10px_0_50px_rgba(0,0,0,0.1)] flex flex-col"
          >
            {/* 1. Header Section */}
            <div className="p-6 flex justify-between items-center">
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-pink-300">
                Menu
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="w-12 h-12 flex items-center justify-center bg-white border border-pink-100 rounded-full shadow-sm text-slate-800"
              >
                <X size={20} />
              </button>
            </div>

            {/* Marge */}
            <div className="flex-1 flex flex-col justify-between overflow-y-auto">
              {/* 2. Navigation with Numbers */}
              <nav className="flex-1 px-10 pt-4">
                <div className="space-y-6">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="group flex items-baseline space-x-4"
                      >
                        <span className="text-xs font-bold text-pink-300">
                          0{index + 1}
                        </span>
                        <div className="flex items-center space-x-2">
                          <span className="text-4xl font-extrabold text-slate-800 group-hover:text-pink-600 transition-colors tracking-tighter">
                            {link.name}
                          </span>
                          <ArrowUpRight
                            className="text-pink-200 group-hover:text-pink-600 group-hover:-translate-y-1 transition-all"
                            size={24}
                          />
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </nav>

              {/* 3. Bottom Section (User & Actions) */}
              <div className="p-8 space-y-6 bg-white border-t border-pink-50 rounded-t-[40px] shadow-[0_-10px_40px_rgba(255,182,193,0.1)]">
                {/* User Menu Integrated as a Card */}
                <div className="bg-pink-50/50 p-2 rounded-[28px] border border-pink-100/50">
                  <UserMenu variant="mobile" />
                </div>

                <div className="flex flex-col space-y-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-5 bg-slate-900 text-white rounded-2xl font-bold text-sm uppercase tracking-widest shadow-xl shadow-slate-200"
                  >
                    Order Custom Cake
                  </motion.button>

                  {/* Social links with modern look */}
                  <div className="flex justify-center space-x-8 pt-4">
                    <Link
                      href="#"
                      className="text-slate-400 hover:text-pink-500 transition-colors"
                    >
                      <Instagram size={20} />
                    </Link>
                    <Link
                      href="#"
                      className="text-slate-400 hover:text-pink-500 transition-colors"
                    >
                      <Facebook size={20} />
                    </Link>
                    <Link
                      href="#"
                      className="text-slate-400 hover:text-pink-500 transition-colors"
                    >
                      <Twitter size={20} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
