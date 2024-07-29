"use client";
import React from "react";
import Link from "next/link";
import {
  BarChartBig,
  CircleHelp,
  CreditCard,
  LayoutDashboard,
  Logs,
  Mail,
  Settings,
  ShoppingBag,
  Tag,
  Users,
} from "lucide-react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const AdminSidebar = () => {
  const router = useRouter();

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
    <main className="h-screen  bg-gradient-to-l from-purple-200 to-pink-200 flex flex-col items-start w-full py-4 pl-4 overflow-auto ">
      <Link
        href="/home"
        className="sticky top-0 left-0  bg-gradient-to-l from-purple-200 to-pink-200  w-full"
      >
        <h1 className="text-3xl font-bold hover:text-pink-500 transition-all duration-500 ease-in-out">
          E-Shop
        </h1>
      </Link>

      <div className="h-1 w-full bg-gradient-to-tl from-pink-400 to-purple-600  my-2 " />

      <h2 className="text-lg font-semibold my-4">General</h2>
      <ul className="w-full  ">
        <li className="py-2 px-1  text-lg rounded-lg hover:text-white cursor-pointer hover:bg-gradient-radial from-purple-500 to-purple-600 w-full">
          <Link className="flex gap-2 items-center " href="/admin">
            <LayoutDashboard />
            Dashboard
          </Link>
        </li>
        <li className="py-2 px-1  text-lg rounded-lg hover:text-white cursor-pointer hover:bg-gradient-radial from-purple-500 to-purple-600 w-full">
          <Link className="flex gap-2 items-center " href="/admin">
            <Logs />
            Orders
          </Link>
        </li>
        <li className="py-2 px-1  text-lg rounded-lg hover:text-white cursor-pointer hover:bg-gradient-radial from-purple-500 to-purple-600 w-full">
          <Link className="flex gap-2 items-center " href="/admin/products">
            <ShoppingBag />
            Products
          </Link>
        </li>
        <li className="py-2 px-1  text-lg rounded-lg hover:text-white cursor-pointer hover:bg-gradient-radial from-purple-500 to-purple-600 w-full">
          <Link className="flex gap-2 items-center " href="/admin/products">
            <Tag />
            Flash Sales
          </Link>
        </li>

        <li className="py-2 px-1  text-lg rounded-lg hover:text-white cursor-pointer hover:bg-gradient-radial from-purple-500 to-purple-600 w-full">
          <Link className="flex gap-2 items-center " href="/admin">
            <BarChartBig />
            Analytics
          </Link>
        </li>
        <li className="py-2 px-1  text-lg rounded-lg hover:text-white cursor-pointer hover:bg-gradient-radial from-purple-500 to-purple-600 w-full">
          <Link className="flex gap-2 items-center " href="/admin">
            <Mail />
            Messages
          </Link>
        </li>
        <li className="py-2 px-1  text-lg rounded-lg hover:text-white cursor-pointer hover:bg-gradient-radial from-purple-500 to-purple-600 w-full">
          <Link className="flex gap-2 items-center " href="/admin">
            <CreditCard />
            Payments
          </Link>
        </li>
      </ul>
      <h2 className="text-lg font-semibold my-4">Account</h2>
      <ul className="w-full  ">
        <li className="py-2 px-1  text-lg rounded-lg hover:text-white cursor-pointer hover:bg-gradient-radial from-purple-500 to-purple-600 w-full">
          <Link className="flex gap-2 items-center " href="/admin/dashboard">
            <Settings />
            Setting
          </Link>
        </li>
        <li className="py-2 px-1  text-lg rounded-lg hover:text-white cursor-pointer hover:bg-gradient-radial from-purple-500 to-purple-600 w-full">
          <Link className="flex gap-2 items-center " href="/admin">
            <CircleHelp />
            Help
          </Link>
        </li>
        <li className="py-2 px-1  text-lg rounded-lg hover:text-white cursor-pointer hover:bg-gradient-radial from-purple-500 to-purple-600 w-full">
          <Link className="flex gap-2 items-center " href="/admin/manageusers">
            <Users />
            Manage Users
          </Link>
        </li>
        <li>
          <button
            className="text-white w-full py-4 px-8 my-4 bg-gradient-to-bl from-purple-500 to-purple-700 hover:from-pink-600 hover:to-purple-600 rounded-lg mb-2 focus:outline-none focus:border-gray-600"
            onClick={logout}
          >
            Logout
          </button>
        </li>
      </ul>
    </main>
  );
};

export default AdminSidebar;
