"use client";
import { motion } from "framer-motion";
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Camera, 
  Lock as ShieldLock, 
  Bell, 
  CreditCard,
  LogOut,
  ChevronRight
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ProfileSettingsPage() {
  const [activeTab, setActiveTab] = useState("personal");

  const tabs = [
    { id: "personal", label: "Personal Info", icon: <User size={18} /> },
    { id: "security", label: "Security", icon: <ShieldLock size={18} /> },
    { id: "notifications", label: "Notifications", icon: <Bell size={18} /> },
    { id: "billing", label: "Payments", icon: <CreditCard size={18} /> },
  ];

  return (
    <main className="min-h-screen bg-[#fffafb] pt-28 pb-20">
      <div className="container mx-auto px-6 max-w-5xl">
        <header className="mb-12 text-center md:text-left">
          <h1 className="text-4xl font-black text-slate-800 italic">
            Profile <span className="text-pink-500">Settings</span>
          </h1>
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mt-2">
            Manage your account and preferences
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Sidebar: Navigation Tabs */}
          <aside className="lg:col-span-4 space-y-2">
            <div className="bg-white p-4 rounded-[32px] border border-pink-50 shadow-sm overflow-hidden">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all group ${
                    activeTab === tab.id
                      ? "bg-slate-900 text-white shadow-lg shadow-slate-200"
                      : "text-slate-500 hover:bg-pink-50/50 hover:text-pink-500"
                  }`}
                >
                  <div className="flex items-center gap-4 font-black uppercase tracking-widest text-[10px]">
                    {tab.icon}
                    {tab.label}
                  </div>
                  <ChevronRight size={14} className={activeTab === tab.id ? "opacity-100" : "opacity-0 group-hover:opacity-100 transition-opacity"} />
                </button>
              ))}

              <hr className="my-4 border-pink-50" />
              
              <button className="w-full flex items-center gap-4 p-4 rounded-2xl text-red-400 hover:bg-red-50 transition-all font-black uppercase tracking-widest text-[10px]">
                <LogOut size={18} />
                Logout Account
              </button>
            </div>
          </aside>

          {/* Right Content: Settings Form */}
          <div className="lg:col-span-8">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white p-8 md:p-10 rounded-[48px] border border-pink-50 shadow-xl shadow-pink-100/20"
            >
              {activeTab === "personal" && (
                <div className="space-y-8">
                  {/* Profile Picture Section */}
                  <div className="flex flex-col md:flex-row items-center gap-6 pb-8 border-b border-pink-50">
                    <div className="relative group">
                      <div className="w-24 h-24 rounded-[32px] overflow-hidden border-4 border-pink-100 relative">
                        <Image
                          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=200&fit=crop"
                          alt="User"
                          fill
                          className="object-cover transition-transform group-hover:scale-110"
                        />
                      </div>
                      <button className="absolute -bottom-2 -right-2 bg-slate-900 text-white p-2.5 rounded-2xl shadow-xl hover:bg-pink-500 transition-colors">
                        <Camera size={16} />
                      </button>
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-slate-800 italic">User Profile Picture</h3>
                      <p className="text-xs text-slate-400 font-medium">PNG, JPG up to 5MB</p>
                    </div>
                  </div>

                  {/* Input Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <SettingInput label="Full Name" icon={<User size={18}/>} defaultValue="John Doe" />
                    <SettingInput label="Email Address" icon={<Mail size={18}/>} defaultValue="john@example.com" />
                    <SettingInput label="Phone Number" icon={<Phone size={18}/>} defaultValue="+880 17XX XXX XXX" />
                    <SettingInput label="Shipping City" icon={<MapPin size={18}/>} defaultValue="Dhaka, Bangladesh" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 ml-1">About You</label>
                    <textarea 
                      className="w-full bg-slate-50 border border-slate-100 rounded-3xl py-4 px-6 text-sm font-bold focus:outline-none focus:border-pink-300 focus:bg-white transition-all h-32"
                      placeholder="Write a few lines about your taste in cakes..."
                    />
                  </div>

                  <button className="bg-pink-500 text-white px-10 py-4 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] hover:bg-slate-900 transition-all shadow-lg active:scale-95">
                    Save Changes
                  </button>
                </div>
              )}

              {activeTab === "security" && (
                <div className="space-y-6">
                  <h3 className="text-xl font-black text-slate-800 italic mb-6">Security & Password</h3>
                  <SettingInput label="Current Password" icon={<ShieldLock size={18}/>} type="password" placeholder="••••••••" />
                  <SettingInput label="New Password" icon={<ShieldLock size={18}/>} type="password" placeholder="••••••••" />
                  <button className="bg-slate-900 text-white px-10 py-4 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] hover:bg-pink-500 transition-all shadow-lg active:scale-95">
                    Update Password
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}

// Helper Component for Inputs
function SettingInput({ label, icon, ...props }: any) {
  return (
    <div className="space-y-2">
      <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 ml-1">{label}</label>
      <div className="relative">
        <div className="absolute left-5 top-1/2 -translate-y-1/2 text-pink-400">
          {icon}
        </div>
        <input 
          {...props} 
          className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-14 pr-6 text-sm font-bold focus:outline-none focus:border-pink-300 focus:bg-white transition-all shadow-inner" 
        />
      </div>
    </div>
  );
}