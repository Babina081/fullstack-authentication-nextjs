import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="">
      <Header></Header>
      {children}
     
      <Footer></Footer>
    </main>
  );
};

export default HomeLayout;
