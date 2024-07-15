"use client";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import EditUsers from "./EditUsers";

type Users = {
  name: String;
  email: String;
  _id: String;
  password: String;
  phone: String;
  address: String;
  isAdmin: Boolean;
  isVerified: Boolean;
  gender: String;
  image: String;
};

const UsersList = ({ token }: any) => {
  const [users, setUsers] = useState<Users[]>([]);

  const fetchUsers = async () => {
    const response = await axios.get("http://localhost:3000/api/v1/users/", {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2Njk0ZDQwODIxZDk1NjYxNDI5MDJiZDYiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE3MjEwNDgzNDUsImV4cCI6MTcyMTEzNDc0NX0.bZgEB_kXrdWEb7YmmBn6VYGU5JllQDZqf0FcTyfWyK4`,
      },
    });
    setUsers(response.data);
    console.log(`userslist.....`, response.data);
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
    <tbody className=" ">
      {users.map((user, i) => (
        <tr
          className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 "
          key={i}
        >
          <td className="">{i + 1}</td>
          <td className="  flex items-center justify-center">
            <Image
              src={user.image ? `${user.image}` : "/avatar.png"}
              alt={`${user.name}`}
              height={50}
              width={50}
              className="object-cover rounded-full p-2"
            ></Image>
          </td>
          <th
            scope="row"
            className="  font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {user?.name}
          </th>
          <td className=" ">{user?.email || "-"}</td>
          <td className=" ">{user?.gender || "-"}</td>

          <td className=" ">{user?.address || "-"}</td>
          <td className=" ">{user?.phone || "-"}</td>
          <td
            className={`  text-center  capitalize  ${
              user?.isAdmin === true ? "text-red-400" : "text-green-400"
            }`}
          >
            {user?.isAdmin === true ? "admin" : "user"}
          </td>
          <td
            className={`  text-center  capitalize  ${
              user?.isVerified === true ? "text-green-400" : "text-red-400"
            }`}
          >
            {user?.isVerified === true ? "yes" : "no"}
          </td>
          <td className="   ">
            <EditUsers user={user} fetchUsers={fetchUsers}></EditUsers>

            <button
              className="bg-red-500 hover:bg-red-700 text-white  transition font-medium duration-500 p-2 rounded-xl ml-2"
              onClick={() => deleteUser(user._id)}
            >
              Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default UsersList;
