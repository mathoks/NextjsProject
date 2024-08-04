import React from 'react'
import {Avatar} from '@mui/material'
import { getPost } from '../lib/actions/getPosts'
import { TimeDifference } from '../lib/utills/Timestamp'
import { LinkOutlined, TagOutlined } from '@mui/icons-material'
import Link from 'next/link'


const Post = async() => {
    
    const data = await getPost()
    console.log(data)
    if(!Array.isArray(data) || data.length == 0)
        return <div><p>no post yet</p></div>;
const PostList = ()=> data?.map(({text, author:{store: {businessName, id:ids}}, products, id, categorys, createdAt}, idx)=>{
    console.log(businessName)
    return( 
    <section key={id} className='flex space-x-2'>
    <Avatar className=' flex-grow-0'/>
    <div className='flex flex-col space-y-2 bg-blue-50 rounded p-2 flex-grow'>
        <div className='flex justify-end'>
        <Link href={`/store/${businessName}/${ids}`} className=' underline text-blue-400 hover:text-blue-500'>{businessName}</Link>
        </div>
        <div className=''>
          
          {Array.isArray(categorys) && categorys.length > 0 ? 
          <div className=''> 
         <span className='flex'> <TagOutlined/> <p>tagged categories </p></span>
          <ul className='overflow-x-scroll flex space-x-2 py-2 w-[70vw]'>{categorys.map(({category: {name}}, ids)=> <li key={ids} className='ring-1 rounded-full px-2.5 py-0.5 shadow bg-white text-nowrap  text-blue-500 text-center'>{name}</li>)}</ul>
          </div> : ''}
        
        </div>
        <div>
            <p className='text-slate-900 first-letter:capitalize first-line:font-semibold'>
                {text}
            </p>
        </div>
        <div className='space-y-2'>
        <span className='flex space-x-2'>
        <LinkOutlined className='text-blue-400'/>
        <p>tagged products</p>
        </span>
       
        <div className='flex space-x-2 overflow-x-scroll py-2'>
        {products?.map(({product: {name, storeId}, productId}, ids)=> <Link key={ids} className='ring-1 rounded-full px-2.5 py-0.5 shadow bg-white  text-blue-500 text-center' href={`/store/${storeId}/product/${productId}`}>{name}</Link>)}
        </div>
        </div>
        <TimeDifference timestamp ={createdAt}/>
    </div>
    </section>)

})
  return (
    <div className='flex-col space-y-8'>
      <PostList/>
      
    </div>
  )
}

export default Post
