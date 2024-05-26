"use client";

import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import React, { useRef } from "react";
import { InfoOutlined } from "@mui/icons-material";
import DealerPic from "@/app/assets/photo1.jpeg";
import DealerPic2 from "@/app/assets/photo5.jpeg";
import { register } from "swiper/element-bundle";
//import styles from "@/app/ui/swiper.module.css";
import { MakeEllipsis } from "../lib/utills/Makelipsis";
import dynamic from "next/dynamic";

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

  // const move = () => {
  //   return Navi("/users/supplier/product/1", { state: "product" });
  // };

  // const gotoPro = () => {
  //   Navi("/users/supplier", { state: "section-1" });
  // };
  return (
    // <Stack
    //   direction={"column"}
    //   sx={{
    //     backgroundColor: "rgba(255,255,255,0.2)",
    //     backgroundImage:
    //       "linear-gradient(to bottom, rgba(255,255,255,0.5), rgba(255,255,255,0.5))",
    //   }}
    //   gap={1}
    //   p={1}
    //   pt={2}
    //   borderRadius={"15px 15px 15px 15px"}
    //   boxShadow={"0px 3px 10px 0px rgba(0,0,0,0.2)"}
    // //   className={"mainContainer"}
    // >
    //   <Divider variant="fullWidth" sx={{ pt: 1 }} />
      <Box  className={"swiper"}>
        <swiper-container
          ref={swiperDiv}
          slides-per-view="2"
          // navigation="true"
          pagination="true"
          // pagination-type="fraction"
          space-between="15"
         // className="rootswiper"
        >
          <swiper-slide lazy="true">
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
                  src={product?.image}
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
            </Card>
          </swiper-slide>
        </swiper-container>
      </Box>
    // </Stack>
  );
};

export default Showcase;
