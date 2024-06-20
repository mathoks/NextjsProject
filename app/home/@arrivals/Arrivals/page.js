import LinkButton from "@/app/ui/Buttons/LinkButton";
import AllActions from "@/app/ui/utilComp/AllActions";
import ProgressBar from "@/app/ui/utilComp/ProgressBar";
import { auth } from "@/auth";
import { FeaturedPlayListOutlined, InboxOutlined, MailOutlined, MessageOutlined, RequestQuoteOutlined, ReviewsOutlined, Settings } from "@mui/icons-material";
import { Avatar, Divider } from "@mui/material";
import dynamic from "next/dynamic";
import React from "react";

// const ProgressBar = dynamic(()=>import('../../ui/utilComp/ProgressBar'), {ssr: false})

const actionTab = [
  { id: 0, tag: "Inquiries", path: "/Inquries", status: "unread" , icon: <InboxOutlined className={"text-gray-400"} fontSize="medium"/>},
  { id: 1, tag: "My Wishlist", path: "/wishList", status: 'read' , icon: <FeaturedPlayListOutlined className={"text-gray-400"} fontSize="medium"/> },
  { id: 2, tag: "Sourcing Request", path: "/Request", status: 'read', icon: <RequestQuoteOutlined className={"text-gray-400"} fontSize="medium"/> },
  { id: 3, tag: "Reviews & Ratings", path: "/Reviews", status: 'read', icon: <ReviewsOutlined className={"text-gray-400"} fontSize="medium"/>},
  { id: 4, tag: "Messages", path: "/Messages" , status: 'unread', icon: <MessageOutlined className={"text-gray-400"} fontSize="medium"/>},
];

const Proto = ({ tag, path, status, icon}) => {
  return (
    <span className="flex justify-between items-center text-sm">
          <span className="flex space-x-2">
            {icon}
            <span>{tag}</span>
          </span>
          <LinkButton path={path} unRead = {status} />
        </span>
  )
}
const page = async () => {
  // const session = await auth();
  // const {
  //   user: { name, image },
  // } = session;
  return (
    <div className="h-screen bg-gray-100">
      <header className="bg-[#6A0DAD] h-44 p-4 text-white flex-col space-y-2">
        <span className="flex justify-end">
          <Settings fontSize="medium" />
        </span>

        {/* <div className="flex space-x-2 items-center">
          <Avatar src={image} />
          <span className="flex flex-col space-y-1">
            <p className="f font-semibold">{name}</p>
            <p className="text-sm">Lamb industries limited</p>
          </span>
        </div> */}
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

      <AllActions tabs={actionTab} />
      {/* <section className="flex flex-col space-y-8 bg-white rounded-md p-4">
        {actionTab.map((item) => (
          <Proto key={item.id} {...item} />
        ))}    
      </section> */}
    </div>
  );
};

export default page;
