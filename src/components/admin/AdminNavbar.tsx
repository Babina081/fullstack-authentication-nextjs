"use client";
import axios from "axios";
import { Bell, Search } from "lucide-react";
import React from "react";
import { useEffect } from "react";
import Image from "next/image";

const AdminNavbar = () => {
  const [data, setData] = React.useState({
    username: "",
    email: "",
    image: "",
  });
  // Get the current hour
  const currentTime = new Date().getHours();

  // Function to determine the appropriate greeting
  function getGreeting() {
    if (currentTime >= 5 && currentTime < 12) {
      return "Good Morning";
    } else if (currentTime >= 12 && currentTime < 18) {
      return "Good Afternoon";
    } else {
      return "Good Evening";
    }
  }

  // Render the greeting dynamically
  const greeting = getGreeting();

  const getUserDetails = async () => {
    const res = await axios.get("/api/users/me");
    setData(res.data.data);
    console.log(res.data.data);
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  return (
    <nav className="flex justify-between items-center p-2 bg-gradient-to-tr from-purple-200 to-pink-200 sticky top-0 z-10 ">
      <div className="flex flex-col">
        <p>{greeting},</p>
        <h1 className="text-sm font-bold">{data.username}</h1>
      </div>
      <div className="flex gap-2 justify-center items-center">
        <Search />
        <Bell />
        <Image
          src={data?.image || "/profile.png"} // Replace '/default-image.jpg' with your actual default image path
          alt={data.username || "User Profile Image"}
          height={50}
          width={50}
          className="rounded-full border-2 h-14 w-14 border-black object-cover"
        />
        <div className="flex flex-col">
          <h1 className="text-sm font-bold">{data.username}</h1>
          <p>{data.email}</p>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
