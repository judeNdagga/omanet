"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import ContactExpertsButton from "@/app/components/ContactExpertsButton";
export default function Communication() {
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
        className="h-auto sm:flex sm:pt-[11em] p-20  brightness-90
   bg-gradient-to-r from-green-900 from-3%
   via-green-400 
             to-green-600 to-75%"
        // style={{
        //   backgroundImage: `url(https://images.unsplash.com/photo-1535090467336-9501f96eef89?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
        // }}
      >
        <div className="sm:w-[48%]">
          <h1 className="text-3xl md:text-4xl xl:text-7xl font-mono text-white">Communication</h1>
        </div>
        <div className="divider md:divider-horizontal divider-success h-10"></div>
        <div className="sm:w-[48%] sm:text-xl text-white">
          <p>
            Effective communication in organic agriculture is essential for
            promoting sustainable practices, educating consumers, fostering
            community engagement, and building strong relationships within the
            industry. Clear, transparent, and strategic communication helps
            organic farmers, agribusinesses, and stakeholders convey their
            values, share knowledge, and advocate for the benefits of organic
            farming
          </p>
        </div>
      </div>

      {/* 2nd level */}
      <div className="bg-white">
        <h1 className="text-black text-4xl xl:text-5xl font-semibold font-mono text-center sm:pl-[5em] sm:pr-[5em] sm:pt-10">
          IMPROVE YOUR COMMUNICATION
        </h1>
        <div className="sm:flex md:gap-3 xl:gap-10 p-8 text-white">
          {/* first card */}
          <motion.div
            className="card card-body sm:w-[15em] sm:h-[25em] bg-gradient-to-r from-green-900 from-3%
            via-green-400 
             to-green-600 to-75% hover:-inset-y-2"
            variants={FadeInUpwardsAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: false,
            }}
          >
            <h1 className="text-2xl font-semibold pb-8">EDUCATING CONSUMERS</h1>
            <p>
              One of the primary goals of communication in organic agriculture
              is to educate consumers about the benefits of organic products and
              farming practices.
            </p>
          </motion.div>

          {/* second card */}

          <motion.div
            className="card card-body sm:w-[15em] sm:h-[25em] 
            bg-gradient-to-r from-green-900 from-3% via-green-400 to-green-600 to-75% hover:-inset-y-2"
            variants={FadeInUpwardsAnimationSlower}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: false,
            }}
          >
            <h1 className="text-2xl font-semibold pb-8">
              MARKETING AND BRANDING
            </h1>
            <p>
              Designing informative and attractive packaging that clearly
              communicates the organic certification and the product’s unique
              benefits.
            </p>
          </motion.div>
          {/* third card */}

          <motion.div
            className="card card-body sm:w-[15em] sm:h-[25em] bg-gradient-to-r from-green-900 from-3%
            via-green-400 
             to-green-600 to-75% hover:-inset-y-2"
            variants={FadeInUpwardsAnimationEvenSlower}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: false,
            }}
          >
            <h1 className="text-2xl font-semibold pb-8">BUILDING COMMUNITY</h1>
            <p>
              Communication helps build a sense of community among organic
              farmers, consumers, and other stakeholders.
            </p>
          </motion.div>
        </div>

        {/* after 3 cards */}

        <div className="p-10 xl:p-20">
          <div
            className="card card-body bg-gradient-to-r from-green-900 from-3%
            via-green-400 
             to-green-600 to-75%"
          >
            <h1 className="text-4xl sm:text-6xl font-bold font-mono xl:mr-[4em] text-white">
              EXPLORE FLEXIBLE HIGH-PERFORMANCE SOLUTIONS TAILORED TO GROWING
              YOUR BUSINESS
            </h1>

            <ContactExpertsButton/>
          </div>
        </div>

        {/* after card */}

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
            <p className="text-black pl-5 xl:pl-16 xl:pr-44 sm:pt-20">
              <h1 className="text-xl font-bold pb-10">OUR APPROACH</h1>
              <h1 className="text-4xl xl:text-6xl pb-6">
                EASY, <a className="text-green-600">ORGANIC</a> <br />
                SEAMLESS
              </h1>
              <p>
                Communication facilitates the sharing of knowledge and best
                practices within the organic agriculture community. This
                involves: Educational Resources: Creating and disseminating
                resources such as guides, manuals, and online courses to educate
                farmers about organic practices. Research and Innovation:
                Sharing the latest research findings, technological innovations,
                and success stories to inspire and inform the community.
                Peer-to-Peer Learning: Encouraging mentorship, apprenticeships,
                and networking opportunities for farmers to learn from each
                other’s experiences.
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
              src="https://images.unsplash.com/photo-1624207615763-df683de05417?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
