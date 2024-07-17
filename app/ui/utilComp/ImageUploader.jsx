"use client";
import React, { useState, useEffect } from "react";
import { AddPhotoAlternate } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { removeBackground } from "modern-rembg/index.mjs";
import { CircularProgress } from "@mui/material";

// const {removeBackground} = dynamic(()=>import('@imgly/background-removal-node') , {ssr: false})
const ImageUploader = () => {
  const [entry, setentry] = useState(0);
  const [entry1, setentry1] = useState(null);
  const [entry2, setentry2] = useState(null);
  const [pics, setpics] = useState(0);
  const [src, setsrc] = useState([
    <AddPhotoAlternate fontSize="large" sx={{ width: 60, height: 60 }} />,
    <AddPhotoAlternate fontSize="large" sx={{ width: 60, height: 60 }} />,
  ]);
  const [label1, setlabel1] = useState("");
  const [label, setlabel] = useState("");
  const [loading, setIsloading] = useState(false);
  const nefor = new FormData
  const handleImage = async (e) => {
    const pic = document?.getElementById(e?.target.id);
    const tog = document?.getElementById("bg");

    for (const file of pic.files) {
      const reader = new FileReader();
      if (reader && e.target.id === "images") {
        setpics(1);
        setIsloading(true);
        reader.onload = (e) => {
          if (entry > 1) setentry(0);
          tog.checked
            ? removeBackground(e.target.result).then((blob) => {
                setIsloading(false);
                setsrc((prev) => [URL.createObjectURL(blob), prev[1]]);
                
                pic.files[0].rm = true;
                
              })
            :  setIsloading(false); setsrc((prev) => [e?.target.result, prev[1]]);
          setlabel(file.name);
          setentry((prev) => ++prev);
        };
      } else {
        setpics(2);
        setIsloading(true);
        reader.onload = (e) => {
          tog.checked
            ? removeBackground(e.target.result).then((blob) => {
                setIsloading(false);
                setsrc((prev) => [prev[0], URL.createObjectURL(blob)]);
                
                setentry1(URL.createObjectURL(blob))
              })
            : setIsloading(false); setsrc((prev) => [prev[0], e?.target.result]);
          setlabel1(file.name);
          setentry((prev) => prev);
        };
      }

      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col space-y-2">
      <span className=" flex flex-col space-y-1 text-gray-800 text-sm w-[97%] text-wrap">
        <pre>{label}</pre>
        <pre>{label1}</pre>
      </span>

      <div className=" flex space-x-2">
        <div className="w-36 h-36  rounded-md relative p-2">
          <Avatar
            src={loading && pics === 1? null : src[0]}
            sx={{ width: 144, height: 144 }}
            className="mx-auto"
            variant="square"
          >
            {loading && pics === 1  ? (
              <CircularProgress />
            ) : (
              <AddPhotoAlternate
                fontSize="large"
                sx={{ width: 60, height: 60 }}
              />
            )}
          </Avatar>

          <input
            id="images"
            name="img1"
            type="file"
            className=" opacity-0 border-none whitespace-nowrap p-0 absolute  overflow-hidden inset-2 bg-orange-700 w-32"
            onChange={handleImage}
          />
        </div>
        <div
          className={`w-36 h-36 relative p-2 rounded-md ${
            entry > 0 && entry <= 2 ? "visible" : "invisible"
          }`}
        >
          <Avatar
            src={loading && pics === 2 ? null : src[1]}
            sx={{ width: 144, height: 144 }}
            className="mx-auto"
            variant="square"
          >
            {loading && pics === 2 ? (
              <CircularProgress />
            ) : (
              <AddPhotoAlternate
                fontSize="large"
                sx={{ width: 60, height: 60 }}
              />
            )}
          </Avatar>

          <input
            id="images2"
            type="file"
            name="img2"
            className="  border-none whitespace-nowrap p-0 absolute  overflow-hidden inset-2 w-32 opacity-0"
            onChange={handleImage}
          />
        </div>
      </div>
      <span className="flex justify-end pt-4 px-2">
        <label className="pr-2">remove background</label>
        <label className="switch">
          <input type="checkbox" id="bg" />
          <span className="slider round"></span>
        </label>
      </span>
    </div>
  );
};

export default ImageUploader;
