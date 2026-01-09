import React from "react";
import { ShieldAlert, Clock, Lock, Unlock, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";
import { ICustomer } from "@/types/customer";

interface SecurityGuardrailsCardProps {
  customer: ICustomer;
  onChange: (field: keyof ICustomer, value: any) => void;
}

export default function SecurityGuardrailsCard({
  customer,
  onChange,
}: SecurityGuardrailsCardProps) {
  const isRestricted =
    customer.restrictedUntil && new Date(customer.restrictedUntil) > new Date();

  return (
    <div className="bg-[#0B0F1A] rounded-[32px] p-8 text-white relative overflow-hidden group shadow-2xl border border-white/5">
      {/* Background Cyber-style glow */}
      <div
        className={cn(
          "absolute -right-10 -top-10 w-40 h-40 blur-[80px] transition-colors duration-1000",
          customer.isActive ? "bg-emerald-500/20" : "bg-rose-500/30"
        )}
      />

      {/* Decorative Large Icon */}
      <div className="absolute -right-4 -top-4 opacity-[0.03] group-hover:rotate-12 group-hover:scale-110 transition-all duration-700 pointer-events-none">
        <ShieldAlert size={160} />
      </div>

      <div className="relative z-10 space-y-8">
        {/* --- HEADER --- */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div
              className={cn(
                "p-2 rounded-lg",
                customer.isActive
                  ? "bg-emerald-500/10 text-emerald-500"
                  : "bg-rose-500/10 text-rose-500"
              )}
            >
              {customer.isActive ? <Unlock size={14} /> : <Lock size={14} />}
            </div>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
              Security Protocol
            </p>
          </div>

          <div
            className={cn(
              "px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-[0.15em] border transition-all duration-500",
              customer.isActive
                ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)]"
                : "bg-rose-500/10 text-rose-400 border-rose-500/20 shadow-[0_0_15px_rgba(244,63,94,0.1)]"
            )}
          >
            {customer.isActive ? "System: Online" : "System: Terminated"}
          </div>
        </div>

        {/* --- MASTER TOGGLE --- */}
        <div
          className={cn(
            "flex items-center justify-between p-5 rounded-2xl border transition-all duration-300",
            customer.isActive
              ? "bg-white/3 border-white/5"
              : "bg-rose-500/5 border-rose-500/20"
          )}
        >
          <div className="space-y-1">
            <p className="text-[11px] font-black uppercase tracking-widest text-white flex items-center gap-2">
              Global Access Control
              {!customer.isActive && (
                <AlertTriangle
                  size={12}
                  className="text-rose-500 animate-pulse"
                />
              )}
            </p>
            <p className="text-[9px] text-slate-500 font-bold uppercase italic tracking-tighter">
              Toggle to revoke all platform privileges
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer scale-110">
            <input
              type="checkbox"
              checked={customer.isActive}
              onChange={(e) => onChange("isActive", e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-red-900 rounded-full peer peer-checked:after:translate-x-5 after:content-[''] after:absolute after:top-0.75 after:left-0.75 after:bg-white after:rounded-full after:h-4.5 after:w-4.5 after:shadow-lg after:transition-all peer-checked:bg-emerald-500"></div>
          </label>
        </div>

        {/* --- RESTRICTION DATE --- */}
        <div className="space-y-4">
          <div className="flex justify-between items-center px-1">
            <label className="text-[9px] font-black text-slate-500 uppercase tracking-[0.2em] flex items-center gap-2">
              <Clock size={12} className="text-pink-500" /> Restriction Cooldown
            </label>
            {isRestricted && (
              <span className="text-[8px] font-black text-pink-500 uppercase animate-bounce">
                Active Block
              </span>
            )}
          </div>

          <div
            className={cn(
              "relative group/input transition-all duration-500",
              customer.isActive
                ? "opacity-30 grayscale pointer-events-none"
                : "opacity-100"
            )}
          >
            <input
              type="date"
              // Disable when isActive true 
              disabled={customer.isActive}
              value={
                customer.restrictedUntil
                  ? new Date(customer.restrictedUntil)
                      .toISOString()
                      .split("T")[0]
                  : ""
              }
              onChange={(e) => onChange("restrictedUntil", e.target.value)}
              className={cn(
                "w-full bg-white/4 border border-white/10 rounded-2xl px-5 py-4 text-xs font-black text-white focus:outline-none transition-all uppercase tracking-widest",
                !customer.isActive
                  ? "focus:border-pink-500 focus:ring-4 focus:ring-pink-500/10 cursor-pointer hover:bg-white/[0.07]"
                  : "cursor-not-allowed"
              )}
            />

            {/* Conditional Icon based on state */}
            <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
              {customer.isActive ? (
                <Unlock size={14} className="text-emerald-500 opacity-50" />
              ) : (
                <ShieldAlert
                  size={14}
                  className="text-pink-500 opacity-80 animate-pulse"
                />
              )}
            </div>

            {/* Hidden Overlay Tooltip for Active State */}
            {customer.isActive && (
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="bg-slate-900/80 text-[8px] px-2 py-1 rounded border border-white/10 font-bold uppercase tracking-tighter">
                  Lock Account to Set Date
                </span>
              </div>
            )}
          </div>

          <p className="text-[8px] font-medium text-slate-600 italic px-1 leading-relaxed">
            * Setting a restriction date will prevent the user from performing
            transactions until the selected timestamp.
          </p>
        </div>
      </div>
    </div>
  );
}
