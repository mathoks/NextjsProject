"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useCallback, useState } from "react";
import { useEffect } from "react";
import { useScrollTrigger } from "@mui/material";

const Tab2 = ({ params }) => {
  const path = usePathname();

  const [visi, setvisi] = useState(true);
  const [active, setactive] = useState([false, false, false]);

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 1,
  });
  const handleScroll = useCallback(function scroll() {
    const focal = document?.getElementById("focal").getBoundingClientRect();
    const productDiv = document
      ?.getElementById("product")
      .getBoundingClientRect();
    const aboutDiv = document?.getElementById("abouts").getBoundingClientRect();
   
    if (
      aboutDiv.top - focal.bottom <= 50 &&
      aboutDiv.bottom - focal.bottom > 120
    ) {
      setactive([...[(active[0] = true)], (active[1] = false)]);
      console.log(active);
    } else if (
      productDiv.top - focal.bottom <= 120 &&
      productDiv.bottom - focal.bottom > 5
    ) {
      setactive([...[(active[0] = false)], (active[1] = true)]);
      console.log(active);
    } else {
      setactive(
        [...[(active[0] = false)], (active[1] = false)],
        (active[2] = true)
      );
    }
  }, []);

  useEffect(() => {
    if(trigger)setvisi(false);
   else(setvisi(true));
    window.addEventListener("scroll", handleScroll);
  }, [handleScroll, trigger]);
  return (
    <div
      className={`${
        visi
          ? "invisible transition duration-500 opacity-100 h-0 "
          : "visible transition duration-500 opacity-100 "
      }`}
    >
      <ul
        role="subTab"
        className="flex justify-between items-center pl-4 pr-4 text-sm text-gray-800"
      >
        <li
          value={0}
          className={` pb-3 ${
            active[0]
              ? "text-indigo-600 border-b-2 transition duration-500 border-violet-600"
              : "border-none transition duration-500 text-gray-500 "
          }`}
        >
          <Link href={{ pathname: `/store/${params}` }}>About</Link>
        </li>
        <li
          value={1}
          className={` pb-3 ${
            path.split("/").includes("products") || active[1]
              ? "text-indigo-600 border-b-2 transition duration-500  border-violet-600"
              : "border-none transition duration-500 text-gray-500"
          }`}
        >
          <Link href={{ pathname: `/store/${params}/products` }}>Products</Link>
        </li>
        <li
          value={2}
          className={`pb-3 ${
            path.split("/").includes("recommended") || active[2]
              ? "text-indigo-600 border-b-2  border-violet-600"
              : "border-none text-gray-500"
          }`}
        >
          <Link href={`${encodeURIComponent(params)}/recommended`} scroll>
            Recommended
          </Link>
        </li>
      </ul>
      <hr className="" />
    </div>
  );
};

export default Tab2;
