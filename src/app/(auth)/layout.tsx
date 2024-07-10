import Image from "next/image";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-gradient-to-br from-red-300 to-indigo-600 h-[100vh] overflow-hidden  flex justify-center items-center ">
      <div className="  md:rounded-3xl  h-full w-full md:h-auto md:w-auto  md:max-w-7xl shadow-[0px_0px_100px_10px_rgba(0,0,0,0.30)] bg-gradient-to-br from-red-300 to-indigo-600 p-10 grid grid-cols-1  md:grid-cols-2 ">
        <div className="hidden md:flex flex-col items-center justify-start p-1 ">
          <h1 className="text-5xl font-bold border-b-4  border-white mb-4">
            E-shop
          </h1>

          <p className="text-2xl">Selling only the best things online </p>
          <Image
            src="/e-shop-image.png"
            alt="eshop-image"
            height={400}
            width={400}
            className="overflow-hidden"
          ></Image>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
