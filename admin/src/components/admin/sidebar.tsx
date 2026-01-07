"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  ShoppingBag,
  Users,
  CakeSlice,
  Settings,
  LogOut,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function Sidebar({
  isExpanded,
  setIsExpanded,
}: {
  isExpanded: boolean;
  setIsExpanded: (val: boolean) => void;
}) {
  const pathname = usePathname();
  const [isHovered, setIsHovered] = useState(false);

  const showFull = isExpanded || isHovered;

  const menuItems = [
    {
      name: "Dashboard",
      href: "/",
      icon: LayoutDashboard,
      color: "text-blue-500",
      bg: "bg-blue-500",
    },
    {
      name: "Orders",
      href: "/orders",
      icon: ShoppingBag,
      color: "text-orange-500",
      bg: "bg-orange-500",
    },
    {
      name: "Cakes",
      href: "/cakes",
      icon: CakeSlice,
      color: "text-pink-500",
      bg: "bg-pink-500",
    },
    {
      name: "Customers",
      href: "/customers",
      icon: Users,
      color: "text-emerald-500",
      bg: "bg-emerald-500",
    },
    {
      name: "Settings",
      href: "/settings",
      icon: Settings,
      color: "text-slate-500",
      bg: "bg-slate-500",
    },
  ];

  // Sidebar Variants for cleaner motion logic
  const sidebarVariants = {
    open: {
      x: 0,
      width: 280,
      transition: { type: "spring" as const, stiffness: 300, damping: 30 },
    },
    closedMobile: {
      x: -280,
      transition: { type: "spring" as const, stiffness: 300, damping: 30 },
    },
    collapsedDesktop: {
      x: 0,
      width: 80,
      transition: { type: "spring" as const, stiffness: 300, damping: 30 },
    },
  };

  return (
    <>
      {/* Mobile Backdrop with Blur Animation */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsExpanded(false)}
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-md z-40 md:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar Container */}
      <motion.aside
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={false}
        animate={
          isExpanded
            ? "open"
            : typeof window !== "undefined" && window.innerWidth < 768
            ? "closedMobile"
            : showFull
            ? "open"
            : "collapsedDesktop"
        }
        variants={sidebarVariants}
        className={cn(
          "fixed left-0 top-0 h-screen z-50 bg-white border-r border-slate-200/50 pt-20 overflow-hidden",
          showFull ? "shadow-2xl shadow-slate-200" : "shadow-none"
        )}
      >
        <nav className="px-3 space-y-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsExpanded(false)}
              >
                <motion.div
                  className={cn(
                    "flex items-center h-12 rounded-2xl cursor-pointer relative group",
                    isActive
                      ? "bg-white shadow-sm border border-slate-100"
                      : "hover:bg-slate-50"
                  )}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Shared Layout Animation for Active Background */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTabGlow"
                      className="absolute inset-0 bg-pink-50/40 rounded-2xl z-0"
                    />
                  )}

                  <div className="min-w-14 flex justify-center z-10">
                    <div
                      className={cn(
                        "p-2 rounded-xl transition-all duration-300",
                        isActive
                          ? `${item.bg} text-white shadow-lg`
                          : `${item.color} bg-slate-50`
                      )}
                    >
                      <item.icon size={20} />
                    </div>
                  </div>

                  <AnimatePresence mode="wait">
                    {showFull && (
                      <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        className={cn(
                          "text-sm font-bold tracking-tight z-10",
                          isActive ? "text-slate-900" : "text-slate-500"
                        )}
                      >
                        {item.name}
                      </motion.span>
                    )}
                  </AnimatePresence>

                  {isActive && showFull && (
                    <motion.div className="ml-auto mr-4 text-pink-500">
                      <ChevronRight size={16} />
                    </motion.div>
                  )}
                </motion.div>
              </Link>
            );
          })}
        </nav>

        {/* --- Logout Section --- */}
        <div className="absolute bottom-8 left-0 w-full px-4">
          <motion.button
            whileHover={{ backgroundColor: "#fff1f2", color: "#e11d48" }}
            className="flex items-center h-14 w-full rounded-2xl text-slate-400 bg-slate-50/50 transition-all group overflow-hidden border border-transparent hover:border-rose-100"
          >
            <div className="min-w-12 flex justify-center">
              <LogOut size={20} />
            </div>
            {showFull && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-xs font-black uppercase tracking-widest"
              >
                Sign Out
              </motion.span>
            )}
          </motion.button>
        </div>
      </motion.aside>
    </>
  );
}
