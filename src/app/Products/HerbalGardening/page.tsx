"use client";
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../../components/ui/infinite-moving-cards";
import { motion } from "framer-motion";
import {
  TypewriterEffect,
  TypewriterEffectSmooth,
} from "../../components/ui/typewriter-effect";
import Image from "next/image";

import { Button } from "../../components/ui/moving-border";
import { BsArrowRight } from "react-icons/bs";
export default function HerbalGardening() {
  const words = [
    {
      text: "Learn",
    },
    {
      text: "Organic",
    },
    {
      text: "Farming",
    },
    {
      text: "with",
    },
    {
      text: "OMANET.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  return (
    <div className="h-[100em] sm:h-auto overflow-hidden">
      <div className="bg-white h-full sm:pl-20 pl-10 sm:pr-20 pr-10">
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="h-[20em] sm:h-[30em] pt-40"
        >
          <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-2xl  ">
            The road to Organic Farming starts here
          </p>
          <TypewriterEffectSmooth words={words} />
          <Button
            borderRadius="1.75rem"
            className="bg-gradient-to-r from-green-900 to-green-400 text-white 
          border-neutral-200 uppercase 
          font-mono
           hover:text-base hover:font-semibold
            duration-300 gap-4"
          >
            Learn More <BsArrowRight className="text-2xl animate-pulse" />
          </Button>
        </motion.div>

        <div className="sm:pr-10 sm:pl-10 sm:pb-10 sm:text-center">
          <h1 className="text-black text-4xl sm:text-5xl font-bold">
            GET EQUIPPED WITH THE BEST PRACTICES
          </h1>
        </div>
        <div className="h-[30em] sm:flex pt-3">
          <div className="sm:w-[50%] sm:p-16 text-center text-black">
            <h1 className="font-bold text-3xl uppercase">Soil Health</h1>
            <p className="pt-8 text-xl">
              Soil health is a cornerstone of organic agriculture, playing a
              vital role in sustaining productive and resilient farming systems.
              Organic agriculture focuses on maintaining and enhancing the
              natural fertility and biological activity of soil, ensuring its
              long-term sustainability and ability to support plant growth.
            </p>
          </div>
          <div className="sm:w-[50%]">
            <Image
              src="https://images.unsplash.com/photo-1584479898061-15742e14f50d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              height="1000"
              width="1000"
              className="w-full h-full rounded-md opacity-85"
              alt="thumbnail"
            />
          </div>
        </div>
        <div className="hidden h-[30em] sm:flex">
          <div className="sm:w-[50%]">
            <Image
              src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              height="1000"
              width="1000"
              className="w-full h-full rounded-md opacity-85"
              alt="thumbnail"
            />
          </div>
          <div className="w-[50%] p-16 text-center text-black">
            <h1 className="font-bold text-3xl uppercase">Biodiversity</h1>
            <p className="pt-8 text-xl">
              Biodiversity is a foundational element of organic agriculture,
              enhancing the resilience, productivity, and sustainability of
              farming systems. Organic farming practices promote and protect
              biodiversity at all levels, from soil organisms to crop varieties,
              and play a crucial role in maintaining ecological balance.
            </p>
          </div>
        </div>
        <div className="h-[30em] sm:flex sm:pt-3 pt-28 pb-4">
          <div className="sm:w-[50%] sm:p-16 text-center text-black">
            <h1 className="font-bold text-3xl uppercase">Natural Pest Control</h1>
            <p className="pt-8 text-xl">
              Natural pest control is a cornerstone of organic agriculture,
              emphasizing environmentally friendly and sustainable methods to
              manage pests. Organic farmers use a variety of techniques to
              maintain a balanced ecosystem and reduce pest populations without
              relying on synthetic pesticides.
            </p>
          </div>
          <div className="sm:w-[50%]">
            <Image
              src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              height="1000"
              width="1000"
              className="w-full h-full rounded-md opacity-85"
              alt="thumbnail"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
