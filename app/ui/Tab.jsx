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
   const index = params.get('category') || 'all Stores';
  // || 'all Stores';
  
  const Tabs = [
    {
      id: 0,
      path: `?${new URLSearchParams({'category': 'all Stores'})}`,
      val: `all Stores`,
      icon: <SelectAllOutlined fontSize="inherit" />,
    },
    { id: 1, path:`?${new URLSearchParams({'category': 'phone'})}`, val: "phone",  icon: <PhoneAndroid fontSize="inherit" /> },
    {
      id: 2,
      path:`?${new URLSearchParams({'category': 'furniture'})}`,
      val: "furniture",
      icon: <ChairAltOutlined fontSize="inherit" />,
    },
    {
      id: 3,
      val: "fashion",
      path:`?${new URLSearchParams({'category': 'fashion'})}`,
      icon: <ShoppingBagOutlined fontSize="inherit" />,
    },
    {
      id: 4,
      val: "machinery",
      path:`?${new URLSearchParams({'category': 'machinery'})}`,
      icon: <BuildOutlined fontSize="inherit" />,
    },
    {
      id: 5,
      path:`?${new URLSearchParams({'category': 'building-Materials'})}`,
      val: "building-Materials",
      icon: <RoofingOutlined fontSize="inherit" />,
    },
    {
      id: 6,
      path:`?${new URLSearchParams({'category': 'electronics'})}`,
      val: "electronics",
      icon: <TvOutlined fontSize="inherit" />,
    },
  ];

  return (
    <section
      className={`flex items-start justify-between  overflow-x-scroll gap-8 z-50   pb-0 w-[90%]`}
    >
      <Paper
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "nowrap",
          listStyle: "none", 
          bgcolor: 'inherit'
        }}
        id="tab"
        component="ul"
        //onClick={handleChange}
        elevation={4}
      >
        {Tabs.map(({val, path, id, icon}) => {
          return (
            <ListItem key={id} >
              <Link href={path}>
              <Chip
                icon={icon}
                label={val }
                sx={{
                  color: index === val ? "white" : 'GrayText',
                  backgroundColor: index === val ? "#6A0DAD" : "white",
                  border: index === val ? "1px solid white" : 'none' ,
                  boxShadow: index === val?  '0px 5px 10px rgba(0, 0, 0, 0.1)' : 'none',
                  textShadow: index === val? '0px 2px 4px rgba(0,0,0,0.2)' : 'none',
                  textRendering: 'optimizeLegibility',
                  "&:hover": { backgroundColor: "#6A0DAD", color: "white" },
                  "&:focus": { backgroundColor: "#6A0DAD", color: "white" },
                  "&:active": { backgroundColor: "#6A0DAD", color: "white" },
                  "& .MuiChip-icon": {
                    color: index === val ? "white" : "gray",
                  },
                }}
                id={id}
                // clickable
              />
              </Link>
            </ListItem>
          );
        })}
      </Paper>
    </section>
  );
};




export default Tab;
