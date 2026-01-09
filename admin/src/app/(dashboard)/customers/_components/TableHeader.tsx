import React from "react";

export default function TableHeader() {
  return (
    <thead>
      <tr className="bg-slate-50/50 text-slate-400 text-[9px] font-black uppercase tracking-[0.2em] border-b border-slate-50">
        <th className="px-10 py-7">Customer Identity</th>
        <th className="px-6 py-7">Loyalty & Status</th>
        <th className="px-6 py-7">Financial History</th>
        <th className="px-10 py-7 text-right">Actions</th>
      </tr>
    </thead>
  );
}