"use client";

import React, { useRef } from "react";
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

register();
const Showcase = ({ info, userInfo }) => {
  const swiperDiv = useRef(null);
  const dispatch = useAppDispatch();
  const router = useRouter();

  return (
    
    <div className="rootswiper rounded-md w-[17rem] md:w-[18rem] px-6 py-2 shadow-md bg-white ring-1 ring-gray-200" >
      <swiper-container
        ref={swiperDiv}
        slides-per-view="1"
      //  navigation="true"
        pagination="true"
        // pagination-type="fraction"
        space-between="15"
        auto-play={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        loop="true"
      >
        {info &&
          info.length > 1 &&
          info.map(
            (
              {
               id,
                prodImage,
                price,
                description,
                category,
                rating,
                name,
                Availability,
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
                  <>
                  <div className="space-y-1">
                    <span className="flex  justify-between items-center ">
                      <span className="font-semibold text-sm">{category}</span>
                      <span className="flex justify-end">
                        <BookmarkAddOutlined />
                      </span>
                      
                    </span>
                    <hr className=" w-full"/>
                    </div>
                  <div
                    className="flex flex-col  space-y-3 pb-6"
                    onClick={() =>
                      router.push(
                        `/store/${encodeURIComponent(
                          userInfo
                        )}/product/${encodeURIComponent(id)}`
                      )
                    }
                  >
                   
                    <div className="flex mx-auto  rounded-md">
                      <img
                        src={prodImage[1].image}
                        // sizes="50vw"
                        alt="DealerPic"
                        width={200}
                        height={120}
                        loading="lazy"
                        className="rounded-b-lg  h-[10rem] w-[14.5rem]"
                      />
                    </div>
                    <div className=" flex flex-col space-y-3">
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
                      <div className="w-[98%] ">
                        <MakeEllipsis text={description} size={60} flag={"A"} />
                      </div>
                      <div className="flex flex-col space-y-2">
                        <span className="text-sm">{Availability}</span>
                        <span className="flex items-center justify-between ">
                          <span className="flex space-x-1 items-center text-[12px]">
                            <span>{rating}</span>
                            <span>
                              {Array.from(Array(5)).map((_, index) => (
                                <StarRate
                                  key={index}
                                  fontSize="inherit"
                                  sx={{ color: "#f2c464" }}
                                />
                              ))}
                            </span>
                            <span className="text-[#005B9A]">1123</span>
                          </span>
                        </span>
                      </div>
                    </div>
                    
                  </div>
                  </>
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
                      <span className="text-sm">
                        <ArrowForward fontSize="inherit" />
                      </span>
                      
                    </div>
                    
                  </div>
                )}
              </swiper-slide>
            )
          )}
          
      </swiper-container>
    </div>
  );
};

export default Showcase;
