import React from "react";
import { Bookmark, MessageSquare, Info, ShieldCheck } from "lucide-react";
import { ICustomer } from "@/types/customer";

interface AdministrativeNotesSectionProps {
  customer: ICustomer;
  onChange: (field: keyof ICustomer, value: any) => void;
}

export default function AdministrativeNotesSection({ customer, onChange }: AdministrativeNotesSectionProps) {
  return (
    <div className="bg-white rounded-[32px] border border-purple-100 p-8 shadow-sm relative overflow-hidden group hover:shadow-purple-100/40 transition-all duration-500">
      
      {/* Soft Gradient Accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100 rounded-bl-[100px] z-0" />

      {/* --- HEADER --- */}
      <div className="flex items-center justify-between mb-6 relative z-10">
        <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-purple-500 flex items-center gap-2">
          <span className="p-2 bg-purple-100 rounded-lg text-purple-600">
            <Bookmark size={14} />
          </span>
          Administrative Memo
        </h3>
        
        {/* Badge: Visible to Admin Only */}
        <div className="flex items-center gap-1.5 px-3 py-1 bg-slate-100/50 rounded-full border border-slate-200">
          <ShieldCheck size={10} className="text-slate-400" />
          <span className="text-[8px] font-black uppercase tracking-tighter text-slate-500">Internal Only</span>
        </div>
      </div>

      <div className="space-y-4 relative z-10">
        <div className="space-y-2 group/note">
          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1 flex items-center gap-2 group-focus-within/note:text-purple-500 transition-colors">
            <MessageSquare size={12} className="opacity-50" />
            Internal Remarks
          </label>
          
          <div className="relative">
            <textarea
              rows={4}
              value={customer.notes}
              onChange={(e) => onChange("notes", e.target.value)}
              placeholder="Record customer behavior, special preferences, or internal escalation history..."
              className="w-full bg-purple-50/30 border border-purple-100 rounded-2xl px-6 py-5 text-sm font-bold text-slate-600 focus:outline-none focus:ring-4 focus:ring-purple-500/10 focus:border-purple-300 transition-all resize-none italic leading-relaxed placeholder:text-slate-300"
            />
          </div>
        </div>

        {/* Pro-tip or Guideline */}
        <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
          <Info size={14} className="text-purple-400 mt-0.5 shrink-0" />
          <p className="text-[10px] font-medium text-slate-400 italic leading-snug">
            These notes are encrypted and strictly for staff use. Avoid entering sensitive PII (Personally Identifiable Information) here.
          </p>
        </div>
      </div>
    </div>
  );
}