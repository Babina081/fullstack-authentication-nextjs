"use client";
import Image from "next/image";
import {
  Ban,
  CreditCard,
  Heart,
  KeyRound,
  ShoppingBasket,
  Star,
  User,
} from "lucide-react";
import axios from "axios";
import Link from "next/link";
import toast from "react-hot-toast";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const logout = async () => {
    try {
      // const token = cookies().get("token");
      await axios.get("/api/users/logout");
      toast.success("Logout successful");
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  const sidebarItems = [
    {
      href: "/profile",
      text: "My Account",
      icon: <User className="h-5 w-5" />,
    },
    {
      href: "/profile/orders",
      text: "My Orders",
      icon: <ShoppingBasket className="h-5 w-5" />,
    },
    {
      href: "/profile/return",
      text: "Returns And Cancel",
      icon: <Ban className="h-5 w-5" />,
    },
    {
      href: "/profile/ratings",
      text: "My Ratings and Reviews",
      icon: <Star className="h-5 w-5" />,
    },
    {
      href: "/profile/wishlist",
      text: "My Wishlist",
      icon: <Heart className="h-5 w-5" />,
    },
    {
      href: "/profile/payment",
      text: "Payment",
      icon: <CreditCard className="h-5 w-5" />,
    },
    {
      href: "/profile/change-password",
      text: "Change Password",
      icon: <KeyRound className="h-5 w-5" />,
    },
  ];
  return (
    <div className="w-1/4  bg-purple-100 rounded-lg flex flex-col">
      <div className="w-full flex  gap-2 items-center">
        <Image
          src="/profile.png"
          alt="profile"
          width={30}
          height={30}
          className=" rounded-full object-cover h-14 w-14 m-2"
        ></Image>
        <div className="flex flex-col  justify-center">
          <h3 className="text-xs">Hello!</h3>
          <h1 className="text-sm font-bold text-pruple-900 ">Babina Gurung</h1>
        </div>
      </div>
      <div className="bg-purple-600 h-1 w-full "></div>
      <ul className="m-2">
        {sidebarItems.map((item, index) => (
          <li
            key={index}
            className={`hover:bg-gradient-radial from-purple-400 to-purple-600 hover:text-white transition-all duration-500 ease-out hover:scale-110 ${
              pathname === item.href ? "bg-purple-300 text-white" : ""
            }`}
          >
            <Link
              href={item.href}
              passHref
              className="py-2 px-1 text-sm font-bold flex gap-2 items-center"
            >
              {item.icon}
              {item.text}
            </Link>
          </li>
        ))}
        <li>
          <button
            onClick={logout}
            className="text-white w-full py-4 px-8 my-4 bg-gradient-to-bl from-purple-500 to-purple-700 hover:from-pink-600 hover:to-purple-600 rounded-lg mb-2 focus:outline-none focus:border-gray-600"
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
