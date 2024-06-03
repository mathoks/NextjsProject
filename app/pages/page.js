"use client";
import React, { useEffect, useState } from "react";
import { useSubnavhook } from "../lib/hooks/useSubnavhook";
import { useScrollTrigger } from "@mui/material";

function debounce(func, delay) {
  let timeout;
  return function debounced() {
    clearTimeout(timeout);
    timeout = setTimeout(() => func, delay);
  };
}

const Page = () => {
  const [Dom, setDom] = useState(false);
const [Prop, setProp] = useState(false)
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  let throttle = function (func, limit) {
    let inthrottle;

    return function () {
      if (!inthrottle) {
        debounce(func, 1000)
        inthrottle = true;
        setTimeout(() => {
          inthrottle = false;
        }, limit);
      }
    
    };
  };

  useEffect(() => {
    
    if (trigger) {
      throttle(setDom(true),2000);
    } else {
      throttle(setDom(false), 2000);
    }
  }, [trigger]);

 
  // useEffect(()=>{
  //   window.addEventListener("popstate", ()=>{
  //     setProp((prev)=> !prev)
  //   })
  //   return ()=>  window.removeEventListener("popstate", ()=>{
  //     setProp(true)
  //   })
 // },[] )

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
