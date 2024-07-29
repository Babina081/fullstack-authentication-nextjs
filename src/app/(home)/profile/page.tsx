"use client";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ImagePlus, FilePenLine } from "lucide-react";
import Image from "next/image";

export default function ProfilePage() {
  const [data, setData] = useState({
    data: { name: "", email: "", gender: "", phone: "", address: "" },
  });

  const getUserDetails = async () => {
    const res = await axios.get("/api/users/me", {
      headers: {
        Authorization: `Bearer ${process.env.TOKEN}`,
      },
    });
    setData(res.data);
    console.log(res.data);
  };

  useEffect(() => {
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
          placeholder={data.data?.name || ""}
          value=""
          onChange={() => {}}
          className="focus:outline-none  rounded-lg p-2 max-w-96"
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
          className="focus:outline-none  rounded-lg p-2 max-w-96"
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
          className="focus:outline-none  rounded-lg p-2 max-w-96"
          readOnly={true}
        /> */}
        <label htmlFor="address" className="mt-2 ml-2">
          Address:
        </label>
        <input
          type="text"
          name="address"
          value=""
          onChange={() => {}}
          placeholder={data.data?.address || ""}
          className="focus:outline-none  rounded-lg p-2 max-w-96"
          readOnly={true}
        />
        <label htmlFor="gender" className="mt-2 ml-2">
          Gender:
        </label>
        <input
          type="text"
          name="gender"
          value=""
          onChange={() => {}}
          placeholder={data.data?.gender || ""}
          className="focus:outline-none  rounded-lg p-2 max-w-96"
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
          className="focus:outline-none  rounded-lg p-2 max-w-96"
          readOnly={true}
        />
      </div>
    </main>
  );
}
