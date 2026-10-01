import { BsArrowRight } from "react-icons/bs";

export default function ContactExpertsButton() {
  return (
    <a
      href="/Contact"
      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white font-semibold text-sm tracking-wide shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
    >
      Contact Our Experts
      <BsArrowRight className="text-base" />
    </a>
  );
}
