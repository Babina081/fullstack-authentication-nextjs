import React from "react";
import Link from "next/link";

const AdminSidebar = () => {
  return (
    <main className="h-screen  bg-pink-300 flex flex-col items-start w-1/4">
      <h1>E-Shop Admin Panel</h1>
      <hr />
      <h1>General</h1>
      <ul>
        <li>
          <Link href="/admin/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link href="/admin">Orders</Link>
        </li>
        <li>
          <Link href="/admin">Products</Link>
        </li>
        <li>
          <Link href="/admin">Orders</Link>
        </li>
        <li>
          <Link href="/admin">Analytics</Link>
        </li>
        <li>
          <Link href="/admin">Messages</Link>
        </li>
      </ul>
    </main>
  );
};

export default AdminSidebar;
