"use client";
import React from "react";
import { motion } from "framer-motion";
import { GreenLampContainer } from "@/app/components/ui/green-lamp";
import { OrangeLampContainer } from "@/app/components/ui/orange-lamp";
import { RoseLampContainer } from "@/app/components/ui/rose-lamp";
import { SlateLampContainer } from "@/app/components/ui/slate-lamp";
import Image from "next/image";
import { BiDownArrow } from "react-icons/bi";
export default function Eggs(){
    return(
        <div className="">
            <div className="h-screen">
            <GreenLampContainer className="flex">
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 pt-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
      <p className="">High Quality <br /> Eggs</p>
        
        <p className="text-2xl mt-6">Scroll Down to view</p>
        <p className="text-2xl mt-1 text-white pl-[50%]"><BiDownArrow/></p>
      </motion.h1>
      
    </GreenLampContainer>
    </div>
    <div className="h-[40em]">
    <OrangeLampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="https://images.unsplash.com/photo-1498654077810-12c21d4d6dc3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={500}
          height={200}
          className="rounded-md"
          alt="linear board demo"
        />
      </div>
        <p></p>
      </motion.h1>
    </OrangeLampContainer>
    </div>
    
    <div className="h-[40em]">
    <SlateLampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
         <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="https://images.unsplash.com/photo-1585507252242-11fe632c26e8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={500}
          height={200}
          className="rounded-md"
          alt="linear board demo"
        />
      </div>
      </motion.h1>
    </SlateLampContainer>
    </div>
     <div className="h-[40em]">
    <RoseLampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
         <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="https://images.unsplash.com/photo-1598965675045-45c5e72c7d05?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={500}
          height={200}
          className="rounded-md"
          alt="linear board demo"
        />
      </div>
      </motion.h1>
    </RoseLampContainer>
    </div>       
        </div>
    )
}