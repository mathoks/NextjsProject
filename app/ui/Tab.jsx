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
import React, { useEffect, useState } from "react";
import { ListItem, Chip, Paper } from "@mui/material";
import { useParams, usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
const Tab = () => {
  const query = useParams();
  const params = new URLSearchParams(query)
  const [index, setIndex] = useState('');
  
  const {replace } = useRouter()
  const pathname = usePathname()
  const handleChange = (e) => {
    e.stopPropagation();
    if (e.target.parentElement.id !== '0') {
      params.set('query', e.target.innerText);
      setIndex(params.get('query'))
    } else {
      params.delete('query');
      setIndex('all Stores')
    }
    
    replace(`${pathname}?${params.toString()}`);
    
  };

  useEffect(() => {
    const { search } = window.location;
    if (search) {
      setIndex(search.split("=")[1]);
    }
    else setIndex('all Stores')
  }, []);
  
  const Tabs = [
    {
      id: 0,
      val: "all Stores",
      icon: <SelectAllOutlined fontSize="small" />,
    },
    { id: 1, val: "phone",  icon: <PhoneAndroid fontSize="small" /> },
    {
      id: 2,
      val: "furniture",
      icon: <ChairAltOutlined fontSize="small" />,
    },
    {
      id: 3,
      val: "fashion",
      icon: <ShoppingBagOutlined fontSize="small" />,
    },
    {
      id: 4,
      val: "machinery",
      icon: <BuildOutlined fontSize="small" />,
    },
    {
      id: 5,
      val: "building-Materials",
      icon: <RoofingOutlined fontSize="small" />,
    },
    {
      id: 6,
      val: "electronics",
      icon: <TvOutlined fontSize="small" />,
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
        onClick={handleChange}
        elevation={4}
      >
        {Tabs.map((data) => {
          return (
            <ListItem key={data.id} >
              <Chip
                icon={data.icon}
                label={data.val}
                sx={{
                  color: index === data.val ? "white" : 'GrayText',
                  backgroundColor: index === data.val ? "#6A0DAD" : "white",
                  border: index === data.val ? "1px solid white" : 'none' ,
                  boxShadow: index === data.val?  '0px 5px 10px rgba(0, 0, 0, 0.1)' : 'none',
                  textShadow: index === data.val? '0px 2px 4px rgba(0,0,0,0.2)' : 'none',
                  textRendering: 'optimizeLegibility',
                  "&:hover": { backgroundColor: "#6A0DAD", color: "white" },
                  "&:focus": { backgroundColor: "#6A0DAD", color: "white" },
                  "&:active": { backgroundColor: "#6A0DAD", color: "white" },
                  "& .MuiChip-icon": {
                    color: index === data.val ? "white" : "gray",
                  },
                }}
                id={data.id}
                clickable={false}
              />
            </ListItem>
          );
        })}
      </Paper>
    </section>
  );
};




export default Tab;
