import Image from "next/image";
import image1 from "/public/images/Gallery/20201030_121306.jpg";
import image2 from "/public/images/Gallery/20201030_121326.jpg";
import image3 from "/public/images/Gallery/20230408_104111.jpg";
import image4 from "/public/images/Gallery/20230408_104118.jpg";
// import image5 from "/public/images/Gallery/DSC03099.jpg";
// import image6 from "/public/images/Gallery/DSC03103.jpg";
// import image7 from "/public/images/Gallery/DSC03105.jpg";
// import image8 from "/public/images/Gallery/DSC03108.jpg";
// import image9 from "/public/images/Gallery/DSC03114.jpg";
// import image10 from "/public/images/Gallery/DSC03131.jpg";

import { CardBody, CardContainer, CardItem } from "@/app/components/ui/3d-card";
export default function Gallery() {
  

   
    const elements = [
      {image : image1},
      {image : image2},
      {image : image3},
      {image : image4},
      // {image : image5},
      // {image : image6},
      // {image : image7},
      // {image : image8},
      // {image : image9},
      // {image : image10},
      // {image : image10},
      // {image : image10},
      
      
      
    ];
  
    // Use a for loop to generate elements dynamically
    // for (let i = 0; i < numberOfTimes; i++) {
    //   elements.push(<div key={i} className="h-screen">
    //       <CardContainer className="inter-var w-full">
    //           <CardBody className="w-full">
    //             <CardItem className="w-full pt-4">
    //               <Image
    //                 src={}
    //                 height="1000"
    //                 width="1000"
    //                 className="h-[30em] w-[98%] object-cover rounded-xl group-hover/card:shadow-xl"
    //                 alt="thumbnail"
    //               />
    //             </CardItem>
    //           </CardBody>
    //         </CardContainer>
    //     </div>);
    
  return (
    <div className="overflow-hidden">
    <div
      className="bg-gradient-to-b from-green-300 from-3%
      via-green-300 
       to-white to-75% text-center flex min-h-screen"
    >
      
      
      <div className="p-10 grid grid-cols-1 md:grid-cols-2
    xl:grid-cols-3 gap-3">
      {elements.map((element, index) => (
        <CardContainer className="inter-var w-full">
        <CardBody className="w-full">
          <CardItem className="w-full pt-4">
            <Image
              src={element.image}
              height="1000"
              width="1000"
              className="h-[30em] w-[98%] object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
        </CardBody>
      </CardContainer>
      ))}
      
    </div>
      
    </div>

    <div
      className="bg-gradient-to-t from-green-300 from-3%
      via-green-300 
       to-white to-75% text-center flex min-h-screen"
    >
      
      
      <div className="p-10 grid grid-cols-1 md:grid-cols-2
    xl:grid-cols-3 gap-3">
      {elements.map((element, index) => (
        <CardContainer className="inter-var w-full">
        <CardBody className="w-full">
          <CardItem className="w-full pt-4">
            <Image
              src={element.image}
              height="1000"
              width="1000"
              className="h-[30em] w-[98%] object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
        </CardBody>
      </CardContainer>
      ))}
      
    </div>
      
    </div>
    </div>
  );
}
