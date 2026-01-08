"use client";
import React, { useState, useMemo } from "react";
import { Layers } from "lucide-react";
import { CakeCategory, CakeProduct } from "@/types/cakes";
import { cakeProducts as initialCakes } from "@/store/cakes";

// Sub-components import
import { InventoryHeader } from "./_components/InventoryHeader";
import { InventoryFilters } from "./_components/InventoryFilters";
import { CakeCard } from "./_components/CakeCard";
import { InventoryTableView } from "./_components/InventoryTableView";

export default function CakesAdminPage() {
  const [view, setView] = useState<"grid" | "table">("grid");
  const [cakes, setCakes] = useState<CakeProduct[]>(initialCakes);
  const [selectedCategory, setSelectedCategory] = useState<
    CakeCategory | "All"
  >("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("newest");

  // Delete Handler
  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this cake?")) {
      setCakes((prev) => prev.filter((c) => c._id !== id));
    }
  };

  // Filtered Cakes based on Search Term
  const filteredCakes = useMemo(() => {
    let result = [...cakes];

    // Filter by Category & Search
    const term = searchTerm.toLowerCase();
    result = result.filter((c) => {
      const matchesCategory =
        selectedCategory === "All" || c.category === selectedCategory;
      const matchesSearch =
        c.name.toLowerCase().includes(term) ||
        c.category.toLowerCase().includes(term) ||
        c._id.toLowerCase().includes(term);
      return matchesCategory && matchesSearch;
    });

    // Sorting
    result.sort((a, b) => {
      // Get default variant for price/stock based sorting
      const aVariant = a.variants.find((v) => v.isDefault) || a.variants[0];
      const bVariant = b.variants.find((v) => v.isDefault) || b.variants[0];

      switch (sortBy) {
        case "price-low":
          return aVariant.price - bVariant.price;
        case "price-high":
          return bVariant.price - aVariant.price;
        case "sales":
          return (b.totalSold || 0) - (a.totalSold || 0);
        case "stock":
          return aVariant.stock - bVariant.stock;
        case "newest":
        default:
          return b._id.localeCompare(a._id);
      }
    });

    return result;
  }, [cakes, searchTerm, selectedCategory, sortBy]);

  return (
    <div className="space-y-8 pb-10 max-w-400 mx-auto animate-in fade-in duration-700">
      {/* Header */}
      <InventoryHeader view={view} setView={setView} />

      {/* Filters */}
      <InventoryFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        resultsCount={filteredCakes.length}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      {/* Content */}
      <div className="min-h-100">
        {filteredCakes.length > 0 ? (
          view === "grid" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredCakes.map((cake, index) => (
                <CakeCard
                  key={cake._id}
                  cake={cake}
                  index={index}
                  onDelete={handleDelete}
                />
              ))}
            </div>
          ) : (
            <InventoryTableView cakes={filteredCakes} onDelete={handleDelete} />
          )
        ) : (
          // No Results Found
          <div className="py-32 text-center bg-white rounded-[40px] border-2 border-dashed border-slate-100 transition-all">
            <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Layers className="text-slate-200" size={40} />
            </div>
            <h3 className="text-lg font-black text-slate-800 italic uppercase tracking-tighter">
              No Products Found
            </h3>
            <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mt-2">
              Try adjusting your filters or search keywords
            </p>
            <button
              onClick={() => (
                setSearchTerm(""),
                setSelectedCategory("All"),
                setSortBy("newest")
              )}
              className="mt-6 px-6 py-3 bg-slate-900 text-white rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-pink-600 transition-all"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
