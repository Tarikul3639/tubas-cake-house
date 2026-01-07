"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  MoreVertical,
  Check,
  Clock,
  Settings,
  Truck,
  XCircle,
  PackageCheck,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { OrderStatus } from "@/types/order";

// Status Options with Nexion branding colors
const options = [
  {
    label: "Pending",
    value: "pending",
    icon: Clock,
    color: "text-amber-500 bg-amber-50",
    dot: "bg-amber-500",
  },
  {
    label: "Processing",
    value: "processing",
    icon: Settings,
    color: "text-blue-500 bg-blue-50",
    dot: "bg-blue-500",
  },
  {
    label: "Shipped",
    value: "shipped",
    icon: Truck,
    color: "text-purple-500 bg-purple-50",
    dot: "bg-purple-500",
  },
  {
    label: "Delivered",
    value: "delivered",
    icon: PackageCheck,
    color: "text-emerald-500 bg-emerald-50",
    dot: "bg-emerald-500",
  },
  {
    label: "Cancelled",
    value: "cancelled",
    icon: XCircle,
    color: "text-rose-500 bg-rose-50",
    dot: "bg-rose-500",
  },
];

interface StatusDropdownProps {
  currentStatus: OrderStatus;
  onStatusChange: (newValue: OrderStatus) => void;
  title?: string;
}

export const StatusDropdown = ({
  currentStatus,
  onStatusChange,
  title = "Update State",
}: StatusDropdownProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="p-2.5 rounded-xl text-slate-400 hover:bg-white hover:text-pink-600 hover:shadow-sm border border-transparent hover:border-slate-100 transition-all active:scale-90 outline-none data-[state=open]:bg-white data-[state=open]:text-pink-600 data-[state=open]:border-slate-100">
          <MoreVertical size={18} strokeWidth={2.5} />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        sideOffset={8}
        className="w-56 bg-white border-slate-100 rounded-[22px] p-2 shadow-[0_15px_40px_rgba(0,0,0,0.08)] animate-in fade-in zoom-in-95 duration-200"
      >
        <DropdownMenuLabel className="px-3 py-3">
          <div className="flex flex-col gap-0.5">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] italic">
              Management
            </span>
            <span className="text-[12px] font-black text-slate-900 uppercase tracking-tight">
              {title}
            </span>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator className="bg-slate-50 mx-2 mb-1" />

        <div className="space-y-1">
          {options.map((opt) => {
            const isSelected = currentStatus === opt.value;
            return (
              <DropdownMenuItem
                key={opt.value}
                onClick={() => onStatusChange(opt.value as OrderStatus)}
                className={cn(
                  "flex items-center gap-3 px-3 py-3 rounded-[14px] transition-all cursor-pointer outline-none group focus:bg-slate-50",
                  isSelected ? "bg-slate-50/50" : ""
                )}
              >
                <div
                  className={cn(
                    "p-2 rounded-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-sm",
                    opt.color
                  )}
                >
                  <opt.icon size={14} strokeWidth={3} className={opt.color} />
                </div>

                <div className="flex flex-col">
                  <span className={cn(
                    "text-[11px] font-black uppercase tracking-wide transition-colors",
                    isSelected ? "text-slate-900" : "text-slate-500 group-hover:text-slate-900"
                  )}>
                    {opt.label}
                  </span>
                </div>

                {isSelected ? (
                  <motion.div
                    layoutId="activeStatus"
                    className="ml-auto flex items-center gap-1.5"
                  >
                    <div className={cn("w-1.5 h-1.5 rounded-full animate-pulse", opt.dot)} />
                    <Check size={14} strokeWidth={4} className="text-emerald-500" />
                  </motion.div>
                ) : (
                  <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className={cn("w-1 h-4 rounded-full opacity-20", opt.dot)} />
                  </div>
                )}
              </DropdownMenuItem>
            );
          })}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};