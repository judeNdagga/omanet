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
        transition={{ duration: 0.2 }}
        className="cursor-pointer text-xs sm:text-sm font-semibold uppercase tracking-wide
          text-white
          px-3 py-1.5 rounded-lg
          hover:bg-emerald-600
          transition duration-200 text-center select-none"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="hidden sm:block absolute top-[calc(100%_+_0.75rem)] left-1/2 -translate-x-1/2">
              <motion.div
                transition={transition}
                layoutId="active"
                className="bg-emerald-500 rounded-2xl overflow-hidden border border-emerald-400 shadow-2xl"
              >
                <motion.div layout className="w-max h-full p-5">
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
      onMouseLeave={() => setActive(null)}
      className="relative w-full grid grid-cols-2 gap-2 px-3 py-2
        rounded-2xl sm:rounded-full
        bg-emerald-500
        border border-emerald-400
        shadow-lg
        sm:flex sm:items-center sm:justify-around sm:gap-0 sm:px-8 sm:py-3"
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
    <Link href={href} className="flex space-x-3 group">
      <Image
        src={src}
        width={120}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-lg shadow-md object-cover group-hover:scale-105 transition duration-300"
      />
      <div>
        <h4 className="text-sm font-bold mb-1 text-white group-hover:text-emerald-100 uppercase tracking-wide transition duration-200">
          {title}
        </h4>
        <p className="text-white/75 text-xs max-w-[10rem] leading-relaxed">
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
      className="text-white/90 hover:text-white font-medium transition duration-200"
    >
      {children}
    </Link>
  );
};
