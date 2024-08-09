"use client";
import {
  BuildOutlined,
  ChairAltOutlined,
  PhoneAndroid,
  RoofingOutlined,
  SelectAllOutlined,
  ShoppingBagOutlined,
  TvOutlined,
} from "@mui/icons-material";
import React from "react";
import { ListItem, Chip, Paper } from "@mui/material";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const Tab = () => {
  const params = useSearchParams();
  const index = params.get("category") || "all Stores";
  // || 'all Stores';

  const Tabs = [
    {
      id: 0,
      path: `?${new URLSearchParams({ category: "all Stores" })}`,
      val: `all Stores`,
      icon: <SelectAllOutlined fontSize="inherit" />,
    },
    {
      id: 1,
      path: `?${new URLSearchParams({ category: "phone" })}`,
      val: "phone",
      icon: <PhoneAndroid fontSize="inherit" />,
    },
    {
      id: 2,
      path: `?${new URLSearchParams({ category: "furniture" })}`,
      val: "furniture",
      icon: <ChairAltOutlined fontSize="inherit" />,
    },
    {
      id: 3,
      val: "fashion",
      path: `?${new URLSearchParams({ category: "fashion" })}`,
      icon: <ShoppingBagOutlined fontSize="inherit" />,
    },
    {
      id: 4,
      val: "machinery",
      path: `?${new URLSearchParams({ category: "machinery" })}`,
      icon: <BuildOutlined fontSize="inherit" />,
    },
    {
      id: 5,
      path: `?${new URLSearchParams({ category: "building-Materials" })}`,
      val: "building-Materials",
      icon: <RoofingOutlined fontSize="inherit" />,
    },
    {
      id: 6,
      path: `?${new URLSearchParams({ category: "electronics" })}`,
      val: "electronics",
      icon: <TvOutlined fontSize="inherit" />,
    },
  ];

  return (
    <ul className="flex space-x-4 overflow-x-scroll  z-50   p-2 px-6 w-[90%] lg:w-[98%]">
      {Tabs.map(({ val, path, id, icon }) => {
        return (
          <li
            key={id}
            className={` min-w-fit text-sm  ring-1 ring-white items-center text-nowrap rounded-full px-1.5 py-0.5  ${
              index === val
                ? "text-white  bg-[#6A0DAD] tab_text"
                : "text-slate-600 bg-white"
            }`}
          >
            <Link
              href={path}
              className={`flex  min-w-fit space-x-2  items-center`}
            >
              <span>{icon}</span>
              <span className="text-nowrap shrink-0">{val}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Tab;
