/* eslint-disable react/jsx-key */
"use client"
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
      width={300}
      loading="lazy"
      height={40}
      className="shrink-0 object-cover w-screen"
      key={0}
    />,
    <Image
      src={Logo2}
      alt="pro"
      height={40}
      width={300}
      loading="lazy"
      className="shrink-0 object-cover w-screen"
      key={1}
    />,
    <Image
      src={Logo1}
      alt="pro"
      height={400}
      width={300}
      loading="lazy"
      className="shrink-0 object-cover w-screen"
      key={2}
    />,
    <Image
      src={Logo3}
      alt="pro"
      height={40}
      width={300}
      loading="lazy"
      className="shrink-0 object-cover w-screen"
      key={3}
    />,
  ];

  return (
    <section className="flex flex-col space-y-2 md:flex items-center">
      <section className="flex flex-col w-full md:flex-row gap-5 items-center justify-between bg-white py-12">
        <h2 className="text-4xl font-bold text-center md:text-left min-w-min text-gray-800 whitespace-pre-wrap">
          Welcome to mymart where shopping can only be fun
        </h2>
        <div className="flex flex-col mx-auto font-bold text-center max-w-xl space-y-8 text-gray-800 w-3/4 p-6">
          <h4>Get a Store Today</h4>
          <button className="p-4 bg-blue-600 rounded whitespace-nowrap text-cyan-50">
            OPEN A STORE
          </button>
        </div>
      </section>
      <section className="grow flex flex-col w-full bg-gray-100">
        {/* <h3 className="text-gray-800">Trending Produts</h3> */}
        <div className="w-full bg-white font-bold flex flex-col justify-start text-gray-900 gap-4 first:pt-4 pl-4 pr-4">
          <h4>New Arrivals</h4>
          <Carousal autoSlide={true} slides={slides} />
        </div>
        </section>
        <section className="flex flex-col overflow-x-scroll bg-white space-y-2 pt-8 pb-8 text-gray-800  w-screen h-fit">
          <h3 className="font-bold pl-4">Trending Now</h3>
          <div className="flex justify-start items-center gap-4 w-full overflow-x-scroll h-fit p-6">
            <div className="flex flex-col space-y-0 rounded-md ring-1 overflow-y-clip w-full  shadow-md hover:outline-4 z-40">
              <div className="bg-white text-left p-4 text-nowrap rounded-r-md rounded-l-md">
                <h3 >Amazing Gifts</h3>
              </div>

              <Image
                src={Logo}
                alt="pro"
                width={200}
                height={200}
                className="shrink-0 object-cover h-40 w-40"
              />
            </div>
            <div className="flex flex-col space-y-0 rounded-md  w-full shadow-md ring-1 overflow-y-clip">
              <div className="bg-white text-left p-4 text-nowrap rounded-r-md rounded-l-md">
                <h3>Amazing Gifts</h3>
              </div>
              <div>
                <Image
                  src={Logo1}
                  alt="pro"
                  width={150}
                  height={100}
                  className="shrink-0  h-40 object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col space-y-0 rounded-md  w-full shadow-md ring-1 overflow-y-clip">
              <div className="bg-white text-left p-4 text-nowrap rounded-r-md rounded-l-md">
                <h3>Amazing Gifts</h3>
              </div>
              <div>
                <Image
                  src={Logo3}
                  alt="pro"
                  width={150}
                  height={100}
                  className="shrink-0 object-cover h-40"
                />
              </div>
            </div>
            <div className="flex flex-col space-y-0 rounded-md  w-full shadow-md ring-1 overflow-y-clip">
              <div className="bg-white text-left p-4 text-nowrap rounded-r-md rounded-l-md">
                <h3>Amazing Gifts</h3>
              </div>
              <div>
                <Image
                  src={Logo2}
                  alt="pro"
                  width={150}
                  height={100}
                  className="shrink-0 object-cover h-40"
                />
              </div>
            </div>
            <div className="flex flex-col space-y-0 rounded-md  w-full shadow-md ring-1 overflow-y-clip">
              <div className="bg-white text-left p-4 text-nowrap rounded-r-md rounded-l-md">
                <h3>Amazing Gifts</h3>
              </div>
              <div>
                <Image
                  src={Logo3}
                  alt="pro"
                  width={150}
                  height={100}
                  className="shrink-0 object-cover h-40"
                />
              </div>
            </div>
            <div className="flex flex-col space-y-0 rounded-md  w-full shadow-md ring-1 overflow-y-clip">
              <div className="bg-white text-left p-4 text-nowrap rounded-r-md rounded-l-md">
                <h3>Amazing Gifts</h3>
              </div>
              <div>
                <Image
                  src={Logo3}
                  alt="pro"
                  width={150}
                  height={100}
                  className="shrink-0 object-cover h-40"
                />
              </div>
            </div>
          </div>
        </section>
      <section className="grow space-y-2 text-gray-800  bg-gray-100 pt-4 pb-10 pl-4 pr-4">
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
