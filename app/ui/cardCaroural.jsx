"use client";

import React, { useRef } from "react";
import { StarRate } from "@mui/icons-material";
import { register } from "swiper/element-bundle";
//import styles from "@/app/ui/swiper.module.css";
import { useAppDispatch } from "../lib/hooks/hooks";
import { setNav } from "../lib/features/Nav/navSlice";
import Link from "next/link";
import { MakeEllipsis } from "../lib/utills/Makelipsis";
import getProductById from "../actions/users/getProductById";

//const Image = dynamic(import("next/image"), { ssr: false });

// const styles = dynamic(import("@/app/ui/swiper.module.css"), { ssr: false });

register();
const Showcase = ({ info, userInfo }) => {
  const swiperDiv = useRef(null);
  const dispatch = useAppDispatch();

  return (
    <swiper-container
      ref={swiperDiv}
      slides-per-view="1"
      // navigation="true"
      pagination="true"
      // pagination-type="fraction"
      space-between="15"
      // className="rootswiper"
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
              lazy="true"
              key={productId || id}
              onClick={async () => {
                dispatch(setNav(false));
                await getProductById(userInfo, productId);
              }}
            >
              <Link
                href={`/pages/${encodeURIComponent(
                  userInfo
                )}/${encodeURIComponent(productId)}`}
              >
                <div className="flex relative justify-start items-start  space-x-3 h-[16rem] ">
                  <div className="flex flex-col space-y-2">
                    <img
                      src={image[0]}
                      sizes="50vw"
                      alt="DealerPic"
                      width={200}
                      height={200}
                      loading="lazy"
                      className="h-[9rem] rounded-t-lg"
                    />
                    <div className="flex flex-col space-y-2">
                      <span className="flex justify-between">
                        <span className="font-semibold text-sm">
                          {category}
                        </span>
                        <span className="flex justify-between items-center">
                          <span className="flex justify-start items-center space-x-1">
                            <span className="text-[12px]">&#x20A6;</span>
                            <p className="text-[12px] font-semibold">{price}</p>
                          </span>
                        </span>
                      </span>
                      <span className="text-sm">{Availability}</span>
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
                    </div>
                  </div>
                  <div className=" flex flex-col space-y-3 w-[50%]">
                    <div>
                      <p className=" w-3/4 overflow-ellipsis font-semibold text-sm">
                        {name}
                      </p>
                    </div>
                    <div>
                      <MakeEllipsis text={description} size={60} flag={"A"} />
                      {/* <p className=" w-[98%] overflow-ellipsis text-sm leading-4">
                        {description}
                      </p> */}
                    </div>
                  </div>
                </div>
              </Link>
            </swiper-slide>
          )
        )}
    </swiper-container>
  );
};

export default Showcase;
