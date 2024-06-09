
import { Avatar, Divider } from "@mui/material";
import React from "react";
import { stringAvatar } from "../lib/utills/stringAvata";
import {
  ArrowBack,
  ArrowForward,
  Call,
  Chat,
  LocationOnOutlined,
  More,
  MoreVertOutlined,
  StarRate,
  StorefrontOutlined,
} from "@mui/icons-material";
import { MakeEllipsis } from "../lib/utills/Makelipsis";
import Showcase from "./cardCaroural";
import Link from "next/link";
// import { useRouter } from "next/navigation";



/**
 * @component Usercard
 * @param {object} props - Component props
 * @returns {JSX.Element} - JSX Element
 */
const Usercard = (props) => {
    console.log(props)
    // const router = useRouter()
    // /pages/${encodeURIComponent(props?.id || 4)
  return (
    
    <div className="flex flex-col space-y-2 text-gray-900  p-2 pr-1 pt-3  items-center grow-0 text-left bg-white border-b-2 last:mt-0">
    <Link href= {`/pages/${encodeURIComponent(props?.id || 4)}#about`}>
      <section className="flex flex-row pl-2 justify-between items-start">
        <div>
          <Avatar {...stringAvatar(props?.name, props?.image)} />
        </div>
        <div className="flex flex-col space-y-2 ml-3">
        <span className="font-semibold">
            {props?.name || "John Bull"}
        </span>
          <span className="flex gap-2 w-[100%]">
            <span className="text-base">
              <LocationOnOutlined fontSize="inherit" />
            </span>
            <span className=" text-base w-full leading-5">
              <span>{props?.location || "shop 134b Electronic line Alaba international market ojo lagos" }</span>
            </span>
          </span>
          <span className="flex gap-2 w-[100%] justify-start items-start">
            <span>
              <StorefrontOutlined fontSize="inherit" />
            </span>
            <span>
              <MakeEllipsis
                text={props.storeDescription + " " + "we sell the best contact us today what are you waiting for you can check my product gallery"}
                size={60}
                flag={"A"}
              
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
        <div>
        <MoreVertOutlined/>
        </div>
        
      </section>
      </Link>
      <section>
        
            <Showcase/>        
        
      </section>
      <section className="flex flex-row justify-end  items-center w-[90%]">
        {/* <div className="flex space-x-1">
          <span className="text-sm space-x-1">Chat</span>
          <span className="text-sm"><Chat fontSize="inherit"/></span>
        </div>
        <div className="flex space-x-1">
        <span className="text-sm">Call</span>
          <span className="text-sm"><Call fontSize="inherit"/></span>
        </div> */}
        <Link href={`/pages/${encodeURIComponent(4)}#Products`}>
        <div  className="flex space-x-1 icon_slate ">
        <span className="text-sm ">See more</span>
          <span className="text-sm"><ArrowForward fontSize="inherit"/></span>
        </div>
        </Link>
      </section>
      
    </div>
    
  );
};

export default Usercard;
