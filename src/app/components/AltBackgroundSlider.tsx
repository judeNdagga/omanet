"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./ui/images-slider";


export default function AltBackgroundSlider() {
  const images = [
    "https://images.unsplash.com/photo-1539902743451-20dfa0a92ffd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1572775146189-b792cd0b76ba?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1535090467336-9501f96eef89?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  return (
    <ImagesSlider className="h-screen" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col w-full"
      >
        <motion.p className="font-bold text-lg pl-[30%] sm:pl-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          EAT HEALTHY, EAT ORGANIC
        </motion.p>
        <motion.p className="font-semibold text-5xl md:text-8xl pl-[25%] sm:pl-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          WELCOME TO <br /> <a className="text-green-300  hover:text-green-600 sm:pl-36 transition duration-500 italic">OMANET</a>
        </motion.p>
        <motion.p className="text-md md:text-lg pl-[20%] sm:pl-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
         Your one stop center for organic products,<br /><a className="">try them.</a>
         <br /> <button className="px-4 py-2 hover:scale-105 transition duration-500 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>Contact Us →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
        </motion.p>
        
      </motion.div>
    </ImagesSlider>
  );
}
