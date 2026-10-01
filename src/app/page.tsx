"use client";
import training1 from "/public/images/services/Training_3309.jpg";
import training2 from "/public/images/services/Training_3313.jpg";
import training3 from "/public/images/services/Training_171.jpg";
import training4 from "/public/images/services/Training164.jpg";
import networking1 from "/public/images/homepage/networking1.jpg";
import chilli3 from "/public/images/services/chilli3.jpg";
import Image from "next/image";
import React from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import AltBackgroundSlider from "./components/AltBackgroundSlider";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import ContactButton from "./components/ContactButton";

const fadeLeft = {
  initial: { x: -30, opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { delay: 0.12, duration: 0.5, ease: "easeOut" } },
};

const fadeRight = {
  initial: { x: 30, opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { delay: 0.12, duration: 0.5, ease: "easeOut" } },
};
const fadeUp = {
  initial: { y: 24, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { delay: 0.08, duration: 0.45, ease: "easeOut" } },
};
const fadeOnly = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
};

const services = [
  { href: "/Services/Consultancy", image: training1, label: "CONSULTANCY" },
  { href: "/Services/Training", image: training3, label: "TRAINING" },
  { href: "/Services/Communication", image: training2, label: "COMMUNICATION" },
  { href: "/Services/ProductDevelopment", image: chilli3, label: "PRODUCT DEVELOPMENT" },
];

const vp = { once: true, amount: 0.2 };

