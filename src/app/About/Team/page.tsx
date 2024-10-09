"use client";
import Image from "next/image";
import banana1 from "../../../../public/images/homepage/networking1.jpg";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import ContactButton from "@/app/components/ContactButton";
export default function Team() {
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
      <div
        className="h-auto
       bg-gradient-to-b from-green-300 from-3%
       via-green-300 
        to-white to-75%
        group
       p-10 pt-20"
      >
        <div className="sm:flex">
          <div className="text-center text-black sm:w-[50%]">
            <p className="text-black xl:pl-16 xl:pr-44 sm:pt-20 pb-5">
              <motion.h1
                className="text-4xl xl:text-6xl pb-6 xl:pl-20 pt-10 sm:pt-0"
                variants={FadeInLeftAnimationSlower}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: false,
                }}
              >
                MEET OUR <a className="text-green-600">TEAM</a>
              </motion.h1>
              <motion.p
                variants={FadeInLeftAnimation}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: false,
                }}
              >
                Teamwork is an essential component of successful organic
                agriculture. Effective collaboration among farmers, workers,
                consultants, and other stakeholders ensures that sustainable
                practices are implemented efficiently, challenges are addressed
                promptly, and the farm operates smoothly.
              </motion.p>
            </p>
           <ContactButton/>
          </div>

          {/* right side */}
          <div className="sm:w-[50%] hidden sm:block pt-6">
            <motion.div
              className="relative md:h-[25em] xl:h-[32em] sm:w-[70%] bg-cover bg-center sm:right-[-30%] brightness-75"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1664575197593-2e7085ef086b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
              }}
              variants={FadeInRightAnimation}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
            >
              <motion.img
                src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Foreground Image"
                className="sm:absolute sm:bottom-[-20%] sm:left-[-50%] m-4 w-[25em] sm:h-[20em] opacity-95"
                variants={FadeInUpwardsAnimationSlower}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
              />
            </motion.div>
          </div>
        </div>

        {/* after first div */}
        <div className="pt-10 md:pt-32 xl:pt-60 xl:pb-40 xl:pl-20 xl:pr-20 h-auto flex">
        <motion.div
            className="sm:w-[50%]"
            variants={FadeInLeftAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1521790797524-b2497295b8a0?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="w-full h-[85%] hover:scale-105 transition duration-500"
            />
          </motion.div>
          <div className="divider lg:divider-horizontal divider-success"></div>
         
          <motion.h1
            variants={FadeInUpwardsAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            className="text-black text-2xl sm:text-5xl pl-4 xl:pl-10 xl:pr-1 sm:pt-20"
          >
            PROBLEM SOLVING AND{" "}
            <a className="text-green-600">KNOWLEDGE SHARING.</a>
          </motion.h1>
        </div>
        </div>

        {/* services level */}
        <div className="h-auto bg-gradient-to-t from-green-300 from-3%
       via-green-300 
        to-white to-75%">
        <div className="hidden sm:flex gap-4 xl:gap-10 p-10">
          {/* 1st card */}
          <a
            className="card sm:w-[25em] sm:h-[19em] shadow-xl hover:text-green-300 transition duration-500 hover:scale-110"
            href="/Services/Consultancy"
          >
            <Image
              src="https://images.unsplash.com/photo-1518994603110-1912b3272afd?q=80&w=1924&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-full h-full brightness-75 hover:brightness-50 transition duration-500"
              width={1920}
              height={1080}
              alt="image"
            />
           
          </a>

          {/* second card */}

          <a
            className="card sm:w-[25em] sm:h-[19em] shadow-xl hover:text-green-300 transition duration-500 hover:scale-110"
            href="/Services/Training"
          >
            <Image
              src="https://images.unsplash.com/photo-1523349122880-44486ffa7b14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-full h-full brightness-75 hover:brightness-50 transition duration-500"
              width={1920}
              height={1080}
              alt="image"
            />
           
          </a>
          {/* third card */}

          <a
            className="card sm:w-[25em] sm:h-[19em] shadow-xl hover:text-green-300 transition duration-500 hover:scale-110"
            href="/Services/Communication"
          >
            <Image
              src="https://images.unsplash.com/photo-1530541835461-dedaf9cf368a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-full h-full brightness-75 hover:brightness-50 transition duration-500"
              width={1920}
              height={1080}
              alt="image"
            />
           
          </a>

          {/* fourth card */}
          <a
            className="card sm:w-[25em] sm:h-[19em] shadow-xl hover:text-green-300 transition duration-500 hover:scale-110"
            href="/Services/ProductDevelopment"
          >
            <Image
              src="https://images.unsplash.com/photo-1635008388183-04ea0313c5d1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-full h-full brightness-75 hover:brightness-50 transition duration-500"
              width={1920}
              height={1080}
              alt="image"
            />
           
          </a>
        </div>
        </div>

        {/* after services level */}
      
    </div>
  );
}
