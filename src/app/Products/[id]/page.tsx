"use server";
import PriceTag from "@/app/components/PriceTag";
import Image from "next/image";
// import { getCart } from "@/app/lib/db/cart";

import { formatPrice } from "@/app/lib/format";
import { BsArrowRight } from "react-icons/bs";
// import { incrementProductQuantity } from "./actions";
import { FaCartPlus, FaCircleMinus, FaCirclePlus } from "react-icons/fa6";
import prisma from "@/app/lib/prisma";
import { cache } from "react";
import { Metadata } from "next";
import OutOfStock from "@/app/components/OutOfStock";
import ContactExpertsButton from "@/app/components/ContactExpertsButton";
// import AddToCartButton from "./AddToCartButton";
// import CartEntry from "@/app/components/CartEntry";

interface ProductPageProps {
  params: {
    id: string;
  };
}

const getProduct = cache(async (id: string) => {
  const product = await prisma.product.findUnique({ where: { id } });

  return product;
});

export default async function ProductPage({
  params: { id },
}: ProductPageProps) {
  const product = await getProduct(id);

  // const cart = await getCart();

  return (
    <div className="overflow-hidden">
      {/* 2nd level */}
      <div className="bg-white">
        <div className="xl:flex gap-10 pl-10 sm:pl-16 pr-10 sm:pr-0 pt-28 sm:pt-40">
          <div className="card sm:w-[40em] sm:h-[30em] bg-base-100 shadow-xl">
            <figure>
              <img src={product!.imageUrl} alt="Shoes" />
            </figure>
            <div className="rounded-md card-body bg-gradient-to-r from-green-900 from-3% via-green-400 to-green-600 to-75%">
              <h2 className="card-title text-white">{product!.name}</h2>
              <div className="sm:badge sm:bg-red-600 border-none text-red-800 sm:text-white text-xs sm:text-xs font-semibold">
                OUT OF STOCK
              </div>
              <p className="text-white">{product!.description}</p>
            </div>
          </div>

          <div>
            <h1 className="text-black text-4xl xl:text-5xl font-semibold text-center sm:pl-[5em] sm:pr-[5em] pt-6 sm:pt-0">
              High Quality {product!.name}
            </h1>

            <div className="pt-3 sm:pt-10 pb-5 flex items-center">
              <h1 className="text-black pt-2">Quantity :</h1>
              <FaCircleMinus className="text-green-600 btn btn-circle scale-50 mt-0" />
              <input
                type="text"
                className="input input-bordered max-w-20 h-8 bg-white text-black border-slate-500 border-2"
              />
              <OutOfStock />
            </div>

            {/* cart button */}

            {/* <AddToCartButton
              productId={product!.id}
              incrementProductQuantity={incrementProductQuantity}
            /> */}
            <div className="btn btn-sm text-white hover:text-gray-200 bg-slate-800 hover:bg-slate-800">
              <h1>Add to cart</h1>
              <FaCartPlus className="text-white" />
            </div>
            <div className="pt-3 sm:pt-5 flex gap-10">
              <h1 className="text-black">Price :</h1>
              <h1 className="text-lime-500">
                {" "}
                <PriceTag price={product!.price} className="" />
              </h1>
            </div>
            {/* {cart?.items.map(cartItem =>(
        <CartEntry cartItem={cartItem} key={cartItem.id} setProductQuantity={incrementProductQuantity} />
      ))} */}

            <div className="pt-10 sm:pt-20">
              {/* <p className="mb-3 font-bold text-black">
            Total: {formatPrice(cart?.subtotal || 0)}
        </p> */}
              <div className="btn btn-wide text-white hover:text-gray-200 bg-slate-800 hover:bg-slate-800">
                {" "}
                CHECK OUT
              </div>
            </div>
          </div>
        </div>

        {/* after second cards */}

        <div className="sm:p-20 p-10">
          <div className="card card-body bg-gradient-to-r from-green-900 from-3% via-green-400 to-green-600 to-75% text-white">
            <h1 className="text-4xl sm:text-6xl font-bold font-mono">
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
          <h1 className="text-black font-bold font-mono text-4xl sm:text-6xl pl-4 sm:pl-10 sm:pr-1">
            CUSTOMER SATISFACTION KNOWS NO BORDERS
          </h1>
          <div className="divider md:divider-horizontal divider-success"></div>
          <h1 className="text-right text-2xl font-light text-black ml-20 pr-10">
            Our customers come from different industries but share a unanimous
            appreciation of our work together, reflected in their progress
          </h1>
        </div>
        <div className="sm:pr-40 sm:pl-40">
          <div className="card card-body shadow-xl">
            <p className="text-black text-3xl sm:text-4xl font-extralight">
              " Our customers' needs are our primary concern. Everything else is
              secondary. It is always a great pleasure to collaborate."
            </p>
          </div>
          <p className="sm:text-right text-center text-black pt-10 text-3xl">
            - Jane Nalunga
            <p className="text-2xl font-light text-green-600">Team Lead</p>
          </p>
        </div>

        <div className="text-center h-[20em]"></div>
      </div>
    </div>
  );
}
