"use client"
import { AppBar, Box, Stack, Toolbar, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import HomeIcon from "@mui/icons-material/HomeOutlined";
import PersonIcon from "@mui/icons-material/Person";
import ForumIcon from "@mui/icons-material/ForumOutlined";
import NewspaperIcon from "@mui/icons-material/NewspaperOutlined";
import { usePathname } from "next/navigation";
import Link from "next/link";

const BottomMenu = ({ show }) => {
  const [col, setCol] = useState("");
  const [col4, setCol4] = useState("");
  const  pathname = usePathname();
  const path = pathname?.split("/");
  
  useEffect(() => {
    if (pathname === "/") {
      setCol("#4f08ed");
    } else setCol("grey");
    if (path?.includes("Account")) {
      setCol4("#4f08ed");
    } else setCol4("grey");
  }, [pathname, path]);

  return (
    <div
      component={"div"}
      className="h-fit"
      
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-around",
          padding: 1,
          alignItems: "center",
        }}
      >
        <Box component={"span"}>
          <Link href={'#'}>
          
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
        <Box component={"span"}>
          <Link className="items-center"
            href={"/Discover"}
          >
            <Stack  className="flex flex-col justify-center items-center">
              <NewspaperIcon sx={{ color: "grey" }} fontSize="meduim" />
              <Typography
                sx={{
                  color: "GrayText",
                  textRendering: "optimizeLegibility",
                  fontSize: 14,
                }}
              >
                Discover
              </Typography>
            </Stack>
          </Link>
        </Box>
        <Box component={"span"}>
          <Link  className = "items-center" href={'#'}
          >
            <Stack  className="flex flex-col justify-center items-center">
              <ForumIcon sx={{ color: "grey" }} fontSize="meduim" />
              <Typography
                sx={{
                  color: "GrayText",
                  textRendering: "optimizeLegibility",
                  fontSize: 14,
                }}
              >
                Messages
              </Typography>
            </Stack>
          </Link>
        </Box>
        <Box component={"span"}>
          <Link
            style={{
              alignItems: "center",
              textDecoration: "none",
            }}
            href={""}
          >
            <Stack  className="flex flex-col justify-center items-center">
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
      </Toolbar>
    </div>
  );
};

export default BottomMenu;
