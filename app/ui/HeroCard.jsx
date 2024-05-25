import React from "react";
import Carousel from "./Carousal";
import Image from "next/image";
import Logo from "@/app/assets/photo4.jpeg";
import Logo1 from "@/app/assets/photo6.jpeg";
import Logo2 from "@/app/assets/photo7.jpeg";
import Logo3 from "@/app/assets/photo3.jpeg";

/**
 * @function
 * @returns {jsx}
 */
const HeroCard = () => {
  const slides = [
    { id: 0, name: "phones", pics: Logo },
    { id: 1, name: "fashion", pics: Logo2 },
    { id: 2, name: "cloths", pics: Logo1 },
    { id: 3, name: "shoes", pics: Logo3 },
  ];

  return (
    <div className="bg-gradient-to-t relative from-slate-100 via-slate-500 to-slate-600 flex flex-col w-full h-auto">
      <div>
        <Carousel slides={slides} autoSlide={true} />
      </div>
      <div className="flex gap-2 overflow-x-scroll absolute inset-y-[14rem] h-[10rem] z-40 w-full pl-2 pr-2">
        {[Logo, Logo2, Logo3, Logo1, Logo2, Logo3, Logo].map((img, id) => (
          <div key={id} className=" bg-white flex flex-col space-y-0 rounded-md shadow-2xl">
            <div className="text-left p-4 text-nowrap rounded-r-md rounded-md">
              <h3>Amazing Gifts</h3>
            </div>
           
            <Image
              src={img}
              height={300}
              width={300}
              alt="pics"
              key={id}
              className="shrink-0 h-[6.5rem] rounded-b-md"
            />
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroCard;
