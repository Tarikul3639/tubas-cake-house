"use client";
import React, { useState, useMemo } from "react";
import { Search, FilterX } from "lucide-react";
import { OrderHeader } from "./_components/OrderHeader";
import { OrderTabs } from "./_components/OrderTabs";
import { OrderTable } from "./_components/OrderTable";
import { ordersMockData } from "@/store/order"; // আপনার দেওয়া ২০টি ডাটা
import { OrderData, OrderStatus, PaymentStatus, PaymentMethod } from "@/types/order";

export default function OrdersPage() {
  
  const [allOrders, setAllOrders] = useState<OrderData[]>(ordersMockData);
  const [activeTab, setActiveTab] = useState<OrderStatus | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");

  // ১. হ্যান্ডলার: অর্ডার স্ট্যাটাস আপডেট (Pending -> Processing etc.)
  const handleStatusUpdate = (orderId: string, newStatus: OrderStatus) => {
    setAllOrders((prev) =>
      prev.map((order) =>
        order._id === orderId ? { ...order, status: newStatus } : order
      )
    );
    console.log(`Order ${orderId} status changed to ${newStatus}`);
  };

  // ২. হ্যান্ডলার: পেমেন্ট স্ট্যাটাস ও মেথড আপডেট (ডায়ালগ থেকে আসবে)
  const handlePaymentUpdate = (
    orderId: string, 
    newStatus: PaymentStatus, 
    newMethod: PaymentMethod
  ) => {
    setAllOrders((prev) =>
      prev.map((order) =>
        order._id === orderId 
          ? { 
              ...order, 
              payment: { ...order.payment, status: newStatus, method: newMethod } 
            } 
          : order
      )
    );
    console.log(`Order ${orderId} payment updated: ${newStatus} via ${newMethod}`);
  };

  // ফিল্টারিং লজিক (Memoized for performance)
  const filteredOrders = useMemo(() => {
    return allOrders.filter((order) => {
      const matchesTab = activeTab === "all" || order.status === activeTab;
      const matchesSearch =
        order.orderId.toLowerCase().includes(searchQuery.toLowerCase()) ||
        order.customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        order.customer.phone.includes(searchQuery);
      
      return matchesTab && matchesSearch;
    });
  }, [activeTab, searchQuery, allOrders]);

  const handleExport = () => {
    console.log("Exporting", filteredOrders.length, "orders to CSV...");
  };

  return (
    <div className="space-y-6 pb-10">
      {/* Page Header */}
      <OrderHeader onExport={handleExport} totalOrders={allOrders.length} />
      
      {/* Main Content Area */}
      <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden transition-all">
        
        {/* Filter Bar */}
        <div className="p-5 border-b border-slate-50 space-y-4">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <OrderTabs 
                activeTab={activeTab} 
                onTabChange={setActiveTab} 
                orders={allOrders} // Tab-এ কাউন্ট দেখানোর জন্য
            />
            
            <div className="relative group lg:w-96 w-full">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-pink-500 transition-colors"
                size={18}
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by ID, Name or Phone..."
                className="pl-12 pr-4 py-3 w-full bg-slate-50 border border-slate-100 rounded-2xl text-sm font-medium focus:outline-none focus:ring-4 focus:ring-pink-500/5 focus:bg-white focus:border-pink-500 transition-all placeholder:text-slate-300"
              />
            </div>
          </div>
        </div>

        {/* Orders Table Container */}
        <div className="relative min-h-100">
          {filteredOrders.length > 0 ? (
            <OrderTable
              filteredOrders={filteredOrders}
              onStatusUpdate={handleStatusUpdate}
              onPaymentUpdate={handlePaymentUpdate} // ডায়ালগ ফাংশন পাস করা হলো
            />
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-slate-400">
              <div className="p-4 bg-slate-50 rounded-full mb-4">
                <FilterX size={40} strokeWidth={1.5} />
              </div>
              <p className="text-sm font-bold uppercase tracking-widest">No orders found</p>
              <button 
                onClick={() => {setSearchQuery(""); setActiveTab("all");}}
                className="mt-2 text-xs font-black text-pink-500 uppercase hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}