
import { Avatar , Chip} from "@mui/material";
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
const Usercard = ({id, businessName, about, email, bizLogo, shopAddress, product, ratings = 4, phone}) => {
    const newArr = [...product, {'link' : 'see all'}]
     
    // /pages/${encodeURIComponent(props?.id || 4)
  return (
    
    <div className="flex flex-col space-y-2 text-gray-900 mx-auto p-2  pt-3 items-center grow-0 text-left  rounded-md  ">
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
        <div className="ring-2 rounded-full">
          <Avatar {...stringAvatar(businessName, bizLogo)} alt="userImg"/>
        </div>
        <div className="flex flex-col space-y-2 ml-3 ">
        <span className="font-semibold">
            {businessName || "John Bull"}
        </span>
          <span className="flex gap-2 w-[100%] items-start">
            <span>
              <LocationOnOutlined sx={{fontSize: "18px"}}/>
            </span>
            <span className=" text-sm lg:text-base w-full leading-5 pt-[2px]">
              <span>{shopAddress || "shop 134b Electronic line Alaba international market ojo lagos" }</span>
            </span>
          </span>
          <span className="flex gap-2 w-[100%] justify-start items-start">
            <span>
              <StorefrontOutlined sx={{fontSize: "18px"}} />
            </span>
            <span className="pt-[2px]">
              <MakeEllipsis
                text={about + " " + "we sell the best contact us today what are you waiting for you can check my product gallery"}
                size={60}
                flag={"A"}
                userId={id}
              />
            </span>
          </span>
          
        </div>
        <div className=" relative">
        
        <HomeMore id={id}/>
        <Modal call={{'tag':'call', icon: <CallReceivedOutlined/>}} chat={{'tag':'chat', icon: <ChatOutlined/>}} share={{'tag':'share', icon: <ShareOutlined/>}} value={id}/>
        </div>
        
      </section>
    { product.length > 0 ?
      (<section className="flex flex-col ">
        
            <UserComp info = {typeof product !== "undefined" ? newArr : []} userInfo = {id}/>        
          
      </section>) : null
    }
      <section className="flex flex-row justify-end  items-center w-[90%]">
       
      <Link href={`/store/${encodeURIComponent(businessName)}/${encodeURIComponent(id)}`} className="text-sm rounded-full px-2.5 py-1 mt-2 ring-1">Visit the Store</Link>
      
      </section>
      <div className="w-[22rem] h-4 ">
      <hr className="h-6  pt-4 text-purple-600 mt-4"></hr>
      </div>
      
    </div>
    
  );
};

export default Usercard;
