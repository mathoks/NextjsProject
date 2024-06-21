import ProgressBar from "@/app/ui/utilComp/ProgressBar";
import { auth } from "@/auth";
import { HelpCenterOutlined, Settings } from "@mui/icons-material";
import { Avatar, Divider } from "@mui/material";
import dynamic from "next/dynamic";
import React from "react";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import InsertEmoticonOutlinedIcon from '@mui/icons-material/InsertEmoticonOutlined';
import { FeaturedPlayListOutlined, InboxOutlined,  MessageOutlined, RequestQuoteOutlined, ReviewsOutlined } from "@mui/icons-material";
import AllActions from "@/app/ui/utilComp/AllActions";
import LinkButton from "@/app/ui/Buttons/LinkButton";


// const ProgressBar = dynamic(()=>import('../../ui/utilComp/ProgressBar'), {ssr: false})
const page = async () => {
  const session = await auth();

  const actionTab = [
    { id: 0, tag: "Inquiries", path: "/Inquries", status: "unread" , icon: <InboxOutlined className={"text-gray-400"} fontSize="medium"/>},
    { id: 1, tag: "My Wishlist", path: "/wishList", status: 'read' , icon: <FeaturedPlayListOutlined className={"text-gray-400"} fontSize="medium"/> },
    { id: 2, tag: "Sourcing Request", path: "/Request", status: 'read', icon: <RequestQuoteOutlined className={"text-gray-400"} fontSize="medium"/> },
    { id: 3, tag: "Reviews & Ratings", path: "/Reviews", status: 'read', icon: <ReviewsOutlined className={"text-gray-400"} fontSize="medium"/>},
    { id: 4, tag: "Messages", path: "/Messages" , status: 'unread', icon: <MessageOutlined className={"text-gray-400"} fontSize="medium"/>},
  ];
  const {
    user: { name, image },
  } = session;
  return (
    <div className="h-[90vh] bg-gray-100 flex flex-col space-y-4">
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
      <section className="flex justify-between text-[12px] items-center bg-white text-black p-4 rounded-md mt-10  mx-4">
        <div className="flex  flex-col justify-center items-center ">
          <span>
            <SubscriptionsOutlinedIcon fontSize="medium" />
          </span>
          <span>Subscription</span>
        </div>
        
          <Divider className="mx-auto" variant="inset" orientation="vertical" flexItem/>
        
        <div className="flex flex-col justify-center items-center">
          <span>
            <FavoriteBorderOutlinedIcon fontSize="medium" />
          </span>
          <span>My Favorites</span>
        </div>
        
          <Divider variant="inset" className="mx-auto" orientation="vertical"  flexItem/>
       
        <div className="flex flex-col justify-center items-center">
          <span>
            <InsertEmoticonOutlinedIcon fontSize="medium" />
          </span>
          <span>Preference</span>
        </div>
        
          <Divider variant="inset" className="mx-auto" orientation="vertical"  flexItem/>
        
        <div className="flex flex-col justify-center items-center">
          <span>
            <HistoryOutlinedIcon fontSize="medium"/>
          </span>
          <span>Viewed</span>
        </div>
      </section>
      <section>
        <AllActions tabs={actionTab}/>
      </section>
      <section className="flex justify-between bg-white rounded-md p-4 items-center mx-4 text-sm">
      
      <span className="flex space-x-2 text-black">
        <HelpCenterOutlined fontSize='medium' className={"text-gray-400"} />
        <span>Help Center</span>
      </span>
      <LinkButton path={'/help/center'} unRead={'read'} />
    
      </section>
    </div>
  );
};

export default page;
