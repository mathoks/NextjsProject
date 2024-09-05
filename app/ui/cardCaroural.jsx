"use client";

import React, { memo, useRef } from "react";
import {
  BookmarkAddOutlined,
  StarRate,
  ArrowForward,
} from "@mui/icons-material";
import { register} from "swiper/element-bundle";
//import styles from "@/app/ui/swiper.module.css";
import { useAppDispatch } from "../lib/hooks/hooks";
import { setNav } from "../lib/features/Nav/navSlice";
import { MakeEllipsis } from "../lib/utills/Makelipsis";
import getProductById from "../actions/users/getProductById";
import { useRouter } from "next/navigation";
import { is } from "immutable";
import RatingsWin from "./utilComp/RatingsWin";

const Ava = (ava) => {
  switch (ava) {
    case "LIMITED_STOCK":
      return { className: "text-red-400" };

      break;
    case "IN_STOCK":
      return { className: "text-green-400" };

      break;
    default:
      return { className: "text-yellow-400" };

      break;
  }
};

register();
const Showcase = memo(function MappedProde({ info, userInfo }){
  const swiperDiv = useRef(null);
  const dispatch = useAppDispatch();
  const router = useRouter();
  
if(Array.isArray(info) && info.length === 0) return <p>loading...</p>;
  return (
    
    <div className="rootswiper   mx-auto " >
      <swiper-container
        ref={swiperDiv}
        slides-per-view="2"
      //  navigation="true"
        pagination="true"
        pagination-type="fraction"
        speed="500" 
        css-mode="true"
        space-between="2"
        auto-play={{
          delay: 5000,
          disableOnInteraction: true,
        }}
      
      >
        {info &&
          info?.length > 1 &&
          info?.map(
            (
              {
               id,
                prodImage,
                price,
                description,
                category,
                rating = 4.5,
                name,
                availability,
              },
              ids
            ) => (
              <swiper-slide
                lazy={ids !== info.length - 1}
                key={id || ids}
                onClick={async () => {
                  if (ids !== info.length - 1) {
                    dispatch(setNav(false));
                    await getProductById(userInfo, id);
                  }
                }}
              >
                {ids !== info.length - 1 ? (
                  <div className=" shadow-md p-1 pb-0 rounded-md bg-white mx-auto">
                  
                    <div className="flex justify-between items-center px-2">
                      <span className="font-semibold text-sm max-w-[70%]" >{category.name}</span>
                      
                        <BookmarkAddOutlined fontSize="small" />
                      
                      
                    </div>
                    <hr className=" w-full mt-1"/>
                  
                  <div
                    className="space-y-3 pb-3"
                    onClick={() =>
                      router.push(
                        `/store/${encodeURIComponent(
                          userInfo
                        )}/product/${encodeURIComponent(id)}`
                      )
                    }
                  >
                   
                    <div className="flex mx-auto ">
                      <img
                        src= {prodImage?.length > 0 ? prodImage[1].image : "" }
                        // sizes="50vw"
                        alt="DealerPic"
                        width={200}
                        height={120}
                        loading="lazy"
                        className="rounded-b-lg mx-auto"
                      />
                    </div>
                    <div className=" flex flex-col space-y-1 px-2">
                      <span className="flex justify-between ">
                        <span className=" w-[95%] overflow-ellipsis font-semibold text-sm line-clamp-2 ">
                          {name}
                        </span>

                        <span className="flex justify-between items-center">
                          <span className="flex justify-start items-center space-x-1">
                            <span className="text-[12px]">&#x20A6;</span>
                            <p className="text-[12px] font-semibold">{price}</p>
                          </span>
                        </span>
                      </span>
                      <span className="text-[12px] first-letter:capitalize" {...Ava(availability)}>{availability.toLowerCase().replace(/_/g, ' ')}</span>
                        <MakeEllipsis text={description} size={60} flag={"A"} />
                     <RatingsWin rating={rating}/>
                      {/* <div className="flex flex-col space-y-2 pt-2">
                        <span className="flex items-center justify-between ">
                          <span className="flex space-x-1 items-center text-[10px]">
                            <span>{rating}</span>
                           
                              {Array.from(Array(5)).map((_, index) => (
                                <StarRate
                                  key={index}
                                  fontSize="inherit"
                                  sx={{ color: "#f2c464" }}
                                />
                              ))}
                           
                            <span className="text-[#005B9A]">(1123)</span>
                          </span>
                        </span>
                      </div> */}
                    </div>
                    
                  </div>
                  </div>
                ) : (
                  <div className="flex justify-center  mt-[9rem]">
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        router.push(
                          `/store/${encodeURIComponent(userInfo)}/products`
                        );
                      }}
                      className="flex space-x-1 text-[#005B9A] text-sm justify-center items-center mx-auto"
                    >
                      <span className="text-base">See all products</span>
                    
                        <ArrowForward fontSize="inherit" />
                      
                      
                    </div>
                    
                  </div>
                )}
              </swiper-slide>
            )
          )}
          
      </swiper-container>
    </div>
  );
}, (prev, next)=>is(prev.info, next.info));

export default Showcase;
