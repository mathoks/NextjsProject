import ProgressBar from "@/app/ui/utilComp/ProgressBar";
import { auth } from "@/auth";
import { Settings } from "@mui/icons-material";
import { Avatar, Divider } from "@mui/material";
import dynamic from "next/dynamic";
import React from "react";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";

// const ProgressBar = dynamic(()=>import('../../ui/utilComp/ProgressBar'), {ssr: false})
const page = async () => {
  const session = await auth();
  const {
    user: { name, image },
  } = session;
  return (
    <div className="h-screen bg-gray-50">
      <header className="bg-[#6A0DAD] h-44 p-4 text-white flex-col space-y-2">
        <span className="flex justify-end">
          <Settings fontSize="medium" />
        </span>

        <div className="flex space-x-2 items-center">
          <Avatar src={image} />
          <span className="flex flex-col space-y-1">
            <p className="f font-semibold">{name}</p>
            <p className="text-sm">Lamb industries limited</p>
          </span>
        </div>
        <div className="bg-white flex flex-col rounded-t-md h-24 p-4 text-black space-y-3 z-40 shadow">
          <span className="flex justify-between items-center">
            <p>Complete your profile</p>
            <button className="py-1 px-4 bg-[#6A0DAD] text-white rounded-full">
              Go
            </button>
          </span>
          <span>
            <ProgressBar value={70} />
          </span>
        </div>
      </header>
      <section className="flex justify-between text-[12px] items-center bg-white text-black p-4 rounded-md mt-10 w-screen mx-4">
        <div className="flex flex-col justify-center items-center">
          <span>
            <SubscriptionsOutlinedIcon fontSize="medium" />
          </span>
          <span>Subscription</span>
        </div>
        <span>
          <Divider variant="inset" orientation="vertical" />
        </span>
        <div className="flex flex-col justify-center items-center">
          <span>
            <FavoriteBorderOutlinedIcon fontSize="medium" />
          </span>
          <span>My Favorites</span>
        </div>
        
          <Divider variant="inset"  orientation="vertical" sx={{color: 'red'}} />
       
        <div className="flex flex-col justify-center items-center">
          <span>
            <FavoriteBorderOutlinedIcon fontSize="medium" />
          </span>
          <span>Preference</span>
        </div>
        <span>
          <Divider variant="inset" orientation="vertical" />
        </span>
        <div className="flex flex-col justify-center items-center">
          <span>
            <HistoryOutlinedIcon fontSize="medium"/>
          </span>
          <span>Viewed</span>
        </div>
      </section>
    </div>
  );
};

export default page;
