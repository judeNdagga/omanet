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
    title: "Educating Consumers",
    text: "One of the primary goals of communication in organic agriculture is educating consumers about the benefits of organic products and farming practices — building informed, loyal customer relationships.",
  },
  {
    title: "Marketing & Branding",
    text: "Designing informative and attractive packaging that clearly communicates organic certification and the product's unique benefits, combined with strategic branding that resonates with health-conscious consumers.",
  },
  {
    title: "Building Community",
    text: "Communication builds a sense of community among organic farmers, consumers, and stakeholders — sharing knowledge, resources, and research to inspire and inform the entire organic ecosystem.",
  },
];

export default function Communication() {
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
              Communication
            </motion.h1>
          </div>
          <div className="sm:w-1/2 sm:pt-16">
            <motion.p variants={heroIt} className="text-base sm:text-lg text-green-100 leading-relaxed mb-4">
              Effective communication in organic agriculture is essential for
              promoting sustainable practices, educating consumers, fostering
              community engagement, and building strong relationships within
              the industry.
            </motion.p>
            <motion.p variants={heroIt} className="text-sm sm:text-base text-green-200/75 leading-relaxed">
              Clear, transparent, and strategic communication helps organic
              farmers, agribusinesses, and stakeholders convey their values,
              share knowledge, and advocate for the benefits of organic
              farming.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Feature cards */}
      <section className="bg-white py-16 px-6 sm:px-12 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-[11px] font-bold tracking-[0.22em] uppercase text-green-800 border border-green-700 rounded-full px-4 py-1.5 mb-4">
              Focus Areas
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              IMPROVE YOUR{" "}
              <span className="text-green-600">COMMUNICATION</span>
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
                IMPROVE YOUR REACH AND IMPACT
              </h2>
              <p className="text-green-100 text-base sm:text-lg leading-relaxed max-w-xl">
                Let us help you craft a communication strategy that connects
                you with the right farmers, consumers, and markets.
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
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Communication facilitates the sharing of knowledge and best
              practices within the organic agriculture community through
              educational resources, guides, and online courses. We encourage
              peer-to-peer learning, mentorship, and networking opportunities
              for farmers to grow together.
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
                src="https://images.unsplash.com/photo-1624207615763-df683de05417?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Communication and community"
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
