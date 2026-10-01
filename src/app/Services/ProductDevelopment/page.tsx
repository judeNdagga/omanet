"use client";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
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
    title: "Sustainable Sourcing",
    text: "Ensuring the sustainability and integrity of raw materials — sourcing high-quality organic ingredients from certified farms, practising fair trade, and ensuring all inputs are free from synthetic chemicals and GMOs.",
  },
  {
    title: "Innovation & Creativity",
    text: "Experimenting with new recipes, formulations, and processes to create unique products: organic superfood blends, fermented foods, cold-pressed juices, and eco-friendly packaging solutions.",
  },
  {
    title: "Quality & Safety Standards",
    text: "Implementing rigorous quality control throughout production — testing for contaminants, ensuring proper labelling, and adhering to food safety regulations. Certification by recognised organic standards bodies provides consumer assurance.",
  },
];

export default function ProductDevelopment() {
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
              Product Development
            </motion.h1>
          </div>
          <div className="sm:w-1/2 sm:pt-16">
            <motion.p variants={heroIt} className="text-base sm:text-lg text-green-100 leading-relaxed mb-4">
              Product development in organic agriculture is a dynamic and
              innovative process that transforms raw organic produce into
              value-added products — meeting consumer demand for healthy,
              sustainable food options while enhancing profitability for
              farmers and agribusinesses.
            </motion.p>
            <motion.p variants={heroIt} className="text-sm sm:text-base text-green-200/75 leading-relaxed">
              Successful product development begins with understanding market
              trends and consumer preferences — identifying gaps and
              opportunities to develop products people truly want.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Feature cards */}
      <section className="bg-white py-16 px-6 sm:px-12 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-[11px] font-bold tracking-[0.22em] uppercase text-green-800 border border-green-700 rounded-full px-4 py-1.5 mb-4">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              PROFESSIONAL{" "}
              <span className="text-green-600">PRODUCT DEVELOPMENT</span>
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
                READY TO DEVELOP YOUR ORGANIC PRODUCTS?
              </h2>
              <p className="text-green-100 text-base sm:text-lg leading-relaxed max-w-xl">
                Our team helps you navigate every stage of organic product
                development — from sourcing to market, with quality at every step.
              </p>
            </div>
            <div className="shrink-0">
              <ContactExpertsButton />
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-white py-16 px-6 sm:px-12 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col-reverse sm:flex-row gap-10 sm:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="w-full sm:w-1/2"
          >
            <span className="inline-block text-[11px] font-bold tracking-[0.2em] uppercase text-green-800 border border-green-700 rounded-full px-4 py-1.5 mb-6">
              Our Approach
            </span>
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold leading-tight mb-6 text-gray-900">
              EASY,{" "}
              <span className="text-green-600">ORGANIC</span>{" "}
              &amp; SEAMLESS
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              Product development in organic agriculture offers significant
              economic benefits. By adding value to raw produce, farmers and
              agribusinesses can increase their revenue streams and
              profitability — supporting the growth of the organic sector.
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Combining innovation, sustainability, and market insight, we
              help transform raw organic materials into diverse, high-quality
              products that contribute to a healthier planet and a more
              resilient food system.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="w-full sm:w-1/2"
          >
            <div className="relative w-full h-64 sm:h-[28em] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1475948164756-9a56289068fb?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Organic product development"
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover transform-gpu hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
