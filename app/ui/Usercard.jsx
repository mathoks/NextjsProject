"use client"
import { Avatar, ButtonBase, Divider } from "@mui/material";
import React, { Suspense } from "react";
import { stringAvatar } from "../lib/utills/stringAvata";
import {
  ArrowBack,
  ArrowForward,
  Call,
  CallReceivedOutlined,
  Chat,
  ChatOutlined,
  LocationOnOutlined,
  More,
  MoreVertOutlined,
  ShareOutlined,
  StarRate,
  StorefrontOutlined,
} from "@mui/icons-material";
import { MakeEllipsis } from "../lib/utills/Makelipsis";
import Showcase from "./cardCaroural";
import Link from "next/link";
import Modal from "./utilComp/modal";
import HomeMore from "./Buttons/HomeMore";
 import { useRouter } from "next/navigation";
import Loading from "../loading";



/**
 * @component Usercard
 * @param {object} props - Component props
 * @returns {JSX.Element} - JSX Element
 */
const Usercard = ({userId, Storename, storeDescription, email, avatar, registeredAt, address, product, ratings, subscriptionTier}) => {
    
     const router = useRouter()
    // /pages/${encodeURIComponent(props?.id || 4)
  return (
    
    <div className="flex flex-col space-y-2 text-gray-900  p-2 pr-1 pt-3 items-center grow-0 text-left shadow-md rounded-md bg-white  last:mt-0">
    <span className=" first-letter:capitalize flex gap-1 w-3/4 justify-end items-center text-[12px]">
            <span>{ratings || 4.5}
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
    
      <section className="flex flex-row pl-2 justify-between items-start" onClick={()=>router.push(`/pages/${encodeURIComponent(userId || 4)}#about`)}>
        <div>
          <Avatar {...stringAvatar(Storename, avatar)} alt="userImg"/>
        </div>
        <div className="flex flex-col space-y-2 ml-3 ">
        <span className="font-semibold">
            {Storename || "John Bull"}
        </span>
          <span className="flex gap-2 w-[100%] items-start">
            <span>
              <LocationOnOutlined sx={{fontSize: "18px"}}/>
            </span>
            <span className=" text-sm w-full leading-5 pt-[2px]">
              <span>{address || "shop 134b Electronic line Alaba international market ojo lagos" }</span>
            </span>
          </span>
          <span className="flex gap-2 w-[100%] justify-start items-start">
            <span>
              <StorefrontOutlined sx={{fontSize: "18px"}} />
            </span>
            <span className="pt-[2px]">
              <MakeEllipsis
                text={storeDescription + " " + "we sell the best contact us today what are you waiting for you can check my product gallery"}
                size={60}
                flag={"A"}
              
              />
            </span>
          </span>
          
        </div>
        <div className=" relative">
        
        <HomeMore id={userId}/>
        <Modal call={{'tag':'call', icon: <CallReceivedOutlined/>}} chat={{'tag':'chat', icon: <ChatOutlined/>}} share={{'tag':'share', icon: <ShareOutlined/>}} value={userId}/>
        </div>
        
      </section>
    
      <section className="flex flex-col justify-center relative">
        <Suspense fallback=<p>Loading</p>>
            <Showcase info = {product}/>        
            </Suspense>
            <button className="absolute bottom-8 right-0  text_shadow text-[#005B9A] ">
              Visit the Store
            </button>
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
        <div  className="flex space-x-1 text-[#005B9A]">
        <span className="text-sm ">See all</span>
          <span className="text-sm"><ArrowForward fontSize="inherit"/></span>
        </div>
        </Link>
      </section>
      
    </div>
    
  );
};

export default Usercard;
