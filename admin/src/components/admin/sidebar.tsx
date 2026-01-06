"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  ShoppingBag, 
  Users, 
  CakeSlice, 
  Settings, 
  LogOut,
  ChevronRight
} from "lucide-react";
import { cn } from "@/lib/utils"; // standard tailwind-merge helper

const menuItems = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Orders", href: "/admin/orders", icon: ShoppingBag },
  { name: "Cakes/Products", href: "/admin/products", icon: CakeSlice },
  { name: "Customers", href: "/admin/customers", icon: Users },
  { name: "Settings", href: "/admin/settings", icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 h-screen bg-[#0f172a] text-slate-300 flex flex-col border-r border-slate-800">
      {/* Branding */}
      <div className="p-6">
        <div className="flex items-center gap-3 bg-slate-800/50 p-3 rounded-xl border border-slate-700">
          <div className="w-10 h-10 bg-pink-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
            T
          </div>
          <div>
            <h1 className="text-white font-bold leading-none">TCH Admin</h1>
            <span className="text-[10px] text-pink-400 uppercase tracking-widest">Management</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 space-y-1 mt-4">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 group",
                isActive 
                  ? "bg-pink-600 text-white shadow-lg shadow-pink-900/20" 
                  : "hover:bg-slate-800 hover:text-white"
              )}
            >
              <div className="flex items-center gap-3">
                <item.icon size={20} className={cn(isActive ? "text-white" : "text-slate-400 group-hover:text-pink-400")} />
                <span className="font-medium text-sm">{item.name}</span>
              </div>
              {isActive && <ChevronRight size={16} />}
            </Link>
          );
        })}
      </nav>

      {/* Footer / Logout */}
      <div className="p-4 border-t border-slate-800">
        <button className="flex items-center gap-3 w-full px-4 py-3 text-slate-400 hover:text-red-400 hover:bg-red-500/10 rounded-xl transition-all">
          <LogOut size={20} />
          <span className="font-medium text-sm">Logout</span>
        </button>
      </div>
    </aside>
  );
}