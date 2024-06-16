import Image from "next/image";
import training1 from "../../../public/images/services/Training_3309.jpg";
import training2 from "../../../public/images/services/Training_3313.jpg";
import training3 from "../../../public/images/services/Training_171.jpg";
import networking1 from "../../../public/images/homepage/networking1.jpg";
import chilli3 from "../../../public/images/services/chilli3.jpg";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
export default function Entrepreneurship() {
  return (
    <div className="overflow-hidden">
      <div
        className="h-[50em] sm:flex sm:pt-[11em] p-20  brightness-90
        bg-gradient-to-r from-green-900 from-3%
    via-lime-400 
     to-green-600 to-75%"
        // style={{
        //   backgroundImage: `url(https://images.unsplash.com/photo-1535090467336-9501f96eef89?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
        // }}
      >
        <div className="sm:w-[48%]">
          <h1 className="text-3xl sm:text-7xl font-mono">
            Serving many industries, excelling in yours
          </h1>
        </div>
        <div className="divider lg:divider-horizontal divider-success h-10"></div>
        <div className="sm:w-[48%] sm:text-xl">
          <p>
            Entrepreneurship in agriculture isn't just about sowing seeds; it's
            about cultivating innovation, harvesting opportunity, and reaping
            sustainable growth. Embrace the land, nurture creativity, and watch
            your dreams grow into fields of abundance.
            <p className="sm:pt-20">
              From identifying priorities with an AI & Data Strategy to scaling
              ML Operations, our team of experts works closely with businesses
              to unlock the full potential of their data, providing bespoke
              solutions that drive growth, efficiency, and innovation.
            </p>
          </p>
        </div>
      </div>

      {/* 2nd level */}
      <div className="bg-white">
        <h1 className="text-black text-5xl font-semibold font-mono text-center sm:pl-[5em] sm:pr-[5em] sm:pt-10">
          EXPLORE THE SERVICES WE PROVIDE
        </h1>
        <div className="sm:flex sm:gap-10 p-8">
          {/* first card */}
          <div className="card card-body p-0 sm:w-[15em] sm:h-[25em] shadow-xl">
            <Image
              src={training1}
              className="w-full h-full rounded-xl brightness-75 hover:brightness-50"
              width={1920}
              height={1080}
              alt="image"
            />
            <h1 className="absolute sm:bottom-[30%] text-3xl font-bold font-mono sm:ml-10">
              CONSULTANCY
            </h1>
            <p className="absolute bottom-[3%] text-sm p-4">
              To access product knowledge and serve our customers more
              efficiently, we decided to build an intelligent knowledge base.
              OMANET selected the right technology for our search algorithm and
              created a very user-friendly front-end application.
            </p>
          </div>

          {/* second card */}

          <div className="card card-body p-0 sm:w-[15em] sm:h-[25em] shadow-xl">
            <Image
              src={training3}
              className="w-full h-full rounded-xl brightness-75 hover:brightness-50"
              width={1920}
              height={1080}
              alt="image"
            />
            <h1 className="absolute sm:bottom-[30%] text-3xl font-bold font-mono sm:ml-10">
              TRAINING
            </h1>
            <p className="absolute bottom-[3%] text-sm p-4">
              To access product knowledge and serve our customers more
              efficiently, we decided to build an intelligent knowledge base.
              OMANET selected the right technology for our search algorithm and
              created a very user-friendly front-end application.
            </p>
          </div>
          {/* third card */}

          <div className="card card-body p-0 sm:w-[15em] sm:h-[25em] shadow-xl">
            <Image
              src={training2}
              className="w-full h-full rounded-xl brightness-75 hover:brightness-50"
              width={1920}
              height={1080}
              alt="image"
            />
            <h1 className="absolute sm:bottom-[30%] text-3xl font-bold font-mono sm:ml-10">
              COMMUNICATION
            </h1>
            <p className="absolute bottom-[3%] text-sm p-4">
              To access product knowledge and serve our customers more
              efficiently, we decided to build an intelligent knowledge base.
              OMANET selected the right technology for our search algorithm and
              created a very user-friendly front-end application.
            </p>
          </div>
        </div>

        {/* after first cards */}

        <div className="sm:flex gap-10 p-8">
          {/* first card */}
          <div className="card card-body p-0 sm:w-[15em] sm:h-[25em] shadow-xl">
            <Image
              src={chilli3}
              className="w-full h-full rounded-xl brightness-75 hover:brightness-50"
              width={1920}
              height={1080}
              alt="image"
            />
            <h1 className="absolute sm:bottom-[30%] text-3xl font-bold font-mono sm:ml-10">
              PRODUCT DEVELOPMENT
            </h1>
            <p className="absolute bottom-[3%] text-sm p-4">
              To access product knowledge and serve our customers more
              efficiently, we decided to build an intelligent knowledge base.
              OMANET selected the right technology for our search algorithm and
              created a very user-friendly front-end application.
            </p>
          </div>

          {/* second card */}

          <div className="card card-body p-0 sm:w-[15em] sm:h-[25em] shadow-xl">
            <Image
              src={networking1}
              className="w-full h-full rounded-xl brightness-75 hover:brightness-50"
              width={1920}
              height={1080}
              alt="image"
            />
            <h1 className="absolute sm:bottom-[30%] text-3xl font-bold font-mono sm:ml-10">
              MARKETING AND ENTREPRENEURSHIP
            </h1>
            <p className="absolute bottom-[3%] text-sm p-4">
              To access product knowledge and serve our customers more
              efficiently, we decided to build an intelligent knowledge base.
              OMANET selected the right technology for our search algorithm and
              created a very user-friendly front-end application.
            </p>
          </div>
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
            <div className="btn btn-wide mt-28 bg-slate-900 hover:bg-gray-100 border-none hover:text-black text-white">
              <h1 className="text-xl flex gap-10">
                Let's Talk
                <BsArrowRight className="text-3xl animate-pulse" />
              </h1>
            </div>
          </div>
        </div>

        {/* after need something */}

        <div className="sm:pt-40 sm:pb-40 sm:flex sm:pl-20 pr-20 h-[35em]">
          <h1 className="text-black font-bold font-mono text-5xl sm:text-6xl pl-4 sm:pl-10 sm:pr-1">
            CUSTOMER SATISFACTION KNOWS NO BORDERS
          </h1>
          <div className="divider lg:divider-horizontal divider-success"></div>
          <h1 className="text-right text-2xl font-light text-black ml-20 pr-10">
            Our customers come from different industries but share a unanimous
            appreciation of our work together, reflected in their progress
          </h1>
        </div>
        <div className="sm:pr-40 sm:pl-40">
         
          <div className="card card-body shadow-xl">
            
            <p className="text-black text-4xl font-extralight">
            "To access product knowledge and serve our
customers more efficiently, we decided to
build an intelligent knowledge base. OMANET
selected the right technology for our search
algorithm and created a very user-friendly
front-end application. Their technical
expertise, professional communication, and
excellent project management made it a great
pleasure to collaborate."
            </p>
          </div>
          <p className="text-center sm:text-right text-black pt-10 text-3xl">- Jane Nalunga
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
