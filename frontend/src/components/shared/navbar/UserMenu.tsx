"use client";
import { ChevronDown, User, Settings, Package, LogOut, Heart } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useOutsideClick } from "@/hooks/useOutsideClick";

interface UserMenuProps {
  variant?: "desktop" | "mobile";
}

export default function UserMenu({ variant = "desktop" }: UserMenuProps) {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  // Use the custom hook to detect outside clicks
  const menuRef = useOutsideClick(() => {
    if (isUserMenuOpen) setIsUserMenuOpen(false);
  });

  const menuItems = [
    { label: "Profile Settings", href: "/profile", icon: <Settings size={16} /> },
    { label: "Order Tracking", href: "/orders", icon: <Package size={16} /> },
    { label: "My Wishlist", href: "/wishlist", icon: <Heart size={16} /> },
  ];

  // Desktop Style
  if (variant === "desktop") {
    return (
      <div className="relative hidden md:block">
        <button
          onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
          className="flex items-center p-1 pr-3 bg-white border border-pink-100 rounded-full transition-all hover:shadow-md active:scale-95"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-pink-500 to-rose-400 flex items-center justify-center text-white shadow-inner">
            <User size={18} />
          </div>
          <ChevronDown
            size={14}
            className={`ml-2 text-gray-400 transition-transform duration-300 ${
              isUserMenuOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        <AnimatePresence>
          {isUserMenuOpen && (
            <motion.div
                ref={menuRef}
              initial={{ opacity: 0, scale: 0.9, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 15 }}
              className="absolute right-0 mt-4 w-60 bg-white/95 backdrop-blur-xl border border-pink-50 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-2 z-[110]"
            >
              <div className="px-4 py-3 border-b border-pink-50 mb-2">
                <p className="text-[10px] text-pink-400 uppercase tracking-[0.2em] font-black">Member</p>
                <p className="text-sm font-bold text-slate-800">Tuba Akter</p>
              </div>
              
              <div className="space-y-1">
                {menuItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="flex items-center space-x-3 px-4 py-2.5 text-sm text-slate-600 hover:bg-pink-50 hover:text-pink-600 rounded-xl transition-all group"
                  >
                    <span className="text-slate-400 group-hover:text-pink-500">{item.icon}</span>
                    <span className="font-medium">{item.label}</span>
                  </Link>
                ))}
              </div>

              <div className="mt-2 pt-2 border-t border-pink-50">
                <button className="flex items-center space-x-3 w-full px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 rounded-xl font-bold transition-colors">
                  <LogOut size={16} />
                  <span>Sign Out</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  // Mobile Style
  return (
    <div className="w-full mt-4">
      <button 
        onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
        className="flex items-center justify-between w-full p-4 bg-pink-50/50 rounded-2xl border border-pink-100"
      >
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-pink-500 to-rose-400 flex items-center justify-center text-white">
            <User size={20} />
          </div>
          <div className="text-left">
            <p className="text-xs text-pink-500 font-bold uppercase tracking-wider">Account</p>
            <p className="text-sm font-bold text-slate-800">Tuba Akter</p>
          </div>
        </div>
        <ChevronDown size={18} className={`text-pink-400 transition-transform duration-300 ${isUserMenuOpen ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {isUserMenuOpen && (
          <motion.div
            ref={menuRef}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-1 gap-2 mt-3 pl-2">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center space-x-4 p-3 text-slate-600 hover:text-pink-600 font-semibold"
                >
                  <span className="p-2 bg-white rounded-lg shadow-sm">{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              ))}
              <button className="flex items-center space-x-4 p-3 text-red-500 font-bold">
                <span className="p-2 bg-red-50 rounded-lg"><LogOut size={16} /></span>
                <span>Sign Out</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}