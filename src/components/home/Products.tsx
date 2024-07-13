"use client";
import axios from "axios";
import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import toast from "react-hot-toast";

const Products = () => {
  const [products, setProducts] = React.useState([]);
  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/v1/products");

      setProducts(response.data);
      console.log(response.data);
    } catch (error: any) {
      console.log(error);
      toast.error(error.message);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <section className=" bg-gradient-to-br from-red-300 to-indigo-600  h-full flex flex-col px-14 py-4 content-center text-white bannerSection ">
      <div className="flex flex-col  justify-center md:justify-start items-center md:items-start relative text-left  ">
        <h4 className="text-xl my-4 text-pink-700 font-bold  border-b-2 border-b-pink-700">
          Best Offers
        </h4>
        <h1 className="text-xl md:text-3xl py-0 md:py-4 text-purple-600  font-extrabold ">
          Discover the Latest Additions at Your Top Choice Flower Shop
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product: any) => {
          return <ProductCard key={product.id} product={product}></ProductCard>;
        })}
      </div>
    </section>
  );
};

export default Products;
