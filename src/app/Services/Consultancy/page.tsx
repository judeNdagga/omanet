"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import ruraltraining from "/public/images/homepage/ruraltraining.jpg";
import chicken from "/public/images/homepage/chicken.jpg";
import samavocado from "/public/images/homepage/samavocado.jpg";
import ContactExpertsButton from "@/app/components/ContactExpertsButton";
export default function Consultancy() {
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
          <h1 className="text-3xl md:text-5xl xl:text-7xl text-white  pt-10 md:pt-0">
            Consultancy
          </h1>
        </div>
        <div className="divider md:divider-horizontal divider-success h-10"></div>
        <div className="sm:w-[48%] sm:text-xl text-white">
          <p>
            Consultancy in organic agriculture plays a crucial role in guiding
            farmers, agribusinesses, and organizations towards sustainable and
            profitable organic farming practices. Organic agricultural
            consultants provide expert advice, support, and training to help
            clients transition to organic farming, improve their operations, and
            achieve certification.
            <p className="md:pt-10 xl:pt-20">
              Consultants help farmers build resilience against various risks,
              including climate change, market fluctuations, and pest outbreaks
            </p>
          </p>
        </div>
      </div>

      {/* 2nd level */}
      <div className="bg-white">
        <h1 className="text-black text-4xl xl:text-5xl font-semibold font-mono text-center sm:pl-[5em] sm:pr-[5em] sm:pt-10">
          DISCOVER HOW TO RUN AN AGRICULTURAL BUSINESS
        </h1>
        <div className="sm:flex md:gap-3 xl:gap-10 p-8 text-white">
          {/* first card */}
          <motion.div
            className="card card-body sm:w-[15em] xl:h-[25em] bg-gradient-to-r from-green-900 from-3% via-green-400 to-green-600 to-75%"
            variants={FadeInUpwardsAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: false,
            }}
          >
            <h1 className="text-2xl md:text-xl xl:text-2xl font-semibold pb-8 md:pb-3 xl:pb-8">
              TRAINING AND EDUCATION
            </h1>
            <p>
              Workshops and Seminars: Organizing workshops and seminars on
              organic farming practices, sustainability, and market trends.
              <br />
              Field Days and Demonstrations: Hosting on-farm demonstrations and
              field days to showcase best practices and innovative techniques.
            </p>
          </motion.div>

          {/* second card */}

          <motion.div
            className="card card-body sm:w-[15em] xl:h-[25em] bg-gradient-to-r from-green-900 from-3% via-green-400 to-green-600 to-75%"
            variants={FadeInUpwardsAnimationSlower}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: false,
            }}
          >
            <h1 className="text-2xl md:text-xl xl:text-2xl font-semibold pb-8 md:pb-3 xl:pb-8">
              VALUE-ADDED PRODUCT DEVELOPMENT
            </h1>
            <p>
              Product Innovation: Identifying opportunities for creating
              value-added organic products such as jams, sauces, and processed
              foods.
              <br />
              Processing and Packaging: Advising on processing techniques and
              packaging solutions that maintain organic integrity and appeal to
              consumers.
            </p>
          </motion.div>
          {/* third card */}

          <motion.div
            className="card card-body sm:w-[15em] xl:h-[25em] bg-gradient-to-r from-green-900 from-3% via-green-400 to-green-600 to-75%"
            variants={FadeInUpwardsAnimationEvenSlower}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: false,
            }}
          >
            <h1 className="text-2xl md:text-xl xl:text-2xl font-semibold pb-8 md:pb-3 xl:pb-8">
              SUSTAINABLE FARM MANAGEMENT
            </h1>
            <p>
              Resource Efficiency: Advising on efficient use of water, energy,
              and other resources to reduce costs and environmental impact.
              <br />
              Organic Inputs: Recommending suitable organic fertilizers,
              pesticides, and seeds to meet certification standards and improve
              crop yields.
            </p>
          </motion.div>
        </div>

        {/* after 3 cards */}

        <div className="p-10 xl:p-20">
          <div className="card card-body bg-gradient-to-r from-green-900 from-3% via-green-400 to-green-600 to-75%">
            <h1 className="text-4xl sm:text-6xl font-bold font-mono xl:mr-[4em] text-white">
              EXPLORE FLEXIBLE HIGH-PERFORMANCE SOLUTIONS TAILORED TO GROWING
              YOUR BUSINESS
            </h1>

            <ContactExpertsButton />
          </div>
        </div>

        {/* after card */}

        <div className="sm:pt-40 sm:pb-40 sm:flex sm:pl-20 pr-20 sm:h-[35em]">
          <h1 className="text-black font-bold font-mono text-3xl sm:text-6xl pl-4 sm:pl-10 sm:pr-1">
            HEAR IT FROM OUR CUSTOMERS
          </h1>
          <div className="divider md:divider-horizontal divider-success"></div>
          <h1 className="text-right text-black text-lg ml-20 pr-10">
            Our customers come from different industries but share a unanimous
            appreciation of our work together, reflected in their progress.
          </h1>
        </div>
        <div className="sm:flex">
          {/* 1st card */}
          <div className="card card-body">
            <Image
              src={chicken}
              width={1920}
              height={1080}
              alt="bg pic"
              className="h-[20em] hover:scale-110 transition duration-700"
            ></Image>
            <h1 className="text-black hover:text-green-500 font-semibold text-2xl font-mono">
              HOW PETER USED OUR ADVICE
            </h1>
            <p className="text-black">
              Peter utilised our consultation to enable him run his poultry farm
              more effieciently as well as look out for probable hindrances to
              success.
            </p>
          </div>
          {/* 2nd card */}

          <div className="card card-body">
            <Image
              src={samavocado}
              width={1920}
              height={1080}
              alt="bg pic"
              className="h-[20em] hover:scale-110 transition duration-700"
            ></Image>
            <h1 className="text-black hover:text-green-500 font-semibold text-2xl font-mono">
              HOW SAM USED OUR ADVICE
            </h1>
            <p className="text-black">
              Sam used our consultation to double the yield on his avocado farm
              and mitigate the problems he had faced before.
            </p>
          </div>
          {/* 3rd card */}
          <div className="card card-body">
            <Image
              src={ruraltraining}
              width={1920}
              height={1080}
              alt="bg pic"
              className="h-[20em] hover:scale-110 transition duration-700"
            ></Image>
            <h1 className="text-black hover:text-green-500 font-semibold text-2xl font-mono">
              HOW THIS COMMUNITY USED OUR ADVICE
            </h1>
            <p className="text-black">
              They were able to learn ways in which to increase their
              productivity as efficiently as possible while avoiding hindrances
              at the same time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
