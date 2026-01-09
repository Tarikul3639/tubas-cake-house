import React from "react";
import { Star, Coins } from "lucide-react";
import { cn } from "@/lib/utils";
import { ICustomer } from "@/types/customer";

interface LoyaltyStatusColumnProps {
  user: ICustomer;
}

export default function LoyaltyStatusColumn({ user }:  LoyaltyStatusColumnProps) {
  return (
    <td className="px-6 py-6">
      <div className="flex flex-col gap-2">
        <div className={cn(
          "inline-flex items-center self-start gap-2 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest shadow-sm border",
          user.membershipTier === 'Platinum' ? "bg-slate-900 text-white border-slate-900" : 
          user.membershipTier === 'Gold' ? "bg-amber-50 text-amber-600 border-amber-100" :
          "bg-slate-50 text-slate-500 border-slate-200"
        )}>
          <Star size={10} fill={user.membershipTier === 'Platinum' ? "white" : "currentColor"} />
          {user. membershipTier || 'Silver'}
        </div>
        <div className="flex items-center gap-1.5 text-slate-500">
          <Coins size={12} className="text-amber-500" />
          <span className="text-[10px] font-black italic tracking-tighter">{user.loyaltyPoints || 0} POINTS</span>
        </div>
      </div>
    </td>
  );
}