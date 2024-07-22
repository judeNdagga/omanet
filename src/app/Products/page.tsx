import Image from "next/image";

import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
export default function Entrepreneurship() {
  return (
    <div className="overflow-hidden">
      {/* 2nd level */}
      <div className="bg-white">
        <h1 className="text-black text-5xl font-semibold font-mono text-center sm:pl-[5em] sm:pr-[5em] sm:pt-40 pt-20">
          EXPLORE OUR PRODUCTS
        </h1>
        <div className="sm:flex gap-10 p-8">
          {/* first card */}
        
          <a className="card card-body p-0 sm:w-[15em] sm:h-[25em] hover:scale-x-105 transition duration-500 pt-2 shadow-xl"
          href="./Products/OrganicWine/BuyWine"
          >           
            <Image
              src="https://images.unsplash.com/photo-1610371800811-a7d2a7b6b3e8?q=80&w=1963&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-full h-full rounded-xl brightness-75 hover:brightness-50"
              width={1920}
              height={1080}
              alt="image"
            />
            <h1 className="absolute bottom-3 sm:bottom-[30%] text-3xl font-bold font-mono ml-10">
              ORGANIC WINE
            </h1>
            <p className="absolute hidden sm:block bottom-[3%] text-sm p-4">
              To access product knowledge and serve our customers more
              efficiently, we decided to build an intelligent knowledge base.
              OMANET selected the right technology for our search algorithm and
              created a very user-friendly front-end application.
            </p>
          </a>

          {/* second card */}

          <a className="card card-body p-0 sm:w-[15em] sm:h-[25em] hover:scale-x-105 transition duration-500 pt-2 shadow-xl"
          href="./Products/Tomatoes/BuyTomatoes"
          >
            <Image
              src="https://images.unsplash.com/photo-1589190051962-0b138f75d3c9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-full h-full rounded-xl brightness-75 hover:brightness-50"
              width={1920}
              height={1080}
              alt="image"
            />
            <h1 className="absolute bottom-3 sm:bottom-[30%] text-3xl font-bold font-mono ml-10">
              CHERRY TOMATOES
            </h1>
            <p className="absolute hidden sm:block bottom-[3%] text-sm p-4">
              To access product knowledge and serve our customers more
              efficiently, we decided to build an intelligent knowledge base.
              OMANET selected the right technology for our search algorithm and
              created a very user-friendly front-end application.
            </p>
          </a>
          {/* third card */}
        
</div>
        {/* after first cards */}
        <div className="sm:flex gap-10 p-8">
       
          {/* first card */}
          <a className="card card-body p-0 sm:w-[15em] sm:h-[25em] hover:scale-x-105 transition duration-500 pt-2 shadow-xl"
          href="./Products/HerbalGardening"
          >
            <Image
              src="https://images.unsplash.com/photo-1523301551780-cd17359a95d0?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-full h-full rounded-xl brightness-75 hover:brightness-50"
              width={1920}
              height={1080}
              alt="image"
            />
            <h1 className="absolute bottom-3 sm:bottom-[30%] text-3xl font-bold font-mono ml-10">
              HERBAL GARDENING
            </h1>
            <p className="absolute hidden sm:block bottom-[3%] text-sm p-4">
              To access product knowledge and serve our customers more
              efficiently, we decided to build an intelligent knowledge base.
              OMANET selected the right technology for our search algorithm and
              created a very user-friendly front-end application.
            </p>
          </a>

          {/* second card */}

          <a className="card card-body p-0 sm:w-[15em] sm:h-[25em] hover:scale-x-105 transition duration-500 pt-2 shadow-xl"
          href="./Products/Eggs"
          >
            <Image
              src="https://images.unsplash.com/photo-1586802990181-a5771596eaea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-full h-full rounded-xl brightness-75 hover:brightness-50"
              width={1920}
              height={1080}
              alt="image"
            />
            <h1 className="absolute bottom-3 sm:bottom-[30%] text-3xl font-bold font-mono ml-10">
              LOCAL EGGS
            </h1>
            <p className="absolute hidden sm:block bottom-[3%] text-sm p-4">
              To access product knowledge and serve our customers more
              efficiently, we decided to build an intelligent knowledge base.
              OMANET selected the right technology for our search algorithm and
              created a very user-friendly front-end application.
            </p>
          </a>
          {/* third card */}
        </div>

        {/* after second cards */}

        <div className="sm:p-20 p-10">
          <div
            className="card card-body bg-gradient-to-r from-green-900 from-3%
    via-lime-400 
     to-green-600 to-75%"
          >
            <h1 className="text-6xl font-bold font-mono">
              NEED SOMETHING ELSE?
            </h1>
            <p className="sm:pt-16 sm:pr-20 text-2xl font-extralight">
              Whether you’re in Healthcare, CPG, Chemicals, or another industry,
              we offer AI & Data solutions and expert guidance so you can claim
              a leading spot in your market.To access product knowledge and
              serve our customers more efficiently, we decided to build an
              intelligent knowledge base.
            </p>
            <div className="btn btn-wide mt-10 sm:mt-28 bg-slate-900 hover:bg-gray-100 border-none hover:text-black text-white">
              <h1 className="text-xl flex gap-10">
                Let's Talk
                <BsArrowRight className="text-3xl animate-pulse" />
              </h1>
            </div>
          </div>
        </div>

        {/* after need something */}

        <div className="sm:pt-40 sm:pb-40 sm:flex sm:pl-20 pr-20 h-[35em]">
          <h1 className="text-left text-black font-bold font-mono text-5xl sm:text-6xl pl-10 pr-1">
            CUSTOMER SATISFACTION KNOWS NO BORDERS
          </h1>
          <div className="divider lg:divider-horizontal divider-success"></div>
          <h1 className="text-right text-2xl font-light text-black ml-20 pr-10">
            Our customers come from different industries but share a unanimous
            appreciation of our work together, reflected in their progress
          </h1>
        </div>
        <div className="sm:pr-40 sm:pl-40 p-6">
          <div className="card card-body shadow-xl">
            <p className="text-black text-3xl sm:text-4xl font-extralight">
              "To access product knowledge and serve our customers more
              efficiently, we decided to build an intelligent knowledge base.
              OMANET selected the right technology for our search algorithm and
              created a very user-friendly front-end application. Their
              technical expertise, professional communication, and excellent
              project management made it a great pleasure to collaborate."
            </p>
          </div>
          <p className="text-right text-black pt-10 text-3xl">
            - Jane Nalunga
            <p className="text-2xl font-light text-green-600">Team Lead</p>
          </p>
        </div>

        <div className="text-center h-[20em]">
          <div
            className="btn bg-gradient-to-r from-green-900 from-3%
    via-lime-400 
     to-green-600 to-75% border-none mt-20 hover:btn-lg"
          >
            <h1 className="text-white">Discover More Case Studies</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
