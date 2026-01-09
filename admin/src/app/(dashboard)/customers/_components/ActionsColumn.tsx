"use client";
import React from "react";
import { Mail, TrendingUp } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ICustomer } from "@/types/customer";

export default function ActionsColumn({ user }: { user: ICustomer }) {
  return (
    <td className="px-10 py-6 text-right">
      <div className="flex items-center justify-end gap-2">
        {/* Edit Navigation */}
        <Link href={`customers/${user._id}`}>
          <motion.button
            whileHover={{
              scale: 1.1,
              backgroundColor: "#0f172a",
              color: "#fff",
              transition: { type: "tween", duration: 0 },
            }}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-white border border-slate-100 text-slate-400 rounded-xl transition-all duration-300 shadow-sm"
          >
            <TrendingUp size={14} />
          </motion.button>
        </Link>

        {/* Mail Action */}
        <Link href={`mailto:${user.email}`}>
          <button
            onClick={() => {}}
            className="p-3 bg-pink-50 text-pink-500 rounded-xl hover:bg-pink-600 hover:text-white transition-all duration-300 active:scale-95 shadow-sm shadow-pink-100/50"
          >
            <Mail size={14} strokeWidth={2.5} />
          </button>
        </Link>
      </div>
    </td>
  );
}
