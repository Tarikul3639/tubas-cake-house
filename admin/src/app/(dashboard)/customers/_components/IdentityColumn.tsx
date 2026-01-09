import React from "react";
import { Mail, Phone } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ICustomer } from "@/types/customer";

interface IdentityColumnProps {
  user: ICustomer;
}

export default function IdentityColumn({ user }: IdentityColumnProps) {
  return (
    <td className="px-10 py-6">
      <div className="flex items-center gap-5">
        <div className="relative">
          <Avatar className="h-14 w-14 rounded-[22px] border-2 border-white shadow-md group-hover:scale-105 transition-transform">
            <AvatarImage src={user.profilePic} className="object-cover" />
            <AvatarFallback className="bg-pink-100 text-pink-600 font-black text-xl italic">{user.name.charAt(0)}</AvatarFallback>
          </Avatar>
          {user.isActive && <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full" />}
        </div>
        <div>
          <p className="font-black text-slate-800 text-base tracking-tight leading-none">{user. name}</p>
          <div className="flex items-center gap-3 mt-2 text-slate-400">
            <span className="flex items-center gap-1.5 text-[10px] font-bold"><Mail size={12} className="text-pink-400" /> {user.email}</span>
            <span className="flex items-center gap-1.5 text-[10px] font-bold"><Phone size={12} /> {user.phone || 'N/A'}</span>
          </div>
        </div>
      </div>
    </td>
  );
}