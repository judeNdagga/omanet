import Image from "next/image";
export default function Entepreneurship() {
  return (
    <div className="">
      <div
        className="h-[50em] flex pt-[15em] p-20 bg-gradient-to-r from-green-900 from-3%
        via-green-500 
         to-lime-400 to-75% brightness-90"
        // style={{
        //   backgroundImage: `url(https://images.unsplash.com/photo-1535090467336-9501f96eef89?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
        // }}
      >
        <div className="w-[48%]">
          <h1 className="text-7xl font-mono">Entrepreneurship and Marketing</h1>
        </div>
        <div className="divider lg:divider-horizontal divider-success h-10"></div>
        <div className=" w-[48%] text-xl">
          <p>
            Visium is a Swiss-born AI & Data company helping businesses build
            their data-driven future through artificial intelligence and
            advanced data analytics. With Visium, companies can stay on top of
            the ever-evolving digital landscape, making informed decisions
            backed by world-leading cloud and data technology platforms and
            real-time insights. From identifying priorities with an AI & Data
            Strategy to scaling ML Operations, our team of experts works closely
            with businesses to unlock the full potential of their data,
            providing bespoke solutions that drive growth, efficiency, and
            innovation.
            <p className="pt-20">
              From identifying priorities with an AI & Data Strategy to scaling
              ML Operations, our team of experts works closely with businesses
              to unlock the full potential of their data, providing bespoke
              solutions that drive growth, efficiency, and innovation.
            </p>
          </p>
        </div>
      </div>
    </div>
  );
}
