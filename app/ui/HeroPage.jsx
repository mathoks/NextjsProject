/* eslint-disable react/jsx-key */

import React from "react";
import { jsx } from "@emotion/react";
import MainButton from "./Buttons/MainButton";

/**
 * hero page component.
 * @component
 * @returns {jsx.Element} The rendered component.
 */
export const HeroPage = () => {
  // eslint-disable-next-line react/jsx-key

  return (
    
      <section className="pt-8">
        <div className="flex justify-around items-center">
        <div className="flex text-white flex-col space-y-4  h-auto pl-6 items-start">
        <div className="min-w-min">
            <h2 className="text-2xl  w-2/3 text-left md:text-left font-semibold text_shadow">
              Welcome To Mymart
            </h2>
          </div>
          <div className="flex flex-col font-bold text_shadow  space-y-4 md:text-left ">
            <h2>Get a Store Today</h2>
            <MainButton />
          </div>
        </div>
         <div className="bg_image2 h-[13rem] mb-8 w-48 mr-4">
         
         </div>
        </div>
      </section>
  );
};
