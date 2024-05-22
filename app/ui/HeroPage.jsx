/* eslint-disable react/jsx-key */
import Image from "next/image";
import React from "react";
import Logo from "@/app/assets/photo4.jpeg";
import Logo1 from "@/app/assets/photo2.jpeg";
import Logo2 from "@/app/assets/photo3.jpeg";
import Logo3 from "@/app/assets/photo5.jpeg";
import Carousal from "./Carousal";

export const HeroPage = () => {
  // eslint-disable-next-line react/jsx-key
  const slides = [
    <Image
      src={Logo}
      alt="pro"
      width={window?.innerWidth}
      height={40}
      className="shrink-0 object-cover"
    />,
    <Image
      src={Logo2}
      alt="pro"
      width={window?.innerWidth}
      height={40}
      className="shrink-0 object-cover aspect-auto"
    />,
    <Image
      src={Logo1}
      alt="pro"
      width={window?.innerWidth}
      height={40}
      className="shrink-0 object-cover"
    />,
    <Image
      src={Logo3}
      alt="pro"
      width={window?.innerWidth}
      height={40}
      className="shrink-0 object-cover"
    />,
  ];

  return (
    <section className="flex flex-col space-y-2 md:flex items-center">
      <section className="flex flex-col max-w-lg md:flex-row gap-5 items-center justify-between bg-gray-100 py-12">
        <h2 className="text-4xl font-bold text-center md:text-left min-w-min text-gray-800 whitespace-pre-wrap">
          Welcome to mymart where shopping can only be fun
        </h2>
        <div className="flex flex-col mx-auto font-bold text-center max-w-xl space-y-8 text-gray-800">
          <h4>Get a Store Today</h4>
          <button className="p-4 bg-blue-600 rounded whitespace-nowrap text-cyan-50">
            OPEN A STORE
          </button>
        </div>
      </section>
      <section className="grow space-y-6 flex flex-col  bg-gray-100">
        <h3>Trending Produts</h3>
        <div className="w-full">
          <Carousal autoslides="true" slides={slides} />
        </div>
        <section className="grow flex-col overflow-scroll absolute space-y-2 top-3/4 img_p pl-2 pr-2 text-gray-800 w-full border-b-8 border-gray-300">
          <h3>Discount Sales</h3>
          <div className="flex space-x-1 items-center gap-2">
            <div className="flex flex-col space-y-0 w-full rounded-md min-w-40 max-h-52">
              <div className="bg-white text-left p-4">
                <h3>Amazing Gifts</h3>
              </div>

              <Image
                src={Logo}
                alt="pro"
                width={150}
                height={100}
                className="shrink-0 object-cover w-full h-40"
              />
            </div>
            <div className="flex flex-col space-y-0 w-full rounded-md min-w-40 max-h-52">
              <div className="bg-white text-left p-4">
                <h3>Amazing Gifts</h3>
              </div>
              <div>
                <Image
                  src={Logo1}
                  alt="pro"
                  width={150}
                  height={100}
                  className="shrink-0 w-full h-40"
                />
              </div>
            </div>
            <div className="flex flex-col space-y-0 w-full min-w-40 max-h-52">
              <div className="bg-white text-left p-4">
                <h3>Amazing Gifts</h3>
              </div>
              <div>
                <Image
                  src={Logo3}
                  alt="pro"
                  width={150}
                  height={100}
                  className="shrink-0 w-full h-40"
                />
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className="grow space-y-2 mt-60 pt-44 text-gray-800  bg-gray-100">
        <h3 className="font-bold">Discount Sales</h3>
        <div className="overflow-x-scroll w-full">
          <div className="flex items-center gap-3 overflow-scroll w-full">
            <Image
              src={Logo2}
              alt="pro"
              width={200}
              height={200}
              className="shrink-0"
            />
            <Image
              src={Logo}
              alt="pro"
              width={200}
              height={200}
              className="shrink-0"
            />
            <Image
              src={Logo2}
              alt="pro"
              width={200}
              height={200}
              className="shrink-0"
            />
            <Image
              src={Logo2}
              alt="pro"
              width={200}
              height={200}
              className="shrink-0"
            />
            <Image
              src={Logo}
              alt="pro"
              width={200}
              height={200}
              className="shrink-0"
            />
            <Image
              src={Logo}
              alt="pro"
              width={200}
              height={200}
              className="shrink-0"
            />
          </div>
        </div>
      </section>
    </section>
  );
};
