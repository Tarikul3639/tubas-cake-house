"use client";
import React, { useEffect, useState } from "react";
import { Menu, Search, Bell, X, CakeSlice } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import Link from "next/link";

interface TopNavProps {
  isExpanded: boolean;
  setIsExpanded: (val: boolean) => void;
}

export default function TopNav({ isExpanded, setIsExpanded }: TopNavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const notificationsRef = useOutsideClick(() => setShowNotifications(false));

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full h-16 flex items-center justify-between z-50 transition-all duration-300 px-4",
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm"
          : "bg-white border-b border-slate-100"
      )}
    >
      {/* Left: Hamburger & Modern Bakery Logo */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-2 hover:bg-slate-100 rounded-full transition-all text-slate-600 active:scale-95"
        >
          <Menu size={22} strokeWidth={1.5} />
        </button>

        <div className="relative flex items-center gap-2 group cursor-pointer">
          <Link href="/" className="absolute inset-0" />
          <div className="relative">
            {/* Project Themed Icon Container */}
            <div className="w-10 h-10 bg-linear-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-pink-100 group-hover:scale-105 group-hover:rotate-3 transition-all duration-300">
              {/* CakeSlice Icon jeta apnar bakery project-er theme highlight korbe */}
              <CakeSlice
                size={24}
                strokeWidth={2.5}
                className="drop-shadow-sm"
              />
            </div>
          </div>

          <div className="hidden md:block leading-tight">
            <h1 className="text-xl font-black tracking-tighter flex items-center gap-1">
              <span className="text-slate-800">Tuba's</span>
              <span className="bg-linear-to-r from-pink-600 to-rose-500 bg-clip-text text-transparent">
                Bakery
              </span>
            </h1>
            <div className="flex items-center gap-1.5">
              <span className="text-[9px] text-slate-400 font-bold uppercase tracking-[0.2em]">
                Admin Suite
              </span>
              <div className="w-1 h-1 bg-pink-300 rounded-full"></div>
              <span className="text-[9px] text-pink-400 font-bold uppercase tracking-widest">
                Premium
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Center: Modern Floating Search Bar */}
      <div className="flex-1 max-w-xl mx-6 hidden sm:block">
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-pink-500 transition-colors">
            <Search size={18} strokeWidth={2} />
          </div>
          <input
            type="text"
            placeholder="Search orders, cakes or analytics..."
            className="w-full bg-slate-50 border border-slate-200 py-2.5 pl-11 pr-4 rounded-2xl text-sm focus:bg-white focus:ring-4 focus:ring-pink-500/5 focus:border-pink-500/30 transition-all outline-none text-slate-700 placeholder:text-slate-400"
          />
          <div className="absolute inset-y-0 right-3 flex items-center">
            <kbd className="hidden lg:inline-block px-1.5 py-0.5 text-[10px] font-medium text-slate-400 bg-white border border-slate-200 rounded-md">
              ⌘K
            </kbd>
          </div>
        </div>
      </div>

      {/* Right: Notification & Profile */}
      <div className="flex items-center gap-2 md:gap-4">
        {/* Notification Button */}
        <div className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className={cn(
              "p-2.5 rounded-2xl transition-all relative",
              showNotifications
                ? "bg-pink-50 text-pink-600"
                : "text-slate-500 hover:bg-slate-100"
            )}
          >
            <Bell size={22} strokeWidth={1.5} />
            <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-pink-600 rounded-full ring-2 ring-white"></span>
          </button>

          {/* Notification Dropdown Placeholder */}
          {showNotifications && (
            <div
              ref={notificationsRef}
              className="absolute right-0 mt-3 w-80 bg-white border border-slate-200 rounded-3xl shadow-2xl p-4 animate-in fade-in zoom-in duration-200 origin-top-right"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-slate-800">Recent Alerts</h3>
                <button
                  onClick={() => setShowNotifications(false)}
                  className="text-slate-400 hover:text-slate-600 text-xs"
                >
                  Mark all as read
                </button>
              </div>
              <div className="space-y-3">
                <div className="p-3 bg-slate-50 rounded-2xl text-xs text-slate-600 border border-slate-100">
                  🍰{" "}
                  <span className="font-bold text-slate-800">New Order!</span>{" "}
                  #TCH-1092 just arrived.
                </div>
                <div className="p-3 bg-slate-50 rounded-2xl text-xs text-slate-600 border border-slate-100">
                  ⚠️{" "}
                  <span className="font-bold text-slate-800">Stock Alert:</span>{" "}
                  Vanilla Sponge is low.
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="h-8 w-px bg-slate-200 hidden md:block"></div>

        {/* User Profile */}
        <div className="flex items-center pl-1">
          <button className="flex items-center gap-2 p-1 pr-3 hover:bg-slate-50 rounded-2xl transition-all border border-transparent hover:border-slate-100">
            <Avatar className="h-9 w-9 ring-2 ring-pink-50">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback className="bg-pink-100 text-pink-600 text-xs font-bold">
                TK
              </AvatarFallback>
            </Avatar>
            <div className="text-left hidden lg:block">
              <p className="text-xs font-bold text-slate-800">Tuba Khan</p>
              <p className="text-[9px] text-pink-500 font-bold uppercase tracking-tighter">
                Super Admin
              </p>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}
