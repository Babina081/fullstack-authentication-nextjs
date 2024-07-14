"use client";
import axios from "axios";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ImagePlus, FilePenLine } from "lucide-react";
import Image from "next/image";
type Users = { username: String; email: String; _id: String; password: String };

export default function ProfilePage() {
  const router = useRouter();

  const [data, setData] = useState({
    data: { username: "", email: "", gender: "", phone: "" },
  });
  const [users, setUsers] = useState<Users[]>([]);

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
          <ImagePlus className="  absolute bottom-0 right-0 rounded-full p-1 bg-white border-2 border-purple-400 hover:cursor-pointer hover:scale-125 transition-all duration-500 ease-out" />
        </div>
        <Link
          href="/profile/edit"
          className="flex  gap-2 items-center text-sm text-purple-900 hover:text-purple-400 "
        >
          <FilePenLine className="h-5 w-5 " /> Change Profile Information
        </Link>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="mt-2 ml-2">
          Name:
        </label>
        <input
          name="name"
          type="text"
          placeholder={data.data?.username || ""}
          value=""
          onChange={() => {}}
          className="focus:outline-none rounded-lg p-2 max-w-96"
          readOnly={true}
        />
        <label htmlFor="email" className="mt-2 ml-2">
          Email:
        </label>
        <input
          type="text"
          name="email"
          value=""
          onChange={() => {}}
          placeholder={data.data?.email || ""}
          className="focus:outline-none rounded-lg p-2 max-w-96"
          readOnly={true}
        />
        {/* <label htmlFor="dob" className="mt-2 ml-2">
          Date Of Birth:
        </label>
        <input
          type="text"
          name="dob"
          value=""
          onChange={() => {}}
          placeholder={""}
          className="focus:outline-none rounded-lg p-2 max-w-96"
          readOnly={true}
        /> */}
        <label htmlFor="gender" className="mt-2 ml-2">
          Gender:
        </label>
        <input
          type="text"
          name="gender"
          value=""
          onChange={() => {}}
          placeholder={data.data?.gender || ""}
          className="focus:outline-none rounded-lg p-2 max-w-96"
          readOnly={true}
        />
        <label htmlFor="phone" className="mt-2 ml-2">
          Phone:
        </label>
        <input
          type="text"
          name="phone"
          value=""
          onChange={() => {}}
          placeholder={data.data?.phone || ""}
          className="focus:outline-none rounded-lg p-2 max-w-96"
          readOnly={true}
        />
      </div>
    </main>
  );
}
