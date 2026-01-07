"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { 
  Store, 
  Bell, 
  Lock, 
  Truck, 
  CreditCard, 
  Save, 
  AlertTriangle,
  Clock
} from "lucide-react";

export default function SettingsPage() {
  const [shopOpen, setShopOpen] = useState(true);

  return (
    <div className="max-w-4xl space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-slate-800 tracking-tight">System Settings</h2>
        <p className="text-slate-500 text-sm">Configure your bakery operations and account preferences.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Navigation Sidebar (Inner) */}
        <div className="space-y-2">
          {[
            { name: "General", icon: Store, active: true },
            { name: "Delivery", icon: Truck },
            { name: "Notifications", icon: Bell },
            { name: "Security", icon: Lock },
            { name: "Payments", icon: CreditCard },
          ].map((item) => (
            <button
              key={item.name}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                item.active 
                ? "bg-pink-600 text-white shadow-lg shadow-pink-100" 
                : "text-slate-500 hover:bg-white hover:text-slate-800"
              }`}
            >
              <item.icon size={18} />
              {item.name}
            </button>
          ))}
        </div>

        {/* Settings Form Content */}
        <div className="md:col-span-2 space-y-6">
          
          {/* Shop Status Card */}
          <section className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-pink-50 text-pink-600 rounded-lg">
                  <Store size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800">Store Status</h3>
                  <p className="text-xs text-slate-500">Enable or disable online orders.</p>
                </div>
              </div>
              <button 
                onClick={() => setShopOpen(!shopOpen)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${shopOpen ? 'bg-pink-600' : 'bg-slate-300'}`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${shopOpen ? 'translate-x-6' : 'translate-x-1'}`} />
              </button>
            </div>

            <div className="space-y-4">
               <div>
                 <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Bakery Name</label>
                 <input type="text" defaultValue="Tubas Cake House" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-pink-500/20 outline-none" />
               </div>
               <div>
                 <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Store Email</label>
                 <input type="email" defaultValue="contact@tubascake.house" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-pink-500/20 outline-none" />
               </div>
            </div>
          </section>

          {/* Operational Hours */}
          <section className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
              <Clock size={18} className="text-slate-400" /> Operational Hours
            </h3>
            <div className="grid grid-cols-2 gap-4">
               <div>
                 <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Opening Time</label>
                 <input type="time" defaultValue="09:00" className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm" />
               </div>
               <div>
                 <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Closing Time</label>
                 <input type="time" defaultValue="22:00" className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm" />
               </div>
            </div>
          </section>

          {/* Delivery Configuration */}
          <section className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
              <Truck size={18} className="text-slate-400" /> Delivery Settings
            </h3>
            <div className="space-y-4">
               <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
                 <span className="text-sm font-medium text-slate-700">Standard Delivery Charge</span>
                 <input type="text" defaultValue="৳60" className="w-20 text-right font-bold text-pink-600 bg-transparent border-none outline-none" />
               </div>
               <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
                 <span className="text-sm font-medium text-slate-700">Free Delivery Threshold</span>
                 <input type="text" defaultValue="৳2000" className="w-20 text-right font-bold text-pink-600 bg-transparent border-none outline-none" />
               </div>
            </div>
          </section>

          {/* Danger Zone */}
          <section className="p-6 border-2 border-dashed border-rose-100 rounded-2xl bg-rose-50/30">
            <h3 className="font-bold text-rose-800 mb-2 flex items-center gap-2">
              <AlertTriangle size={18} /> Danger Zone
            </h3>
            <p className="text-xs text-rose-600 mb-4">Deleting your shop data is permanent and cannot be undone.</p>
            <button className="px-4 py-2 bg-white border border-rose-200 text-rose-600 text-xs font-bold rounded-lg hover:bg-rose-600 hover:text-white transition-all">
              Reset Shop Data
            </button>
          </section>

          {/* Action Buttons */}
          <div className="flex justify-end gap-3 pt-4">
             <button className="px-6 py-2.5 text-sm font-bold text-slate-500 hover:text-slate-800 transition-colors">Cancel</button>
             <button className="flex items-center gap-2 px-8 py-2.5 bg-slate-900 text-white rounded-xl text-sm font-bold hover:bg-slate-800 transition-all shadow-lg">
               <Save size={18} /> Save Changes
             </button>
          </div>

        </div>
      </div>
    </div>
  );
}