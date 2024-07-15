import UsersList from "@/components/admin/UsersList";
import { cookies } from "next/headers";
import React from "react";

const ManageUsersPage = () => {
  const token = cookies().get("token"); // Retrieve token from cookie
  console.log("token is", token);

  return (
    <section className="m-2 h-full p-2 flex flex-col">
      <h1 className="text-lg font-bold mb-4">Manage Users Page</h1>
      <table className="w-full h-full text-sm text-center text-gray-500 dark:text-gray-400 relative rounded-lg overflow-auto">
        <thead className=" text-xs text-gray-700 uppercase bg-slate-200 dark:bg-gray-700 sticky top-0 left-0 z-20">
          <tr>
            <th scope="col" className="p-4">
              SN
            </th>
            <th scope="col" className=" py-3">
              Image
            </th>
            <th scope="col" className=" py-3">
              Username
            </th>
            <th scope="col" className=" py-3">
              Email
            </th>
            <th scope="col" className=" py-3">
              Gender
            </th>
            <th scope="col" className=" py-3">
              Address
            </th>
            <th scope="col" className=" py-3">
              Phone
            </th>
            <th scope="col" className=" py-3">
              Status
            </th>
            <th scope="col" className=" py-3">
              Verified
            </th>
            <th scope="col" className=" py-3">
              Actions
            </th>
          </tr>
        </thead>
        <UsersList token={token}></UsersList>
      </table>
    </section>
  );
};

export default ManageUsersPage;
