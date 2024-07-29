"use client";
import axios from "axios";
import { LogsIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
const AdminDashCount = () => {
  const [orders, setOrders] = React.useState(0);
  const [users, setUsers] = React.useState(0);
  const [products, setProducts] = React.useState(0);
  const [categories, setCategories] = React.useState(0);

  const getOrderCount = async () => {
    const response = await axios.get(
      "http://localhost:3000/api/v1/orders/get/count",
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2Njk0ZDQwODIxZDk1NjYxNDI5MDJiZDYiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE3MjExMDQxNDgsImV4cCI6MTcyMTE5MDU0OH0.zzU3Rs9X2NwRFIpqI-t_Za6Uh8hH_ffdxRNq5tYwmmo",
        },
      }
    );
    setOrders(response.data.orderCount);
    console.log(response.data.orderCount);
  };
  // const getProductsCount = async () => {
  //   const response = await axios.get(
  //     "http://localhost:3000/api/v1/products/get/count",
  //     {
  //       headers: {
  //         Authorization:
  //           "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2Njk0ZDQwODIxZDk1NjYxNDI5MDJiZDYiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE3MjExMDQxNDgsImV4cCI6MTcyMTE5MDU0OH0.zzU3Rs9X2NwRFIpqI-t_Za6Uh8hH_ffdxRNq5tYwmmo",
  //       },
  //     }
  //   );
  //   setProducts(response.data.productsCount);
  //   console.log(response.data.productsCount);
  // };
  const getUsersCount = async () => {
    const response = await axios.get(
      "http://localhost:3000/api/v1/users/get/count",
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2Njk0ZDQwODIxZDk1NjYxNDI5MDJiZDYiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE3MjExMDQxNDgsImV4cCI6MTcyMTE5MDU0OH0.zzU3Rs9X2NwRFIpqI-t_Za6Uh8hH_ffdxRNq5tYwmmo",
        },
      }
    );
    setUsers(response.data.usersCount);
    console.log(response.data.usersCount);
  };

  useEffect(() => {
    getOrderCount();
    getUsersCount();
  }, []);

  return (
    <div className="flex flex-col items-start justify-center bg-gray-300 p-4 rounded-xl ">
      <LogsIcon className="w-8 h-8 bg-green-300 p-2 rounded-lg"></LogsIcon>
      <h1 className="text-xl font-bold">Orders</h1>
      <h3 className="text-lg font-bold">{orders}</h3>
    </div>
  );
};

export default AdminDashCount;
