'use client'
import React, { useState } from 'react'
import {Fab} from "@mui/material";
import { CreateOutlined } from '@mui/icons-material';
import PostForm from '../uiForms/postForm';

export const PostCreate = ({avatar, userId}) => {
    const [open, setIsOpen] = useState(false)
    const toggleOpen = ()=>{
        setIsOpen(prev=>!prev)
    }
    const height = typeof window !== 'undefined' ? window.innerHeight : 0;
  return (
    <section className=''>
    <Fab sx={{bgcolor: 'indigo', position: 'fixed', bottom: 100, right: '4px'}} onClick={toggleOpen}>
        <CreateOutlined sx={{color: 'white'}}/>
    </Fab>
    <section>
        <PostForm isOpen={open} toggle={toggleOpen} height={height} avatar={avatar} userId={userId}/>
    </section>
  </section>
  )
}
