"use client";

import React, { useEffect, useState } from "react";
import { ShoppingBag, Calendar as CalenderIcon } from "lucide-react";
import { ICustomer } from "@/types/customer";

interface FinancialHistoryColumnProps {
  user: ICustomer;
}

export default function FinancialHistoryColumn({
  user,
}: FinancialHistoryColumnProps) {
  const [lastOrder, setLastOrder] = useState<string>("");

  useEffect(() => {
    if (user.lastOrderDate) {
      setLastOrder(new Date(user.lastOrderDate).toLocaleDateString());
    } else {
      setLastOrder("Never");
    }
  }, [user.lastOrderDate]);
  return (
    <td className="px-6 py-6">
      <div className="space-y-1.5">
        <div className="flex items-baseline gap-2">
          <span className="text-base font-black text-slate-950 italic">
            ৳{(user.totalSpent || 0).toLocaleString()}
          </span>
          <span className="text-[8px] font-black text-slate-400 uppercase tracking-tighter">
            Spent
          </span>
        </div>
        <div className="flex flex-col gap-0.5">
          <span className="flex items-center gap-1.5 text-[10px] font-bold text-slate-600 uppercase tracking-tighter">
            <ShoppingBag size={11} className="text-pink-500" />{" "}
            {user.totalOrders || 0} Orders
          </span>
          <span className="flex items-center gap-1.5 text-[9px] font-bold text-slate-400">
            <CalenderIcon size={11} />
            Last: {lastOrder}
          </span>
        </div>
      </div>
    </td> 
  );
}
