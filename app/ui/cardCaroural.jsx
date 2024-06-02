"use client";

import {
  Box
} from "@mui/material";
import React, { Suspense, useRef } from "react";
import { InfoOutlined } from "@mui/icons-material";
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



//const Image = dynamic(import("next/image"), { ssr: false });

// const styles = dynamic(import("@/app/ui/swiper.module.css"), { ssr: false });

register();
const Showcase = (
  product = {
    userId: 1,
    Storename: "Store Name",
    storeDescription: "Store Description",
    email: "email",
    avatar: "avatar",
    password: null,
    birthdate: null,
    registeredAt: new Date(),
    address: "address",
    ratings: 4,
    Phone: "Phone",
  }
) => {
  const swiperDiv = useRef(null);
  const router = useRouter();
  const myNav = useAppStore()
  const path = usePathname()
  const dispatch = useAppDispatch()

  
  return (
    
      <div  className={"swiper w-[24rem] rounded-md  flex p-2 justify-center  h-80"} >
        <swiper-container
          ref={swiperDiv}
          slides-per-view="2"
          // navigation="true"
          pagination="true"
          // pagination-type="fraction"
          space-between="15"
         // className="rootswiper"
        >
       
          <swiper-slide lazy="true"  onClick={()=>{dispatch(setNav(false));} }>
          <Link href={'/pages'}>
            <div  className="flex flex-col shadow-md rounded-md space-y-3 h-[16.5rem]">
              <Image
                src={DealerPic}
                alt="DealerPic"
                width={300}
                height={200}
                loading="lazy"
                className="min-h-20"
              />
              <div className=" pl-2 pr-2 flex flex-col space-y-3">
              <div>
                <p className=" w-3/4 overflow-ellipsis font-semibold text-sm">Shoe Luis</p>
              </div>
              <div>
                <p className=" w-3/4 overflow-ellipsis text-sm">Shoe Luis vitton for sale contact me</p>
              </div>
              <div className="flex justify-between">
                <span className="te text-sm font-semibold">
                  <p>N 745.00</p>
                </span>
                <span className="text-base">
                  <InfoOutlined fontSize="inherit" />
                </span>
              </div>
              </div>
            </div>
            </Link>
          </swiper-slide>
          
          <swiper-slide lazy="true">
            <div className="flex flex-col shadow-md rounded-md space-y-3 h-[16.5rem]" onClick={(e)=>e.stopPropagation()}>
              <Image
                src={DealerPic2}
                alt="DealerPic"
                width={300}
                height={200}
                loading="lazy"
                className="min-h-20"
              />
              <div className=" pl-2 pr-2 flex flex-col space-y-3">
              <div>
                <p className=" w-3/4 overflow-ellipsis font-semibold text-sm">Shoe Luis</p>
              </div>
              <div>
                <p className=" w-3/4 overflow-ellipsis text-sm">Shoe Luis vitton for sale contact me</p>
              </div>
              <div className="flex justify-between">
                <span className="text-sm font-semibold">
                  <p>N 745.00</p>
                </span>
                <span className="text-base">
                  <InfoOutlined fontSize="inherit" />
                </span>
              </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide lazy="true">
            <div className="flex flex-col shadow-md rounded-md space-y-3 h-[16.5rem]">
              <Image
                src={DealerPic}
                alt="DealerPic"
                width={300}
                height={200}
                loading="lazy"
                className="min-h-20"
              />
              <div className=" pl-2 pr-2 flex flex-col space-y-3">
              <div>
                <p className=" w-3/4 overflow-ellipsis font-semibold text-sm">Shoe Luis</p>
              </div>
              <div>
                <p className=" w-3/4 overflow-ellipsis text-sm">Shoe Luis vitton for sale contact me</p>
              </div>
              <div className="flex justify-between">
                <span className="text-sm font-semibold">
                  <p>N 745.00</p>
                </span>
                <span className="text-base">
                  <InfoOutlined fontSize="inherit" />
                </span>
              </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide lazy="true">
            <div className="flex flex-col shadow-md rounded-md space-y-3 h-[16.5rem]">
              <Image
                src={DealerPic2}
                alt="DealerPic"
                width={300}
                height={200}
                className="min-h-20"
                loading="lazy"
              />
              <div className=" pl-2 pr-2 flex flex-col space-y-3">
              <div>
                <p className=" w-3/4 overflow-ellipsis font-semibold text-sm">Shoe Luis</p>
              </div>
              <div>
                <p className=" w-3/4 overflow-ellipsis text-sm">Shoe Luis vitton for sale contact me</p>
              </div>
              <div className="flex justify-between">
                <span className="text-sm font-semibold">
                  <p>N 745.00</p>
                </span>
                <span className="text-base">
                  <InfoOutlined fontSize="inherit" />
                </span>
              </div>
              </div>
            </div>
          </swiper-slide>
        </swiper-container>
      </div>
   
  );
};

export default Showcase;


{/* <Card
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
            </Card> */}