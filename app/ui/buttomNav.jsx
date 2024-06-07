"use client";
import { ArrowUpward } from "@mui/icons-material";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import BottomMenu from "./utilComp/ButtomMenu";
const ButtomNav = () => {
  const [show, setShow] = useState(true);
  const init = useRef(0);
  const init2 = useRef(init);

  useEffect(() => {
    window.onscroll = () => {
      init.current = window.scrollY;
      setTimeout(() => (init2.current = init.current), 2000);
      if (init.current > init2.current) {
        setShow(false);
      } else setShow(true);
    };
  }, [show]);

  return (
    <div className=" text-white flex flex-col  w-full">
      <div className="flex flex-col items-center justify-center space-y-1 bg-indigo-400 p-1 text-sm ">
        <span>
          <Link href={"#"}>
            <ArrowUpward fontSize="inherit" />
          </Link>
        </span>
        <p>Back to Top</p>
      </div>
      <div className="hidden bg-indigo-500 md:block">
        <div className=" flex gap-4 ml-auto  justify-start p-2 flex-wrap text-sm h-24">
          <p>My Account</p>
          <p>My Orders</p>
          <p>My List</p>
          <p>Open a shop on Mymart</p>
          <p>Customer Service</p>
        </div>
      </div>
      <div className="flex flex-col justify-start bg-[#4f08ed] space-y-2 pb-16">
        <div className="flex justify-between m-2">
          <span className="flex gap-1">
            <span className="text- text-green-500">&#x1F310;</span>
            <p>English</p>
          </span>
          <span className="flex gap-1">
            <span>&#x20A6;</span>
            <p>NGN-NG Naira</p>
          </span>
          <span className="flex gap-1">
            <span>&#x1F1F3;&#x1F1EC;</span>

            <p>Nigeria</p>
          </span>
        </div>
        <div className="flex justify-center items-center">
          <p>Already a customer? Sign in</p>
        </div>
        <div className="flex justify-center items-center gap-4">
          <p>Conditions of Use </p>
          <p>Privacy Notice</p>
        </div>
        <div className="flex justify-center items-center gap-4 text-sm">

          <p>@ 2022-2024, Mymart.com, Inc</p>
        </div>
      </div>
      <div
        className={`fixed bottom-0 bottom_menu opacity-0 shadow w-full ${
          show
            ? "visible opacity-100 transition-opacity ease-linear "
            : "invisible opacity-0 transition-opacity ease-linear"
        }`}
      >
        <BottomMenu />
      </div>
    </div>
  );
};

export default ButtomNav;
