"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLink = {
  name: string;
  href: string;
};

export default function DesktopMenu({ navLinks }: { navLinks: NavLink[] }) {
  const pathname = usePathname();
  return (
    <nav className="hidden md:flex items-center bg-white/40 backdrop-blur-md p-1.5 rounded-full border border-pink-100/50 shadow-sm shadow-pink-100/20">
      <ul className="flex items-center space-x-1">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <li key={link.name} className="relative">
              <Link
                href={link.href}
                className={`relative z-10 px-6 py-2.5 text-sm font-bold transition-colors duration-300 rounded-full flex items-center justify-center ${
                  isActive
                    ? "text-pink-600"
                    : "text-slate-600 hover:text-pink-500"
                }`}
              >
                {link.name}

                {/* Active Indicator (Liquid Background) */}
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-pink-500/20 shadow-sm shadow-pink-100 border border-pink-200 rounded-full -z-10"
                    transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                  />
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
