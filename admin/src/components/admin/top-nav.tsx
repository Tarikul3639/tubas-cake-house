"use client";
import React from "react";
import { Search, Bell, Moon, Sun } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function TopNav() {
  return (
    <header className="h-20 bg-white border-b border-slate-200 px-8 flex items-center justify-between">
      {/* Search Bar */}
      <div className="relative w-96">
        <span className="absolute inset-y-0 left-3 flex items-center text-slate-400">
          <Search size={18} />
        </span>
        <input
          type="text"
          placeholder="Search for orders, cakes..."
          className="w-full pl-10 pr-4 py-2 bg-slate-100 border-none rounded-full text-sm focus:ring-2 focus:ring-pink-500 transition-all outline-none"
        />
      </div>

      {/* Actions */}
      <div className="flex items-center gap-6">
        {/* Notifications */}
        <button className="relative p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-all">
          <Bell size={22} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>

        {/* Theme Toggle (Optional) */}
        <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-all">
          <Moon size={22} />
        </button>

        <div className="h-8 w-px bg-slate-200 mx-2"></div>

        {/* Admin Profile */}
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-bold text-slate-800 group-hover:text-pink-600 transition-colors">Tuba Khan</p>
            <p className="text-[10px] text-slate-500 uppercase font-semibold">Super Admin</p>
          </div>
          <Avatar className="h-10 w-10 border-2 border-slate-100 group-hover:border-pink-200 transition-all">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>TK</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}