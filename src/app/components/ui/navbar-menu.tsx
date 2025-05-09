"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-white
        bg-emerald-500 
         rounded-md w-24 sm:w-28 text-sm 
         text-center uppercase  
         hover:opacity-[0.9] dark:text-white
         hover:bg-emerald-100 hover:text-slate-900 font-medium
          transition duration-300"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="hidden md:block absolute top-[calc(100%_+_1.7rem)] left-1/2 transform -translate-x-1/2">
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className="bg-gradient-to-r
                 from-green-900 to-green-300
                 dark:bg-black backdrop-blur-sm
                  rounded-2xl overflow-hidden 
                  border border-gray-400
                   dark:border-white/[0.2] shadow-xl"
              >
                <motion.div
                  layout // layout ensures smooth animation
                  className="w-max h-full p-4"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className="relative grid grid-cols-2 gap-6 px-2 py-1
       rounded-full boder
       border-transparent dark:bg-black dark:border-white/[0.2]
        border-gray-400 border-2 shadow-input justify-center
         sm:space-x-4 sm:px-8 sm:py-6 sm:flex sm:gap-0"
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <Link href={href} className="flex space-x-2">
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4
          className="text-xl font-bold mb-1
         text-white hover:text-black uppercase font-mono
          dark:text-white"
        >
          {title}
        </h4>
        <p
          className="text-gray-300 text-xs
         max-w-[10rem] dark:text-neutral-300
         hover:text-black"
        >
          {description}
        </p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <Link
      {...rest}
      className="text-gray-200 dark:text-neutral-200 hover:text-black "
    >
      {children}
    </Link>
  );
};
