"use client";
import React, { useEffect, useRef } from "react";
import BottomMenu from "./utilComp/ButtomMenu";
import { useAppDispatch, useAppSelector } from "../lib/hooks/hooks";
import { setNavToggle } from "../lib/features/Nav/navSlice";

function debounce(func, delay) {
  let timeout;
  return function debounced() {
    clearTimeout(timeout);
    timeout = setTimeout(() => func, delay);
  };
}

// let throttle = function (func, limit) {
//   let inthrottle;

//   return function () {
//     if (!inthrottle) {
//       debounce(func, 1000);
//       inthrottle = true;
//       setTimeout(() => {
//         inthrottle = false;
//       }, limit);
//     }
//   };
// };

const ButtomNav = () => {
  const dispatch = useAppDispatch();
  const showState = useAppSelector((state) => state.nav.navToggle);
  const init = useRef(typeof window !== "undefined" ? window.scrollY : 0);
  const init2 = useRef(init);

  useEffect(() => {
    const handle = () => {
      init.current = window.scrollY;
      setTimeout(() => (init2.current = init.current), 2000);

      if (init.current > init2.current && init.current - init2.current > 50) {
        debounce(dispatch(setNavToggle(false), 2000));
      } else if (
        (init.current < init2.current && init2.current - init.current > 50) ||
        init.current === 0
      )
        debounce(dispatch(setNavToggle(true)), 2000);
      else {
      }
      
    };

    window.addEventListener("scroll", handle);
    return () => window.removeEventListener("scroll", handle);
  }, [dispatch]);

  return (
    <div className=" text-white flex flex-col  w-full">
      <div
        className={`fixed bottom-0  bottom_menu opacity-0 bg-white shadow-md w-full ${
          showState
            ? "visible opacity-100 transition-opacity"
            : "invisible opacity-0 "
        }`}
      >
        <BottomMenu />
      </div>
    </div>
  );
};

export default ButtomNav;
