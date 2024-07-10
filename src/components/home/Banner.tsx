"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import React, { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

const Banner = () => {
  //   useEffect(() => {
  //     gsap.to(".bannerContent", {
  //       xPercent: -100,
  //       ease: "none",
  //       scrollTrigger: {
  //         trigger: ".bannerSection",
  //         scrub: true,
  //       },
  //     });

  //     gsap.to(".bannerImage", {
  //       xPercent: -50,
  //       ease: "none",
  //       scrollTrigger: {
  //         trigger: ".bannerSection",
  //         scrub: true,
  //       },
  //     });
  //   }, []);

  return (
    <section className="w-full bg-gradient-to-br from-red-300 to-indigo-600  h-full grid grid-cols-1 md:grid-cols-2 px-14 py-4 content-center text-white bannerSection ">
      <div className="flex flex-col justify-center items-center md:items-start text-wrap ">
        <h3 className="text-lg md:text-xl py-4">WELCOME TO E-SHOP</h3>
        <h1 className="text-3xl md:text-6xl font-bold  text-center md:text-left py-4  mr-0 md:mr-24  ">
          Elevate Your Space with Authentic Wardrobe.
        </h1>
        <h2 className="text-sm md:text-lg py-4">Starting from just Rs. 500</h2>
        <button className=" py-4 px-8 my-4 bg-gradient-to-bl  from-purple-500 to-purple-700 hover:from-pink-600 hover:to-purple-600 rounded-lg mb-2 focus:outline-none focus:border-gray-600 ">
          SHOP NOW
        </button>
      </div>
      <div className="relative bannerContainer mb-10">
        <div className=" flex justify-center md:justify-end items-center md:items-end bannerContent">
          <Image
            src="/cloth2.png"
            width={500}
            height={500}
            alt="Picture of the cloth2"
          />
        </div>
        <Image
          src="/cloth1.png"
          width={400}
          height={400}
          alt="Picture of the cloth1"
          className="absolute -bottom-10 -right-4 md:top-20 md:-left-20  bannerImage "
        />
      </div>
    </section>
  );
};

export default Banner;
