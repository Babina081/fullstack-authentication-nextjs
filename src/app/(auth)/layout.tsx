import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-gradient-to-br from-red-300 to-indigo-600 h-[100vh] overflow-hidden  flex justify-center items-center ">
      <div className=" border-4 border-white rounded-3xl   w-full max-w-7xl shadow-[0px_0px_100px_10px_rgba(0,0,0,0.30)] bg-gradient-to-br from-red-300 to-indigo-600 p-10 grid grid-cols-2">
        <div>hello</div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
