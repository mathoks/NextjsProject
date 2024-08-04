'use client'
import React, { useEffect, useState } from 'react'
import {Fab} from "@mui/material";
import { CreateOutlined } from '@mui/icons-material';
import PostForm from '../uiForms/postForm';
import { getCategory } from '@/app/lib/actions/getCategory';

export const PostCreate = ({avatar, userId}) => {
    const [open, setIsOpen] = useState(false)
    const [catda, setcatdat] = useState([])
    const toggleOpen = ()=>{
        setIsOpen(prev=>!prev)
    }

    useEffect(()=>{
      
       const getcat = async()=>await getCategory().then((data)=>
        setcatdat([...data]))
      if(open) {
     getcat()
      }
    },[open])

    const height = typeof window !== 'undefined' ? window.innerHeight : 0;
  return (
    <section className=''>
    <Fab sx={{bgcolor: 'indigo', position: 'fixed', bottom: 100, right: '4px'}} onClick={toggleOpen}>
        <CreateOutlined sx={{color: 'white'}}/>
    </Fab>
    <section>
        <PostForm isOpen={open} toggle={toggleOpen} height={height} avatar={avatar} userId={userId} cat = {catda}/>
    </section>
  </section>
  )
}
