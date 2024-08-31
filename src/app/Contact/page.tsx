"use client";
import { motion } from "framer-motion";
export default function Contact() {
  const FadeInLeftAnimation = {
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
        className="h-[50em] p-10 sm:p-20  brightness-90
        bg-gradient-to-b from-green-300 from-3%
        via-green-300 
         to-white to-75%"
      >
        <div className="sm:w-[70%] h-[28em] sm:ml-[15em] bg-green-300 text-center mt-20">
          <motion.h1
            className="text-center text-3xl sm:text-7xl font-bold text-black"
            variants={FadeInLeftAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: false,
            }}
          >
            ANY
            <a className="text-green-600"> INQUIRIES</a>?
          </motion.h1>
          <motion.p
            className="mt-8 mb-8 text-black text-lg"
            variants={FadeInRightAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: false,
            }}
          >
            Send us an email or a text by clicking the links below and letting us know how we can help you. We will
            certainly receive your message. You can also call our offices on{" "}
            <a className="font-bold text-green-600 underline">0772495627</a>.
          </motion.p>

          <div className="text-center">
            <div className="flex gap-10 sm:ml-[35%] mb-10">
              <a href="https://wa.me/+256772495627" className="text-5xl font-mono text-white btn border-none bg-inherit hover:bg-green-500 hover:scale-110 transition duration-500">
                WhatsApp
              </a>

              {/* picture */}

              <svg
                width="60"
                height="60"
                viewBox="0 0 48 48"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <defs></defs>
                <g
                  id="Icons"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g
                    id="Color-"
                    transform="translate(-700.000000, -360.000000)"
                    fill="#67C15E"
                  >
                    <path
                      d="M723.993033,360 C710.762252,360 700,370.765287 700,383.999801 C700,389.248451 701.692661,394.116025 704.570026,398.066947 L701.579605,406.983798 L710.804449,404.035539 C714.598605,406.546975 719.126434,408 724.006967,408 C737.237748,408 748,397.234315 748,384.000199 C748,370.765685 737.237748,360.000398 724.006967,360.000398 L723.993033,360.000398 L723.993033,360 Z M717.29285,372.190836 C716.827488,371.07628 716.474784,371.034071 715.769774,371.005401 C715.529728,370.991464 715.262214,370.977527 714.96564,370.977527 C714.04845,370.977527 713.089462,371.245514 712.511043,371.838033 C711.806033,372.557577 710.056843,374.23638 710.056843,377.679202 C710.056843,381.122023 712.567571,384.451756 712.905944,384.917648 C713.258648,385.382743 717.800808,392.55031 724.853297,395.471492 C730.368379,397.757149 732.00491,397.545307 733.260074,397.27732 C735.093658,396.882308 737.393002,395.527239 737.971421,393.891043 C738.54984,392.25405 738.54984,390.857171 738.380255,390.560912 C738.211068,390.264652 737.745308,390.095816 737.040298,389.742615 C736.335288,389.389811 732.90737,387.696673 732.25849,387.470894 C731.623543,387.231179 731.017259,387.315995 730.537963,387.99333 C729.860819,388.938653 729.198006,389.89831 728.661785,390.476494 C728.238619,390.928051 727.547144,390.984595 726.969123,390.744481 C726.193254,390.420348 724.021298,389.657798 721.340985,387.273388 C719.267356,385.42535 717.856938,383.125756 717.448104,382.434484 C717.038871,381.729275 717.405907,381.319529 717.729948,380.938852 C718.082653,380.501232 718.421026,380.191036 718.77373,379.781688 C719.126434,379.372738 719.323884,379.160897 719.549599,378.681068 C719.789645,378.215575 719.62006,377.735746 719.450874,377.382942 C719.281687,377.030139 717.871269,373.587317 717.29285,372.190836 Z"
                      id="Whatsapp"
                    ></path>
                  </g>
                </g>
              </svg>

              {/* after picture */}
            </div>

            <div className="flex gap-10 text-center sm:ml-[35%] mb-10">
              <a href="mailto:ndaggajude88@gmail.com" className="text-5xl font-mono text-white btn border-none bg-inherit hover:bg-green-500 hover:scale-110 transition duration-500">
                Email
              </a>

              {/* picture */}
              <svg
                width="60"
                height="60"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 11.9556C2 8.47078 2 6.7284 2.67818 5.39739C3.27473 4.22661 4.22661 3.27473 5.39739 2.67818C6.7284 2 8.47078 2 11.9556 2H20.0444C23.5292 2 25.2716 2 26.6026 2.67818C27.7734 3.27473 28.7253 4.22661 29.3218 5.39739C30 6.7284 30 8.47078 30 11.9556V20.0444C30 23.5292 30 25.2716 29.3218 26.6026C28.7253 27.7734 27.7734 28.7253 26.6026 29.3218C25.2716 30 23.5292 30 20.0444 30H11.9556C8.47078 30 6.7284 30 5.39739 29.3218C4.22661 28.7253 3.27473 27.7734 2.67818 26.6026C2 25.2716 2 23.5292 2 20.0444V11.9556Z"
                  fill="white"
                />
                <path
                  d="M22.0515 8.52295L16.0644 13.1954L9.94043 8.52295V8.52421L9.94783 8.53053V15.0732L15.9954 19.8466L22.0515 15.2575V8.52295Z"
                  fill="#EA4335"
                />
                <path
                  d="M23.6231 7.38639L22.0508 8.52292V15.2575L26.9983 11.459V9.17074C26.9983 9.17074 26.3978 5.90258 23.6231 7.38639Z"
                  fill="#FBBC05"
                />
                <path
                  d="M22.0508 15.2575V23.9924H25.8428C25.8428 23.9924 26.9219 23.8813 26.9995 22.6513V11.459L22.0508 15.2575Z"
                  fill="#34A853"
                />
                <path
                  d="M9.94811 24.0001V15.0732L9.94043 15.0669L9.94811 24.0001Z"
                  fill="#C5221F"
                />
                <path
                  d="M9.94014 8.52404L8.37646 7.39382C5.60179 5.91001 5 9.17692 5 9.17692V11.4651L9.94014 15.0667V8.52404Z"
                  fill="#C5221F"
                />
                <path
                  d="M9.94043 8.52441V15.0671L9.94811 15.0734V8.53073L9.94043 8.52441Z"
                  fill="#C5221F"
                />
                <path
                  d="M5 11.4668V22.6591C5.07646 23.8904 6.15673 24.0003 6.15673 24.0003H9.94877L9.94014 15.0671L5 11.4668Z"
                  fill="#4285F4"
                />
              </svg>
              {/* after picture */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
