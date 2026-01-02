
"use client";
import Link from "next/link";

type NavLink = {
  name: string;
  href: string;
};

export default function DesktopMenu({
  navLinks,
}: {
  navLinks: NavLink[];
}) {
  return (
    <div className="hidden lg:flex space-x-1 items-center bg-pink-500/50 p-1 rounded-full border border-pink-100/20">
      {navLinks.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className="px-5 py-2 text-gray-600 hover:text-pink-600 transition-all text-sm font-semibold rounded-full hover:bg-white"
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
}
