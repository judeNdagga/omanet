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
          <motion.p className="mt-8 mb-8 text-black"
          variants={FadeInRightAnimation}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: false,
          }}
          >
            Use this contact form to reach out and tell us about your challenge
            or send an email to{" "}
            <a
              href="mailto:admin@omanetug.org"
              className="text-green-600 font-bold underline"
            >
              admin@omanetug.org
            </a>
            . We will certainly receive your message. You can also call our
            offices on phone with 0772495627.
          </motion.p>
          <form action="">
            <div className="">
              <input
                type="text"
                placeholder="Full Name"
                className="bg-green-100 rounded-lg h-10 border-2 border-green-300 text-black text-center w-[80%]"
              />
              <input
                type="email"
                placeholder="Email"
                className="bg-green-100 rounded-lg h-10 border-2 border-green-300 text-black text-center w-[80%]"
              />
              <input
                type="text"
                placeholder="Message"
                className="bg-green-100 rounded-lg h-36 border-2 border-green-300 text-black text-center w-[80%]"
              />
            </div>
            <button
              className="btn btn-wide mt-5 mb-10 bg-gradient-to-r from-green-900 from-3%
    via-lime-400 
     to-green-600 to-75% text-white text-lg border-none"
            >
              Send
              <AiOutlineArrowRight className="text-xl" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
