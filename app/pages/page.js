"use client";
import React, { useEffect, useState } from "react";
import { useSubnavhook } from "../lib/hooks/useSubnavhook";
import { useScrollTrigger } from "@mui/material";
import { setLazyProp } from "next/dist/server/api-utils";

function debounce(func, wait) {
  let timeOut;
  return function (...args) {
    clearTimeout(timeOut);
    timeOut = setInterval(() => {
      func.apply(this, args);
    }, wait);
  };
}
const Page = () => {
  const [Dom, setDom] = useState(false);
const [Prop, setProp] = useState(false)
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  useEffect(() => {
    console.log(window.scrollY);
    if (trigger) {
      setDom(true);
    } else {
      setDom(false);
    }
  }, [trigger]);

 
  useEffect(()=>{
    window.addEventListener("popstate", ()=>{
      setProp((prev)=> !prev)
    })
    return ()=>  window.removeEventListener("popstate", ()=>{
      setProp(true)
    })
  },[] )

  const Wrapper = useSubnavhook(Dom, Prop);

  return (
    <div className="">
      <div id="userPage" className=" h-auto">
        {Wrapper}
      </div>
    </div>
  );
};

export default Page;
