import Image from "next/image";
import React from "react";

const Category = () => {
  return (
    <>
      <section className="categorySection h-screen bg-purple-400 justify-center px-14 py-8 relative w-full bg-gradient-to-br from-pink-300 to-indigo-600 overflow-x-clip">
        <div className="grid grid-cols-2 bg-yellow-100 h-full absolute w-full ">
          <div className="flex flex-col  justify-center md:justify-start items-center md:items-start px-10">
            {" "}
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
              bold statement of tailored lines, our collection embodies a
              symphony of textures and colors that resonate with individuality
              and grace. Embrace the artistry of fashion that transcends trends,
              embracing every moment with poise and confidence.
            </p>
            <Image
              src="/dress.png"
              width={400}
              height={400}
              alt="Picture of the cloth1"
            />
            <Image
              src="/shoes.png"
              width={400}
              height={400}
              alt="Picture of the cloth1"
            />
            <Image
              src="/formal.png"
              width={400}
              height={400}
              alt="Picture of the cloth1"
            />{" "}
            <Image
              src="/casual.png"
              width={400}
              height={400}
              alt="Picture of the cloth1"
            />{" "}
            <Image
              src="/bag.png"
              width={400}
              height={400}
              alt="Picture of the cloth1"
            />
          </div>
          <div className="">world</div>
        </div>
      </section>
    </>
  );
};

export default Category;
