"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useCallback, useState } from "react";
import { useEffect } from "react";
import { useScrollTrigger } from "@mui/material";

const Tab2 = ({ params }) => {
  

  const [visi, setvisi] = useState(true);
  const [active, setactive] = useState([false, false, false]);

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 1,
  });
  const handleScroll = useCallback(function scroll(e) {
    const focal = document?.getElementById("focal").getBoundingClientRect();
    const productDiv = document
      ?.getElementById("product")
      .getBoundingClientRect();
    const aboutDiv = document?.getElementById("abouts").getBoundingClientRect();
    const recoDiv = document?.getElementById("reco").getBoundingClientRect();

    if (e.type === "click") {
      if (e.target.innerText === "Products" && active[1] === false) {
        window.scrollBy({ top: productDiv.top - focal.bottom });
      } else if (e.target.innerText === "recommended" && active[2] === false) {
        window.scrollBy({ top: recoDiv.top - focal.bottom });
      } else {
      }
    }

    if (
      aboutDiv.top - focal.bottom <= 50 &&
      aboutDiv.bottom - focal.bottom > 120
    ) {
      setactive([...[(active[0] = true)], (active[1] = false)]);
      
    } else if (
      productDiv.top - focal.bottom <= 120 &&
      productDiv.bottom - focal.bottom > 5
    ) {
      setactive([...[(active[0] = false)], (active[1] = true)]);
      
    } else {
      setactive(
        [...[(active[0] = false)], (active[1] = false)],
        (active[2] = true)
      );
    }
  }, []);

  useEffect(() => {
    if (trigger) setvisi(false);
    else setvisi(true);
    window.addEventListener("scroll", handleScroll);
    return ()=> window.removeEventListener("scroll", handleScroll);
  }, [handleScroll, trigger]);
  return (
    <div
      className={`px-4 ${
        visi
          ? "invisible transition duration-500 opacity-100 h-0 "
          : "visible transition duration-500 opacity-100 "
      }`}
    >
      <ul
        role="subTab"
        className="flex justify-between items-center  text-sm text-slate-100"
      >
        <li
          value={0}
          className={` pb-3 ${
            active[0]
              ? "text-slate-100 border-b-[3px] transition duration-500 border-slate-100"
              : "border-none transition duration-500 text-slate-300 "
          }`}
        >
          <Link scroll href={{ pathname: `/store/${params}` }}>
            About
          </Link>
        </li>
        <li
          value={1}
          className={` pb-3 ${
            active[1]
              ? "text-slate-100 border-b-[3px] transition duration-500  border-slate-100"
              : "border-none transition duration-500 text-slate-300"
          }`}
        >
          <Link
            href={{ pathname: `/store/${params}/products` }}
            onClick={handleScroll}
          >
            Products
          </Link>
        </li>
        <li
          value={2}
          className={`pb-3 ${
            active[2]
              ? "text-indigo-600 border-b-[3px]  border-violet-600"
              : "border-none text-slate-300 transition duration-500"
          }`}
        >
          <Link
            href={`${encodeURIComponent(params)}/recommended`}
            scroll
            onClick={handleScroll}
          >
            Recommended
          </Link>
        </li>
      </ul>
      {/* <hr className="" /> */}
    </div>
  );
};

export default Tab2;
