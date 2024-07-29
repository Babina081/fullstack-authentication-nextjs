import AdminDashCount from "@/components/admin/AdminDashCount";
import Charts from "@/components/admin/Charts";
import React from "react";

const AdminPage = () => {
  return (
    <section className="m-2  flex flex-col mb-8 ">
      <h1 className="text-xl font-bold">Dashboard</h1>
      <div className="grid grid-cols-4 my-4 gap-4">
        <AdminDashCount></AdminDashCount>
        <AdminDashCount></AdminDashCount>
        <AdminDashCount></AdminDashCount>
        <AdminDashCount></AdminDashCount>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4  ">
        <div className="border border-gray-300 shadow-lg p-4 rounded-xl">
          hello
        </div>
        <div className="border border-gray-300 shadow-lg p-4 rounded-xl">
          <Charts></Charts>
        </div>
        <div className="border border-gray-300 shadow-lg p-4 rounded-xl">
          hello
        </div>
      </div>
    </section>
  );
};

export default AdminPage;
