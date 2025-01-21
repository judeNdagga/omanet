"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import ContactExpertsButton from "@/app/components/ContactExpertsButton";
export default function ProductDevelopment() {
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
          <h1 className="text-3xl md:text-5xl xl:text-7xl text-white  pt-10 md:pt-0">
            Product Development
          </h1>
        </div>
        <div className="divider md:divider-horizontal divider-success h-10"></div>
        <div className="sm:w-[48%] sm:text-xl text-white">
          <p>
            Product development in organic agriculture is a dynamic and
            innovative process that transforms raw organic produce into a
            variety of value-added products. This not only meets consumer demand
            for healthy, sustainable food options but also enhances
            profitability for farmers and agribusinesses.
            <p className="md:pt-5 xl:pt-20 hidden xl:block">
              Successful product development begins with understanding market
              trends and consumer preferences. Organic agricultural
              entrepreneurs conduct market research to identify gaps and
              opportunities. This includes analyzing consumer demand for
              specific organic products, such as gluten-free snacks, plant-based
              proteins, or organic skincare items.
            </p>
          </p>
        </div>
      </div>

      {/* 2nd level */}
      <div className="bg-white">
        <h1 className="text-black text-4xl xl:text-5xl font-semibold font-mono text-center sm:pl-[5em] sm:pr-[5em] sm:pt-10">
          ACCESS PROFESSIONAL PRODUCT DEVELOPMENT
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
              SUSTAINABLE SOURCING
            </h1>
            <p>
              Ensuring the sustainability and integrity of raw materials is
              crucial in organic product development. Producers source
              high-quality organic ingredients, adhering to strict organic
              certification standards. This involves working with certified
              organic farms, practicing fair trade, and ensuring that all inputs
              are free from synthetic chemicals and GMOs.
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
              INNOVATION AND CREATIVITY
            </h1>
            <p>
              Innovation is at the heart of product development in organic
              agriculture. Entrepreneurs experiment with new recipes,
              formulations, and processes to create unique and appealing
              products. This might include developing organic superfood blends,
              fermented foods, cold-pressed juices, or eco-friendly packaging
              solutions.
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
              QUALITY AND SAFETY STANDARDS
            </h1>
            <p>
              Maintaining high standards of quality and safety is paramount.
              Organic product developers implement rigorous quality control
              measures throughout the production process. This includes testing
              for contaminants, ensuring proper labeling, and adhering to food
              safety regulations. Certification by recognized organic standards
              bodies provides additional assurance to consumers.
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
            <p className="text-black pl-5 xl:pl-16 xl:pr-44 xl:pt-20">
              <h1 className="text-xl font-bold pb-10">OUR APPROACH</h1>
              <h1 className="text-4xl xl:text-6xl pb-6">
                EASY, <a className="text-green-600">ORGANIC</a> <br />
                SEAMLESS
              </h1>
              <p>
                Product development in organic agriculture offers significant
                economic benefits. By adding value to raw produce, farmers and
                agribusinesses can increase their revenue streams and
                profitability. This economic viability supports the growth of
                the organic sector and encourages more farmers to adopt organic
                practices.
                <br />
                Product development in organic agriculture is a multifaceted
                process that combines innovation, sustainability, and market
                insight. By transforming raw organic materials into diverse,
                high-quality products, entrepreneurs not only meet consumer
                demand but also contribute to a healthier planet and a more
                resilient food system.
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
              src="https://images.unsplash.com/photo-1475948164756-9a56289068fb?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              height={720}
              width={1080}
              className="p-5 sm:p-0 sm:pr-5 sm:w-full h-[85%] hover:scale-105 transition duration-500"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
