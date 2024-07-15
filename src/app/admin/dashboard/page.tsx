import React from "react";
import AdminDashCount from "../../../components/admin/AdminDashCount";
import Charts from "../../../components/admin/Charts";

const DashboardPage = () => {
  return (
    <section className="m-2  flex flex-col  ">
      <h1 className="text-xl font-bold">Dashboard</h1>
      <div className="grid grid-cols-4 my-4 gap-4">
        <AdminDashCount></AdminDashCount>
        <AdminDashCount></AdminDashCount>
        <AdminDashCount></AdminDashCount>
        <AdminDashCount></AdminDashCount>
      </div>
      <div className="grid grid-cols-3  gap-4 bg-red-400 ">
        <Charts></Charts>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
      </div>
    </section>
  );
};

export default DashboardPage;
