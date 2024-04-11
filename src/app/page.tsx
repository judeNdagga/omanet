"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./components/ui/3d-card";
import Link from "next/link";
import BackgroundSlider from "./components/BackgroundSlider";
import { TextGenerateEffect } from "./components/ui/text-generate-effect";
import { Button } from "./components/ui/moving-border";
export default function Home() {


  const words = ` We stand for providing the most fresh organic products which will
  serve your health and be a source of vitamins and minerals for our
  clients. Packed with Vitamin C, a cherry tomato boosts immunity and
  acts as an antioxidant, It is also used in beauty care for both skin
  and hair, the Lycopene in cherry tomato naturally protects the skin
  and acts as a sunblock. Those who have oily skin can apply it to the
  face to prevent acne and pimples.`;


  return (
    <div>
      <BackgroundSlider />
      <div className="bg-gradient-to-b from-green-600 from-3%
      via-green-300 
       to-white to-75% opacity-90 h-[45em] flex">
        {/* 1st level */}
        <div className="text-center text-black w-[50%]">
          <h1 className="pt-32 text-3xl uppercase font-semibold font-mono">Best Quality Products</h1>
          <p className="pt-8 pl-20 pr-20 pb-4">
           <TextGenerateEffect words={words} />
          </p>
          <Button
          borderRadius="1.75rem"
          className="bg-gradient-to-r from-green-900 to-green-300 text-white 
          border-neutral-200 uppercase 
          font-mono
           hover:text-base hover:font-semibold 
            duration-300"
        >
          Check Out
        </Button>
        </div>
        <div className="w-[50%]">
          <CardContainer className="inter-var w-full">
            <CardBody className="w-full">
              <CardItem className="w-full">
              <Image
            src="https://images.unsplash.com/photo-1471193945509-9ad0617afabf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            height="1000"
            width="1000"
            className=" h-[30em] w-[98%] object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
              </CardItem>
            </CardBody>
          </CardContainer>
        </div>
        

        
      </div>

      {/* 2nd level */}
      <div className="bg-gradient-to-t from-green-600 from-3%
      via-green-300 
       to-white to-75%  opacity-90 h-[45em] flex">
        
        
        <div className="w-[50%]">
          <CardContainer className="inter-var w-full">
            <CardBody className="w-full">
              <CardItem className="w-full pl-4">
              <Image
            src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            height="1000"
            width="1000"
            className=" h-[30em] w-[98%] object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
              </CardItem>
            </CardBody>
          </CardContainer>
        </div>
        <div className="text-center text-black w-[50%] ">
          <h1 className="pt-32 text-3xl uppercase font-semibold font-mono">Farmer Products</h1>
          <p className="pt-8 pl-20 pr-20 pb-4">
           <TextGenerateEffect words={words} />
          </p>
          <Button
          borderRadius="1.75rem"
          className="bg-gradient-to-r from-green-900 to-green-300 text-white 
          border-neutral-200 uppercase 
          font-mono
           hover:text-base hover:font-semibold
            duration-300"
        >
          Check Out
        </Button>
        </div>

        
      </div>

      {/* 3rd level */}

      <div className="bg-gradient-to-b from-green-600 from-3%
      via-green-300 
       to-white to-75%  opacity-90 h-[45em] flex">
        {/* 1st level */}
        <div className="text-center text-black w-[50%] ">
          <h1 className="pt-32 text-3xl uppercase font-semibold font-mono">Fast Delivery</h1>
          <p className="pt-8 pl-20 pr-20 pb-4">
           <TextGenerateEffect words={words} />
          </p>
          <Button
          borderRadius="1.75rem"
          className="bg-gradient-to-r from-green-900 to-green-300 text-white 
          border-neutral-200 uppercase 
          font-mono
           hover:text-base hover:font-semibold
            duration-300"
        >
          Check Out
        </Button>
        </div>
        <div className="w-[50%]">
          <CardContainer className="inter-var w-full">
            <CardBody className="w-full">
              <CardItem className="w-full">
              <Image
            src="https://images.unsplash.com/photo-1617347454431-f49d7ff5c3b1?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            height="1000"
            width="1000"
            className=" h-[30em] w-[98%] object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
              </CardItem>
            </CardBody>
          </CardContainer>
        </div>
        

        
      </div>

    </div>
  );
}
