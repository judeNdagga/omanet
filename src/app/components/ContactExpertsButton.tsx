import { BsArrowRight } from "react-icons/bs";

export default function ContactExpertsButton() {
  return (
    <div>
      <a
        href="/Contact"
        className="btn sm:btn-wide w-[15em] mt-6 sm:mt-28 bg-slate-900 hover:bg-gray-100 border-none hover:text-black text-white flex sm:gap-5"
      >
        <h1 className="text-md">Contact Our Experts</h1>
        <BsArrowRight className="hidden sm:block text-2xl animate-pulse" />
      </a>
    </div>
  );
}
