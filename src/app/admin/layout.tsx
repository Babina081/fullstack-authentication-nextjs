import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminNavbar from "@/components/admin/AdminNavbar";
import React from "react";
const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex w-4/4 h-auto relative">
      <div className="w-1/4 fixed top-0 left-0">
        <AdminSidebar />
      </div>
      <div className="flex flex-col w-3/4 fixed top-0 right-0">
        <AdminNavbar></AdminNavbar>
        {children}
      </div>
    </main>
  );
};

export default AdminLayout;
