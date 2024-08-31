"use client";
import training1 from "../../public/images/services/Training_3309.jpg";
import training2 from "../../public/images/services/Training_3313.jpg";
import training3 from "../../public/images/services/Training_171.jpg";
import training4 from "../../public/images/services/Training164.jpg";
import networking1 from "../../public/images/homepage/networking1.jpg";
import chilli3 from "../../public/images/services/chilli3.jpg";
import Image from "next/image";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "./components/ui/3d-card";

import { Button } from "./components/ui/moving-border";

import eggs from "../../public/images/homepage/eggs.jpg";
import AltBackgroundSlider from "./components/AltBackgroundSlider";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import ContactButton from "./components/ContactButton";
export default function Home() {
  const words = ` Organic farm products are grown with a deep respect for nature, free from synthetic chemicals, pesticides, and GMOs. They are nurtured in healthy, nutrient-rich soils,
   which not only enhance their flavor but also retain more of the essential
    vitamins and minerals we need. From fresh vegetables to pasture-raised meats,
     organic farm products reflect sustainable practices that protect the environment,
      support biodiversity, and promote animal welfare.`;

  useEffect(() => {
    async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    };
  }, []);

  const FadeInLeftAnimation = {
    initial: {
      x: -200,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.2,
        type: "easeInOut",
      },
    },
  };
  const FadeInLeftAnimationSlower = {
    initial: {
      x: -200,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.4,
        type: "easeInOut",
      },
    },
  };
  const FadeInRightAnimation = {
    initial: {
      x: 200,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.2,
        type: "easeInOut",
      },
    },
  };

  const FadeInUpwardsAnimation = {
    initial: {
      y: 200,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.08,
        type: "easeInOut",
      },
    },
  };
  const FadeInUpwardsAnimationSlower = {
    initial: {
      y: 200,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.18,
        type: "easeInOut",
      },
    },
  };
  const FadeInUpwardsAnimationEvenSlower = {
    initial: {
      y: 200,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.38,
        type: "easeInOut",
      },
    },
  };
  return (
    <div className="overflow-hidden">
      <AltBackgroundSlider />
      {/* 1st level */}
      <div
        className="h-auto sm:h-[100em]
       bg-gradient-to-b from-green-300 from-3%
       via-green-300 
        to-white to-75%
        group
       p-10"
      >
        <div className="sm:flex">
          <div className="text-center text-black sm:w-[50%]">
            <p className="text-black sm:pl-16 sm:pr-44 sm:pt-20 pb-5">
              <motion.h1
                className="text-xl font-bold pb-10"
                variants={FadeInLeftAnimation}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: false,
                }}
              >
                WHY OMANET?
              </motion.h1>
              <motion.h1
                className="text-3xl sm:text-6xl pb-6 sm:pl-40"
                variants={FadeInLeftAnimationSlower}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: false,
                }}
              >
                HEALTHY, <span className="text-green-600">ORGANIC,</span>
                AUTHENTIC
              </motion.h1>
              <motion.p
                variants={FadeInLeftAnimation}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: false,
                }}
              >
                Organic food is not just a trend; it’s a return to wholesome,
                natural nutrition that benefits both our bodies and the planet.
                Free from synthetic pesticides, GMOs, and harmful additives,
                organic food is grown in harmony with nature, promoting soil
                health, biodiversity, and sustainable farming practices. It
                often contains higher levels of nutrients, tastes fresher, and
                supports ethical farming methods that prioritize the welfare of
                animals and the environment.
                <br /> Choosing organic is an investment in your well-being and
                a commitment to a healthier, more sustainable future for
                everyone.
              </motion.p>
            </p>
            <ContactButton />
          </div>

          {/* right side */}
          <div className="sm:w-[50%]">
            <motion.div
              className="hidden sm:block relative sm:h-[32em] sm:w-[70%] bg-cover bg-center sm:right-[-30%] brightness-75"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1635008388183-04ea0313c5d1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
              }}
              variants={FadeInRightAnimation}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
            >
              <motion.img
                src="https://images.unsplash.com/photo-1526346698789-22fd84314424?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Foreground Image"
                className="sm:absolute sm:bottom-[-20%] sm:left-[-50%] m-4 w-[25em] sm:h-[20em] opacity-95"
                // variants={FadeInUpwardsAnimationSlower}
                // initial="initial"
                // whileInView="animate"
                // viewport={{
                //   once: true,
                // }}
              />
            </motion.div>
          </div>
        </div>

        {/* after first div */}
        <div className="sm:pt-60 sm:pb-40 sm:flex sm:pl-20 sm:pr-20 sm:h-[35em]">
          <motion.h1
            variants={FadeInUpwardsAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            className="text-black text-3xl sm:text-5xl pl-4 sm:pl-10 sm:pr-1"
          >
            YOU’LL BE IN GREAT COMPANY, WE’RE{" "}
            <a className="text-green-600">TRUSTED BY HUNDREDS</a> OF FARMERS.
          </motion.h1>
          <div className="divider lg:divider-horizontal divider-success"></div>
          <motion.h1
            variants={FadeInUpwardsAnimationSlower}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            className="text-right text-black text-lg sm:ml-20 sm:pr-10"
          >
            Discover how we helped multiple farmers increase their productivity
            and efficiency for a better yield.
          </motion.h1>
        </div>

        {/* services level */}
        <div className="hidden sm:flex gap-10">
          {/* 1st card */}
          <a
            className="card sm:w-[25em] sm:h-[19em] shadow-xl hover:text-green-300 transition duration-500 hover:scale-110"
            href="/Services/Consultancy"
          >
            <Image
              src={training1}
              className="w-full h-full brightness-75 hover:brightness-50 transition duration-500"
              width={1920}
              height={1080}
              alt="image"
            />
            <h1 className="absolute sm:bottom-[10%] text-2xl sm:ml-10">
              CONSULTANCY
            </h1>
          </a>

          {/* second card */}

          <a
            className="card sm:w-[25em] sm:h-[19em] shadow-xl hover:text-green-300 transition duration-500 hover:scale-110"
            href="/Services/Training"
          >
            <Image
              src={training3}
              className="w-full h-full brightness-75 hover:brightness-50 transition duration-500"
              width={1920}
              height={1080}
              alt="image"
            />
            <h1 className="absolute sm:bottom-[10%] text-2xl sm:ml-10">
              TRAINING
            </h1>
          </a>
          {/* third card */}

          <a
            className="card sm:w-[25em] sm:h-[19em] shadow-xl hover:text-green-300 transition duration-500 hover:scale-110"
            href="/Services/Communication"
          >
            <Image
              src={training2}
              className="w-full h-full brightness-75 hover:brightness-50 transition duration-500"
              width={1920}
              height={1080}
              alt="image"
            />
            <h1 className="absolute sm:bottom-[10%] text-2xl sm:ml-10">
              COMMUNICATION
            </h1>
          </a>

          {/* fourth card */}
          <a
            className="card sm:w-[25em] sm:h-[19em] shadow-xl hover:text-green-300 transition duration-500 hover:scale-110"
            href="/Services/ProductDevelopment"
          >
            <Image
              src={chilli3}
              className="w-full h-full brightness-75 hover:brightness-50 transition duration-500"
              width={1920}
              height={1080}
              alt="image"
            />
            <h1 className="absolute sm:bottom-[10%] text-2xl sm:ml-10">
              PRODUCT DEVELOPMENT
            </h1>
          </a>
        </div>

        {/* after services level */}
      </div>
      {/* 2nd level */}
      <div
        className="h-[32em] sm:h-auto
       bg-gradient-to-t from-green-300 from-3%
       via-green-300 
        to-white to-75%
       p-10"
      >
        {/* testimonial level */}
        <div className="hidden sm:flex h-[40em]">
          <motion.div
            className="w-[50%]"
            variants={FadeInLeftAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
          >
            <Image
              src={networking1}
              alt=""
              className="w-full h-[85%] hover:scale-105 transition duration-500"
            />
          </motion.div>
          <motion.div
            className="w-[50%]"
            variants={FadeInRightAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
          >
            <p className="text-black text-xl sm:text-2xl font-extralight pl-16">
              <FaQuoteLeft /> To access product knowledge and serve our
              customers more efficiently, we decided to build an intelligent
              knowledge base.
              <a className="font-bold text-green-400 italic">OMANET</a> selected
              the right procedures and created a very simple and easy to follow
              guide to success. Our technical expertise bolsters our advice and
              guarantess a positive change. It is always a{" "}
              <a className="underline text-green-400 font-bold italic">
                great pleasure to collaborate.
              </a>
              <FaQuoteRight />
            </p>

            <p className="sm:text-right text-center text-black pt-10 text-3xl">
              - Jane Nalunga
              <p className="text-2xl font-light text-green-600">Team Lead</p>
            </p>
          </motion.div>
        </div>

        {/* after testimonial */}
        <motion.div
          className="bg-scroll bg-gradient-to-b from-green-300 from-3%
      via-green-300 to-white to-75% 
       sm:flex rounded-xl h-[32em] sm:h-auto"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1518843875459-f738682238a6?q=80&w=2042&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
          }}
          variants={FadeInUpwardsAnimation}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
        >
          {/* <div className="bg-scroll rounded-xl" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)` }}> */}
          {/* inner card */}
          <motion.div
            className="hidden sm:block w-[50%]"
            variants={FadeInUpwardsAnimationEvenSlower}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
          >
            <CardContainer className="inter-var w-full">
              <CardBody className="w-full">
                <CardItem className="w-full pl-4 pt-4">
                  <Image
                    src={eggs}
                    height="1000"
                    width="1000"
                    className=" h-[30em] w-[98%] object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
              </CardBody>
            </CardContainer>
          </motion.div>
          <motion.div
            className="text-center text-black sm:w-[50%]"
            variants={FadeInUpwardsAnimationSlower}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
          >
            <h1 className="pt-12 sm:pt-32 text-3xl uppercase font-semibold text-white">
              Farmer Products
            </h1>
            <p className="pt-8 sm:pt-8 pl-4 sm:pl-20 pr-4 sm:pr-20 pb-5 sm:pb-4 sm:text-md text-white">
              {words}
            </p>
            <ContactButton />
          </motion.div>
        </motion.div>
      </div>

      {/* 3rd level */}

      <div
        className="h-auto
       bg-gradient-to-b from-green-300 from-3%
       via-green-300 
        to-white to-75%
       p-10"
      >
        {/* second testimonial */}

        <div className="hidden sm:flex h-[40em] pt-10">
          <motion.div
            className="w-[50%]"
            variants={FadeInRightAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
          >
            <p className="text-black pl-16 pr-44 pt-20">
              <h1 className="text-xl font-bold pb-10">OUR APPROACH</h1>
              <h1 className="text-6xl pb-6">
                EASY, <a className="text-green-600">ORGANIC</a> <br />
                SEAMLESS
              </h1>
              <p>
                At OMANET, we emphasize personal interactions and a bespoke
                service from start to finish, valuing traditional engagement
                methods over digital communication. As primarily an offline
                business, we focus on face-to-face and telephone consultations
                to provide tailored guidance based on your unique interests.
                <br /> We invite to contact us for a meeting or telephone
                conversation, allowing us to understand and craft your organic farming
                plans to meet your specific expectations and preferences.
              </p>
            </p>
          </motion.div>

          <motion.div
            className="w-[50%]"
            variants={FadeInLeftAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
          >
            <Image
              src={training4}
              alt=""
              className="w-full h-[85%] hover:scale-105 transition duration-500"
            />
          </motion.div>
        </div>

        {/* after second testimonial */}
      </div>
    </div>
  );
}
