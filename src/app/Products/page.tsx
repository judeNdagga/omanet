import Image from "next/image";
import prisma from "@/app/lib/prisma";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { ProductCard } from "../components/ui/hero-parallax";
import ProductCard2 from "../components/ProductCard";
import ContactExpertsButton from "../components/ContactExpertsButton";
export const metadata = {
  title: "Products - OMANET",
};
export default async function Entrepreneurship() {
  const products = await prisma.product.findMany({
    orderBy: { id: "desc" },
  });
  return (
    <div className="overflow-hidden">
      {/* 2nd level */}
      <div className="bg-white">
        <h1
          className="text-black text-4xl
         sm:text-5xl font-semibold font-mono
          text-center sm:pl-[5em] sm:pr-[5em]
           sm:pt-40 pt-32"
        >
          EXPLORE OUR PRODUCTS
        </h1>
        <div className="sm:flex gap-10 p-8">
          {/* first card */}

          {/* product card trial */}
          {products.map((product) => (
            <ProductCard2 product={product} key={product.id} />
          ))}
        </div>

        {/* after second cards */}

        <div className="sm:p-20 p-10">
          <div className="card card-body bg-gradient-to-r from-green-900 from-3% via-green-400 to-green-600 to-75% text-white">
            <h1 className="text-4xl sm:text-6xl font-bold">
              NEED SOMETHING ELSE?
            </h1>
            <p className="sm:pt-16 sm:pr-20 text-xl sm:text-2xl font-extralight">
              Don't see what you want? No worries. We can provide custom
              products tailored to what you require. We also offer our expert
              guidance to any related situation, regardless of the field. You
              need only connect with our experts.
            </p>
            <ContactExpertsButton />
          </div>
        </div>

        {/* after need something */}

        <div className="md:pt-20 xl:pt-40 md:pb-20 xl:pb-40 sm:flex xl:pl-20 pr-20 h-auto">
          <h1 className="text-left text-black font-bold font-mono text-4xl sm:text-6xl pl-10 pr-1">
            CUSTOMER SATISFACTION KNOWS NO BORDERS
          </h1>
          <div className="divider md:divider-horizontal divider-success"></div>
          <h1 className="text-right text-xl sm:text-2xl font-light text-black ml-20 pr-10">
            Our customers come from different industries but share a unanimous
            appreciation of our work together, reflected in their progress
          </h1>
        </div>
        <div className="sm:pr-40 sm:pl-40 p-6">
          <div className="card card-body shadow-xl">
            <p className="text-black text-3xl sm:text-4xl font-extralight">
              " Our customers' needs are our primary concern. Everything else is
              secondary. It is always a great pleasure to collaborate."
            </p>
          </div>
          <p className="text-right text-black pt-10 text-3xl">
            - Jane Nalunga
            <p className="text-2xl font-light text-green-600">Team Lead</p>
          </p>
        </div>

        <div className="text-center h-[20em]"></div>
      </div>
    </div>
  );
}
