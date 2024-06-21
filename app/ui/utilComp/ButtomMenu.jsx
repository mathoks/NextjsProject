"use client";
import { Box, Chip, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import HomeIcon from "@mui/icons-material/HomeOutlined";
import PersonIcon from "@mui/icons-material/Person";
import ForumIcon from "@mui/icons-material/ForumOutlined";
import NewspaperIcon from "@mui/icons-material/NewspaperOutlined";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useSession } from "next-auth/react";

const BottomMenu = () => {
  const [col, setCol] = useState("");
  const [col4, setCol4] = useState("");
  const pathname = usePathname();
  const path = pathname?.split("/");
  const session = useSession();
  const userId = session?.data?.user?.name
  
  // useEffect(() => {
  //   if (pathname === "/home") {
  //     setCol("#6A0DAD");
  //   } else setCol("black");
  //   if (pathname?.includes("Dashboard")) {
  //     setCol4("#6A0DAD");
  //   } else setCol4("black");
  // }, [pathname]);

  return (
    <div className="flex  items-center justify-between p-4 shadow-inner text_shadow px-2">
      {/* <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-around",
          padding: 1,
          alignItems: "center",
        }}
      > */}
      <Box component={"div"}>
        <Link href={"/home"}>
          <Stack className="flex flex-col justify-center items-center">
            <Chip  label={'Home'} className={` ${pathname === '/home' ?  'bg-[#6A0DAD] text-white  ' : 'bg-transparent'}`} icon={<HomeIcon className="text-white" fontSize="small" />} />
  
          </Stack>
        </Link>
      </Box>
      <Box component={"div"}>
        <Link className="items-center" href={"/Discover"}>
          <Stack className="flex flex-col justify-center items-center">
          <Chip clickable label={'Discover'} className={` ${pathname === '/Discover' ?  'bg-[#6A0DAD] text-white  ' : 'bg-transparent'}`} icon={<NewspaperIcon className="text-white" fontSize="small" />} />
          </Stack>
        </Link>
      </Box>
      <Box component={"div"}>
        <Link className="items-center" href={"#"}>
          <Stack className="flex flex-col justify-center items-center">
            <Chip clickable label={'Messages'} className={` ${pathname === '/Messages' ?  'bg-[#6A0DAD] text-white  ' : 'bg-transparent'}`} icon={<ForumIcon className="text-white" fontSize="small" />} />
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
              : '/auth/login'
          }
        >
          {/* async()=> {if(session.status === "unauthenticated") {"use server"; signIn()} else console.log(session.status) }} */}
          <Stack className="flex flex-col justify-center items-center">
            <Chip
              label={"My Account"}
              className={` ${pathname === '/Dashboard' ||  pathname === '/auth/login' ?  'bg-[#6A0DAD] MuiChip-label text-white flex ' : 'bg-transparent'}`}
              icon={<PersonIcon className="text-white" fontSize="small" />}/>
          </Stack>
        </Link>
      </Box>
      {/* </Toolbar> */}
    </div>
  );
};

export default BottomMenu;
