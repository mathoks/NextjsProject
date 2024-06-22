import { CircularProgress } from '@mui/material'
import React from 'react'

const Loading = () => {
  return (
  
    <div className='bg-white min-h-screen w-full flex justify-center items-center'>
    <CircularProgress size={20} className=' text-white'/>
    </div>
    
    
  )
}

export default Loading
