"use client";
import React from "react";
import { ChevronDown, Check, Percent, Banknote } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

interface DiscountTypeProps {
  currentType: "percentage" | "flat" | undefined;
  onTypeChange: (type: "percentage" | "flat") => void;
}

export function DiscountTypeDropdown({
  currentType,
  onTypeChange,
}: DiscountTypeProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="w-full h-12.5 flex items-center justify-between px-5 bg-pink-50/50 border border-pink-100 rounded-2xl hover:bg-pink-100/50 transition-all outline-none group">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 bg-white rounded-lg shadow-sm">
              {currentType === "percentage" ? (
                <Percent size={14} className="text-pink-600" />
              ) : (
                <Banknote size={14} className="text-emerald-600" />
              )}
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-700">
              {currentType === "percentage" ? "Percent" : "Flat"}
            </span>
          </div>
          <ChevronDown
            size={14}
            className="text-slate-400 group-hover:text-pink-500 transition-transform"
          />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-48 rounded-2xl p-1.5 border-slate-100 shadow-xl animate-in fade-in zoom-in-95 duration-200"
      >
        <DropdownMenuItem
          onClick={() => onTypeChange("percentage")}
          className={cn(
            "flex items-center justify-between px-3 py-2.5 rounded-xl cursor-pointer text-xs font-bold transition-colors mb-1 last:mb-0",
            currentType === "percentage"
            ? "bg-pink-50 text-pink-600"
              : "text-slate-600 hover:bg-slate-50"
          )}
        >
          <div className="flex items-center gap-2">
            <Percent size={12} /> Percentage
          </div>
          {currentType === "percentage" && <Check size={12} className="text-pink-500" />}
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={() => onTypeChange("flat")}
          className={cn(
            "flex items-center justify-between px-3 py-2.5 rounded-xl cursor-pointer text-[10px] font-black uppercase tracking-widest transition-all",
            currentType === "flat"
              ? "bg-pink-600 text-white"
              : "text-slate-600 hover:bg-slate-50"
          )}
        >
          <div className="flex items-center gap-2">
            <Banknote size={12} /> Flat Amount
          </div>
          {currentType === "flat" && <Check size={12} />}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
