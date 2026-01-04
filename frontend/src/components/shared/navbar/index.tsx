"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ShoppingCart, Menu, X, Search } from "lucide-react";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import UserMenu from "./UserMenu";
import DesktopMenu from "./DesktopMenu";
import SearchBar from "./SearchBar";

const navLinks: { name: string; href: string }[] = [
  { name: "Home", href: "/" },
  { name: "Our Cakes", href: "/cakes" },
  { name: "Special Orders", href: "/special-order" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchActive, setSearchActive] = useState(false);

  // Handle Scroll effect for glassmorphism
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-100 transition-all duration-500 ${
        scrolled ? "top-2 px-4" : "top-0 px-0"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto transition-all duration-500 border-pink-100/50 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl rounded-full shadow-2xl border py-2"
            : "bg-white/40 backdrop-blur-md border-b py-4"
        } px-4 sm:px-6 lg:px-8`}
      >
        <div className="flex justify-between items-center h-16">
          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-600 hover:bg-pink-50 rounded-xl transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          {/* 1. Brand Logo (Modern Boutique Style) */}
          <Logo />

          {/* 2. Desktop Navigation */}
          <DesktopMenu navLinks={navLinks} />

          {/* 3. Action Hub (Search, Cart, User) */}
          <div className="flex items-center space-x-3">
            {/* Animated Search Bar */}
            <SearchBar />

            {/* Cart Icon */}
            <Link href="/cart">
              <motion.div
                whileHover={{ y: -2 }}
                className="relative p-2 bg-pink-600 text-white rounded-full shadow-lg shadow-pink-200"
              >
                <ShoppingCart size={20} />
                <span className="absolute -top-1 -right-1 bg-amber-400 text-[10px] font-bold text-amber-900 rounded-full h-4 w-4 flex items-center justify-center border-2 border-white">
                  3
                </span>
              </motion.div>
            </Link>

            {/* User Profile Dropdown */}
            <UserMenu />
          </div>
        </div>
      </div>

      {/* Mobile Glass Menu */}
      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} navLinks={navLinks} />
    </nav>
  );
};

export default Navbar;
