"use client";
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";
import { motion } from "framer-motion";
import {
  TypewriterEffect,
  TypewriterEffectSmooth,
} from "../components/ui/typewriter-effect";
import { AuroraBackground } from "../components/ui/aurora-background";
import { Button } from "../components/ui/moving-border";
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

  const testimonials = [
    {
      quote:
        "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
      name: "Charles Dickens",
      title: "A Tale of Two Cities",
    },
    {
      quote:
        "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
      name: "William Shakespeare",
      title: "Hamlet",
    },
    {
      quote: "All that we see or seem is but a dream within a dream.",
      name: "Edgar Allan Poe",
      title: "A Dream Within a Dream",
    },
    {
      quote:
        "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
      name: "Jane Austen",
      title: "Pride and Prejudice",
    },
    {
      quote:
        "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
      name: "Herman Melville",
      title: "Moby-Dick",
    },
  ];
  return (
    <div className="w-screen overflow-hidden">
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="h-[30em] pt-40"
        >
          <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
            The road to Organic Farming starts here
          </p>
          <TypewriterEffectSmooth words={words} />
          <Button
            borderRadius="1.75rem"
            className="bg-gradient-to-r from-green-900 to-green-400 text-white 
          border-neutral-200 uppercase 
          font-mono
           hover:text-base hover:font-semibold
            duration-300"
          >
            Check Out
          </Button>
        </motion.div>
        <div className="flex flex-col antialiased items-center justify-center">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
        <div className="h-[30em] flex">
          <div className="w-[50%] p-16 text-center">
            <h1 className="font-bold text-3xl">Abstract Title</h1>
            <p className="pt-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam nemo accusamus quidem nobis sequi eius, praesentium
              esse enim sint sit eligendi incidunt non quo architecto blanditiis
              soluta commodi maxime impedit. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Itaque expedita recusandae sit unde,
              quod corporis temporibus voluptate quae rem, cum tempore nisi
              ipsum corrupti exercitationem! Ipsam eos fuga tenetur vel.
            </p>
          </div>
          <div className="w-[50%]"></div>
        </div>
        <div className="h-[30em] flex">
          <div className="w-[50%]"></div>
          <div className="w-[50%] p-16 text-center">
            <h1 className="font-bold text-3xl">Abstract Title</h1>
            <p className="pt-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam nemo accusamus quidem nobis sequi eius, praesentium
              esse enim sint sit eligendi incidunt non quo architecto blanditiis
              soluta commodi maxime impedit. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Itaque expedita recusandae sit unde,
              quod corporis temporibus voluptate quae rem, cum tempore nisi
              ipsum corrupti exercitationem! Ipsam eos fuga tenetur vel.
            </p>
          </div>
        </div>
      </AuroraBackground>
    </div>
  );
}
