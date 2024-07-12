"use client";
import axios from "axios";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import Sidebar from "@/components/profile/Sidebar";
import Image from "next/image";
import { ImagePlus, FilePenLine } from "lucide-react";
type Users = { username: String; email: String; _id: String; password: String };

export default function ProfilePage() {
  const router = useRouter();
  const [data, setData] = useState({ data: { username: "", email: "" } });
  const [users, setUsers] = useState<Users[]>([]);

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

  const getUserDetails = async () => {
    const res = await axios.get("/api/users/me");
    setData(res.data);
    console.log(res.data.data.username);
  };

  const fetchUsers = async () => {
    const response = await axios.get("/api/users");
    setUsers(response.data.data);
    console.log(response.data.data);
  };

  const deleteUser = async (id: any) => {
    try {
      const response = await axios.delete(`/api/users/deleteusers?id=${id}`);
      toast.success("User deleted successfully");
      fetchUsers();
    } catch (error: any) {
      console.log("Deletion Failed: ", error.message);
      toast.error("Failed to delete user");
    }
  };

  useEffect(() => {
    fetchUsers();
    getUserDetails();
  }, []);

  return (
    <section className="w-full h-screen px-14 py-4 bg-gradient-to-br  from-red-300 to-indigo-600  profileSection flex flex-col text-purple-600 ">
      <h1 className="text-xl md:text-2xl font-bold  text-center md:text-left py-2  mr-0 md:mr-24 w-full text-purple-600 ">
        Profile
      </h1>

      <div className="flex w-4/4 h-full gap-4">
        {/* sidebar */}
        <Sidebar logout={logout}></Sidebar>

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
          <div className="flex flex-col">
            <label htmlFor="name">Name:</label>
            <input
              name="name"
              type="text"
              placeholder={data.data?.username || ""}
              value=""
              onChange={() => {}}
              className=""
            />
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              name="email"
              value=""
              onChange={() => {}}
              placeholder={data.data?.email || ""}
            />
          </div>
        </main>
      </div>

      {/* --------------- */}
      {/* <div className="flex  items-center justify-evenly min-h-screen gap-6">
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
          <h1>Profile</h1>
          <hr />
          <p>Profile Page</p>
          <h2 className="p-3 rounded bg-green-500">
            {data === "nothing" ? (
              "Nothing"
            ) : (
              <Link href={`/profile/${data}`}>{data}</Link>
            )}
          </h2>
          <button
            onClick={getUserDetails}
            className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
          >
            Get User Details
          </button>
          <hr />
          <button
            onClick={logout}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Logout
          </button>
        </div>
        <div className="text-white">
          <ul className="border-2 border-white border-dashed m-2 p-2 ">
            <h1 className="border-b-2 border-white w-auto mb-4 text-center font-bold">
              List of Users
            </h1>
            {users.map((user, i) => {
              return (
                <li
                  key={String(user._id)}
                  className="flex justify-between items-center gap-6"
                >
                  <h2>
                    {i + 1} : {user.username}
                  </h2>
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => deleteUser(user._id)}
                  >
                    Delete user
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div> */}
    </section>
  );
}
