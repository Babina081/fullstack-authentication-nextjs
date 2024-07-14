import { CirclePlus } from "lucide-react";
import React from "react";

const AddProductPage = () => {
  return (
    <form className="m-1 h-screen  bg-pink-100 border border-purple-300 rounded-lg flex flex-col  items-center   p-2 relative w-full">
      <div className="flex justify-between w-full mb-2 items-center">
        <h1 className="text-xl font-bold  transition-all duration-500 ease-in-out sticky top-0 left-0 flex gap-1 items-center ">
          <CirclePlus className="w-5 h-5" />
          Add New Products
        </h1>
        <button
          type="button"
          className="text-white  py-2 px-4  bg-gradient-to-bl from-purple-500 to-purple-700 hover:from-pink-600 hover:to-purple-600 rounded-lg focus:outline-none focus:border-gray-600"
        >
          Add Product
        </button>
      </div>
      <div className="grid grid-cols-2 gap-2 w-full h-full">
        <div className=" flex flex-col">
          <h1>General Information</h1>
          <label htmlFor="name">Name Product</label>
          <input type="text" value="name" />
          <label htmlFor="name">Description Product</label>
          <textarea name="" id=""></textarea>
          <h1>Pricing And Stock</h1>
          <div className="flex">
            <div className="flex flex-col">
              <label htmlFor="name">Base Pricing</label>
              <input type="text" value="name" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="name">Stock</label>
              <input type="text" value="name" />
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col">
              <label htmlFor="name">Discount</label>
              <input type="text" value="name" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="name">Discount Type</label>
              <input type="text" value="name" />
            </div>
          </div>
        </div>

        <div className="bg-green-300">world</div>
      </div>
    </form>
  );
};

export default AddProductPage;
