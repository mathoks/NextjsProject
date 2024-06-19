"use client";
import { AppBar, Box, Stack, Toolbar, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import HomeIcon from "@mui/icons-material/HomeOutlined";
import PersonIcon from "@mui/icons-material/Person";
import ForumIcon from "@mui/icons-material/ForumOutlined";
import NewspaperIcon from "@mui/icons-material/NewspaperOutlined";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";

const BottomMenu = () => {
  const [col, setCol] = useState("");
  const [col4, setCol4] = useState("");
  const pathname = usePathname();
  const path = pathname?.split("/");
  const session = useSession();
  const userId = session?.data?.user?.name
  useEffect(() => {
    if (pathname === "/home") {
      setCol("#6A0DAD");
    } else setCol("black");
    if (path?.includes("Dashboard")) {
      setCol4("#6A0DAD");
    } else setCol4("black");
  }, [pathname, path]);

  return (
    <div className="flex  items-center justify-between p-3 shadow-inner text_shadow ">
      {/* <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-around",
          padding: 1,
          alignItems: "center",
        }}
      > */}
      <Box component={"div"}>
        <Link href={"#"}>
          <Stack className="flex flex-col justify-center items-center">
            <HomeIcon sx={{ color: col }} fontSize="medium" />
            <Typography
              sx={{
                color: col,
                textRendering: "optimizeLegibility",
                fontSize: 14,
              }}
            >
              Home
            </Typography>
          </Stack>
        </Link>
      </Box>
      <Box component={"div"}>
        <Link className="items-center" href={"/Discover"}>
          <Stack className="flex flex-col justify-center items-center">
            <NewspaperIcon sx={{ color: "black" }} fontSize="meduim" />
            <Typography
              sx={{
                color: "black",
                textRendering: "optimizeLegibility",
                fontSize: 14,
              }}
            >
              Discover
            </Typography>
          </Stack>
        </Link>
      </Box>
      <Box component={"div"}>
        <Link className="items-center" href={"#"}>
          <Stack className="flex flex-col justify-center items-center">
            <ForumIcon sx={{ color: "black" }} fontSize="meduim" />
            <Typography
              sx={{
                color: "black",
                textRendering: "optimizeLegibility",
                fontSize: 14,
              }}
            >
              Messages
            </Typography>
          </Stack>
        </Link>
      </Box>
      <Box component={"div"}>
        <Link
          style={{
            alignItems: "center",
            textDecoration: "none",
          }}
          href={
            session.status === "authenticated"
              ? `/Dashboard/${encodeURIComponent(userId)}`
              : session.status === "loading"
              ? "#"
              : "auth/login"
          }
        >
          {/* async()=> {if(session.status === "unauthenticated") {"use server"; signIn()} else console.log(session.status) }} */}
          <Stack className="flex flex-col justify-center items-center">
            <PersonIcon sx={{ color: col4 }} fontSize="meduim" />
            <Typography
              sx={{
                color: col4,
                textRendering: "optimizeLegibility",
                fontSize: 14,
              }}
            >
              My Account
            </Typography>
          </Stack>
        </Link>
      </Box>
      {/* </Toolbar> */}
    </div>
  );
};

export default BottomMenu;
