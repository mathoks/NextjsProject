import { Avatar, Chip, Divider } from "@mui/material";
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
} from "@mui/icons-material";
import Link from "next/link";
import Modal from "./utilComp/modal";
import HomeMore from "./Buttons/HomeMore";
import dynamic from "next/dynamic";

const UserComp = dynamic(() => import("@/app/ui/cardCaroural"), { ssr: false });

/**
 * @component Usercard
 * @param {object} props - Component props
 * @returns {JSX.Element} - JSX Element
 */
const Usercard = ({
  id,
  businessName,
  about,
  email,
  bizLogo,
  shopAddress,
  product,
  ratings,
  phone,
}) => {
  const newArr = [...product, { link: "see all" }];

  // /pages/${encodeURIComponent(props?.id || 4)
  return (
    <div className="flex  flex-col border-b-[0.2px]  border-gray-300 space-y-1 text-gray-900  py-3  text-left   leading-[0.5rem] text-sm ">
      <section className="flex space-x-2">
        {/* <div className=" "> */}
        <Avatar
          className="ring-1 rounded-full ring-gray-400"
          {...stringAvatar(businessName, bizLogo)}
          alt="userImg"
        />
        {/* </div> */}
        <div className="space-y-2 flex-grow py-2">
          <p className="font-semibold first-letter:capitalize">
            {businessName}
          </p>
          <div className="flex gap-2  items-start">
            <span className="pt-[2.5px]">
              <LocationOnOutlined sx={{ fontSize: "18px" }} />
            </span>
            <span className=" text-sm lg:text-base leading-5  first-letter:capitalize">
              <span>{shopAddress}</span>
            </span>
          </div>
          <div className="flex gap-2 justify-start items-start">
            <span className="pt-[2.5px]">
              <StorefrontOutlined sx={{ fontSize: "18px" }} />
            </span>
            <span className=" first-letter:capitalize">
              <MakeEllipsis text={about} size={60} flag={"A"} userId={id} />
            </span>
          </div>
        </div>
        <div className=" relative">
          <HomeMore id={id} />
          <Modal
            call={{ tag: "call", icon: <CallReceivedOutlined />}}
            chat={{ tag: "chat", icon: <ChatOutlined /> }}
            share={{ tag: "share", icon: <ShareOutlined /> }}
            value={id}
            phone = {phone}
          />
        </div>
      </section>
      
      {product.length > 0 ? (
            <UserComp
              info={typeof product !== "undefined" ? newArr : []}
              userInfo={id}
            />
          ) : null}
          
      <section className="flex flex-row justify-between items-center ">
        <div className=" first-letter:capitalize flex gap-1  justify-start items-center text-[12px] pt-2">
          <span>{ratings || 4.5}</span>
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
        </div>
        <Link
          href={`/store/${encodeURIComponent(
            businessName
          )}/${encodeURIComponent(id)}`}
          className="text-sm  rounded-full font-medium  px-2.5 py-1 mt-2 text-white bg-[#ce3801]"
        >
          Visit the Store
        </Link>
      </section>
    </div>
  );
};

export default Usercard;
