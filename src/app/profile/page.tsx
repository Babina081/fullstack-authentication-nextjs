"use client";
import axios from "axios";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
type Users = { username: String; email: String; _id: String; password: String };
export default function ProfilePage() {
  const router = useRouter();
  const [data, setData] = useState("nothing");
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

    setData(res.data.data._id);
    console.log(res.data.data._id);
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
  }, []);

  return (
    <div className="flex  items-center justify-evenly min-h-screen gap-6">
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
    </div>
  );
}
