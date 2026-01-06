"use client";
import {
  ChevronDown,
  User,
  Settings,
  Package,
  LogOut,
  Heart,
  LogIn,
  UserPlus,
} from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { tr } from "motion/react-client";

interface UserMenuProps {
  variant?: "desktop" | "mobile";
}

export default function UserMenu({ variant = "desktop" }: UserMenuProps) {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const user = {
    _id: "user_12345",
    avatarUrl: "https://github.com/shadcn.png",
    name: "Tuba Akter",
    email: "tarikulislam3639@example.com",
  };

  // Mocked authentication state
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const menuRef = useOutsideClick(() => {
    if (isUserMenuOpen) setIsUserMenuOpen(false);
  });

  const memberLinks = [
    {
      label: "Profile Settings",
      href: "/settings",
      icon: <Settings size={16} />,
    },
    { label: "Order Tracking", href: "/orders", icon: <Package size={16} /> },
    { label: "My Wishlist", href: "/wishlist", icon: <Heart size={16} /> },
  ];

  // --- Shared Logic for Guest and Member ---
  const renderMenuItems = () => {
    if (isLoggedIn) {
      return (
        <>
          <div className="px-4 py-3 border-b border-pink-50 mb-2">
            <p className="text-[10px] text-pink-400 uppercase tracking-[0.2em] font-black">
              Member
            </p>
            <p className="text-sm font-bold text-slate-800">{user.name}</p>
          </div>
          <div className="space-y-1">
            {memberLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center space-x-3 px-4 py-2.5 text-sm text-slate-600 hover:bg-pink-50 hover:text-pink-600 rounded-xl transition-all group"
              >
                <span className="text-slate-400 group-hover:text-pink-500">
                  {item.icon}
                </span>
                <span className="font-medium">{item.label}</span>
              </Link>
            ))}
          </div>
          <div className="mt-2 pt-2 border-t border-pink-50">
            <button className="flex items-center space-x-3 w-full px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 rounded-xl font-bold transition-colors">
              <LogOut size={16} />
              <span>Sign Out</span>
            </button>
          </div>
        </>
      );
    }

    return (
      <div className="p-2 space-y-1">
        <Link
          href="/login"
          className="flex items-center space-x-3 px-4 py-3 text-sm font-bold text-slate-700 hover:bg-pink-50 hover:text-pink-600 rounded-xl transition-all"
        >
          <LogIn size={18} className="text-pink-500" />
          <span>Sign In</span>
        </Link>
        <Link
          href="/signup"
          className="flex items-center space-x-3 px-4 py-3 text-sm font-bold text-white bg-linear-to-r from-pink-600 to-rose-500 rounded-xl shadow-lg shadow-pink-100 transition-all"
        >
          <UserPlus size={18} />
          <span>Create Account</span>
        </Link>
      </div>
    );
  };

  // --- Desktop UI ---
  if (variant === "desktop") {
    return (
      <div className="relative hidden md:block">
        <button
          onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
          className="flex items-center p-1 pr-3 bg-white border border-pink-100 rounded-full transition-all hover:shadow-md active:scale-95"
        >
          {isLoggedIn ? (
            <Avatar className="w-8 h-8 uppercase">
              <AvatarImage src={user.avatarUrl} />
              <AvatarFallback className="rounded-full flex items-center justify-center text-white shadow-inner bg-linear-to-tr from-pink-500 to-rose-400">
                {user.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
          ) : (
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-white shadow-inner ${
                isLoggedIn
                  ? "bg-linear-to-tr from-pink-500 to-rose-400"
                  : "bg-linear-to-tr from-pink-500 to-rose-400"
              }`}
            >
              <User
                size={18}
                className={isLoggedIn ? "text-white" : "text-white"}
              />
            </div>
          )}

          <ChevronDown
            size={14}
            className={`ml-2 text-gray-400 transition-transform duration-300 ${
              isUserMenuOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        <AnimatePresence>
          {isUserMenuOpen && (
            <motion.div
              ref={menuRef}
              initial={{ opacity: 0, scale: 0.9, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 15 }}
              className={`absolute right-0 mt-4 ${
                isLoggedIn ? "w-60" : "w-52"
              } bg-white/95 backdrop-blur-xl border border-pink-50 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-2 z-50`}
            >
              {renderMenuItems()}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  // --- Mobile UI ---
  return (
    <div className="w-full mt-4">
      <button
        onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
        className="flex items-center justify-between w-full p-4 bg-pink-50/50 rounded-2xl border border-pink-100"
      >
        <div className="flex items-center space-x-3">
          {isLoggedIn ? (
            <Avatar className="w-11 h-11 uppercase shadow-[0_8px_20px_-6px_rgba(236,72,193,0.5)] border-2 border-pink-500 ring-1 ring-pink-100 transition-transform hover:scale-105 active:scale-95">
              <AvatarImage src={user.avatarUrl} className="object-cover" />
              <AvatarFallback className="rounded-full flex items-center justify-center text-white font-bold shadow-inner bg-linear-to-tr from-pink-500 to-rose-400">
                {user.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
          ) : (
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center text-white shadow-inner ${
                isLoggedIn
                  ? "bg-linear-to-tr from-pink-500 to-rose-400"
                  : "bg-linear-to-tr from-pink-500 to-rose-400"
              }`}
            >
              <User
                size={18}
                className={isLoggedIn ? "text-white" : "text-white"}
              />
            </div>
          )}
          <div className="text-left">
            <p className="text-xs text-pink-500 font-bold uppercase tracking-wider">
              {isLoggedIn ? "Account" : "Welcome"}
            </p>
            <p className="text-sm font-bold text-slate-800">
              {isLoggedIn ? user.name : "Sign in to order"}
            </p>
          </div>
        </div>
        <ChevronDown
          size={18}
          className={`text-pink-400 transition-transform duration-300 ${
            isUserMenuOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {isUserMenuOpen && (
          <motion.div
            ref={menuRef}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="mt-3 space-y-2">
              {isLoggedIn ? (
                <div className="grid grid-cols-1 gap-1 pl-2">
                  {memberLinks.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="flex items-center space-x-4 p-3 text-slate-600 font-semibold hover:text-pink-600 transition-colors"
                    >
                      <span className="p-2 bg-white rounded-lg shadow-sm">
                        {item.icon}
                      </span>
                      <span>{item.label}</span>
                    </Link>
                  ))}
                  <button className="flex items-center space-x-4 p-3 text-red-500 font-bold">
                    <span className="p-2 bg-red-50 rounded-lg">
                      <LogOut size={16} />
                    </span>
                    <span>Sign Out</span>
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-3 pt-2">
                  <Link
                    href="/login"
                    className="w-full py-4 text-center font-bold text-slate-700 bg-white border border-pink-100 rounded-2xl"
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/signup"
                    className="w-full py-4 text-center font-bold text-white bg-linear-to-r from-pink-600 to-rose-500 rounded-2xl shadow-lg shadow-pink-100"
                  >
                    Create Account
                  </Link>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
