"use client";
import axios from "axios";
import { LogOut, ShoppingCart, User } from "lucide-react";
// import { cookies } from "next/headers";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

const Header = () => {
  const router = useRouter();
  // const token = cookies().get("token");
  // console.log(token);

  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = (isVisible: boolean) => {
    setMenuVisible(isVisible);
  };

  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logout successful");
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

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
        <div className="relative inline-block text-left">
          <div>
            <button
              type="button"
              className="menu  flex gap-1 items-center justify-center  hover:scale-125 transform-gpu duration-300 ease-in-out "
              id="menu-button"
              onMouseEnter={() => toggleMenu(true)}
              onMouseLeave={() => toggleMenu(false)}
            >
              <User
                className={` h-7 w-7 ${
                  menuVisible === true ? "scale-125 transform-gpu " : ""
                }`}
              />
            </button>
          </div>
          <div
            className={`absolute right-0 mt-2 z-10 w-36 origin-top-right  bg-transparent  ${
              menuVisible ? "" : "hidden"
            }`}
            onMouseEnter={() => toggleMenu(true)}
            onMouseLeave={() => toggleMenu(false)}
            onClick={() => toggleMenu(false)}
          >
            <div className="bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none rounded-md overflow-hidden">
              <Link
                href="/profile"
                className="block w-full px-4 py-2 text-left text-sm text-gray-700  hover:text-white hover:bg-gradient-radial from-purple-500 to-purple-600"
              >
                My Profile
              </Link>

              <button
                type="submit"
                className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:text-white hover:bg-gradient-radial from-purple-500 to-purple-600"
                onClick={logout}
              >
                Sign out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
