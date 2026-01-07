"use client";
import React from "react";
import { motion } from "motion/react";
import { 
  Search, 
  UserPlus, 
  Mail, 
  Phone, 
  ShoppingBag, 
  Star, 
  MoreVertical,
  ChevronRight
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const customers = [
  { 
    id: 1, 
    name: "Anika Tabassum", 
    email: "anika@example.com", 
    phone: "01712-345678", 
    totalOrders: 15, 
    spent: "৳18,500", 
    status: "Loyal",
    avatar: "https://i.pravatar.cc/150?u=1" 
  },
  { 
    id: 2, 
    name: "Sajid Khan", 
    email: "sajid.k@example.com", 
    phone: "01822-987654", 
    totalOrders: 8, 
    spent: "৳9,200", 
    status: "Regular",
    avatar: "https://i.pravatar.cc/150?u=2" 
  },
  { 
    id: 3, 
    name: "Maliha Islam", 
    email: "maliha@example.com", 
    phone: "01911-554433", 
    totalOrders: 22, 
    spent: "৳28,000", 
    status: "VIP",
    avatar: "https://i.pravatar.cc/150?u=3" 
  },
  { 
    id: 4, 
    name: "Tanvir Ahmed", 
    email: "tanvir.a@example.com", 
    phone: "01677-112233", 
    totalOrders: 3, 
    spent: "৳4,500", 
    status: "New",
    avatar: "https://i.pravatar.cc/150?u=4" 
  },
];

export default function CustomersPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 tracking-tight">Customer Base</h2>
          <p className="text-slate-500 text-sm">Manage your relationships and view customer history.</p>
        </div>
        <button className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white rounded-xl text-sm font-bold hover:bg-slate-800 transition-all shadow-lg">
          <UserPlus size={18} /> Add Customer
        </button>
      </div>

      {/* Search & Stats Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <div className="lg:col-span-3 relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-pink-500 transition-colors" size={20} />
          <input 
            type="text" 
            placeholder="Search by name, email or phone..." 
            className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all shadow-sm"
          />
        </div>
        <div className="bg-pink-50 border border-pink-100 rounded-2xl p-3 flex items-center justify-center gap-3">
          <div className="p-2 bg-pink-500 rounded-lg text-white">
            <Star size={20} fill="currentColor" />
          </div>
          <div>
            <p className="text-[10px] uppercase font-bold text-pink-600 leading-none">VIP Customers</p>
            <p className="text-lg font-black text-pink-900">12 Active</p>
          </div>
        </div>
      </div>

      {/* Customer List (Table-Card Hybrid) */}
      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50/50 text-slate-500 text-xs uppercase tracking-widest font-bold">
              <tr>
                <th className="px-8 py-5">Customer Info</th>
                <th className="px-6 py-5">Status</th>
                <th className="px-6 py-5">Orders</th>
                <th className="px-6 py-5">Total Spent</th>
                <th className="px-6 py-5">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {customers.map((user, index) => (
                <motion.tr 
                  key={user.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="hover:bg-slate-50/50 transition-colors group"
                >
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-12 w-12 border-2 border-white shadow-sm ring-1 ring-slate-100">
                        <AvatarImage src={user.avatar} />
                        <AvatarFallback className="bg-pink-100 text-pink-600 font-bold">{user.name.substring(0,2).toUpperCase()}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-bold text-slate-800 group-hover:text-pink-600 transition-colors">{user.name}</p>
                        <div className="flex items-center gap-3 mt-1">
                          <span className="flex items-center gap-1 text-[11px] text-slate-400"><Mail size={12}/> {user.email}</span>
                          <span className="flex items-center gap-1 text-[11px] text-slate-400"><Phone size={12}/> {user.phone}</span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-tighter shadow-sm ${
                      user.status === 'VIP' ? 'bg-indigo-600 text-white' : 
                      user.status === 'Loyal' ? 'bg-pink-100 text-pink-600' : 
                      'bg-slate-100 text-slate-600'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2">
                      <ShoppingBag size={16} className="text-slate-300" />
                      <span className="text-sm font-bold text-slate-700">{user.totalOrders} Orders</span>
                    </div>
                  </td>
                  <td className="px-6 py-5 font-black text-slate-800 text-sm">
                    {user.spent}
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-1">
                      <button className="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-all">
                        <MoreVertical size={18} />
                      </button>
                      <button className="p-2 text-pink-600 hover:bg-pink-50 rounded-lg transition-all">
                        <ChevronRight size={18} />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}