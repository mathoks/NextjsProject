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
      href: "#",
      icon: <SelectAllOutlined fontSize="small" />,
    },
    { id: 1, val: "phone", href: "#", icon: <PhoneAndroid fontSize="small" /> },
    {
      id: 2,
      val: "furniture",
      href: "#",
      icon: <ChairAltOutlined fontSize="small" />,
    },
    {
      id: 3,
      val: "fashion",
      href: "#",
      icon: <ShoppingBagOutlined fontSize="small" />,
    },
    {
      id: 4,
      val: "machinery",
      href: "#",
      icon: <BuildOutlined fontSize="small" />,
    },
    {
      id: 5,
      val: "building-Materials",
      href: "#",
      icon: <RoofingOutlined fontSize="small" />,
    },
    {
      id: 6,
      val: "electronics",
      href: "#",
      icon: <TvOutlined fontSize="small" />,
    },
  ];

  return (
    <section
      className={`flex items-start justify-between  overflow-x-scroll gap-8   pb-0 w-[95%]`}
    >
      <Paper
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "nowrap",
          listStyle: "none",
          // pl: '4px',
          // ml: 4,
          bgcolor: 'inherit'
        }}
        id="tab"
        component="ul"
        onClick={handleChange}
      >
        {Tabs.map((data) => {
          return (
            <ListItem key={data.id}>
              <Chip
                icon={data.icon}
                label={data.val}
                sx={{
                  color: index === data.val ? "white" : "gray",
                  backgroundColor: index === data.val ? "#6A0DAD" : "white",
                  border: "1px solid #6A0DAD",
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
