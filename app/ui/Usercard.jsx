
import { Avatar } from "@mui/material";
import React from "react";
import { stringAvatar } from "../lib/utills/stringAvata";
import { MakeEllipsis } from "../lib/utills/Makelipsis";
// import Showcase from "./cardCaroural";
import {
  ArrowForward,
  CallReceivedOutlined,
  ChatOutlined,
  LocationOnOutlined,
  ShareOutlined,
  StarRate,
  StorefrontOutlined,
} from '@mui/icons-material'
import Link from "next/link";
import Modal from "./utilComp/modal";
import HomeMore from "./Buttons/HomeMore";
import dynamic from "next/dynamic";

const UserComp = dynamic(()=>import('@/app/ui/cardCaroural') , {ssr: false}) 

/**
 * @component Usercard
 * @param {object} props - Component props
 * @returns {JSX.Element} - JSX Element
 */
const Usercard = ({userId, Storename, storeDescription, email, avatar, registeredAt, address, product, ratings, subscriptionTier}) => {
    
     
    // /pages/${encodeURIComponent(props?.id || 4)
  return (
    
    <div className="flex flex-col space-y-2 text-gray-900  p-2 pr-1 pt-3 items-center grow-0 text-left shadow-md rounded-md bg-white  last:mt-0">
    <span className=" first-letter:capitalize flex gap-1 w-3/4 justify-end items-center text-[12px]">
            <span>{ratings || 4.5}
            </span>
            <div suppressHydrationWarning={true}>
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
    
      <section className="flex flex-row pl-2 justify-between items-start" >
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
                userId={userId}
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
        
            <UserComp info = {typeof product !== "undefined" ? product : []} userInfo = {userId}/>        
          
      </section>
      <section className="flex flex-row justify-end  items-center w-[90%]">
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
