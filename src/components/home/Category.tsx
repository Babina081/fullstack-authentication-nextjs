"use client";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

const Products = () => {
  const router = useRouter();
  const stackRef = useRef<HTMLDivElement | null>(null);
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = React.useState(false);

  const getCategory = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "http://localhost:3000/api/v1/categories"
      );
      setCategory(response.data);
    } catch (error: any) {
      console.log({ error: error.message });
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCategory();
  }, []);

  useEffect(() => {
    if (stackRef.current) {
      const stack = stackRef.current;
      const cards = Array.from(stack.children)
        .reverse()
        .filter((child): child is HTMLDivElement =>
          child.classList.contains("card")
        );

      cards.forEach((card) => stack.appendChild(card));

      const moveCard = () => {
        const lastCard = stack.lastElementChild as HTMLDivElement | null;
        if (lastCard && lastCard.classList.contains("card")) {
          lastCard.classList.add("swap");

          setTimeout(() => {
            lastCard.classList.remove("swap");
            stack.insertBefore(lastCard, stack.firstElementChild);
          }, 1200);
        }
      };

      let autoplayInterval = setInterval(moveCard, 4000);

      stack.addEventListener("click", function (e: any) {
        const card = e.target.closest(".card") as HTMLDivElement | null;
        if (card && card === stack.lastElementChild) {
          card.classList.add("swap");

          setTimeout(() => {
            card.classList.remove("swap");
            stack.insertBefore(card, stack.firstElementChild);
          }, 1200);
        }
      });

      return () => {
        clearInterval(autoplayInterval);
        stack.removeEventListener("click", moveCard);
      };
    }
  }, []);

  return (
    <main className="main-products">
      <div className="content">
        <h4 className="text-xl my-4 text-pink-700 font-bold  border-b-2 border-b-pink-700">
          THE BEST WE HAVE
        </h4>{" "}
        <h1 className="text-xl md:text-3xl py-0 md:py-2 text-purple-600  font-extrabold ">
          Our Products Category
        </h1>
        <p className="text-xs md:text-sm py-0 md:py-2 text-purple-600  font-bold ">
          True elegance lies in the harmonious blend of simplicity and
          sophistication, where each garment speaks of timeless beauty and
          effortless style. From the subtle grace of flowing fabrics to the bold
          statement of tailored lines, our collection embodies a symphony of
          textures and colors that resonate with individuality and grace.
          Embrace the artistry of fashion that transcends trends, embracing
          every moment with poise and confidence.
        </p>
        <button
          className="btn"
          onClick={() => {
            router.push("/shop");
          }}
        >
          Explore More
        </button>
      </div>

      <div className="stack" ref={stackRef}>
        {category.map((item: any) => (
          <div className="card relative cursor-pointer" key={item._id}>
            <Image
              loader={() => item.image}
              width={100}
              height={100}
              src={item.image}
              alt={item.name}
              className="img h-full w-full object-cover"
            ></Image>
            <div className="absolute bottom-[50%] left-[50%] transform   translate-x-[-50%] translate-y-[-50%]   item__name text-xl md:text-3xl font-bold text-center uppercase bg-gradient-to-r from-[#f76591] to-[#ffc16f] bg-clip-text text-transparent  ">
              {item.name}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Products;
