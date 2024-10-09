"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import training3 from "../../../../public/images/services/Training_171.jpg";
import { BsArrowRight } from "react-icons/bs";
import ContactExpertsButton from "@/app/components/ContactExpertsButton";
export default function Training() {
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
        bg-gradient-to-r from-green-900 from-3% via-green-400 to-green-600 to-75%"
        // style={{
        //   backgroundImage: `url(https://images.unsplash.com/photo-1535090467336-9501f96eef89?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
        // }}
      >
        <div className="sm:w-[48%]">
          <h1 className="text-3xl md:text-5xl xl:text-7xl font-mono text-white">Training</h1>
        </div>
        <div className="divider md:divider-horizontal divider-success h-10"></div>
        <div className="sm:w-[48%] sm:text-xl text-white">
          <p>
            Our commitment to your success doesn’t end with a single
            consultation. We provide ongoing support and training to help you
            stay informed about the latest organic farming techniques and market
            trends. Whether you need periodic check-ins or continuous guidance,
            we’re here to ensure your farm thrives.
            <p className="md:pt-5 xl:pt-20">
              Training in organic agriculture is essential for fostering the
              knowledge, skills, and practices needed to cultivate sustainable,
              environmentally friendly, and health-conscious farming systems. As
              the demand for organic products continues to rise, comprehensive
              training programs are crucial in equipping farmers.
            </p>
          </p>
        </div>
      </div>

      {/* 2nd level */}
      <div className="bg-white">
        <h1 className="text-black text-4xl xl:text-5xl font-semibold font-mono text-center sm:pl-[5em] sm:pr-[5em] sm:pt-10">
          UNDERTAKE CRUCIAL TRAINING FOR BETTER SUCCESS
        </h1>
        <div className="sm:flex md:gap-3 xl:gap-10 p-8 text-white">
          {/* first card */}
          <motion.div
            className="card card-body sm:w-[15em] xl:h-[25em] bg-gradient-to-r from-green-900 from-3% via-green-400 to-green-600 to-75% hover:-inset-y-2"
            variants={FadeInUpwardsAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: false,
            }}
          >
            <h1 className="text-2xl font-semibold pb-8">
              WORKSHOPS AND SEMINARS
            </h1>
            <p>
              Workshops and seminars led by experienced organic farmers,
              agronomists, and industry experts provide valuable insights and
              up-to-date information on organic farming practices. These
              sessions often cover advanced topics, such as organic market
              trends, innovative farming technologies, and sustainable business
              strategies.
            </p>
          </motion.div>

          {/* second card */}

          <motion.div
            className="card card-body sm:w-[15em] xl:h-[25em] bg-gradient-to-r from-green-900 from-3% via-green-400 to-green-600 to-75% hover:-inset-y-2"
            variants={FadeInUpwardsAnimationSlower}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: false,
            }}
          >
            <h1 className="text-2xl font-semibold pb-8">
              NETWORKING AND COMMUNITY BUILDING
            </h1>
            <p>
              Training programs often provide opportunities for networking and
              community building. Participants can connect with fellow trainees,
              mentors, and industry professionals, fostering a supportive
              community of like-minded individuals committed to organic farming.
              This network can be invaluable for sharing knowledge, resources,
              and opportunities.
            </p>
          </motion.div>
          {/* third card */}

          <motion.div
            className="card card-body sm:w-[15em] xl:h-[25em] bg-gradient-to-r from-green-900 from-3% via-green-400 to-green-600 to-75% hover:-inset-y-2"
            variants={FadeInUpwardsAnimationEvenSlower}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: false,
            }}
          >
            <h1 className="text-2xl font-semibold pb-8">
              FIELD VISITS AND DEMONSTRATIONS
            </h1>
            <p>
              Field visits to successful organic farms and demonstration sites
              offer trainees a firsthand look at how organic principles are
              applied in diverse farming operations. These visits provide
              practical examples and inspiration, showcasing innovative
              techniques and best practices in action.
            </p>
          </motion.div>
        </div>

        {/* after 3 cards */}

        <div className="p-20">
          <div
            className="card card-body bg-gradient-to-r from-green-900 from-3% via-green-400 to-green-600 to-75%"
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
              <h1 className="text-4xl sm:text-6xl pb-6">
                EASY, <a className="text-green-600">ORGANIC</a> <br />
                SEAMLESS
              </h1>
              <p>
                Practical, hands-on training is a cornerstone of effective
                organic agriculture education. Participants engage in on-farm
                experiences where they can apply theoretical knowledge to
                real-world scenarios. This includes activities like soil
                testing, planting, weeding, composting, and harvesting, as well
                as managing livestock and implementing pest control measures.
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
              src={training3}
              alt=""
              className="p-5 sm:p-0 sm:pr-5 sm:w-full h-[85%] hover:scale-105 transition duration-500"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
