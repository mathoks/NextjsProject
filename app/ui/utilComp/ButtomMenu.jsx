"use client";
import { Box, Chip, Stack, Toolbar } from "@mui/material";
import React from "react";
import HomeIcon from "@mui/icons-material/HomeOutlined";
import PersonIcon from "@mui/icons-material/Person";
import ForumIcon from "@mui/icons-material/ForumOutlined";
import NewspaperIcon from "@mui/icons-material/NewspaperOutlined";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useSession } from "next-auth/react";

const BottomMenu = () => {
  const pathname = usePathname();
  const path = pathname?.split("/");
  const session = useSession();
  const userId = session?.data?.user?.name;

  return (
    <Toolbar className="flex  items-center justify-between p-2 shadow-inner text_shadow px-6">
      <Box component={"div"}>
        <Link href={"/home"}>
          <Stack className="flex flex-col justify-center items-center">
            <Chip
              sx={{
                "& .MuiChip-icon": {
                  color: pathname === "/home" ? "white" : "gray",
                  ml: 2,
                },
                bgcolor: pathname === "/home" ? "#6A0DAD" : "transparent",
              }}
              icon={<HomeIcon fontSize="small" />}
            />
            <span
              className={`text-[12px] ${
                pathname === "/home"
                  ? "text-[#6A0DAD] bg-opacity-80 "
                  : "text-gray-800"
              }`}
            >
              Home
            </span>
          </Stack>
        </Link>
      </Box>
      <Box component={"div"}>
        <Link className="items-center" href={"/Discover"}>
          <Stack className="flex flex-col justify-center items-center">
            <Chip
              sx={{
                "& .MuiChip-icon": {
                  color: pathname === "/Discover" ? "white" : "gray",
                  ml: 2,
                },
                bgcolor: pathname === "/Discover" ? "#6A0DAD" : "transparent",
              }}
              icon={<NewspaperIcon fontSize="small" />}
            />
            <span
              className={`text-[12px] ${
                pathname === "/Discover"
                  ? "text-[#6A0DAD] bg-opacity-80 "
                  : "text-gray-800"
              }`}
            >
              Discover
            </span>
          </Stack>
        </Link>
      </Box>
      <Box component={"div"}>
        <Link className="items-center" href={"/Messages"}>
          <Stack className="flex flex-col justify-center items-center">
            <Chip
              sx={{
                "& .MuiChip-icon": {
                  color: pathname === "/Messages" ? "white" : "gray",
                  ml: 2,
                },
                bgcolor: pathname === "/Messages" ? "#6A0DAD" : "transparent",
              }}
              icon={<ForumIcon className="text-white" fontSize="small" />}
            />
            <span
              className={`text-[12px] ${
                pathname === "/Messages"
                  ? "text-[#6A0DAD] bg-opacity-80 "
                  : " text-gray-800"
              }`}
            >
              Messages
            </span>
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
            session?.status === "authenticated"
              ? `/Dashboard/${encodeURIComponent(userId)}`
              : "/auth/login"
          }
        >
          {/* async()=> {if(session.status === "unauthenticated") {"use server"; signIn()} else console.log(session.status) }} */}
          <Stack className="flex flex-col justify-center items-center">
            <Chip
              sx={{
                "& .MuiChip-icon": {
                  color:
                    path.includes("Dashboard") || path.includes("auth")
                      ? "white"
                      : "gray",
                  ml: 2,
                },
                bgcolor:
                    path.includes("Dashboard") || path.includes("auth")
                      ? "#6A0DAD"
                      : "transparent",
              }}
              icon={<PersonIcon fontSize="small" />}
            />
            <span
              className={`text-[12px] ${
                path.includes("Dashboard") || path.includes("auth")
                  ? "text-[#6A0DAD]"
                  : "text-gray-800"
              }`}
            >
              My Account
            </span>
          </Stack>
        </Link>
      </Box>
    </Toolbar>
  );
};

export default BottomMenu;
