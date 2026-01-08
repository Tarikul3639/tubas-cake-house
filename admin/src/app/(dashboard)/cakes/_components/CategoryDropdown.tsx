"use client";
import React, { useState } from "react";
import { ChevronDown, Check, Tag } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { CakeCategory } from "@/types/cakes";

const CATEGORIES: CakeCategory[] = [
  "Signature",
  "Birthday",
  "Wedding",
  "Cupcake",
  "Chocolate",
  "Custom",
  "Anniversary",
];

export function CategoryDropdown({
  selected,
  setSelected,
}: {
  selected: string;
  setSelected: (category: string) => void;
}) {
  return (
    <DropdownMenuContent
      className="w-56 rounded-[24px] p-2 border-slate-100 shadow-xl shadow-pink-100/20"
      align="end"
    >
      <DropdownMenuLabel className="text-[9px] font-black uppercase tracking-widest text-slate-400 px-3 py-2">
        Select Category
      </DropdownMenuLabel>
      <DropdownMenuSeparator className="bg-slate-50" />
      {CATEGORIES.map((cake) => (
        <DropdownMenuItem
          key={cake}
          onClick={() => setSelected(cake)}
          className={cn(
            "flex items-center justify-between px-3 py-2.5 rounded-xl cursor-pointer text-xs font-bold transition-colors mb-1 last:mb-0",
            selected === cake
              ? "bg-pink-50 text-pink-600"
              : "text-slate-600 hover:bg-slate-50"
          )}
        >
          {cake}
          {selected === cake && <Check size={14} className="text-pink-500" />}
        </DropdownMenuItem>
      ))}
    </DropdownMenuContent>
  );
}