export default function Home() {
  const shouldReduce = useReducedMotion();

  // Falls back to opacity-only when user prefers reduced motion
  const anim = (variant: Variants) =>
    shouldReduce
      ? { variants: fadeOnly, initial: "initial", whileInView: "animate", viewport: vp }
      : { variants: variant, initial: "initial", whileInView: "animate", viewport: vp };

  return (
    <div className="overflow-hidden">
      <AltBackgroundSlider />

      {/* Why Omanet */}
      <section className="bg-gradient-to-b from-green-200 from-3% via-green-100 to-white to-80% py-20 px-6 sm:px-12 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row gap-12 sm:gap-20 items-center">
          {/* Left */}
          <div className="sm:w-1/2">
            <span className="inline-block text-[11px] font-bold tracking-[0.2em] uppercase text-green-800 border border-green-700 rounded-full px-4 py-1.5 mb-6">
              WHY OMANET?
            </span>
            <motion.h2
              {...anim(fadeUp)}
              className="text-3xl md:text-4xl xl:text-5xl font-bold leading-tight mb-6 text-gray-900"
            >
              HEALTHY,{" "}
              <span className="text-green-600">ORGANIC,</span>{" "}
              AUTHENTIC
            </motion.h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              Organic food is not just a trend — it's a return to wholesome,
              natural nutrition that benefits both our bodies and the planet.
              Free from synthetic pesticides, GMOs, and harmful additives,
              organic food is grown in harmony with nature, promoting soil
              health, biodiversity, and sustainable farming practices.
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-8">
              Choosing organic is an investment in your well-being and a
              commitment to a healthier, more sustainable future for everyone.
            </p>
            <ContactButton />
          </div>

          {/* Right: stacked images */}
          <motion.div
            {...anim(fadeRight)}
            className="hidden sm:block sm:w-1/2 relative"
          >
            <div className="relative h-[28em] w-full rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1635008388183-04ea0313c5d1?q=80&w=2070&auto=format&fit=crop"
                alt="Organic farm field"
                className="w-full h-full object-cover brightness-90"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -left-8 w-52 h-40 rounded-xl overflow-hidden border-[3px] border-white shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1526346698789-22fd84314424?q=80&w=2070&auto=format&fit=crop"
                alt="Fresh vegetables"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>

        {/* Social proof bar */}
        <motion.div
          {...anim(fadeUp)}
          className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center gap-6 sm:gap-10 mt-24 sm:mt-32 mb-12"
        >
          <h3 className="text-gray-900 text-2xl md:text-3xl font-semibold text-center sm:text-left flex-1 leading-snug">
            YOU'LL BE IN GREAT COMPANY — WE'RE{" "}
            <span className="text-green-600">TRUSTED BY HUNDREDS</span> OF
            FARMERS.
          </h3>
          <div className="hidden sm:block w-px h-14 bg-green-400 shrink-0" />
          <p className="text-gray-500 text-sm sm:text-base text-center sm:text-right flex-1 leading-relaxed">
            Discover how we helped multiple farmers increase their productivity
            and efficiency for a better yield.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-5">
          {services.map(({ href, image, label }) => (
            <a
              key={label}
              href={href}
              className="relative block h-[9em] sm:h-[19em] rounded-xl overflow-hidden shadow-lg group transform-gpu hover:scale-105 transition-transform duration-300"
            >
              <Image
                src={image}
                alt={label}
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                className="object-cover brightness-75 group-hover:brightness-50 transition-[filter] duration-300"
              />
              <span className="absolute bottom-3 sm:bottom-5 left-3 sm:left-6 text-white text-xs sm:text-lg font-semibold tracking-wide group-hover:text-green-300 transition-colors duration-300">
                {label}
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-gradient-to-t from-green-200 from-3% via-green-100 to-white to-80% py-20 px-6 sm:px-12 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row gap-10 sm:gap-16 items-center">
          <motion.div
            {...anim(fadeLeft)}
            className="w-full sm:w-1/2"
          >
            <div className="relative w-full h-60 sm:h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={networking1}
                alt="OMANET networking event"
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover transform-gpu hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>

          <motion.div
            {...anim(fadeRight)}
            className="w-full sm:w-1/2"
          >
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              <FaQuoteLeft className="inline-block text-green-400 mr-2 mb-1" />
              To access product knowledge and serve our customers more
              efficiently, we decided to build an intelligent knowledge base.{" "}
              <span className="font-bold text-green-600 italic">OMANET</span>{" "}
              selected the right procedures and created a very simple and easy
              to follow guide to success. Our technical expertise bolsters our
              advice and guarantees a positive change. It is always a{" "}
              <span className="underline text-green-600 font-semibold italic">
                great pleasure to collaborate.
              </span>
              <FaQuoteRight className="inline-block text-green-400 ml-2 mb-1" />
            </p>
            <div className="mt-8 border-t border-green-200 pt-6 text-right">
              <p className="text-gray-900 text-xl font-semibold">
                — Jane Nalunga
              </p>
              <p className="text-base font-light text-green-600 mt-1">
                Team Lead
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-gradient-to-b from-green-200 from-3% via-green-100 to-white to-80% py-20 px-6 sm:px-12 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col-reverse sm:flex-row gap-10 sm:gap-16 items-center">
          <motion.div
            {...anim(fadeRight)}
            className="w-full sm:w-1/2"
          >
            <span className="inline-block text-[11px] font-bold tracking-[0.2em] uppercase text-green-800 border border-green-700 rounded-full px-4 py-1.5 mb-6">
              OUR APPROACH
            </span>
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold leading-tight mb-6 text-gray-900">
              EASY,{" "}
              <span className="text-green-600">ORGANIC</span>{" "}
              &amp; SEAMLESS
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              At OMANET, we emphasize personal interactions and a bespoke
              service from start to finish, valuing traditional engagement
              methods over digital communication. As primarily an offline
              business, we focus on face-to-face and telephone consultations to
              provide tailored guidance based on your unique interests.
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              We invite you to contact us for a meeting or telephone
              conversation, allowing us to understand and craft your organic
              farming plans to meet your specific expectations and preferences.
            </p>
          </motion.div>

          <motion.div
            {...anim(fadeLeft)}
            className="w-full sm:w-1/2"
          >
            <div className="relative w-full h-64 sm:h-[28em] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={training4}
                alt="OMANET training session"
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover transform-gpu hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
