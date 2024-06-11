"use client";
import { useAppSelector } from "@/app/lib/hooks/hooks";
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
          {props[tile.toString()]}
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
      className={`absolute flex flex-col  opacity-0 shadow-md z-30 bg-white top-8 right-8 p-2 ${open === props["value"] ? "inline-block visible opacity-100 transition-opacity" : ""}`}
      key={props["value"]}
      id={props["value"]}
    >
      <ul className="flex flex-col space-y-2 w-20 pl-1" onClick={handleOpen}>{child}</ul>
    </div>
  );
}

export default Modal;
