"use client";
import React, { useState, useMemo } from "react";
import { Layers } from "lucide-react";

// --- Types (New Nexion Standard) ---
import { ICake, ICategory } from "@/types/cakes";
import { initialCakes } from "@/store/cakes";

// Sub-components
import { Header } from "./_components/Header";
import { InventoryFilters } from "./_components/Filters";
import { CakeCard } from "./_components/CakeCard";
import { TableView } from "./_components/TableView";

export default function CakesAdminPage() {
  const [view, setView] = useState<"grid" | "table">("grid");
  const [cakes, setCakes] = useState<ICake[]>(initialCakes as ICake[]);
  const [selectedCategory, setSelectedCategory] = useState<ICategory | "All">("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("newest");

  // Delete Handler
  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this cake?")) {
      setCakes((prev) => prev.filter((c) => c._id !== id));
    }
  };

  // Filtered Cakes based on Search Term & New Types
  const filteredCakes = useMemo(() => {
    let result = [...cakes];

    // Filter by Category & Search
    const term = searchTerm.toLowerCase();
    result = result.filter((c) => {
      const matchesCategory =
        selectedCategory === "All" || c.category === selectedCategory;
      
      const matchesSearch =
        c.name.toLowerCase().includes(term) ||
        (c.shortDescription && c.shortDescription.toLowerCase().includes(term)) ||
        c._id.toLowerCase().includes(term);
        
      return matchesCategory && matchesSearch;
    });

    // Sorting (Updated for new ICake flat structure)
    result.sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "sales":
          // Using salesCount from ICake
          return (b.salesCount || 0) - (a.salesCount || 0);
        case "stock":
          // Using base stock from ICake
          return a.stock - b.stock;
        case "newest":
        default:
          // Sorting by ISO string date
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      }
    });

    return result;
  }, [cakes, searchTerm, selectedCategory, sortBy]);

  return (
    <div className="space-y-8 pb-10 max-w-400 mx-auto animate-in fade-in duration-700">
      {/* Header */}
      <Header view={view} setView={setView} />

      {/* Filters */}
      <InventoryFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory as ICategory}
        setSelectedCategory={(cat: any) => setSelectedCategory(cat)}
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
            <TableView cakes={filteredCakes} onDelete={handleDelete} />
          )
        ) : (
          // No Results Found UI
          <div className="py-32 text-center bg-white rounded-[40px] border-2 border-dashed border-slate-100 transition-all">
            <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Layers className="text-slate-200" size={40} />
            </div>
            <h3 className="text-lg font-black text-slate-800 italic uppercase tracking-tighter">
              No Cakes Found
            </h3>
            <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mt-2">
              Try adjusting your filters or search keywords
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
                setSortBy("newest");
              }}
              className="mt-6 px-6 py-3 bg-slate-900 text-white rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-pink-600 transition-all active:scale-95 shadow-lg shadow-slate-100"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}