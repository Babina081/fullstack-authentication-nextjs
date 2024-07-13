import {
  Facebook,
  Github,
  Heart,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col px-14 my-8">
      <div className="flex flex-col md:flex-row gap-2 justify-between  items-center">
        <Link href="/home">
          <h1 className="text-3xl font-bold text-black hover:text-red-700 transition-all duration-500 ease-in-out">
            E-Shop
          </h1>
        </Link>
        <div className="flex gap-4 items-center justify-center">
          <Link
            href="#"
            className="hover:text-red-700 hover:scale-125 transition-all duration-500 ease-in-out"
          >
            {" "}
            <Facebook />
          </Link>
          <Link
            href="#"
            className="hover:text-red-700 hover:scale-125 transition-all duration-500 ease-in-out"
          >
            {" "}
            <Instagram />
          </Link>
          <Link
            href="#"
            className="hover:text-red-700 hover:scale-125 transition-all duration-500 ease-in-out"
          >
            {" "}
            <Twitter />
          </Link>
          <Link
            href="#"
            className="hover:text-red-700 hover:scale-125 transition-all duration-500 ease-in-out"
          >
            {" "}
            <Linkedin />
          </Link>
          <Link
            href="#"
            className="hover:text-red-700 hover:scale-125 transition-all duration-500 ease-in-out"
          >
            {" "}
            <Youtube />
          </Link>
          <Link
            href="#"
            className="hover:text-red-700 hover:scale-125 transition-all duration-500 ease-in-out"
          >
            {" "}
            <Github />
          </Link>
        </div>
      </div>
      <div className="h-1 w-full  bg-red-700 my-2"></div>
      <div className="flex flex-col md:flex-row justify-between  items-center">
        <h4>Copyright&copy;2024</h4>
        <h4 className="flex  items-center justify-center">
          Made By Babina Gurung{" "}
          <Heart
            className="text-pink-700 animate-pulse h-5 w-5"
            fill="#ffc16f"
          />
        </h4>
        <h4>All Right Reserved</h4>
      </div>
    </div>
  );
};

export default Footer;
