"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    //about
    gsap.to("#aboutSection", {
      backgroundSize: "300%",
      ease: "none",
      scrollTrigger: {
        trigger: "#aboutSection",
        start: "top bottom",
        end: "bottom top",
        scrub: 0.5,
      },
    });

    gsap.to("#aboutImage", {
      xPercent: 80,
      ease: "none",
      scrollTrigger: {
        trigger: "#aboutSection",
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
        // markers: true,
      },
    });
    gsap.to("#aboutImageMbl", {
      xPercent: -80,
      ease: "none",
      scrollTrigger: {
        trigger: "#aboutSection",
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
        // markers: true,
      },
    });

    gsap.to("#aboutImage2", {
      xPercent: 130,
      ease: "none",
      scrollTrigger: {
        trigger: "#aboutSection",
        start: "top bottom",
        end: "bottom top",
        scrub: 3,
        // markers: true,
      },
    });
    gsap.to("#aboutImage2Mbl", {
      xPercent: 80,
      ease: "none",
      scrollTrigger: {
        trigger: "#aboutSection",
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
        // markers: true,
      },
    });

    if (aboutRef.current) {
      // SplitType animation for "About E-Shop" heading
      const splitType = new SplitType(aboutRef.current, {
        types: "lines,words,chars",
        tagName: "span",
      });

      gsap.from(".char", {
        y: "100%",
        opacity: 0,
        duration: 2.5,
        ease: "power1.inOut",
        stagger: 0.1,
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "-=500 ",
          end: "-=100",
          scrub: true,
        },
      });
    }
  }, []);

  return (
    <>
      <section
        id="aboutSection"
        className="w-full bg-amber-100 h-screen px-14  text-black grid grid-cols-1  md:grid-cols-2 py-8 relative overflow-hidden  "
      >
        <div className="flex flex-col justify-center md:justify-start items-center md:items-start absolute left-20 md:-left-20 top-28 md:top-8  ">
          <Image
            src="/cloth3.png"
            width={400}
            height={400}
            alt="Picture of the cloth1"
            id="aboutImage"
            className="hidden md:flex drop-shadow-xl rounded-md bg-pink-200 "
          />
          <Image
            src="/cloth4.png"
            width={400}
            height={400}
            alt="Picture of the cloth1"
            id="aboutImage2"
            className="hidden md:flex  drop-shadow-xl rounded-md bg-pink-200 mt-1 "
          />
          <Image
            src="/cloth3.png"
            width={400}
            height={400}
            alt="Picture of the cloth1"
            id="aboutImageMbl"
            className="flex lg:hidden drop-shadow-xl rounded-md bg-pink-200 "
          />
          <Image
            src="/cloth4.png"
            width={400}
            height={400}
            alt="Picture of the cloth1"
            id="aboutImage2Mbl"
            className="flex lg:hidden drop-shadow-xl rounded-md bg-pink-200 mt-14 md:mt-1 "
          />
        </div>
        <div></div>
        <div className="flex flex-col  justify-center md:justify-start items-center md:items-end relative text-center md:text-right  ">
          <h4 className="text-xl my-4 text-pink-700 font-bold  border-b-2 border-b-pink-700">
            ABOUT E-SHOP
          </h4>
          <h1 className="text-xl md:text-3xl py-0 md:py-4 text-purple-600  font-extrabold ">
            A symphony of colors, textures, and styles, our clothing shop is a
            sanctuary where self-expression meets craftsmanship. Each piece
            tells a story, weaving together the threads of tradition and trend,
            creating a tapestry of individuality and elegance. Here, fashion is
            not just about dressing up, but about discovering your unique
            persona and celebrating it with every stitch.
          </h1>
        </div>
      </section>
      <section
        className="sloganSection h-screen md:h-[50vh] my-auto md:my-0 py-0 md:py-8 px-14 bg-gradient-radial from-purple-500 to-purple-600 flex justify-center items-center"
        ref={aboutRef}
      >
        <h1 className="char text-3xl md:text-5xl  py-4 text-white text-center font-extrabold  ">
          Discover your unique style and celebrate it with our exquisite
          collection, where personal expression meets artisanal craftsmanship in
          a beautiful sartorial symphony at our clothing shop.
        </h1>
      </section>
    </>
  );
};

export default About;
