/* eslint-disable react/jsx-key */
"use client";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import Logo from "@/app/assets/photo4.jpeg";
import Logo8 from "@/app/assets/herobg.png";
import Logo1 from "@/app/assets/photo2.jpeg";
import Logo2 from "@/app/assets/photo7.jpeg";
import Logo3 from "@/app/assets/photo7.jpeg";
import { signIn, useSession } from "next-auth/react";
import { CircularProgress } from "@mui/material";
import Loading from "../loading";
import HeroCard from "./HeroCard";
import { jsx } from "@emotion/react";

/** 
 * hero page component.
 * @component
 * @returns {jsx.Element} The rendered component.
*/
export const HeroPage = () => {
  const [child, setchild] = useState(<Loading />);
  const session = useSession();
  console.log(session.status);
  const handleCreateStore = useCallback(
    (e) => {
      console.log(session?.status);
      if (session?.status === "loading")
        setchild(() => <CircularProgress className=" text-cyan-50" />);
      if (session?.status === "authenticated") setchild("OPEN A STORE");
      if (session?.status === "unauthenticated") {
        setchild(() => "SIGN IN");
        console.log(e?.target);
        if (e?.target) {
          return signIn();
        }
      }
    },
    [session]
  );

  useEffect(() => {
    handleCreateStore();
  }, [handleCreateStore]);

  // eslint-disable-next-line react/jsx-key

  return (
    <section className="flex flex-col space-y-1 w-screen">
      <section className="bg_image bg-center">
        <div className="flex flex-col space-y-4  py-24 h-auto pl-8 items-start ">
          <div className="min-w-min">
            <h2 className="text-3xl  w-2/3 text-left md:text-left font-bold   text-gray-800 ">
              Welcome To Mymart
            </h2>
          </div>
          <div className="flex flex-col font-bold  space-y-4 text-gray-800 md:text-left ">
            <h4>Get a Store Today</h4>

            <button
              className="p-2 bg-blue-600 rounded  text-cyan-50 text-sm"
              onClick={handleCreateStore}
              title="hero"
            >
              {child}
            </button>
          </div>
        </div>
      </section>
      {/* <section className="grow flex flex-col w-full bg-gray-100">
        <h3 className="text-gray-800">Trending Produts</h3>
        <div className="w-full bg-white font-bold flex flex-col justify-start text-gray-900 overflow-x-scroll">
          {<HeroCard />}
        </div>
      </section> */}
      {/* <section className="flex flex-col overflow-x-scroll bg-white space-y-2 pt-4 pb-8 text-gray-800  w-screen h-fit">
        <h3 className="font-bold pl-2">Trending Now</h3>
        <div className="flex justify-start items-center gap-4 w-full overflow-x-scroll h-fit p-2">
          <div className="flex flex-col space-y-0 rounded-md ring-1 overflow-y-clip w-full  shadow-md hover:outline-4 z-40">
            <div className="bg-white text-left p-4 text-nowrap rounded-r-md rounded-l-md">
              <h3>Amazing Gifts</h3>
            </div>

            <Image
              src={Logo}
              alt="pro"
              width={200}
              height={200}
              className="shrink-0 object-cover h-[7.5rem] w-40"
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
                className="shrink-0  h-[7.5rem] object-cover"
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
                className="shrink-0 object-cover h-[7.5rem]"
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
                className="shrink-0 object-cover h-[7.5rem]"
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
                className="shrink-0 object-cover h-[7.5rem]"
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
                className="shrink-0 object-cover h-[7.5rem]"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="grow space-y-2 text-gray-800  bg-white  pb-6 pl-2 pr-2 first:pb-2  pt-4">
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
      </section>*/}
    </section>
  );
};
