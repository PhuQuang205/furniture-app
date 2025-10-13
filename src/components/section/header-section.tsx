"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FurnitureLogo } from "@/components/FurnitureLogo";
import { Heart, Menu, Search, ShoppingBagIcon, User } from "lucide-react";
import { NAV_LINK } from "@/context/index";
import { Customer } from "@/lib/services/authService";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"; // ✅ import shadcn avatar

export const HeaderSection = () => {
  const [customer, setCustomer] = useState<Customer | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("customer");
    if (stored) {
      setCustomer(JSON.parse(stored));
    }
  }, []);

  const getInitial = (name: string) => name.charAt(0).toUpperCase();

  return (
    <section className="container mx-auto">
      <div className="flex items-center justify-between py-4 lg:py-8 px-8 lg:px-4">
        <div className="text-white text-sm">
          <FurnitureLogo active={false} />
        </div>

        <div className="text-black text-sm font-semibold gap-4 lg:gap-8 hidden lg:flex">
          {NAV_LINK.map((item, index) => (
            <div key={index}>
              <Link href={item.path}>{item.title}</Link>
            </div>
          ))}
        </div>

        <div className="gap-4 hidden lg:flex items-center">
          <Search className="size-5 cursor-pointer" />
          <Link href="/wishlist">
            <Heart className="size-5" />
          </Link>

          {/* 🛒 Giỏ hàng */}
          <Link href="/shopping-cart" className="relative">
            <ShoppingBagIcon className="size-5" />
          </Link>

          {/* 👤 Avatar người dùng */}
          <Link href="/my-account">
            {customer ? (
              <Avatar className="size-8 border border-green-700 text-greenly">
                <AvatarImage				
                  src={customer.avatarUrl || ""}
                  alt={customer.lastName}
                />
                <AvatarFallback className="bg-green-100">
                  {getInitial(customer.lastName || "U")}
                </AvatarFallback>
              </Avatar>
            ) : (
              <User className="size-5" />
            )}
          </Link>
        </div>

        <div className="flex lg:hidden p-2 bg-greenly rounded-sm">
          <Menu className="size-5 text-yelly" />
        </div>
      </div>
    </section>
  );
};
