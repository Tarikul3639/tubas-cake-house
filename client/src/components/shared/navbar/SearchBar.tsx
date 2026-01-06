"use client";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Sparkles, X } from "lucide-react";
import { useState, useRef } from "react";

export default function SearchBar() {
  const [searchActive, setSearchActive] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const searchRef = useOutsideClick(() => {
    if (searchActive && query === "") setSearchActive(false);
  });

  return (
    <motion.div
      ref={searchRef}
      layout
      initial={false}
      animate={{
        width: searchActive ? 320 : 46,
        height: searchActive ? 48 : 42,
      }}
      transition={{ type: "spring", stiffness: 10, damping: 200, mass: 0.1 }}
      className={`relative hidden md:flex items-center transition-all duration-500 rounded-full group ${
        searchActive 
          ? "bg-white/90 backdrop-blur-md border-pink-200 shadow-[0_0_20px_rgba(236,72,153,0.15)]" 
          : "bg-pink-50/40 border-pink-100/50 hover:bg-pink-50/80"
      } border`}
    >
      {/* Search Icon with Pulse Effect */}
      <div 
        onClick={() => {
          setSearchActive(true);
          inputRef.current?.focus();
        }}
        className={`absolute left-3.5 z-20 cursor-pointer transition-transform duration-300 ${searchActive ? "scale-110" : "hover:scale-110"}`}
      >
        <Search
          size={18}
          className={`${searchActive ? "text-pink-600" : "text-pink-400"} transition-colors`}
        />
      </div>

      {/* Modern Input */}
      <input
        ref={inputRef}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setSearchActive(true)}
        placeholder={searchActive ? "What are you craving today?" : ""}
        className={`w-full h-full bg-transparent pl-12 pr-10 text-sm font-semibold outline-none caret-pink-500 text-slate-700 placeholder:text-pink-200 placeholder:font-medium transition-opacity duration-300 ${
          searchActive ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Decorative Sparkle or Clear Button */}
      <div className="absolute right-3.5 flex items-center justify-center">
        <AnimatePresence mode="wait">
          {searchActive && query.length > 0 ? (
            <motion.button
              key="clear"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              onClick={() => setQuery("")}
              className="p-1 bg-pink-50 rounded-full text-pink-400 hover:text-pink-600 transition-colors"
            >
              <X size={14} />
            </motion.button>
          ) : !searchActive ? (
            <motion.div
              key="sparkle"
              animate={{ opacity: [0.4, 1, 0.4] }}
            //   transition={{ repeat: Infinity, duration: 2 }}
            >
              <Sparkles size={14} className="text-pink-200" />
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>

      {/* Animated Bottom Border Glow */}
      {searchActive && (
        <motion.div
          layoutId="glow"
          className="absolute -bottom-[1px] left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-pink-400 to-transparent blur-[1px]"
        />
      )}
    </motion.div>
  );
}