   "use client";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { useScrollTrigger } from "@mui/material";
import Loading from "@/app/loading";
import { useSubhook2 } from "@/app/lib/hooks/useSubhook2";

function debounce(func, delay) {
  let timeout;
  return function debounced() {
    clearTimeout(timeout);
    timeout = setTimeout(() => func, delay);
  };
}

const Page = () => {
  
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

  const ProductWrapper = useSubhook2(Dom, Prop);

  return (
    <div
      className=" bg-white"
    >
    <Suspense fallback={<Loading/>}>
{ProductWrapper}
      </Suspense>
    </div>
  );
};

export default Page
