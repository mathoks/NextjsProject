"use client";
import React, { useMemo, useState, useRef } from "react";
import { AddAPhoto, Cancel } from "@mui/icons-material";


const ImageEdit = ({ data, trigger , hide}) => {
    
  const [src, setsrc] = useState(["", ""]);
  const [label, setlabel] = useState(["", ""]);
  const [prodId, setprodId] = useState(["", ""]);
  

  function clearFileInput(tag, handler) {
    const id = document.getElementById(tag).dataset.id;
    const fileInput = document.getElementById(tag);
    const newFileInput = document.createElement("input");
    newFileInput.type = "file";
    newFileInput.id = tag;
    newFileInput.name = tag;
    newFileInput.setAttribute("data-id", id);
    newFileInput.addEventListener("change", handler);
    newFileInput.className = "sr-only";
    fileInput.parentNode.replaceChild(newFileInput, fileInput);
    
  }

  const handleImage = (e) => {
    const pic = document?.getElementById(e?.target.id);
    trigger();
    for (const file of pic.files) {
      const reader = new FileReader();
      if (reader && e.target.id === "edit-0") {
       
        reader.onload = (e) => {
            setsrc((prev) => [e?.target.result, prev[1]]);
            setlabel((prev) => {
              prev[0] = file.name;
              return [...prev];
            });
            setprodId((prev) => {
              prev[0] = pic.dataset.id;
              return [...prev];
            });
          
        };
      } else {

        reader.onload = (e) => {
          setsrc((prev) => [prev[0], e?.target.result]);
          setlabel((prev) => {
            prev[1] = file.name;
            return [...prev];
          });
          setprodId((prev) => {
            prev[1] = pic.dataset.id;
            return [...prev];
          });
    
        };
      }
        
      reader.readAsDataURL(file);
    }
   
    setTimeout(()=>trigger(), 200)
  };

  const handleDelete = (e) => {
    if (e.target.id === "0") {
      clearFileInput("edit-0", handleImage);
      setprodId((prev) => { prev[0] = ""; return [...prev]});
    } else {
      clearFileInput("edit-1", handleImage);
      setprodId((prev) => { prev[1] = ""; return [...prev]});
    }
    setsrc((prev) => {
      prev[e.target.id] = "";
      return [...prev];
    });
    setlabel((prev) => {
      prev[e.target.id] = "";
      return [...prev];
    });
    
  };

  const Pictures = useMemo(() => {
    const Image = data.map(({ id, image }, index) => {
      return (
        <div key={index} className="relative w-[16rem]">
          <div className="relative max-w-[16rem]">
            <img
              src={src[index] || image}
              alt={"product image"}
              name={`imgup-${index}`}
              className="w-[16rem] h-[10rem] object-cover rounded-md "
            />
            <div
              className={`absolute bottom-0 right-0 bg-white rounded-tl-md ${
                src[index] !== "" ? "visible" : "invisible"
              }`}
            >
              <Cancel
                className="text-violet-800"
                onClick={handleDelete}
                id={index}
              />
            </div>
            <input type="text" defaultValue={prodId[index]} name={`prodId-${index}`} className="sr-only"/>
          </div>
          <div id="parent">
            <label
              htmlFor={`edit-${index}`}
              className="absolute top-0 left-0 bg-violet-800 text-white p-2 rounded-md cursor-pointer"
            >
              <AddAPhoto />
            </label>

            <input
              type="file"
              id={`edit-${index}`}
              name={`edit-${index}`}
              data-id={`${id}`}
              onChange={handleImage}
              className="sr-only"
              disabled={hide}
            />
          </div>
          <pre className="text-center text-sm text-gray-800 text-wrap">
            {label[index]}
          </pre>
        </div>
      );
    });
    return (
      <div className="flex w-[30rem] overflow-x-scroll space-x-10 px-8">
        {Image}
      </div>
    );
  }, [src[0], src[1], data, label[0], label[1], handleDelete]);

  return <div className="w-[16rem] overflow-x-scroll  mx-auto">{Pictures}</div>;
};

export default ImageEdit;
