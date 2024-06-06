"use client";
import React, { useEffect, useRef, useState } from "react";
//import { useSubnavhook } from "../../lib/hooks/useSubnavhook";

import { useScrollTrigger } from "@mui/material";
import { useGethook, useSubnavhook } from "@/app/lib/hooks/useSubnavhook";

function debounce(func, delay) {
  let timeout;
  return function debounced() {
    clearTimeout(timeout);
    timeout = setTimeout(() => func, delay);
  };
}

const Page = () => {
  const targetRoot = useGethook("userPage");
  const [Dom, setDom] = useState(false);
  const [Prop, setProp] = useState(false);
  const ref = useRef();

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 1,
    //target: ref.current,
  });

  let throttle = function (func, limit) {
    let inthrottle;

    return function () {
      if (!inthrottle) {
        debounce(func, 50);
        inthrottle = true;
        setTimeout(() => {
          inthrottle = false;
        }, limit);
      }
    };
  };

  useEffect(() => {
    console.log(ref)
    if (trigger) {
      throttle(setDom(true), 100);
    } else {
      throttle(setDom(false), 100);
    }
  }, [trigger]);

  const Wrapper = useSubnavhook(Dom, Prop);

  return (
    <div
      id="userPage"
      ref={ref}
     // className=" h-screen overflow-y-scroll min-w-full"
    >
      {Wrapper}
    </div>
  );
};

export default Page;
