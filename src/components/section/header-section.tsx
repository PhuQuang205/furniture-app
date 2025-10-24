"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // ✅ Thêm usePathname
import { motion } from "framer-motion";
import { FurnitureLogo } from "@/components/FurnitureLogo";
import { Heart, Menu, Search, ShoppingBagIcon, User } from "lucide-react";
import { NAV_LINK } from "@/context/index";
import { Customer } from "@/lib/services/authService";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const HeaderSection = () => {
  const [customer, setCustomer] = useState<Customer | null>(null);
  const [isSticky, setIsSticky] = useState(false);
  const pathname = usePathname(); // ✅ Lấy path hiện tại

  useEffect(() => {
    const stored = localStorage.getItem("customer");
    if (stored) setCustomer(JSON.parse(stored));

    const handleScroll = () => {
      if (window.scrollY > 40) setIsSticky(true);
      else setIsSticky(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getInitial = (name: string) => name.charAt(0).toUpperCase();

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={`top-0 left-0 w-full z-50 transition-all flex items-center duration-300 ${
        isSticky
          ? "fixed bg-white/50 h-20 backdrop-blur-md shadow-md border-b border-gray-200"
          : "relative bg-transparent"
      }`}
    >
      <div className="container mx-auto">
        <div
          className={`flex items-center justify-between py-4 lg:py-6 px-6 lg:px-4 transition-all duration-300 ${
            isSticky ? "py-3" : "py-5"
          }`}
        >
          {/* 🪑 Logo */}
          <div
            className={`transition-transform duration-300 ${
              isSticky ? "scale-90" : "scale-100"
            }`}
          >
            <FurnitureLogo active={false} />
          </div>

          {/* 🔗 Navigation */}
          <div className="text-black text-sm font-semibold gap-6 lg:gap-8 hidden lg:flex">
            {NAV_LINK.map((item, index) => {
              const isActive = pathname === item.path; // ✅ Kiểm tra link đang active
              return (
                <Link
                  key={index}
                  href={item.path}
                  className={`relative transition-colors duration-200 hover:text-greenly ${
                    isActive ? "text-greenly after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-greenly" : ""
                  }`}
                >
                  {item.title}
                </Link>
              );
            })}
          </div>

          {/* 🔍 Icons */}
          <div className="gap-4 hidden lg:flex items-center text-gray-700">
            <Search className="size-5 cursor-pointer hover:text-greenly transition" />
            <Link href="/wishlist">
              <Heart className="size-5 hover:text-greenly transition" />
            </Link>

            {/* 🛒 Giỏ hàng */}
            <Link href="/shopping-cart" className="relative hover:text-greenly transition">
              <ShoppingBagIcon className="size-5" />
            </Link>

            {/* 👤 Avatar người dùng */}
            <Link href="/my-account">
              {customer ? (
                <Avatar className="size-8 border border-green-700">
                  <AvatarImage
                    src={customer.avatarUrl || ""}
                    alt={customer.lastName}
                  />
                  <AvatarFallback className="bg-green-100 text-greenly">
                    {getInitial(customer.lastName || "U")}
                  </AvatarFallback>
                </Avatar>
              ) : (
                <User className="size-5 hover:text-greenly transition" />
              )}
            </Link>
          </div>

          {/* 📱 Menu di động */}
          <div className="flex lg:hidden p-2 bg-greenly rounded-sm">
            <Menu className="size-5 text-yelly" />
          </div>
        </div>
      </div>
    </motion.header>
  );
};
