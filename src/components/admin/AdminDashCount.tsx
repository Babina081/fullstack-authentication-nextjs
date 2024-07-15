import { LogsIcon } from "lucide-react";
import React from "react";
const AdminDashCount = () => {
  return (
    <div className="flex flex-col items-start justify-center bg-gray-300 p-4 rounded-xl ">
      <LogsIcon className="w-8 h-8 bg-green-300 p-2 rounded-lg"></LogsIcon>
      <h1 className="text-xl font-bold">Orders</h1>
      <h3 className="text-lg font-bold">500</h3>
    </div>
  );
};

export default AdminDashCount;
