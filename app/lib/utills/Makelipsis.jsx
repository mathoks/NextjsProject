"use client"
import { Typography } from "@mui/material"
import { useRouter } from "next/navigation"
import React from "react"

/**
 * 
 * @param {*} param0 - object
 * @param {string} text - text to show
 * @param {number} size - size of the text
 * @param {string} flag - flag to show more or less
 * @param {object} sx - style object
 * @returns {jsx}- JSX Element
 */
export const MakeEllipsis = ({text,size, flag, userId})=>{
    const id = React.useId()
    const router = useRouter()
    let value;
    if( text !== undefined){
    if( text?.length <= size && flag)
    value=text
    else if(text?.length > size && flag === "A"){

     value = [...`${text.slice(0, size-1)}${'....'}`,<Typography key={id} sx={{color: "#005B9A", fontSize: 14}} component={"span"} onClick={()=>router.push(`/pages/${encodeURIComponent(userId || 4)}#about`)}> Show more</Typography>]
    }
    else if(text.length > size && flag === "B"){
        value = [...text.slice(0, size-1), '...']
       }
       else {

       }

    
       
     return  <span> <Typography key={id} className="text-sm w-full leading-5">{value}</Typography></span>
      }
      else return <Typography>nothing</Typography>
}