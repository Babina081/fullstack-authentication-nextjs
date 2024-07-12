import { LogOut, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="w-full px-14 flex justify-between bg-gradient-to-tr from-red-300 to-indigo-600  h-24 items-center text-white ">
      <button
        type="button"
        className="flex md:hidden navbar-toggle"
        aria-label="Toggle menu"
        aria-expanded="false"
        aria-controls="navbar-menu"
      >
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>

      <Link href="/home">
        <h1 className="text-3xl font-bold hover:text-pink-500 transition-all duration-500 ease-in-out">
          E-Shop
        </h1>
      </Link>

      <ul className="hidden md:flex gap-8 text-xl ">
        <li className="font-semibold  hover:scale-125 transform-gpu duration-300 ease-in-out  ">
          <Link href="/home" className="menu">
            Home
          </Link>
        </li>
        <li className="font-semibold  hover:scale-125 transform-gpu duration-300 ease-in-out  ">
          <Link href="/about" className="menu">
            About
          </Link>
        </li>
        <li className="font-semibold  hover:scale-125 transform-gpu duration-300 ease-in-out  ">
          <Link href="/shop" className="menu">
            Shop
          </Link>
        </li>
        <li className="font-semibold  hover:scale-125 transform-gpu duration-300 ease-in-out  ">
          <Link href="/contact" className="menu">
            Contact
          </Link>
        </li>
      </ul>
      <div className="flex gap-4">
        <Link
          href="/cart"
          className="menu  flex gap-1 items-center justify-center   hover:scale-125 transform-gpu duration-300 ease-in-out"
        >
          <ShoppingCart className=" h-7 w-7" />
        </Link>

        <Link
          href="/login"
          className="menu  flex gap-1 items-center justify-center  hover:scale-125 transform-gpu duration-300 ease-in-out"
        >
          <LogOut className=" h-7 w-7" />
        </Link>

        <Link
          href="/profile"
          className="menu  flex gap-1 items-center justify-center  hover:scale-125 transform-gpu duration-300 ease-in-out"
        >
          <User className=" h-7 w-7" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
