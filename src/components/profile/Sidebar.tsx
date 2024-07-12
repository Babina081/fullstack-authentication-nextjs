import Image from "next/image";
import {
  Ban,
  CreditCard,
  FilePenLine,
  Heart,
  ImagePlus,
  KeyRound,
  ShoppingBasket,
  Star,
  User,
} from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Sidebar = ({ logout }: any) => {
  const router = useRouter();
  const [activeLink, setActiveLink] = useState(true);



  return (
    <div className="flex w-4/4 h-full gap-4">
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
            <h1 className="text-sm font-bold text-pruple-900 ">
              Babina Gurung
            </h1>
          </div>
        </div>
        <div className="bg-purple-600 h-1 w-full "></div>
        <ul className="m-2 ">
          <li className="hover:bg-gradient-radial from-purple-400 to-purple-600  hover:text-white transition-all  duration-500 ease-out hover:scale-110 ">
            <Link
              href="/profile"
              className="py-2 px-1 text-sm font-bold flex gap-2 items-center "
            >
              {" "}
              <User className="h-5 w-5" /> My Account
            </Link>
          </li>
          <li className="hover:bg-gradient-radial from-purple-400 to-purple-600  hover:text-white transition-all  duration-500 ease-out hover:scale-110 ">
            <Link
              href="/"
              className="py-2 px-1 text-sm font-bold flex gap-2 items-center "
            >
              {" "}
              <ShoppingBasket className="h-5 w-5" /> My Orders
            </Link>
          </li>
          <li className="hover:bg-gradient-radial from-purple-400 to-purple-600  hover:text-white transition-all  duration-500 ease-out hover:scale-110 ">
            <Link
              href="/"
              className="py-2 px-1 text-sm font-bold flex gap-2 items-center "
            >
              {" "}
              <Ban className="h-5 w-5" />
              Returns And Cancel
            </Link>
          </li>

          <li className="hover:bg-gradient-radial from-purple-400 to-purple-600  hover:text-white transition-all  duration-500 ease-out hover:scale-110 ">
            <Link
              href="/"
              className="py-2 px-1 text-sm font-bold flex gap-2 items-center "
            >
              {" "}
              <Star className="h-5 w-5" />
              My Ratings and Reviews{" "}
            </Link>
          </li>

          <li className="hover:bg-gradient-radial from-purple-400 to-purple-600  hover:text-white transition-all  duration-500 ease-out hover:scale-110 ">
            <Link
              href="/"
              className="py-2 px-1 text-sm font-bold flex gap-2 items-center "
            >
              {" "}
              <Heart className="h-5 w-5" />
              My Wishlist
            </Link>
          </li>
          <li className="hover:bg-gradient-radial from-purple-400 to-purple-600  hover:text-white transition-all  duration-500 ease-out hover:scale-110 ">
            <Link
              href="/"
              className="py-2 px-1 text-sm font-bold flex gap-2 items-center "
            >
              <CreditCard className="h-5 w-5" />
              Payment{" "}
            </Link>
          </li>
          <li className="hover:bg-gradient-radial from-purple-400 to-purple-600  hover:text-white transition-all  duration-500 ease-out hover:scale-110 ">
            <Link
              href="/"
              className="py-2 px-1 text-sm font-bold flex gap-2 items-center "
            >
              {" "}
              <KeyRound className="h-5 w-5" /> Change Password
            </Link>
          </li>
          <li>
            <button
              onClick={logout}
              className="text-white w-full py-4 px-8 my-4 bg-gradient-to-bl  from-purple-500 to-purple-700 hover:from-pink-600 hover:to-purple-600 rounded-lg mb-2 focus:outline-none focus:border-gray-600 "
            >
              Logout
            </button>
          </li>
        </ul>
      </div>

      {/* main */}
      <main className="w-3/4 bg-purple-100 rounded-lg  flex flex-col p-2">
        <h1 className="text-lg font-bold text-pruple-900 my-2 ">
          Personal Information
        </h1>

        <div className="h-1 w-full bg-purple-600 "></div>
        <div className="flex justify-between items-start my-2">
          <div className="relative">
            <Image
              src="/profile.png"
              alt="profile image"
              width={50}
              height={50}
              className="rounded-full h-20 w-20 object-cover"
            ></Image>
            <ImagePlus className="  absolute bottom-0 right-0 rounded-full p-1 bg-white border-2 border-purple-400" />
          </div>
          <Link
            href="/"
            className="flex  gap-2 items-center text-sm text-purple-900 hover:text-purple-400 "
          >
            <FilePenLine className="h-5 w-5 " /> Change Profile Information
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Sidebar;
