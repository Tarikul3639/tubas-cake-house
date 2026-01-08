"use client";
import React from "react";
import { Search, Filter, ArrowUpDown, Check, TrendingUp, Banknote, Package, Clock } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { ICategory } from "@/types/cakes";

interface FilterProps {
  searchTerm: string;
  setSearchTerm: (val: string) => void;
  resultsCount: number;
  selectedCategory: ICategory;
  setSelectedCategory: (val: ICategory) => void;
  sortBy: string;
  setSortBy: (val: string) => void;
}

const CATEGORIES: (ICategory)[] = ["All", "Signature", "Birthday", "Wedding", "Cupcake", "Chocolate"];

const SORT_OPTIONS = [
  { label: "Newest First", value: "newest", icon: Clock },
  { label: "Price: Low to High", value: "price-low", icon: Banknote },
  { label: "Price: High to Low", value: "price-high", icon: Banknote },
  { label: "Most Sold", value: "sales", icon: TrendingUp },
  { label: "Low Stock", value: "stock", icon: Package },
];

export function InventoryFilters({
  searchTerm,
  setSearchTerm,
  resultsCount,
  selectedCategory,
  setSelectedCategory,
  sortBy,
  setSortBy,
}: FilterProps) {
  return (
    <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
      {/* Search Bar */}
      <div className="relative w-full lg:w-125 group">
        <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-pink-500 transition-colors" size={18} />
        <input
          type="text"
          placeholder="Search by name, category, or tags..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-14 pr-6 py-3.5 bg-white border border-slate-200 rounded-[24px] text-sm focus:outline-none focus:ring-4 focus:ring-pink-500/5 focus:border-pink-200 transition-all font-normal font-sans"
        />
      </div>

      <div className="flex items-center gap-3 w-full lg:w-auto overflow-x-auto no-scrollbar pb-2 lg:pb-0">
        
        {/* Category Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className={cn(
              "flex items-center gap-2 px-5 py-3 bg-white border border-slate-100 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all outline-none shrink-0",
              selectedCategory !== "All" ? "border-pink-500 text-pink-600 shadow-sm" : "text-slate-600 hover:border-pink-200 hover:bg-slate-50"
            )}>
              <Filter size={14} /> 
              {selectedCategory === "All" ? "Category" : selectedCategory}
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 rounded-[24px] p-2 border-slate-100 shadow-xl shadow-pink-100/20" align="end">
            <DropdownMenuLabel className="text-[9px] font-black uppercase tracking-widest text-slate-400 px-3 py-2">Filter by Category</DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-slate-50" />
            {CATEGORIES.map((cat) => (
              <DropdownMenuItem
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={cn(
                  "flex items-center justify-between px-3 py-2.5 rounded-xl cursor-pointer text-xs font-bold transition-colors mb-1 last:mb-0",
                  selectedCategory === cat ? "bg-pink-50 text-pink-600" : "text-slate-600 hover:bg-slate-50"
                )}
              >
                {cat}
                {selectedCategory === cat && <Check size={14} />}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Sort Dropdown (Updated) */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className={cn(
              "flex items-center gap-2 px-5 py-3 bg-white border border-slate-100 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all outline-none shrink-0",
              sortBy !== "newest" ? "border-pink-500 text-pink-600 shadow-sm" : "text-slate-600 hover:border-pink-200 hover:bg-slate-50"
            )}>
              <ArrowUpDown size={14} /> 
              {SORT_OPTIONS.find(opt => opt.value === sortBy)?.label || "Sort By"}
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-64 rounded-[24px] p-2 border-slate-100 shadow-xl shadow-pink-100/20" align="end">
            <DropdownMenuLabel className="text-[9px] font-black uppercase tracking-widest text-slate-400 px-3 py-2">Sort Inventory</DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-slate-50" />
            {SORT_OPTIONS.map((option) => (
              <DropdownMenuItem
                key={option.value}
                onClick={() => setSortBy(option.value)}
                className={cn(
                  "flex items-center gap-3 px-3 py-3 rounded-xl cursor-pointer text-xs font-bold transition-colors mb-1 last:mb-0",
                  sortBy === option.value ? "bg-pink-50 text-pink-600" : "text-slate-600 hover:bg-slate-50"
                )}
              >
                <option.icon size={16} className={sortBy === option.value ? "text-pink-400" : "text-slate-400"} />
                <span className="flex-1">{option.label}</span>
                {sortBy === option.value && <Check size={14} className="text-pink-400" />}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="h-8 w-px bg-slate-200 mx-2 hidden lg:block" />
        
        <div className="px-4 py-2 bg-slate-900/5 rounded-full shrink-0">
          <p className="text-[10px] font-black text-slate-500 uppercase tracking-tighter whitespace-nowrap">
            <span className="text-pink-600">{resultsCount}</span> Products Found
          </p>
        </div>
      </div>
    </div>
  );
}