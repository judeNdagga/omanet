"use client";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import ruraltraining from "/public/images/homepage/ruraltraining.jpg";
import chicken from "/public/images/homepage/chicken.jpg";
import samavocado from "/public/images/homepage/samavocado.jpg";
import ContactExpertsButton from "@/app/components/ContactExpertsButton";

const heroContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.14, delayChildren: 0.1 } },
};
const heroItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};
const heroItemReduced = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.4 } },
};
const cardContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};
const cardItem = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};
const cardItemReduced = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.3 } },
};

const features = [
  {
    title: "Training & Education",
    text: "Organising workshops, seminars, and field days on organic farming practices, sustainability, and market trends — showcasing best practices and innovative techniques in action.",
  },
  {
    title: "Value-Added Product Development",
    text: "Identifying opportunities for organic value-added products such as jams, sauces, and processed foods, with advice on processing techniques and packaging that maintains organic integrity.",
  },
  {
    title: "Sustainable Farm Management",
    text: "Advising on efficient use of water, energy, and resources alongside suitable organic fertilisers, pesticides, and seeds to meet certification standards and improve crop yields.",
  },
];

const stories = [
  {
    image: chicken,
    title: "How Peter Used Our Advice",
    text: "Peter utilised our consultation to run his poultry farm more efficiently and identify probable hindrances to success before they arose.",
  },
  {
    image: samavocado,
    title: "How Sam Used Our Advice",
    text: "Sam used our consultation to double the yield on his avocado farm and mitigate the problems he had faced in previous seasons.",
  },
  {
    image: ruraltraining,
    title: "How This Community Used Our Advice",
    text: "The community learned ways to increase their productivity as efficiently as possible while avoiding common hindrances at the same time.",
  },
];

export default function Consultancy() {
  const shouldReduce = useReducedMotion();
  const heroIt = shouldReduce ? heroItemReduced : heroItem;
  const cardIt = shouldReduce ? cardItemReduced : cardItem;

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-900 via-green-800 to-emerald-700 pt-36 pb-20 px-6 sm:px-12 md:px-16">
        <motion.div
          variants={heroContainer}
          initial="hidden"
          animate="show"
          className="max-w-7xl mx-auto flex flex-col sm:flex-row gap-10 sm:gap-20 items-start"
        >
          <div className="sm:w-1/2">
            <motion.span
              variants={heroIt}
              className="inline-block text-[11px] font-bold tracking-[0.22em] uppercase text-emerald-300 border border-emerald-500/60 rounded-full px-4 py-1.5 mb-6"
            >
              Our Services
            </motion.span>
            <motion.h1
              variants={heroIt}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.08]"
            >
              Consultancy
            </motion.h1>
          </div>
          <div className="sm:w-1/2 sm:pt-16">
            <motion.p variants={heroIt} className="text-base sm:text-lg text-green-100 leading-relaxed mb-4">
              Consultancy in organic agriculture guides farmers, agribusinesses,
              and organisations towards sustainable and profitable organic
              farming practices. Our consultants provide expert advice, support,
              and training to help clients transition to organic farming, improve
              operations, and achieve certification.
            </motion.p>
            <motion.p variants={heroIt} className="text-sm sm:text-base text-green-200/75 leading-relaxed">
              We help farmers build resilience against climate change, market
              fluctuations, and pest outbreaks — creating lasting foundations
              for organic success.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Feature cards */}
      <section className="bg-white py-16 px-6 sm:px-12 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-[11px] font-bold tracking-[0.22em] uppercase text-green-800 border border-green-700 rounded-full px-4 py-1.5 mb-4">
              What's Included
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              HOW TO RUN AN{" "}
              <span className="text-green-600">AGRICULTURAL BUSINESS</span>
            </h2>
          </div>
          <motion.div
            variants={cardContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {features.map(({ title, text }) => (
              <motion.div
                key={title}
                variants={cardIt}
                className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-emerald-500 ring-1 ring-gray-100"
              >
                <h3 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wide">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="py-12 px-6 sm:px-12 md:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-2xl bg-gradient-to-br from-green-900 via-green-800 to-emerald-700 p-10 sm:p-14 flex flex-col sm:flex-row items-start sm:items-center gap-8">
            <div className="flex-1">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                READY TO TRANSFORM YOUR FARMING OPERATION?
              </h2>
              <p className="text-green-100 text-base sm:text-lg leading-relaxed max-w-xl">
                Our expert consultants are ready to help you build a sustainable,
                profitable organic farming business tailored to your needs.
              </p>
            </div>
            <div className="shrink-0">
              <ContactExpertsButton />
            </div>
          </div>
        </div>
      </section>

      {/* Customer stories */}
      <section className="bg-white py-16 px-6 sm:px-12 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-[11px] font-bold tracking-[0.22em] uppercase text-green-800 border border-green-700 rounded-full px-4 py-1.5 mb-4">
              Success Stories
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              HEAR IT FROM{" "}
              <span className="text-green-600">OUR CUSTOMERS</span>
            </h2>
            <p className="text-gray-500 mt-3 text-sm sm:text-base max-w-xl mx-auto">
              How our consultancy has transformed farming operations across Uganda.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {stories.map(({ image, title, text }) => (
              <div
                key={title}
                className="group rounded-xl overflow-hidden shadow-md bg-white ring-1 ring-gray-100"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={image}
                    fill
                    alt={title}
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover transform-gpu group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-gray-900 font-bold text-sm uppercase tracking-wide mb-2 group-hover:text-green-600 transition-colors duration-300">
                    {title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
