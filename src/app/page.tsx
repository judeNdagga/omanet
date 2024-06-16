"use client";

import Image from "next/image";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "./components/ui/3d-card";
import BackgroundSlider from "./components/BackgroundSlider";
import { Button } from "./components/ui/moving-border";
import net1 from "../../public/images/homepage/networking1.jpg"
import eggs from "../../public/images/homepage/eggs.jpg"
import AltBackgroundSlider from "./components/AltBackgroundSlider";
export default function Home() {
  const words = ` We stand for providing the most fresh organic products which will
  serve your health and be a source of vitamins and minerals for our
  clients. Packed with Vitamin C, a cherry tomato boosts immunity and
  acts as an antioxidant, It is also used in beauty care for both skin
  and hair, the Lycopene in cherry tomato naturally protects the skin
  and acts as a sunblock. Those who have oily skin can apply it to the
  face to prevent acne and pimples.`;

  const FadeInUpwardsAnimation = {
    initial: { 
      y: 200, 
      opacity: 0
     },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: {
        delay: 0.08,
        type: "easeInOut"
      }
    },
    
  };
  const FadeInUpwardsAnimationSlower = {
    initial: { 
      y: 200, 
      opacity: 0
     },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: {
        delay: 0.18,
        type: "easeInOut"
      }
    },
    
  };
  const FadeInUpwardsAnimationEvenSlower = {
    initial: { 
      y: 200, 
      opacity: 0
     },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: {
        delay: 0.38,
        type: "easeInOut"
      }
    },
    
  };
  return (
    <div>
      <AltBackgroundSlider />
      {/* 1st level */}
      <div
        className="h-[40em]
       bg-gradient-to-b from-green-600 from-3%
       via-green-300 
        to-white to-75%
        group
       p-10"
      >
        <motion.div
          className="bg-gradient-to-t from-green-600 from-3%
      via-green-300 
       to-white to-75% sm:flex rounded-xl h-[32em] sm:h-auto"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1469053713174-e64e64779a7a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
          }}
          variants={FadeInUpwardsAnimation}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
        >
          <motion.div
           className="text-center text-black sm:w-[50%]"
           variants={FadeInUpwardsAnimationSlower}
           initial="initial"
           whileInView="animate"
           viewport={{
             once: true,
           }}
           >
            <h1 className="pt-12 sm:pt-32 text-3xl uppercase font-semibold font-mono text-white">
              WHY OMANET?
            </h1>
            <p className="pt-8 sm:pt-8 pl-4 sm:pl-20 pr-4 sm:pr-20 pb-5 sm:pb-4 sm:text-md text-white">{words}</p>
            <Button
              borderRadius="1.75rem"
              className="bg-gradient-to-r from-green-900 to-green-300 text-white 
          border-neutral-200 uppercase 
          font-mono
           hover:text-base hover:font-semibold 
            duration-300"
            >
              Check Out
            </Button>
          </motion.div>


          {/* inner card */}
          <motion.div className="hidden sm:block sm:w-[50%]"
          variants={FadeInUpwardsAnimationEvenSlower}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          >
            <CardContainer className="inter-var w-full">
              <CardBody className="w-full">
                <CardItem className="sm:w-full w-[23em] sm:pt-20">
                  <Image
                    src={net1}
                    height="1000"
                    width="1000"
                    className="h-[20em] sm:h-[30em] sm:w-[98%] object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
              </CardBody>
            </CardContainer>
          </motion.div>



        </motion.div>
      </div>
      {/* 2nd level */}
      <div
        className="h-[32em] sm:h-auto
       bg-gradient-to-t from-green-600 from-3%
       via-green-300 
        to-white to-75%
       p-10"
      >
        <motion.div
          className="bg-scroll bg-gradient-to-b from-green-600 from-3%
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
          <motion.div className="hidden sm:block w-[50%]"
           variants={FadeInUpwardsAnimationEvenSlower}
           initial="initial"
           whileInView="animate"
           viewport={{
             once: true,
           }}>
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
          <motion.div className="text-center text-black sm:w-[50%]"
           variants={FadeInUpwardsAnimationSlower}
           initial="initial"
           whileInView="animate"
           viewport={{
             once: true,
           }}>
            <h1 className="pt-12 sm:pt-32 text-3xl uppercase font-semibold font-mono text-white">
              Farmer Products
            </h1>
            <p className="pt-8 sm:pt-8 pl-4 sm:pl-20 pr-4 sm:pr-20 pb-5 sm:pb-4 sm:text-md text-white">{words}</p>
            <Button
              borderRadius="1.75rem"
              className="bg-gradient-to-r from-green-900 to-green-300 text-white 
          border-neutral-200 uppercase 
          font-mono
           hover:text-base hover:font-semibold
            duration-300"
            >
              Check Out
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* 3rd level */}

      <div
        className="h-[40em]
       bg-gradient-to-b from-green-600 from-3%
       via-green-300 
        to-white to-75%
       p-10"
      >
        <motion.div
          className="bg-gradient-to-t from-green-600 from-3%
          via-green-300 
           to-white to-75% sm:flex rounded-xl h-[32em] sm:h-auto"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1529909369182-b5a23481c330?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
          }}
          variants={FadeInUpwardsAnimation}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
        >
          <motion.div className="text-center text-black sm:w-[50%]"
           variants={FadeInUpwardsAnimationSlower}
           initial="initial"
           whileInView="animate"
           viewport={{
             once: true,
           }}>
            <h1 className="pt-12 sm:pt-32 text-3xl uppercase font-semibold font-mono text-white">
              Fast Delivery
            </h1>
            <p className="pt-8 sm:pt-8 pl-4 sm:pl-20 pr-4 sm:pr-20 pb-5 sm:pb-4 sm:text-md text-white">{words}</p>
            <Button
              borderRadius="1.75rem"
              className="bg-gradient-to-r from-green-900 to-green-300 text-white 
          border-neutral-200 uppercase 
          font-mono
           hover:text-base hover:font-semibold
            duration-300"
            >
              Check Out
            </Button>
          </motion.div>
          <motion.div className="hidden sm:block sm:w-[50%]"
           variants={FadeInUpwardsAnimationEvenSlower}
           initial="initial"
           whileInView="animate"
           viewport={{
             once: true,
           }}>
            <CardContainer className="inter-var w-full">
              <CardBody className="w-full">
                <CardItem className="w-full pt-4">
                  <Image
                    src="https://images.unsplash.com/photo-1607273685680-6bd976c5a5ce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    height="1000"
                    width="1000"
                    className=" h-[30em] w-[98%] object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
              </CardBody>
            </CardContainer>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
