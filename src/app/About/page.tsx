"use client";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import ContactButton from "@/app/components/ContactButton";

const heroContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.14, delayChildren: 0.1 },
  },
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

const values = [
  {
    title: "Sustainability",
    text: "We promote farming systems that protect the environment, conserve biodiversity, and build resilience against climate change — securing the land for future generations.",
  },
  {
    title: "Integrity",
    text: "We uphold the highest standards of organic certification and transparency, ensuring every product and practice reflects our commitment to authentic, chemical-free agriculture.",
  },
  {
    title: "Community",
    text: "We believe that thriving farmers build thriving communities. We invest in people-first solutions, connecting farmers, consumers, and businesses across Uganda and beyond.",
  },
  {
    title: "Innovation",
    text: "We embrace new tools, techniques, and ideas — from precision farming to value-added product development — to keep Uganda's organic sector at the forefront.",
  },
  {
    title: "Empowerment",
    text: "We equip farmers with knowledge, skills, and market access so they can make informed decisions, grow their incomes, and lead sustainable livelihoods.",
  },
  {
    title: "Excellence",
    text: "From consultancy to training to product development, we hold every output to the highest standard — because Uganda's farmers and consumers deserve nothing less.",
  },
];

const services = [
  { label: "Consultancy", href: "/Services/Consultancy" },
  { label: "Training & Extension", href: "/Services/Training" },
  { label: "Communication", href: "/Services/Communication" },
  { label: "Product Development", href: "/Services/ProductDevelopment" },
  { label: "Entrepreneurship & Marketing", href: "/Services/Entrepreneurship" },
];

export default function AboutPage() {
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
              Who We Are
            </motion.span>
            <motion.h1
              variants={heroIt}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.08]"
            >
              About OMANET
            </motion.h1>
          </div>
          <div className="sm:w-1/2 sm:pt-16">
            <motion.p
              variants={heroIt}
              className="text-base sm:text-lg text-green-100 leading-relaxed mb-4"
            >
              OMANET — the Organic Market Network Uganda — is a membership-based
              organisation dedicated to promoting and developing the organic
              agriculture sector across Uganda and the wider East African
              region.
            </motion.p>
            <motion.p
              variants={heroIt}
              className="text-sm sm:text-base text-green-200/75 leading-relaxed"
            >
              We support farmers, agribusinesses, and communities in building
              sustainable, profitable, and environmentally responsible farming
              systems — from smallholder plots to commercial organic
              enterprises.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white py-16 px-6 sm:px-12 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex-1 bg-green-50 rounded-2xl p-8 border border-green-100"
          >
            <span className="inline-block text-[11px] font-bold tracking-[0.22em] uppercase text-green-800 border border-green-700 rounded-full px-4 py-1.5 mb-4">
              Our Mission
            </span>
            <p className="text-2xl sm:text-3xl font-bold text-gray-900 leading-snug">
              Supporting Farmers.{" "}
              <span className="text-green-600">Sustaining Communities.</span>{" "}
              Shaping the Future.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.12 }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex-1 bg-gray-50 rounded-2xl p-8 border border-gray-100"
          >
            <span className="inline-block text-[11px] font-bold tracking-[0.22em] uppercase text-green-800 border border-green-700 rounded-full px-4 py-1.5 mb-4">
              Our Vision
            </span>
            <p className="text-lg text-gray-600 leading-relaxed">
              A Uganda where organic agriculture is the foundation of food
              security, environmental health, and rural prosperity — where every
              farmer has access to the knowledge, markets, and support they need
              to thrive.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We Do */}
      <section className="bg-gray-50 py-16 px-6 sm:px-12 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-[11px] font-bold tracking-[0.22em] uppercase text-green-800 border border-green-700 rounded-full px-4 py-1.5 mb-4">
              What We Do
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              A FULL RANGE OF{" "}
              <span className="text-green-600">ORGANIC SERVICES</span>
            </h2>
            <p className="text-gray-500 mt-3 text-sm sm:text-base max-w-2xl mx-auto">
              We provide end-to-end support across every stage of the organic
              farming journey — from farm management and certification through
              to product development and market access.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {services.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-green-200 text-green-800 font-semibold text-sm hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-all duration-300 shadow-sm"
              >
                {label}
                <span className="text-xs">→</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-16 px-6 sm:px-12 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-[11px] font-bold tracking-[0.22em] uppercase text-green-800 border border-green-700 rounded-full px-4 py-1.5 mb-4">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              WHAT WE <span className="text-green-600">STAND FOR</span>
            </h2>
          </div>
          <motion.div
            variants={cardContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {values.map(({ title, text }) => (
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

      {/* CTA */}
      <section className="py-12 px-6 sm:px-12 md:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-2xl bg-gradient-to-br from-green-900 via-green-800 to-emerald-700 p-10 sm:p-14 flex flex-col sm:flex-row items-start sm:items-center gap-8">
            <div className="flex-1">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                JOIN THE ORGANIC MOVEMENT
              </h2>
              <p className="text-green-100 text-base sm:text-lg leading-relaxed max-w-xl">
                Whether you're a farmer, a business, or a consumer who cares
                about sustainable food systems — we'd love to connect with you.
              </p>
            </div>
            <div className="shrink-0">
              <ContactButton />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

