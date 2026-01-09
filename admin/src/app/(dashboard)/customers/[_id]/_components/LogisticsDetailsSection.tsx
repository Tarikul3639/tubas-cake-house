import React from "react";
import { MapPin, Building2, Layers, Globe, Hash } from "lucide-react";
import { ICustomer } from "@/types/customer";

interface LogisticsDetailsSectionProps {
  customer: ICustomer;
  onChange: (field: keyof ICustomer, value: any) => void;
}

export default function LogisticsDetailsSection({ customer, onChange }: LogisticsDetailsSectionProps) {
  // Helper array for grid fields to keep code clean
  const locationFields = [
    { label: "City", icon: Building2, value: customer.city, field: "city" },
    { label: "State", icon: Layers, value: customer.state, field: "state" },
    { label: "Country", icon: Globe, value: customer.country, field: "country" },
    { label: "Postal Code", icon: Hash, value: customer.postalCode, field: "postalCode" },
  ];

  return (
    <div className="bg-white rounded-[32px] border border-emerald-100 p-8 shadow-sm relative overflow-hidden group transition-all hover:shadow-emerald-100/50">
      
      {/* Decorative Background Blob */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-[100px] z-0 transition-transform duration-700 group-hover:scale-110" />

      {/* --- HEADER --- */}
      <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-emerald-500 mb-8 flex items-center gap-2 relative z-10">
        <span className="p-2 bg-emerald-100 rounded-lg text-emerald-600">
          <MapPin size={14} />
        </span>
        Logistics Details
      </h3>

      <div className="space-y-6 relative z-10">
        
        {/* Full Address Textarea */}
        <div className="space-y-2 group/address">
          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1 group-focus-within/address:text-emerald-500 transition-colors">
            Physical Address
          </label>
          <textarea
            rows={2}
            value={customer.address}
            onChange={(e) => onChange("address", e.target.value)}
            className="w-full bg-emerald-50/30 border border-emerald-100 rounded-2xl px-5 py-4 text-sm font-bold text-slate-700 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-300 transition-all resize-none placeholder:text-slate-300"
            placeholder="Street address, Apartment, Suite, Unit, etc."
          />
        </div>

        {/* Grid Fields (City, State, Country, Zip) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {locationFields.map((item, idx) => (
            <div key={idx} className="space-y-2 group/field">
              <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest ml-1 flex items-center gap-1.5 group-focus-within/field:text-emerald-500 transition-colors">
                <item.icon size={10} className="text-emerald-400" /> 
                {item.label}
              </label>
              <input
                type="text"
                value={item.value || ''}
                onChange={(e) => onChange(item.field as keyof ICustomer, e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs font-bold text-slate-700 outline-none focus:border-emerald-400 focus:shadow-[0_0_0_4px_rgba(16,185,129,0.05)] transition-all placeholder:text-slate-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}