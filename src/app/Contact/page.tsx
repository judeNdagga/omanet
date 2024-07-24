"use client";
import { AiOutlineArrowRight } from "react-icons/ai";
import { motion } from "framer-motion";
export default function Contact() {
  const FadeInLeftAnimation = {
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
  return (
    <div className="overflow-hidden">
      <div
        className="h-[50em] p-10 sm:p-20  brightness-90
        bg-gradient-to-b from-green-300 from-3%
        via-green-300 
         to-white to-75%"
      >
        <div className="sm:w-[70%] sm:ml-[15em] bg-green-300 text-center  mt-20">
          <motion.h1
            className="text-center text-3xl sm:text-7xl font-bold text-black"
            variants={FadeInLeftAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: false,
            }}
          >
            ANY 
            <a className="text-green-600"> INQUIRIES</a>?
          </motion.h1>
          <motion.p className="mt-8 mb-8 text-black text-lg"
          variants={FadeInRightAnimation}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: false,
          }}
          >
            Send us an email and tell us what you need help with.
            We will certainly receive your message. You can also call our
            offices on <a className="font-bold text-green-600 underline">0772495627</a>.
          </motion.p>
          
            <a
              className="btn btn-wide mt-5 mb-10 bg-slate-900 hover:bg-gray-100 hover:text-black text-white text-lg border-none"
              href="mailto:admin@omanetug.org"
            >
              Send Email
              <AiOutlineArrowRight className="text-xl" />
            </a>
          
        </div>
      </div>
    </div>
  );
}
