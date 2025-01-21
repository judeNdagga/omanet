import Image from "next/image";
import training1 from "/public/images/services/Training_3309.jpg";
import training2 from "/public/images/services/Training_3313.jpg";
import training3 from "/public/images/services/Training_171.jpg";
import networking1 from "/public/images/homepage/networking1.jpg";
import chilli3 from "/public/images/services/chilli3.jpg";
import ContactExpertsButton from "../components/ContactExpertsButton";
export default function Entrepreneurship() {
  const FadeInLeftAnimation = {
    initial: {
      x: -200,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.2,
        type: "easeInOut",
      },
    },
  };
  const FadeInLeftAnimationSlower = {
    initial: {
      x: -200,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.4,
        type: "easeInOut",
      },
    },
  };
  const FadeInRightAnimation = {
    initial: {
      x: 200,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.2,
        type: "easeInOut",
      },
    },
  };
  return (
    <div className="overflow-hidden">
      <div
        className="h-auto sm:h-[50em] sm:flex sm:pt-[11em] p-20  brightness-90
        bg-gradient-to-r from-green-900 from-3%
    via-green-400 
     to-green-600 to-75%"
        // style={{
        //   backgroundImage: `url(https://images.unsplash.com/photo-1535090467336-9501f96eef89?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
        // }}
      >
        <div className="sm:w-[48%]">
          <h1 className="text-3xl md:text-5xl xl:text-7xl text-white  pt-10 md:pt-0">
            Serving many industries, excelling in{" "}
            <a className="text-green-700 font-bold">yours</a>
          </h1>
        </div>
        <div className="divider md:divider-horizontal divider-success h-10"></div>
        <div className="sm:w-[48%] sm:text-xl text-white">
          <p>
            At <a className="text-green-700 font-bold">OMANET</a>, we are
            dedicated to providing you with the highest quality organic products
            while promoting sustainable and environmentally friendly farming
            practices.
            <p className="hidden sm:block md:pt-8 xl:pt-20">
              We are committed to soil and water conservation, promoting
              biodiversity, and supporting local food systems. Our practices are
              designed to preserve and enhance the environment, ensuring a
              healthier planet for future generations. We actively engage with
              our community, supporting food banks and participating in local
              events.
            </p>
          </p>
        </div>
      </div>

      {/* 2nd level */}
      <div className="bg-white">
        <h1 className="text-black text-4xl xl:text-5xl font-semibold text-center sm:pl-[5em] sm:pr-[5em] sm:pt-10">
          EXPLORE THE <a className="text-green-400 font-bold">SERVICES</a> WE
          PROVIDE
        </h1>
        <div className="sm:flex sm:gap-10 p-8 text-white">
          {/* first card */}
          <a
            className="card hover:text-green-300 transition duration-500 hover:scale-110 p-0 mt-4 sm:mt-0 xl:w-[45em] md:h-[20em] xl:h-[25em] shadow-xl"
            href="/Services/Consultancy"
          >
            <Image
              src={training1}
              className="w-full h-full brightness-75 hover:brightness-50 transition duration-500"
              width={1920}
              height={1080}
              alt="image"
            />
            <h1 className="absolute xl:bottom-[24%] text-2xl font-semibold xl:ml-10">
              CONSULTANCY
            </h1>
            <p className="hidden xl:block absolute bottom-[3%] text-sm font-extralight p-4">
              We are passionate about sharing our expertise in sustainable
              agriculture with fellow farmers and businesses.
            </p>
          </a>

          {/* second card */}

          <a
            className="card hover:text-green-300 transition duration-500 hover:scale-110 p-0 mt-4 sm:mt-0 xl:w-[45em] md:h-[20em] xl:h-[25em] shadow-xl"
            href="/Services/Training"
          >
            <Image
              src={training3}
              className="w-full h-full brightness-75 hover:brightness-50 transition duration-500"
              width={1920}
              height={1080}
              alt="image"
            />
            <h1 className="absolute xl:bottom-[24%] text-2xl font-semibold xl:ml-10">
              TRAINING
            </h1>
            <p className="hidden xl:block absolute bottom-[3%] text-sm font-extralight p-4">
              We provide ongoing support and training to help you stay informed
              about the latest organic farming techniques and market trends.
            </p>
          </a>
          {/* third card */}

          <a
            className="card hover:text-green-300 transition duration-500 hover:scale-110 p-0 mt-4 sm:mt-0 xl:w-[45em] md:h-[20em] xl:h-[25em] shadow-xl"
            href="/Services/Communication"
          >
            <Image
              src={training2}
              className="w-full h-full brightness-75 hover:brightness-50 transition duration-500"
              width={1920}
              height={1080}
              alt="image"
            />
            <h1 className="absolute xl:bottom-[24%] text-2xl font-semibold xl:ml-10">
              COMMUNICATION
            </h1>
            <p className="hidden xl:block absolute bottom-[3%] text-sm font-extralight p-4">
              We believe in the power of communication and environmental
              stewardship.
            </p>
          </a>
        </div>

        {/* after first cards */}

        <div className="sm:flex gap-10 p-8 text-white">
          {/* first card */}
          <a
            className="card hover:text-green-300 transition duration-500 hover:scale-110 p-0 mt-4 sm:mt-0 xl:w-[45em] md:h-[20em] xl:h-[25em] shadow-xl"
            href="/Services/ProductDevelopment"
          >
            <Image
              src={chilli3}
              className="w-full h-full brightness-75 hover:brightness-50 transition duration-500"
              width={1920}
              height={1080}
              alt="image"
            />
            <h1 className="absolute xl:bottom-[24%] text-2xl font-semibold xl:ml-10">
              PRODUCT DEVELOPMENT
            </h1>
            <p className="hidden xl:block absolute bottom-[3%] text-sm font-extralight p-4">
              Maximize your farm’s productivity and sustainability with our crop
              planning and rotation services.
            </p>
          </a>

          {/* second card */}

          <a
            className="card hover:text-green-300 transition duration-500 hover:scale-110 p-0 mt-4 sm:mt-0 xl:w-[45em] md:h-[20em] xl:h-[25em] shadow-xl"
            href="/Services/Entrepreneurship"
          >
            <Image
              src={networking1}
              className="w-full h-full brightness-75 hover:brightness-50 transition duration-500"
              width={1920}
              height={1080}
              alt="image"
            />
            <h1 className="absolute xl:bottom-[24%] text-2xl font-semibold xl:ml-10">
              MARKETING AND ENTREPRENEURSHIP
            </h1>
            <p className="hidden xl:block absolute bottom-[3%] text-sm font-extralight p-4">
              Successfully bringing organic products to market requires
              strategic planning and effective distribution channels.
            </p>
          </a>
          {/* third card */}
        </div>

        {/* after second cards */}

        <div className="sm:p-20 p-10">
          <div
            className="card card-body bg-gradient-to-r from-green-900 from-3%
            via-green-400 
             to-green-600 to-75% text-white"
          >
            <h1 className="text-4xl sm:text-6xl font-bold">
              NEED SOMETHING ELSE?
            </h1>
            <p className="sm:pt-16 sm:pr-20 text-xl font-extralight">
              Our commitment to your needs doesn’t end with a single instance.
              We provide customized services and products to help you along your
              organic journey. Give us a call if you need anything customized to
              your special needs. Easy for you, easy for us.
            </p>
            <ContactExpertsButton />
          </div>
        </div>

        {/* after need something */}

        <div className="md:pt-20 xl:pt-40 sm:pb-40 sm:flex xl:pl-20 pr-20 h-[35em]">
          <h1 className="text-black font-bold text-3xl md:text-5xl xl:text-6xl pl-4 sm:pl-10 sm:pr-1">
            CUSTOMER SATISFACTION KNOWS NO BORDERS
          </h1>
          <div className="divider md:divider-horizontal divider-success"></div>
          <h1 className="text-right text-xl sm:text-2xl font-light text-black ml-20 pr-10">
            Our customers come from different industries but share a unanimous
            appreciation of our work together, reflected in their progress
          </h1>
        </div>
        <div className="sm:pr-40 sm:pl-40">
          <div className="card card-body shadow-xl">
            <p className="text-black text-2xl sm:text-4xl font-extralight">
              "To access product knowledge and serve our customers more
              efficiently, we decided to build an intelligent knowledge base.
              OMANET selected the right technology for our search algorithm and
              created a very user-friendly front-end application. Their
              technical expertise, professional communication, and excellent
              project management made it a great pleasure to collaborate."
            </p>
          </div>
          <p className="text-center sm:text-right text-black pt-10 text-3xl">
            - Jane Nalunga
            <p className="text-2xl font-light text-green-600">Team Lead</p>
          </p>
        </div>

        <div className="text-center h-[20em]"></div>
      </div>
    </div>
  );
}
