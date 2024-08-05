"use client";
import React, { memo, useEffect, useState } from "react";
import { Fab } from "@mui/material";
import { CreateOutlined } from "@mui/icons-material";
import PostForm from "../uiForms/postForm";
import { getCategory } from "@/app/lib/actions/getCategory";

export const PostCreate = memo(function Memm({ avatar, userId }){
  const [open, setIsOpen] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setIsLoading] = useState(false);
  const [catda, setcatdat] = useState([]);
  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const getcat = async () => {
      try {
        setIsLoading(true);
        const data = await getCategory();
        setcatdat([...data]);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    if (open) {
      getcat();
    }
  }, [open]);

  const height = typeof window !== "undefined" ? window.innerHeight : 0;
  return (
    <>
      <Fab
        sx={{ bgcolor:'indigo', position: "fixed", bottom: 100, right: "4px" }}
        onClick={toggleOpen}
        
      >
        <CreateOutlined sx={{ color: "white" }} />
      </Fab>

      <PostForm
        isOpen={open}
        toggle={toggleOpen}
        height={height}
        avatar={avatar}
        userId={userId}
        cat={catda}
      />
    </>
  );
});
