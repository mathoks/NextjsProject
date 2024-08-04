'use client'
import React, { useCallback, useEffect, useRef, useState, memo, useMemo } from 'react'
import { Box , Drawer, styled, Avatar} from '@mui/material'
import {  CloseOutlined } from '@mui/icons-material'
import  { CategoryList, ProductList } from '@/app/lib/utills/categoryList'
import { useFormState } from 'react-dom'
import { addPost } from '@/app/actions/users/addPost'
// import { auth } from '@/auth'



const PostForm = function Form(props){
    const ref = useRef(null)
    const [data, setdata] = useState([])
    const [state, dispatch] = useFormState(addPost, {});
    const {isOpen, toggle, height, avatar, userId, cat}= props
   const MyDrawer = styled(Drawer)(({ theme }) =>{
  
    return ({
    height: height,
    boxShadow: theme.shadows[0]
   })})

   const handleChange = useCallback((e)=>{
       const coutt = document.getElementById('pre')
       
        if(e.type === 'change'){
        ref.current = e.target.value
        coutt.innerText = `${ref.current.length}/400`
        if(ref.current.length >= 400  ){
            coutt.style.color = 'red'
            document.getElementById('post').setAttribute('disabled', true)
        }
        else if(ref.current.length > 380){
            coutt.style.color = 'orange'
        }
        else if(ref.current.length === 0){
          coutt.innerHTML = ''
          document.getElementById('post').toggleAttribute('disabled', true)
        }
        else {
            coutt.style.color = 'black'
            document.getElementById('post').toggleAttribute('disabled', false)
        }
   } 
  
   },[])

  
 useEffect(()=>{   
  const fetchdata = async()=>{
    
    if(userId !== null ){
    const products = await (await fetch(`http://localhost:3000/api/getProducts/${userId}`)).json()
    
    if(Array.isArray(products.product))
      setdata([...products.product]);
    }
    else return
  }

  fetchdata()
  
 },[])




//    console.log(session)
  return (
    <div>
      <MyDrawer
        anchor='bottom'
        open= {isOpen}
        sx = {{ bgcolor: 'transparent'}}
        elevation={0}
        variant= 'temporary'
      >
      <Box sx={{height: height-50, bottom: 80, bgcolor: 'transparent'}} className='p-4 space-y-8'>
      <form action={dispatch} className='space-y-4'>
<div className='flex justify-between items-center'>

    <CloseOutlined className='text-slate-900' onClick={toggle}/>
    <button id='post' type='submit' disabled  className='px-4 py-1.5 rounded-full bg-indigo-600 text-white font-semibold disabled:bg-indigo-300'>Post</button>
</div>
<div className='flex space-x-1 items-start'>
<Avatar src={avatar || ''} className=' flex-shrink-0'/>

<div className='flex-grow  px-1 overflow-x-scroll no_border2 space-y-4'>
   
        <textarea name='text'  maxLength={400} minLength={10}  id='text' autoFocus aria-label='text area'  placeholder='Share a nugget on shopping' rows={6} className='w-full outline-none text-base p-2 placeholder:pl-2' onChange={handleChange} />
    
    <div className={`space-y-2`}>
        <span className='flex-col'>
        <span className='flex justify-between items-center'>
        <p className='font-semibold'>Tag category</p>
        <pre id='pre'  className='text-[12px]'></pre>
        </span>
        
        <CategoryList cat={cat}/>
        </span>
        <span className='flex justify-between items-center'>
          <p className='font-semibold'>Tag  product</p> 
        </span>
        <ProductList data ={data}/>
    </div>
   
</div>

</div>
 </form>
      </Box>
      </MyDrawer>
    </div>
  )
}

export default PostForm
