"use client";
import React, { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { Button } from "../components/ui/moving-border";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  TypewriterEffect,
  TypewriterEffectSmooth,
} from "../components/ui/typewriter-effect";
//import MobileNavbar2 from "./MobileNavbar2";
export default function BackgroundSlider() {
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

  const slides = [
    {
      url: "https://images.unsplash.com/photo-1598030304671-5aa1d6f21128?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "George Washington",
      desc: "Agriculture is the most healthful, most useful and most noble employment of man.",
    },
    {
      url: "https://images.unsplash.com/photo-1539902743451-20dfa0a92ffd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Dwight D. Eisenhower",
      desc: "Farming looks mighty easy when your plow is a pencil and you're a thousand miles from the corn field.",
    },
    {
      url: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Brenda Schoepp",
      desc: "My grandfather used to say that once in your life you need a doctor, a lawyer, a policeman, and a preacher. But every day, three times a day, you need a farmer.",
    },

    {
      url: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "B. C. Forbes",
      desc: "It is only the farmer who faithfully plants seeds in the Spring, who reaps a harvest in the Autumn.",
    },
    {
      url: "https://images.unsplash.com/photo-1598030343246-eec71cb44231?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Daniel Webster",
      desc: "When tillage begins, other arts follow. The farmers, therefore, are the founders of human civilization.",
    },
    {
      url: "https://images.unsplash.com/photo-1572775146189-b792cd0b76ba?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Brenda Schoepp",
      desc: "My grandfather used to say that once in your life you need a doctor, a lawyer, a policeman, and a preacher. But every day, three times a day, you need a farmer.",
    },
    {
      url: "https://images.unsplash.com/photo-1539902743451-20dfa0a92ffd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Dwight D. Eisenhower",
      desc: "Farming looks mighty easy when your plow is a pencil and you're a thousand miles from the corn field.",
    },
    {
      url: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "B. C. Forbes",
      desc: "It is only the farmer who faithfully plants seeds in the Spring, who reaps a harvest in the Autumn.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const autoNextSlide = setTimeout(() => {
      const isLastSlide = currentIndex === slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    }, 4000);

    return () => clearTimeout(autoNextSlide);
  });

  return (
    <div className="h-screen w-full m-auto relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full min-h-screen opacity-55 bg-center bg-cover duration-[2700ms]"
      >
        {/* <Image src={slides[currentIndex].url}
        alt="bg pic"
        width={1366}
        height={1080}
        className="h-screen w-screen opacity-85 transition duration-700 ease-in-out">

        </Image> */}
      </div>

      {/* Descriptive content */}
      <div className="absolute bottom-6 text-white sm:right-8 w-[10em] sm:w-[40em] h-48 pl-4 pt-6">
        <p className="pt-2 uppercase text-white text-">
          {slides[currentIndex].desc}
        </p>
        <h1 className="text-xl sm:text-6xl text-gray-300 font-semibold sm:font-light font-mono">
          {slides[currentIndex].name}
        </h1>
      </div>

      <div className="absolute sm:w-96 h-full sm:top-[50%] sm:right-[30%] top-[60%] right-[10%]">
        <Button
          borderRadius="1.75rem"
          className="bg-gradient-to-r from-green-900 to-green-300 text-white 
          border-neutral-200 uppercase 
          font-mono hover:text-base duration-300"
        >
          Explore Organic
        </Button>
      </div>

      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[60%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[60%] -translate-x-0 translate-y-[-50%] right-10 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}
