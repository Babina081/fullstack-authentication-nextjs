"use client";
import axios from "axios";
import { Star } from "lucide-react";
import Image from "next/image";
import React, { useEffect } from "react";
import toast from "react-hot-toast";

const ProductCard = ({ product }: any) => {
  return (
    <div className="relative flex flex-col border border-pink-100 m-2 gap-1 rounded-lg justify-center items-center overflow-hidden cursor-pointer">
      <div className="bg-white flex w-full items-center justify-center ">
        <Image
          loader={() => product.image}
          src={product.image}
          alt={product.name}
          width={200}
          height={200}
          className="object-cover "
        ></Image>
      </div>
      <div className="flex my-4 w-full px-2 justify-between items-start">
        <div className="flex flex-col items-start ">
          <h4 className="text-xl  text-pink-700 font-bold  ">{product.name}</h4>

          <h3>Rs {product.price}</h3>
        </div>
        <div className="flex">
          <Star></Star>
        </div>
      </div>

      <div className="absolute top-5 left-5 bg-gray-400 p-2 rounded-xl">
        Sale
      </div>
    </div>
  );
};

export default ProductCard;
