"use client";

import React, { useRef } from "react";
import {
  BookmarkAddOutlined,
  StarRate,
  ArrowForward,
} from "@mui/icons-material";
import { register } from "swiper/element-bundle";
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
    <div className="rootswiper rounded-md">
      <swiper-container
        ref={swiperDiv}
        slides-per-view="1"
        // navigation="true"
        pagination="true"
        // pagination-type="fraction"
        space-between="15"
      >
        {info &&
          info.length &&
          info.map(
            (
              {
                productId,
                image,
                price,
                description,
                category,
                rating,
                name,
                Availability,
              },
              id
            ) => (
              <swiper-slide
                lazy={id !== info.length - 1}
                key={productId || id}
                onClick={async () => {
                  if (id !== info.length - 1) {
                    dispatch(setNav(false));
                    await getProductById(userInfo, productId);
                  }
                }}
              >
                {id !== info.length - 1 ? (
                  <div
                    className="flex flex-col relative justify-start items-start  space-y-3  p-2"
                    onClick={() =>
                      router.push(
                        `/pages/${encodeURIComponent(
                          userInfo
                        )}/${encodeURIComponent(productId)}`
                      )
                    }
                  >
                    <span className="flex flex-row space-x-60 items-center ">
                      <span className="font-semibold text-sm">{category}</span>
                      <span className="flex justify-end">
                        <BookmarkAddOutlined />
                      </span>
                    </span>

                    <div className="flex mx-auto ">
                      <img
                        src={image[0]}
                        sizes="50vw"
                        alt="DealerPic"
                        width={200}
                        height={120}
                        loading="lazy"
                        className="rounded-t-lg shadow-photo h-[9rem] "
                      />
                    </div>
                    <div className=" flex flex-col space-y-3 ">
                      <span className="flex justify-between w-[82%]">
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
                      <div className="w-[97%]">
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
                ) : (
                  <div className="  mt-[7rem]">
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        router.push(
                          `/store/${encodeURIComponent(userInfo)}/products`
                        );
                      }}
                      className="flex space-x-1 text-[#005B9A] text-sm mx-auto pl-[7rem] pt-4"
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
