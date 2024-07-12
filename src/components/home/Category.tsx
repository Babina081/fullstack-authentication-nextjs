"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Category = () => {
  // const heroRightRef = useRef<HTMLDivElement>(null);
  // const itemsHeight = heroRightRef?.current?.clientHeight || 0;
  // const items = gsap.utils.toArray(".hero__item") as HTMLElement[];

  // useEffect(() => {
  //   gsap.to(".hero__right", {
  //     y:  itemsHeight - 400,
  //     x: innerWidth,
  //     ease: "none",
  //     scrollTrigger: {
  //       trigger: ".hero",
  //       start: "top top",
  //       end:-itemsHeight + 400,
  //       scrub: 1,
  //       markers: true,
  //       pin: true,
  //       pinSpacing: false,
  //       snap: {
  //         snapTo: 1 / (items.length - 1),
  //         duration: 0.2,
  //         delay: 0,
  //       },
  //     },
  //   });

  //   items.forEach((section) => {
  //     gsap.from(section, {
  //       scrollTrigger: {
  //         markers: true,
  //         start: "top 50%",
  //         end: "bottom 50%",
  //         trigger: section,
  //         toggleClass: "active",
  //       },
  //     });
  //   });
  // }, []);

  return (
    <section className="hero h-screen min-h-[500px]  bg-purple-400 flex items-center text-red-500 ">
      <div className="hero-wrap h-[400px] w-full bg-yellow-100 flex p-5 relative">
        <div className="hero__left col w-[50vw] ">
          <h3 className="text-5xl">Choose your favorite fruit</h3>
        </div>

        <div
          className="hero__right col absolute  w-[50vw] right-5 h-full pl-5 z-10"
        >
          <div className="hero__item">
            <div className="item__name">Apple</div>
            <div className="item__cost">01</div>
          </div>
          <div className="hero__item">
            <div className="item__name">Bananna</div>
            <div className="item__cost">02</div>
          </div>
          <div className="hero__item">
            <div className="item__name">Kiwi</div>
            <div className="item__cost">03</div>
          </div>
          <div className="hero__item">
            <div className="item__name">Orange</div>
            <div className="item__cost">04</div>
          </div>
          <div className="hero__item">
            <div className="item__name">Pear</div>
            <div className="item__cost">05</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
