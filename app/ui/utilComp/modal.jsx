"use client";
import { useAppSelector } from "@/app/lib/hooks/hooks";
import { CallOutlined, CallEndOutlined } from "@mui/icons-material";
import React, { useEffect, useState } from "react";

/**
 *
 * @param {*} props
 * @returns {React.JSX}
 */
function Modal(props = {}) {
  const ObjectLength = Object.keys(props).length;
  const open = useAppSelector((state) => state.modal.show);
  const [child, setchild] = useState("");

  const handleOpen = () => {
    console.log(ObjectLength);
  };

  useEffect(() => {
    
    let modalEl = Object.keys(props).map((tile, id)=> { 
       if( tile.toString() !== "value")
         return (
        <li key={id} value={id}>
          <span className="flex items-center space-x-2 text-[#4f08ed]"><span>{props[tile.toString()].icon}</span><span>{props[tile.toString()].tag}</span> </span>
        </li>
    )})
      setchild(
        modalEl
      );
    
    

    return () => {
      setchild(" ");
    };
  }, []);

  return (
    <div
      className={`absolute flex flex-col opacity-0 shadow-md z-30 bg-white top-8 right-8 p-4 ${open === props["value"] ? "inline-block opacity-100 transition-opacity" : "hidden"}`}
      key={props["value"]}
      id={props["value"]}
    >
      <ul className="flex flex-col space-y-2 w-20 pl-1" onClick={handleOpen}>{child}</ul>
    </div>
  );
}

export default Modal;
