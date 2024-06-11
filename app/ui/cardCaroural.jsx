"use client";

import { Box } from "@mui/material";
import React, { Suspense, useEffect, useRef } from "react";
import { InfoOutlined, StarRate } from "@mui/icons-material";
import DealerPic from "@/app/assets/photo6.jpeg";
import DealerPic2 from "@/app/assets/photo4.jpeg";
import { register } from "swiper/element-bundle";
//import styles from "@/app/ui/swiper.module.css";
import dynamic from "next/dynamic";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useAppDispatch, useAppStore } from "../lib/hooks/hooks";
import { setNav, setPath } from "../lib/features/Nav/navSlice";
import Link from "next/link";
import { MakeEllipsis } from "../lib/utills/Makelipsis";

//const Image = dynamic(import("next/image"), { ssr: false });

// const styles = dynamic(import("@/app/ui/swiper.module.css"), { ssr: false });

register();
const Showcase = ({info}) => {
  const swiperDiv = useRef(null);
  const router = useRouter();
  const myNav = useAppStore();
  const path = usePathname();
  const dispatch = useAppDispatch();

  return (
    <Suspense fallback=<p>Loading</p>>
      <swiper-container
        ref={swiperDiv}
        slides-per-view="1"
        // navigation="true"
        pagination="true"
        // pagination-type="fraction"
        space-between="15"
        // className="rootswiper"
      >
        {info.map(
          ({
            productId,
            image,
            price,
            description,
            category,
            rating,
            name
            },
            id
          ) => (
            <swiper-slide
              lazy="true"
              key={productId || id}
              onClick={() => dispatch(setNav(false))}
            >
              <Link
                href={`/pages/${encodeURIComponent(
                  "mackyStores"
                )}/${encodeURIComponent("shoes")}`}
              
              >
                <div className="flex relative justify-start items-start  space-x-3 h-[13.5rem] ">
                  <div className="flex flex-col space-y-2">
                  <Image
                    src={image}
                    alt="DealerPic"
                    width={200}
                    height={200}
                    loading="lazy"
                    className="min-h-20 rounded-t-lg"
                  />
                  <div className="flex flex-col space-y-1">
                  <span className="flex justify-between">
                    <span className="font-semibold text-sm">{category}</span>
                    </span>
                    <span className="flex space-x-1 items-center text-sm">
                    <span>{rating}</span>
                    <span className="">
            {Array.from(Array(5)).map((_, index) => (
                      <StarRate
                        key={index}
                        fontSize="inherit"
                        sx={{ color: "#f2c464" }}
                      />
                    ))}
            </span>
            <span className="text-blue-500 text-sm">1123</span>
            </span>
                    <div className="flex justify-between absolute bottom-2 w-[90%] items-center">
                      <span className="flex justify-start items-center space-x-1">
                        <span className="text-[12px]">&#x20A6;</span>
                        <p className="text-[12px] font-semibold">{price}</p>
                      </span>
                      {/* <span className="text-base">
                        <InfoOutlined fontSize="inherit" />
                      </span> */}
                    </div>
                  </div>
                  </div>
                  <div className=" flex flex-col space-y-3 w-[50%]">
                    <div>
                      <p className=" w-3/4 overflow-ellipsis font-semibold text-sm">
                        {name}
                      </p>
                    </div>
                    <div>
                    <MakeEllipsis text={description}
                size={60}
                flag={"A"}/>
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
      </Suspense>
  );
};

export default Showcase;

{
  /* <Card
              elevation={2}
              sx={{
                maxWidth: 300,
                backgroundColor: "white",
                borderRadius: 2,
                maxHeight: 235,
                pb: 2,
              }}
            >
              <CardActionArea>
                <CardMedia
                  loading="lazy"
                  component="img"
                  height={120}
                  width={150}
                  src={product?.image || DealerPic2}
                  alt="item1"
                />
                <CardContent>
                  <Stack direction={"column"} gap={1} m={-1}>
                    <MakeEllipsis
                      text={product?.name}
                      size={18}
                      flag={"B"}
                      sx={{
                        fontWeight: "bold",
                        lineHeight: 1,
                        fontSize: 14,
                        whiteSpace: "pre-wrap",
                        height: 20,
                      }}
                    />
                    <MakeEllipsis
                      text={product?.description}
                      size={45}
                      flag={"B"}
                      sx={{
                        pt: 1,
                        pb: 1,
                        lineHeight: 1,
                        fontSize: 14,
                        whiteSpace: "pre-wrap",
                        height: 60,
                      }}
                    />
                    <Stack
                      direction={"row"}
                      sx={{ justifyContent: "space-around", display: "flex" }}
                      alignItems={"center"}
                    >
                      <span style={{ flexBasis: "90%" }}>
                        <Typography fontSize={12} fontWeight={"bold"}>
                          {`NGN ${product?.price}`}
                        </Typography>
                      </span>
                      <span style={{ flexBasis: "10%" }}>
                        <InfoOutlined
                          fontSize="inherit"
                          sx={{ color: "#34C759", ml: "auto" }}
                        />
                      </span>
                    </Stack>
                  </Stack>
                </CardContent>
              </CardActionArea>
            </Card>
          </swiper-slide>
          <swiper-slide>
            <Card
              elevation={2}
              sx={{
                maxWidth: 300,
                backgroundColor: "white",
                borderRadius: 2,
                maxHeight: 235,
                pb: 2,
              }}
            >
              <CardActionArea>
                <CardMedia
                  loading="lazy"
                  component="img"
                  height={120}
                  width={150}
                  src={DealerPic}
                  alt="item1"
                />
                <CardContent>
                  <Stack direction={"column"} gap={1} m={-1}>
                    <MakeEllipsis
                      text={product?.name || "mm"}
                      size={18}
                      flag={"B"}
                      sx={{
                        fontWeight: "bold",
                        lineHeight: 1,
                        fontSize: 14,
                        whiteSpace: "pre-wrap",
                        height: 20,
                      }}
                    />
                    <MakeEllipsis
                      text={product?.description || "ll"}
                      size={45}
                      flag={"B"}
                      sx={{
                        pt: 1,
                        pb: 1,
                        lineHeight: 1,
                        fontSize: 14,
                        whiteSpace: "pre-wrap",
                        height: 60,
                      }}
                    />

                    <Stack
                      direction={"row"}
                      sx={{ justifyContent: "space-around", display: "flex" }}
                      alignItems={"center"}
                    >
                      <span style={{ flexBasis: "90%" }}>
                        <Typography fontSize={12} fontWeight={"bold"}>
                          {" "}
                          {`NGN ${product?.price}`}
                        </Typography>
                      </span>
                      <span style={{ flexBasis: "10%" }}>
                        <InfoOutlined
                          fontSize="inherit"
                          sx={{ color: "#34C759", ml: "auto" }}
                        />
                      </span>
                    </Stack>
                  </Stack>
                </CardContent>
              </CardActionArea>
            </Card>
          </swiper-slide>
          <swiper-slide>
            <Card
              elevation={2}
              sx={{
                maxWidth: 300,
                backgroundColor: "white",
                borderRadius: 2,
                maxHeight: 235,
                pb: 2,
              }}
            >
              <CardActionArea>
                <CardMedia
                  loading="lazy"
                  component="img"
                  height={120}
                  width={150}
                  src={DealerPic2}
                  alt="item1"
                />
                <CardContent>
                  <Stack direction={"column"} gap={1} m={-1}>
                    <MakeEllipsis
                      text={product?.name || "ll"}
                      size={18}
                      flag={"B"}
                      sx={{
                        fontWeight: "bold",
                        lineHeight: 1,
                        fontSize: 14,
                        whiteSpace: "pre-wrap",
                        height: 20,
                      }}
                    />
                    <MakeEllipsis
                      text={product?.description || "kkl"}
                      size={45}
                      flag={"B"}
                      sx={{
                        pt: 1,
                        pb: 1,
                        lineHeight: 1,
                        fontSize: 14,
                        whiteSpace: "pre-wrap",
                        height: 60,
                      }}
                    />

                    <Stack
                      direction={"row"}
                      sx={{ justifyContent: "space-around", display: "flex" }}
                      alignItems={"center"}
                    >
                      <span style={{ flexBasis: "90%" }}>
                        <Typography
                          fontSize={12}
                          fontWeight={"bold"}
                        >{`NGN ${product?.price}`}</Typography>
                      </span>
                      <span style={{ flexBasis: "10%" }}>
                        <InfoOutlined
                          fontSize="inherit"
                          sx={{ color: "#34C759", ml: "auto" }}
                        />
                      </span>
                    </Stack>
                  </Stack>
                </CardContent>
              </CardActionArea>
            </Card>
          </swiper-slide>
          <swiper-slide>
            <Card
              elevation={2}
              sx={{
                maxWidth: 300,
                backgroundColor: "white",
                borderRadius: 2,
                maxHeight: 235,
                pb: 2,
              }}
            >
              <CardActionArea>
                <CardMedia
                  loading="lazy"
                  component="img"
                  height={120}
                  width={150}
                  src={DealerPic}
                  alt="item1"
                />
                <CardContent>
                  <Stack direction={"column"} gap={1} m={-1}>
                    <MakeEllipsis
                      text={product?.name || "lkk"}
                      size={18}
                      flag={"B"}
                      sx={{
                        fontWeight: "bold",
                        lineHeight: 1,
                        fontSize: 14,
                        whiteSpace: "pre-wrap",
                        height: 20,
                      }}
                    />
                    <MakeEllipsis
                      text={product?.description || "hhhh"}
                      size={45}
                      flag={"B"}
                      sx={{
                        pt: 1,
                        pb: 1,
                        lineHeight: 1,
                        fontSize: 14,
                        whiteSpace: "pre-wrap",
                        height: 60,
                      }}
                    />

                    <Stack
                      direction={"row"}
                      sx={{ justifyContent: "space-around", display: "flex" }}
                      alignItems={"center"}
                    >
                      <span style={{ flexBasis: "90%" }}>
                        <Typography
                          fontSize={12}
                          fontWeight={"bold"}
                        >{`NGN ${product?.price}`}</Typography>
                      </span>
                      <span style={{ flexBasis: "10%" }}>
                        <InfoOutlined
                          fontSize="inherit"
                          sx={{ color: "#34C759", ml: "auto" }}
                        />
                      </span>
                    </Stack>
                  </Stack>
                </CardContent>
              </CardActionArea>
            </Card> */
}
