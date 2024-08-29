"use client";
import ContactExpertsButton from "@/app/components/ContactExpertsButton";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

import { BsArrowRight } from "react-icons/bs";
export default function Entrepreneurship() {
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
  return (
    <div className="overflow-hidden">
      <div
        className="h-[41em] sm:h-[50em] sm:flex sm:pt-[11em] p-20  brightness-90
        bg-gradient-to-r from-green-900 from-3%
    via-lime-400 
     to-green-600 to-75%"
        // style={{
        //   backgroundImage: `url(https://images.unsplash.com/photo-1535090467336-9501f96eef89?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
        // }}
      >
        <div className="sm:w-[48%]">
          <h1 className="text-3xl sm:text-7xl font-mono">
            Entrepreneurship and Marketing
          </h1>
        </div>
        <div className="divider lg:divider-horizontal divider-success h-10"></div>
        <div className="sm:w-[48%] sm:text-xl">
          <p>
            Entrepreneurship in agriculture isn't just about sowing seeds; it's
            about cultivating innovation, harvesting opportunity, and reaping
            sustainable growth. Embrace the land, nurture creativity, and watch
            your dreams grow into fields of abundance.
            <p className="sm:pt-20">
              As the global population continues to grow and the demand for food
              increases, agricultural entrepreneurs are at the forefront of
              developing solutions that ensure food security, promote
              sustainability, and drive economic growth.
            </p>
          </p>
        </div>
      </div>

      {/* 2nd level */}
      <div className="bg-white">
        <h1 className="text-black text-5xl font-semibold font-mono text-center sm:pl-[5em] sm:pr-[5em] sm:pt-10">
          DISCOVER HOW TO RUN AN ORGANIC AGRICULTURAL BUSINESS
        </h1>
        <div className="sm:flex sm:gap-10 p-8">
          {/* first card */}
          <motion.div
            className="card card-body sm:w-[15em] sm:h-[25em] bg-gradient-to-r from-green-900 from-3%
    via-lime-400 
     to-green-600 to-75%"
            variants={FadeInUpwardsAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: false,
            }}
          >
            <h1 className="text-2xl font-bold pb-8">
              SUSTAINABLE AND ORGANIC FARMING
            </h1>
            <p>
              Organic agricultural entrepreneurs prioritize sustainability in
              every aspect of their operations. They adopt eco-friendly
              practices such as crop rotation, composting, natural pest control,
              and biodiversity enhancement. These methods not only improve soil
              health and reduce environmental impact but also yield
              high-quality, nutritious produce that meets organic certification
              standards.
            </p>
          </motion.div>

          {/* second card */}

          <motion.div
            className="card card-body sm:w-[15em] sm:h-[25em] bg-gradient-to-r from-green-900 from-3%
            via-lime-400 
             to-green-600 to-75%"
            variants={FadeInUpwardsAnimationSlower}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: false,
            }}
          >
            <h1 className="text-2xl font-bold pb-8">
              LEVERAGING TECHNOLOGY AND INNOVATION
            </h1>
            <p>
              Technology plays a vital role in optimizing organic farming
              operations. Entrepreneurs utilize precision farming tools, such as
              drones for crop monitoring, automated irrigation systems, and soil
              sensors, to enhance productivity and efficiency. Innovations like
              vertical farming, aquaponics, and biopesticides are also being
              explored to increase yields and maintain organic integrity.
            </p>
          </motion.div>
          {/* third card */}

          <motion.div
            className="card card-body sm:w-[15em] sm:h-[25em] bg-gradient-to-r from-green-900 from-3%
            via-lime-400 
             to-green-600 to-75%"
            variants={FadeInUpwardsAnimationEvenSlower}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: false,
            }}
          >
            <h1 className="text-2xl font-bold pb-8">
              BUILDING STRONG BRANDS AND MARKET PRESENCE
            </h1>
            <p>
              Effective branding and marketing are crucial for success in
              organic agriculture. Entrepreneurs focus on building strong,
              transparent brands that emphasize their commitment to organic
              practices and sustainability. Utilizing social media, e-commerce
              platforms, and direct-to-consumer sales channels, they connect
              with health-conscious consumers and build loyal customer bases.
            </p>
          </motion.div>
        </div>

        {/* after 3 cards */}

        <div className="p-20">
          <div
            className="card card-body bg-gradient-to-r from-green-900 from-3%
    via-lime-400 
     to-green-600 to-75%"
          >
            <h1 className="text-4xl sm:text-6xl font-bold font-mono mr-[4em]">
              EXPLORE FLEXIBLE HIGH-PERFORMANCE SOLUTIONS TAILORED TO GROWING
              YOUR BUSINESS
            </h1>

           <ContactExpertsButton/>
          </div>
        </div>

        {/* after card */}

        <div className="sm:pt-40 sm:pb-40 sm:flex sm:pl-20 pr-20 h-[35em]">
          <h1 className="text-black font-bold font-mono text-5xl sm:text-6xl pl-4 sm:pl-10 sm:pr-1">
            HEAR IT FROM OUR CUSTOMERS
          </h1>
          <div className="divider lg:divider-horizontal divider-success"></div>
          <h1 className="text-right text-black text-lg ml-20 pr-10">
            Discover how we helped industry leaders build their data-driven
            future. Get a deeper understanding of our AI & Data solutions and
            the impact they have on businesses like yours.
          </h1>
        </div>
        <div className="sm:flex sm:h-[40em] pt-10">
          <motion.div
            className="sm:w-[50%]"
            variants={FadeInRightAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: false,
            }}
          >
            <p className="text-black pl-5 sm:pl-16 sm:pr-44 sm:pt-20">
              <h1 className="text-xl font-bold pb-10">OUR APPROACH</h1>
              <h1 className="text-4xl sm:text-6xl pb-6">
                EASY, <a className="text-green-600">ORGANIC</a> <br />
                SEAMLESS
              </h1>
              <p>
                Entrepreneurship in organic agriculture represents a dynamic and
                innovative approach to farming that combines sustainable
                practices with business acumen. As consumer demand for organic
                products continues to rise, opportunities abound for
                entrepreneurs to create profitable and environmentally
                responsible agricultural enterprises.
              </p>
            </p>
          </motion.div>

          <motion.div
            className="sm:w-[50%]"
            variants={FadeInLeftAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: false,
            }}
          >
            <Image
              src="https://images.unsplash.com/photo-1609780447631-05b93e5a88ea?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              width={1080}
              height={720}
              className="p-5 sm:p-0 sm:pr-5 sm:w-full h-[85%] hover:scale-105 transition duration-500"
            />
          </motion.div>
        </div>

       
      </div>
    </div>
  );
}
