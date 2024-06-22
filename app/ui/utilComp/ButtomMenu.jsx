 "use client";
import { Box, Chip, Stack, Toolbar, Typography } from "@mui/material";
import React  from "react";
import HomeIcon from "@mui/icons-material/HomeOutlined";
import PersonIcon from "@mui/icons-material/Person";
import ForumIcon from "@mui/icons-material/ForumOutlined";
import NewspaperIcon from "@mui/icons-material/NewspaperOutlined";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { auth } from "@/auth";

const BottomMenu =  () => {
  // const [col, setCol] = useState("");
  // const [col4, setCol4] = useState("");
  const pathname = usePathname();
  const path = pathname?.split("/");
  const session = useSession();
  const userId = session?.data?.user?.name
  
  

  return (
    <Toolbar className="flex  items-center justify-between p-4 shadow-inner text_shadow px-6">
      <Box component={"div"}>
        <Link href={"/home"}>
          <Stack className="flex flex-col justify-center items-center">
            <Chip sx={{'& .MuiChip-icon': {color: pathname === '/home' ? 'white' : 'gray', ml: 2}}} className={` ${pathname === '/home' ?  'bg-[#6A0DAD] text-white  ' : 'bg-transparent'}`} icon={<HomeIcon  fontSize="small" />} />
            <span className={`text-sm ${pathname === '/home' ? 'text-[#6A0DAD] bg-opacity-80 ' : 'text-gray-800'}`}>Home</span>
          </Stack>
        </Link>
      </Box>
      <Box component={"div"}>
        <Link className="items-center" href={"/Discover"}>
          <Stack className="flex flex-col justify-center items-center">
          <Chip  sx={{'& .MuiChip-icon': {color: pathname === '/Discover' ? 'white' : 'gray', ml: 2}}} className={` ${pathname === '/Discover' ?  'bg-[#6A0DAD] text-white  ' : 'bg-transparent'}`} icon={<NewspaperIcon  fontSize="small" />} />
          <span className={`text-sm ${pathname === '/Discover' ? 'text-[#6A0DAD] bg-opacity-80 ' : 'text-gray-800'}`}>Discover</span>
          </Stack>
        </Link>
      </Box>
      <Box component={"div"}>
        <Link className="items-center" href={"#"}>
          <Stack className="flex flex-col justify-center items-center">
            <Chip sx={{'& .MuiChip-icon': {color: pathname === '/Messages' ? 'white' : 'gray', ml: 2}}} className={` ${pathname === '/Messages' ?  'bg-[#6A0DAD] text-white  ' : 'bg-transparent'}`} icon={<ForumIcon className="text-white" fontSize="small" />} />
            <span className={`text-sm ${pathname === '/Messages' ? 'text-[#6A0DAD] bg-opacity-80 ' : ' text-gray-800'}`}>Messages</span>
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
              : '/auth/login'
          }
        >
          {/* async()=> {if(session.status === "unauthenticated") {"use server"; signIn()} else console.log(session.status) }} */}
          <Stack className="flex flex-col justify-center items-center">
            <Chip
              sx={{'& .MuiChip-icon': {color: path.includes('Dashboard') || path.includes('auth') ? 'white' : 'gray', ml: 2,}}}
              className={`${pathname === '/Dashboard' ||  pathname === '/auth/login' ?  'bg-[#6A0DAD] MuiChip-label bg-opacity-80 flex ' : 'bg-transparent'}`}
              icon={<PersonIcon   fontSize="small" />}/>
              <span className={`text-sm ${pathname === '/Dashboard' ||  pathname === '/auth/login'? 'text-[#6A0DAD]' : 'text-gray-800'}`}>My Account</span>
          </Stack>
        </Link>
      </Box>
      
    </Toolbar>
  );
};

export default BottomMenu;
