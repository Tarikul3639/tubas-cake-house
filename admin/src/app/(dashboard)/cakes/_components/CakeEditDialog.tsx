"use client";
import React from "react";
import { ChevronDown, Edit2, Edit3, Tag, X } from "lucide-react";
import { CakeProduct } from "@/types/cakes";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DialogContent,
  DialogTitle,
  DialogClose,
  DialogDescription,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { CategoryDropdown } from "./CategoryDropdown";
import { DiscountTypeDropdown } from "./DiscountTypeDropdown";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function CakeEditDialog({ cake }: { cake: CakeProduct }) {

  return (
    <DialogContent className="max-w-3xl rounded-[48px] p-0 overflow-hidden border-none [&>button]:hidden">
      <DialogDescription className="sr-only">
        Edit product details, variants, and offers for {cake.name}
      </DialogDescription>

      <div className="flex justify-between items-center p-8 bg-slate-950 text-white">
        <div>
          <DialogTitle className="text-2xl font-black italic uppercase tracking-tighter flex items-center gap-3">
            <Edit2 size={24} className="text-pink-500" /> System Management
          </DialogTitle>
          <p className="text-xs font-bold text-slate-400 mt-1 uppercase tracking-widest leading-none">
            Product ID: {cake._id}
          </p>
        </div>
        <DialogClose className="p-3 bg-white/10 hover:bg-rose-500 rounded-full transition-all">
          <X size={20} />
        </DialogClose>
      </div>

      <div className="p-8 bg-white max-h-[80vh] overflow-y-auto">
        <Tabs defaultValue="basic" className="w-full">
          <TabsList className="bg-slate-100 p-1 rounded-2xl mb-8 w-full justify-start gap-2 h-auto flex-wrap border-none">
            <TabsTrigger
              value="basic"
              className="rounded-xl px-6 py-3 data-[state=active]:bg-white data-[state=active]:shadow-sm font-black text-[10px] uppercase tracking-widest"
            >
              General
            </TabsTrigger>
            <TabsTrigger
              value="variants"
              className="rounded-xl px-6 py-3 data-[state=active]:bg-white font-black text-[10px] uppercase tracking-widest"
            >
              Variants
            </TabsTrigger>
            <TabsTrigger
              value="offer"
              className="rounded-xl px-6 py-3 data-[state=active]:bg-pink-600 data-[state=active]:text-white font-black text-[10px] uppercase tracking-widest"
            >
              Offers
            </TabsTrigger>
            <TabsTrigger
              value="seo"
              className="rounded-xl px-6 py-3 data-[state=active]:bg-slate-900 data-[state=active]:text-white font-black text-[10px] uppercase tracking-widest"
            >
              SEO Meta
            </TabsTrigger>
          </TabsList>

          <TabsContent
            value="basic"
            className="space-y-6 animate-in fade-in-50 duration-300"
          >
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">
                  Product Name
                </label>
                <input
                  defaultValue={cake.name}
                  className="w-full px-5 py-2.5 text-sm bg-slate-100 rounded-2xl font-bold border-none ring-1 ring-slate-100 focus:ring-1 focus:ring-pink-500 outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1 flex items-center gap-1">
                  <Tag size={10} /> Category
                </label>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="w-full flex items-center justify-between gap-2 px-5 py-3 bg-slate-100 border border-slate-100 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all outline-none shrink-0">
                      <span className={cn(!cake.category && "text-slate-400")}>
                        {cake.category || "Select Category"}
                      </span>
                      <ChevronDown size={16} className="text-slate-400" />
                    </button>
                  </DropdownMenuTrigger>
                  <CategoryDropdown
                    selected={cake.category}
                    setSelected={(category) => {
                      cake.category = category as typeof cake.category;
                    }}
                  />
                </DropdownMenu>

                {/* Hidden Input for Form Submission */}
                <input type="hidden" name="category" value={cake.category} />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">
                Short Description
              </label>
              <textarea
                defaultValue={cake.shortDescription}
                className="w-full px-5 py-3 bg-slate-100 rounded-2xl font-bold border-none ring-1 ring-slate-100 h-24 focus:ring-1 focus:ring-pink-500 outline-none transition-all resize-none"
              />
            </div>
          </TabsContent>

          <TabsContent
            value="variants"
            className="space-y-6 bg-slate-50 p-8 rounded-[40px] border border-slate-100 animate-in zoom-in-95 duration-300"
          >
            {/* Variants Management UI Here */}
            <p className="text-sm font-bold text-slate-600 italic">
              Variant management interface coming soon.
            </p>
          </TabsContent>

          <TabsContent
            value="offer"
            className="space-y-6 bg-pink-50/50 p-8 rounded-[40px] border border-pink-100 animate-in zoom-in-95 duration-300"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-black italic text-pink-600 uppercase tracking-tighter text-xl">
                Campaign Settings
              </h3>
              <div
                className={cn(
                  "px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-sm",
                  cake.offer?.isActive
                    ? "bg-emerald-500 text-white"
                    : "bg-slate-200 text-slate-500"
                )}
              >
                {cake.offer?.isActive ? "Active" : "Disabled"}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <p className="text-[9px] font-black text-pink-500/70 uppercase tracking-[0.2em] ml-1">
                  Discount Value
                </p>
                <div className="relative h-12.5">
                  <input
                    type="number"
                    defaultValue={cake.offer?.value}
                    className="w-full px-5 py-2.5 font-black text-base text-pink-600 ring-1 ring-pink-200 focus:ring-2 focus:ring-pink-500 bg-pink-50/50 border border-pink-100 rounded-2xl hover:bg-pink-100/50 transition-all outline-none group"
                    placeholder={cake.offer?.type === "percentage" ? "%" : "BDT"}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-[9px] font-black text-pink-500/70 uppercase tracking-[0.2em] ml-1">
                  Discount Type
                </p>
                <DiscountTypeDropdown
                  currentType={cake.offer?.type}
                  onTypeChange={(type) => {
                    /* Handle change */
                  }}
                />
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <button className="w-full mt-10 py-6 bg-slate-900 text-white rounded-[28px] font-black uppercase tracking-[0.3em] hover:bg-pink-600 transition-all shadow-2xl shadow-slate-200 active:scale-[0.98]">
          Sync Changes to Database
        </button>
      </div>
    </DialogContent>
  );
}
