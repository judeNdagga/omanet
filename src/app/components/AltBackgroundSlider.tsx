"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./ui/images-slider";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.16, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const services = [
  "Consultancy",
  "Training & Extension",
  "Communication",
  "Product Development",
];

const stats = [
  { value: "500+", label: "Farmers Supported" },
  { value: "10+", label: "Years of Service" },
  { value: "4", label: "Core Service Areas" },
];

export default function AltBackgroundSlider() {
  const images = [
    "https://images.unsplash.com/photo-1539902743451-20dfa0a92ffd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1572775146189-b792cd0b76ba?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1535090467336-9501f96eef89?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  return (
    <ImagesSlider className="h-screen" images={images}>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="z-50 flex flex-col items-center sm:items-start w-full px-6 sm:px-16 md:px-24 mt-20 sm:mt-24"
      >
        {/* Eyebrow */}
        <motion.span
          variants={item}
          className="inline-flex items-center gap-3 text-xs font-semibold tracking-[0.22em] uppercase text-emerald-300 mb-4"
        >
          <span className="hidden sm:block w-6 h-px bg-emerald-400" />
          Trustworthy Organic Farming Practices
          <span className="hidden sm:block w-6 h-px bg-emerald-400" />
        </motion.span>

        {/* Headline */}
        <motion.h1
          variants={item}
          className="font-bold text-4xl sm:text-5xl md:text-6xl text-white leading-[1.08] text-center sm:text-left mb-5 max-w-2xl"
        >
          SUPPORTING FARMERS.
          <br />
          SUSTAINING COMMUNITIES.
          <br />
          <span className="text-emerald-400">SHAPING THE FUTURE.</span>
        </motion.h1>

        {/* Mission copy */}
        <motion.p
          variants={item}
          className="text-sm sm:text-base text-neutral-300 text-center sm:text-left leading-relaxed mb-5 max-w-lg sm:max-w-xl"
        >
          OMANET connects Ugandan farming communities with expert consultancy,
          hands-on training, and sustainable organic practices. Our people-first
          approach — built on face-to-face guidance and bespoke service — helps
          farmers increase yield, develop organic products, and build resilient
          livelihoods free from synthetic pesticides and GMOs.
        </motion.p>

        {/* Service chips */}
        <motion.div
          variants={item}
          className="flex flex-wrap gap-2 justify-center sm:justify-start mb-7"
        >
          {services.map((s) => (
            <span
              key={s}
              className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/90 text-xs font-medium backdrop-blur-sm tracking-wide"
            >
              {s}
            </span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          variants={item}
          className="flex flex-wrap gap-3 justify-center sm:justify-start mb-8"
        >
          <a
            href="/Contact"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white font-semibold text-sm tracking-wide shadow-lg hover:scale-105 transition-all duration-300"
          >
            Get in Touch →
          </a>
          <a
            href="/Services"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/30 font-semibold text-sm tracking-wide backdrop-blur-sm hover:scale-105 transition-all duration-300"
          >
            Our Services
          </a>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          variants={item}
          className="flex flex-wrap gap-6 sm:gap-10 items-center justify-center sm:justify-start pt-5 border-t border-white/20 w-full max-w-sm sm:max-w-xl"
        >
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center sm:text-left">
              <p className="text-xl sm:text-2xl font-bold text-emerald-400 leading-none">
                {value}
              </p>
              <p className="text-xs text-neutral-400 mt-1">{label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </ImagesSlider>
  );
}

