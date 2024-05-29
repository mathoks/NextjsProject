import { Avatar } from "@mui/material";
import React from "react";
import { stringAvatar } from "../lib/utills/stringAvata";
import {
  LocationOnOutlined,
  StarRate,
  StorefrontOutlined,
} from "@mui/icons-material";
import { MakeEllipsis } from "../lib/utills/Makelipsis";
import Showcase from "./cardCaroural";
import Link from "next/link";


/**
 * @component Usercard
 * @param {object} props - Component props
 * @returns {JSX.Element} - JSX Element
 */
const Usercard = (props) => {
    console.log(props)
  return (
    <Link href={`/pages/${encodeURIComponent(props?.id || 4)}`}>
    <div className="flex flex-col space-y-2 text-gray-900 m-4 p-4 shadow-md rounded-md items-center grow-0 text-left ">
      <section className="flex flex-row justify-start items-start space-x-4">
        <div>
          <Avatar {...stringAvatar(props?.name, props?.image)} />
        </div>
        <div className="flex flex-col space-y-2">
        <span className="font-bold">
            {props?.name || "John Bull"}
        </span>
          <span className="flex gap-2 w-[90%]">
            <span className="text-base">
              <LocationOnOutlined fontSize="inherit" />
            </span>
            <span className="text text-base">
              <span>{props?.location || "shop 134b Electronic line Alaba international market ojo lagos" }</span>
            </span>
          </span>
          <span className="flex gap-2 w-[90%] justify-start items-start">
            <span>
              <StorefrontOutlined fontSize="inherit" />
            </span>
            <span>
              <MakeEllipsis
                text={props.storeDescription + "" + "we sell the best contact us today what are you waiting for you can check my product gallery"}
                size={60}
                flag={"A"}
                sx={{
                //   fontSize: 16,
                  lineHeight: 1,
                  variant: "subtitle1",
                //   '&:first-letter': {textTransform: 'capitalize'}
                }}
                
              />
            </span>
          </span>
          <span className=" first-letter:capitalize flex gap-1 w-3/4 justify-start items-center text-[14px]">
            <span>{props?.rating || 4.5}
            </span>
            <div>
            {Array.from(Array(5)).map((_, index) => (
                      <StarRate
                        key={index}
                        fontSize="inherit"
                        sx={{ color: "#f2c464" }}
                      />
                    ))}
            </div>
            <span>{"200"}</span>
          </span>
        </div>
        <div></div>
      </section>
      <section className="">
        
            <Showcase/>        
        
      </section>
      <section className="flex flex-row justify-between">
        <div></div>
        <div></div>
        <div></div>
      </section>
    </div>
    </Link>
  );
};

export default Usercard;
