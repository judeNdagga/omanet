import Image from "next/image";
import banana1 from "../../../../public/images/banana/Banana049.jpg";
export default function Team() {
  return (
    <div className="">
      <div
        className="h-[50em] flex pt-[11em] p-20  brightness-90
        bg-gradient-to-r from-green-900 from-3%
    via-lime-400 
     to-green-600 to-75%"
        // style={{
        //   backgroundImage: `url(https://images.unsplash.com/photo-1535090467336-9501f96eef89?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
        // }}
      >
        <div className="w-[38%]">
          <h1 className="text-7xl font-mono pb-16">Meet Our Team</h1>
          <p>
            Team in agriculture isn't just about sowing seeds; it's
            about cultivating innovation, harvesting opportunity, and reaping
            sustainable growth. Embrace the land, nurture creativity, and watch
            your dreams grow into fields of abundance.
            <p className="pt-20">
              From identifying priorities with an AI & Data Strategy to scaling
              ML Operations, our team of experts works closely with businesses
              to unlock the full potential of their data, providing bespoke
              solutions that drive growth, efficiency, and innovation.
            </p>
          </p>
        </div>
        <div className="divider lg:divider-horizontal divider-success h-10"></div>
        <div className=" w-[62%] text-xl">
        <div className="card card-body">
            <Image
              src={banana1}
              width={1920}
              height={1080}
              alt="bg pic"
              className="rounded-md h-[20em] w-full"
            ></Image>
            
          </div>
         
        </div>
      </div>

      {/* 2nd level */}
      <div className="bg-white">
        <h1 className="text-black text-5xl font-semibold font-mono text-center pl-[5em] pr-[5em] pt-10">
          DISCOVER HOW TO RUN AN AGRICULTURAL BUSINESS
        </h1>
        <div className="flex gap-10 p-8">
          {/* first card */}
          <div
            className="card card-body w-[15em] bg-gradient-to-r from-green-900 from-3%
    via-lime-400 
     to-green-600 to-75%"
          >
            <h1 className="text-2xl font-semibold pb-8">
              STRATEGIC DATA INFRASTRUCTURE DESIGN
            </h1>
            <p>
              After evaluating your company's existing data systems,
              requirements, and sources, we'll design a scalable, secure, and
              affordable solution. This includes choosing the proper data
              storage, frameworks, and integration tools for enhanced data
              access and management.
            </p>
          </div>

          {/* second card */}

          <div
            className="card card-body w-[15em] bg-gradient-to-r from-green-900 from-3%
    via-lime-400 
     to-green-600 to-75%"
          >
            <h1 className="text-2xl font-semibold pb-8">
              EFFICIENT DATA PIPELINES & INTEGRATION
            </h1>
            <p>
              Data processing and data quality optimization are essential to
              reliable and timely decision-making. By implementing powerful data
              pipelines and data lakes, you can accommodate increasing data
              volumes and complexity, leading to a more accurate analysis.
            </p>
          </div>
          {/* third card */}

          <div
            className="card card-body w-[15em] bg-gradient-to-r from-green-900 from-3%
    via-lime-400 
     to-green-600 to-75%"
          >
            <h1 className="text-2xl font-semibold pb-8">
              RELIABLE DATA SYSTEM MAINTENANCE
            </h1>
            <p>
              Maintaining and optimizing your data infrastructure lets you focus
              on your core business. Through regular data system monitoring,
              implementation of best practices, and performance optimization,
              your data infrastructure remains reliable and highly accessible.
            </p>
          </div>
        </div>

        {/* after card */}

        <div className="pt-40 pb-40 flex">
          <h1 className="text-left text-black font-bold font-mono text-5xl pl-10 pr-1">
            OUR WORK SPEAKS FOR ITSELF
          </h1>
          <h1 className="text-right text-black text-lg ml-20 pr-10">
            Discover how we helped industry leaders build their data-driven
            future. Get a deeper understanding of our AI & Data solutions and
            the impact they have on businesses like yours.
          </h1>
        </div>
        <div className="flex">
          {/* 1st card */}
          <div className="card card-body">
            <Image
              src={banana1}
              width={1920}
              height={1080}
              alt="bg pic"
              className="rounded-md h-[20em] hover:animate-pulse"
            ></Image>
            <h1 className="text-black hover:text-green-500 font-semibold text-2xl font-mono">
              HOW ROCHE USES ML TO BOOST THEIR DIGITAL PATHOLOGY CAPABILITIES
            </h1>
            <p className="text-black">
              The world's largest privately owned Fragrance and Flavor company
              dsm-firmenich breaks new ground in chemical formula generation,
              creating the world's first AI-augmented flavor & fragrance
              formulation.
            </p>
          </div>
          {/* 2nd card */}

          <div className="card card-body">
            <Image
              src={banana1}
              width={1920}
              height={1080}
              alt="bg pic"
              className="rounded-md h-[20em] hover:animate-pulse"
            ></Image>
            <h1 className="text-black hover:text-green-500 font-semibold text-2xl font-mono">
              HOW ROCHE USES ML TO BOOST THEIR DIGITAL PATHOLOGY CAPABILITIES
            </h1>
            <p className="text-black">
              The world's largest privately owned Fragrance and Flavor company
              dsm-firmenich breaks new ground in chemical formula generation,
              creating the world's first AI-augmented flavor & fragrance
              formulation.
            </p>
          </div>
          {/* 3rd card */}
          <div className="card card-body">
            <Image
              src={banana1}
              width={1920}
              height={1080}
              alt="bg pic"
              className="rounded-md h-[20em] hover:animate-pulse"
            ></Image>
            <h1 className="text-black hover:text-green-500 font-semibold text-2xl font-mono">
              HOW ROCHE USES ML TO BOOST THEIR DIGITAL PATHOLOGY CAPABILITIES
            </h1>
            <p className="text-black">
              The world's largest privately owned Fragrance and Flavor company
              dsm-firmenich breaks new ground in chemical formula generation,
              creating the world's first AI-augmented flavor & fragrance
              formulation.
            </p>
          </div>
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
