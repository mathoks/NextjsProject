"use client"
import React from "react";
import { setModal } from "@/app/lib/features/Modals/modalSlice";
import { useAppDispatch } from "@/app/lib/hooks/hooks";
import { MoreVertOutlined } from "@mui/icons-material";
import { ButtonBase } from "@mui/material";


const HomeMore = ({id}) => {
  const dispatch = useAppDispatch();
  const handleOpen = (e)=>{

    e.stopPropagation();   
     dispatch(setModal(id))
    
  }

  

  return (
    <button onClick={handleOpen} data-fab={id} key={id} aria-label="modal" >
        <MoreVertOutlined  data-fab={id}/>  
    </button>
  );
};

export default HomeMore;
