"use client";
import { motion, useReducedMotion } from "framer-motion";
import { FaWhatsapp, FaPhone } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

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

const channels = [
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    description: "Message us directly for a quick response from our team.",
    action: "Message Us",
    href: "https://wa.me/+256772495627",
    accent: "text-green-500",
  },
  {
    icon: MdOutlineEmail,
    label: "Email",
    description: "Send us a detailed enquiry and we'll respond within 24 hours.",
    action: "Send an Email",
    href: "mailto:info@omanet.org",
    accent: "text-emerald-500",
  },
  {
    icon: FaPhone,
    label: "Phone",
    description: "Call our offices directly to speak with a member of the team.",
    action: "+256 772 495 627",
    href: "tel:+256772495627",
    accent: "text-teal-500",
  },
];

export default function Contact() {
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
              Get in Touch
            </motion.span>
            <motion.h1
              variants={heroIt}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.08]"
            >
              Any Inquiries?
            </motion.h1>
          </div>
          <div className="sm:w-1/2 sm:pt-16">
            <motion.p variants={heroIt} className="text-base sm:text-lg text-green-100 leading-relaxed mb-4">
              We'd love to hear from you. Whether you have a question about
              our services, need expert advice on organic farming, or want
              to explore a partnership — our team is ready to help.
            </motion.p>
            <motion.p variants={heroIt} className="text-sm sm:text-base text-green-200/75 leading-relaxed">
              Reach us through any of the channels below and we'll get
              back to you as soon as possible.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Contact channels */}
      <section className="bg-white py-16 px-6 sm:px-12 md:px-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={cardContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {channels.map(({ icon: Icon, label, description, action, href, accent }) => (
              <motion.a
                key={label}
                variants={cardIt}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex flex-col items-start bg-white rounded-2xl p-7 shadow-sm ring-1 ring-gray-100 hover:ring-emerald-200 hover:shadow-md transition-all duration-300"
              >
                <div className={`text-4xl mb-5 ${accent} group-hover:scale-110 transition-transform duration-300`}>
                  <Icon />
                </div>
                <h2 className="font-bold text-gray-900 text-base uppercase tracking-wide mb-2">
                  {label}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">
                  {description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-600 group-hover:text-emerald-700 transition-colors">
                  {action}
                  <span className="group-hover:translate-x-0.5 transition-transform duration-200">→</span>
                </span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Info strip */}
      <section className="bg-green-50 py-12 px-6 sm:px-12 md:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            Our offices are based in{" "}
            <span className="font-semibold text-gray-700">Kampala, Uganda</span>.
            You can also reach us by phone at{" "}
            <a
              href="tel:+256772495627"
              className="font-semibold text-green-700 hover:text-green-600 transition-colors"
            >
              +256 772 495 627
            </a>
            . We're available Monday to Friday, 8 am – 5 pm EAT.
          </p>
        </div>
      </section>
    </div>
  );
}
