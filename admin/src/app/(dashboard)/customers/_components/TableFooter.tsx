
import React from "react";

interface TableFooterProps {
  totalCustomers: number;
}

export default function TableFooter({ totalCustomers }: TableFooterProps) {
  return (
    <div className="bg-slate-50/50 px-10 py-6 border-t border-slate-50 flex items-center justify-between">
      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Showing {totalCustomers} Accounts • Data Synced</p>
      <div className="flex gap-2">
        <button className="px-5 py-2.5 bg-white border border-slate-200 rounded-xl text-[10px] font-black uppercase hover:bg-slate-100 transition-all">Prev</button>
        <button className="px-5 py-2.5 bg-slate-950 text-white rounded-xl text-[10px] font-black uppercase shadow-lg shadow-slate-200">Next</button>
      </div>
    </div>
  );
}