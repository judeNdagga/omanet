"use client";
import Image from "next/image";
import training1 from "/public/images/services/Training_3309.jpg";
import training2 from "/public/images/services/Training_3313.jpg";
import training3 from "/public/images/services/Training_171.jpg";
import networking1 from "/public/images/homepage/networking1.jpg";
import chilli3 from "/public/images/services/chilli3.jpg";
import ContactExpertsButton from "../components/ContactExpertsButton";
import { motion, useReducedMotion } from "framer-motion";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

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

const services = [
  {
    href: "/Services/Consultancy",
    image: training1,
    label: "CONSULTANCY",
    description:
      "Expert guidance in sustainable agriculture, helping you navigate organic farming practices and certification.",
    colSpan: "sm:col-span-2",
  },
  {
    href: "/Services/Training",
    image: training3,
    label: "TRAINING & EXTENSION",
    description:
      "Hands-on training programmes that keep you current with the latest organic farming techniques and market trends.",
    colSpan: "sm:col-span-2",
  },
  {
    href: "/Services/Communication",
    image: training2,
    label: "COMMUNICATION",
    description:
      "Strategic communication connecting farmers with markets, communities, and stakeholders.",
    colSpan: "sm:col-span-2",
  },
  {
    href: "/Services/ProductDevelopment",
    image: chilli3,
    label: "PRODUCT DEVELOPMENT",
    description:
      "Maximise your farm's productivity with crop planning, rotation, and organic product development support.",
    colSpan: "sm:col-span-3",
  },
  {
    href: "/Services/Entrepreneurship",
    image: networking1,
    label: "MARKETING & ENTREPRENEURSHIP",
    description:
      "Strategic planning and effective distribution channels to bring your organic products to market successfully.",
    colSpan: "sm:col-span-3",
  },
];

export default function Services() {
  const shouldReduce = useReducedMotion();
  const item = shouldReduce ? heroItemReduced : heroItem;

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
          {/* Left */}
          <div className="sm:w-1/2">
            <motion.span
              variants={item}
              className="inline-block text-[11px] font-bold tracking-[0.22em] uppercase text-emerald-300 border border-emerald-500/60 rounded-full px-4 py-1.5 mb-6"
            >
              Our Services
            </motion.span>
            <motion.h1
              variants={item}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.08]"
            >
              Serving many ventures,
              <br />
              excelling in{" "}
              <span className="text-emerald-400 italic">yours.</span>
            </motion.h1>
          </div>

          {/* Right */}
          <div className="sm:w-1/2 sm:pt-16">
            <motion.p
              variants={item}
              className="text-base sm:text-lg text-green-100 leading-relaxed mb-4"
            >
              At <span className="font-bold text-white">OMANET</span>, we are
              dedicated to providing the highest quality organic guidance while
              promoting sustainable and environmentally friendly farming
              practices.
            </motion.p>
            <motion.p
              variants={item}
              className="text-sm sm:text-base text-green-200/75 leading-relaxed"
            >
              We are committed to soil and water conservation, promoting
              biodiversity, and supporting local food systems — ensuring a
              healthier planet for future generations.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Services grid */}
      <section className="bg-white py-16 px-6 sm:px-12 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-[11px] font-bold tracking-[0.22em] uppercase text-green-800 border border-green-700 rounded-full px-4 py-1.5 mb-4">
              What We Offer
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              EXPLORE THE <span className="text-green-600">SERVICES</span> WE
              PROVIDE
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-6 gap-4">
            {services.map(({ href, image, label, description, colSpan }) => (
              <a
                key={label}
                href={href}
                className={`relative block h-56 sm:h-72 rounded-xl overflow-hidden shadow-lg group transform-gpu hover:scale-[1.02] transition-transform duration-300 ${colSpan}`}
              >
                <Image
                  src={image}
                  alt={label}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover brightness-75 group-hover:brightness-50 transition-[filter] duration-300"
                />
                {/* bottom gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                {/* label + reveal description */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-white font-bold text-sm sm:text-base tracking-wide mb-1 group-hover:text-emerald-300 transition-colors duration-300">
                    {label}
                  </p>
                  <p className="text-white/80 text-xs leading-relaxed max-h-0 overflow-hidden group-hover:max-h-16 transition-all duration-500 ease-out">
                    {description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="py-12 px-6 sm:px-12 md:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-2xl bg-gradient-to-br from-green-900 via-green-800 to-emerald-700 p-10 sm:p-14 flex flex-col sm:flex-row items-start sm:items-center gap-8">
            <div className="flex-1">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                NEED SOMETHING ELSE?
              </h2>
              <p className="text-green-100 text-base sm:text-lg leading-relaxed max-w-xl">
                Our commitment to your needs doesn't end with a single instance.
                We provide customised services to help you along your organic
                journey — easy for you, easy for us.
              </p>
            </div>
            <div className="shrink-0">
              <ContactExpertsButton />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 px-6 sm:px-12 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
              CUSTOMER SATISFACTION{" "}
              <span className="text-green-600">KNOWS NO BORDERS</span>
            </h2>
            <p className="text-gray-500 mt-3 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Our customers come from different industries but share a unanimous
              appreciation of our work together.
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-green-50 rounded-2xl border border-green-100 p-8 sm:p-12 shadow-sm">
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-8">
              <FaQuoteLeft className="inline-block text-green-400 mr-2 mb-1" />
              To access product knowledge and serve our customers more
              efficiently, we decided to build an intelligent knowledge base.{" "}
              <span className="font-bold text-green-700 italic">
                OMANET
              </span>{" "}
              selected the right technology and created a very user-friendly
              application. Their technical expertise, professional
              communication, and excellent project management made it a{" "}
              <span className="font-semibold text-green-700 underline italic">
                great pleasure to collaborate.
              </span>
              <FaQuoteRight className="inline-block text-green-400 ml-2 mb-1" />
            </p>
            <div className="border-t border-green-200 pt-6 text-right">
              <p className="text-gray-900 text-xl font-semibold">
                — Jane Nalunga
              </p>
              <p className="text-base font-light text-green-600 mt-1">
                Team Lead
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

