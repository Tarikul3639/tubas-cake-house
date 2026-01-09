"use client";
import React, { useState } from "react";
import Sidebar from "@/components/shared/sidebar";
import TopNav from "@/components/shared/top-nav";
import { cn } from "@/lib/utils";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar - Google Classroom Style */}
      <Sidebar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />

      {/* Main Wrapper */}
      <div className="flex-1 flex flex-col min-h-screen transition-all duration-300">
        <TopNav isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
        
        <main className={cn(
          "flex-1 p-5 transition-all duration-300 pt-18",
          isExpanded ? "md:ml-70" : "md:ml-20"
        )}>
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}