import React, { useMemo } from "react";
import { Trophy, Zap, Star, Target, TrendingUp } from "lucide-react";
import { ICustomer } from "@/types/customer";
import { cn } from "@/lib/utils";

interface LoyaltyTierCardProps {
  customer: ICustomer;
  onChange: (field: keyof ICustomer, value: any) => void;
}

// --- Tier Configuration ---
const TIER_CONFIG = {
  Silver: {
    min: 0,
    next: 2000,
    color: "from-slate-400 to-slate-600",
    bg: "bg-slate-50",
    text: "text-slate-600",
    icon: Star
  },
  Gold: {
    min: 2000,
    next: 5000,
    color: "from-amber-400 to-orange-500",
    bg: "bg-amber-50",
    text: "text-amber-600",
    icon: Trophy
  },
  Platinum: {
    min: 5000,
    next: null,
    color: "from-fuchsia-500 to-violet-600",
    bg: "bg-violet-50",
    text: "text-violet-600",
    icon: Zap
  }
};

export default function LoyaltyTierCard({ customer, onChange }: LoyaltyTierCardProps) {
  const points = customer.loyaltyPoints || 0;

  // Auto-detect tier based on points
  const tierInfo = useMemo(() => {
    if (points >= 5000) return { name: "Platinum", ...TIER_CONFIG.Platinum };
    if (points >= 2000) return { name: "Gold", ...TIER_CONFIG.Gold };
    return { name: "Silver", ...TIER_CONFIG.Silver };
  }, [points]);

  // Calculate Progress Percentage
  const progress = useMemo(() => {
    if (!tierInfo.next) return 100;
    const currentTierMin = tierInfo.min;
    const totalNeededInThisTier = tierInfo.next - currentTierMin;
    const earnedInThisTier = points - currentTierMin;
    return Math.min(Math.max((earnedInThisTier / totalNeededInThisTier) * 100, 0), 100);
  }, [points, tierInfo]);

  return (
    <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden group">
      {/* Top Gradient Header */}
      <div className={cn("h-2 w-full bg-linear-to-r", tierInfo.color)} />
      
      <div className="p-8">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 flex items-center gap-2">
            <Target size={12} className="text-pink-500" /> Member Standing
          </h3>
          <div className={cn(
            "px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border animate-in fade-in zoom-in duration-500",
            tierInfo.bg, tierInfo.text, "border-current/10"
          )}>
            {tierInfo.name} Status
          </div>
        </div>

        {/* Tier Icon & Points Display */}
        <div className="flex flex-col items-center py-4 relative">
          <div className={cn(
            "p-5 rounded-3xl mb-4 shadow-xl shadow-current/5 relative",
            tierInfo.bg, tierInfo.text
          )}>
             <tierInfo.icon size={32} strokeWidth={2.5} />
             <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full flex items-center justify-center">
                <div className={cn("w-1.5 h-1.5 rounded-full animate-ping", tierInfo.text.replace('text', 'bg'))} />
             </div>
          </div>
          
          <div className="text-4xl font-black tracking-tighter text-slate-900 italic">
            {points.toLocaleString()}
          </div>
          <p className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em] mt-1">
            Current Loyalty Points
          </p>
        </div>

        {/* Progress Section */}
        <div className="mt-8 space-y-3">
          <div className="flex justify-between items-end">
            <div className="space-y-1">
              <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none">Tier Progress</p>
              <p className="text-[11px] font-bold text-slate-600">
                {tierInfo.next 
                  ? `${(tierInfo.next - points).toLocaleString()} pts to next level` 
                  : "Maximum Level Reached"}
              </p>
            </div>
            <TrendingUp size={16} className={cn("mb-1", tierInfo.text)} />
          </div>

          <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-50">
            <div 
              className={cn("h-full rounded-full transition-all duration-1000 ease-out bg-linear-to-r shadow-sm", tierInfo.color)}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Manual Injection Control */}
        <div className="mt-10 pt-6 border-t border-slate-50">
           <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-3 block ml-1">
             Points Injection Matrix
           </label>
           <div className="relative group/input">
              <input
                type="number"
                value={customer.loyaltyPoints}
                onChange={(e) => onChange("loyaltyPoints", Number(e.target.value))}
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-sm font-black italic tracking-tighter text-slate-700 focus:outline-none focus:ring-4 focus:ring-pink-500/5 focus:border-pink-200 transition-all"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-1.5 rounded-lg shadow-sm border border-slate-100 group-focus-within/input:scale-110 transition-transform">
                <Zap size={14} className="text-amber-500" fill="currentColor" />
              </div>
           </div>
           <p className="text-[8px] font-bold text-slate-400 uppercase tracking-tight mt-3 italic text-center">
             Changing points will automatically recalibrate member tier.
           </p>
        </div>
      </div>
    </div>
  );
}