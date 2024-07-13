"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import toast from "react-hot-toast";
import axios from "axios";
import Image from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Category = () => {
  const heroRightRef = useRef<HTMLDivElement>(null);
  const itemsHeight = heroRightRef?.current?.clientHeight || 0;
  const items = gsap.utils.toArray(".hero__item") as HTMLElement[];

  useEffect(() => {
    gsap.to(".hero__right", {
      y: itemsHeight,

      ease: "none",
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: -itemsHeight,
        scrub: 1,
        markers: true,
        pin: true,
        pinSpacing: false,
        snap: {
          snapTo: 1 / (items.length - 1),
          duration: 0.2,
          delay: 0,
        },
      },
    });

    items.forEach((section) => {
      gsap.from(section, {
        scrollTrigger: {
          markers: true,
          start: "top 50%",
          end: "bottom 50%",
          trigger: section,
          toggleClass: "active",
        },
      });
    });
  }, [itemsHeight, items]);

  const [category, setCategory] = useState([]);

  const getCategory = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/v1/categories"
      );
      setCategory(response.data);
      console.log(response.data);
    } catch (error: any) {
      console.log({ error: error.message });
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <section className="hero h-screen min-h-[500px]  bg-purple-400 flex items-center text-red-500 ">
      <div className="hero-wrap h-[400px] w-full bg-yellow-100 flex p-5 relative">
        <div className="hero__left col w-[50vw] pr-10 ">
          <h4 className="text-xl my-4 text-pink-700 font-bold  border-b-2 border-b-pink-700">
            THE BEST WE HAVE
          </h4>{" "}
          <h1 className="text-xl md:text-3xl py-0 md:py-2 text-purple-600  font-extrabold ">
            Our Products Category
          </h1>
          <p className="text-xs md:text-sm py-0 md:py-2 text-purple-600  font-bold ">
            True elegance lies in the harmonious blend of simplicity and
            sophistication, where each garment speaks of timeless beauty and
            effortless style. From the subtle grace of flowing fabrics to the
            bold statement of tailored lines, our collection embodies a symphony
            of textures and colors that resonate with individuality and grace.
            Embrace the artistry of fashion that transcends trends, embracing
            every moment with poise and confidence.
          </p>
        </div>

        <div
          // ref={heroRightRef}

          className="stack hero__right col absolute  w-[50vw] right-5 h-full pl-5 z-10"
        >
          {category.map((item: any) => (
            <div className="hero__item relative" key={item._id}>
              <Image
                loader={() => item.image}
                width={100}
                height={100}
                src={item.image}
                alt={item.name}
                className="h-full w-full object-cover"
              ></Image>
              <div className="absolute bottom-[50%] left-[40%] item__name text-3xl font-bold text-center uppercase  ">
                {item.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
