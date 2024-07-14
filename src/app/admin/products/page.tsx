// "use client";
import DeleteEditButton from "@/components/admin/DeleteEditButton";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { cookies } from "next/headers";
import ProductList from "@/components/admin/ProductList";

export const AdminProductPage = async () => {
  const token = cookies().get("token"); // Retrieve token from cookie
  console.log("token is", token);
  // fetchProducts()

  return (
    <section className="m-1 h-screen  bg-pink-100 border border-purple-300 rounded-lg flex flex-col  items-center   p-2 relative w-full">
    <ProductList></ProductList>
    </section>
  );
};

export default AdminProductPage;
