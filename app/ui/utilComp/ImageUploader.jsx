"use client";
import React, { useState, useEffect } from "react";
import { AddPhotoAlternate } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { removeBackground } from "modern-rembg/index.mjs";


// const {removeBackground} = dynamic(()=>import('@imgly/background-removal-node') , {ssr: false})
const ImageUploader = () => {
  const [entry, setentry] = useState(0);
  const [src, setsrc] = useState([null, null]);
    const [label1, setlabel1] = useState('')
    const [label, setlabel] = useState('')

  const handleImage = async(e) => {
    console.log(e?.target.id)
    const pic = document?.getElementById(e?.target.id).files;
    const tog = document?.getElementById('bg')
    console.log(tog.checked)
    for (const file of pic) {
      const reader = new FileReader();
      if (reader && e.target.id === 'images') {
        
        reader.onload = (e) => { 
            if(entry > 1)setentry(0);
           tog.checked ? removeBackground(e.target.result).then((blob) => {
        
                setsrc((prev)=>[URL.createObjectURL(blob), prev[1]]);
                
            }) :  setsrc((prev)=>[e?.target.result, prev[1]]);
            setlabel(file.name);
            setentry((prev)=> ++prev);
            }
        } 
        else {
            reader.onload = (e) => { 
                tog.checked ? removeBackground(e.target.result).then((blob) => {
        
                    setsrc((prev)=>[URL.createObjectURL(blob), prev[1]]);
                    
                }) : setsrc((prev)=>[prev[0], e?.target.result]);
                    setlabel1(file.name);
                    setentry((prev)=> prev);
            }
           
        }
        reader.readAsDataURL(file);
        };
    console.log(entry);
  };

  const clear = ()=>{
    // const file1 = document?.getElementById('images')
    // console.log(file1)
    // file2 = document?.getElementById('images2');
    // file2.files = null
    // setentry([null, null])
    setlabel('')
    setlabel1('')
    return
  }

  useEffect(() => {
    if (src === null) setsrc(<AddPhotoAlternate />);
  }, []);

  return (
    <div className="flex flex-col space-y-2">
    <span className=" flex flex-col space-y-1 text-gray-800 text-sm w-[97%] text-wrap">
    <pre>
    {label}
    </pre>
    <pre>
    {label1}
    </pre>
    </span>
    
    <div className=" flex space-x-2">
      <div className="w-36 h-36  rounded-md relative p-2">
        <Avatar src={src[0]} sx={{width:144, height:144}} className="mx-auto ring-1 rounded-md ring-[#6A0DAD]" variant= 'square'  ><AddPhotoAlternate fontSize="large" sx={{width:60, height:60}} /></Avatar>
     
      <input
        id="images"
        type="file"
        className=" opacity-0 border-none whitespace-nowrap p-0 absolute  overflow-hidden inset-2 bg-orange-700 w-32"
        onChange={handleImage}
      />
       </div>
       <div className={`w-36 h-36 relative p-2 rounded-md ${entry > 0 && entry <= 2  ? 'visible' : 'invisible'}`} >
        <Avatar src={src[1]} sx={{width:144, height:144}} className="mx-auto ring-1 rounded-md ring-[#6A0DAD]" variant= 'square'  ><AddPhotoAlternate fontSize="large" sx={{width:60, height:60}} /></Avatar>
     
      <input
        id="images2"
        type="file"
        className="  border-none whitespace-nowrap p-0 absolute  overflow-hidden inset-2 w-32 opacity-0"
        onChange={handleImage}
      />
       </div>
    </div>
    <span className="flex justify-end pt-4 px-2">
     <label className="pr-2">remove background</label>
    <label className="switch">
  <input type="checkbox" id='bg'/>
  <span className="slider round"></span>
</label>
    </span>
    
    </div>
  );
};

export default ImageUploader;
