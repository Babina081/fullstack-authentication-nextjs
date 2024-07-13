"use client";
import axios from "axios";
import { ArrowBigLeft, FilePenLine, ImagePlus, Undo2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const EditProfilePage = () => {
  const router = useRouter();

  const [userData, setUserData] = useState({ id: "", username: "", email: "" });
  const [updatedUserData, setUpdatedUserData] = useState({
    username: "",
    email: "",
    gender: "",
    phone: "",
  });
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    fetchUserDetails();
  }, []);

  const fetchUserDetails = async () => {
    try {
      const res = await axios.get(`/api/users/me`);
      const { _id, username, email, gender, phone } = res.data.data;
      setUserData({ id: _id, username, email });
      setUpdatedUserData({ username, email, gender, phone });
    } catch (error) {
      console.error("Error fetching user details:", error);
      toast.error("Failed to fetch user details");
    }
  };

  const handleUpdateUser = async (id: any) => {
    try {
      setLoading(true);
      const res = await axios.put(
        `/api/users/editprofile?id=${id}`,
        updatedUserData
      );
      if (res) {
        toast.success("User profile updated successfully");
        router.push("/profile");
      }

      // Optionally update local state with the new data if needed
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Failed to update user profile");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdatedUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <main className="w-3/4 bg-purple-100 rounded-lg  flex flex-col p-2">
      <Link
        href="/profile"
        className="flex  gap-2   text-purple-600 hover:text-purple-400 items-center text-lg font-bold text-pruple-900 my-2 "
      >
        <ArrowBigLeft />
        Edit Personal Information
      </Link>

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
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="mt-2 ml-2">
          Name:
        </label>
        <input
          name="name"
          type="text"
          value={updatedUserData.username}
          onChange={handleChange}
          className="focus:outline-none rounded-lg p-2 max-w-96"
          //   readOnly
        />
        <label htmlFor="email" className="mt-2 ml-2">
          Email:
        </label>
        <input
          type="text"
          name="email"
          value={updatedUserData.email}
          onChange={handleChange}
          className="focus:outline-none rounded-lg p-2 max-w-96"
          //   readOnly
        />
        <label htmlFor="gender" className="mt-2 ml-2">
          Gender:
        </label>
        <input
          type="text"
          name="gender"
          value={updatedUserData.gender}
          onChange={handleChange}
          className="focus:outline-none rounded-lg p-2 max-w-96"
          //   readOnly
        />
        <label htmlFor="phone" className="mt-2 ml-2">
          Phone:
        </label>
        <input
          type="tel"
          name="phone"
          value={updatedUserData.phone}
          onChange={handleChange}
          className="focus:outline-none rounded-lg p-2 max-w-96"
          //   readOnly
        />
        <button
          type="button"
          className="text-white py-4 px-8 my-4 bg-gradient-to-bl  from-purple-500 to-purple-700 hover:from-pink-600 hover:to-purple-600 rounded-lg mb-2 focus:outline-none focus:border-gray-600 "
          onClick={() => handleUpdateUser(userData.id)}
        >
          {loading ? "Updating..." : "Update Profile"}
        </button>
      </div>
    </main>
  );
};

export default EditProfilePage;
