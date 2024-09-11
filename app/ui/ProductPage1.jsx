import { Avatar, Divider, Rating } from "@mui/material";
import Link from "next/link";
import React from "react";
import Carousel from "./Carousal";
import { auth } from "@/auth";
import { LocationOnOutlined } from "@mui/icons-material";
import BranchAccor from "./branchAccor";
import Stars from "./utilComp/Stars";
import UserReview from "./utilComp/userReview";

const ProductPage1 = async (props) => {
  const session = await auth();
 
  return (
    <section className="text-gray-900  flex flex-col w-full space-y-4 text-[15px] md:flex lg:flex">
      <div className="mx-auto space-y-2 rounded-md md:shadow-md pb-2 md:ring-1 ring-slate-300">
        <span className="flex justify-between items-center px-4">
          <h1 className="text-lg font-semibold first-letter:capitalize">{props?.data?.name}</h1>
          {props.data.storeId === session?.user?.id ? (
            <Link
              href={`/store/${props.data.storeId}/product/${props.data.id}/edit`}
            >
              <button className="ring-1 shadow-md ring-slate-300 rounded-full px-4 py-[2px] text-white bg-[#FF4500] font-semibold">
                Edit
              </button>
            </Link>
          ) : (
            ""
          )}
        </span>

        <Carousel slides={props?.data.prodImage} autoSlide={false} />
        {props.data.availability === "LIMITED_STOCK" ? (
          <span className="text-red-600  text-[14px] font-semibold px-4">
            Limited Stock
          </span>
        ) : props.data.availability === "IN_STOCK" ? (
          <span className="text-red-600  text-[14px] font-semibold px-4">
            Limited Stock
          </span>
        ) : props.data.availability === "COMING_SOON" ? (
          <span className=" text-green-600  text-[14px] font-semibold px-3">
            Coming Soon
          </span>
        ) : (
          ""
        )}
        {/* <span className='text-[14px] font-semibold px-2 text-green-600'>{props.data.availability.replace(/_/g, ' ')}</span> */}
        <Divider variant="fullWidth" className="pt-2" />
        <div className=" font-semibold space-y-1 px-3">
          <span className="flex space-x-1 items-center text-[12px] text-slate-500 pt-2">
            <LocationOnOutlined fontSize="inherit" />
            <span>
              {props.data.store.market +
                " " +
                props.data.store.state +
                " " +
                props.data.store.country}
            </span>
          </span>
          <span className="flex justify-between items-center space-x-1 text-base font-semibold">
            <span className="flex items-center space-x-1">
              <span className="text-[12px]">&#x20A6;</span>
              <p className="text-[#6A0DAD] font-bold">{props.data.price}</p>
            </span>
            <span className="text-sm first-letter:capitalize">
              {props?.data?.negotiable.toLowerCase()}
            </span>
          </span>
          <span className="">{props?.data?.category.name}</span>
          <Stars rating = {props?.data.rating}/>
        </div>
      </div>
      <div className=" space-y-3 mx-auto py-2">
        <button className=" w-[20rem]  py-1.5 text-white  bg-[#FF4500] rounded-full shadow-md font-semibold">
          Add to wishlist
        </button>

        <div className="flex space-x-1 py-1">
          <a href={`tel:${props.data.store.phone}`}>
            <button className=" w-[10rem] py-1.5 text-white  bg-[#6A0DAD] rounded-full shadow-md font-semibold">
              Contact the Seller
            </button>
          </a>
          <button className=" w-[10rem] py-1.5 text-white  bg-[#166e32] rounded-full shadow-md font-semibold">
            Message
          </button>
        </div>
      </div>
      <Divider />
      <div className="flex justify-start items-start space-x-2 p-2">
        <Avatar className="ring-1" src={props?.data?.store?.bizLogo} />
        <div className="flex flex-col space-y-1">
          <span className="flex justify-between items-center w-full">
            <span className="font-semibold line-clamp-2 text-wrap">
              {props?.data?.store?.businessName}
            </span>
          </span>
          <div className="flex items-center space-x-1 text-[12px]">
            <span>4.0</span>
            <Rating size="small" />
            <span className="text-blue-400">10,052</span>
          </div>

          <Link
            href={`/store/${props.data.store.businessName}/${props.data.storeId}`}
            className="text-blue-500 font-medium"
          >
            Visit the Store
          </Link>

          <div></div>
        </div>
      </div>
      <Divider />
     {props?.data?.branch.length > 0 ? <> <div className="p-2 ml-1">
        <BranchAccor branches={props?.data?.branch} />
      </div>
      <Divider /></> : '' }
      {session?.user?.id ? <UserReview prod = {props?.data?.id} category_id={props?.data?.category?.id} user_id = {session?.user?.id}/> : ''}
      <div className="px-4  min-h-20 flex flex-col justify-left items-start">
        <h2 className="font-semibold text-[15px]">About This Product</h2>
        <p className="">{props?.data.description}</p>
      </div>
    </section>
  );
};

export default ProductPage1;
