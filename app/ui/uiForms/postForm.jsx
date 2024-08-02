import React from 'react'
import { Box , Drawer, styled, Avatar} from '@mui/material'
import { Cancel, CancelOutlined, CloseOutlined } from '@mui/icons-material'
// import { auth } from '@/auth'



const PostForm = (props) => {
    // const session = await auth()
    const {isOpen, toggle, height, avatar}= props
   const MyDrawer = styled(Drawer)(({ theme }) =>{
   
    return ({
    height: height,
    boxShadow: theme.shadows[0]
   })})

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
      <Box sx={{height: height-80, bottom: 80, bgcolor: 'transparent'}} className='p-4 space-y-8'>
<div className='flex justify-between items-center'>
    <CloseOutlined className='text-slate-900' onClick={toggle}/>
    <button className='px-4 py-1.5 rounded-full bg-indigo-600 text-white font-semibold'>Post</button>
</div>
<div className='flex space-x-2 items-start'>
<Avatar src={avatar || ''} className=' flex-shrink-0'/>

<div className='flex-grow  px-2'>
    <form>
        <textarea type='text' autoFocus = {isOpen} placeholder='Share a nugget on shopping' rows={10} className='w-full' />
    </form>
    <div className='space-y-2'>
        <span className='flex-col'>
        <p className='font-semibold'>category</p>
        <span className='flex'>

        </span>
        </span>
        <span>
          <p className='font-semibold'>products</p> 
          <span className='flex'>
            
        </span> 
        </span>
    </div>
    <div className='flex justify-between items-center text-slate-900 py-2'>
    <button className='px-4 py-1.5 rounded-full ring-1 font-semibold' >Tag category</button>
    <button className='px-4 py-1.5 rounded-full ring-1 font-semibold'>Tag product</button>
    </div>
</div>
</div>
      </Box>
        <button onClick={toggle}>close</button>
      </MyDrawer>
    </div>
  )
}

export default PostForm
